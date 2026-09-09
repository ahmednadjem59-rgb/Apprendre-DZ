import { LevelData, Question } from './types';

export const LEVELS: LevelData[] = [
  {
    id: 'primary',
    name: 'التعليم الابتدائي',
    years: [
      { 
        id: '1ap', 
        name: 'السنة الأولى ابتدائي',
        subjects: [
          { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-emerald-500' },
          { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-500' },
          { id: 'islamic', name: 'تربية إسلامية', icon: 'Heart', color: 'bg-rose-500' },
          { id: 'civic', name: 'تربية مدنية', icon: 'Shield', color: 'bg-indigo-500' },
          { id: 'science', name: 'تربية علمية', icon: 'Beaker', color: 'bg-purple-500' },
        ]
      },
      { 
        id: '2ap', 
        name: 'السنة الثانية ابتدائي',
        subjects: [
          { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-emerald-500' },
          { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-500' },
          { id: 'islamic', name: 'تربية إسلامية', icon: 'Heart', color: 'bg-rose-500' },
          { id: 'civic', name: 'تربية مدنية', icon: 'Shield', color: 'bg-indigo-500' },
          { id: 'science', name: 'تربية علمية', icon: 'Beaker', color: 'bg-purple-500' },
        ]
      },
      { 
        id: '3ap', 
        name: 'السنة الثالثة ابتدائي',
        subjects: [
          { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-emerald-500' },
          { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-500' },
          { id: 'islamic', name: 'تربية إسلامية', icon: 'Heart', color: 'bg-rose-500' },
          { id: 'civic', name: 'تربية مدنية', icon: 'Shield', color: 'bg-indigo-500' },
          { id: 'science', name: 'تربية علمية', icon: 'Beaker', color: 'bg-purple-500' },
          { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-500' },
          { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-500' },
          { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-600' },
        ]
      },
      { 
        id: '4ap', 
        name: 'السنة الرابعة ابتدائي',
        subjects: [
          { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-emerald-500' },
          { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-500' },
          { id: 'islamic', name: 'تربية إسلامية', icon: 'Heart', color: 'bg-rose-500' },
          { id: 'civic', name: 'تربية مدنية', icon: 'Shield', color: 'bg-indigo-500' },
          { id: 'science', name: 'تربية علمية', icon: 'Beaker', color: 'bg-purple-500' },
          { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-500' },
          { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-500' },
          { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-600' },
        ]
      },
      { 
        id: '5ap', 
        name: 'السنة الخامسة ابتدائي',
        subjects: [
          { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-emerald-500' },
          { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-500' },
          { id: 'islamic', name: 'تربية إسلامية', icon: 'Heart', color: 'bg-rose-500' },
          { id: 'civic', name: 'تربية مدنية', icon: 'Shield', color: 'bg-indigo-500' },
          { id: 'science', name: 'تربية علمية', icon: 'Beaker', color: 'bg-purple-500' },
          { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-500' },
          { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-500' },
          { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-600' },
        ]
      },
    ],
    subjects: [], // Generic subjects handled by years
  },
  {
    id: 'middle',
    name: 'التعليم المتوسط',
    years: [
      { id: '1am', name: 'السنة الأولى متوسط' },
      { id: '2am', name: 'السنة الثانية متوسط' },
      { id: '3am', name: 'السنة الثالثة متوسط' },
      { id: '4am', name: 'السنة الرابعة متوسط' },
    ],
    subjects: [
      { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-emerald-600' },
      { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-600' },
      { id: 'physics', name: 'علوم فيزيائية وتكنولوجيا', icon: 'Flame', color: 'bg-yellow-600' },
      { id: 'science', name: 'علوم الطبيعة والحياة', icon: 'Beaker', color: 'bg-emerald-700' },
      { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-600' },
      { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-600' },
      { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-700' },
      { id: 'islamic', name: 'تربية إسلامية', icon: 'Heart', color: 'bg-rose-600' },
      { id: 'civic', name: 'تربية مدنية', icon: 'Shield', color: 'bg-indigo-600' },
      { id: 'informatics', name: 'المعلوماتية', icon: 'Book', color: 'bg-slate-600' },
    ],
  },
  {
    id: 'secondary',
    name: 'التعليم الثانوي',
    years: [
      { 
        id: '1as', 
        name: 'السنة الأولى ثانوي',
        tracks: [
          { 
            id: 'st_core', 
            name: 'جذع مشترك علوم وتكنولوجيا',
            subjects: [
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-700' },
              { id: 'physics', name: 'العلوم الفيزيائية', icon: 'Flame', color: 'bg-indigo-600' },
              { id: 'science', name: 'علوم الطبيعة والحياة', icon: 'Beaker', color: 'bg-emerald-800' },
              { id: 'technology', name: 'التكنولوجيا', icon: 'Book', color: 'bg-slate-700' },
              { id: 'arabic', name: 'اللغة العربية والآداب', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'islamic', name: 'العلوم الإسلامية', icon: 'Heart', color: 'bg-rose-600' },
              { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-700' },
              { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-700' },
              { id: 'informatics', name: 'المعلوماتية', icon: 'Book', color: 'bg-slate-600' },
            ]
          },
          { 
            id: 'arts_core', 
            name: 'جذع مشترك آداب',
            subjects: [
              { id: 'arabic', name: 'اللغة العربية والآداب', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'islamic', name: 'العلوم الإسلامية', icon: 'Heart', color: 'bg-rose-600' },
              { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-700' },
              { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-700' },
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-700' },
              { id: 'science', name: 'علوم الطبيعة والحياة', icon: 'Beaker', color: 'bg-emerald-800' },
              { id: 'informatics', name: 'المعلوماتية', icon: 'Book', color: 'bg-slate-600' },
            ]
          }
        ]
      },
      { 
        id: '2as', 
        name: 'السنة الثانية ثانوي',
        tracks: [
          { 
            id: 'exp_science', 
            name: 'شعبة علوم تجريبية',
            subjects: [
              { id: 'science', name: 'علوم الطبيعة والحياة', icon: 'Beaker', color: 'bg-emerald-800' },
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' },
              { id: 'physics', name: 'العلوم الفيزيائية', icon: 'Flame', color: 'bg-indigo-700' },
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
              { id: 'arabic', name: 'اللغة العربية والآداب', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'islamic', name: 'العلوم الإسلامية', icon: 'Heart', color: 'bg-rose-600' },
              { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-700' },
              { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-700' },
            ]
          },
          { 
            id: 'math_track', 
            name: 'شعبة رياضيات', 
            subjects: [
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' }, 
              { id: 'physics', name: 'الفيزياء', icon: 'Flame', color: 'bg-indigo-700' },
              { id: 'science', name: 'العلوم الطبيعية', icon: 'Beaker', color: 'bg-emerald-800' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
            ] 
          },
          { 
            id: 'tech_math', 
            name: 'شعبة تقني رياضي', 
            subjects: [
              { id: 'technology', name: 'التكنولوجيا', icon: 'Book', color: 'bg-slate-700' }, 
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' },
              { id: 'physics', name: 'الفيزياء', icon: 'Flame', color: 'bg-indigo-700' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
            ] 
          },
          { 
            id: 'management', 
            name: 'شعبة تسيير واقتصاد', 
            subjects: [
              { id: 'accounting', name: 'المحاسبة', icon: 'TrendingUp', color: 'bg-emerald-600' },
              { id: 'economics', name: 'الاقتصاد والمناجمنت', icon: 'Zap', color: 'bg-blue-600' },
              { id: 'law', name: 'القانون', icon: 'Shield', color: 'bg-slate-600' },
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
            ] 
          },
          { 
            id: 'arts_phil', 
            name: 'شعبة آداب وفلسفة', 
            subjects: [
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'islamic', name: 'العلوم الإسلامية', icon: 'Heart', color: 'bg-rose-600' },
              { id: 'languages', name: 'اللغات الأجنبية', icon: 'Languages', color: 'bg-cyan-700' },
            ] 
          },
          { 
            id: 'languages', 
            name: 'شعبة لغات أجنبية', 
            subjects: [
              { id: 'languages', name: 'اللغات الأجنبية', icon: 'Languages', color: 'bg-cyan-700' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'english', name: 'الإنجليزية', icon: 'Languages', color: 'bg-orange-700' },
              { id: 'french', name: 'الفرنسية', icon: 'Languages', color: 'bg-cyan-700' },
            ] 
          },
        ]
      },
      { 
        id: '3as', 
        name: 'السنة الثالثة ثانوي',
        tracks: [
          { 
            id: 'exp_science', 
            name: 'شعبة علوم تجريبية',
            subjects: [
              { id: 'science', name: 'علوم الطبيعة والحياة', icon: 'Beaker', color: 'bg-emerald-800' },
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' },
              { id: 'physics', name: 'العلوم الفيزيائية', icon: 'Flame', color: 'bg-indigo-700' },
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
              { id: 'arabic', name: 'اللغة العربية والآداب', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'islamic', name: 'العلوم الإسلامية', icon: 'Heart', color: 'bg-rose-600' },
              { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-700' },
              { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-700' },
            ]
          },
          { 
            id: 'math_track', 
            name: 'شعبة رياضيات', 
            subjects: [
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' }, 
              { id: 'physics', name: 'الفيزياء', icon: 'Flame', color: 'bg-indigo-700' },
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'science', name: 'العلوم الطبيعية', icon: 'Beaker', color: 'bg-emerald-800' },
            ] 
          },
          { 
            id: 'tech_math', 
            name: 'شعبة تقني رياضي', 
            subjects: [
              { id: 'technology', name: 'التكنولوجيا', icon: 'Book', color: 'bg-slate-700' }, 
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' },
              { id: 'physics', name: 'الفيزياء', icon: 'Flame', color: 'bg-indigo-700' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
            ] 
          },
          { 
            id: 'management', 
            name: 'شعبة تسيير واقتصاد', 
            subjects: [
              { id: 'management', name: 'تسيير واقتصاد', icon: 'TrendingUp', color: 'bg-emerald-600' },
              { id: 'economics', name: 'الاقتصاد والمناجمنت', icon: 'Zap', color: 'bg-blue-600' },
              { id: 'law', name: 'القانون', icon: 'Shield', color: 'bg-slate-600' },
              { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-800' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
            ] 
          },
          { 
            id: 'arts_phil', 
            name: 'شعبة آداب وفلسفة', 
            subjects: [
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
              { id: 'islamic', name: 'العلوم الإسلامية', icon: 'Heart', color: 'bg-rose-600' },
            ] 
          },
          { 
            id: 'languages', 
            name: 'شعبة لغات أجنبية', 
            subjects: [
              { id: 'languages', name: 'اللغات الأجنبية', icon: 'Languages', color: 'bg-cyan-700' },
              { id: 'english', name: 'الإنجليزية', icon: 'Languages', color: 'bg-orange-700' },
              { id: 'french', name: 'الفرنسية', icon: 'Languages', color: 'bg-cyan-700' },
              { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
              { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' },
              { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-800' },
            ] 
          },
        ]
      },
    ],
    subjects: [], // Handled by years and tracks
  },
];

export const QUESTIONS: Record<string, Question[]> = {
  // Primary
  'primary-1ap-arabic': [
    { id: 'p1a1', text: 'مانوع المد في كلمة "باب"؟', options: ['مد بالواو', 'مد بالألف', 'مد بالياء'], correctAnswer: 1, remedyPlan: 'لاحظ حرف الألف بعد البب حرف الألف دائماً يمد ما قبله بالفتحة. "بـ+ـا = بـا"' },
    { id: 'p1a2', text: 'أي من الكلمات التالية تبدأ بحرف "س"؟', options: ['سمكة', 'بنت', 'ولد'], correctAnswer: 0, remedyPlan: 'حرف السين (س) في بداية الكلمة يكتب كذا: "سمـ". لاحظ نطق الحرف في كلمة سمكة.' },
    { id: 'p1a3', text: 'ما هو ضد كلمة "كبير"؟', options: ['جميل', 'صغير', 'طويل'], correctAnswer: 1, remedyPlan: 'الضد يعني العكس. عكس الشيء الكبير هو الشيء الصغير.' },
    { id: 'p1a4', text: 'اللام في كلمة "الشمس" هي:', options: ['لام قمرية', 'لام شمسية'], correctAnswer: 1, remedyPlan: 'عندما لا ننطق اللام ونشدد الحرف الذي بعدها تكون اللام شمسية (شّمس). أما اللام القمرية فتنطق بوضوح (الـقمر).' },
  ],
  'primary-1ap-islamic': [
    { id: 'p1i1', text: 'كم مرة نصلي في اليوم؟', options: ['3', '4', '5'], correctAnswer: 2, remedyPlan: 'نصلي خمس صلوات في اليوم: الصبح، الظهر، العصر، المغرب، والعشاء.' },
    { id: 'p1i2', text: 'ما هي أول جملة نقولها عند البدء في الصلاة؟', options: ['الحمد لله', 'الله أكبر', 'سبحان الله'], correctAnswer: 1, remedyPlan: 'نبدأ الصلاة دائماً بـ "تكبيرة الإحرام" وهي قول "الله أكبر".' },
  ],
  'primary-3ap-math': [
    { id: 'p3m1', text: 'ضعف العدد 10 هو:', options: ['5', '15', '20'], correctAnswer: 2 },
    { id: 'p3m2', text: 'المستقيمان اللذان لا يلتقيان أبداً هما:', options: ['متقاطعان', 'متعامدان', 'متوازيان'], correctAnswer: 2 },
  ],
  'primary-5ap-arabic': [
    { id: 'p5a1', text: 'الكلمة التي تدل على اسم فاعل من "كتب" هي:', options: ['مكتوب', 'كتاب', 'كاتب'], correctAnswer: 2 },
    { id: 'p5a2', text: 'تعرب الكلمة التي تأتي بعد "كان" على أنها:', options: ['فاعل', 'اسم كان', 'خبر كان'], correctAnswer: 1 },
    { id: 'p5a3', text: 'كان الولد...:', options: ['مسرورُ', 'مسروراً', 'مسرورِ'], correctAnswer: 1 },
    { id: 'p5a4', text: 'الكلمة التي بها همزة متوسطة على النبرة هي:', options: ['سؤال', 'بئـر', 'قراءة'], correctAnswer: 1 },
  ],
  'primary-5ap-math': [
    { id: 'p5m1', text: 'رقم الآحاد في العدد 125.6 هو:', options: ['5', '2', '6'], correctAnswer: 0 },
    { id: 'p5m2', text: 'رقم الأعشار في العدد 12.34 هو:', options: ['2', '3', '4'], correctAnswer: 1 },
    { id: 'p5m3', text: 'العدد 75/100 يكتب بصيغة عشرية:', options: ['7.5', '0.75', '0.075'], correctAnswer: 1 },
  ],
  'primary-4ap-math': [
    { id: 'p4m1', text: 'العدد 12500 يكتب بالحروف:', options: ['اثنا عشر ألفا وخمسمائة', 'مائة وخمسة وعشرون ألفا', 'ألف ومائتان وخمسون'], correctAnswer: 0 },
  ],
  
  // Middle
  'middle-1am-arabic': [
    { id: 'm1a1', text: 'مانوع الجملة في "أكل الولد التفاحة"؟', options: ['اسمية', 'فعلية'], correctAnswer: 1 },
    { id: 'm1a2', text: 'مبتدأ الجملة الاسمية يكون دائماً:', options: ['منصوباً', 'مجروراً', 'مرفوعاً'], correctAnswer: 2 },
    { id: 'm1a3', text: 'الفعل "كتب" هو فعل:', options: ['ماضٍ', 'مضارع', 'أمر'], correctAnswer: 0 },
  ],
  'middle-4am-math': [
    { id: 'm4m1', text: 'القاسم المشترك الأكبر (PGCD) للعددين 12 و 8 هو:', options: ['2', '4', '6'], correctAnswer: 1 },
    { id: 'm4m2', text: 'قيمة x في المعادلة 2x = 10 هي:', options: ['5', '8', '12'], correctAnswer: 0 },
    { id: 'm4m3', text: 'المثلث الذي فيه زاوية قائمة يسمى:', options: ['متساوي الساقين', 'قائم', 'متساوي الأضلاع'], correctAnswer: 1 },
  ],

  // Secondary
  'secondary-1as-st_core-physics': [
    { id: 's1p1', text: 'وحدة قياس القوة في الجملة الدولية هي:', options: ['الجول', 'الواط', 'النيوتن'], correctAnswer: 2 },
    { id: 's1p2', text: 'الحركة التي يكون مسارها خطاً مستقيماً تسمى حركة:', options: ['منحنية', 'مستقيمة', 'دائرية'], correctAnswer: 1 },
  ],
  'secondary-2as-exp_science-science': [
    { id: 's2s1', text: 'العضية المسؤولة عن عملية التركيب الضوئي هي:', options: ['الميتوكوندريا', 'الصانعة الخضراء', 'النواة'], correctAnswer: 1 },
    { id: 's2s2', text: 'النيوكليوتيدة هي وحدة بناء:', options: ['البروتين', 'الـ DNA', 'الدسم'], correctAnswer: 1 },
  ],
  'secondary-3as-math_track-math': [
    { id: 's3m1', text: 'مشتقة الدالة 2x هي:', options: ['x', '2', '0'], correctAnswer: 1 },
    { id: 's3m2', text: 'مجموعة تعريف الدالة الناطقة هي:', options: ['R', 'R ما عدا القيم التي تعدم المقام'], correctAnswer: 1 },
  ],
  'middle-4am-arabic': [
    { id: 'm4a1', text: 'البدل هو من:', options: ['المنصوبات', 'التوابع', 'المرفوعات'], correctAnswer: 1 },
    { id: 'm4a2', text: 'التمييز في "اشتريت رطلاً عسلاً" هو تمييز:', options: ['ذات', 'نسبة'], correctAnswer: 0 },
  ],
  'middle-4am-islamic': [
    { id: 'm4i1', text: 'الحج ركن من أركان:', options: ['الإيمان', 'الإسلام', 'الإحسان'], correctAnswer: 1 },
    { id: 'm4i2', text: 'عمرة التمتع تكون في أشهر:', options: ['رمضان', 'الحج', 'شوال'], correctAnswer: 1 },
  ],
  'middle-4am-physics': [
    { id: 'm4p1', text: 'وحدة قياس المقاومة الكهربائية هي:', options: ['الأوم', 'الأمبير', 'الفولت'], correctAnswer: 0 },
    { id: 'm4p2', text: 'الجهاز المستخدم لقياس الجهد الكهربائي هو:', options: ['الأمبيرمتر', 'الفولتمتر', 'الأوم متر'], correctAnswer: 1 },
    { id: 'm4p3', text: 'الذرة المتعادلة كهربائياً يكون فيها:', options: ['الإلكترونات = البروتونات', 'النترونات = البروتونات'], correctAnswer: 0 },
  ],
  'middle-1am-math': [
    { id: 'm1m1', text: 'الكسر العشري 15/10 يساوي:', options: ['1.5', '0.15', '150'], correctAnswer: 0 },
    { id: 'm1m2', text: 'محيط المربع الذي طول ضلعه 5سم هو:', options: ['10سم', '20سم', '25سم'], correctAnswer: 1 },
    { id: 'm1m3', text: 'الزاوية القائمة قيسها:', options: ['45°', '90°', '180°'], correctAnswer: 1 },
    { id: 'm1m4', text: 'العدد 0.01 يمثل الكسر العشري:', options: ['1/10', '1/100', '1/1000'], correctAnswer: 1 },
  ],
  'middle-1am-science': [
    { id: 'm1s1', text: 'عملية النبات الأخضر لصنع غذائه تسمى:', options: ['التنفس', 'النتح', 'التركيب الضوئي'], correctAnswer: 2 },
    { id: 'm1s2', text: 'العنصر الغذائي الضروري لنمو العضلات هو:', options: ['السكريات', 'البروتينات', 'الدسم'], correctAnswer: 1 },
    { id: 'm1s3', text: 'ما هو الحيوان الذي يصنف من الثدييات؟', options: ['التمساح', 'الحوت', 'القرش'], correctAnswer: 1 },
  ],
  'middle-2am-math': [
    { id: 'm2m1', text: 'مجموع زوايا المثلث هو:', options: ['90°', '180°', '360°'], correctAnswer: 1 },
  ],
  'middle-3am-math': [
    { id: 'm3m1', text: 'العدد 7² يساوي:', options: ['14', '49', '70'], correctAnswer: 1 },
  ],
  
  // Secondary
  'secondary-3as-arabic': [
    { id: 's3a1', text: 'مدرسة "الرابطة القلمية" تنتمي إلى:', options: ['الكلاسيكية', 'الرومانسية', 'الواقعية'], correctAnswer: 1 },
    { id: 's3a2', text: 'من رواد مدرسة المهجر:', options: ['إيليا أبو ماضي', 'أحمد شوقي', 'محمود درويش'], correctAnswer: 0 },
  ],
  'secondary-3as-islamic': [
    { id: 's3i1', text: 'من مقاصد الشريعة الضرورية حفظ:', options: ['المال', 'الدين', 'العقل', 'كل ما سبق'], correctAnswer: 3 },
    { id: 's3i2', text: 'العقل في الإسلام هو مناط:', options: ['التكليف', 'التشريف', 'العبادة'], correctAnswer: 0 },
  ],
  'secondary-3as-exp_science-physics': [
    { id: 's3p1', text: 'وحدة قياس النشاط الإشعاعي هي:', options: ['الجول', 'البكريل', 'التسلا'], correctAnswer: 1 },
    { id: 's3p2', text: 'في حالة السقوط الحر، التسارع يكون:', options: ['متغيراً', 'ثابتاً', 'معدوماً'], correctAnswer: 1 },
    { id: 's3p3', text: 'ما هو رمز ثابت الزمن في دارة RC؟', options: ['λ', 'τ', 'ρ'], correctAnswer: 1 },
    { id: 's3p4', text: 'النيترون هو جسيمة:', options: ['موجبة الشحنة', 'سالبة الشحنة', 'عديمة الشحنة'], correctAnswer: 2 },
  ],
  'secondary-3as-history': [
    { id: 's3h1', text: 'متى اندلعت الثورة التحريرية الجزائرية؟', options: ['1 نوفمبر 1954', '5 جويلية 1962', '20 أوت 1955'], correctAnswer: 0 },
    { id: 's3h2', text: 'من هو أول رئيس للحكومة المؤقتة للجمهورية الجزائرية؟', options: ['أحمد بن بلة', 'فرحات عباس', 'هواري بومدين'], correctAnswer: 1 },
    { id: 's3h3', text: 'مشروع قسنطينة كان مشروعاً:', options: ['عسكرياً', 'إغرائياً اقتصادياً', 'ثقافياً'], correctAnswer: 1 },
  ],
  'secondary-3as-philosophy': [
    { id: 's3ph1', text: 'صاحب مقولة "أنا أفكر إذن أنا موجود" هو:', options: ['كانط', 'ديكارت', 'أفلاطون'], correctAnswer: 1 },
    { id: 's3ph2', text: 'المذهب الذي يعتمد على التجربة كمصدر للمعرفة هو:', options: ['المذهب العقلي', 'المذهب التجريبي', 'المذهب الوجودي'], correctAnswer: 1 },
  ],
};

export const STATIC_LESSONS_INDEX: Record<string, {title: string, description: string}[]> = {
  // الابتدائي - السنة الأولى
  'primary-1ap-arabic': [
    { title: 'حروفي الجميلة', description: 'التعرف على الحروف والأصوات' },
    { title: 'أنا وعائلتي', description: 'مفردات الأسرة والبيت' },
    { title: 'في مدرستي', description: 'الأدوات المدرسية والزملاء' },
    { title: 'ألعابي وهواياتي', description: 'التعبير عن الاهتمامات' },
  ],
  'primary-1ap-math': [
    { title: 'الأعداد من 1 إلى 9', description: 'العد والتعرف على الأرقام' },
    { title: 'مقارنة الأعداد', description: 'أكبر من، أصغر من، يساوي' },
    { title: 'الجمع البسيط', description: 'عمليات جمع لأعداد صغيرة' },
    { title: 'الأشكال والألوان', description: 'تصنيف حسب الروح الهندسية' },
  ],

  // الابتدائي - السنة الثانية
  'primary-2ap-arabic': [
    { title: 'العائلة والجيران', description: 'نصوص حول الروابط الاجتماعية' },
    { title: 'الحي والقرية', description: 'وصف المكان والبيئة' },
    { title: 'الرياضة والتسلية', description: 'فوائد النشاط البدني' },
    { title: 'التغذية والصحة', description: 'العادات الصحية السليمة' },
  ],
  'primary-2ap-math': [
    { title: 'الأعداد إلى 99', description: 'الآحاد والعشرات' },
    { title: 'الجمع والطرح بالاحتفاظ', description: 'العمليات الحسابية المتقدمة' },
    { title: 'قياس الأطوال', description: 'استعمال المسطرة والمتر' },
    { title: 'المجسمات', description: 'المكعب والبلاطة القائمة' },
  ],

  // الابتدائي - السنة الثالثة
  'primary-3ap-arabic': [
    { title: 'القيم الإنسانية', description: 'التعاون والتآزر في المجتمع' },
    { title: 'الحياة الثقافية', description: 'العادات والتقاليد الجزائرية' },
    { title: 'الطبيعة والبيئة', description: 'جمال الجزائر وحمايتها' },
    { title: 'الاكتشافات', description: 'رحلات عبر الزمن والمكان' },
  ],
  'primary-3ap-math': [
    { title: 'الأعداد إلى 999', description: 'القراءة والكتابة والتمثيل' },
    { title: 'الجمع والطرح والضرب', description: 'العمليات الحسابية الثلاث' },
    { title: 'التناظر المحوري', description: 'مفهوم التناظر والأشكال' },
    { title: 'قياس الكتل والسعات', description: 'الغرام واللتر' },
  ],

  // الابتدائي - السنة الرابعة
  'primary-4ap-arabic': [
    { title: 'أركان الكلمة', description: 'اسم وفعل وحرف' },
    { title: 'الفاعل والمفعول به', description: 'مراجعة المرفوعات والمنصوبات' },
    { title: 'النعت والمنعوت', description: 'شروط التبعية' },
    { title: 'الجملة الفعلية والجملة الاسمية', description: 'بناء الجملة' },
  ],
  'primary-4ap-math': [
    { title: 'الأعداد الأصغر من 1,000,000', description: 'ترتيب ومقارنة وحصر' },
    { title: 'آلية الضرب', description: 'ضرب أعداد كبيرة' },
    { title: 'القسمة 1', description: 'مفهوم القسمة والتوزيع' },
    { title: 'الزوايا والمثلثات', description: 'أنواع الزوايا والمنقبة' },
    { title: 'قياس المساحة', description: 'وحدات المساحة البسيطة' },
  ],

  // الابتدائي - السنة الخامسة (تكملة)
  'primary-5ap-math': [
    { title: 'الأعداد الكبيرة', description: 'قراءة وكتابة وتمثيل الأعداد إلى المليار' },
    { title: 'الجمع والطرح والضرب', description: 'آليات الحساب والوضع الصحيح' },
    { title: 'القسمة 1 و 2', description: 'قسمة عدد على عدد بمرتبة ومرتبتين' },
    { title: 'الكسور 1 و 2', description: 'مفهوم الكسر ومقارنة الكسور' },
    { title: 'الأعداد العشرية', description: 'الجمع والطرح والضرب في أعداد عشرية' },
    { title: 'التناسبية', description: 'البحث عن معامل التناسب وحل المشكلات' },
    { title: 'الهندسة: التوازي والتعامد', description: 'إنشاء أشكال هندسية بدقة' },
  ],
  'primary-5ap-arabic': [
    { title: 'الجملة والكلمة', description: 'أنواع الكلمة وأركان الجملة' },
    { title: 'الفعل والفاعل', description: 'إعراب الفعل الماضي والفاعل' },
    { title: 'المفعول به', description: 'علامات نصب المفعول به' },
    { title: 'كان وأخواتها', description: 'عمل النواسخ الفعلية' },
    { title: 'إن وأخواتها', description: 'عمل النواسخ الحرفية' },
    { title: 'الجملة المنسوخة', description: 'التغييرات بعد دخول النواسخ' },
    { title: 'الأفعال الخمسة', description: 'إعراب الأفعال الخمسة' },
    { title: 'الأسماء الخمسة', description: 'إعراب الأسماء الخمسة' },
    { title: 'جمع التكسير', description: 'أوزان الجمع وإعرابه' },
    { title: 'الهمزة المتوسطة والمتطرفة', description: 'قواعد الإملاء الصحيح' },
  ],
  'primary-5ap-history': [
    { title: 'العصور التاريخية', description: 'الفرق بين القديم، الوسيط، والحديث' },
    { title: 'الفتح الإسلامي لشمال إفريقيا', description: 'أهم المحطات والقادة' },
    { title: 'المغرب الإسلامي', description: 'الدولة الرستمية والحمادية والموحدية' },
    { title: 'الجزائر في العهد العثماني', description: 'التنظيم الإداري والعسكري' },
  ],

  // المتوسط - جميع السنوات
  'middle-3am-arabic': [
    { title: 'اسم الفعل الماضي', description: 'شرح معاني وعمل أسماء الأفعال الماضية (هيهات، شتان...)' },
    { title: 'بناء الفعل الماضي', description: 'حالات بناء الماضي على الفتح والضم والسكون' },
    { title: 'المضارع المنصوب والمجزوم', description: 'نواصب وجوازم الفعل المضارع' },
    { title: 'الآفات الاجتماعية', description: 'نصوص في محاربة التدخين والمخدرات' },
    { title: 'الصحافة والإعلام', description: 'دور الكلمة في المجتمع' },
    { title: 'التضامن الإنساني', description: 'قيم التكافل الاجتماعي' },
    { title: 'شعوب العالم', description: 'التعرف على الثقافات المختلفة' },
  ],
  'middle-4am-arabic': [
    { title: 'الجملة الواقعة نعتاً أو حالاً', description: 'قواعد الجمل التي لها محل من الإعراب' },
    { title: 'العدد وقواعده', description: 'تذكير وتأنيث العدد والمعدود' },
    { title: 'التمييز والاستثناء', description: 'أنواع التمييز وأدوات الاستثناء' },
    { title: 'عطف النسق', description: 'حروف العطف ومعانيها' },
    { title: 'البدل والعطف', description: 'أنواع البدل وإعرابه' },
    { title: 'التوكيد', description: 'التوكيد اللفظي والمعنوي' },
    { title: 'الممنوع من الصرف', description: 'العلل المانعة من الصرف' },
  ],
  'middle-4am-islamic': [
    { title: 'الإيمان باليوم الآخر', description: 'مشاهد القيامة والحساب' },
    { title: 'من هدي القرآن الكريم', description: 'تفسير سورة النبأ' },
    { title: 'الحج وأحكامه', description: 'الأركان والواجبات والسير' },
    { title: 'صلة الرحم', description: 'مكانة الأقارب في الإسلام' },
  ],
  'middle-2am-science': [
    { title: 'الوسط الحي', description: 'مكونات الوسط والعلاقات بينها' },
    { title: 'توزع الكائنات الحية', description: 'تأثير العوامل الفيزيوكيميائية' },
    { title: 'التغذية عند النبات الأخضر', description: 'التركيب الضوئي والنتح' },
    { title: 'نمط التنقل عند الحيوانات', description: 'التكيف مع الوسط' },
  ],

  // الثانوي - جميع الشعب والشعب
  'secondary-3as-exp_science-math': [
    { title: 'الدوال والاشتقاقية', description: 'دراسة النهايات والاستمرارية' },
    { title: 'الدوال الأسية واللوغاريتمية', description: 'الحساب ودراسة التغيرات' },
    { title: 'المتتاليات العددية', description: 'الحسابية والهندسية والتراجع' },
    { title: 'الدوال الأصلية والتكامل', description: 'حساب المساحات' },
    { title: 'الاحتمالات الشرطية', description: 'المتغيرات العشوائية' },
    { title: 'الأعداد المركبة', description: 'الهندسة والتحويلات النقطية' },
  ],
  'secondary-3as-exp_science-physics': [
    { title: 'المتابعة الزمنية للتحول الكيميائي', description: 'قياس الناقلية والمعايرة' },
    { title: 'النشاط الإشعاعي', description: 'الاستقرار والتشطر والاندماج' },
    { title: 'الظواهر الكهربائية', description: 'شحن وتفريغ المكثفة والوشيعة' },
    { title: 'ميكانيك نيوتن', description: 'حركة الأقمار والقذائف' },
    { title: 'مفهوم الـ pH', description: 'حمض/أساس والمعايرة' },
  ],
  'secondary-3as-exp_science-science': [
    { title: 'تركيب البروتين', description: 'الاستنساخ والترجمة' },
    { title: 'النشاط الأنزيمي', description: 'تأثير درجة الحرارة والباهاء' },
    { title: 'المناعة', description: 'الدفاع عن الذات (الخلطية والخلوية)' },
    { title: 'الاتصال العصبي', description: 'النقل المشبكي والمخدرات' },
    { title: 'تحويل الطاقة الضوئية', description: 'المرحلة الكيموضوئية والكيموحيواية' },
  ],
  'secondary-1as-st_core-math': [
    { title: 'الأعداد والحساب', description: 'القواسم والمضاعفات والقوى' },
    { title: 'الترتيب والمجالات', description: 'حل المتراجحات والقيمة المطلقة' },
    { title: 'الدوال المرجعية', description: 'مربع، مقلوب، جذر، جيب' },
    { title: 'الحساب الشعاعي', description: 'معادلة مستقيم والارتباط الخطي' },
  ],
  'secondary-1as-arts_core-arabic': [
    { title: 'الشعر الجاهلي', description: 'المعلقات وخصائص الفن' },
    { title: 'صدر الإسلام', description: 'تأثير القرآن على اللغة' },
    { title: 'النحو الأساسي', description: 'علامات الإعراب والبناء' },
    { title: 'البلاغة', description: 'الحقيقة والمجاز والتشبيه' },
  ],
  'secondary-3as-tech_math-technology': [
    { title: 'الهندسة الميكانيكية', description: 'دراسة الأنظمة والآليات' },
    { title: 'الهندسة المدنية', description: 'المقاومة والخرسانة' },
    { title: 'هندسة الطرائق', description: 'الصناعات الكيميائية' },
    { title: 'الهندسة الكهربائية', description: 'المنطق التعاقبي والمبرمجات' },
  ],

  // المتوسط - السنة الأولى
  'middle-1am-math': [
    { title: 'الأعداد الطبيعية والأعداد العشرية', description: 'الكتابة الكسرية والعشرية' },
    { title: 'العمليات على الأعداد العشرية', description: 'الجمع، الطرح، والضرب' },
    { title: 'المستقيم والأشكال المستوية', description: 'التعامد والتوازي' },
    { title: 'الزوايا وحساب المساحات', description: 'قيس الزوايا ومساحة المستطيل' },
    { title: 'الأعداد النسبية', description: 'التعليم في معلم والمقارنة' },
    { title: 'التناسبية والنسب المئوية', description: 'تطبيقات حياتية' },
  ],
  'middle-1am-arabic': [
    { title: 'الحياة العائلية', description: 'قيم بر الوالدين' },
    { title: 'حب الوطن', description: 'الانتماء والفخر الوطني' },
    { title: 'عظماء الإنسانية', description: 'سير الشخصيات المؤثرة' },
    { title: 'الأخلاق والمجتمع', description: 'الصدق والأمانة' },
    { title: 'العلم والتقدم العلمي', description: 'أهمية المخترعات' },
  ],

  // المتوسط - السنة الثانية
  'middle-2am-math': [
    { title: 'العمليات على الأعداد الطبيعية والعشرية', description: 'ترتيب العمليات والأقواس' },
    { title: 'الأعداد النسبية', description: 'الجمع والطرح والمقارنة' },
    { title: 'الكسور والعمليات عليها', description: 'التوحيد والمقارنة والضرب' },
    { title: 'الحساب الحرفي والمعادلات', description: 'المجهول x والمساويات' },
    { title: 'متوازي الأضلاع والمثلثات', description: 'خواص الإنشاء والحساب' },
  ],
  'middle-2am-arabic': [
    { title: 'حب الوطن', description: 'قصائد ونصوص في عشق الجزائر' },
    { title: 'الأسرة والبيت', description: 'العلاقات الأسرية والترابط' },
    { title: 'العلم والاكتشافات', description: 'أهمية البحث العلمي' },
    { title: 'عظماء الإنسانية', description: 'سيّر العلماء والمصلحين' },
  ],
  'middle-2am-physics': [
    { title: 'المادة وتحولاتها', description: 'الخلائط، المحاليل المائية، والتبخر' },
    { title: 'النموذج المجهري للتحول الكيميائي', description: 'الذرات والجزيئات' },
    { title: 'الحركة والسكون', description: 'السرعة والمسار والمرجع' },
    { title: 'نقل الحركة', description: 'بالسلاسل والسيور والتروس' },
  ],
  'middle-3am-math': [
    { title: 'العمليات على الكسور', description: 'الجمع والطرح والضرب والقسمة' },
    { title: 'القوى ذات أسس صحيحة', description: 'قواعد الحساب على القوى' },
    { title: 'المثلث القائم والدائرة', description: 'خواص الدائرة المحيطة بمثلث' },
    { title: 'الحساب الحرفي والمعادلات', description: 'نشر وتبسيط عبارات جبرية' },
  ],
  'middle-3am-science': [
    { title: 'الديناميكية الخارجية للكرة الأرضية', description: 'البنيات الجيولوجية والزلازل' },
    { title: 'تكتونية الصفائح', description: 'نظرية زحزحة القارات' },
    { title: 'الثروات الطبيعية في الجزائر', description: 'المياه، المعادن، والمحروقات' },
    { title: 'التربة ثروة هشة', description: 'حماية التربة من التصحر' },
  ],
  'middle-3am-physics': [
    { title: 'الطاقة', description: 'السلسلة الوظيفية والطاقوية' },
    { title: 'الاستطاعة', description: 'مفهوم استطاعة التحول الطاقوي' },
    { title: 'التيار الكهربائي المستمر', description: 'شدة التيار والتوتر' },
    { title: 'الضوء', description: 'تركيب الضوء الأبيض والعدسات' },
  ],
  'middle-4am-physics': [
    { title: 'الظواهر الميكانيكية', description: 'الجملة الميكانيكية، الثقل، والاحتكاك' },
    { title: 'الظواهر الكهربائية', description: 'التكهرب، التيار المتناوب، والأمن الكهربائي' },
    { title: 'المادة وتحولاتها', description: 'المحلول الشاردي والتحليل الكهربائي' },
    { title: 'الظواهر الضوئية', description: 'المرايا والعدسات وانكسار الضوء' },
  ],
  'middle-4am-science': [
    { title: 'التنسيق الوظيفي في العضوية', description: 'الاتصال العصبي والمناعة' },
    { title: 'الهضم والامتصاص', description: 'تحويل الأغدية إلى مغذيات' },
    { title: 'انتقال الصفات الوراثية', description: 'الصبغيات والأمراض الوراثية' },
    { title: 'الاستجابة المناعية', description: 'الخط الدفاعي الأول والثاني والثالث' },
  ],
  'generic-science-middle': [
    { title: 'الإنسان والصحة', description: 'التغذية والتربية الغذائية' },
    { title: 'الإنسان والمحيط', description: 'توازن الأنظمة البيئية' },
    { title: 'التكاثر والإعمار', description: 'وظائف التكاثر عند الكائنات' },
    { title: 'المستحاثات', description: 'البقايا والآثار من الماضي' },
  ],

  // المتوسط - السنة الرابعة (تكملة)
  'middle-4am-math': [
    { title: 'الأعداد الطبيعية والأعداد الناطقة', description: 'الـ PGCD وخوارزمية إقليدس' },
    { title: 'الحساب على الجذور', description: 'تبسيط الجذور والعمليات عليها' },
    { title: 'حساب حرفي', description: 'النشر والتبسيط والتحليل' },
    { title: 'المساويات والمعادلات', description: 'حل معادلة من الدرجة الأولى' },
    { title: 'المتراجحات', description: 'حل متراجحة وتمثيل الحلول بيانياً' },
    { title: 'النسب المثلثية', description: 'جيب التمام وجيب الزاوية والظل' },
    { title: 'خاصية طاليس', description: 'التناسبية والعكسية' },
    { title: 'خاصية فيتاغورس', description: 'حساب الأطوال في المثلث القائم' },
    { title: 'جملة معادلتين', description: 'حل جملة معادلتين من الدرجة الأولى' },
    { title: 'الدوال', description: 'الدالة الخطية والدالة التآلفية' },
    { title: 'الإحصاء', description: 'التكرارات والمعدلات' },
    { title: 'الهندسة الفضائية', description: 'الاستقامة وحساب الحجوم' },
  ],
  
  // الثانوي - السنة الأولى (جذع مشترك علوم)
  'secondary-1as-st_core-physics': [
    { title: 'بنية وهندسة الأنواع الكيميائية', description: 'الذرة، الجزيء، ونموذج لويس' },
    { title: 'من المجهري إلى العياني', description: 'المول، الكتلة المولية، والتركيز' },
    { title: 'القوة والحركات المستقيمة', description: 'مبدأ العطالة' },
    { title: 'القوة والحركات المنحنية', description: 'الفعلين المتبادلين' },
  ],

  // الثانوي - السنة الثالثة (بكالوريا)
  'secondary-3as-physics': [
    { title: 'المتابعة الزمنية لتحول كيميائي', description: 'السرعة وزمن نصف التفاعل' },
    { title: 'التحولات النووية', description: 'الارتباط والطاقة والنشاط الإشعاعي' },
    { title: 'الظواهر الكهربائية', description: 'المكثفة والوشيعة' },
    { title: 'تطور جملة كيميائية نحو حالة التوازن', description: 'القوى الضعيفة pH والـ pKa' },
    { title: 'تطور جملة ميكانيكية', description: 'قوانين نيوتن وحركة الكواكب' },
    { title: 'الأسترة', description: 'تفاعل الأسترة والإماهة' },
    { title: 'مراجعة شاملة للوحدات', description: 'حل تمارين بكالوريات سابقة' },
  ],
  'secondary-3as-math': [
    { title: 'الدوال العددية', description: 'نهايات، استمرارية، اشتقاق' },
    { title: 'الدوال الأسية', description: 'خصائص ودراسة الدالة الأسية' },
    { title: 'الدوال اللوغاريتمية', description: 'خصائص ودراسة الدالة اللوغاريتمية' },
    { title: 'المتتاليات العددية', description: 'حسابية وهندسية والبرهان بالتراجع' },
    { title: 'الأعداد المركبة', description: 'الشكل الجبري والمثلثي والتحويلات' },
    { title: 'الدوال الأصلية والحساب التكاملي', description: 'التكامل والمساحات' },
    { title: 'الاحتمالات', description: 'الاحتمال الشرطي والمتغيرات العشوائية' },
    { title: 'الهندسة في الفضاء', description: 'المستويات والمستقيمات' },
  ],
  'secondary-3as-science': [
    { title: 'آليات تركيب البروتين', description: 'الاستنساخ والترجمة' },
    { title: 'العلاقة بين بنية ووظيفة البروتين', description: 'الأحماض الأمينية والروابط' },
    { title: 'النشاط الإنزيمي للبروتينات', description: 'سرعة التفاعل والعوامل المؤثرة' },
    { title: 'دور البروتينات في الدفاع عن الذات', description: 'المناعة الخلطية والخلوية' },
    { title: 'دور البروتينات في الاتصال العصبي', description: 'كمون الراحة والعمل' },
    { title: 'آليات تحويل الطاقة الضوئية', description: 'التركيب الضوئي' },
  ],

  // مواد عامة متكررة (Islamic, Civic, History)
  'primary-islamic-generic': [
    { title: 'سورة البلد / سورة الفجر', description: 'تلاوة وحفظ وشرح' },
    { title: 'الإيمان بالكتب السماوية', description: 'أركان الإيمان' },
    { title: 'من صفات المؤمن', description: 'الصدق والأمانة والوفاء' },
    { title: 'الصحابة الكرام', description: 'قصص من حياة الصحابة' },
    { title: 'الحج: ركن من أركان الإسلام', description: 'أهم أحكام الحج' },
  ],
  'middle-islamic-generic': [
    { title: 'سورة النبأ / سورة المطففين', description: 'تفسير وأحكام' },
    { title: 'الإيمان باليوم الآخر', description: 'أركان الإيمان والبعث' },
    { title: 'صلة الرحم والوالدين', description: 'القيم الأخلاقية في الإسلام' },
    { title: 'صلاة الجماعة وعيد الفطر', description: 'العبادات الجماعية' },
    { title: 'السيرة النبوية: الهجرة', description: 'تأسيس الدولة الإسلامية' },
  ],
  'secondary-islamic-generic': [
    { title: 'مقاصد الشريعة الإسلامية', description: 'الكليات الخمس' },
    { title: 'العقل والوحي', description: 'منهج الإسلام في إعمال العقل' },
    { title: 'المساواة أمام القانون', description: 'أحكام الجنايات في الإسلام' },
    { title: 'الصحة النفسية والبدنية', description: 'توجيهات القرآن والسنة' },
    { title: 'الربا وأحكامه', description: 'المعاملات المالية المعاصرة' },
  ],
  'generic-history-middle': [
    { title: 'دراسة الوثيقة التاريخية', description: 'خطوات التحليل العلمي' },
    { title: 'الجزائر تحت الاحتلال الفرنسي', description: 'المقاومات الوطنية' },
    { title: 'الحركة الوطنية والتحرر', description: 'النضال السياسي والعسكري' },
    { title: 'الثورة التحريرية الكبرى', description: 'مراحل اندلاع الثورة والانتصار' },
  ],
  'generic-civic-middle': [
    { title: 'المؤسسات الدستورية', description: 'البرلمان، الحكومة، القضاء' },
    { title: 'حقوق وواجبات المواطن', description: 'المواطنة الصالحة' },
    { title: 'الهوية الوطنية', description: 'مكونات الشخصية الجزائرية' },
    { title: 'أسرار النجاح الدراسي', description: 'التنظيم والاجتهاد' },
  ]

};
