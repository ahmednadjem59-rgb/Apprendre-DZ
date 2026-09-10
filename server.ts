import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { getFallbackQuestions, get50WeeklyContestQuestions } from "./src/data/fallbackQuestions";

dotenv.config();

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY environment variable is missing.");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// Recommended models prioritizing standard text generation models
const CANDIDATE_MODELS = [
  "gemini-3.8-flash",
  "gemini-flash-latest",
  "gemini-3.1-flash-lite"
];

// In-memory cache to reduce redundant Gemini API requests and avoid rate limits
const apiCache = new Map<string, { data: any, timestamp: number }>();

function getCached(key: string, maxAgeMs = 15 * 60 * 1000): any | null {
  const item = apiCache.get(key);
  if (item && Date.now() - item.timestamp < maxAgeMs) {
    return item.data;
  }
  return null;
}

function setCache(key: string, data: any) {
  if (apiCache.size > 300) {
    const firstKey = apiCache.keys().next().value;
    if (firstKey) apiCache.delete(firstKey);
  }
  apiCache.set(key, { data, timestamp: Date.now() });
}

let lastQuotaErrorTime = 0;

async function generateWithModelFallback(
  ai: GoogleGenAI,
  prompt: string,
  config?: any
) {
  let lastError: any = null;

  for (const model of CANDIDATE_MODELS) {
    // Up to 2 attempts per model with backoff on transient 503 / 429
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: prompt,
          config
        });
        if (response && (response.text !== undefined && response.text !== null)) {
          return response;
        }
      } catch (err: any) {
        lastError = err;
        const errMsg = err?.message || String(err);
        const isQuota = errMsg.includes("429") || errMsg.includes("RESOURCE_EXHAUSTED") || errMsg.includes("quota");
        const is503 = errMsg.includes("503") || errMsg.includes("UNAVAILABLE") || errMsg.includes("high demand");

        if (isQuota) {
          lastQuotaErrorTime = Date.now();
          console.warn(`[Gemini API] Quota reached on model ${model}, trying next model...`);
          break; // move directly to next candidate model
        } else if (is503) {
          console.warn(`[Gemini API] Model ${model} is experiencing temporary high demand (attempt ${attempt + 1}/2)...`);
          if (attempt === 0) {
            // Brief pause before retry
            await new Promise(resolve => setTimeout(resolve, 1000));
            continue;
          }
        } else {
          console.warn(`[Gemini API] Model ${model} error: ${errMsg}`);
          break;
        }
      }
    }
  }

  throw lastError || new Error("All Gemini models failed to generate content.");
}

