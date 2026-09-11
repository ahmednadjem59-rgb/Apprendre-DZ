import { Question, Difficulty } from "../types";

export const FALLBACK_QUESTIONS: Record<string, Question[]> = {
  "اللغة العربية": [
    {
      id: "ar-1",
      text: "ما هو الفعل الذي يدل على حدث وقع في زمن مضى؟",
      options: ["الفعل المضارع", "الفعل الماضي", "فعل الأمر", "المصدر"],
      correctAnswer: 1,
      difficulty: "easy",
      remedyPlan: "الفعل الماضي يدل على حدث وقع وانتهى قبل زمن التكلم (مثل: كتبَ، درسَ)."
    },
    {
      id: "ar-2",
      text: "ما هي علامة رفع الأسماء الخمسة (أبو، أخو، حمو، فو، ذو)؟",
      options: ["الضمة", "الألف", "الواو", "النون"],
      correctAnswer: 2,
      difficulty: "medium",
      remedyPlan: "تُرفع الأسماء الخمسة بالواو وتُنصب بالألف وتُجر بالياء."
    },
    {
      id: "ar-3",
      text: "ما نوع الصورة البيانية في قولنا: 'ابتسمتِ الحياةُ في وجهه'؟",
      options: ["تشبيه بليغ", "استعارة مكنية", "استعارة تصريحية", "كناية"],
      correctAnswer: 1,
      difficulty: "medium",
      remedyPlan: "حذف المشبه به (الإنسان) ورُمز له بشيء من لوازمه (الابتسامة) على سبيل الاستعارة المكنية."
    },
    {
      id: "ar-4",
      text: "إعراب كلمة 'كلها' في جملة: 'قرأتُ القصةَ كلَّها':",
      options: ["توكيد معنوي منصوب", "بدل منصوب", "نعت منصوب", "مفعول به ثانٍ"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "كلمة (كل) المضافة إلى ضمير المؤكد تتبع ما قبلها في الإعراب وهي هنا توكيد معنوي منصوب."
    },
    {
      id: "ar-5",
      text: "ما هو جمع كلمة 'سماء' جمع مؤنث سالماً؟",
      options: ["سماوات أو سماءات", "أسمية", "سمايات", "سموم"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "همزة سماء منقلبة عن أصل (سمو)، فيجوز إبقاؤها أو قلبها واواً (سماوات / سماءات)."
    },
    {
      id: "ar-6",
      text: "البحر الشعري الذي وزنه 'مستفعلن فاعلن مستفعلن فاعلن' هو:",
      options: ["البحر البسيط", "البحر الطويل", "البحر الكامل", "بحر الوافر"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "وزن البحر البسيط هو: مستفعلن فاعلن مستفعلن فاعلن في كل شطر."
    },
    {
      id: "ar-7",
      text: "ما هو إعراب 'المجتهدُ' في جملة 'إنّ التلميذَ المجتهدَ فائزٌ'؟",
      options: ["نعت (صفة) منصوب", "خبر إن مرفوع", "اسم إن ثانٍ", "مفعول به"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "المجتهد يصف التلميذ ويطابقه في الإعراب والتعريف والتذكير، فهو نعت منصوب."
    },
    {
      id: "ar-8",
      text: "المحسن البديعي في جملة: 'يوم تقوم الساعة يُقسم المجرمون ما لبثوا غير ساعة' هو:",
      options: ["جناس تام", "جناس ناقص", "طباق إيجاب", "مقابلة"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "اتفق اللفظان (الساعة / ساعة) في الحروف والترتيب والشكل مع اختلاف المعنى (يوم القيامة / الوقت)، فهو جناس تام."
    },
    {
      id: "ar-9",
      text: "تُبنى الأفعال الماضية على الضم إذا اتصلت بها:",
      options: ["واو الجماعة", "تاء الفاعل", "نون النسوة", "ألف الاثنين"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "يبنى الفعل الماضي على الضم عند اتصاله بواو الجماعة مثل: (كتبُوا، درسُوا)."
    },
    {
      id: "ar-10",
      text: "ما نوع الأسلوب في جملة: 'لا تؤجل عمل اليوم إلى الغد'؟",
      options: ["إنشائي طلبي (نهي)", "إنشائي غير طلبي (قسم)", "خبري منفي", "إنشائي طلبي (أمر)"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "الأسلوب الإنشائي الطلبي يشمل الأمر والنهي والاستفهام والتمني والنداء. هنا بصيغة النهي."
    },
    {
      id: "ar-11",
      text: "في جملة 'يا طالبَ العلمِ اجتهد'، نوع المنادى وحكمه الإعرابي:",
      options: ["منادى مضاف منصوب", "منادى شبيه بالمضاف مبني", "منادى نكرة مقصودة مبني", "منادى علم مفرد"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "طالبَ العلمِ منادى مضاف، وحكم المنادى المضاف والشبيه بالمضاف والنكرة غير المقصودة هو النصب."
    },
    {
      id: "ar-12",
      text: "الاسم الممنوع من الصرف لعلة واحدة من بين الآتي هو:",
      options: ["مساجد (صيغة منتهى الجموع)", "أحمد (علم على وزن الفعل)", "فاطمة (علم مؤنث)", "عمر (علم على وزن فُعَل)"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "يمنع الاسم من الصرف لعلة واحدة إذا كان على صيغة منتهى الجموع أو مختوماً بألف التأنيث المقصورة أو الممدودة."
    },
    {
      id: "ar-13",
      text: "ما نوع الفعل 'استخرجَ' من حيث عدد الحروف المجردة والمزيدة؟",
      options: ["فعل سداسي مزيد بثلاثة أحرف", "فعل خماسي مزيد بحرفين", "فعل رباعي مجرد", "فعل ثلاثي مجرد"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "أصل الفعل (خرج) زيدت عليه أحرف (الهمزة، السين، التاء) فهو مزيد بثلاثة أحرف."
    },
    {
      id: "ar-14",
      text: "ما المحل الإعرابي لجملة (يكتب الدرس) في: 'رأيتُ التلميذَ يكتبُ الدرسَ'؟",
      options: ["جملة فعلية في محل نصب حال", "جملة في محل رفع خبر", "جملة في محل نصب مفعول به", "لا محل لها من الإعراب"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "القاعدة: الجمل بعد المعارف أحوال، وبعد النكرات صفات. والتلميذ معرفة، فالجملة حالية."
    },
    {
      id: "ar-15",
      text: "الاسم الجامد الذي يدل على ذات غير مشتقة هو:",
      options: ["رجل", "كاتب", "مكتوب", "مكتبة"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "الاسم الجامد نوعان: اسم ذات (مثل رجل، شمس) واسم معنى وهو المصدر."
    }
  ],

  "الرياضيات": [
    {
      id: "math-1",
      text: "ما هي قيمة π (باي) التقريبية؟",
      options: ["2.14", "3.14", "3.41", "4.13"],
      correctAnswer: 1,
      difficulty: "easy",
      remedyPlan: "π هي نسبة محيط الدائرة إلى قطرها، وقيمتها التقريبية هي 3.14 أو 22/7."
    },
    {
      id: "math-2",
      text: "حل المعادلة 2x + 6 = 14 هو:",
      options: ["x = 3", "x = 4", "x = 5", "x = 8"],
      correctAnswer: 1,
      difficulty: "easy",
      remedyPlan: "2x = 14 - 6 = 8، إذن x = 8 / 2 = 4."
    },
    {
      id: "math-3",
      text: "ما هو القاسم المشترك الأكبر (PGCD) للعددين 48 و 18؟",
      options: ["2", "4", "6", "9"],
      correctAnswer: 2,
      difficulty: "medium",
      remedyPlan: "قواسم 48: (1, 2, 3, 4, 6, 8, 12, 16, 24, 48). قواسم 18: (1, 2, 3, 6, 9, 18). أكبر قاسم مشترك هو 6."
    },
    {
      id: "math-4",
      text: "مشتقة الدالة f(x) = 3x² - 5x + 4 هي:",
      options: ["f'(x) = 6x - 5", "f'(x) = 3x - 5", "f'(x) = 6x + 4", "f'(x) = x³ - 5"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "مشتقة xⁿ هي n·xⁿ⁻¹، إذن مشتقة 3x² هي 6x، ومشتقة -5x هي -5."
    },
    {
      id: "math-5",
      text: "في مثلث قائم الزاوية، إذا كان طولا الضلعين القائمين 3cm و 4cm فإن طول الوتر هو:",
      options: ["5 cm", "6 cm", "7 cm", "8 cm"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "حسب مبرهنة فيثاغورس: الوتر² = 3² + 4² = 9 + 16 = 25، إذن الوتر = √25 = 5."
    },
    {
      id: "math-6",
      text: "نهاية الدالة f(x) = (sin x) / x عندما يؤول x إلى 0 هي:",
      options: ["0", "1", "+∞", "غير معرفة"],
      correctAnswer: 1,
      difficulty: "hard",
      remedyPlan: "نهاية شهيرة: lim (x->0) [sin(x)/x] = 1."
    },
    {
      id: "math-7",
      text: "إذا كانت المتتالية الحسابية (Uₙ) حدها الأول U₀ = 2 وأساسها r = 3، فإن U₅ يساوي:",
      options: ["15", "17", "18", "20"],
      correctAnswer: 1,
      difficulty: "medium",
      remedyPlan: "عبارة الحد العام: Uₙ = U₀ + n·r، إذن U₅ = 2 + 5(3) = 2 + 15 = 17."
    },
    {
      id: "math-8",
      text: "مجموع زوايا أي مثلث في الهندسة الإقليدية المستوية يساوي:",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: 1,
      difficulty: "easy",
      remedyPlan: "مجموع قياسات الزوايا الداخلية لأي مثلث يساوي دائماً 180 درجة."
    },
    {
      id: "math-9",
      text: "ما هو حل المتراجحة: 3x - 5 > 7؟",
      options: ["x > 4", "x < 4", "x > 12", "x < 2"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "3x > 7 + 5 => 3x > 12 => x > 12/3 => x > 4."
    },
    {
      id: "math-10",
      text: "العدد المركب z = 1 + i، طويلته |z| تساوي:",
      options: ["1", "√2", "2", "i"],
      correctAnswer: 1,
      difficulty: "hard",
      remedyPlan: "طويلة العدد المركب a + bi هي √(a² + b²)، إذن √(1² + 1²) = √2."
    },
    {
      id: "math-11",
      text: "إذا كان cos(α) = 1/2 لزاوية حادة α، فإن قياس الزاوية α بالدرجات هو:",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: 2,
      difficulty: "medium",
      remedyPlan: "cos(60°) = 1/2 و sin(30°) = 1/2."
    },
    {
      id: "math-12",
      text: "ما هي الدالة الأصلية للدالة f(x) = 2x + 3 على R؟",
      options: ["F(x) = x² + 3x + c", "F(x) = 2x² + 3x", "F(x) = x² + 3", "F(x) = 2 + c"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "الدالة الأصلية لـ 2x هي x² ولـ 3 هي 3x، فتكون F(x) = x² + 3x + c."
    },
    {
      id: "math-13",
      text: "في تجربة إلقاء نرد متوازن ذي 6 أوجه، احتمال الحصول على عدد زوجي هو:",
      options: ["1/6", "1/3", "1/2", "2/3"],
      correctAnswer: 2,
      difficulty: "easy",
      remedyPlan: "الأعداد الزوجية هي {2, 4, 6} (3 إمكانيات من 6)، إذن الاحتمال 3/6 = 1/2."
    },
    {
      id: "math-14",
      text: "النشر والتبسيط للمتطابقة الشهيرة (a - b)² هو:",
      options: ["a² - 2ab + b²", "a² - b²", "a² + 2ab + b²", "a² + b²"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "(a - b)² = a² - 2ab + b² وهي المتطابقة الشهيرة رقم 2."
    },
    {
      id: "math-15",
      text: "إذا كانت f(x) = ln(x)، فإن مشتقتها f'(x) على المجال ]0, +∞[ هي:",
      options: ["1/x", "e^x", "x", "1/x²"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "مشتقة دالة اللوغاريتم النيبري ln(x) هي 1/x."
    }
  ],

  "العلوم الطبيعية": [
    {
      id: "sci-1",
      text: "ما هي العضية الخلوية المسؤولة عن تحويل الطاقة وإنتاج ATP في الخلية؟",
      options: ["الميتوكوندريا", "جهاز غولجي", "الريبوزومات", "الجسيمات الحالة"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "الميتوكوندريا هي محطة توليد الطاقة في الخلية وتحدث بها تفاعلات التنفس الخلوي."
    },
    {
      id: "sci-2",
      text: "ما هو ناتج عملية التركيب الضوئي المطروح في الجو؟",
      options: ["غاز ثاني أكسيد الكربون", "غاز الأكسجين O₂", "غاز الآزوت", "بخار الزئبق"],
      correctAnswer: 1,
      difficulty: "easy",
      remedyPlan: "أثناء التركيب الضوئي يمتص النبات CO₂ ويطرح غاز الأكسجين O₂."
    },
    {
      id: "sci-3",
      text: "ما هي القاعدة النيتروجينية التي توجد في الـ RNA ولا توجد في الـ DNA؟",
      options: ["اليوراسيل (U)", "الثايمين (T)", "الأدينين (A)", "السيتوزين (C)"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "اليوراسيل (U) يميز الـ RNA، بينما الثايمين (T) يوجد فقط في الـ DNA."
    },
    {
      id: "sci-4",
      text: "تنتقل الرسالة العصبية على طول الليف العصبي على شكل:",
      options: ["تيار كهربائي مستمر", "كمونات عمل", "إشارات ضوئية", "هرمونات كيميائية"],
      correctAnswer: 1,
      difficulty: "medium",
      remedyPlan: "الرسالة العصبية تنتقل على شكل موجات زوال استقطاب (كمونات عمل)."
    },
    {
      id: "sci-5",
      text: "الزمرة الدموية التي تعتبر 'معطي عام' في نقل الكريات الحمراء هي:",
      options: ["O-", "AB+", "A+", "B-"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "الزمرة O السالبة لا تحتوي على مولدات ضد على غشاء الكريات الحمراء، لذلك تمنح للجميع."
    },
    {
      id: "sci-6",
      text: "الإنزيم المسؤول عن هضم البروتينات في المعدة في وسط حمضي هو:",
      options: ["البيبسين", "الأميلاز", "المالتاز", "الليباز"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "البيبسين إنزيم معدي يفكك البروتينات إلى ببتيدات وسلاسل ببتيدية في وسط حامضي."
    },
    {
      id: "sci-7",
      text: "تتم عملية ترجمة الـ ARNm إلى سلاسل بروتينية على مستوى:",
      options: ["الريبوزومات في الهيولى", "النواة", "الغشاء الهيولي", "الفجوة العصارية"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "الاستنساخ يتم داخل النواة، بينما الترجمة تتم في الهيولى بواسطة الريبوزومات."
    },
    {
      id: "sci-8",
      text: "الخلايا اللمفاوية المسؤولة عن المناعة النوعية الخلطية وإنتاج الأجسام المضادة هي:",
      options: ["اللمفاويات البائية (LB)", "اللمفاويات التائية (LT8)", "البالعات الكبيرة فقط", "كريات الدم الحمراء"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "اللمفاويات LB تتمايز إلى خلايا بلازمية مفرزة للأجسام المضادة (مناعة خلطية)."
    },
    {
      id: "sci-9",
      text: "المغذيات الناتجة عن هضم الدسم (الليبيدات) تسلك بعد الامتصاص المعوي الطريق:",
      options: ["اللمفاوي (البلغمي)", "الدموي عبر الكبد", "البولي", "التنفسي"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "الأحماض الدسمة والغليسيرول تسلك الطريق اللمفاوي، بينما السكريات البسيطة والأحماض الأمينية تسلك الطريق الدموي."
    },
    {
      id: "sci-10",
      text: "عدد الصبغيات في المشيج الذكري أو الأنثوي عند الإنسان هو:",
      options: ["23 صبغي (أحادي الصيغة n)", "46 صبغي (ثنائي الصيغة 2n)", "22 صبغي", "44 صبغي"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "الأمشاج تنتج عن انقسام منصف فتحتوي على نصف عدد الصبغيات (n = 23 صبغي)."
    }
  ],

  "العلوم الفيزيائية": [
    {
      id: "phy-1",
      text: "ما هي وحدة قياس شدة التيار الكهربائي في النظام الدولي (SI)؟",
      options: ["الفولت (V)", "الأوم (Ω)", "الأمبير (A)", "الواط (W)"],
      correctAnswer: 2,
      difficulty: "easy",
      remedyPlan: "يقاس التيار الكهربائي بالأمبير (A) باستخدام جهاز الأمبيرمتر."
    },
    {
      id: "phy-2",
      text: "حسب قانون أوم، التوتر الكهربائي U يساوي:",
      options: ["U = R / I", "U = R × I", "U = I / R", "U = R + I"],
      correctAnswer: 1,
      difficulty: "easy",
      remedyPlan: "قانون أوم: التوتر (U) = المقاومة (R) × شدة التيار (I)."
    },
    {
      id: "phy-3",
      text: "طاقة الحركة (الحركية) لجسم كتلته m وسرعته v تعطى بالعلاقة:",
      options: ["Ec = m · v", "Ec = 1/2 · m · v²", "Ec = m · g · h", "Ec = 1/2 · m² · v"],
      correctAnswer: 1,
      difficulty: "medium",
      remedyPlan: "الطاقة الحركية: Ec = (1/2) · m · v² حيث m الكتلة بالكيلوغرام و v السرعة بالمتر/ثانية."
    },
    {
      id: "phy-4",
      text: "الرمز الكيميائي لذرة النحاس هو:",
      options: ["Cu", "Ca", "Co", "Cl"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "النحاس رمزه Cu مشتق من اللاتينية Cuprum، بينما Ca هو الكالسيوم و Cl هو الكلور."
    },
    {
      id: "phy-5",
      text: "تفاعل المعايرة حمض - أساس يتميز بوجود نقطة التكافؤ التي يتحول فيها لون الكاشف، حيث يكون:",
      options: ["كمية مادة الحمض والأساس متكافئة ستوكيومترياً", "pH = 0 دائماً", "الحمض تبخر كلياً", "الأساس راسب"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "عند التكافؤ تكون المتفاعلات قد استهلكت بالكامل وفق الأعداد الستوكيومترية (n_a = n_b)."
    },
    {
      id: "phy-6",
      text: "القانون الثاني لنيوتن في الميكانيك الكلاسيكي ينص على أن مجموع القوى الخارجية يساوي:",
      options: ["∑F_ext = m · a", "∑F_ext = m · v", "∑F_ext = 0", "∑F_ext = m · g · h"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "المبدأ الأساسي للتحريك (القانون الثاني لنيوتن): مجموع القوى الخارجية المؤثرة يساوي الكتلة × التسارع."
    },
    {
      id: "phy-7",
      text: "زمن نصف التفاعل t_(1/2) هو الزمن اللازم لـ:",
      options: ["بلوغ التفاعل نصف تقدمه النهائي X_f/2", "انتهاء التفاعل كلياً", "مضاعفة كمية المتفاعلات", "بدء التفاعل"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "تعريف t_(1/2): هي المدة الزمنية اللازمة لبلوغ تقدم التفاعل نصف قيمته النهائية (x = X_max / 2)."
    },
    {
      id: "phy-8",
      text: "ثابت الجاذبية الأرضية g على سطح الأرض يقارب تقريباً:",
      options: ["9.8 N/kg (أو m/s²)", "3.14 N/kg", "100 N/kg", "0 N/kg"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "تسارع الجاذبية الأرضية g يبلغ حوالي 9.8 N/kg أو 9.8 m/s²."
    },
    {
      id: "phy-9",
      text: "الشاردة الموجبة (الكاتيون) تتشكل عندما:",
      options: ["تفقد الذرة إلكتروناً أو أكثر", "تكتسب الذرة إلكتروناً أو أكثر", "تفقد بروتوناً", "تكتسب نيوتروناً"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "فقدان الإلكترونات سالبة الشحنة يجعل شحنة النواة الموجبة غالبة، فتصبح الذرة شاردة موجبة."
    },
    {
      id: "phy-10",
      text: "المكثفة الكهربائية ذات السعة C عند شحنها تخزن طاقة كهرسكونية تعطى بـ:",
      options: ["E = 1/2 · C · U²", "E = C · U", "E = 1/2 · R · I²", "E = U / C"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "الطاقة المخزنة في المكثفة: E = (1/2) C·u_C² وتقاس بالجول (J)."
    }
  ],

  "التاريخ": [
    {
      id: "his-1",
      text: "اندلعت الثورة التحريرية الجزائرية المباركة في:",
      options: ["1 نوفمبر 1954", "5 جويلية 1962", "8 ماي 1945", "19 مارس 1962"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "اندلعت ثورة التحرير الوطني في ليلة الأول من نوفمبر 1954 بقيادة جبهة وجيش التحرير الوطني."
    },
    {
      id: "his-2",
      text: "انعقد مؤتمر الصومام التاريخي الذي نظّم الثورة الجزائرية وهيكلها في:",
      options: ["20 أوت 1956", "1 نوفمبر 1954", "19 مارس 1962", "24 فيفري 1971"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "انعقد مؤتمر الصومام في قرية إيفري أوزلاقن بوادي الصومام في 20 أوت 1956 بقيادة عبان رمضان والعقيد عميروش وزملائهم."
    },
    {
      id: "his-3",
      text: "مؤسس الدولة الجزائرية الحديثة وقائد المقاومة الشعبية ضد الاستعمار الفرنسي في الغرب هو:",
      options: ["الأمير عبد القادر", "أحمد باي", "الشيخ الحداد", "فاطمة نسومر"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "الأمير عبد القادر الجزائري بويع عام 1832 وأسس ركائز الدولة والمؤسسات والجيش المنظم."
    },
    {
      id: "his-4",
      text: "مظاهرات ومجازر 8 ماي 1945 وقعت بشكل رئيسي في مدن:",
      options: ["سطيف وقالمة وخراطة", "الجزائر ووهران وعنابة", "تلمسان وبسكرة وورقلة", "قسنطينة وباتنة والبويرة"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "خرج الجزائريون احتفالاً بنهاية الحرب العالمية الثانية مطالبين بالاستقلال، فقوبلوا بمجازر وحشية خلفت 45 ألف شهيد."
    },
    {
      id: "his-5",
      text: "مبدأ 'التعايش السلمي' في العلاقات الدولية خلال الحرب الباردة طرحه الزعيم السوفيتي:",
      options: ["نيكيتا خروتشوف", "جوزيف ستالين", "فلاديمير لينين", "ميخائيل غورباتشوف"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "طرح خروتشوف مبدأ التعايش السلمي عام 1956 لتجنب الصدام النووي المباشر مع المعسكر الغربي."
    },
    {
      id: "his-6",
      text: "أكبر قارة من حيث المساحة وعدد السكان في العالم هي:",
      options: ["آسيا", "إفريقيا", "أوروبا", "أمريكا الشمالية"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "قارة آسيا هي الأكبر مساحة (نحو 44 مليون كم²) والأكثر سكاناً (أكثر من 4.5 مليار نسمة)."
    },
    {
      id: "his-7",
      text: "يمتد الإقليم التلي في الجزائر على مساحة تمثل حوالي:",
      options: ["4% من المساحة الإجمالية", "15% من المساحة", "50% من المساحة", "85% من المساحة"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "الشريط الساحلي والتلي يمثل قرابة 4% فقط من مساحة الجزائر ولكنه يضم غالبية السكان والنشاط الاقتصادي."
    },
    {
      id: "his-8",
      text: "منظمة الدول المصدرة للبترول (OPEC) تأسست عام 1960 في العاصمة:",
      options: ["بغداد", "الجزائر", "فيينا", "جنيف"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "تأسست منظمة أوبك في مؤتمر بغداد عام 1960 بمشاركة 5 دول مؤسسة (العراق، السعودية، الكويت، إيران، فنزويلا)."
    }
  ],

  "تربية إسلامية": [
    {
      id: "isl-1",
      text: "ما هي أركان الإسلام الخمسة بالترتيب الصحيح؟",
      options: ["الشهادتان، الصلاة، الزكاة، الصوم، الحج", "الإيمان بالله، الملائكة، الكتب، الرسل، اليوم الآخر", "الصلاة، الصوم، الحج، الصدقة، الجهاد", "التوحيد، العدل، الإحسان، الصدق، الوفاء"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "حديث ابن عمر: بني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وحج البيت، وصوم رمضان."
    },
    {
      id: "isl-2",
      text: "ما هو الركن الأعظم في الحج الذي قال عنه النبي ﷺ: 'الحج...'؟",
      options: ["عرفة", "الطواف", "السعي", "رمي الجمار"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "قال النبي ﷺ: 'الحجُ عرفة'، والوقوف بعرفة هو الركن الأساسي الذي يبطل الحج بفواته."
    },
    {
      id: "isl-3",
      text: "الكليات الخمس (مقاصد الشريعة الضرورية) هي حفظ:",
      options: ["الدين، النفس، العقل، النسل (العرض)، والمال", "الوطن، الأرض، السلاح، العلم، القوة", "الصلاة، الزكاة، الصوم، الحج، التوحيد", "الأهل، الأقارب، الجيران، الأصدقاء، المعلمين"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "اتفقت جميع الشرائع السماوية على حفظ الضروريات الخمس: الدين والنفس والعقل والنسل والمال."
    },
    {
      id: "isl-4",
      text: "الصحابي الجليل الذي لُقب بـ 'الفاروق' وهو ثاني الخلفاء الراشدين:",
      options: ["عمر بن الخطاب رضي الله عنه", "أبو بكر الصديق رضي الله عنه", "عثمان بن عفان رضي الله عنه", "علي بن أبي طالب رضي الله عنه"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "لقب النبي ﷺ عمر بن الخطاب بالفاروق لأن الله فرّق به بين الحق والباطل."
    },
    {
      id: "isl-5",
      text: "نوع الربا الناتج عن بيع صنف ربوي بجنسه مع الزيادة دون تأجيل يسمى:",
      options: ["ربا الفضل", "ربا النسيئة", "ربا القرض", "القراض"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "ربا الفضل هو الزيادة في أحد البدلين المتجانسين المتبادلين نقداً (مثل ذهب بذهب مع زيادة أحدهما)."
    },
    {
      id: "isl-6",
      text: "الغزوة التي وقعت في شوال من السنة الثالثة للهجرة واستشهد فيها حمزة بن عبد المطلب هي:",
      options: ["غزوة أحد", "غزوة بدر", "غزوة الخندق (الأحزاب)", "غزوة حنين"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "غزوة أحد وقعت سنة 3 هـ عند جبل أحد بالقرب من المدينة المنورة."
    }
  ],

  "تربية مدنية": [
    {
      id: "civ-1",
      text: "الهيئة القضائية العليا في قمة هرم القضاء العادي في الجزائر هي:",
      options: ["المحكمة العليا", "مجلس قضاء الولاية", "المحكمة الابتدائية", "مجلس الدولة"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "المحكمة العليا تراقب تطبيق القانون من طرف المحاكم والمجالس القضائية وتوجد بالجزائر العاصمة."
    },
    {
      id: "civ-2",
      text: "يمارس الشعب الجزائري سيادته بواسطة ممثليه المنتخبين عن طريق:",
      options: ["الانتخاب والاستفتاء", "التعيين المباشر", "الوراثة", "المحاصصة"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "الدستور ينص على أن السيادة للشعب يمارسها عن طريق الاستفتاء وبواسطة ممثليه المنتخبين بالاقتراع السري والمباشر."
    },
    {
      id: "civ-3",
      text: "يتشكل البرلمان الجزائري من غرفتين تشريعيتين هما:",
      options: ["المجلس الشعبي الوطني ومجلس الأمة", "المحكمة العليا ومجلس الدولة", "المجلس الدستوري والحكومة", "البلدية والولاية"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "السلطة التشريعية يمارسها برلمان بغرفتين: المجلس الشعبي الوطني (الغرفة السفلى) ومجلس الأمة (الغرفة العليا)."
    },
    {
      id: "civ-4",
      text: "وثيقة حقوق الإنسان العالمية أعلنتها الجمعية العامة للأمم المتحدة عام:",
      options: ["10 ديسمبر 1948", "1 نوفمبر 1954", "5 جويلية 1962", "24 أكتوبر 1945"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "صدر الإعلان العالمي لحقوق الإنسان في باريس في 10 ديسمبر 1948."
    }
  ],

  "اللغة الفرنسية": [
    {
      id: "fr-1",
      text: "Quel est le participe passé du verbe 'Prendre' ?",
      options: ["Pris", "Prendu", "Prenant", "Prit"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "Le participe passé du verbe 'prendre' est irrégulier : 'pris' (J'ai pris)."
    },
    {
      id: "fr-2",
      text: "Dans la phrase 'Les élèves que j'ai (rencontrer) sont gentils', l'accord correct est :",
      options: ["rencontrés", "rencontré", "rencontrée", "rencontrer"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "Le COD 'que' (qui remplace 'les élèves', masculin pluriel) est placé avant l'auxiliaire avoir, donc le participe passé s'accorde : rencontrés."
    },
    {
      id: "fr-3",
      text: "Quel connecteur logique exprime l'opposition ou la concession ?",
      options: ["Cependant / Mais", "Parce que / Car", "Donc / Par conséquent", "Pour que / Afin de"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "'Cependant', 'mais', 'pourtant' et 'néanmoins' expriment l'opposition."
    },
    {
      id: "fr-4",
      text: "Le synonyme du mot 'éphémère' est :",
      options: ["Passager / Temporaire", "Éternel / Durable", "Puissant", "Lumineux"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "Éphémère signifie qui dure très peu de temps (contraire d'éternel)."
    }
  ],

  "اللغة الإنجليزية": [
    {
      id: "en-1",
      text: "Choose the correct past form: 'Yesterday, she ______ to the library.'",
      options: ["went", "goes", "gone", "going"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "'Yesterday' signals the past simple tense. The past of 'go' is 'went'."
    },
    {
      id: "en-2",
      text: "Which of the following is an example of Conditional Type 1?",
      options: [
        "If it rains tomorrow, we will stay at home.",
        "If I were you, I would study harder.",
        "If they had known, they would have helped.",
        "If ice melts, it becomes water."
      ],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "First conditional rule: If + Present Simple, ... Will + Verb (base form)."
    },
    {
      id: "en-3",
      text: "What is the antonym (opposite) of the word 'Ancient'?",
      options: ["Modern / Contemporary", "Old / Historic", "Huge / Massive", "Wise"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "'Ancient' means very old. Its antonym is 'modern' or 'recent'."
    },
    {
      id: "en-4",
      text: "Change to Passive Voice: 'The teacher explained the lesson.'",
      options: [
        "The lesson was explained by the teacher.",
        "The lesson is explained by the teacher.",
        "The teacher was explaining the lesson.",
        "The lesson had been explain."
      ],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "Passive Voice in Past Simple: Subject + was/were + past participle (was explained)."
    }
  ],

  "الفلسفة": [
    {
      id: "phil-1",
      text: "صاحب مقولة 'أنا أفكر، إذن أنا موجود' (الكوجيطو) هو الفيلسوف الفرنسي:",
      options: ["رينيه ديكارت", "جان بول سارتر", "إيمانويل كانط", "أرسطو"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "ديكارت وضع الشك المنهجي واستنتج الكوجيطو كأساس لليقين الفلسفي."
    },
    {
      id: "phil-2",
      text: "في إشكالية 'الشعور واللاشعور'، مؤسس مدرسة التحليل النفسي الذي أثبت وجود اللاشعور هو:",
      options: ["سيغموند فرويد", "جون لوك", "دافيد هيوم", "برغسون"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "سيغموند فرويد وضع نظرية الجهاز النفسي (الأنا، الهو، الأنا الأعلى) والتحليل النفسي."
    },
    {
      id: "phil-3",
      text: "المنهج الفلسفي القائم على الأطروحة (القضية)، النقيض، والتركيب (الاستنتاج) هو:",
      options: ["المنهج الجدلي (الديالكتيكي)", "المنهج التجريبي الحسي", "المنهج الرياضي الاستنتاجي", "المنهج الظواهري"],
      correctAnswer: 0,
      difficulty: "hard",
      remedyPlan: "الديالكتيك الهيغلي يقوم على حركة الفكر عبر الثنائيات (Thèse, Antithèse, Synthèse)."
    }
  ],

  "general": [
    {
      id: "gen-1",
      text: "ما هي عاصمة الجزائر، وأكبر مدنها سكاناً؟",
      options: ["الجزائر العاصمة", "وهران", "قسنطينة", "تلمسان"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "الجزائر العاصمة (البهجة) هي عاصمة البلاد ومقر المؤسسات السيادية."
    },
    {
      id: "gen-2",
      text: "أعلى قمة جبلية في الجزائر هي قمة تاهات أتاكور التي تقع في جبال:",
      options: ["الهقار (تمنراست)", "جرجرة (تيزي وزو)", "الأوراس (باتنة)", "الونشريس"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "قمة تاهات تبلغ 2908 متراً وتقع في سلسلة جبال الهقار بالصحراء الجزائرية."
    },
    {
      id: "gen-3",
      text: "كم عدد ولايات الجمهورية الجزائرية الديمقراطية الشعبية حالياً؟",
      options: ["58 ولاية", "48 ولاية", "31 ولاية", "64 ولاية"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "بعد التقسيم الإداري الأخير وترقية المقاطعات المنتدبة أصبح عدد الولايات 58 ولاية."
    },
    {
      id: "gen-4",
      text: "مخترع المصباح الكهربائي المتوهج الذي سجل آلاف براءات الاختراع هو:",
      options: ["توماس إديسون", "نيكولا تسلا", "ألكسندر غراهام بيل", "ألبرت أينشتاين"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "توماس إديسون طور المصباح الكهربائي العملي ونظام توليد وتوزيع الكهرباء."
    },
    {
      id: "gen-5",
      text: "أسرع كوكب دوراناً حول الشمس في المجموعة الشمسية وأقربها إليها هو:",
      options: ["عطارد", "الزهرة", "المريخ", "المشتري"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "كوكب عطارد يستغرق حوالي 88 يوماً أرضياً فقط لإتمام دورة كاملة حول الشمس."
    },
    {
      id: "gen-6",
      text: "العملة الرسمية المتداولة في دولة الجزائر هي:",
      options: ["الدينار الجزائري (DZD)", "الدرهم", "الريال", "الفرنك"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "الدينار الجزائري هو العملة النقدية الرسمية المعتمدة منذ الاستقلال."
    },
    {
      id: "gen-7",
      text: "أكبر محيط في العالم من حيث المساحة هو:",
      options: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"],
      correctAnswer: 0,
      difficulty: "easy",
      remedyPlan: "المحيط الهادئ يغطي أكثر من ثلث مساحة الكرة الأرضية."
    },
    {
      id: "gen-8",
      text: "أي غاز يشكل النسبة الأكبر في الغلاف الجوي لكوكب الأرض (حوالي 78%)؟",
      options: ["النيتروجين (الآزوت)", "الأكسجين", "ثاني أكسيد الكربون", "الأرغون"],
      correctAnswer: 0,
      difficulty: "medium",
      remedyPlan: "غاز النيتروجين يمثل 78% من الهواء الجوي والأكسجين نحو 21%."
    }
  ]
};

// Aliases and category mappings for subjects
export function normalizeSubjectKey(subject: string): string {
  if (!subject) return "اللغة العربية";
  const s = subject.trim().toLowerCase();
  
  if (s.includes('عرب') || s === 'arabic' || s === 'ar') return "اللغة العربية";
  if (s.includes('رياض') || s.includes('حساب') || s === 'math' || s === 'maths') return "الرياضيات";
  if (s.includes('فيزيا') || s.includes('تكنولوجي') || s === 'physics') return "العلوم الفيزيائية";
  if (s.includes('طبيع') || s.includes('علمي') || s.includes('علوم') || s === 'science') return "العلوم الطبيعية";
  if (s.includes('فرنس') || s.includes('francais') || s.includes('français') || s === 'french' || s === 'fr') return "اللغة الفرنسية";
  if (s.includes('إنجليز') || s.includes('انجليز') || s === 'english' || s === 'en') return "اللغة الإنجليزية";
  if (s.includes('تاريخ') || s.includes('جغراف') || s === 'history') return "التاريخ";
  if (s.includes('إسلام') || s.includes('اسلام') || s.includes('شرعي') || s === 'islamic') return "تربية إسلامية";
  if (s.includes('مدني') || s === 'civic') return "تربية مدنية";
  if (s.includes('فلسف') || s === 'philosophy') return "الفلسفة";
  if (s.includes('إعلام') || s.includes('معلومات') || s === 'informatics') return "المعلوماتية";
  if (s.includes('ألمان') || s === 'deutsch') return "اللغة الألمانية";
  if (s.includes('إسبان') || s === 'espagnol') return "اللغة الإسبانية";
  
  return subject.trim();
}

export function getSubjectSlug(subject: string): string {
  const norm = normalizeSubjectKey(subject);
  switch (norm) {
    case "اللغة العربية": return "arabic";
    case "الرياضيات": return "math";
    case "العلوم الطبيعية": return "science";
    case "العلوم الفيزيائية": return "physics";
    case "اللغة الفرنسية": return "french";
    case "اللغة الإنجليزية": return "english";
    case "التاريخ": return "history";
    case "تربية إسلامية": return "islamic";
    case "تربية مدنية": return "civic";
    case "الفلسفة": return "philosophy";
    case "المعلوماتية": return "informatics";
    default: return norm.toLowerCase().replace(/[\s\-_]+/g, '');
  }
}

// Comprehensive Grade-Specific Fallback Question Banks for Algerian Curriculum
export const GRADE_SPECIFIC_QUESTIONS: Record<string, Question[]> = {
  // Primary 1AP (السنة الأولى ابتدائي)
  "primary-1ap-arabic": [
    { id: "p1_ar_1", text: "ما نوع المد في كلمة 'بَابٌ'؟", options: ["مد بالألف", "مد بالواو", "مد بالياء", "لا يوجد مد"], correctAnswer: 0, difficulty: "easy", remedyPlan: "حرف الألف المسبوق بفتحة يسمى مد بالألف (بَـ + ـا = با)." },
    { id: "p1_ar_2", text: "أي من الكلمات الآتية تبدأ بحرف 'س'؟", options: ["سَمَكَة", "بِنْت", "وَلَد", "قَلَم"], correctAnswer: 0, difficulty: "easy", remedyPlan: "كلمة سَمَكَة تبدأ بحرف السين المفتوح (سَـ)." },
    { id: "p1_ar_3", text: "ما هو ضد كلمة 'كَبِيرٌ'؟", options: ["صَغِيرٌ", "طَوِيلٌ", "جَمِيلٌ", "سَرِيعٌ"], correctAnswer: 0, difficulty: "easy", remedyPlan: "ضد الشيء الكبير هو الصغير." },
    { id: "p1_ar_4", text: "اللام في كلمة 'الشَّمْسُ' هي:", options: ["لام شمسية", "لام قمرية", "حرف مد", "تنوين"], correctAnswer: 0, difficulty: "medium", remedyPlan: "اللام الشمسية لا تُنطق ويُشدد الحرف الذي بعدها (الشَّـ)." },
    { id: "p1_ar_5", text: "الحرف الناقص في كلمة 'مَدْرَسَـ...ـة' هو:", options: ["ة (تاء مربوطة)", "ت (تاء مفتوحة)", "ط", "د"], correctAnswer: 0, difficulty: "easy", remedyPlan: "تكتب التاء مربوطة (ة) في آخر الأسماء المفردة المؤنثة مثل مدرسة." }
  ],
  "primary-1ap-math": [
    { id: "p1_ma_1", text: "العدد الذي يلي العدد 5 مباشرة هو:", options: ["6", "4", "7", "3"], correctAnswer: 0, difficulty: "easy", remedyPlan: "بعد العدد 5 يأتي العدد 6 في الترتيب التصاعدي." },
    { id: "p1_ma_2", text: "نتيجة العملية 3 + 2 هي:", options: ["5", "6", "4", "7"], correctAnswer: 0, difficulty: "easy", remedyPlan: "3 أصابع مضاف إليها إصبعان يساوي 5 أصابع." },
    { id: "p1_ma_3", text: "أي عدد هو الأكبر بين الأعداد التالية؟", options: ["9", "4", "7", "2"], correctAnswer: 0, difficulty: "easy", remedyPlan: "العدد 9 هو الأكبر بين هذه الأعداد." },
    { id: "p1_ma_4", text: "الشكل الهندسي الذي له ثلاثة أضلاع هو:", options: ["المثلث", "المربع", "الدائرة", "المستطيل"], correctAnswer: 0, difficulty: "medium", remedyPlan: "المثلث يتكون من 3 أضلاع و 3 رؤوس." }
  ],
  "primary-1ap-islamic": [
    { id: "p1_is_1", text: "كم عدد الصلوات المفروضة في اليوم والليلة؟", options: ["5 صلوات", "3 صلوات", "4 صلوات", "6 صلوات"], correctAnswer: 0, difficulty: "easy", remedyPlan: "المسلم يصلي 5 صلوات: الصبح، الظهر، العصر، المغرب، العشاء." },
    { id: "p1_is_2", text: "نبدأ الصلاة دائماً بقول:", options: ["الله أكبر", "الحمد لله", "سبحان الله", "أستغفر الله"], correctAnswer: 0, difficulty: "easy", remedyPlan: "تكبيرة الإحرام هي قول 'الله أكبر' وبها ندخل في الصلاة." }
  ],

  // Primary 2AP (السنة الثانية ابتدائي)
  "primary-2ap-arabic": [
    { id: "p2_ar_1", text: "ضمير المتكلم للمفرد هو:", options: ["أَنَا", "أَنْتَ", "هُوَ", "نَحْنُ"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الضمير 'أنا' للمتكلم المفرد، و'نحن' للمتكلمين." },
    { id: "p2_ar_2", text: "اسم الإشارة المناسب للإشارة إلى فتاة واحدة:", options: ["هَذِهِ", "هَذَا", "هَؤُلَاءِ", "هَذَانِ"], correctAnswer: 0, difficulty: "easy", remedyPlan: "نقول: هذه تلميذة مجتهدة." },
    { id: "p2_ar_3", text: "جمع كلمة 'قَلَمٌ' هو:", options: ["أَقْلَامٌ", "قَلَمَانِ", "مَقَالِمُ", "قُلُومٌ"], correctAnswer: 0, difficulty: "easy", remedyPlan: "جمع التكسير لكلمة قلم هو أقلام." }
  ],
  "primary-2ap-math": [
    { id: "p2_ma_1", text: "رقم العشرات في العدد 84 هو:", options: ["8", "4", "80", "12"], correctAnswer: 0, difficulty: "easy", remedyPlan: "في العدد 84: 4 هو رقم الآحاد و 8 هو رقم العشرات." },
    { id: "p2_ma_2", text: "ضعف العدد 15 هو:", options: ["30", "25", "20", "45"], correctAnswer: 0, difficulty: "medium", remedyPlan: "ضعف 15 هو 15 + 15 = 30." },
    { id: "p2_ma_3", text: "نصف العدد 20 هو:", options: ["10", "5", "15", "8"], correctAnswer: 0, difficulty: "easy", remedyPlan: "نصف 20 هو 20 ÷ 2 = 10." }
  ],

  // Primary 3AP (السنة الثالثة ابتدائي)
  "primary-3ap-arabic": [
    { id: "p3_ar_1", text: "أقسام الكلمة في لغتنا العربية هي:", options: ["اسم وفعل وحرف", "مفرد وجمع", "مذكر ومؤنث", "ماض ومضارع"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الكلمة تنقسم إلى ثلاثة أقسام: اسم، فعل، حرف." },
    { id: "p3_ar_2", text: "الجملة الفعلية هي التي تبدأ بـ:", options: ["فعل", "اسم", "حرف جر", "ضمير"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الجملة الفعلية تبدأ بفعل (ماضٍ، مضارع، أمر) مثل: رسمَ الولدُ." },
    { id: "p3_ar_3", text: "حرف الجر في جملة 'ذهب التلميذ إلى المدرسة' هو:", options: ["إلى", "ذهب", "التلميذ", "المدرسة"], correctAnswer: 0, difficulty: "easy", remedyPlan: "من حروف الجر: من، إلى، عن، على، في، الباء، الكاف، اللام." }
  ],
  "primary-3ap-math": [
    { id: "p3_ma_1", text: "حاصل ضرب 6 × 7 يساوي:", options: ["42", "36", "48", "40"], correctAnswer: 0, difficulty: "medium", remedyPlan: "حسب جدول الضرب: 6 × 7 = 42." },
    { id: "p3_ma_2", text: "العدد 4532 رقم مئاته هو:", options: ["5", "4", "3", "2"], correctAnswer: 0, difficulty: "easy", remedyPlan: "2 آحاد، 3 عشرات، 5 مئات، 4 آلاف." },
    { id: "p3_ma_3", text: "المستقيمان اللذان يلتقيان ويشكلان زاوية قائمة هما مستقيمان:", options: ["متعامدان", "متوازيان", "متقاطعان غير متعامدين", "منحنيان"], correctAnswer: 0, difficulty: "medium", remedyPlan: "المستقيمان المتعامدان يتقاطعان مشكلين زاوية قائمة 90 درجة." }
  ],
  "primary-3ap-science": [
    { id: "p3_sc_1", text: "أثناء الشهيق، القفص الصدري:", options: ["يرتفع ويتسع", "ينخفض ويضيق", "لا يتغير", "يتوقف"], correctAnswer: 0, difficulty: "easy", remedyPlan: "في عملية الشهيق يدخل الهواء إلى الرئتين فيتسع القفص الصدري ويرتفع." },
    { id: "p3_sc_2", text: "النبات الأخضر يمتص الماء والأملاح المعدنية بواسطة:", options: ["الجذور (الأوبار الماصة)", "الأوراق", "الأزهار", "الثمار"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الجذور تمتص الماء والأملاح من التربة وتنقله للساق والأوراق." }
  ],

  // Primary 4AP (السنة الرابعة ابتدائي)
  "primary-4ap-arabic": [
    { id: "p4_ar_1", text: "الفاعل في جملة 'كتبَ التلميذُ الدرسَ' هو:", options: ["التلميذُ", "كتبَ", "الدرسَ", "ضمير مستتر"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الفاعل هو من قام بالفعل ويكون مرفوعاً: من كتب؟ التلميذُ." },
    { id: "p4_ar_2", text: "حركة إعراب المفعول به دائماً هي:", options: ["الفتحة (النصب)", "الضمة (الرفع)", "الكسرة (الجر)", "السكون"], correctAnswer: 0, difficulty: "easy", remedyPlan: "المفعول به اسم منصوب بالفتحة يدل على من وقع عليه فعل الفاعل." },
    { id: "p4_ar_3", text: "تكتب التاء مفتوحة في نهاية:", options: ["الأفعال (مثل: كتبْتُ، لعبَتْ)", "الأسماء المفردة المؤنثة", "الصفات المفردة", "كل الأسماء"], correctAnswer: 0, difficulty: "medium", remedyPlan: "تكتب التاء مفتوحة دائماً في آخر الأفعال وفي جمع المؤنث السالم." }
  ],
  "primary-4ap-math": [
    { id: "p4_ma_1", text: "العدد العشري 3.75 الجزء الصحيح فيه هو:", options: ["3", "75", "7", "5"], correctAnswer: 0, difficulty: "easy", remedyPlan: "العدد العشري يتكون من جزء صحيح يسار الفاصلة (3) وجزء عشري يمينها (75)." },
    { id: "p4_ma_2", text: "محيط المربع الذي طول ضلعه 6 سم هو:", options: ["24 سم", "36 سم", "12 سم", "18 سم"], correctAnswer: 0, difficulty: "medium", remedyPlan: "محيط المربع = الضلع × 4 = 6 × 4 = 24 سم." }
  ],
  "primary-4ap-history": [
    { id: "p4_hi_1", text: "القائد المسلم الذي بنى مدينة القيروان في المغرب الإسلامي هو:", options: ["عقبة بن نافع", "طارق بن زياد", "حسان بن النعمان", "موسى بن نصير"], correctAnswer: 0, difficulty: "medium", remedyPlan: "أسس عقبة بن نافع الفهري مدينة القيروان لتكون قاعدة للجيش ونشر الإسلام." }
  ],

  // Primary 5AP (السنة الخامسة ابتدائي)
  "primary-5ap-arabic": [
    { id: "p5_ar_1", text: "الأفعال الناسخة (كان وأخواتها) عندما تدخل على المبتدأ والخبر فإنها:", options: ["ترفع المبتدأ ويسمى اسمها وتنصب الخبر ويسمى خبرها", "تنصب المبتدأ وترفع الخبر", "تجر المبتدأ والخبر", "ترفع الاثنين"], correctAnswer: 0, difficulty: "medium", remedyPlan: "كان وأخواتها ترفع المبتدأ (اسمها) وتنصب الخبر (خبرها) مثل: كان الجوُّ جميلاً." },
    { id: "p5_ar_2", text: "الحروف الناسخة (إنّ وأخواتها) تعمل على:", options: ["نصب المبتدأ ورفع الخبر", "رفع المبتدأ ونصب الخبر", "جزم الفعل", "رفع الاثنين"], correctAnswer: 0, difficulty: "medium", remedyPlan: "إنّ وأخواتها تنصب المبتدأ ويسمى اسمها وترفع الخبر ويسمى خبرها: إنّ العلمَ نورٌ." },
    { id: "p5_ar_3", text: "الفعل المعتل هو الفعل الذي يحتوي في حروفه الأصلية على:", options: ["أحد حروف العلة (واي: و، ا، ي)", "همزة فقط", "تضعيف وشدة", "حرف جر"], correctAnswer: 0, difficulty: "medium", remedyPlan: "حروف العلة ثلاثة: الواو، الألف، الياء (واي) مثل: وجد، قال، رمى." }
  ],
  "primary-5ap-math": [
    { id: "p5_ma_1", text: "مساحة مستطيل طوله 8m وعرضه 5m هي:", options: ["40 m²", "26 m²", "13 m²", "80 m²"], correctAnswer: 0, difficulty: "easy", remedyPlan: "مساحة المستطيل = الطول × العرض = 8 × 5 = 40 متر مربع." },
    { id: "p5_ma_2", text: "حساب 25% من العدد 200 يساوي:", options: ["50", "25", "100", "75"], correctAnswer: 0, difficulty: "medium", remedyPlan: "25% تمثل الربع: (200 × 25) ÷ 100 = 50." },
    { id: "p5_ma_3", text: "الكسر 3/4 يمثل بالفاصلة العدد العشري:", options: ["0.75", "0.5", "0.25", "0.34"], correctAnswer: 0, difficulty: "easy", remedyPlan: "3 ÷ 4 = 0.75 (ثلاثة أرباع)." }
  ],
  "primary-5ap-history": [
    { id: "p5_hi_1", text: "احتلت فرنسا الجزائر سنة:", options: ["1830م", "1954م", "1848م", "1962م"], correctAnswer: 0, difficulty: "easy", remedyPlan: "بدأ الاحتلال الفرنسي للجزائر بعد معركة سطاوالي وسقوط العاصمة في 5 جويلية 1830م." },
    { id: "p5_hi_2", text: "قائد المقاومة الشعبية البطل في الغرب الجزائري ومؤسس الدولة الجزائرية الحديثة هو:", options: ["الأمير عبد القادر", "أحمد باي", "الشيخ بوعمامة", "مصطفى بن بولعيد"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الأمير عبد القادر الجزائري قاد المقاومة وأسس ركائز الدولة الحديثة." }
  ],

  // Middle 1AM (السنة الأولى متوسط)
  "middle-1am-arabic": [
    { id: "m1_ar_1", text: "مبتدأ الجملة الاسمية وخبرها في الأصل يكونان:", options: ["مرفوعين", "منصوبين", "مجرورين", "مبنيين"], correctAnswer: 0, difficulty: "easy", remedyPlan: "المبتدأ والخبر هما ركنا الجملة الاسمية وحكمهما الرفع دائماً." },
    { id: "m1_ar_2", text: "النعت الحقيقي يطابق منعوته في:", options: ["الإعراب والعدد والنوع والتعريف والتنكير", "الإعراب فقط", "النوع فقط", "لا يطابقه"], correctAnswer: 0, difficulty: "medium", remedyPlan: "النعت الحقيقي يتبع المنعوت في 4 من 10 (الرفع/النصب/الجر، الإفراد/التثنية/الجمع، التذكير/التأنيث، التعريف/التنكير)." }
  ],
  "middle-1am-math": [
    { id: "m1_ma_1", text: "حاصل ضرب عددين نسبيين سالبين هو عدد:", options: ["موجب (+)", "سالب (-)", "معدوم", "غير معرف"], correctAnswer: 0, difficulty: "easy", remedyPlan: "جداء عددين لهما نفس الإشارة موجب دائماً: (-) × (-) = (+)." },
    { id: "m1_ma_2", text: "التناظر المحوري بالنسبة إلى مستقيم يحفظ:", options: ["الأطوال والمساحات وقيس الزوايا واستقامية النقط", "الأطوال فقط", "الزوايا فقط", "لا يحفظ شيئاً"], correctAnswer: 0, difficulty: "easy", remedyPlan: "التحويلات النقطية (التناظر المحوري) تحافظ على الأطوال والاستقامية والمساحات." }
  ],
  "middle-1am-physics": [
    { id: "m1_ph_1", text: "في دارة كهربائية مربوطة على التسلسل، عند نزع أحد المصباحين فإن المصباح الآخر:", options: ["ينطفئ لفتح الدارة", "يبقى مشتعلاً", "يزداد توهجه", "يحترق"], correctAnswer: 0, difficulty: "easy", remedyPlan: "في الربط على التسلسل تشكل العناصر حلقة واحدة، إذا انفتحت انقطاع التيار عن كامل الدارة." },
    { id: "m1_ph_2", text: "الكتلة الحجمية (ρ) لجسم كتلته m وحجمه V تحسب بالعلاقة:", options: ["ρ = m / V", "ρ = m × V", "ρ = V / m", "ρ = m + V"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الكتلة الحجمية هي حاصل قسمة الكتلة على الحجم (m/V) بوحدة g/cm³ أو kg/m³." }
  ],

  // Middle 4AM (السنة الرابعة متوسط - BEM)
  "middle-4am-arabic": [
    { id: "m4_ar_1", text: "البدل في لغتنا العربية يصنف من:", options: ["التوابع (يتبع المبدل منه في الإعراب)", "المنصوبات الأصلية", "المرفوعات فقط", "الأفعال"], correctAnswer: 0, difficulty: "easy", remedyPlan: "التوابع أربعة: النعت، العطف، التوكيد، والبدل." },
    { id: "m4_ar_2", text: "في جملة 'ازداد التلميذُ تفوقاً'، إعراب كلمة تفوقاً هو:", options: ["تمييز منصوب", "حال منصوب", "مفعول به", "مفعول لأجله"], correctAnswer: 0, difficulty: "medium", remedyPlan: "الاسم المنصوب النكرة بعد أفعال الزيادة والامتلاء (ازداد، امتلأ، طاب) يعرب تمييز نسبة." },
    { id: "m4_ar_3", text: "ما نوع الجملة الفرعية في: 'ظننتُ التلميذَ (يراجعُ دروسَهُ)'؟", options: ["جملة فعلية في محل نصب مفعول به ثانٍ", "جملة في محل رفع خبر", "جملة في محل نصب حال", "جملة لا محل لها من الإعراب"], correctAnswer: 0, difficulty: "medium", remedyPlan: "الفعل 'ظن' يتعدى لمفعولين أصلهما مبتدأ وخبر، فالجملة الواقعة بعد المفعول الأول تكون مفعولاً به ثانياً." },
    { id: "m4_ar_4", text: "في قولنا: 'جاء المعلمُ (يبتسمُ)'، إعراب الجملة بين قوسين:", options: ["جملة فعلية في محل نصب حال", "جملة في محل رفع نعت", "جملة مفعول به", "جملة مضاف إليه"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الجمل بعد المعارف أحوال وبعد النكرات صفات، و'المعلم' معرفة فالجملة حالية." },
    { id: "m4_ar_5", text: "حكم إعراب المعدود مع الأعداد من (11 إلى 99) هو:", options: ["مفرد منصوب على التمييز", "جمع مجرور بالإضافة", "مفرد مجرور بالإضافة", "مرفوع"], correctAnswer: 0, difficulty: "easy", remedyPlan: "معدود الأعداد المركبة والعقود والمعطوفة (11-99) يكون مفرداً منصوباً يعرب تمييزاً." },
    { id: "m4_ar_6", text: "الاسم الممنوع من الصرف يُجر بـ:", options: ["الفتحة نيابة عن الكسرة ما لم يُضف أو يُعرّف بأل", "الكسرة دائماً", "الضمة", "الياء"], correctAnswer: 0, difficulty: "medium", remedyPlan: "يجر الممنوع من الصرف بالفتحة نيابة عن الكسرة، إلا إذا دخلت عليه أل أو أضيف." },
    { id: "m4_ar_7", text: "حرف العطف الذي يفيد الترتيب مع التراخي هو:", options: ["ثُمَّ", "الفاء", "الواو", "أو"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الفاء تفيد الترتيب والتعقيب، أما 'ثم' فتفيد الترتيب مع التراخي في الزمن." }
  ],
  "middle-4am-math": [
    { id: "m4_ma_1", text: "القاسم المشترك الأكبر PGCD للعددين 36 و 24 هو:", options: ["12", "6", "4", "24"], correctAnswer: 0, difficulty: "easy", remedyPlan: "قواسم 36 و 24 المشتركة هي {1, 2, 3, 4, 6, 12}، وأكبرها 12." },
    { id: "m4_ma_2", text: "تبسيط العبارة √(50) هو:", options: ["5√2", "2√5", "10√5", "25√2"], correctAnswer: 0, difficulty: "medium", remedyPlan: "√50 = √(25 × 2) = √25 × √2 = 5√2." },
    { id: "m4_ma_3", text: "حسب مبرهنة طالس في المثلث، نستخدمها أساساً لـ:", options: ["حساب الأطوال وإثبات التوازي", "حساب الزوايا القائمة فقط", "حساب المساحة فقط", "رسم الدائرة المحيطة"], correctAnswer: 0, difficulty: "easy", remedyPlan: "خاصية طالس تمكننا من حساب الأطوال المجهولة، وخاصيتها العكسية لإثبات توازي مستقيمين." },
    { id: "m4_ma_4", text: "حل المعادلة x² = 49 في مجموعة الأعداد الحقيقية هو:", options: ["x = 7 أو x = -7", "x = 7 فقط", "x = -7 فقط", "لا يوجد حل"], correctAnswer: 0, difficulty: "easy", remedyPlan: "إذا كان a > 0 فإن للمعادلة x² = a حلين هما √a و -√a." },
    { id: "m4_ma_5", text: "في مثلث قائم، جيب تمام الزاوية الحادة (cos) يساوي:", options: ["طول الضلع المجاور / طول الوتر", "طول الضلع المقابل / طول الوتر", "طول المقابل / طول المجاور", "الوتر / المجاور"], correctAnswer: 0, difficulty: "easy", remedyPlan: "قانون جيب التمام: cos = المجاور / الوتر، أما sin = المقابل / الوتر." },
    { id: "m4_ma_6", text: "نشر العبارة الشهيرة (a - b)² يساوي:", options: ["a² - 2ab + b²", "a² + 2ab + b²", "a² - b²", "a² + b²"], correctAnswer: 0, difficulty: "easy", remedyPlan: "المتطابقة الشهيرة الثانية: (a - b)² = a² - 2ab + b²." },
    { id: "m4_ma_7", text: "الدالة الخطية هي كل دالة تكتب على الشكل:", options: ["f(x) = ax", "f(x) = ax + b", "f(x) = a/x", "f(x) = x²"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الدالة الخطية f(x) = ax وتمثيلها البياني مستقيم يمر بالمبدأ O." }
  ],
  "middle-4am-science": [
    { id: "m4_sc_1", text: "المغذيات الناتجة عن الهضم (أحماض أمينية، غلوكوز، فيتامينات) تمتص عبر الزغابات المعوية إلى:", options: ["الدم والبلغم (اللمف)", "البنكرياس", "المعدة مباشرة", "الكليتين"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الزغابات المعوية تمتص المغذيات عبر طريقين: الطريق الدموي والطريق اللمفاوي." },
    { id: "m4_sc_2", text: "الاستجابة المناعية الخلطية تتميز بتدخل:", options: ["الخلايا اللمفاوية البائية LB والأجسام المضادة", "الخلايا التائية LTc السامة", "الكريات الحمراء", "الصفائح الدموية"], correctAnswer: 0, difficulty: "medium", remedyPlan: "اللمفاويات LB تتمايز إلى خلايا بلازمية تفرز أجساماً مضادة نوعية تسري في الأخلاط (الدم واللمف)." },
    { id: "m4_sc_3", text: "الإنزيم النوعي المسؤول عن هضم النشاء في الفم هو:", options: ["الأميلاز اللعابي", "البروتياز", "الليباز", "المالتاز"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الأميلاز اللعابي يفكك النشاء المطبوخ إلى سكر شعير (مالتوز)." },
    { id: "m4_sc_4", text: "المركز العصبي المسؤول عن الأفعال الانعكاسية اللاإرادية هو:", options: ["النخاع الشوكي", "المخ", "المخيخ", "البصلة السيسائية"], correctAnswer: 0, difficulty: "easy", remedyPlan: "النخاع الشوكي هو المركز العصبي للأفعال اللاإرادية (المنعكسات الفطرية)." },
    { id: "m4_sc_5", text: "الزمرة الدموية التي تعتبر معطياً عاماً لجميع الزمر هي:", options: ["O سالب (O-)", "AB موجب (AB+)", "A موجب", "B موجب"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الزمرة O سالبة لا تحمل مولدات ضد على غشاء كرياتها الحمراء وتعتبر معطياً عاماً." }
  ],
  "middle-4am-physics": [
    { id: "m4_ph_1", text: "الذرة التي تكتسب إلكتروناً أو أكثر تتحول إلى:", options: ["شاردة سالبة (أنيون)", "شاردة موجبة (كاتيون)", "جزيء متعادل", "نواة"], correctAnswer: 0, difficulty: "easy", remedyPlan: "اكتساب إلكترونات سالبة يعطي شحنة سالبة إجمالية، فتصبح الذرة شاردة سالبة." },
    { id: "m4_ph_2", text: "في راسم الاهتزاز المهبطي، المنحنى البياني للتيار الكهربائي المتناوب الجيبي يكون على شكل:", options: ["موجات جيبية متناوبة (نوبات موجبة وسالبة)", "خط مستقيم أفقي", "خط منكسر", "نقاط متباعدة"], correctAnswer: 0, difficulty: "easy", remedyPlan: "التيار المتناوب يغير اتصاله وقيمته بمرور الزمن فيظهر على شكل تموجات جيبية." },
    { id: "m4_ph_3", text: "دور القاطع التفاضلي والمأخذ الأرضي في الشبكة الكهربائية المنزلية هو:", options: ["حماية الأشخاص من الصعق الكهربائي والأجهزة من التلف", "زيادة استهلاك الطاقة", "رفع الجهد الكهربائي", "توليد الكهرباء"], correctAnswer: 0, difficulty: "easy", remedyPlan: "المأخذ الأرضي مع القاطع التفاضلي يضمنان تسريب التيار الضائع وقطع التغذية لحماية الإنسان." },
    { id: "m4_ph_4", text: "العلاقة بين الثقل P والكتلة m عند شدة جاذبية g هي:", options: ["P = m × g", "P = m / g", "P = g / m", "P = m + g"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الثقل هو قوة جذب الأرض للجسم ويحسب بالقانون: P = m × g بالنيوتن (N)." }
  ],
  "middle-4am-french": [
    { id: "m4_fr_1", text: "Dans un texte argumentatif, la thèse représente:", options: ["L'opinion ou le point de vue défendu par l'auteur", "Un exemple illustratif", "La conclusion générale", "Les arguments des adversaires"], correctAnswer: 0, difficulty: "easy", remedyPlan: "La thèse est l'idée principale ou la prise de position soutenue par l'auteur à l'aide d'arguments." },
    { id: "m4_fr_2", text: "Le connecteur logique 'par conséquent' exprime:", options: ["La conséquence", "La cause", "L'opposition", "Le but"], correctAnswer: 0, difficulty: "easy", remedyPlan: "'Par conséquent', 'donc', 'ainsi' sont des articulateurs logiques de conséquence." },
    { id: "m4_fr_3", text: "Dans la phrase: 'La ville où je suis né est belle', le mot 'où' est un:", options: ["Pronom relatif", "Adverbe de temps", "Pronom personnel", "Conjonction de coordination"], correctAnswer: 0, difficulty: "medium", remedyPlan: "'Où' remplace le complément de lieu 'la ville' et introduit une proposition subordonnée relative." }
  ],
  "middle-4am-english": [
    { id: "m4_en_1", text: "Choose the correct passive voice: 'The student wrote the lesson.'", options: ["The lesson was written by the student.", "The lesson is written by the student.", "The lesson written the student.", "The lesson has written by student."], correctAnswer: 0, difficulty: "medium", remedyPlan: "Past simple passive is formed with was/were + past participle (was written)." },
    { id: "m4_en_2", text: "The relative pronoun used for people is:", options: ["Who", "Which", "Where", "When"], correctAnswer: 0, difficulty: "easy", remedyPlan: "'Who' refers to people, 'which' refers to things and animals, 'where' refers to places." }
  ],
  "middle-4am-history": [
    { id: "m4_hi_1", text: "انعقد مؤتمر الصومام التاريخي الذي أعاد تنظيم الثورة الجزائرية في:", options: ["20 أوت 1956", "1 نوفمبر 1954", "19 مارس 1962", "5 جويلية 1962"], correctAnswer: 0, difficulty: "easy", remedyPlan: "انعقد مؤتمر الصومام في 20 أوت 1956 في قرية إيفري أوزلاقن بوادي الصومام." },
    { id: "m4_hi_2", text: "قائد هجومات الشمال القسنطيني في 20 أوت 1955 هو الشهيد البطل:", options: ["زيغود يوسف", "مصطفى بن بولعيد", "العربي بن مهيدي", "كريم بلقاسم"], correctAnswer: 0, difficulty: "easy", remedyPlan: "قاد الشهيد زيغود يوسف هجومات 20 أوت 1955 لفك الحصار عن منطقة الأوراس." },
    { id: "m4_hi_3", text: "توقيع اتفاقيات إيفيان ووقف إطلاق النار كان في:", options: ["19 مارس 1962", "5 جويلية 1962", "1 نوفمبر 1954", "11 ديسمبر 1960"], correctAnswer: 0, difficulty: "easy", remedyPlan: "تم التوقيع على اتفاقيات إيفيان ووقف إطلاق النار رسمياً في 19 مارس 1962 (عيد النصر)." }
  ],
  "middle-4am-islamic": [
    { id: "m4_is_1", text: "الحج ركن من أركان الإسلام، وهو فرض في العمر:", options: ["مرة واحدة للمستطيع", "كل خمس سنوات", "كل سنة", "مرتين"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الحج فرض مرة واحدة في العمر على كل مسلم بالغ عاقل قادر ومستطيع مالياً وبدنياً." },
    { id: "m4_is_2", text: "الركن الأعظم من أركان الحج الذي بدونه يبطل الحج هو:", options: ["الوقوف بعرفة", "طواف الإفاضة", "السعي بين الصفا والمروة", "الإحرام"], correctAnswer: 0, difficulty: "easy", remedyPlan: "قال النبي ﷺ: 'الحج عرفة'، فالوقوف بعرفة هو الركن الأعظم." }
  ],
  "middle-4am-civic": [
    { id: "m4_ci_1", text: "القانون الأسمى للبلاد الذي ينظم السلطات ويحدد حقوق وواجبات المواطنين هو:", options: ["الدستور", "قانون العقوبات", "قانون العمل", "اللائحة الداخلية"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الدستور هو الوثيقة القانونية الأسمى في الدولة والتشريع الأساسي للجمهورية." },
    { id: "m4_ci_2", text: "الهيئة القضائية العليا التي تمثل قمة الهرم القضائي العادي في الجزائر هي:", options: ["المحكمة العليا", "المجلس القضائي", "المحكمة الابتدائية", "مجلس الدولة"], correctAnswer: 0, difficulty: "easy", remedyPlan: "المحكمة العليا تراقب صحة تطبيق القانون وتعد قمة هرم القضاء العادي." }
  ],

  // Secondary 3AS (السنة الثالثة ثانوي - بكالوريا BAC)
  "secondary-3as-math": [
    { id: "s3_ma_1", text: "مشتقة الدالة الأسية f(x) = e^(2x + 1) هي:", options: ["f'(x) = 2 · e^(2x + 1)", "f'(x) = e^(2x + 1)", "f'(x) = (2x + 1) · e^(2x)", "f'(x) = 2x · e^(2x + 1)"], correctAnswer: 0, difficulty: "medium", remedyPlan: "مشتقة e^(u(x)) هي u'(x) · e^(u(x))، ومشتقة 2x+1 هي 2، إذن 2·e^(2x+1)." },
    { id: "s3_ma_2", text: "نهاية الدالة f(x) = (ln x) / x عند +∞ تساوي:", options: ["0", "1", "+∞", "-∞"], correctAnswer: 0, difficulty: "easy", remedyPlan: "نهاية شهيرة للتزايد المقارن: lim (x->+∞) [ln(x)/x] = 0." },
    { id: "s3_ma_3", text: "إذا كانت المتتالية الهندسية (vₙ) حدها الأول v₀ = 3 وأساسها q = 2، فإن عبارتها العامة هي:", options: ["vₙ = 3 × 2ⁿ", "vₙ = 3 + 2n", "vₙ = 2 × 3ⁿ", "vₙ = 6ⁿ"], correctAnswer: 0, difficulty: "easy", remedyPlan: "الحد العام لمتتالية هندسية: vₙ = v₀ × qⁿ = 3 × 2ⁿ." }
  ],
  "secondary-3as-physics": [
    { id: "s3_ph_1", text: "زمن نصف العمر t_(1/2) لعينة مشعة هو المدة اللازمة لـ:", options: ["تفكك نصف الأنوية الابتدائية المشعة N₀/2", "تفكك كل الأنوية", "مضاعفة النشاط الإشعاعي", "توقف الإشعاع"], correctAnswer: 0, difficulty: "easy", remedyPlan: "t_(1/2) هو الزمن اللازم لتفكك نصف عدد الأنوية المشعة الابتدائية N(t) = N₀/2." },
    { id: "s3_ph_2", text: "ثابت الزمن τ لدارة RC يتكون من مقاومة R ومكثفة C يعطى بـ:", options: ["τ = R × C", "τ = R / C", "τ = C / R", "τ = 1 / (R × C)"], correctAnswer: 0, difficulty: "easy", remedyPlan: "ثابت الزمن في دارة شحن/تفريغ المكثفة هو τ = RC وبعده الزمني هو الثانية (s)." }
  ],
  "secondary-3as-philosophy": [
    { id: "s3_phl_1", text: "المذهب الفلسفي الذي يرى أن الحواس والتجربة هي المصدر الوحيد والأساسي للمعرفة هو:", options: ["المذهب التجريبي (الحسي)", "المذهب العقلي", "المذهب المثالي", "المذهب الوجودي"], correctAnswer: 0, difficulty: "easy", remedyPlan: "المذهب التجريبي (جون لوك، دافيد هيوم) يؤكد أن العقل صفحة بيضاء والتجربة هي التي تخط عليه المعرفة." },
    { id: "s3_phl_2", text: "صاحب مقولة 'الإنسان كائن عاقل، والعقل هو أعدل قسمة بين البشر' هو الفيلسوف:", options: ["رينيه ديكارت", "إيمانويل كانط", "أرسطو", "نيتشه"], correctAnswer: 0, difficulty: "easy", remedyPlan: "رينيه ديكارت رائد المذهب العقلي وصاحب كتاب مقال عن المنهج." }
  ]
};

// Procedural question generator to provide infinite unique questions for any level/year/subject
export function generateProceduralInfiniteQuestions(
  subject: string,
  levelId: string = 'middle',
  yearId: string = '1am',
  count: number = 10,
  difficulty: Difficulty = 'medium'
): Question[] {
  const list: Question[] = [];
  const normSub = subject.toLowerCase();

  const isPrimary = levelId === 'primary';
  const isMiddle = levelId === 'middle';
  const isSecondary = levelId === 'secondary';

  for (let i = 0; i < count; i++) {
    const qId = `inf_${levelId}_${yearId}_${i}_${Math.random().toString(36).substring(2, 7)}`;

    // 1. Math generator
    if (normSub.includes('رياضيات') || normSub.includes('math')) {
      if (isPrimary) {
        if (yearId === '1ap' || yearId === '2ap') {
          const a = Math.floor(Math.random() * 9) + 1;
          const b = Math.floor(Math.random() * 9) + 1;
          const isAdd = Math.random() > 0.3;
          const ans = isAdd ? a + b : Math.max(a, b) - Math.min(a, b);
          const qText = isAdd ? `احسب ناتج العملية التالية: ${a} + ${b} = ؟` : `احسب ناتج الطرح: ${Math.max(a, b)} - ${Math.min(a, b)} = ؟`;
          const wrongs = [ans + 1, ans - 1, ans + 2].filter(w => w !== ans && w >= 0);
          while (wrongs.length < 3) wrongs.push(ans + wrongs.length + 3);
          const allOptions = [String(ans), ...wrongs.slice(0, 3).map(String)].sort(() => Math.random() - 0.5);
          list.push({
            id: qId,
            text: qText,
            options: allOptions,
            correctAnswer: allOptions.indexOf(String(ans)),
            difficulty: 'easy',
            remedyPlan: `الجواب الصحيح هو ${ans}. قم بالعد بدقة واستعمال الأصابع أو الخشيبات للتحقق.`
          });
        } else {
          // 3AP, 4AP, 5AP
          const a = Math.floor(Math.random() * 8) + 2;
          const b = Math.floor(Math.random() * 8) + 2;
          const ans = a * b;
          const qText = `ما هو حاصل ضرب: ${a} × ${b} = ؟`;
          const wrongs = [ans + a, ans - b, ans + 2].filter(w => w !== ans && w > 0);
          const allOptions = [String(ans), ...wrongs.slice(0, 3).map(String)].sort(() => Math.random() - 0.5);
          list.push({
            id: qId,
            text: qText,
            options: allOptions,
            correctAnswer: allOptions.indexOf(String(ans)),
            difficulty: 'medium',
            remedyPlan: `حاصل الضرب ${a} × ${b} = ${ans}. احرص على مراجعة جدول الضرب بانتظام.`
          });
        }
      } else if (isMiddle) {
        // Middle School Math: equations, powers, geometry
        const types = ['eq', 'power', 'geo', 'pgcd'];
        const chosen = types[i % types.length];
        if (chosen === 'eq') {
          const a = Math.floor(Math.random() * 5) + 2;
          const x = Math.floor(Math.random() * 8) + 1;
          const b = Math.floor(Math.random() * 10) + 1;
          const c = a * x + b;
          const qText = `حل المعادلة التالية: ${a}x + ${b} = ${c}`;
          const wrongs = [x + 1, x - 1, x + 2].filter(w => w !== x && w > 0);
          const allOptions = [`x = ${x}`, ...wrongs.slice(0, 3).map(w => `x = ${w}`)].sort(() => Math.random() - 0.5);
          list.push({
            id: qId,
            text: qText,
            options: allOptions,
            correctAnswer: allOptions.indexOf(`x = ${x}`),
            difficulty: 'medium',
            remedyPlan: `ننقل ${b} للطرف الآخر: ${a}x = ${c} - ${b} = ${c - b}، ثم نقسم على ${a}: x = ${x}.`
          });
        } else if (chosen === 'power') {
          const base = [2, 3, 5, 10][Math.floor(Math.random() * 4)];
          const exp = [2, 3, 4][Math.floor(Math.random() * 3)];
          const ans = Math.pow(base, exp);
          const qText = `احسب قيمة القوة: ${base}^${exp} (أي ${base} أس ${exp}) = ؟`;
          const wrongs = [ans + base, ans - 1, base * exp].filter(w => w !== ans);
          const allOptions = [String(ans), ...wrongs.slice(0, 3).map(String)].sort(() => Math.random() - 0.5);
          list.push({
            id: qId,
            text: qText,
            options: allOptions,
            correctAnswer: allOptions.indexOf(String(ans)),
            difficulty: 'easy',
            remedyPlan: `${base}^${exp} تعني ضرب ${base} في نفسه ${exp} مرات، والنتيجة هي ${ans}.`
          });
        } else if (chosen === 'pgcd') {
          const k = Math.floor(Math.random() * 6) + 2;
          const a = 3 * k;
          const b = 5 * k;
          const qText = `القاسم المشترك الأكبر PGCD للعددين (${a}, ${b}) هو:`;
          const wrongs = [k + 1, 1, 2 * k].filter(w => w !== k);
          const allOptions = [String(k), ...wrongs.slice(0, 3).map(String)].sort(() => Math.random() - 0.5);
          list.push({
            id: qId,
            text: qText,
            options: allOptions,
            correctAnswer: allOptions.indexOf(String(k)),
            difficulty: 'medium',
            remedyPlan: `باستعمال خوارزمية إقليدس أو القسمات المتتالية نجد أن PGCD(${a}, ${b}) = ${k}.`
          });
        } else {
          const l = Math.floor(Math.random() * 6) + 3;
          const w = Math.floor(Math.random() * 4) + 2;
          const area = l * w;
          const qText = `مستطيل طوله ${l} cm وعرضه ${w} cm، ما هي مساحته؟`;
          const wrongs = [2 * (l + w), area + 2, area - 1].filter(x => x !== area);
          const allOptions = [`${area} cm²`, ...wrongs.slice(0, 3).map(x => `${x} cm²`)].sort(() => Math.random() - 0.5);
          list.push({
            id: qId,
            text: qText,
            options: allOptions,
            correctAnswer: allOptions.indexOf(`${area} cm²`),
            difficulty: 'easy',
            remedyPlan: `مساحة المستطيل = الطول × العرض = ${l} × ${w} = ${area} cm².`
          });
        }
      } else {
        // Secondary Math
        const a = Math.floor(Math.random() * 4) + 2;
        const n = Math.floor(Math.random() * 3) + 2;
        const qText = `ما هي الدالة المشتقة للدالة f(x) = ${a}x^${n} ؟`;
        const ans = `${a * n}x^${n - 1 === 1 ? '' : n - 1}`;
        const wrongs = [`${a}x^${n - 1}`, `${a * n}x^${n}`, `${n}x^${n - 1}`];
        const allOptions = [`f'(x) = ${ans}`, ...wrongs.map(w => `f'(x) = ${w}`)].sort(() => Math.random() - 0.5);
        list.push({
          id: qId,
          text: qText,
          options: allOptions,
          correctAnswer: allOptions.indexOf(`f'(x) = ${ans}`),
          difficulty: 'medium',
          remedyPlan: `مشتقة الدالة a·x^n هي a·n·x^(n-1). إذن مشتقة ${a}x^${n} هي ${a * n}x^${n - 1}.`
        });
      }
    } 
    // 2. Physics & Chemistry
    else if (normSub.includes('فيزياء') || normSub.includes('كيمياء') || normSub.includes('physics')) {
      const physicsPool = [
        {
          text: "ما هي الوحدة الدولية لقياس شدة التيار الكهربائي في النظام الدولي؟",
          ans: "الأمبير (A)",
          wrongs: ["الفولط (V)", "الأوم (Ω)", "الواط (W)"],
          exp: "وحدة شدة التيار هي الأمبير (A) وتقاس بجهاز الأمبيرمتر."
        },
        {
          text: "قانون حساب السرعة المتوسطة (v) بدلالة المسافة (d) والزمن (t) هو:",
          ans: "v = d / t",
          wrongs: ["v = d × t", "v = t / d", "v = d + t"],
          exp: "السرعة المتوسطة تساوي حاصل قسمة المسافة المقطوعة على الزمن المستغرق: v = d / t."
        },
        {
          text: "ما هي صيغة جزيء غاز ثنائي أكسيد الكربون؟",
          ans: "CO₂",
          wrongs: ["CO", "O₂", "CH₄"],
          exp: "يتكون ثنائي أكسيد الكربون من ذرة كربون وذرتي أكسجين (CO₂)."
        },
        {
          text: "التحول الكيميائي هو تحول:",
          ans: "تنتج عنه مواد جديدة تختلف في خواصها عن المواد الابتدائية",
          wrongs: ["يمكن الرجوع فيه للحالة الأصلية بسهولة", "لا تتغير فيه طبيعة المادة", "يحافظ على شكل الأجسام فقط"],
          exp: "التحول الكيميائي يغير من طبيعة المادة وتنتج عنه مواد جديدة تماماً."
        }
      ];
      const item = physicsPool[i % physicsPool.length];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'medium',
        remedyPlan: item.exp
      });
    }
    // 3. Arabic Language
    else if (normSub.includes('عرب') || normSub.includes('arabic')) {
      const verbs = [
        { root: "كتبَ", ismFail: "كاتب", ismMaf: "مكتوب", masdar: "كتابة" },
        { root: "درسَ", ismFail: "دارس", ismMaf: "مدروس", masdar: "دراسة" },
        { root: "صنعَ", ismFail: "صانع", ismMaf: "مصنوع", masdar: "صناعة" },
        { root: "رسمَ", ismFail: "راسم", ismMaf: "مرسوم", masdar: "رسم" },
        { root: "علمَ", ismFail: "عالم", ismMaf: "معلوم", masdar: "علم" }
      ];
      const v = verbs[i % verbs.length];
      const isFail = Math.random() > 0.5;
      const qText = isFail ? `ما هو اسم الفاعل المشتق من الفعل الثلاثي "${v.root}"؟` : `ما هو اسم المفعول المشتق من الفعل الثلاثي "${v.root}"؟`;
      const correctAns = isFail ? v.ismFail : v.ismMaf;
      const wrongs = [v.masdar, isFail ? v.ismMaf : v.ismFail, `تـ${v.root}`];
      const allOptions = [correctAns, ...wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: qText,
        options: allOptions,
        correctAnswer: allOptions.indexOf(correctAns),
        difficulty: 'easy',
        remedyPlan: `يُصاغ اسم الفاعل من الثلاثي على وزن (فاعِل) واسم المفعول على وزن (مفعُول). فالصحيح: ${correctAns}.`
      });
    }
    // 4. Natural Sciences (العلوم الطبيعية والحياة)
    else if (normSub.includes('طبيع') || normSub.includes('علوم') || normSub.includes('science')) {
      const sciencePool = [
        {
          text: "الوحدة البنائية والوظيفية الأساسية لجميع الكائنات الحية هي:",
          ans: "الخلية",
          wrongs: ["النسيج", "العضو", "الجهاز"],
          exp: "الخلية هي الوحدة الأساسية للحياة والتركيب في كل الكائنات الحية."
        },
        {
          text: "العملية الحيوية التي يقوم بها النبات الأخضر لصنع غذائه بوجود الضوء واليخضور هي:",
          ans: "التركيب الضوئي",
          wrongs: ["التنفس الخلوي", "النتح", "الامتصاص فقط"],
          exp: "التركيب الضوئي يحول الطاقة الضوئية إلى طاقة كيميائية مخزنة في المواد العضوية."
        },
        {
          text: "العضو المسؤول عن ضخ الدم وتوزيعه في كافة أنحاء الجسم هو:",
          ans: "القلب",
          wrongs: ["الرئتان", "الكبد", "المعدة"],
          exp: "القلب هو المضخة المركزية للجهاز الدوراني التي تحرك الدم باستمرار."
        },
        {
          text: "تتم عملية المبادلات الغازية التنفسية في الرئتين على مستوى:",
          ans: "الأسناخ الرئوية",
          wrongs: ["القصبة الهوائية", "الحنجرة", "الشعب الهوائية"],
          exp: "الأسناخ الرئوية ذات الجدران الرقيقة والشبكة الدموية الغزيرة هي مقر تبادل الغازات."
        }
      ];
      const item = sciencePool[i % sciencePool.length];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'medium',
        remedyPlan: item.exp
      });
    }
    // 5. French Language (اللغة الفرنسية)
    else if (normSub.includes('فرنس') || normSub.includes('french')) {
      const frenchPool = [
        {
          text: "Dans la phrase 'Les élèves écoutent attentivement', le mot 'attentivement' est un:",
          ans: "Adverbe de manière",
          wrongs: ["Adjectif qualificatif", "Nom commun", "Verbe à l'infinitif"],
          exp: "Les mots terminés par '-ment' sont généralement des adverbes de manière."
        },
        {
          text: "Quel est le participe passé du verbe 'choisir'?",
          ans: "Choisi",
          wrongs: ["Choisissant", "Choisira", "Choisit"],
          exp: "Les verbes du 2ème groupe font leur participe passé en -i (choisir -> choisi)."
        },
        {
          text: "Trouvez l'antonyme (le contraire) du mot 'éphémère':",
          ans: "Durable",
          wrongs: ["Court", "Passager", "Rapide"],
          exp: "'Éphémère' signifie qui dure très peu de temps; son antonyme est 'durable'."
        }
      ];
      const item = frenchPool[i % frenchPool.length];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'medium',
        remedyPlan: item.exp
      });
    }
    // 6. English Language (اللغة الإنجليزية)
    else if (normSub.includes('إنجليز') || normSub.includes('انجليز') || normSub.includes('english')) {
      const englishPool = [
        {
          text: "Choose the correct past tense of the irregular verb 'to go':",
          ans: "Went",
          wrongs: ["Goed", "Gone", "Going"],
          exp: "The simple past of the irregular verb 'go' is 'went'."
        },
        {
          text: "What is the opposite of the adjective 'generous'?",
          ans: "Stingy",
          wrongs: ["Kind", "Polite", "Helpful"],
          exp: "'Stingy' or 'mean' is the direct opposite of 'generous'."
        },
        {
          text: "Which suffix is used to make the comparative of short adjectives (e.g., tall)?",
          ans: "-er (taller)",
          wrongs: ["-est", "-ly", "-ful"],
          exp: "Short adjectives take the suffix '-er' in the comparative form: taller than."
        }
      ];
      const item = englishPool[i % englishPool.length];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'medium',
        remedyPlan: item.exp
      });
    }
    // 7. Islamic Education (التربية الإسلامية)
    else if (normSub.includes('إسلام') || normSub.includes('islamic')) {
      const islamicPool = [
        {
          text: "ما هو الركن الأول من أركان الإسلام الخمسة؟",
          ans: "الشهادتان (شهادة أن لا إله إلا الله وأن محمداً رسول الله)",
          wrongs: ["إقام الصلاة", "إيتاء الزكاة", "صوم رمضان"],
          exp: "الركن الأول هو شهادة أن لا إله إلا الله وأن محمداً رسول الله، وهو مفتاح الدخول في الإسلام."
        },
        {
          text: "الصلوات المفروضة على المسلم في اليوم والليلة عددها:",
          ans: "خمس صلوات",
          wrongs: ["ثلاث صلوات", "أربع صلوات", "ست صلوات"],
          exp: "فرض الله على المسلمين خمس صلوات في اليوم والليلة (الصبح، الظهر، العصر، المغرب، العشاء)."
        },
        {
          text: "سورة الفاتحة تسمى أيضاً بـ:",
          ans: "أم الكتاب والسبع المثاني",
          wrongs: ["عروس القرآن", "قلب القرآن", "سورة التوحيد"],
          exp: "تسمى الفاتحة بأم الكتاب وفاتحة الكتاب والسبع المثاني لأنها سبع آيات تثنى في كل ركعة."
        }
      ];
      const item = islamicPool[i % islamicPool.length];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'easy',
        remedyPlan: item.exp
      });
    }
    // 8. Civic Education (التربية المدنية)
    else if (normSub.includes('مدني') || normSub.includes('civic')) {
      const civicPool = [
        {
          text: "القانون الأعلى في الدولة الذي ينظم شؤون الحكم ويحدد الحقوق والواجبات هو:",
          ans: "الدستور",
          wrongs: ["المرسوم التنفيذي", "القانون البلدي", "النظام الداخلي"],
          exp: "الدستور هو الوثيقة الأساسية الأسمى التي تبنى عليها كافة القوانين والتشريعات."
        },
        {
          text: "المجلس الشعبي البلدي يمثل هيئة منتخبة على مستوى:",
          ans: "البلدية",
          wrongs: ["الولاية", "الجمهورية بأكملها", "الدائرة فقط"],
          exp: "المجلس الشعبي البلدي (APC) ينتخبه سكان البلدية لإدارة شؤونها المحلية."
        }
      ];
      const item = civicPool[i % civicPool.length];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'easy',
        remedyPlan: item.exp
      });
    }
    // 9. History & Geography (التاريخ والجغرافيا)
    else if (normSub.includes('تاريخ') || normSub.includes('جغراف') || normSub.includes('history')) {
      const histPool = [
        {
          text: "في أي عام اندلعت الثورة التحريرية الجزائرية الكبرى؟",
          ans: "1 نوفمبر 1954",
          wrongs: ["5 جويلية 1962", "8 ماي 1945", "19 مارس 1962"],
          exp: "اندلعت الثورة الجزائرية التحريرية الكبرى في الأول من نوفمبر 1954."
        },
        {
          text: "ما هي أطول سلسلة جبلية تمتد في شمال الجزائر؟",
          ans: "سلسلة الأطلس التلي",
          wrongs: ["سلسلة الهقار", "جبال الطاسيلي", "الأطلس الصحراوي فقط"],
          exp: "يمتد الأطلس التلي بمحاذاة الساحل الجزائري ويضم جبال جرجرة والونشريس والبابور."
        },
        {
          text: "أكبر ولاية في الجزائر من حيث المساحة الجغرافية هي:",
          ans: "ولاية تمنراست",
          wrongs: ["ولاية الجزائر", "ولاية وهران", "ولاية سطيف"],
          exp: "تعتبر ولايات الجنوب الجزائري الأكبر مساحة وتتصدرها ولايات أقصى الجنوب."
        }
      ];
      const item = histPool[i % histPool.length];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'medium',
        remedyPlan: item.exp
      });
    }
    // 10. General fallback (only if unclassified)
    else {
      const mathFallback = [
        {
          text: "مجموع زوايا أي مثلث في الهندسة الإقليدية يساوي:",
          ans: "180 درجة",
          wrongs: ["90 درجة", "360 درجة", "270 درجة"],
          exp: "مجموع قياسات الزوايا الداخلية لأي مثلث يساوي دائماً 180°."
        }
      ];
      const item = mathFallback[0];
      const allOptions = [item.ans, ...item.wrongs].sort(() => Math.random() - 0.5);
      list.push({
        id: qId,
        text: item.text,
        options: allOptions,
        correctAnswer: allOptions.indexOf(item.ans),
        difficulty: 'easy',
        remedyPlan: item.exp
      });
    }
  }

  return list;
}

export function getFallbackQuestions(
  subject: string, 
  count: number = 10, 
  difficulty?: Difficulty,
  levelId?: string,
  yearId?: string,
  trackId?: string
): Question[] {
  const normalizedKey = normalizeSubjectKey(subject);
  const subSlug = getSubjectSlug(subject);
  
  // 1. Collect ONLY grade-specific questions that strictly match this subject slug
  const candidateKeys: string[] = [];
  if (levelId && yearId) {
    if (trackId) candidateKeys.push(`${levelId}-${yearId}-${trackId}-${subSlug}`);
    candidateKeys.push(`${levelId}-${yearId}-${subSlug}`);
  }
  if (levelId) {
    candidateKeys.push(`${levelId}-${subSlug}`);
  }

  let gradeSpecificPool: Question[] = [];
  for (const k of candidateKeys) {
    if (GRADE_SPECIFIC_QUESTIONS[k] && GRADE_SPECIFIC_QUESTIONS[k].length > 0) {
      gradeSpecificPool = [...gradeSpecificPool, ...GRADE_SPECIFIC_QUESTIONS[k]];
    }
  }

  // 2. Add questions from the dedicated fallback pool for THIS EXACT SUBJECT
  const subjectFallbackPool = FALLBACK_QUESTIONS[normalizedKey] || [];
  
  // STRICT ISOLATION: Pool consists ONLY of questions from this specific subject
  let pool = [...gradeSpecificPool, ...subjectFallbackPool];

  // Filter by difficulty if requested and available
  let filtered = pool;
  if (difficulty) {
    const diffFiltered = pool.filter(q => q.difficulty === difficulty);
    if (diffFiltered.length >= 2) {
      filtered = diffFiltered;
    }
  }

  // Deduplicate pool by text
  const seenTexts = new Set<string>();
  const uniquePool: Question[] = [];
  for (const q of filtered) {
    const t = q.text.trim();
    if (!seenTexts.has(t)) {
      seenTexts.add(t);
      uniquePool.push(q);
    }
  }

  // Randomize questions order
  const shuffled = [...uniquePool].sort(() => 0.5 - Math.random());
  
  const result: Question[] = [];
  for (const q of shuffled) {
    if (result.length >= count) break;
    result.push({
      ...q,
      id: `${q.id}`
    });
  }

  // 3. If STILL need more to fulfill count, dynamically generate procedurally FOR THIS EXACT SUBJECT!
  if (result.length < count) {
    const needed = count - result.length;
    const procedural = generateProceduralInfiniteQuestions(
      normalizedKey,
      levelId || 'middle',
      yearId || '4am',
      needed + 5,
      difficulty || 'medium'
    );
    for (const pq of procedural) {
      if (result.length >= count) break;
      const t = pq.text.trim();
      if (!seenTexts.has(t)) {
        seenTexts.add(t);
        result.push(pq);
      }
    }
  }

  return result;
}

export function get50WeeklyContestQuestions(level?: string): Question[] {
  const subjects = [
    "الرياضيات", 
    "اللغة العربية", 
    "العلوم الطبيعية", 
    "العلوم الفيزيائية", 
    "التاريخ", 
    "تربية إسلامية",
    "اللغة الإنجليزية",
    "اللغة الفرنسية",
    "تربية مدنية"
  ];
  const list: Question[] = [];
  const seenTexts = new Set<string>();

  // 1. General culture / foundation questions
  const general = getFallbackQuestions("general", 10);
  for (const q of general) {
    if (!seenTexts.has(q.text.trim())) {
      seenTexts.add(q.text.trim());
      list.push(q);
    }
  }

  // 2. Add questions from diverse academic subjects
  for (const sub of subjects) {
    const subQ = getFallbackQuestions(sub, 8, 'medium', level || 'middle', '4am');
    for (const q of subQ) {
      if (list.length >= 50) break;
      if (!seenTexts.has(q.text.trim())) {
        seenTexts.add(q.text.trim());
        list.push(q);
      }
    }
    if (list.length >= 50) break;
  }

  // 3. Guarantee full 50 questions
  if (list.length < 50) {
    const needed = 50 - list.length;
    const procedural = generateProceduralInfiniteQuestions("math", level || "middle", "4am", needed + 10, "medium");
    for (const q of procedural) {
      if (list.length >= 50) break;
      if (!seenTexts.has(q.text.trim())) {
        seenTexts.add(q.text.trim());
        list.push(q);
      }
    }
  }

  return list.slice(0, 50).map((q, idx) => ({
    ...q,
    id: `contest_q_${idx + 1}`
  }));
}

export function getFallbackExercises(subject: string): Array<{
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}> {
  const questions = getFallbackQuestions(subject, 5);
  return questions.map(q => ({
    question: q.text,
    options: q.options,
    correctAnswerIndex: q.correctAnswer,
    explanation: q.remedyPlan || "إجابة صحيحة حسب المنهاج الجزائري."
  }));
}