function parseJSONContent(text: string): any {
  try {
    const cleaned = text.replace(/^```json\n?/, '').replace(/```$/, '').trim();
    return JSON.parse(cleaned);
  } catch (e) {
    const match = text.match(/\[[\s\S]*\]|\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch (e2) {
        // ignore
      }
    }
    return null;
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // 1. Generate Multiple-Choice Questions
  app.post("/api/generate-questions", async (req, res) => {
    try {
      const { level, year, subject, difficulty = "medium", track = "", count = 10, semester } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({ success: false, error: "GEMINI_API_KEY is not configured", questions: [] });
      }

      const difficultyMap: Record<string, string> = {
        easy: "بسيطة ومباشرة في متناول التلميذ المتوسط (تركيز على المفاهيم المباشرة والقواعد الأساسية المقررة)",
        medium: "متوسطة تقيس الفهم المنهجي والتطبيق الدقيق لمكتسبات الدرس حسب التدرج السنوي",
        hard: "متقدمة تتطلب تركيزاً وتحليلاً واستنتاجاً وتطبيقاً متعدد الخطوات حسب برنامج السنة"
      };

      const trackInfo = track ? `الشعبة/المسار: ${track}` : "";
      const semesterInfo = semester ? `الفصل الدراسي: الفصل ${semester}` : "";
      const randomSeed = Math.random().toString(36).substring(2, 7);

      const prompt = `أنت خبير تربوي ومفتش تعليمي جزائري معتمد لدى وزارة التربية الوطنية الجزائرية.
مهمتك الأساسية هي صياغة ${count} أسئلة اختيار من متعدد (QCM) جديدة كلياً وغير مكررة لمادة "${subject}" للمستوى "${level}" وتحديداً لـ "${year}" ${trackInfo} ${semesterInfo} (مستوى الصعوبة: ${difficultyMap[difficulty] || difficultyMap.medium}).
معرف التوليد العشوائي للتنويع اللانهائي: ${randomSeed}.

قواعد تربوية صارمة جداً (Curriculum Compliance):
1. **الالتزام الحرفي بالمنهاج الجزائري الرسمي المعتمد**:
   - يجب أن تكون كل الأسئلة مأخوذة حصراً ومباشرة من الدروس والمفاهيم المقررة التي يدرسها التلميذ فعلياً في "${year}" في المنهاج الجزائري.
   - **يُمنع منعاً باتاً** وضع أسئلة من سنوات دراسية أعلى (مثلاً: لا تضع مفاهيم المتوسط لتلاميذ الابتدائي، ولا تضع مفاهيم الثانوي والاشتقاقية لتلاميذ المتوسط).
   - **يُمنع منعاً باتاً** وضع أسئلة تافهة أو من سنوات أدنى بكثير لا تناسب الفئة العمرية للقسم.
   - إذا تم تحديد "${semesterInfo}"، يجب أن تنتمي الأسئلة حصراً للمقاطع التعلمية والوحدات المقررة في ذلك الفصل حسب التوزيع السنوي الرسمي.

2. **التنويع واللانهاية في الأسئلة (Endless Non-Repeating Generation)**:
   - نوّع في سياق الأسئلة: بين تطبيقات مباشرة، مفاهيم نظرية، استنتاجات، مسائل حسابية، وضعيات بسيطة، وتحليل لغوي/علمي.
   - لا تكرر الأسئلة الشائعة ذاتها في كل مرة، بل استكشف مقاطع ومفاهيم وجوانب مختلفة من المنهاج الدراسي لتلك السنة.

3. **التدرج البيداغوجي ومطابقة الفئة العمرية**:
   - **الطور الابتدائي (1AP - 5AP)**: صياغة لغوية واضحة ومبسطة، مراعاة مستويات القراءة والحساب المقررة لكل سنة (حروف وأرقام صغيرة لـ 1AP-2AP، جداول الضرب والكسور لـ 3AP-4AP، النواسخ والتناسبية لـ 5AP).
   - **الطور المتوسط (1AM - 4AM)**: الالتزام بكفاءات شهادة التعليم المتوسط (BEM)، مثل الأعداد النسبية، PGCD، طالس وفيثاغورس، الدارات، المناعة والوراثة، الجملة المركبة والبدل والتمييز.
   - **الطور الثانوي (1AS - 3AS)**: الالتزام الصارم ببرنامج البكالوريا والتخصص المحدد (علمي، رياضي، أدبي، لغات، تسيير).

4. **شروط السؤال والخيارات**:
   - 4 خيارات متقاربة ومقنعة علمياً ولغوياً، مع إجابة صحيحة واحدة قاطعة لا لبس فيها.
   - شرح نموذجي وافٍ ومبسط في حقل "remedyPlan" يوضح للتلميذ القاعدة والتعليل البيداغوجي الصحيح المعتمد في المدرسة الجزائرية.

أرجع مصفوفة JSON فقط بالشكل التالي:
[{"id": "q_${difficulty}_${Math.random().toString(36).substr(2, 6)}", "text": "نص السؤال الدقيق", "options": ["خيار 1", "خيار 2", "خيار 3", "خيار 4"], "correctAnswer": 0, "remedyPlan": "الشرح البيداغوجي المفصل للإجابة الصحيحة"}]`;

      const response = await generateWithModelFallback(ai, prompt, {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.NUMBER },
              remedyPlan: { type: Type.STRING }
            },
            required: ["id", "text", "options", "correctAnswer", "remedyPlan"]
          }
        }
      });

      const parsed = parseJSONContent(response.text || "[]");
      const generated = Array.isArray(parsed) ? parsed : [];
      return res.json({ success: true, questions: generated.length > 0 ? generated : getFallbackQuestions(subject, count, difficulty) });
    } catch (err: any) {
      console.warn("API /api/generate-questions handled error gracefully:", err?.message || err);
      const fallback = getFallbackQuestions(req.body?.subject || "general", req.body?.count || 10, req.body?.difficulty || "medium");
      return res.status(200).json({ success: true, fallback: true, questions: fallback });
    }
  });

  // 2. Generate Contest Questions
  app.post("/api/generate-contest-questions", async (req, res) => {
    const { level, count = 25, isAcademic = false } = req.body || {};
    const cacheKey = `contest_${level || 'all'}_${isAcademic ? 'acad' : 'gen'}_${count}`;

    // Return cached questions if available within 30 minutes
    const cached = getCached(cacheKey, 30 * 60 * 1000);
    if (cached && Array.isArray(cached) && cached.length >= count) {
      return res.json({ success: true, questions: cached.slice(0, count) });
    }

    try {
      const ai = getGeminiClient();
      if (!ai) {
        const full50 = get50WeeklyContestQuestions(level);
        const fallbackQuestions = isAcademic ? full50.slice(25, 50) : full50.slice(0, 25);
        return res.status(200).json({ success: true, fallback: true, questions: fallbackQuestions.slice(0, count) });
      }

      const typePrompt = isAcademic
        ? "أسئلة دراسية متنوعة من المنهاج الدراسي الجزائري (رياضيات، علوم طبيعية، فيزياء، لغة عربية، تاريخ وجغرافيا، إسلامية، لغات أجنبية، فلسفة)"
        : "أسئلة ثقافة عامة مشوقة (تاريخ الجزائر، جغرافيا العالم والعالم العربي، العلوم والاكتشافات، الحضارة الإسلامية، الرياضة، الفلك، ألغاز ومعلومات عامة)";

      const prompt = `أنت خبير مسابقات تعليمية وثقافية جزائري. قم بإنشاء ${count} أسئلة لمسابقة "بطل الخميس الأسبوعية".
المطلوب في هذه الدفعة: ${typePrompt}.
المستوى المستهدف: ${level || 'جميع الأطوار التعليمية'}.
يجب أن تكون الأسئلة مشوقة، واضحة، دقيقة علمياً وباللغة العربية، مع 4 خيارات وإجابة صحيحة محددة وشرح مختصر.
أرجع JSON فقط: [{"id": "contest_${isAcademic ? 'acad' : 'gen'}_${Math.random().toString(36).substr(2, 5)}", "text": "نص السؤال", "options": ["أ", "ب", "ج", "د"], "correctAnswer": 0, "remedyPlan": "شرح الإجابة الصحيحة"}]`;

      const response = await generateWithModelFallback(ai, prompt, {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.NUMBER },
              remedyPlan: { type: Type.STRING }
            },
            required: ["id", "text", "options", "correctAnswer", "remedyPlan"]
          }
        }
      });

      const parsed = parseJSONContent(response.text || "[]");
      const generated = Array.isArray(parsed) ? parsed : [];
      if (generated.length >= Math.min(10, count)) {
        setCache(cacheKey, generated);
        return res.json({ success: true, questions: generated });
      }

      // If response had too few questions, supplement from verified contest bank
      const full50 = get50WeeklyContestQuestions(level);
      const fallbackQuestions = isAcademic ? full50.slice(25, 50) : full50.slice(0, 25);
      const combined = [...generated, ...fallbackQuestions].slice(0, count);
      setCache(cacheKey, combined);
      return res.json({ success: true, questions: combined });
    } catch (err: any) {
      console.warn("API /api/generate-contest-questions gracefully serving contest questions fallback:", err?.message || err);
      const full50 = get50WeeklyContestQuestions(level);
      const fallbackQuestions = isAcademic ? full50.slice(25, 50) : full50.slice(0, 25);
      return res.status(200).json({ success: true, fallback: true, questions: fallbackQuestions.slice(0, count) });
    }
  });

  // 3. Generate Exercises
  app.post("/api/generate-exercises", async (req, res) => {
    try {
      const { subject, year, topic } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({ success: false, error: "GEMINI_API_KEY is not configured", exercises: [] });
      }

      const prompt = `أنت أستاذ خبير في المنهاج التعليمي الجزائري. قم بتوليد 5 تمارين تفاعلية (أسئلة اختيار من متعدد) لمادة ${subject} للسنة ${year}${topic ? ` حول موضوع: ${topic}` : ''}.
يجب أن تكون الأسئلة متنوعة، دقيقة علمياً، وتتبع نمط الامتحانات الرسمية الجزائرية مع شرح وافٍ.`;

      const response = await generateWithModelFallback(ai, prompt, {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING, description: "نص السؤال باللغة العربية" },
              options: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "4 خيارات للإجابة"
              },
              correctAnswerIndex: { type: Type.INTEGER, description: "مؤشر الإجابة الصحيحة (0-3)" },
              explanation: { type: Type.STRING, description: "شرح مبسط وواضح للإجابة الصحيحة" }
            },
            required: ["question", "options", "correctAnswerIndex", "explanation"]
          }
        }
      });

      const parsed = parseJSONContent(response.text || "[]");
      return res.json({ success: true, exercises: Array.isArray(parsed) ? parsed : [] });
    } catch (err: any) {
      console.warn("API /api/generate-exercises handled error gracefully:", err?.message || err);
      return res.status(200).json({ success: false, error: err?.message || "Failed to generate exercises", exercises: [] });
    }
  });

  // 4. Generate Study Plan
  app.post("/api/generate-study-plan", async (req, res) => {
    try {
      const { subject, mistakes } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({ success: false, plan: "تعذر إنشاء خطة دراسية حالياً." });
      }

      const mistakesText = Array.isArray(mistakes)
        ? mistakes.map((m: any, i: number) => `${i + 1}. السؤال: ${m.question}\nإجابتك: ${m.userAnswer}\nالإجابة الصحيحة: ${m.correctAnswer}`).join('\n\n')
        : "";

      const prompt = `كخبير تعليمي جزائري، بناءً على الأخطاء التالية التي ارتكبها الطالب في مادة ${subject}، قم بإنشاء خطة دراسية تشخيصية وعلاجية مبسطة ومشجعة (Markdown).
لا تبدأ المقدمة بعبارات ترحيبية مثل "أهلاً بك بني الطالب" أو "ابنتي الطالبة"، ادخل مباشرة في النصائح والمفاهيم.
الأخطاء:\n${mistakesText}\n\nركز على توضيح المفاهيم التي يبدو أن الطالب يواجه صعوبة فيها، وقدم نصائح عملية للتحسن.`;

      const response = await generateWithModelFallback(ai, prompt);

      return res.json({ success: true, plan: response.text || "خطة دراسية جاهزة للنجاح!" });
    } catch (err: any) {
      console.warn("API /api/generate-study-plan handled error gracefully:", err?.message || err);
      return res.status(200).json({ success: false, error: err?.message || "Failed to generate study plan", plan: "واصل المذاكرة والتدريب، النجاح حليفك!" });
    }
  });

  // 5. Generate Lesson Index
  app.post("/api/generate-lesson-index", async (req, res) => {
    try {
      const { level, year, subject, track, semester } = req.body;
      const cacheKey = `idx_${level}_${year}_${subject}_${track}_${semester}`;
      const cached = getCached(cacheKey, 60 * 60 * 1000); // 1 hour cache
      if (cached) {
        return res.json({ success: true, index: cached });
      }

      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({ success: false, index: [] });
      }

      const trackInfo = track ? `تخصص ${track}` : '';
      const semesterInfo = semester ? `الفصل الدراسي ${semester}` : '';
      const prompt = `أنت خبير مناهج جزائري ملم ببرنامج وزارة التربية الوطنية. 
قم بإنشاء قائمة فهرس مفصلة لدروس مادة ${subject} في ${level} (${year}) ${trackInfo} ${semesterInfo}.
يجب أن تتضمن القائمة عناوين الدروس الحقيقية وليس فقط أسماء المقاطع الكبرى.
أرجع النتيجة بصيغة JSON فقط:
[{"title": "عنوان الدرس الدقيق", "description": "وصف محتوى الدرس في جملة واحدة"}]`;

      const response = await generateWithModelFallback(ai, prompt, {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["title", "description"]
          }
        }
      });

      const parsed = parseJSONContent(response.text || "[]");
      const result = Array.isArray(parsed) ? parsed : [];
      if (result.length > 0) {
        setCache(cacheKey, result);
      }
      return res.json({ success: true, index: result });
    } catch (err: any) {
      console.warn("API /api/generate-lesson-index handled error gracefully:", err?.message || err);
      return res.status(200).json({ success: false, error: err?.message || "Failed to generate lesson index", index: [] });
    }
  });

  // 6. Generate Single Lesson Content
  app.post("/api/generate-lesson", async (req, res) => {
    try {
      const { level, year, subject, lessonTitle, track, semester } = req.body;
      const cacheKey = `les_${level}_${year}_${subject}_${lessonTitle}_${track}_${semester}`;
      const cached = getCached(cacheKey, 2 * 60 * 60 * 1000); // 2 hours cache
      if (cached) {
        return res.json({ success: true, content: cached });
      }

      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({ success: false, content: "تعذر تحميل الدرس." });
      }

      const trackInfo = track ? `تخصص ${track}` : '';
      const semesterInfo = semester ? `الفصل ${semester}` : '';
      const prompt = `أنت خبير تعليمي جزائري متخصص في مادة ${subject}. 
قم بتقديم شرح أكاديمي مفصل وشامل لدرس "${lessonTitle}" لمستوى ${level} (${year}) ${trackInfo} ${semesterInfo}.

الشرح يجب أن يتضمن:
1. مقدمة تعريفية.
2. عناصر الدرس مشروحة بالتفصيل.
3. أمثلة تطبيقية متنوعة من الواقع أو تمارين محلولة.
4. قاعدة أو خلاصة "أتذكر".
5. ملاحظات هامة أو أخطاء شائعة يجب تجنبها.

استخدم لغة عربية فصيحة وسهلة الفهم، ونسق المحتوى بشكل احترافي باستخدام Markdown.
تأكد من مطابقة الشرح للمقرر الدراسي الرسمي المعتمد في الجزائر.`;

      const response = await generateWithModelFallback(ai, prompt);
      const content = response.text || "محتوى الدرس قيد التحضير...";
      if (content && content.length > 20) {
        setCache(cacheKey, content);
      }
      return res.json({ success: true, content });
    } catch (err: any) {
      console.warn("API /api/generate-lesson handled error gracefully:", err?.message || err);
      return res.status(200).json({ success: false, error: err?.message || "Failed to generate lesson", content: "حدث خطأ أثناء تحميل الدرس. يرجى المحاولة لاحقاً." });
    }
  });

  // 7. Generate Revision Content
  app.post("/api/generate-revision", async (req, res) => {
    try {
      const { level, year, subject, track, semester } = req.body;
      const cacheKey = `rev_${level}_${year}_${subject}_${track}_${semester}`;
      const cached = getCached(cacheKey, 2 * 60 * 60 * 1000); // 2 hours cache
      if (cached) {
        return res.json({ success: true, content: cached });
      }

      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({ success: false, content: "تعذر تحميل المراجعة." });
      }

      const trackInfo = track ? `تخصص ${track}` : '';
      const semesterInfo = semester ? `الفصل ${semester}` : '';
      const prompt = `أنت خبير تعليمي جزائري. قم بتقديم ملخص مراجعة شامل ومركز لجميع دروس مادة ${subject} المقررة في ${semesterInfo} لمستوى ${level} (${year}) ${trackInfo}.
يجب أن يكون الملخص بمثابة "مراجعة نهائية" تتضمن القواعد الذهبية، القوانين الأساسية، وأهم التعريفات المتكررة في الامتحانات والشهادات الرسمية (BEM/BAC).
استخدم تنسيق Markdown المنظم جداً.`;

      const response = await generateWithModelFallback(ai, prompt);
      const content = response.text || "ملخص المراجعة قيد التحضير...";
      if (content && content.length > 20) {
        setCache(cacheKey, content);
      }
      return res.json({ success: true, content });
    } catch (err: any) {
      console.warn("API /api/generate-revision handled error gracefully:", err?.message || err);
      return res.status(200).json({ success: false, error: err?.message || "Failed to generate revision", content: "حدث خطأ أثناء تحميل المراجعة. يرجى المحاولة لاحقاً." });
    }
  });

  // 8. AI Study Assistant Chat
  app.post("/api/chat-tutor", async (req, res) => {
    try {
      const { message, level, year, subject } = req.body;
      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({ 
          success: true, 
          reply: "مرحباً بك! أنا مساعدك الدراسي الذكي في منصة Apprendre. يمكنك طرح أي سؤال في المناهج الجزائرية وسأشرحه لك بدقة وخطوة بخطوة." 
        });
      }

      const contextInfo = [
        level ? `المرحلة: ${level}` : '',
        year ? `السنة: ${year}` : '',
        subject ? `المادة: ${subject}` : ''
      ].filter(Boolean).join(' | ');

      const prompt = `أنت "المساعد الدراسي الذكي" في تطبيق Apprendre التعليمي الجزائري. أنت معلم خبير وصبور يشرح بأسلوب واضح وبسيط ومشجع ومبني على منهاج وزارة التربية الوطنية الجزائرية.
${contextInfo ? `بيانات التلميذ: ${contextInfo}` : ''}
السؤال أو الرسالة:
"${message}"

المطلوب:
1. إجابة مباشرة، علمية ودقيقة ومنسقة بنقاط واضحة بتنسيق Markdown.
2. إذا تضمن السؤال مسألة حسابية أو لغوية أو علمية، اشرح طريقة الحل بالتفصيل مع التعليل.
3. اختم بتشجيع أو نصيحة ذهبية تزيد ثقة التلميذ بنفسه.`;

      const response = await generateWithModelFallback(ai, prompt);
      const reply = response.text || "أنا هنا لمساعدتك! ما هو السؤال أو التمرين الذي ترغب في حله؟";
      return res.json({ success: true, reply });
    } catch (err: any) {
      console.warn("API /api/chat-tutor handled error gracefully:", err?.message || err);
      return res.status(200).json({ 
        success: true, 
        reply: "أهلاً بك يا بطل! أنا جاهز لمساعدتك في أي سؤال تعليمي في الرياضيات، العلوم، الفيزياء، اللغات أو المواد الأدبية. اكتب سؤالك بدقة وسأساعدك فوراً." 
      });
    }
  });

  // Google Search Console HTML Verification File
  app.get("/google6256aebe573a00f2.html", (_req, res) => {
    res.type("text/html").send("google-site-verification: google6256aebe573a00f2.html");
  });

  // Sitemap.xml
  app.get("/sitemap.xml", (_req, res) => {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    res.type("application/xml").sendFile(sitemapPath);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
