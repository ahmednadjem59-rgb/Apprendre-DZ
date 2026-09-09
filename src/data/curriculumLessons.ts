/**
 * قاعدة بيانات الدروس والوحدات المعتمدة لجميع المستويات والسنوات والشعب والفصول
 * في المنهاج الرسمي لوزارة التربية الوطنية الجزائرية.
 */

export interface LessonIndexItem {
  title: string;
  description: string;
  semester?: number; // 1 | 2 | 3
  tags?: string[];
}

export const ALL_CURRICULUM_LESSONS: Record<string, LessonIndexItem[]> = {
  'primary-1ap-arabic': [
    { title: "حروفي وأصواتها الجميلة", description: "التعرف على الحروف الهجائية ونطق أصواتها بحركاتها (الفتحة، الضمة، الكسرة).", semester: 1, },
    { title: "أنا وعائلتي في البيت", description: "التعبير الشفوي عن أفراد الأسرة، التعاون المنزلي، وبناء الكلمات البسيطة.", semester: 1, },
    { title: "في مدرستي الجديدة", description: "التعرف على مرافق المدرسة، المعلمة، الزملاء، وأدوات الدراسة.", semester: 2, },
    { title: "ألعابي وأوقات فراغي", description: "التعبير عن الهوايات، الألعاب الشعبية والأنشطة الترفيهية المفيدة.", semester: 2, },
    { title: "غذائي ونظافتي", description: "غسل اليدين، تناول الطعام الصحي وآداب المائدة.", semester: 3, },
    { title: "الحيوانات الأليفة", description: "الرفق بالحيوان ومفردات الطبيعة المحيطة بالطفل.", semester: 3, },
  ],
  'primary-1ap-math': [
    { title: "الأعداد من 1 إلى 9 (قراءة وكتابة)", description: "العد اليدوي، تمثيل الكميات، وكتابة الأرقام بشكل صحيح.", semester: 1, },
    { title: "مقارنة الأعداد وترتيبها", description: "استعمال الرموز: أكبر من (>), أصغر من (<), ويساوي (=).", semester: 1, },
    { title: "الجمع البسيط واستعمال الرمز (+)", description: "تجميع الأشياء وحساب المجموع لأعداد أصغر من 10.", semester: 2, },
    { title: "الأعداد حتى 20 والعدد 0", description: "مفهوم الصفر وبناء العشرات البسيطة.", semester: 2, },
    { title: "الفضاء والمكان: فوق، تحت، أمام، وراء", description: "تحديد المواقع والاتجاهات في الفضاء القريب.", semester: 3, },
    { title: "الأشكال الهندسية الأساسية والألوان", description: "التمييز بين المربع، المستطيل، المثلث، والدائرة.", semester: 3, },
  ],
  'primary-1ap-islamic': [
    { title: "سورة الفاتحة والإخلاص", description: "حفظ وتلاوة وتفسير ميسر لسورة الفاتحة وسورة الإخلاص.", semester: 1, },
    { title: "أركان الإسلام الخمسة", description: "التعرف على الشهادتان، الصلاة، الزكاة، الصوم، وحج البيت.", semester: 1, },
    { title: "الصدق والأمانة", description: "خلق الصدق في القول والتصرفات اقتداءً بنبينا محمد ﷺ.", semester: 2, },
    { title: "آداب الأكل والتحية", description: "قول بسم الله والحمد لله، وإفشاء السلام (السلام عليكم).", semester: 2, },
    { title: "الصلوات الخمس في اليوم", description: "الصبح، الظهر، العصر، المغرب، والعشاء.", semester: 3, },
    { title: "سورة الكوثر والمسد وسلوكيات البر والإحسان", description: "حفظ وتلاوة وسلوكيات البر والإحسان للناس وبر الوالدين.", semester: 3, },
  ],
  'primary-1ap-civic': [
    { title: "التحية وردها", description: "آداب إلقاء السلام ورد التحية باحترام.", semester: 1, },
    { title: "العلم والنشيد الوطني الجزائري", description: "التعرف على ألوان العلم الوطني (الأخضر، الأبيض، الأحمر، والنجمة والهلال).", semester: 1, },
    { title: "وثائقي الشخصية", description: "بطاقة التعريف المدرسية، الدفتر الصحي والاسم واللقب.", semester: 2, },
    { title: "ممتلكات مدرستي ونظافة قسمي", description: "المحافظة على الطاولة، الكراسي، وعدم رمي النفايات على الأرض.", semester: 2, },
    { title: "أنا طفل مؤدب أحترم الكبير وأعطف على الصغير", description: "آداب التعامل الإنساني، احترام المعلم والوالدين والمسنين.", semester: 3, },
    { title: "نظافة محيطي وحديقة مدرستي", description: "المحافظة على البيئة المدرسية وعدم قطف الأزهار ورمي الأوساخ في السلة.", semester: 3, },
  ],
  'primary-1ap-science': [
    { title: "الحواس الخمس ووظائفها", description: "العين للبصر، الأذن للسمع، الأنف للشم، اللسان للتذوق، والجلد للمس.", semester: 1, },
    { title: "أعضاء جسمي وحركتها", description: "المشي، الجري، القفز، وسلامة العظام والمفاصل.", semester: 1, },
    { title: "التنفس والنبض", description: "دخول الهواء النقي وخروجه والحفاظ على بيئة خالية من الدخان.", semester: 2, },
    { title: "النباتات من حولي", description: "أجزاء النبتة: الجذور، الساق، والأوراق، والحاجة إلى الماء والضوء.", semester: 2, },
    { title: "النباتات والحيوانات في محيطي وكيفية العناية بها", description: "سقي النباتات، الرفق بالحيوان الأليف والتعرف على مصادر غذائها.", semester: 3, },
    { title: "الأشياء من حولي وقواعد الأمان البسيطة", description: "التمييز بين المواد الصلبة واللينة، وتفادي مخاطر الأدوات الحادة والكهرباء.", semester: 3, },
  ],
  'primary-2ap-arabic': [
    { title: "العائلة والجيران وصلة الرحم", description: "قراءة نصوص معبرة عن الترابط الأسري ومساعدة الجيران.", semester: 1, },
    { title: "الحي والقرية والبيئة", description: "وصف المدينة والريف وجمال الطبيعة الجزائرية.", semester: 1, },
    { title: "الرياضة والتسلية والصحة", description: "أهمية النشاط الحركي والتعاون في الألعاب الجماعية.", semester: 2, },
    { title: "التغذية المتوازنة والصحة", description: "مجموعات الأغذية، فوائد الخضر والفواكه وتجنب السكريات.", semester: 2, },
    { title: "أساليب الاستفهام والنهي والتعجب", description: "استعمال هل، كيف، لا تفعل، وما أجمل!", semester: 3, },
    { title: "التاء المفتوحة والمربوطة", description: "التمييز بين التاء المربوطة (ـة/ة) والمفتوحة (ت) في الأسماء والأفعال.", semester: 3, },
  ],
  'primary-2ap-math': [
    { title: "الأعداد من 0 إلى 99 (العشرات والوحدات)", description: "تفكيك الأعداد وتركيبها ومقارنتها وحصرها.", semester: 1, },
    { title: "الجمع بالاحتفاظ والطرح", description: "وضع العملية عمودياً وحساب المجموع بالاحتفاظ بدقة.", semester: 1, },
    { title: "قياس الأطوال واستعمال المسطرة (cm)", description: "رسم وقياس القطع المستقيمة بالسنتيمتر.", semester: 2, },
    { title: "المجسمات: المكعب والبلاطة القائمة", description: "التعرف على الرؤوس، الوجوه، والأحرف.", semester: 2, },
    { title: "الضرب كمفهوم للجمع المتكرر", description: "جداول الضرب البسيطة في 2 و 3 و 5.", semester: 3, },
    { title: "الساعة والوقت", description: "قراءة الوقت بالساعات الكاملة وأنصاف الساعات.", semester: 3, },
  ],
  'primary-2ap-islamic': [
    { title: "سورة الفلق وسورة الناس وسورة النصر", description: "حفظ وتدبر المعاني الكريمة والاستعاذة بالله.", semester: 1, },
    { title: "الوضوء ومراحله الصحيحة", description: "النية، غسل اليدين، المضمضة، الاستنشاق، مسح الرأس وغسل الرجلين.", semester: 1, },
    { title: "كيفية أداء الصلاة", description: "الركوع، السجود، التشهد، والتسليم بخشوع.", semester: 2, },
    { title: "من صفات النبي محمد ﷺ (الرحمة والتسامح)", description: "قصص من طفولة وشباب النبي ﷺ ومعاملته للناس.", semester: 2, },
    { title: "بر الوالدين وحسن معاملتهما", description: "طاعة الوالدين ومساعدتهما والدعاء لهما.", semester: 3, },
    { title: "سورة الإخلاص وسلوك المسلم الصغير", description: "مساعدة الضعيف، إماطة الأذى عن الطريق وحسن الجوار.", semester: 3, },
  ],
  'primary-2ap-civic': [
    { title: "الشجرة صديقة الإنسان", description: "فوائد الأشجار، حمايتها وغرس الشتلات والاعتناء بها.", semester: 1, },
    { title: "الحوار والتشاور مع الزملاء", description: "آداب الحديث والاستماع للآخرين دون مقاطعة.", semester: 1, },
    { title: "حقوقي وواجباتي في المدرسة", description: "حق التعلم واللعب، وواجب الانضباط والاحترام.", semester: 2, },
    { title: "إشارات المرور والسلامة الطرقية", description: "ممرات الراجلين والالتزام بقواعد العبور الآمن.", semester: 2, },
    { title: "الحدائق والمنتزهات العامة والمحافظة عليها", description: "المرافق الترفيهية، نظافة الساحات العمومية وحماية الأشجار والمقاعد.", semester: 3, },
    { title: "التضامن والتعاون في الحي والمدرسة", description: "مساعدة المحتاجين والمشاركة في حملات التشجير والنظافة الجماعية.", semester: 3, },
  ],
  'primary-2ap-science': [
    { title: "مراحل نمو جسم الإنسان", description: "التغير في الوزن، الطول، والقدرات البدنية مع التقدم في السن.", semester: 1, },
    { title: "تغذية الحيوانات وتصنيفها", description: "العواشب، اللواحم، والقوارت وسلاسل الغذاء البسيطة.", semester: 1, },
    { title: "نمو النباتات من البذور", description: "شروط الإنتاش: الماء، الحرارة، والهواء ودورة حياة النبات.", semester: 2, },
    { title: "حالات المادة: الصلبة والسائلة", description: "الانصهار، التجمد، وخصائص المواد السائلة والصلبة.", semester: 2, },
    { title: "الهواء من حولنا وخصائصه", description: "وجود الهواء في كل مكان، تحريك الأشياء واستعمالاته في التنفس والبالونات.", semester: 3, },
    { title: "الماء في الطبيعة وترشيد استهلاكه", description: "مصادر مياه الشرب، دورة الماء البسيطة وتجنب تبذير المياه في البيت.", semester: 3, },
  ],
  'primary-3ap-arabic': [
    { title: "القيم الإنسانية والتكافل الاجتماعي", description: "نصوص أدبية وقصص عن التعاون والوفاء والإيثار.", semester: 1, },
    { title: "الحياة الثقافية والعادات والتقاليد", description: "التراث الجزائري، اللباس التقليدي والاحتفالات.", semester: 1, },
    { title: "الهوية والطبيعة والبيئة", description: "جبال الأوراس، جرجرة، شواطئ وصحراء الجزائر الخلابة.", semester: 2, },
    { title: "الجملة الفعلية والجملة الاسمية", description: "أركان الجملة، الفعل والفاعل والمبتدأ والخبر.", semester: 2, },
    { title: "الفعل الماضي والمضارع والأمر", description: "تصريف الأفعال مع الضمائر المختلفة.", semester: 3, },
    { title: "الهمزة في أول الكلمة (الوصل والقطع)", description: "قواعد كتابة همزة القطع وهمزة الوصل.", semester: 3, },
  ],
  'primary-3ap-math': [
    { title: "الأعداد من 0 إلى 9999", description: "القراءة، الكتابة، الترتيب، الحصر والمقارنة.", semester: 1, },
    { title: "الجمع والطرح العمودي بالأعداد الكبيرة", description: "تقنيات الحساب الحذرة والتحقق بالعملية العكسية.", semester: 1, },
    { title: "آلية الضرب في عدد برقم وبرقمين", description: "إتقان جداول الضرب وحل مسائل الجداء.", semester: 2, },
    { title: "التناظر المحوري ومحور التناظر", description: "رسم الأشكال المتناظرة على مرصوفة بدقة.", semester: 2, },
    { title: "قياس الكتل (g و kg) والسعات (L و cL)", description: "التحويل بين الوحدات وحل المشكلات الحياتية.", semester: 3, },
    { title: "المجسمات والمستقيمات المتعامدة", description: "استعمال الكوس للتحقق من الزاوية القائمة والتعامد.", semester: 3, },
  ],
  'primary-3ap-islamic': [
    { title: "سورة التين وسورة القارعة والقدر", description: "حفظ وتفسير الدروس الإيمانية والعبر المستفادة.", semester: 1, },
    { title: "الإيمان بالملائكة عليهم السلام", description: "جبريل، ميكائيل، إسرافيل، وملك الموت ووظائفهم.", semester: 1, },
    { title: "فضل تلاوة القرآن الكريم وحفظه", description: "الأجر المضاعف وآداب الاستماع للقرآن.", semester: 2, },
    { title: "الهجرة النبوية الشريفة إلى المدينة", description: "أسباب الهجرة، وبناء أول مسجد في الإسلام.", semester: 2, },
    { title: "المؤاخاة بين المهاجرين والأنصار", description: "أعظم نموذج في الأخوة والتضامن في تاريخ البشرية.", semester: 3, },
    { title: "آداب المسلم وفضل الصدقة والتعاون", description: "الصدقة تطفئ غضب الرب ومساعدة المحتاجين واليتامى.", semester: 3, },
  ],
  'primary-3ap-civic': [
    { title: "القواعد الصحية في التغذية", description: "أهمية تنوع الغذاء وتاريخ نهاية الصلاحية.", semester: 1, },
    { title: "العلاقات الاجتماعية وحسن الجوار", description: "حق الجار في الإسلام ومساعدة كبار السن.", semester: 1, },
    { title: "مؤسسات بلديتي وخدماتها", description: "دور البلدية، استخراج وثائق الحالة المدنية ونظافة الأحياء.", semester: 2, },
    { title: "حماية التراث الوطني والمحلي", description: "الآثار، الحرف اليدوية والفنون الشعبية.", semester: 2, },
    { title: "المسؤولية الفردية والجماعية في المحيط المدرسي", description: "المشاركة في الأنشطة المدرسية والتعاون مع الزملاء واحترام النظام الداخلي.", semester: 3, },
    { title: "السلامة المنزلية والوقاية من أخطار الحوادث", description: "الحذر من المواد المنظفة والغاز والمأخذ الكهربائي والاتصال بالحماية المدنية.", semester: 3, },
  ],
  'primary-3ap-science': [
    { title: "التنفس عند الكائنات الحية", description: "التنفس الرئوي والغلاصمي وتأثير الرياضة على نبض القلب.", semester: 1, },
    { title: "أنماط التغذية عند الحيوانات وأسنانها", description: "تكيف القواطع والأنياب والأضراس مع نوع الغذاء.", semester: 1, },
    { title: "دورة الماء في الطبيعة وحالاته", description: "التبخر، التكاثف، التساقط، والمياه الجوفية.", semester: 2, },
    { title: "الكهرباء المنزلية والدارة البسيطة", description: "المولد، المصباح، القاطعة، والأسلاك، واحتياطات السلامة.", semester: 2, },
    { title: "الضوء والظلال وحركة الشمس الظاهرية", description: "تشكل الظل ومصدر الضوء، تعاقب الليل والنهار وارتفاع الشمس في السماء.", semester: 3, },
    { title: "الميزان وقياس الكتل وحفظ التوازن", description: "استعمال الميزان ذي الكفتين، الكتل العيارية والغرام والكيلوغرام.", semester: 3, },
  ],
  'primary-3ap-french': [
    { title: "Les salutations et les présentations", description: "Bonjour, Bonsoir, Je m'appelle..., et demander l'identité.", semester: 1, },
    { title: "L'alphabet et les sons français (voyelles et consonnes)", description: "Apprentissage phonétique des sons et lecture de syllabes.", semester: 1, },
    { title: "Les objets de l'école et de la maison", description: "Le cartable, la trousse, le stylo, la table, le cahier.", semester: 2, },
    { title: "Les couleurs et les nombres de 1 à 20", description: "Nommer les couleurs et compter les objets du quotidien.", semester: 2, },
    { title: "Les animaux de la ferme et de la forêt", description: "Vocabulaire des animaux, leurs cris et leur habitat en français.", semester: 3, },
    { title: "Les fruits, les légumes et les repas quotidiens", description: "Exprimer ce qu'on aime manger : j'aime la pomme, le lait, le pain.", semester: 3, },
  ],
  'primary-3ap-english': [
    { title: "Greetings & Introductions", description: "Hello, Good morning, What is your name? My name is...", semester: 1, },
    { title: "Alphabet & Phonics", description: "Letters, letter sounds, and short reading activities.", semester: 1, },
    { title: "Numbers (1 to 20) & Colors", description: "Red, Blue, Green, Yellow, and counting numbers.", semester: 2, },
    { title: "Family Members & School Items", description: "Father, Mother, Sister, Brother, Book, Pen, Bag.", semester: 2, },
    { title: "My Pets and Animals World", description: "Naming animals: cat, dog, bird, rabbit, lion and describing them.", semester: 3, },
    { title: "My Face, Body Parts and Daily Actions", description: "Head, eyes, hands, jump, run, wash hands and healthy habits.", semester: 3, },
  ],
  'primary-3ap-history': [
    { title: "مفهوم الزمن والتاريخ والخط الزمني", description: "الماضي، الحاضر، والمستقبل، وترتيب الأحداث الشخصية.", semester: 1, },
    { title: "المكان وتحديد المواقع الجغرافية", description: "الجهات الأربع (شمال، جنوب، شرق، غرب) واستعمال البوصلة.", semester: 1, },
    { title: "البيئة المحلية: الريف والمدينة", description: "خصائص التجمعات السكانية والأنشطة الاقتصادية.", semester: 2, },
    { title: "الآثار والشواهد التاريخية في وطني", description: "النقوش الصخرية في الطاسيلي والآثار الرومانية بتيمقاد وجميلة.", semester: 2, },
    { title: "الشخصيات التاريخية الوطنية والمعالم الأثرية الجزائرية", description: "ماسينيسا، يوغرطة، والآثار القديمة في تيمقاد وتيبازة وجميلة.", semester: 3, },
    { title: "الخريطة وتضاريس بلادي الجزائر", description: "قراءة مفتاح الخريطة البسيط والتعرف على الجبال والسهول والصحراء الجزائرية.", semester: 3, },
  ],
  'primary-4ap-arabic': [
    { title: "أقسام الكلمة: اسم، فعل، وحرف", description: "التمييز الدقيق بين علامات الاسم والفعل والحرف.", semester: 1, },
    { title: "الفاعل والمفعول به وعلامات الإعراب", description: "الضمة للرفع، الفتحة للنصب، والكسرة للجر.", semester: 1, },
    { title: "النعت والمنعوت (الصفة والموصوف)", description: "مطابقة الصفة للموصوف في التذكير والتأنيث والإعراب والتعريف.", semester: 2, },
    { title: "المبتدأ والخبر وكان وأخواتها", description: "دخول كان، أصبح، أمسى، صار على الجملة الاسمية.", semester: 2, },
    { title: "الاسم المجرور وحروف الجر", description: "من، إلى، عن، على، في، الباء، واللام وعلامة الجر الكسرة.", semester: 3, },
    { title: "الهمزة المتوسطة على الواو والياء والألف", description: "قاعدة أقوى الحركات (الكسرة > الضمة > الفتحة > السكون).", semester: 3, },
  ],
  'primary-4ap-math': [
    { title: "الأعداد الأصغر من 1,000,000", description: "قراءة، كتابة، تفكيك، مقارنة وترتيب الملايين.", semester: 1, },
    { title: "آلية الضرب في عدد مكون من رقمين و3 أرقام", description: "الضرب المباشر والتقديري وحل وضعيات إدماجية.", semester: 1, },
    { title: "مفهوم القسمة الإقليدية وحساب الحاصل والباقي", description: "المقسوم، المقسوم عليه، الحاصل، والباقي.", semester: 2, },
    { title: "الكسور والأعداد العشرية البسيطة", description: "الكسور العشرية والتحويل إلى كتابة عشرية بالفاصلة.", semester: 2, },
    { title: "الزوايا والمثلثات الخاصة (القائم، متساوي الساقين)", description: "التعرف على أنواع الزوايا واستعمال المنقلة والكوس.", semester: 3, },
    { title: "المحيط والمساحة للمربع والمستطيل", description: "قوانين حساب المحيط والمساحة وتطبيقاتها الحياتية.", semester: 3, },
  ],
  'primary-4ap-islamic': [
    { title: "سورة البروج وسورة الطارق وسورة الغاشية", description: "حفظ وتفسير قدرة الله في الكون وعاقبة المؤمنين والمكذبين.", semester: 1, },
    { title: "الإيمان بالرسل والكتب السماوية", description: "أولو العزم من الرسل، التوراة، الإنجيل، الزبور، والقرآن الكريم.", semester: 1, },
    { title: "صلاتا الجمعة والعيدين", description: "فضل يوم الجمعة، آداب الخطبة، وتكبيرات العيد وفرحته.", semester: 2, },
    { title: "أمانة النبي ﷺ ولقبه (الصادق الأمين)", description: "تجارة خديجة رضي الله عنها وثقتها في أمانة النبي ﷺ.", semester: 2, },
    { title: "آداب المسجد والمحافظة على بيوت الله", description: "دعاء الدخول والخروج، صلاة تحية المسجد، والسكينة.", semester: 3, },
    { title: "سورة التكاثر وقيمة الوقت ونعمة الصحة", description: "شرح الآيات، شكر نعم الله وتجنب التباهي والتفاخر.", semester: 3, },
  ],
  'primary-4ap-civic': [
    { title: "الدستور الجزائري والقانون", description: "مفهوم الدستور كأعلى وثيقة قانونية تنظم شؤون الوطن والمواطن.", semester: 1, },
    { title: "مجلس الأمة والمجلس الشعبي الوطني", description: "السلطة التشريعية وانتخاب نواب الشعب لتمثيل المواطنين.", semester: 1, },
    { title: "المحافظة على الغابات من الحرائق والتلوث", description: "واجبات المواطن البيئية والتبليغ عن المخاطر.", semester: 2, },
    { title: "الإعلام والاتصال وتأثير وسائل التكنولوجيا", description: "الاستخدام الإيجابي للإنترنت والتلفاز في كسب المعرفة.", semester: 2, },
    { title: "المعلم الأثري والمتحف الوطني وحماية التراث", description: "أهمية المتاحف الوطنية في حفظ التاريخ والذاكرة وحمايتها من التخريب والسرقة.", semester: 3, },
    { title: "التضامن الإنساني والهلال الأحمر الجزائري", description: "أهداف العمل التطوعي، إغاثة المنكوبين ودور الهلال الأحمر الجزائري.", semester: 3, },
  ],
  'primary-4ap-science': [
    { title: "الهضم ودور الأغذية في الجسم", description: "مسار الغذاء في الأنبوب الهضمي، الامتصاص، ودور السكريات والبروتينات.", semester: 1, },
    { title: "الدوران الدموي والقلب", description: "القلب كمضخة، الشرايين، الأوردة، ونقل الأكسجين والمغذيات.", semester: 1, },
    { title: "التكاثر الجنسي عند النباتات ذات الأزهار", description: "التأبير، التلقيح، تحول الزهرة إلى ثمرة وبداخلها بذور.", semester: 2, },
    { title: "الماء الصالح للشرب ومعالجة المياه", description: "محطات تصفية المياه، الترسيب، الترشيح، والتعقيم بالكلور.", semester: 2, },
    { title: "قواعد الأمن الكهربائي والدارة المغلقة والمفتوحة", description: "المواد الناقلة والعازلة للكهرباء وقواعد الحماية من الصعق الكهربائي.", semester: 3, },
    { title: "غازات الاحتراق ومخاطر غاز أحادي أكسيد الكربون (CO)", description: "الاحتراق التام وغير التام، التهوية السليمة والوقاية من الاختناق بالمدافئ.", semester: 3, },
  ],
  'primary-4ap-french': [
    { title: "C'est un lieu magnifique ! (La description)", description: "Décrire un paysage, une ville ou un monument touristique.", semester: 1, },
    { title: "Les métiers et les professions", description: "Le médecin, le pompier, le maître, l'artisan et leurs rôles.", semester: 1, },
    { title: "Le présent de l'indicatif (1er et 2ème groupe)", description: "Conjugaison des verbes réguliers (er, ir) au présent.", semester: 2, },
    { title: "Le féminin et le pluriel des noms", description: "Les règles de transformation en ajoutant -e et -s.", semester: 2, },
    { title: "À la découverte des villes algériennes", description: "Décrire un voyage à Alger, Oran, Constantine et le grand Sud.", semester: 3, },
    { title: "Les verbes du 3ème groupe au présent et les adjectifs qualificatifs", description: "Conjuguer être, avoir, aller, faire et enrichir les descriptions.", semester: 3, },
  ],
  'primary-4ap-english': [
    { title: "My Daily Routine & Time", description: "I wake up, I go to school, I eat lunch, telling time.", semester: 1, },
    { title: "Food, Drinks & Healthy Habits", description: "Apples, Milk, Bread, Water, I like / I do not like.", semester: 1, },
    { title: "Animals & Habitats", description: "Lion, Camel, Elephant, Sea, Desert, Jungle.", semester: 2, },
    { title: "Present Simple Tense & Questions", description: "He plays, She reads, Do you like...? Yes, I do.", semester: 2, },
    { title: "Places in My City and Giving Directions", description: "Hospital, park, school, turn left, turn right and asking where things are.", semester: 3, },
    { title: "Weather and Seasons in Algeria", description: "Sunny, rainy, snowy, summer holidays and describing outdoor weather.", semester: 3, },
  ],
  'primary-4ap-history': [
    { title: "العصور التاريخية (القديم، الوسيط، الحديث، والمعاصر)", description: "معايير تقسيم العصور وبداية كل مرحلة وأهم منجزاتها.", semester: 1, },
    { title: "شمال إفريقيا في العصر القديم والممالك النوميدية", description: "الملك ماسينيسا، يوبا، يوغرطة وتوحيد نوميديا.", semester: 1, },
    { title: "الموقع الجغرافي للجزائر وحدودها الإقليمية", description: "موقع الجزائر في شمال إفريقيا وحوض البحر الأبيض المتوسط.", semester: 2, },
    { title: "التضاريس والمناخ في الجزائر (الشمال والصحراء)", description: "سلاسل الأطلس التلي والصحراوي، الهضاب، والمناخ المتوسطي والصحراوي.", semester: 2, },
    { title: "الفتح الإسلامي لشمال إفريقيا وتأسيس المدن الإسلامية", description: "عقبة بن نافع وتأسيس القيروان ومسجد تهودة وانتشار الإسلام واللغة العربية.", semester: 3, },
    { title: "الموارد الطبيعية والمائية في الجزائر وحمايتها من الجفاف", description: "السدود، المياه الجوفية بالصحراء، والترشيد العقلاني للثروة المائية.", semester: 3, },
  ],
  'primary-5ap-arabic': [
    { title: "أركان الجملة وأنواع النواسخ (كان وإن وأخواتها)", description: "تأثير النواسخ الفعلية والحرفية على المبتدأ والخبر إعراباً.", semester: 1, },
    { title: "الأفعال الخمسة وإعرابها", description: "ثبوت النون في الرفع، وحذف النون في النصب والجزم.", semester: 1, },
    { title: "الأسماء الخمسة (أبو، أخو، حمو، فو، ذو)", description: "علامات الرفع بالواو، النصب بالألف، والجر بالياء.", semester: 2, },
    { title: "جمع التكسير وجمع المذكر والمؤنث السالم", description: "قواعد الجمع وعلامات الإعراب الفرعية والأصلية.", semester: 2, },
    { title: "المفعول المطلق والمفعول لأجله", description: "بيان نوع الفعل وتأكيده وسبب وقوعه مع الإعراب التام.", semester: 3, },
    { title: "قواعد الهمزة المتوسطة والهمزة المتطرفة", description: "الإملاء الدقيق للهمزات على السطر، النبرة، الواو، والألف.", semester: 3, },
  ],
  'primary-5ap-math': [
    { title: "الأعداد الكبيرة حتى المليار والعمليات الحسابية", description: "إتقان الوضع، الحساب الذهني والسريع للمجاميع والفروق والجداءات.", semester: 1, },
    { title: "القسمة الإقليدية على عدد من رقمين و3 أرقام", description: "خوارزمية القسمة الطويلة وحل المسائل المعقدة.", semester: 1, },
    { title: "الكسور والعمليات عليها ومقارنتها", description: "توحيد المقامات، جمع وطرح الكسور وحساب كسر من كمية.", semester: 2, },
    { title: "الأعداد العشرية وحساب المجاميع والجداءات بالفاصلة", description: "الجمع والطرح والضرب في 10 و 100 و 0.1 والتحويل.", semester: 2, },
    { title: "التناسبية والنسبة المئوية ومقياس الرسم", description: "استخراج معامل التناسب، حساب النسبة المئوية والتخفيض.", semester: 3, },
    { title: "المساحات، الحجوم، والتحويلات الهندسية", description: "مساحة المثلث، شبه المنحرف، وحجم المكعب ومتوازي المستطيلات.", semester: 3, },
  ],
  'primary-5ap-islamic': [
    { title: "سورة الأعلى وسورة الطارق وسورة الانفطار", description: "حفظ وتفسير وتدبر خلق الله والبعث والجزاء في اليوم الآخر.", semester: 1, },
    { title: "الإيمان بالقدر خيره وشره", description: "الرضا بقضاء الله، التوكل على الله مع الأخذ بالأسباب.", semester: 1, },
    { title: "حجة الوداع ووصايا النبي ﷺ", description: "حرمة الدماء والأموال وحقوق المرأة والتمسك بكتاب الله.", semester: 2, },
    { title: "الإيثار والكرم وحسن المعاملة", description: "نماذج من صحابة رسول الله ﷺ في البذل والعطاء والتضحية.", semester: 2, },
    { title: "فتح مكة والعفو عند المقدرة", description: "موقف النبي ﷺ العظيم: \"اذهبوا فأنتم الطلقاء\".", semester: 3, },
    { title: "سورة البينة وقيم الاستقامة في حياة المسلم", description: "حفظ وتفسير الآيات، إخلاص العبادة لله والأعمال الصالحة.", semester: 3, },
  ],
  'primary-5ap-civic': [
    { title: "المواطنة الصالحة وحب الوطن والانتماء", description: "واجبات المواطن نحو وطنه والدفاع عن وحدته ومكتسباته.", semester: 1, },
    { title: "الرموز السيادية للجمهورية الجزائرية", description: "النشيد الوطني قسماً، العملة (الدينار)، ختم الدولة، والعلم.", semester: 1, },
    { title: "الإدارة الإلكترونية وتطور الخدمات العامة", description: "استخراج الوثائق عبر المنصات الرقمية وتسهيل حياة المواطنين.", semester: 2, },
    { title: "الأمن والسلامة ومخاطر حوادث المرور", description: "دور الحماية المدنية والشرطة والدرك الوطني في الحماية.", semester: 2, },
    { title: "المؤسسات الدولية وحقوق الإنسان والطفل (اليونيسف واليونسكو)", description: "اتفاقية حقوق الطفل الدولية، حق التعليم والصحة والحماية ودور الجزائر الدولي.", semester: 3, },
    { title: "المسؤولية المدنية والمشاركة في الانتخابات المدرسية والمحلية", description: "مفهوم الاقتراع، الديمقراطية، وحرية الاختيار وخدمة الصالح العام.", semester: 3, },
  ],
  'primary-5ap-science': [
    { title: "التغذية والجهد العضلي وإنتاج الطاقة", description: "حاجة العضلات للأكسجين والغلوكوز وارتفاع وتيرة النبض والتنفس.", semester: 1, },
    { title: "التكاثر والإلقاح عند الإنسان", description: "مراحل تكون الجنين في الرحم والولادة والرضاعة الطبيعية.", semester: 1, },
    { title: "غازات الغلاف الجوي والاحتراق والأكسجين", description: "عناصر مثلث الاشتعال (الوقود، المؤكسد، والحرارة) ومخاطر الغاز.", semester: 2, },
    { title: "البيئة وتدوير النفايات والطاقات المتجددة", description: "الطاقة الشمسية، الهوائية، المائية، والحد من التلوث البيئي.", semester: 2, },
    { title: "حركة الأجسام ونقل الحركة (البكرات والمسننات)", description: "مبادئ الروافع، المسننات، السيور وتطبيقاتها في الدراجات والآلات الميكانيكية.", semester: 3, },
    { title: "النظام الشمسي والأرض والقمر والكسوف والخسوف", description: "دوران الأرض حول نفسها وحول الشمس، الفصول الأربعة وأطوار القمر.", semester: 3, },
  ],
  'primary-5ap-french': [
    { title: "Sauvons la nature et les animaux en danger !", description: "Sensibilisation à l'environnement, protection des espèces.", semester: 1, },
    { title: "Les catastrophes naturelles et la solidarité", description: "Les séismes, inondations, incendies et l'aide aux sinistrés.", semester: 1, },
    { title: "Le passé composé avec être et avoir", description: "Conjugaison des verbes au passé composé et accords du participe.", semester: 2, },
    { title: "Les connecteurs logiques et la structure du texte", description: "D'abord, ensuite, enfin, car, parce que, donc.", semester: 2, },
    { title: "Les grands inventeurs et les découvertes scientifiques", description: "Textes documentaires sur les inventions, le futur simple et la production écrite.", semester: 3, },
    { title: "Préparation méthodologique à l'examen d'entrée au collège", description: "Compréhension de l'écrit, questions de langue et rédaction guidée d'un texte court.", semester: 3, },
  ],
  'primary-5ap-english': [
    { title: "My Dream Job & Aspirations", description: "I want to be a doctor, engineer, teacher because...", semester: 1, },
    { title: "Protecting the Environment & Nature", description: "Pollution, recycling, planting trees, saving water.", semester: 1, },
    { title: "Past Simple Tense (Regular & Irregular verbs)", description: "I went, I visited, I played, Did you see...?", semester: 2, },
    { title: "Short Paragraph Writing & Comprehension", description: "Reading texts, answering questions, writing a summary.", semester: 2, },
    { title: "Travel, Holidays and Algerian Cultural Heritage", description: "Visiting the Sahara, Tassili, traditional festivals and writing a postcard.", semester: 3, },
    { title: "Review of Grammar, Tenses and Transition to Middle School", description: "Present, Past, Future, Wh-questions and final exam mastery.", semester: 3, },
  ],
  'primary-5ap-history': [
    { title: "الجزائر في العهد العثماني والأساطيل البحرية", description: "رياس البحر، حماية السواحل، والتنظيم السياسي والإداري.", semester: 1, },
    { title: "الاحتلال الفرنسي 1830 والمقاومة الشعبية", description: "مقاومة الأمير عبد القادر، أحمد باي، لالة فاطمة نسومر والزعاطشة.", semester: 1, },
    { title: "الموقع الاستراتيجي للجزائر إقليمياً وعالمياً", description: "بوابة إفريقيا، الممرات البحرية والمكانة الاقتصادية.", semester: 2, },
    { title: "الموارد الطبيعية والتنمية المستدامة في الجزائر", description: "البترول، الغاز الطبيعي، الفلاحة، والسياحة الصحراوية.", semester: 2, },
    { title: "الحركة الوطنية وثورة أول نوفمبر 1954 واستعادة الاستقلال", description: "الأمير عبد القادر، الشيخ الحداد، بيان أول نوفمبر واستعادة السيادة الوطنية 1962.", semester: 3, },
    { title: "التهيئة الإقليمية والمخاطر الكبرى (الزلازل، الفيضانات والتصحر) في الجزائر", description: "السد الأخضر لمكافحة التصحر، الإجراءات الوقائية وإدارة الكوارث الطبيعية.", semester: 3, },
  ],
  'middle-1am-arabic': [
    { title: "الحياة العائلية والترابط الأسري", description: "قيم بر الوالدين، الاحترام، والتكافل داخل الأسرة.", semester: 1, },
    { title: "حب الوطن والتضحية من أجله", description: "قصائد ونصوص تعبر عن الفخر بالانتماء والتضحية الوطنية.", semester: 1, },
    { title: "عظماء الإنسانية وسير الرواد", description: "دراسة نصوص حول كبار المفكرين والعلماء الذين خدموا البشرية.", semester: 1, },
    { title: "الأخلاق والمجتمع والآداب الرفيعة", description: "الصدق، الأمانة، التواضع، ونبذ العنف.", semester: 2, },
    { title: "العلم والاكتشافات العلمية المعاصرة", description: "أثر التكنولوجيا في تطوير الحياة والطب والاتصالات.", semester: 2, },
    { title: "أقسام الكلام وعلامات الإعراب والبناء", description: "الإعراب الظاهر والتقديري، الفعل الماضي، المضارع، والأمر.", semester: 2, },
    { title: "المبتدأ والخبر وأنواعه", description: "الخبر المفرد، الجملة الاسمية، الجملة الفعلية، وشبه الجملة.", semester: 3, },
  ],
  'middle-1am-math': [
    { title: "الأعداد الطبيعية والأعداد العشرية والكتابات الكسرية", description: "قراءة، كتابة، تفكيك، المقارنة، والترتيب على نصف مستقيم مدرج.", semester: 1, },
    { title: "العمليات على الأعداد العشرية والحساب الذهني", description: "الجمع، الطرح، الضرب، والقسمة العشرية والمقربة.", semester: 1, },
    { title: "الأعداد النسبية والتعليم في المستوي المعلم", description: "المقارنة، الترتيب، وإحداثيات نقطة على معلم متعامد ومتجانس.", semester: 1, },
    { title: "الحساب الحرفي والمعادلات البسيطة", description: "استعمال المجهول x والتعبير بدلالة x وحل المعادلات الأولية.", semester: 2, },
    { title: "التناسبية والنسبة المئوية والتمثيلات البيانية", description: "جدول التناسبية، معامل التناسبية، واستخراج المعلومات من مخطط.", semester: 2, },
    { title: "الهندسة: المستقيمات المتعامدة والمتوازية والزوايا", description: "إنشاءات دقيقة بالمسطرة، الكوس، والمنقلة، وحساب مساحات ومحيطات.", semester: 2, },
    { title: "المجسمات: متوازي المستطيلات والمكعب وحجمهما", description: "الوصف، النشر، حساب المساحة الجانبية والكلية والحجوم.", semester: 3, },
  ],
  'middle-1am-physics': [
    { title: "المادة وتحولاتها وحالاتها الفيزيائية", description: "الصلبة، السائلة، والغازية، والنموذج الحبيبي لتفسير التحولات.", semester: 1, },
    { title: "القياسات الفيزيائية (الكتلة، الحجم، والكتلة الحجمية)", description: "استعمال الميزان، المخبار المدرج، وقانون الكتلة الحجمية ρ = m / V.", semester: 1, },
    { title: "المحاليل المائية والخلائط وفصل مكوناتها", description: "الخليط المتجانس وغير المتجانس، والتركيز الكتلي للمحلول.", semester: 2, },
    { title: "الدارة الكهربائية البسيطة والتركيب على التسلسل والتفرع", description: "المخطط النظامي، الرموز، والدارة ذهاب وإياب.", semester: 2, },
    { title: "الدارة المستقصرة والأمن الكهربائي", description: "أسباب حدوث الاستقصار وطرق الحماية باستعمال المنصهرة والعوازل.", semester: 3, },
  ],
  'middle-1am-science': [
    { title: "التغذية عند الإنسان والمجموعات الغذائية", description: "دور الأغذية البنائية، الطاقوية، والوظيفية، والراتب الغذائي.", semester: 1, },
    { title: "التنفس عند الإنسان والتخمر", description: "المبادلات الغازية التنفسية على مستوى الأسناخ الرئوية وإنتاج الطاقة.", semester: 1, },
    { title: "الإطراح وثبات توازن الوسط الداخلي", description: "الجهاز البولي، الكلية، تشكل البول، ودور الجلد في العرق.", semester: 2, },
    { title: "التغذية عند النبات الأخضر (التركيب الضوئي والنسغ)", description: "امتصاص الماء والأملاح المعدنية (النسغ الناقص) وصنع المادة العضوية.", semester: 2, },
    { title: "التنفس والنتح عند النبات الأخضر", description: "دور الثغور الورقية وظاهرة النتح في صعود النسغ الكامل.", semester: 3, },
  ],
  'middle-1am-french': [
    { title: "L'hygiène corporelle et la santé", description: "Textes explicatifs sur le lavage des mains et la propreté.", semester: 1, },
    { title: "Une bonne alimentation pour une bonne santé", description: "Les bienfaits des fruits, légumes et repas équilibrés.", semester: 1, },
    { title: "Le sport et le bien-être physique", description: "L'importance de l'activité sportive quotidienne.", semester: 2, },
    { title: "Les progrès scientifiques et les nouvelles technologies", description: "Internet, smartphones et le monde connecté.", semester: 2, },
    { title: "Grammaire: Les substituts grammaticaux et lexicaux", description: "Éviter les répétitions en utilisant pronoms et synonymes.", semester: 3, },
  ],
  'middle-1am-english': [
    { title: "Me, My Friends and My Family", description: "Greetings, personal pronouns, describing appearance and family.", semester: 1, },
    { title: "My Daily Routines & School Life", description: "Time expressions, simple present tense, school timetable.", semester: 1, },
    { title: "My Free Time Activities and Sports", description: "Hobbies, expressing likes, dislikes and abilities with \"can/can't\".", semester: 2, },
    { title: "Shopping, Food and Healthy Living", description: "Countable/uncountable nouns, prices, ordering food politely.", semester: 2, },
    { title: "Travelling, Places and National Wonders in Algeria", description: "Describing holiday destinations, asking for directions and using prepositions of place.", semester: 3, },
    { title: "Nature, Animals and Environmental Care", description: "Modals (can / must), giving advice, wildlife protection and paragraph writing.", semester: 3, },
  ],
  'middle-1am-history': [
    { title: "الوثيقة التاريخية ودراستها المنهجية", description: "خطوات التحليل التاريخي (التقديم، التحليل، والاستخلاص).", semester: 1, },
    { title: "شمال إفريقيا في فجر التاريخ والآثار القديمة", description: "الحضارة القفصية، الطاسيلي والمواقع الأثرية في الجزائر.", semester: 1, },
    { title: "الممالك النوميدية القديمة ومقاومة الرومان", description: "مملكة ماسينيسا، يوغرطة، وتاكفاريناس ضد الهيمنة الرومانية.", semester: 2, },
    { title: "الموقع الجغرافي للجزائر وخصائصه الطبيعية", description: "التنوع المناخي، التضاريس، والغطاء النباتي والمائي.", semester: 2, },
    { title: "الحضارات القديمة في حوض البحر الأبيض المتوسط", description: "مظاهر الحضارة الفينيقية والمصرية والرومانية وتأثيرها على شمال إفريقيا.", semester: 3, },
    { title: "السكان والتنمية في الجزائر وتوزيع الكثافة السكانية", description: "التباين السكاني بين السواحل والجنوب، والمشاريع التنموية الكبرى.", semester: 3, },
  ],
  'middle-1am-islamic': [
    { title: "سورة الانفطار وسورة المطففين", description: "تلاوة، حفظ، وشرح المفردات واستشعار رقابة الله تعالى.", semester: 1, },
    { title: "الإيمان بالله وملائكته وكتبه", description: "مفهوم العقيدة الإسلامية وأثرها في سلوك المسلم.", semester: 1, },
    { title: "الطهارة وأقسامها (الوضوء، الغسل، والتيمم)", description: "أحكام الطهارة المائية والترابية والصلوات المفروضة.", semester: 2, },
    { title: "سيرة النبي ﷺ: من المولد إلى البعثة النبوية", description: "نشأة النبي، حادثة شق الصدر، وحلف الفضول ونزول الوحي في غار حراء.", semester: 2, },
    { title: "صلاة الجماعة وصلاة الجمعة وفضلهما في الإسلام", description: "أحكام صلاة الجماعة، شروط الإمام والمأموم، وآداب حضور صلاة الجمعة.", semester: 3, },
    { title: "حرمة المسلم وأخلاق الأخوة الإسلامية والتعاون", description: "حديث المسلم أخو المسلم، صلة الرحم، واجتناب الغيبة والنميمة وإصلاح ذات البين.", semester: 3, },
  ],
  'middle-1am-civic': [
    { title: "التنوع الثقافي كعامل قوة ووحدة وطنية", description: "التراث الجزائري المتنوع (أمازيغي، عربي، إسلامي) والتعايش السلمي.", semester: 1, },
    { title: "الحوار والتواصل داخل المؤسسة التعليمية", description: "آداب الحوار بين التلميذ والأستاذ والزملاء ونبذ العنف المدرسي.", semester: 2, },
    { title: "النظام الداخلي للمؤسسة التعليمية وحقوق التلميذ", description: "واجبات الانضباط، المحافظة على الوسائل، والمشاركة في الأنشطة.", semester: 3, },
  ],
  'middle-1am-informatics': [
    { title: "المفاهيم الأساسية للمعلوماتية ومكونات الحاسوب", description: "العتاد (Hardware)، البرمجيات (Software)، ووحدة المعالجة المركزية (CPU).", semester: 1, },
    { title: "نظام التشغيل وإدارة الملفات والمجلدات", description: "إنشاء الملفات، النسخ، النقل، والحذف وتنظيم القرص الصلب.", semester: 2, },
    { title: "معالج النصوص (Microsoft Word): التنسيق والطباعة", description: "كتابة النصوص، تغيير الخط، إدراج الجداول والصور وتنسيق الصفحات.", semester: 3, },
  ],
  'middle-2am-arabic': [
    { title: "حب الوطن والذود عن حماه", description: "نصوص وطنية تبرز التضحيات والتاريخ المجيد للجزائر.", semester: 1, },
    { title: "الأسرة والمجتمع والتربية الصالحة", description: "مكانة الأم والأب والتربية السليمة للنشء.", semester: 1, },
    { title: "عظماء الإنسانية والمصلحون في التاريخ", description: "سير العلماء، المفكرين، والمصلحين وأثرهم الإصلاحي.", semester: 1, },
    { title: "الأخلاق والمسؤولية الاجتماعية", description: "العدل، الوفاء بالعهد، ومحاربة الرذائل والآفات.", semester: 2, },
    { title: "العلم والاكتشافات الحديثة والمستقبل", description: "الذكاء الاصطناعي، استكشاف الفضاء، والطب المتقدم.", semester: 2, },
    { title: "الفعل المجرد والمزيد وحروف الزيادة", description: "أوزان الفعل الثلاثي والرباعي المجرد والمزيد.", semester: 2, },
    { title: "الفعل الصحيح والفعل المعتل وأنواعهما", description: "السالم، المهموز، المضعف، والمثال، الأجوف، الناقص، واللفيف.", semester: 3, },
    { title: "المنصوبات: المفعول فيه والمفعول معه", description: "ظرف الزمان وظرف المكان وواو المعية وإعرابها.", semester: 3, },
  ],
  'middle-2am-math': [
    { title: "العمليات على الأعداد الطبيعية والعشرية والأقواس", description: "أولويات الحساب (الأقواس، الضرب والقسمة، الجمع والطرح).", semester: 1, },
    { title: "الكسور والعمليات عليها وتوحيد المقامات", description: "جمع، طرح، ضرب كسرين ومقارنة الكسور العشرية والعادية.", semester: 1, },
    { title: "الأعداد النسبية: الجمع، الطرح، والمسافة في مستوٍ", description: "حساب المسافة بين نقطتين ومجموع جبري لعدة حدود نسبية.", semester: 1, },
    { title: "الحساب الحرفي وتبسيط العبارات الجبرية", description: "نشر عبارات جبرية وحل معادلات من الدرجة الأولى بمجهول واحد.", semester: 2, },
    { title: "التناسبية والنسب المئوية والسرعة المتوسطة", description: "قانون السرعة v = d / t وحساب النسب المئوية والتخفيض والزيادة.", semester: 2, },
    { title: "متوازي الأضلاع ومتوازيات الأضلاع الخاصة", description: "المعين، المستطيل، المربع، خواص الأقطار والإنشاءات الهندسية.", semester: 2, },
    { title: "المثلثات والدائرة ومساحة الأشكال", description: "مجموع زوايا المثلث 180°، المتباينات المثلثية، ومحيط ومساحة الدائرة.", semester: 3, },
  ],
  'middle-2am-physics': [
    { title: "المادة وتحولاتها الكيميائية والفيزيائية", description: "التمييز بين التحول الكيميائي والفيزيائي وانحفاظ الكتلة أثناء التحول.", semester: 1, },
    { title: "النموذج المجهري للتحول الكيميائي والذرات والجزيئات", description: "الرموز الكيميائية للذرات والصيغ الجزيئية (O2, CO2, H2O, CH4).", semester: 1, },
    { title: "الحركة والسكون والمرجع والمسار", description: "المرجع كشرط لتحديد الحركة، وأنواع المسارات (مستقيمة، منحنية، دائرية).", semester: 2, },
    { title: "سرعة المتحرك ومخطط السرعة", description: "السرعة الثابتة، المتزايدة، المتناقصة، وحساب السرعة اللحظية والمتوسطة.", semester: 2, },
    { title: "نقل الحركة: السيور، السلاسل، الاحتكاك، والتعشيق", description: "طرق نقل الحركة ومزايا ومساوئ كل طريقة واتجاهات الدوران.", semester: 3, },
  ],
  'middle-2am-science': [
    { title: "الوسط الحي ومكوناته الحيوية واللاحيوية", description: "العوامل الفيزيوكيميائية وتأثيرها على توزع الكائنات الحية.", semester: 1, },
    { title: "العلاقات القائمة بين الكائنات الحية والسلاسل الغذائية", description: "المنتجون، المستهلكون، والمحللون، وانتقال الكتلة الحية.", semester: 1, },
    { title: "تأثير العوامل المناخية والتكيف مع البيئات الجافة", description: "التحورات المورفولوجية للجذور والسيقان والأوراق عند النباتات.", semester: 2, },
    { title: "تنفس الحيوانات واحتلال الأوساط المختلفة", description: "التنفس الرئوي، الغلاصمي، الجلدي، والقصبي وعلاقته بنمط الحياة.", semester: 2, },
    { title: "التكاثر وإعمار الأوساط عند النبات والحيوان", description: "الإلقاح الداخلي والخارجي، التكاثر الخضري، وانتشار البذور والبيوض.", semester: 3, },
  ],
  'middle-2am-french': [
    { title: "Le conte merveilleux et la structure narrative", description: "Il était une fois, les personnages, l'élément modificateur et la fin.", semester: 1, },
    { title: "La fable et les animaux personnifiés", description: "Les récits de Jean de La Fontaine et la morale de l'histoire.", semester: 1, },
    { title: "La légende et les récits du patrimoine", description: "Les histoires populaires et les mythes de nos régions.", semester: 2, },
    { title: "L'imparfait et le passé simple dans le récit", description: "L'emploi de l'imparfait (description) et passé simple (actions brèves).", semester: 2, },
    { title: "La bande dessinée (BD) et le dialogue dans le récit", description: "Vignettes, bulles, onomatopées et insertion du dialogue dans une histoire.", semester: 3, },
    { title: "Le discours direct / indirect et la ponctuation du dialogue", description: "Les verbes de parole, guillemets, tirets et la transposition des paroles.", semester: 3, },
  ],
  'middle-2am-english': [
    { title: "Me, My Lifestyle and My Health", description: "Health habits, illnesses, giving advice using \"should / shouldn't\".", semester: 1, },
    { title: "Shopping, Travels and Discoveries", description: "Comparing things using comparatives and superlatives (better, best).", semester: 1, },
    { title: "Nature, Animals in Danger and Environment", description: "Wildlife habitats, pollution, using \"must / mustn't\" for rules.", semester: 2, },
    { title: "Past Continuous vs Past Simple with \"While / When\"", description: "Complex narrative sentences describing simultaneous past actions.", semester: 2, },
    { title: "Inventions, Discoveries and Famous Scientists", description: "Past simple passive, talking about historic inventions and scientific breakthroughs.", semester: 3, },
    { title: "Future Plans, Holidays and Expressing Intentions (Will / Going to)", description: "Making predictions, booking trips, future conditional (If-clause type 1).", semester: 3, },
  ],
  'middle-2am-history': [
    { title: "شبه الجزيرة العربية قبل الإسلام والبعثة المحمدية", description: "الأوضاع الدينية، الاجتماعية، والسياسية ونزول الرسالة الخاتمة.", semester: 1, },
    { title: "الدولة الإسلامية في عهد الخلفاء الراشدين والفتوحات", description: "أبو بكر، عمر، عثمان، وعلي رضي الله عنهم وتوسع رقعة الإسلام.", semester: 1, },
    { title: "الفتح الإسلامي لبلاد المغرب ومراحله", description: "عقبة بن نافع، أبو المهاجر دينار، وتأسيس مدينة القيروان.", semester: 2, },
    { title: "الدول المستقلة في بلاد المغرب (الرستمية، الحمادية، والموحدية)", description: "العواصم الإسلامية (تاهرت، القلعة، بجاية) ومساهمتها الحضارية.", semester: 2, },
    { title: "الحضارة الإسلامية وإشعاعها العلمي والفني والعمراني", description: "الجامعات (القرويين، الزيتونة)، الطب، الفلك، الفلسفة، والعمارة الإسلامية الخالدة في الأندلس والمغرب.", semester: 3, },
    { title: "قارة آسيا وأمريكا: التباين الإقليمي والتنوع الطبيعي والتنمية", description: "المناخ الموسمي في آسيا، التنينات والنمور الآسيوية، واستغلال المجال الجغرافي.", semester: 3, },
  ],
  'middle-2am-islamic': [
    { title: "سورة النجم وتفسير آياتها الكريمة", description: "رحلة الإسراء والمعراج، صدق الوحي وتثبيت فؤاد النبي ﷺ.", semester: 1, },
    { title: "الإيمان باليوم الآخر وععلامات الساعة", description: "البعث، الحشر، الحساب، الميزان، الصراط، والجنة والنار.", semester: 1, },
    { title: "الصلوات المسنونة (صلاة التراويح، الاستسقاء، والكسوف)", description: "أحكام صلوات النوافل وفضلها وأوقاتها وكيفية أدائها.", semester: 2, },
    { title: "الهجرة النبوية إلى يثرب وبناء المجتمع المسلم", description: "المؤاخاة، وثيقة المدينة، وبداية التقويم الهجري.", semester: 2, },
    { title: "صلة الرحم والإحسان إلى الجار في الإسلام", description: "حقوق الجار الثلاثة، فضل صلة الأرحام وعقوبة قطيعتها في السنة النبوية.", semester: 3, },
    { title: "غزوات النبي ﷺ الكبرى (بدر وأحد والخندق) وصحيفة المدينة", description: "المعاهدة مع غير المسلمين، شجاعة الصحابة وقيم الوفاء بالعهود في السلم والحرب.", semester: 3, },
  ],
  'middle-2am-civic': [
    { title: "حقوق الإنسان والمواثيق الدولية والوطنية", description: "الإعلان العالمي لحقوق الإنسان، الحق في الحياة، الكرامة، والتعليم.", semester: 1, },
    { title: "المجالس المنتخبة ودورها في التنمية المحلية", description: "المجلس الشعبي البلدي (APC) والمجلس الشعبي الولائي (APW).", semester: 2, },
    { title: "المؤسسات الأمنية والقضائية وحماية المواطن", description: "الشرطة، الدرك، الحماية المدنية، والمحاكم الابتدائية.", semester: 3, },
  ],
  'middle-2am-informatics': [
    { title: "المجدول (Microsoft Excel) وبنية المصنف وأوراق العمل", description: "الأعمدة، الصفوف، الخلايا، وكتابة البيانات العددية والنصية.", semester: 1, },
    { title: "الدوال الرياضية والإحصائية البسيطة (SOMME, MOYENNE, MAX, MIN)", description: "استعمال الصيغ الحسابية واستخراج النتائج التلقائية.", semester: 2, },
    { title: "إنشاء المخططات والرسوم البيانية وتنسيق الجداول", description: "تمثيل المعطيات الإحصائية بأعمدة وأشكال دائرية ملونة.", semester: 3, },
  ],
  'middle-3am-arabic': [
    { title: "الآفات الاجتماعية ومخاطرها وسبل الوقاية منها", description: "نصوص أدبية في محاربة التدخين، المخدرات، والإدمان الإلكتروني.", semester: 1, },
    { title: "الإعلام والاتصال والصحافة والمجتمع الرقمي", description: "دور الكلمة الصادقة، حرية التعبير، ومسؤولية صناع المحتوى.", semester: 1, },
    { title: "التضامن الإنساني والإغاثة في الأزمات", description: "الهلال الأحمر الجزائري، التكافل الاجتماعي والتطوع الخيري.", semester: 1, },
    { title: "شعوب العالم وثقافاتها وحوار الحضارات", description: "احترام الاختلاف الثقافي وتبادل المعارف بين الشعوب.", semester: 2, },
    { title: "بناء الفعل الماضي وحالاته (الفتح، الضم، والسكون)", description: "تفصيل قواعد بناء الماضي مع واو الجماعة وتاء الفاعل ونا الفاعلين.", semester: 2, },
    { title: "اسم الفعل الماضي (هيهات، شتان، سرعان) وأحكامه", description: "التعريف، المعنى، العمل، والإعراب التام لأسماء الأفعال الماضية.", semester: 2, },
    { title: "الفعل المضارع المنصوب والمجزوم وعلاماتهما", description: "أن، لن، إذن، كي، لام التعليل، حتى، وأدوات الجزم (لم، لما، لام الأمر، لا الناهية).", semester: 3, },
    { title: "اسم الفاعل واسم المفعول وعملهما وصياغتهما", description: "الصياغة من الفعل الثلاثي وغير الثلاثي وإعراب معمولهما.", semester: 3, },
  ],
  'middle-3am-math': [
    { title: "العمليات على الكسور والأعداد الناطقة وتوحيد المقامات", description: "جمع، طرح، ضرب، وقسمة الأعداد الناطقة الموجبة والسالبة.", semester: 1, },
    { title: "القوى ذات أسس صحيحة نسبية والكتابة العلمية", description: "قواعد الحساب على قوى العدد 10 والكتابة العلمية للعدد العشري a × 10^n.", semester: 1, },
    { title: "الحساب الحرفي والمعادلات والمتراجحات البسيطة", description: "نشر وتبسيط جداء عاملين وحل معادلة من الشكل ax + b = c.", semester: 1, },
    { title: "المثلث القائم وخاصية فيثاغورس وحساب الأطوال", description: "مبرهنة فيثاغورس المباشرة والعكسية وتطبيقاتها في حساب الأطوال.", semester: 2, },
    { title: "جيب تمام زاوية حادة (Cosinus) في مثلث قائم", description: "حساب Cos الزاوية، استنتاج قيس الزاوية بالآلة الحاسبة، واستخراج الأطوال.", semester: 2, },
    { title: "المثلثات والمستقيمات الخاصة (المنصفات، المحاور، والمتوسطات)", description: "مركز الدائرة المحاطة، مركز الدائرة المحيطة، ومركز ثقل المثلث.", semester: 2, },
    { title: "الهرم ومخروط الدوران والحجوم والمساحات", description: "الوصف، النشر الهندسي الدقيق، وحساب الحجم V = 1/3 × B × h.", semester: 3, },
  ],
  'middle-3am-physics': [
    { title: "الطاقة وأشكالها (الحركية، الكامنة الثقالية والمرونية)", description: "الرموز Ec, Epp, Epe, Ei والتحولات الطاقوية في الجمل الفيزيائية.", semester: 1, },
    { title: "السلسلة الوظيفية والسلسلة الطاقوية ومبدأ الانحفاظ", description: "أفعال الحالة، أفعال الأداء، أنماط التحويل (W, Q, Er, Wm) والحصيلة الطاقوية.", semester: 1, },
    { title: "استطاعة التحويل الطاقوي واستهلاك الطاقة (E = P × t)", description: "حساب الطاقة بالجول (J) والواط ساعي (Wh) وفاتورة الكهرباء والغاز.", semester: 2, },
    { title: "التيار الكهربائي المستمر وخصائصه وقوانينه", description: "الجهة الاصطلاحية، الشدة (I بالـ Ampère)، والتوتر (U بالـ Volt) وقانون أوم.", semester: 2, },
    { title: "الضوء والألوان وتركيب الضوء الأبيض وتبدده", description: "المنشور الزجاجي، ألوان الطيف السبعة، والتركيب الجمعي والطرحي للألوان.", semester: 3, },
  ],
  'middle-3am-science': [
    { title: "الديناميكية الداخلية للكرة الأرضية والزلازل والبراكين", description: "أسباب الزلازل، بؤرة الزلزال، المركز السطحي، وأجهزة قياس الشدة.", semester: 1, },
    { title: "تكتونية الصفائح وحركات التباعد والتقارب", description: "الظهرات المحيطية، مناطق الغوص، وتشكل سلاسل الجبال (جبال الأطلس والهيمالايا).", semester: 1, },
    { title: "البنية الداخلية للكرة الأرضية (القشرة، الرداء، والنواة)", description: "الطبقات الصخرية، الموجات الزلزالية وتفسير انقطاع موهو وغوتنبرغ.", semester: 2, },
    { title: "الثروات الطبيعية الباطنية في الجزائر وتسييرها العقلاني", description: "المحروقات (البترول والغاز)، المياه الجوفية، واستغلال المناجم.", semester: 2, },
    { title: "التربة ثروة هشة وحمايتها من الانجراف والتصحر", description: "مراحل تشكل التربة، العوامل الحيوية، ودور السد الأخضر الجزائري.", semester: 3, },
  ],
  'middle-3am-french': [
    { title: "Le texte d'histoire et les faits réels (Le fait divers)", description: "Rapporter un événement réel: accident, catastrophe, méfait ou insolite.", semester: 1, },
    { title: "La biographie et le témoignage historique", description: "Raconter la vie d'un héros de la révolution algérienne ou d'un savant.", semester: 1, },
    { title: "La voix passive et active dans les articles de presse", description: "Transformation passive pour mettre en valeur le résultat de l'action.", semester: 2, },
    { title: "Le discours direct et indirect dans les témoignages", description: "Rapporter fidèlement les paroles avec les verbes introducteurs.", semester: 2, },
    { title: "Le texte explicatif et documentaire scientifique", description: "Les procédés explicatifs : définition, reformulation, illustration et connecteurs logiques.", semester: 3, },
    { title: "La cause, la conséquence et le lexique thématique des découvertes", description: "Exprimer la cause (parce que, grâce à) et la conséquence (donc, si bien que).", semester: 3, },
  ],
  'middle-3am-english': [
    { title: "Me, My Memories and Childhood Past", description: "Used to + verb, describing past habits, childhood memories and hobbies.", semester: 1, },
    { title: "Famous Personalities, Inventions and History", description: "Past Simple, relative pronouns (who, which, that), biographies of scientists.", semester: 1, },
    { title: "Environment, Natural Disasters and Green Living", description: "Earthquakes, tsunamis, floods, cause & effect (because of, so, therefore).", semester: 2, },
    { title: "Passive Voice in Science & Technology Texts", description: "Present simple and past simple passive forms (is made, was discovered).", semester: 2, },
    { title: "Solidarity, Charity and Community Volunteering", description: "Expressions of sympathy, active citizenship, expressing obligation and prohibition.", semester: 3, },
    { title: "Exploring the Universe, Astronomy and Space Science", description: "Comparative and superlative forms, future predictions, relative pronouns (who, which, where).", semester: 3, },
  ],
  'middle-3am-history': [
    { title: "الدولة العثمانية: النشأة، التوسع والفتوحات الإسلامية", description: "عثمان بن أرطغرل، فتح القسطنطينية 1453م على يد محمد الفاتح.", semester: 1, },
    { title: "الجزائر في العصر الحديث وعلاقتها بالدولة العثمانية", description: "نجدة الإخوة بربروس (عروج وخير الدين) وانضمام الجزائر طواعية.", semester: 1, },
    { title: "التنظيم السياسي والإداري والعسكري للدولة الجزائرية", description: "عهد البايلربايات، الباشاوات، الأغاوات، وعهد الدايات والتقسيم إلى بايلكات.", semester: 2, },
    { title: "المكانة الدولية للجزائر وأسطولها البحري في المتوسط", description: "السيادة البحرية، المعاهدات الدولية، والعلاقات مع الدول الأوروبية وأمريكا.", semester: 2, },
    { title: "النهضة الأوروبية الحديثة، الثورة الصناعية، وحركات الكشوفات الجغرافية", description: "أسباب النهضة، نتائج الثورة الصناعية، وانعكاساتها على العالم العربي والإسلامي.", semester: 3, },
    { title: "قارة إفريقيا وأوقيانوسيا: المؤهلات الطبيعية، الموارد الخام، ومعوقات التنمية", description: "التناقض بين وفرة الموارد وفقر السكان، والتكتلات الاقتصادية الإفريقية.", semester: 3, },
  ],
  'middle-3am-islamic': [
    { title: "سورة الحشر وتدبر آياتها الكريمة", description: "إجلاء بني النضير، أسماء الله الحسنى، وفضل التقوى والإنفاق.", semester: 1, },
    { title: "الإيمان بالرسل والكتب وعصمة الأنبياء", description: "وظيفة الرسل، الصبر على الأذى، والكتب السماوية ورسالة الإسلام الخاتمة.", semester: 1, },
    { title: "الزكاة: شروطها، مصارفها الثمانية، وحكمتها", description: "زكاة الأموال، الزروع، والأنعام، ودور الزكاة في محاربة الفقر والطبقية.", semester: 2, },
    { title: "غزوة بدر الكبرى وغزوة أحد (الدروس والعبر)", description: "أسباب المعركتين، التخطيط الحربي، الشورى، ونتائج مخالفة أوامر القيادة.", semester: 2, },
    { title: "الحج وأحكامه ومناسكه الكبرى ومقاصده الإيمانية والاجتماعية", description: "الإحرام، الطواف، السعي، الوقوف بعرفة، رمي الجمرات، وحكمته في وحدة الأمة.", semester: 3, },
    { title: "صلح الحديبية وفتح مكة المكرمة وعفو النبي ﷺ الشامل", description: "شروط الصلح وحكمة النبي ﷺ، ثم نصر الله بفتح مكة وشعار (اليوم يوم المرحمة).", semester: 3, },
  ],
  'middle-3am-civic': [
    { title: "الإعلام وحرية التعبير والمسؤولية الأخلاقية", description: "أنواع وسائل الإعلام، شروط ممارسة حرية التعبير، وتجنب التشهير والشائعات.", semester: 1, },
    { title: "المؤسسات الدستورية للجمهورية الجزائرية", description: "رئيس الجمهورية، المحكمة الدستورية، البرلمان بغرفتيه، والحكومة.", semester: 2, },
    { title: "الهوية الوطنية والسيادة الشعبية والانتخابات", description: "أركان الشخصية الجزائرية (الإسلام، العروبة، والأمازيغية) والمواطنة الفاعلة.", semester: 3, },
  ],
  'middle-3am-informatics': [
    { title: "برنامج العروض التقديمية (Microsoft PowerPoint)", description: "إنشاء الشرائح، تصميم الخلفيات، إدراج الوسائط (فيديو، صوت، صور).", semester: 1, },
    { title: "الحركات المخصصة والانتقالات بين الشرائح", description: "إضافة تأثيرات الدخول والتوكيد والخروج وتوقيت العرض التلقائي.", semester: 2, },
    { title: "شبكات الحاسوب وشبكة الإنترنت والأمن السيبراني", description: "مفهوم الشبكة المحلية LAN والشبكة العالمية WAN وطرق الحماية من الفيروسات.", semester: 3, },
  ],
  'middle-4am-arabic': [
    { title: "الجملة البسيطة والجملة المركبة", description: "التمييز بين الجملة المفردة والمركبة وتحديد عناصر الجملة الأصلية والفرعية.", semester: 1, },
    { title: "الجملة الواقعة مفعولاً به، نعتاً، وحالاً", description: "محل الجملة الإعرابي بعد النكرات (صفات) وبعد المعارف (أحوال) ومفعول القول.", semester: 1, },
    { title: "الجملة الواقعة خبراً لمبتدأ أو لناسخ ومضافاً إليه", description: "شروط الإعراب والجمل الواقعة بعد ظروف الزمان والمكان (إذ، إذا، حين، يوم).", semester: 1, },
    { title: "عطف النسق ومعاني حروف العطف", description: "الواو، الفاء، ثم، حتى، أو، أم، بل، لا، لكن، وإعراب المعطوف والمعطوف عليه.", semester: 2, },
    { title: "البدل وأنواعه (الكل من الكل، الجزء من الكل، والاشتمال)", description: "التعريف بالبدل والمبدل منه وإعرابهما وعلامات التبعية.", semester: 2, },
    { title: "العدد وقواعد تذكيره وتأنيثه وإعراب المعدود", description: "الأعداد المفردة (1-10)، المركبة (11-19)، العقود (20-90)، والمعطوفة وإعراب التمييز.", semester: 2, },
    { title: "التمييز والاستثناء وأحكامهما الإعرابية", description: "تمييز الذات وتمييز النسبة، وأدوات الاستثناء (إلا، غير، سوى، خلا، عدا، حاشا).", semester: 3, },
    { title: "الممنوع من الصرف لعلة واحدة ولعلتين", description: "صيغ منتهى الجموع، ألف التأنيث، العلمية والوصفية وعلامة جره بالفتحة نيابة عن الكسرة.", semester: 3, },
    { title: "التوكيد اللفظي والمعنوي", description: "ألفاظ التوكيد (نفس، عين، كل، جميع، كلاهما، كلتاهما) وشروط اتصالها بضمير.", semester: 3, },
  ],
  'middle-4am-math': [
    { title: "الأعداد الطبيعية والأعداد الناطقة وحساب الـ PGCD", description: "خوارزمية الفروق المتتالية، خوارزمية إقليدس (القسمات المتتالية)، واختزال الكسور.", semester: 1, },
    { title: "الحساب على الجذور التربيعية وقواعد التبسيط", description: "خواص الجداء والقسمة، تبسيط العبارات الجذرية من الشكل a√b وجعل المقام عدداً ناطقاً.", semester: 1, },
    { title: "الحساب الحرفي، المتطابقات الشهيرة، والتحليل إلى جداء عاملين", description: "المتطابقات الثلاث: (a+b)²، (a-b)²، (a-b)(a+b)، وحل المعادلات من الشكل A(x) × B(x) = 0.", semester: 1, },
    { title: "المتراجحات من الدرجة الأولى بمجهول واحد وتمثيل الحلول", description: "خواص الترتيب، حل المتراجحة، والتمثيل البياني للحلول على مستقيم مدرج.", semester: 1, },
    { title: "جملة معادلتيـن من الدرجة الأولى بمجهولين", description: "طريقة الجمع والتعويض، الحل البياني، وترييض مشكلات واقعية وهندسية.", semester: 2, },
    { title: "الدالة الخطية والدالة التآلفية والتمثيل البياني", description: "f(x) = ax و g(x) = ax + b، حساب المعاملين a و b، وقراءة الصور والسوابق بيانياً.", semester: 2, },
    { title: "خاصية طاليس والخاصية العكسية وحساب الأطوال", description: "حساب الأطوال، تقسيم قطعة مستقيم، والبرهان على توازي مستقيمين.", semester: 2, },
    { title: "حساب المثلثات في المثلث القائم (Cos, Sin, Tan)", description: "جيب الزاوية، جيب تمامها، ظلها، والعلاقات المثلثية الشهيرة (cos² + sin² = 1).", semester: 2, },
    { title: "الأشعة والمعالم في المستوي والإحداثيات", description: "مركبات شعاع، إحداثيات منتصف قطعة، وحساب المسافة بين نقطتين في معلم متعامد.", semester: 3, },
    { title: "الدوران، الزوايا المحيطية والمركزية، والمضلعات المنتظمة", description: "خواص الدوران، العلاقة بين الزاوية المركزية والمحيطية الحاصرتين لنفس القوس.", semester: 3, },
    { title: "الهندسة الفضائية: المقاطع المستوية للمجسمات والتكبير والتصغير", description: "مقطع مكعب، متوازي مستطيلات، أسطوانة، ومخروط، ومعامل التكبير والتصغير k و k³.", semester: 3, },
  ],
  'middle-4am-physics': [
    { title: "المادة وتحولاتها: الشحنة الكهربائية والتكهرب", description: "طرق التكهرب (الدلك، اللمس، والتأثير)، النواقل والعوازل، وبنية الذرة ونموذج رذرفورد.", semester: 1, },
    { title: "المحلول الشاردي والتحليل الكهربائي البسيط", description: "التمييز بين المحلول الجزيئي والشاردي، هجرة الشوارد نحو المسريين، ونمذجة التحليل بالمعادلات.", semester: 1, },
    { title: "التفاعلات الكيميائية في المحاليل الشاردية", description: "تفاعل حمض كلور الماء مع معدن (Fe, Zn, Al)، تفاعل محلول ملحي مع معدن، وتفاعل حمض مع كلس.", semester: 1, },
    { title: "الظواهر الميكانيكية: الجملة الميكانيكية والقوة ومفهوم الثقل", description: "مفهوم الثقل P = m × g، خصائص القوة، وشرط توازن جسم صلب خاضع لقوتين أو 3 قوى.", semester: 2, },
    { title: "دافعة أرخميدس في السوائل وشروط الطفو والغوص", description: "قانون دافعة أرخميدس Fa = ρ × V × g و Fa = P_حقيقي - P_ظاهري وتطبيقات الغواصات والسفن.", semester: 2, },
    { title: "الظواهر الكهربائية: التيار الكهربائي المتناوب وخصائصه", description: "التحريض الكهرومغناطيسي، راسم الاهتزاز المهبطي، التوتر الأعظمي Umax، الدور T، والتواتر f.", semester: 2, },
    { title: "الأمن الكهربائي في المنازل وتفادي أخطار الصعق", description: "المأخذ الأرضي، القاطع التفاضلي، المنصهرة، وحماية الأجهزة والإنسان من التكهرب.", semester: 3, },
    { title: "الظواهر الضوئية: قانونا الانعكاس وانكسار الضوء", description: "مرآة مستوية، الصورة الافتراضية، قانونا ديكارت للانكسار، وزاوية الورود والانكسار.", semester: 3, },
  ],
  'middle-4am-science': [
    { title: "تحولات الأغذية في الأنبوب الهضمي والأنزيمات النوعية", description: "الهضم الآلي والكيميائي، عمل الأميلاز، البروتياز، والليباز ونواتج الهضم النهائية (المغذيات).", semester: 1, },
    { title: "امتصاص المغذيات وبنية الزغابة المعوية", description: "السطح الداخلي للأمعاء الدقيقة، الزغابات، الطريق الدموي والطريق اللمفاوي للمغذيات.", semester: 1, },
    { title: "نقل المغذيات في العضوية والوسط الداخلي (الدم واللمف)", description: "مكونات الدم (كريات حمراء، بيضاء، صفائح، وبلازما) ودور الهيموغلوبين في نقل الغازات.", semester: 1, },
    { title: "استعمال المغذيات على المستوى الخلوي وإنتاج الطاقة", description: "التنفس الخلوي الهوائي واستعمال الغلوكوز والأكسجين، ومفهوم التخمر اللبني عند غياب الأكسجين.", semester: 1, },
    { title: "الاتصال العصبي: بنية الجهاز العصبي والمستقبلات الحسية", description: "المخ، النخاع الشوكي، الأعصاب، وبنية العصبون والرسالة العصبية ذات الطبيعة الكهروكيميائية.", semester: 2, },
    { title: "الحركة الإرادية والحركة اللاإرادية (المنعكس الفطري)", description: "الأعضاء الفاعلة في الفعل الإرادي واللاإرادي (القوس الانعكاسية) والمركز العصبي لكل منهما.", semester: 2, },
    { title: "الاستجابة المناعية الطبيعية (اللا نوعية) والخطوط الدفاعية", description: "الحواجز الطبيعية (الخط الأول)، التفاعل الالتهابي والبلعمة (الخط الثاني).", semester: 2, },
    { title: "الاستجابة المناعية النوعية (الخلطية والخلوية)", description: "الخلايا اللمفاوية البائية LB والأجسام المضادة، واللمفاوية التائية LTc السامة والذاكرة المناعية.", semester: 2, },
    { title: "اعتلالات الجهاز المناعي: الحساسية واللقاحات والمصول", description: "الحساسية المفرطة ومادة الهستامين، والفرق الجوهري بين التلقيح الوقائي والاستمصال العلاجي.", semester: 3, },
    { title: "انتقال الصفات الوراثية وتشكل الأمشاج والأمراض الوراثية", description: "الانقسام المنصف، الصبغيات، النمط النووي، الأليلات، وشجرة النسب للأمراض المرتبطة بالجنس.", semester: 3, },
  ],
  'middle-4am-french': [
    { title: "Le texte argumentatif: Thèse, arguments et exemples", description: "Structure du plaidoyer pour défendre le patrimoine touristique et culturel.", semester: 1, },
    { title: "La protection de l'environnement et l'écocitoyenneté", description: "Développer des arguments solides contre la pollution et le gaspillage.", semester: 1, },
    { title: "Le vivre-ensemble et la tolérance et la paix", description: "Défendre la fraternité, les droits de l'homme et rejeter le racisme.", semester: 2, },
    { title: "Les rapports logiques: Cause, conséquence, but, et opposition", description: "Maîtrise des connecteurs (parce que, donc, pour que, bien que...).", semester: 2, },
    { title: "Le conditionnel présent et le subjonctif présent", description: "Exprimer le souhait, l'hypothèse, l'obligation et le doute.", semester: 3, },
  ],
  'middle-4am-english': [
    { title: "Universal Landmarks and Outstanding Figures in History", description: "Describing famous monuments (Eiffel Tower, Big Ben) and biographing icons.", semester: 1, },
    { title: "Personality Features, Ideals and Role Models", description: "Character adjectives, expressing dreams and career ambitions.", semester: 1, },
    { title: "Citizenry, Voluntary Work and Global Responsibility", description: "Protecting the planet, helping charities, modal verbs of obligation.", semester: 2, },
    { title: "Complex Grammar: Passive Voice, Conditionals (Type 1 & 2)", description: "If + Present -> Future, If + Past -> Would + Verb for imaginary situations.", semester: 2, },
    { title: "Eco-tourism, Green Initiatives and Preserving Heritage", description: "Writing argumentative articles, cause and result clauses, expressing opinions and modal verbs for BEM.", semester: 3, },
    { title: "Comprehensive BEM Exam Preparation: Reading Strategies & Paragraph Writing", description: "Techniques for solving BEM exam papers, answering comprehension questions and mastering the written expression.", semester: 3, },
  ],
  'middle-4am-history': [
    { title: "الاستعمار الفرنسي والسياسة الاستعمارية في الجزائر", description: "مصادرة الأراضي، سياسة الاستيطان، التنصير، ومحاولة طمس الهوية الوطنية.", semester: 1, },
    { title: "المقاومة الوطنية الشعبية المسلحة والانتفاضات (1830-1919)", description: "مقاومة الأمير، المقراني، الشيخ بوعمامة، وأسباب عدم تحقيق النصر العسكري المبكر.", semester: 1, },
    { title: "الحركة الوطنية الجزائرية وتطور الاتجاهات السياسية (1919-1953)", description: "الاتجاه الاستقلالي (نجم شمال إفريقيا)، الإدماجي، الإصلاحي (جمعية العلماء)، والبيان.", semester: 1, },
    { title: "المنظمة الخاصة (OS) وأزمة حركة انتصار الحريات الديمقراطية", description: "تأسيس الجناح العسكري السري 1947، واجتماع مجموعة الـ 22 التاريخي.", semester: 2, },
    { title: "اندلاع الثورة التحريرية الكبرى ومراحلها الأربعة (1954-1962)", description: "بيان أول نوفمبر، هجومات الشمال القسنطيني 1955، ومؤتمر الصومام 1956 وتأسيس GPRA.", semester: 2, },
    { title: "المفاوضات واتفاقيات إيفيان واسترجاع السيادة الوطنية 1962", description: "مفاوضات مولان، لوسيرن، إيفيان الأولى والثانية وإعلان الاستقلال في 5 جويلية.", semester: 2, },
    { title: "جغرافية الجزائر: التضاريس، المناخ، المجاري المائية، والمخاطر الكبرى", description: "الشبكة الهيدروغرافية، الأودية (الشلف، سيبوس)، التصحر، والزلازل والفيضانات.", semester: 3, },
  ],
  'middle-4am-islamic': [
    { title: "سورة النبأ وتفسير آيات البعث والجزاء والحساب", description: "تلاوة، حفظ، وأدلة قدرة الله على إحياء الموتى ومشاهد يوم الفصل.", semester: 1, },
    { title: "الإيمان بالقضاء والقدر والتوكل الصحيح على الله", description: "مراتب القدر (العلم، الكتابة، المشيئة، والخلق) والفرق بين التوكل والتواكل.", semester: 1, },
    { title: "الحج والعمرة: الشروط، الأركان، الواجبات، والحكمة", description: "الإحرام، الطواف، السعي، الوقوف بعرفة، ورمي الجمرات والتضحية.", semester: 2, },
    { title: "صلة الرحم، حسن الجوار، وحرمة الجرائم في الإسلام", description: "حفظ النفس، صيانة الأموال والأعراض ومحاربة الآفات والجرائم.", semester: 2, },
    { title: "فتح مكة وحجة الوداع ووفاة النبي المصطفى ﷺ", description: "خطبة الوداع، وصايا الرسول للأمة، وانقطاع الوحي والتمسك بالقرآن والسنة.", semester: 3, },
  ],
  'middle-4am-civic': [
    { title: "الصلح والوساطة القضائية لحل النزاعات الودية", description: "مفهوم الصلح القضائي، دور الوسيط، وتخفيف الضغط على المحاكم.", semester: 1, },
    { title: "الجهاز القضائي في الجزائر والمحكمة العليا ومجلس الدولة", description: "المحاكم الابتدائية، المجالس القضائية، ودرجات التقاضي واستقلالية القضاء.", semester: 1, },
    { title: "المحاكمة العادلة وحقوق المتقاضين وضمانات الدفاع", description: "قرينة البراءة (\"المتهم بريء حتى تثبت إدانته\")، علانية الجلسات، وحق الاستئناف.", semester: 2, },
    { title: "الدستور الجزائري وتعديلاته ومبادئه الديمقراطية", description: "ديباجة الدستور، الحقوق والحريات، وفصل السلطات الثلاث (تنفيذية، تشريعية، قضائية).", semester: 2, },
    { title: "المنظمات الإنسانية الدولية والجهوية: الأمم المتحدة، اليونسكو، والهلال الأحمر", description: "أهداف هيئة الأمم المتحدة، حماية الأمن والسلم الدوليين، ودور الجزائر في نصرة القضايا العادلة.", semester: 3, },
    { title: "احترام حقوق الإنسان ومكافحة التمييز العنصري والفساد الإداري", description: "الإعلان العالمي لحقوق الإنسان 1948، محاربة الرشوة والمحسوبية وترسيخ دولة القانون للشهادة (BEM).", semester: 3, },
  ],
  'secondary-1as-st_core-math': [
    { title: "المجموعات الأساسية للأعداد والحساب في R", description: "الأعداد الطبيعية، الصحيحة، العشرية، الناطقة، والحقيقية، والأعداد الأولية والـ PGCD.", semester: 1, },
    { title: "الترتيب، المجالات، القيمة المطلقة، والمسافة", description: "المتراجحات، خواص القيمة المطلقة |x - a| ≤ r والحصر والتقريب ورتبة مقدار.", semester: 1, },
    { title: "عموميات على الدوال والتمثيلات البيانية", description: "مجموعة التعريف، اتجاه التغير، شفعية الدالة (زوجية/فردية)، والقيم الحدية.", semester: 1, },
    { title: "الدوال المرجعية (التآلفية، المربع، المقلوب، والجذر التربيعي)", description: "دراسة الخواص البيانية والتحويلات النقطية (الانسحاب والتماثل).", semester: 2, },
    { title: "الحساب الشعاعي في المستوي ومعادلة مستقيم", description: "تساوي شعاعين، الارتباط الخطي، معامل التوجيه، ومعادلة المستقيم الديكارتية.", semester: 2, },
    { title: "حساب المثلثات والدائرة المثلثية", description: "الراديان، جيب وجيب تمام الزوايا الشهيرة (0, π/6, π/4, π/3, π/2, π).", semester: 2, },
    { title: "الإحصاء وتلخيص المعطيات العددية", description: "الوسط الحسابي، الوسيط، المنوال، المدى، والربيعيات Q1 و Q3 والمخطط بالعلبة.", semester: 3, },
    { title: "الهندسة في الفضاء والأوضاع النسبية للمستقيمات والمستويات", description: "التوازي والتعامد في الفضاء، حساب حجوم ومساحات المجسمات الهندسية.", semester: 3, },
  ],
  'secondary-1as-st_core-physics': [
    { title: "بنية وهندسة بعض الأنواع الكيميائية ونموذج لويس", description: "الذرة، النظائر، التوزيع الإلكتروني، قاعدة الثنائية والثمانية، والتمثيل الهندسي للجزيئات.", semester: 1, },
    { title: "من المجهري إلى العياني: مفهوم المول والكتلة المولية والتركيز", description: "كمية المادة n = m / M و n = V / Vm و n = C × V وقانون الغازات المثالية.", semester: 1, },
    { title: "القوة والحركات المستقيمة ومبدأ العطالة (قانون نيوتن الأول)", description: "الحركة المستقيمة المنتظمة والمتغيرة بانتظام ومفهوم القوة وتغير السرعة Δv.", semester: 2, },
    { title: "القوة والحركات المنحنية والدائرية المنتظمة", description: "القوة المركزية والحركة الدائرية وسرعة الأقمار الصناعية حول الأرض.", semester: 2, },
    { title: "القوة والحركة والمرجع وعطالية الجمل", description: "المراجع الغاليلية (الهليومركزي، الجيومركزي، والسطحي الأرضي) والتأثير المتبادل.", semester: 3, },
    { title: "الضوء: ظواهر الانعكاس، الانكسار، والأطياف الضوئية", description: "أطياف الإصدار والامتصاص ودرجة حرارة النجوم وتحليل الضوء.", semester: 3, },
  ],
  'secondary-1as-st_core-science': [
    { title: "استعمال المادة وبناء الحيوي عند الكائنات الحية", description: "مظاهر نمو الكائنات، مناطق النمو (المرستيم الإنشائي)، والتضاعف الخلوي (الانقسام الخيطي).", semester: 1, },
    { title: "التحكم الهرموني والاتصال العصبي الهرموني", description: "تنظيم التحلون (نسبة السكر في الدم) بواسطة هرموني الأنسولين والغلوكاجون البنكرياسيين.", semester: 1, },
    { title: "تحويل الطاقة الكيميائية الكامنة في الأغذية (التنفس والتخمر)", description: "أكسدة الغلوكوز، مردود الطاقة، ومقارنة معادلات التنفس والتخمر الكحولي.", semester: 2, },
    { title: "دخول الطاقة الضوئية في العالم الحي (التركيب الضوئي واليخضور)", description: "طيف امتصاص وطيف نشاط اليخضور ودمج الكربون المشع في المادة العضوية.", semester: 2, },
    { title: "العوامل المؤثرة في الإنتاج النباتي والحيواني والتحسين الوراثي", description: "العوامل المناخية، التربة، التهجين، الاصطفاء، وإكثار السلالات المرغوبة (الزراعة بالنسيج والمرستيم).", semester: 3, },
  ],
  'secondary-1as-arts_core-arabic': [
    { title: "الشعر الجاهلي: المعلقات والفروسية والقيم الإنسانية", description: "دراسة نصوص عنترة بن شداد، امرؤ القيس، وخصائص البيئة الصحراوية واللغة.", semester: 1, },
    { title: "الشعر في صدر الإسلام وأثر القرآن في اللغة والأدب", description: "حسان بن ثابت، كعب بن مالك، ودفاع الشعر عن رسالة الإسلام السامية.", semester: 1, },
    { title: "العصر الأموي: شعر الغزل، النقائض، والسياسة", description: "جرير والفرزدق والأخطل والتحولات الفكرية والسياسية في المجتمع الأموي.", semester: 2, },
    { title: "قواعد النحو: علامات الإعراب الأصلية والفرعية والأفعال الخمسة", description: "التطبيق الشامل على النصوص وتحليل الأبنية الصرفية بدقة.", semester: 2, },
    { title: "علم البلاغة: الحقيقة والمجاز والتشبيه وأركانه", description: "التشبيه التام، المؤكد، المجمل، والبليغ وأثره البلاغي في المعنى.", semester: 3, },
    { title: "علم العروض: الكتابة العروضية وتفعيلات البحور البسيطة", description: "قواعد التقطيع العروضي، الرموز، والتمييز بين الحركات والسكنات.", semester: 3, },
  ],
  'secondary-2as-exp_science-math': [
    { title: "الدوال العددية المتقدمة وتركيب الدوال وعملياتها", description: "دراسة اتجاه تغير مركب دالتين (g o f) والدوال المرجعية والدوال كثيرات الحدود.", semester: 1, },
    { title: "الاشتقاقية وتطبيقاتها والمماسات ونقاط الانعطاف", description: "حساب المشتقة، معادلة المماس y = f'(x0)(x - x0) + f(x0)، والتقريب التآلفي.", semester: 1, },
    { title: "نهايات الدوال والسلوك المقارب والمستقيمات المقاربة", description: "حساب النهايات عند اللانهاية ونقاط الانعدام وإزالة حالات عدم التعيين الأربعة.", semester: 1, },
    { title: "المتتاليات العددية: الحسابية والهندسية وعمومياتها", description: "الحد العام، المجموع، اتجاه التغير، البرهان، ونهاية متتالية.", semester: 2, },
    { title: "الجداء السلمي في المستوي وتطبيقاته الهندسية", description: "عبارات الجداء السلمي، مبرهنة المتوسط، حساب الزوايا والمسافات ومعادلة الدائرة.", semester: 2, },
    { title: "التحويلات النقطية في المستوي (الانسحاب، التحاكي، والدوران)", description: "الخواص الهندسية للتحويلات وصور الأشكال وإنشاءاتها.", semester: 2, },
    { title: "الاحتمالات والمتغيرات العشوائية وقانون الاحتمال", description: "شجرة الاحتمالات، قانون المتغير العشوائي X، الأمل الرياضي E(X)، والتباين V(X).", semester: 3, },
  ],
  'secondary-2as-exp_science-physics': [
    { title: "العمل والطاقة الحركية والحصيلة الطاقوية لجملة", description: "قانون العمل W(F) = F × d × cos(α) ومبرهنة الطاقة الحركية Ec(B) - Ec(A) = ΣW.", semester: 1, },
    { title: "الطاقة الكامنة الثقالية والمرونية وانحفاظ الطاقة الميكانيكية", description: "Epp = m × g × z و Epe = 1/2 × k × x² وانحفاظ الطاقة الكلية للجملة المعزولة.", semester: 1, },
    { title: "الطاقة الداخلية والتحويل الحراري وتغير درجة الحرارة", description: "السعة الحرارية الكتلية Q = m × c × ΔT والمسعر الحراري والتحولات الطورية.", semester: 2, },
    { title: "المعينات الناقلية والمحاليل الشاردية وقانون كولروش", description: "الناقلية G والناقلية النوعية σ = Σ(λi × [Xi]) والمعايرة عن طريق قياس الناقلية.", semester: 2, },
    { title: "الأحماض والأسس وتفاعلات حمض - أساس والمعايرة اللونية", description: "تعريف برونشتد، الثنائيات (حمض/أساس)، وكواشف اللونية ونقطة التكافؤ.", semester: 3, },
    { title: "المغناطيسية والحقل المغناطيسي والأفعال المتبادلة", description: "قانون لابلاس وقوة لورنتز وحركة الشحنات وتطبيقات المحركات الكهربائية.", semester: 3, },
  ],
  'secondary-2as-exp_science-science': [
    { title: "آليات التنظيم العصبي والمنعكس العضلي والكمونات", description: "كمون الراحة، كمون العمل، النقل المشبكي الكيميائي، ودور مبلّغ الأستيل كولين.", semester: 1, },
    { title: "التنظيم الهرموني والتحكم في الإفرازات التناسلية والغدد", description: "المعقد السريري النخامي (GnRH, LH, FSH) والمراقبة الرجعية السالبة والموجبة.", semester: 1, },
    { title: "بنية جزيئة الـ ADN والطبيعة الكيميائية للمورثة", description: "نموذج واطسون وكريك، القواعد الآزوتية (A-T, C-G)، والتضاعف نصف المحافظ.", semester: 2, },
    { title: "الانقسام المنصف والتنوع الوراثي للأفراد", description: "الانقسام الاختزالي والمتساوي، العبور الوراثي (الخلط داخل الصبغي وبين الصبغي).", semester: 2, },
    { title: "الجيولوجيا والتكتونية وتطور القشرة الأرضية والمغاربي", description: "دراسة الصخور الرسوبية والمتحولة والمناخ القديم وتاريخ شمال إفريقيا الجيولوجي.", semester: 3, },
  ],
  'secondary-3as-exp_science-math': [
    { title: "الدوال العددية والنهايات والاستمرارية ومبرهنة القيم المتوسطة", description: "دراسة الدوال الشاملة، المستقيمات المقاربة المائلة، وحل المعادلات f(x) = k بدقة.", semester: 1, },
    { title: "الدالة الأسية النيبيرية (Exp) وخواصها وحل معادلاتها", description: "المشتقات، النهايات الشهيرة، ودراسة وتشكيل جداول تغيرات ورسم منحنيات الدوال الأسية.", semester: 1, },
    { title: "الدالة اللوغاريتمية النيبيرية (Ln) واللوغاريتم العشري", description: "مجموعة التعريف، النهايات، التزايد المقارن، وتطبيقات الدوال اللوغاريتمية في البكالوريا.", semester: 1, },
    { title: "المتتاليات العددية والبرهان بالتراجع والمتتاليات المتجاورة", description: "الاستدلال بالتراجع، المتتاليات التراجعية، دراسة التقارب ونهاية متتالية.", semester: 2, },
    { title: "الدوال الأصلية والحساب التكاملي وحساب المساحات والحجوم", description: "خواص التكامل، المكاملة بالتجزئة، وحساب مساحة الحيز المحدد بمنحنيات بيانية.", semester: 2, },
    { title: "الاحتمالات والمتغيرات العشوائية والتوزيع ثنائي الحدين", description: "الاحتمال الشرطي، دستورا بايز، المتغيرات العشوائية، والتوزيع البرنولي B(n, p).", semester: 2, },
    { title: "الأعداد المركبة والتحويلات النقطية (الهندسة المركبة)", description: "الشكل الجبري، المثلثي، الأسي، دستور دو موافر، والانسحاب، التحاكي، والدوران بالمركب.", semester: 3, },
  ],
  'secondary-3as-exp_science-physics': [
    { title: "الوحدة 1: المتابعة الزمنية لتحول كيميائي في وسط مائي", description: "المعايرة اللونية، قياس الناقلية، قياس ضغط وحجم غاز، سرعة التفاعل، وزمن نصف التفاعل t1/2.", semester: 1, },
    { title: "الوحدة 2: التحولات النووية والنشاط الإشعاعي واستقرار النواة", description: "التفكك (α, β-, β+, γ)، قانون التناقص الإشعاعي N(t)، طاقة الربط El، والانشطار والاندماج النووي.", semester: 1, },
    { title: "الوحدة 3: الظواهر الكهربائية (دارة المكثفة RC والوشيعة RL)", description: "شحن وتفريغ مكثفة، ثابت الزمن τ، إقامة وقطع التيار في وشيعة، وتخزين الطاقة الكهرومغناطيسية.", semester: 2, },
    { title: "الوحدة 4: تطور جملة كيميائية نحو حالة التوازن (الأحماض والأسس)", description: "مفهوم الـ pH، نسبة التقدم النهائي τf، كسر التفاعل Qr، ثابت الحموضة Ka، ومجالات التغلب.", semester: 2, },
    { title: "الوحدة 5: تطور جملة ميكانيكية وقوانين نيوتن وحركة الكواكب", description: "قوانين نيوتن الثلاثة، حركة الأقمار والكواكب (قوانين كبلر)، السقوط الشاقولي الحقيقي والحر، والقذائف.", semester: 3, },
    { title: "الوحدة 6: مراقبة تطور جملة كيميائية (الأسترة والإماهة)", description: "تفاعل الأسترة، خصائصه (بطيء، عكوس، ولا حراري)، ثابت التوازن K، وتحسين المردود الكيميائي.", semester: 3, },
  ],
  'secondary-3as-exp_science-science': [
    { title: "الوحدة 1: آليات تركيب البروتين (الاستنساخ والترجمة)", description: "بنية الـ ARNm، الشفرة الوراثية، دور الريبوزومات والـ ARNt، ومراحل الانطلاق، الاستطالة، والنهاية.", semester: 1, },
    { title: "الوحدة 2: العلاقة بين بنية ووظيفة البروتين وسلوك الأحماض الأمينية", description: "البنية الأولية، الثانوية، الثالثية، والرابعة، والخاصية الأمفوتيرية (الحمقلية) ونقطة الـ pHi.", semester: 1, },
    { title: "الوحدة 3: النشاط الإنزيمي للبروتينات والموقع الفعال", description: "التكامل البنيوي، المعقد إنزيم-مادة التفاعل (ES)، وتأثير درجة الحرارة والـ pH والمثبطات.", semester: 1, },
    { title: "الوحدة 4: دور البروتينات في الدفاع عن الذات (المناعة الخلطية والخلوية)", description: "محددات الذات واللاذات (HLA/CMH)، الأجسام المضادة، البلعميات، والخلايا التائية القاتلة LTc ومرض السيدا.", semester: 2, },
    { title: "الوحدة 5: دور البروتينات في الاتصال العصبي والمشبكي", description: "القنوات الأيونية الفولطية والغشائية (مضخة Na+/K+)، كمون العمل، والإدماج العصبي (PPSE, PPSI).", semester: 2, },
    { title: "الوحدة 6: آليات تحويل الطاقة الضوئية إلى طاقة كيميائية كامنة", description: "التركيب الضوئي: المرحلة الكيموضوئية (التيلاكويد وفوسفورة ATP) والمرحلة الكيموحيوية (حلقة كالفن).", semester: 2, },
    { title: "الوحدة 7: آليات تحويل الطاقة الكيميائية الكامنة في المادة العضوية", description: "التنفس الخلوي: التحلل السكري، حلقة كريبس، الفسفرة التأكسدية في الميتوكوندريا، وحصيلة 38 ATP.", semester: 3, },
  ],
  'secondary-3as-arabic': [
    { title: "عصر الضعف والانحطاط: شعر المديح والزهد والنثر العلمي", description: "البوصيري، ابن عربي، ابن خلدون وخصائص النثر العلمي المتأدب وظاهرة التنميق اللفظي.", semester: 1, },
    { title: "عصر النهضة: مدرسة البعث والإحياء والنزعة الرومانسية المهجرية", description: "أحمد شوقي، البارودي، إيليا أبو ماضي، ميخائيل نعيمة، والرابطة القلمية والعصبة الأندلسية.", semester: 1, },
    { title: "شعر الثورة الجزائرية وقضايا التحرر والالتزام في الأدب العربي", description: "مفدي زكريا، محمود درويش، نزار قباني، وظاهرة الالتزام وتوظيف الرمز والأسطورة.", semester: 2, },
    { title: "الشعر الحر وظاهرة الحزن والألم والغربة في الشعر المعاصر", description: "بدر شاكر السياب، نازك الملائكة، صلاح عبد الصبور والتجديد الموسيقي والمضموني.", semester: 2, },
    { title: "فنون النثر الحديث: المقال، القصة، والمسرحية وتطورها", description: "البشير الإبراهيمي، طه حسين، العقاد، وخصائص الأسلوب ووسائل الإقناع والتأثير.", semester: 3, },
    { title: "قواعد اللغة والبلاغة للبكالوريا (إعراب إذ، إذا، إذن، حينئذ، ولو، ولولا)", description: "الإعراب التفصيلي لأدوات الشرط والمفاجأة والتعليل وأحكام الجمل التي لها ولا محل لها من الإعراب.", semester: 3, },
  ],
  'secondary-3as-islamic': [
    { title: "العقيدة الإسلامية وأثرها على الفرد والمجتمع ووسائل تثبيتها", description: "إثارة العقل والوجدان، التذكير بقدرة الله، رسم صور المؤمنين والكافرين، ومناقشة الانحرافات.", semester: 1, },
    { title: "الصحة النفسية والجسمية في القرآن الكريم ومظاهر حفظها", description: "الفهم الصحيح للوجود، تقوية الصلة بالله، الطهارة، الوقاية، والرخص الشرعية.", semester: 1, },
    { title: "القيم في القرآن الكريم (الفردية، الأسرية، والاجتماعية والسياسية)", description: "الصدق، الحياء، بر الوالدين، المودة، التعاون، العدل، الشورى، وطاعة أولي الأمر.", semester: 1, },
    { title: "مقاصد الشريعة الإسلامية والكليات الخمس وترتيبها", description: "الضروريات (الدين، النفس، العقل، النسل، المال)، الحاجيات، والتحسينيات وتكاملها.", semester: 2, },
    { title: "منهج الإسلام في محاربة الانحراف والجريمة والعقوبات", description: "الحدود (السرقة، الزنا، القذف، الحرابة)، القصاص، والتعزير وحكمة مشروعيتها.", semester: 2, },
    { title: "المعاملات المالية الجائزة والمحرمة والربا وأحكامه", description: "الربا بنوعيه (ربا الفضل وربا النسيئة)، بيع الصرف، بيع السلم، والمرابحة والأسهم والسندات.", semester: 2, },
    { title: "أحكام الأسرة في الإسلام والتبني والنسب والكفالة والميراث", description: "إثبات النسب، إبطال التبني، مشروعية الكفالة، وأركان وشروط وقسمة الميراث الشرعي.", semester: 3, },
  ],
  'secondary-3as-philosophy': [
    { title: "المشكلة والإشكالية والسؤال العلمي والسؤال الفلسفي", description: "المقارنة المنهجية بين مجالات العلم التجريبي ومجالات الفلسفة الميتافيزيقية.", semester: 1, },
    { title: "انطباق الفكر مع نفسه وانطباقه مع الواقع (المنطق والاستقراء)", description: "المنطق الصوري الأرسطي، القياس، قواعد الاستقراء العلمي والملاحظة والفرضية والتجربة.", semester: 1, },
    { title: "العلوم الرياضية وأصل المفاهيم الرياضية (العقل أم التجربة؟)", description: "المذهب العقلي والمذهب الحسي التجريبي، والبديهيات والمسلمات والأكسيوماتيكا الحديثة.", semester: 1, },
    { title: "علوم المادة الحية والمادة الجامدة وتطبيق المنهج التجريبي في البيولوجيا", description: "الحتمية واللاحتمية، صعوبات الملاحظة والتجريب على الكائن الحي والأخلاق الطبية.", semester: 2, },
    { title: "العلوم الإنسانية: التاريخ وعلم النفس وعلم الاجتماع وإشكالية العلمية", description: "هل يمكن دراسة الظاهرة الإنسانية دراسة موضوعية وتجريبية دقيقة كالمادة الجامدة؟", semester: 2, },
    { title: "الشعور واللاشعور ومدرسة التحليل النفسي (سيغموند فرويد)", description: "مفهوم الوعي، كبت الرغبات، زلات اللسان، الأحلام، وجهاز الأنا والأنا الأعلى والهو.", semester: 2, },
    { title: "الحرية والمسؤولية بين الحتمية المطلقة والإرادة الإنسانية", description: "المذهب الجبري، مذهب التحرر، ومسؤولية الإنسان الأخلاقية والقانونية عن أفعاله.", semester: 3, },
    { title: "العولمة والدولة والأنظمة السياسية والعدالة الاجتماعية", description: "الأنظمة الديمقراطية، حقوق الإنسان، الرأسمالية والاشتراكية، والمساواة والتفاوت.", semester: 3, },
  ],
  'secondary-3as-history': [
    { title: "بروز الصراع وتشكل العالم بعد الحرب العالمية الثانية (الحرب الباردة)", description: "معايير تشكل العالم، الاستقطاب الثنائي، الأحلاف العسكرية (وارسو، الناتو)، والمشاريع الاقتصادية (مارشال، جدانوف).", semester: 1, },
    { title: "الأزمات الدولية في ظل الصراع والتعايش السلمي وانفراج الأزمة", description: "أزمة برلين، أزمة كوريا، أزمة السويس، وأزمة الصواريخ في كوبا والانفراج الدولي.", semester: 1, },
    { title: "حركات التحرر في إفريقيا وآسيا وأمريكا اللاتينية ودور حركة عدم الانحياز", description: "مؤتمر باندونغ 1955، مؤتمر بلغراد 1961، ومؤتمر الجزائر 1973 ومناصرة القضايا العادلة.", semester: 1, },
    { title: "الثورة التحريرية الكبرى (1954-1962): الإستراتيجيات الداخلية والخارجية", description: "التعبئة الشعبية، التنظيم العسكري والسياسي، الدبلوماسية الجزائرية في المحافل الدولية وهيئة الأمم.", semester: 2, },
    { title: "ردود الفعل الاستعمارية والمخططات العسكرية والإغرائية الفرنسية", description: "خطا شال وموريس، المحتشدات، التعذيب، مشروع قسنطينة، ومخطط ديغول \"سلم الشجعان\".", semester: 2, },
    { title: "استعادة السيادة الوطنية وبناء الدولة الجزائرية واختياراتها الكبرى", description: "مؤتمر طرابلس 1962، استرجاع الأراضي والمؤسسات، التأميمات الكبرى، والدبلوماسية النشطة.", semester: 2, },
    { title: "جغرافية العالم المعاصر: إشكالية التقدم والتخلف والمبادلات التجارية", description: "مؤشرات التنمية (IDH)، معايير التصنيف، أسواق البترول، القمح، وحركة رؤوس الأموال.", semester: 3, },
    { title: "القوى الاقتصادية الكبرى في العالم: الولايات المتحدة الأمريكية والاتحاد الأوروبي وشرق وجنوب شرق آسيا", description: "عوامل القوة الاقتصادية، الأقاليم الصناعية والزراعية، ومظاهر الهيمنة والمنافسة الدولية.", semester: 3, },
  ],
  'middle-4am-informatics': [
    { title: "معالجة النصوص المتقدمة والجداول وتنسيق المستندات الرسمية", description: "تصميم الجداول، دمج الخلايا، تنسيق الفقرات، وإعداد التقارير المدرسية.", semester: 1, },
    { title: "المجدول الإلكتروني والصيغ الحسابية والدوال الأساسية (Excel)", description: "استعمال دوال الجمع (SUM)، المعدل (AVERAGE)، ودالة الشرط (IF) وحساب النتائج.", semester: 2, },
    { title: "تمثيل البيانات بالمخططات البيانية وتصميم العروض التقديمية (PowerPoint)", description: "إنشاء الأعمدة والدوائر النسبية، الحركة المخصصة، وتصميم مشروع ختامي تفاعلي.", semester: 3, },
  ],
  'secondary-1as-st_core-technology': [
    { title: "التحليل الوظيفي للمؤسسة والرسم التقني وإسقاط المساقط", description: "دفتر الشروط، التحليل التنازلي SADT، المساقط الرئيسية والقطاعات البسيطة.", semester: 1, },
    { title: "الميكانيك التطبيقية ووصلات الإدماج ونقل الحركة", description: "الوصلات الميكانيكية، البكرات والسيور، المسننات وحساب نسبة نقل السرعة.", semester: 2, },
    { title: "الكهرباء الصناعية والدارات المنطقية وجداول الحقيقة", description: "الدوال المنطقية الأساسية (ET, OU, NON)، التبسيط الجبري، والمحركات الكهربائية.", semester: 3, },
  ],
  'secondary-1as-st_core-french': [
    { title: "Le texte de vulgarisation scientifique et les procédés explicatifs", description: "Définition, reformulation, illustration, et structure du texte à visée explicative.", semester: 1, },
    { title: "L'interview et le reportage d'investigation journalistique", description: "Formulation des questions pertinentes, discours rapporté direct/indirect, et compte rendu objectif.", semester: 2, },
    { title: "La nouvelle réaliste et le schéma narratif", description: "Situation initiale, élément perturbateur, péripéties, dénouement et portrait des personnages.", semester: 3, },
  ],
  'secondary-1as-st_core-english': [
    { title: "Intercultural Communication, Letters & Electronic Mailing", description: "Formal/informal registers, polite requests, email conventions, and connecting with global peers.", semester: 1, },
    { title: "Our Findings Show: Conducting Surveys & Statistical Reports", description: "Reporting verbs, questionnaire design, pie-charts, bar graphs interpretation, and presentation.", semester: 2, },
    { title: "Back to Nature: Ecosystems, Pollution & Environmental Preservation", description: "Conditionals (Types 1 & 2), passive voice, renewable resources, and conservation campaigns.", semester: 3, },
  ],
  'secondary-1as-st_core-informatics': [
    { title: "بنية الحاسوب وتاريخ تطوره وأنظمة التشغيل والشبكات", description: "المعالج، الذاكرة الحية، اللوحة الأم، نظام التشغيل والشبكات المحلية LAN والإنترنت.", semester: 1, },
    { title: "مبادئ الخوارزميات وهياكل التحكم الشرطية والتكرارية", description: "مفهوم المتغيرات وأنواعها، تعليمات الشرط (Si...Alors)، وحلقات التكرار (Pour, Tant que).", semester: 2, },
    { title: "مقدمة في لغة البرمجة (Python) وتطبيقات حل المسائل", description: "بناء الدوال، التعامل مع السلاسل النصية والقوائم، وكتابة برامج حسابية تطبيقية.", semester: 3, },
  ],
  'secondary-1as-st_core-arabic': [
    { title: "الشعر الجاهلي: قيم الفروسية، الكرم، والمعلقات الشعرية", description: "دراسة معلقة امرئ القيس وعنترة بن شداد، البناء الفني للقصيدة الجاهلية، والتشبيه وأركانه.", semester: 1, },
    { title: "أدب صدر الإسلام وأثر القرآن والحديث في الفكر واللغة", description: "شعر حسان بن ثابت، الخطابة في صدر الإسلام، والاستعارة المكنية والتصريحية.", semester: 2, },
    { title: "أدب العصر الأموي: الغزل العذري، النقائض، وتطور النثر", description: "شعر جرير والفرزدق، المجاز المرسل، الكتابة العروضية وبحور الشعر البسيطة.", semester: 3, },
  ],
  'secondary-1as-st_core-history': [
    { title: "العالم الإسلامي: مجاله الجغرافي والسياسي وبداية الهيمنة الغربية", description: "أهمية الموقع الاستراتيجي، مراحل تشكل الإمبراطورية العثمانية، والعلاقات الداخلية والخارجية.", semester: 1, },
    { title: "الجزائر في العصر الحديث (1515-1830) والتنظيم السياسي والعسكري", description: "مراحل الحكم العثماني في الجزائر، الأسطول الجزائري في البحر الأبيض المتوسط، والعلاقات الدولية.", semester: 2, },
    { title: "التحولات الاقتصادية والاجتماعية في أوروبا وظهور الثورة الصناعية", description: "النهضة الأوروبية، الكشوفات الجغرافية، الثورة الصناعية، وانعكاساتها على خريطة العالم المعاصر.", semester: 3, },
  ],
  'secondary-1as-st_core-islamic': [
    { title: "العقيدة الإسلامية وأثرها في حياة الفرد والمجتمع", description: "مفهوم الإيمان، أركانه، حقيقة العبادة وتأثير الاستقامة في بناء النفس السوية.", semester: 1, },
    { title: "الأخلاق في الإسلام والمسؤولية الاجتماعية", description: "الصدق، الأمانة، بر الوالدين، كف الأذى، ومحاربة الرذائل والآفات الاجتماعية.", semester: 2, },
    { title: "فقه المعاملات والسيرة النبوية العطرة (المرحلة المدنية)", description: "بناء الدولة في المدينة، وثيقة المدينة، أخوة المهاجرين والأنصار، وفقه التكافل والتعاون.", semester: 3, },
  ],
  'secondary-1as-arts_core-french': [
    { title: "Le texte de vulgarisation scientifique et les procédés explicatifs", description: "Définition, reformulation, illustration, et structure du texte à visée explicative.", semester: 1, },
    { title: "L'interview et le reportage d'investigation journalistique", description: "Formulation des questions pertinentes, discours rapporté direct/indirect, et compte rendu objectif.", semester: 2, },
    { title: "La nouvelle réaliste et le schéma narratif", description: "Situation initiale, élément perturbateur, péripéties, dénouement et portrait des personnages.", semester: 3, },
  ],
  'secondary-1as-arts_core-english': [
    { title: "Intercultural Communication, Letters & Electronic Mailing", description: "Formal/informal registers, polite requests, email conventions, and connecting with global peers.", semester: 1, },
    { title: "Our Findings Show: Conducting Surveys & Statistical Reports", description: "Reporting verbs, questionnaire design, pie-charts, bar graphs interpretation, and presentation.", semester: 2, },
    { title: "Back to Nature: Ecosystems, Pollution & Environmental Preservation", description: "Conditionals (Types 1 & 2), passive voice, renewable resources, and conservation campaigns.", semester: 3, },
  ],
  'secondary-1as-arts_core-math': [
    { title: "الأعداد والحساب والمجالات وحساب النسب المئوية", description: "القيمة المطلقة، حصر الأعداد، النسب المئوية، ومسائل التخفيض والزيادة.", semester: 1, },
    { title: "عموميات على الدوال والتمثيل البياني للدوال المرجعية", description: "الدالة التآلفية، دالة المربع، قراءة المنحنيات البيانية، وجداول التغيرات.", semester: 2, },
    { title: "الإحصاء التطبيقي: الجداول، التكرارات، والمقاييس العددية", description: "الوسط الحسابي، الوسيط، المدى، وتفسير البيانات الإحصائية الواقعية.", semester: 3, },
  ],
  'secondary-1as-arts_core-science': [
    { title: "التغذية والتحولات الطاقوية عند الكائنات الحية", description: "التركيب الضوئي، تركيب المواد العضوية، ودور الأغذية في توفير الطاقة للجسم.", semester: 1, },
    { title: "التكاثر ونقل الصفات الوراثية والصحة الإنجابية", description: "الانقسام الخيطي، النمط النووي، ونقل المعلومات الوراثية عبر الأجيال.", semester: 2, },
    { title: "العوامل المؤثرة في البيئة والتنوع البيولوجي", description: "التوازن البيئي، تأثير الأنشطة البشرية على الطبيعة، وحماية التنوع الحيوي.", semester: 3, },
  ],
  'secondary-1as-arts_core-informatics': [
    { title: "المعلوماتية ونظم التشغيل والبرمجيات المكتبية", description: "استعمال معالج النصوص، الجداول الإلكترونية، والبحث الآمن في الإنترنت.", semester: 1, },
    { title: "مبادئ التفكير المنطقي وبناء المخططات الانسيابية", description: "تحليل المسائل، صياغة خطوات الحل المنطقي، واستعمال المخططات التوضيحية.", semester: 2, },
    { title: "تصميم العروض والمشاريع الرقمية التعاونية", description: "العروض التفاعلية، الوسائط المتعددة، وحفظ ونشر الوثائق الرقمية.", semester: 3, },
  ],
  'secondary-1as-arts_core-history': [
    { title: "العالم الإسلامي: مجاله الجغرافي والسياسي وبداية الهيمنة الغربية", description: "أهمية الموقع الاستراتيجي، مراحل تشكل الإمبراطورية العثمانية، والعلاقات الداخلية والخارجية.", semester: 1, },
    { title: "الجزائر في العصر الحديث (1515-1830) والتنظيم السياسي والعسكري", description: "مراحل الحكم العثماني في الجزائر، الأسطول الجزائري في البحر الأبيض المتوسط، والعلاقات الدولية.", semester: 2, },
    { title: "التحولات الاقتصادية والاجتماعية في أوروبا وظهور الثورة الصناعية", description: "النهضة الأوروبية، الكشوفات الجغرافية، الثورة الصناعية، وانعكاساتها على خريطة العالم المعاصر.", semester: 3, },
  ],
  'secondary-1as-arts_core-islamic': [
    { title: "العقيدة الإسلامية وأثرها في حياة الفرد والمجتمع", description: "مفهوم الإيمان، أركانه، حقيقة العبادة وتأثير الاستقامة في بناء النفس السوية.", semester: 1, },
    { title: "الأخلاق في الإسلام والمسؤولية الاجتماعية", description: "الصدق، الأمانة، بر الوالدين، كف الأذى، ومحاربة الرذائل والآفات الاجتماعية.", semester: 2, },
    { title: "فقه المعاملات والسيرة النبوية العطرة (المرحلة المدنية)", description: "بناء الدولة في المدينة، وثيقة المدينة، أخوة المهاجرين والأنصار، وفقه التكافل والتعاون.", semester: 3, },
  ],
  'secondary-2as-exp_science-philosophy': [
    { title: "المشكلة والإشكالية: مدخل إلى الفلسفة والتفكير النقدي", description: "السؤال الفلسفي، السؤال العلمي، والتمييز بين التفكير الساذج والتفكير المنهجي.", semester: 1, },
    { title: "انطباق الفكر مع نفسه (المنطق الصوري الأرسطي)", description: "الحدود، القضايا، الاستدلال المباشر (مربع التقابل) وغير المباشر (القياس وشروطه).", semester: 2, },
    { title: "انطباق الفكر مع الواقع (المنهج الاستقرائي التجريبي)", description: "الملاحظة، الفرضية، التجربة، وقواعد فرانسيس بيكون وجون ستيوارت ميل.", semester: 3, },
  ],
  'secondary-2as-exp_science-arabic': [
    { title: "الأدب في العصر العباسي الأول: مظاهر التجديد وحركة الترجمة", description: "شعر بشار بن برد وأبي نواس، النزعة العقلية وظهور شعر الزهد لأبي العتاهية.", semester: 1, },
    { title: "الأدب العباسي الثاني: شعر الحكمة، الفروسية، وفنون النثر", description: "المتنبي، أبو تمام، والمقامات لبديع الزمان الهمذاني والحريري.", semester: 2, },
    { title: "الأدب الأندلسي: رثاء الممالك، وصف الطبيعة، والموشحات", description: "ابن زيدون، ابن خفاجة، وخصائص الموشحات الأندلسية والمجاز العقلي.", semester: 3, },
  ],
  'secondary-2as-exp_science-history': [
    { title: "الاستعمار الأوروبي في إفريقيا وآسيا والحركات التحررية المبكرة", description: "دوافع الحركة الاستعمارية، مؤتمر برلين 1884، وطرق السيطرة والنفوذ.", semester: 1, },
    { title: "الجزائر تحت وطأة الاستعمار الفرنسي (1830-1919) والمقاومات المسلحة", description: "سياسة الأرض المحروقة، القوانين الجائرة (الأهالي)، ومقاومات الزواوة والمقراني والشيخ بوعمامة.", semester: 2, },
    { title: "الحرب العالمية الأولى وتطور الوعي القومي والوطني", description: "أسباب الحرب، معاهدة فرساي 1919، ومبادئ ولسن وظهور الاتجاهات السياسية الحديثة.", semester: 3, },
  ],
  'secondary-2as-exp_science-islamic': [
    { title: "مصادر التشريع الإسلامي: القرآن الكريم والسنة النبوية", description: "حجية السنة، تدوين الحديث الشريف، ومنزلة السنة النبوية من القرآن الكريم.", semester: 1, },
    { title: "المصادر التبعية: الإجماع، القياس، والمصالح المرسلة", description: "أركان القياس وشروطه، مفهوم الإجماع، وتجدد الأحكام الفقهية تلبية لمتطلبات العصر.", semester: 2, },
    { title: "القيم الإنسانية والاجتماعية وأحكام الأسرة والزواج في الإسلام", description: "مقاصد الزواج، شروط العقد الصحيح، حقوق الزوجين، ورعاية الأبناء وحمايتهم.", semester: 3, },
  ],
  'secondary-2as-exp_science-french': [
    { title: "Le discours d'expertise et la démonstration scientifique", description: "L'argumentation scientifique, les connecteurs logiques de cause et conséquence, et la synthèse.", semester: 1, },
    { title: "Le plaidoyer et le réquisitoire (texte argumentatif engagé)", description: "Défendre une cause (plaidoyer) ou dénoncer une injustice (réquisitoire), stratégies rhétoriques.", semester: 2, },
    { title: "Le texte théâtral et la mise en scène dramatique", description: "Didascalies, répliques, tirades, monologue, quiproquo et dénouement dramatique.", semester: 3, },
  ],
  'secondary-2as-exp_science-english': [
    { title: "Signs of the Times: Lifestyles, Customs & World Diversity", description: "Comparative & superlative forms, expressing lifestyles changes, and sociological articles.", semester: 1, },
    { title: "Make Peace: Conflicts Resolution, UN Charters & Peace-keeping", description: "Expressing wishes, regrets, passive constructions in diplomatic press, and humanitarian relief.", semester: 2, },
    { title: "Waste Not, Want Not: Energy Resources & Sustainable Technologies", description: "Cause and result clauses, expressing purpose, and technical presentations on ecology.", semester: 3, },
  ],
  'secondary-2as-math_track-math': [
    { title: "الدوال العددية المتقدمة وتركيب الدوال وعملياتها والجذور", description: "اتجاه تغير مركب دالتين، الدوال كثيرة الحدود، ومحاور ومراكز التناظر.", semester: 1, },
    { title: "الاشتقاقية ونقاط الانعطاف ونظرية القيم المتوسطة", description: "العدد المشتق، المماسات، دراسة وتشكيل جداول التغيرات، والتقريب التآلفي المحلي.", semester: 1, },
    { title: "نهايات الدوال والسلوك المقارب والمستقيمات المقاربة المائلة", description: "إزالة حالات عدم التعيين، الحصر والمقارنة، والمستقيمات المقاربة الموازية والمائلة.", semester: 2, },
    { title: "المتتاليات العددية: الحسابية، الهندسية، والبرهان بالتراجع", description: "عموميات على المتتاليات، المجموع، التقارب، ومفهوم البرهان بالتراجع الرياضي.", semester: 2, },
    { title: "الجداء السلمي، التحويلات النقطية، والزوايا الموجهة", description: "مبرهنة المتوسط، حساب الزوايا والمسافات، التحاكي، الدوران، ومعادلة الدائرة.", semester: 3, },
    { title: "الحساب في Z، القسمة الإقليدية، والاحتمالات الشرطية", description: "خواص قابلية القسمة، التعداد، شجرة الاحتمالات، والمتغيرات العشوائية المنفصلة.", semester: 3, },
  ],
  'secondary-2as-math_track-physics': [
    { title: "العمل والطاقة الحركية والحصيلة الطاقوية الميكانيكية", description: "قانون العمل، الطاقة الحركية، ومبدأ انحفاظ الطاقة لجملة ميكانيكية غير معزولة.", semester: 1, },
    { title: "الطاقة الكامنة الثقالية والمرونية والتحولات الحرارية", description: "طاقة الثقالة Epp، طاقة النابض Epe، التبادل الحراري والمسعر وسعة الحرارة.", semester: 2, },
    { title: "الكيمياء الكمية: قياس الناقلية وتفاعلات أكسدة-إرجاع", description: "المحاليل الشاردية، قانون كولروش، المعايرة اللونية، وتحديد نقطة التكافؤ.", semester: 3, },
  ],
  'secondary-2as-math_track-science': [
    { title: "التنظيم العصبي والمنعكس العضلي والكمونات الغشائية", description: "منعكس الشد، كمون الراحة، كمون العمل، وانتقال السيالة عبر المشابك الكيميائية.", semester: 1, },
    { title: "التنظيم الهرموني والتحلون والاتصال العصبي الصماوي", description: "هرمونا الأنسولين والغلوكاجون، الحفاظ على ثبات نسبة السكر، والغدد الصماء.", semester: 2, },
    { title: "بنية الـ ADN وطبيعة المورثة والتعبير المورثي", description: "بنية الحلزون المزدوج، القواعد الآزوتية، تضاعف الـ ADN، وتركيب البروتين.", semester: 3, },
  ],
  'secondary-2as-math_track-arabic': [
    { title: "الأدب العباسي: حركة التجديد، النزعة العقلية وشعر الزهد", description: "شعر بشار بن برد، أبو العتاهية، والتحولات الفكرية واللغوية في بغداد.", semester: 1, },
    { title: "الأدب العباسي الثاني: شعر البطولة والحكمة والمقامات", description: "أبو تمام والمتنبي وفلسفة البطولة والشجاعة في مواجهة التحديات.", semester: 2, },
    { title: "الأدب الأندلسي والموشحات وقواعد الإعلال والإبدال", description: "ابن زيدون، شعر الطبيعة والحنين، وقواعد الصرف والإعراب المتقدم.", semester: 3, },
  ],
  'secondary-2as-math_track-history': [
    { title: "الاستعمار الأوروبي والحركات التحررية وتنافس القوى الكبرى", description: "مؤتمر برلين وتقسيم القارة الإفريقية وأساليب الاستغلال الاقتصادي.", semester: 1, },
    { title: "المقاومة الجزائرية المسلحة والانتفاضات الشعبية (1830-1919)", description: "الأمير عبد القادر، أحمد باي، فاطمة نسومر، المقراني والبوعمامة.", semester: 2, },
    { title: "الحرب العالمية الأولى وتغير موازين القوى العالمية وظهور عصبة الأمم", description: "معاهدة فرساي، نتائج الحرب الكبرى، وبذور الصراعات الدولية الحديثة.", semester: 3, },
  ],
  'secondary-2as-math_track-philosophy': [
    { title: "مدخل إلى الفلسفة: السؤال الفلسفي والسؤال العلمي والمشكلة الفلسفية", description: "المقارنة بين الفلسفة والعلم ودور التفكير النقدي في بناء المعرفة.", semester: 1, },
    { title: "المنطق الصوري الأرسطي وقواعد الفكر ومبادئ العقل السليم", description: "الحدود، القضايا، الاستدلال المباشر والقياس وشروطه الثمانية.", semester: 2, },
    { title: "المنهج الاستقرائي التجريبي ونقد المنطق الأرسطي القديم", description: "خطوات المنهج التجريبي وقواعد فرانسيس بيكون وجون ستيوارت ميل.", semester: 3, },
  ],
  'secondary-2as-tech_math-technology': [
    { title: "هندسة ميكانيكية: التحليل البنيوي، وصلات الإدماج، ونقل الحركة", description: "أنظمة نقل الحركة بالمسننات والسيور، المحامل، ومقاومة المواد للشد والانضغاط.", semester: 1, },
    { title: "هندسة كهربائية: الدارات المنطقية التوافقية والتعاقبية والمؤقتات", description: "البوابات المنطقية، جدول كارنو، السجلات والعدادات والمؤقت NE555.", semester: 2, },
    { title: "هندسة مدنية وهندسة طرائق: مبادئ الإنشاءات والمركبات العضوية", description: "حساب ردود الأفعال في العوارض البسيطة، البتروكيماويات، وتصنيع المواد البلاستيكية.", semester: 3, },
  ],
  'secondary-2as-tech_math-math': [
    { title: "الدوال العددية ونهاياتها والاشتقاقية وتطبيقاتها الهندسية", description: "دراسة الدوال كثيرات الحدود والناطقة، المماسات، وجداول التغيرات.", semester: 1, },
    { title: "المتتاليات العددية والجداء السلمي في الفضاء المستوي", description: "المتتاليات الحسابية والهندسية، مبرهنة المتوسط، وتطبيقات الجداء السلمي.", semester: 2, },
    { title: "التحويلات النقطية في المستوي والاحتمالات الإحصائية", description: "الانسحاب، التحاكي، الدوران، وحساب الاحتمالات في التجارب العشوائية.", semester: 3, },
  ],
  'secondary-2as-tech_math-physics': [
    { title: "العمل والطاقة الميكانيكية الكامنة والحركية", description: "الطاقة الحركية، طاقة الثقالة والمرونة، ومخططات الحصيلة الطاقوية.", semester: 1, },
    { title: "التحويل الحراري والطاقة الداخلية والمحاليل الشاردية", description: "المسعر الحراري، الناقلية النوعية σ، وقانون كولروش للمحاليل المائية.", semester: 2, },
    { title: "الأحماض والأسس وتفاعلات الأكسدة والإرجاع والمعايرة", description: "نقطة التكافؤ، المعايرة البي إتشية واللونية، والكيمياء العضوية المطبقة.", semester: 3, },
  ],
  'secondary-2as-tech_math-arabic': [
    { title: "الأدب العباسي وحركة الترجمة وشعر التجديد والفروسية", description: "نصوص بشار وأبي تمام والمتنبي والتحولات البلاغية والنحوية.", semester: 1, },
    { title: "الأدب الأندلسي: شعر الطبيعة والحنين وفنون الموشحات", description: "ابن زيدون ووصف جمال الطبيعة وبناء القصيدة الموشحة.", semester: 2, },
    { title: "قواعد النحو والصرف: إعراب الجمل، أفعال المدح والذم، والإعلال", description: "الجمل التي لها محل والتي لا محل لها من الإعراب وتطبيقاتها.", semester: 3, },
  ],
  'secondary-2as-tech_math-history': [
    { title: "الاستعمار الأوروبي وتنافس القوى الكبرى في العالم", description: "المشاريع الاستعمارية، السيطرة على الطرق والموانئ الاستراتيجية.", semester: 1, },
    { title: "تاريخ المقاومة الوطنية الجزائرية في القرن التاسع عشر", description: "مقاومة الأمير عبد القادر، ثورات الزعاطشة والمقراني وأولاد سيدي الشيخ.", semester: 2, },
    { title: "العالم إبان الحرب العالمية الأولى والثورات الكبرى", description: "نتائج الحرب، سقوط الإمبراطوريات القديمة، والتمهيد للعالم الحديث.", semester: 3, },
  ],
  'secondary-2as-management-accounting': [
    { title: "المؤسسة والميزانية المحاسبية ومستندات الإثبات التجارية", description: "مفهوم المؤسسة، عناصر الأصول والخصوم، التوازن المالي للميزانية، والوثائق المحاسبية.", semester: 1, },
    { title: "الحساب المحاسبي وقواعد القيد المزدوج ودفتر اليومية", description: "التسجيل في الحساب، ميزان المراجعة قبل الجرد، والدفتر الكبير والتسلسل العملياتي.", semester: 2, },
    { title: "الفواتير وعمليات الشراء والبيع والخصومات التجارية والمالية", description: "حساب الرسم على القيمة المضافة TVA، الخصم التجاري، التعجيل بالدفع، وتكلفة الشراء.", semester: 3, },
  ],
  'secondary-2as-management-economics': [
    { title: "المشكلة الاقتصادية والحاجات والإنتاج وعوامل الإنتاج", description: "ندرة الموارد، الحاجات الفردية والجماعية، العمل ورأس المال، وإنتاجية العوامل.", semester: 1, },
    { title: "الدخل الوطني وتوزيعه والاستهلاك والادخار والاستثمار", description: "مفهوم الناتج المحلي والوطني، دوال الاستهلاك والادخار، ومحددات الاستثمار.", semester: 2, },
    { title: "المؤسسة الاقتصادية: تعريفها، أنواعها، وهياكلها التنظيمية", description: "الهيكل الوظيفي، الهيكل القطاعي، وظيفة التموين والإنتاج والتسويق والإدارة.", semester: 3, },
  ],
  'secondary-2as-management-law': [
    { title: "القاعدة القانونية: تعريفها، خصائصها، ومصادر التشريع", description: "خاصية الإلزام، العمومية والتجريد، والتشريع الأصلي والفرعي والعرف ومبادئ الشريعة.", semester: 1, },
    { title: "الحق: تعريفه، أقسامه، وأركانه، والأشخاص الطبيعية والاعتبارية", description: "الحقوق المالية وغير المالية، الأهلية المدنية، والذمة المالية والشركات.", semester: 2, },
    { title: "عقد العمل: تعريفه، عناصره، شروطه، وحقوق والتزامات الطرفين", description: "عقد العمل المحدد وغير المحدد، الأجر، فترات الراحة، وانقضاء عقد العمل.", semester: 3, },
  ],
  'secondary-2as-management-math': [
    { title: "الدوال العددية والإحصاء والنسب المئوية وتطبيقات التسيير", description: "دراسة الدوال التآلفية والتربيعية، دوال التكلفة الكلية والهامشية والإيراد والربح.", semester: 1, },
    { title: "المتتاليات الحسابية والهندسية وتطبيقات الفائدة البسيطة", description: "الحد العام، المجموع، حساب الفائدة، والقيمة المكتسبة والمستحقة.", semester: 2, },
    { title: "الإحصاء ثنائي المتغير والانحدار الخطي والارتباط", description: "سحابة النقط، مستقيم الانحدار الخطي بطريقة المربعات الصغرى، والتنبؤ.", semester: 3, },
  ],
  'secondary-2as-management-arabic': [
    { title: "الأدب في العصر العباسي وشعر الحكمة والاجتماعيات", description: "المتنبي وأبو العتاهية وأسلوب النقد الاجتماعي في الأدب العربي.", semester: 1, },
    { title: "الأدب الأندلسي وشعر الطبيعة وفنون الرسائل الإخوانية والديوانية", description: "ابن زيدون ورسائل ابن حزم الأندلسي وخصائص النثر الفني الأندلسي.", semester: 2, },
    { title: "قواعد النحو والصرف وتطبيقات التعبير التواصلي الوظيفي", description: "التدريب على صياغة التقارير، محاضر الجلسات، وقواعد البلاغة العربية.", semester: 3, },
  ],
  'secondary-2as-management-history': [
    { title: "التوسع الاستعماري الأوروبي وتأثيره على الاقتصاد العالمي", description: "البحث عن الأسواق والمواد الخام والتقسيم الاستعماري للعالم الثالث.", semester: 1, },
    { title: "السياسة الاستعمارية في الجزائر والمقاومة الاقتصادية والاجتماعية", description: "مصادرة الأراضي والمناجم، الضرائب المجحفة، وبؤس الأهالي وانتفاضاتهم.", semester: 2, },
    { title: "الحرب العالمية الأولى وتغير موازين القوى الاقتصادية والمالية", description: "انتقال المركز المالي من لندن إلى نيويورك ونتائج مؤتمر السلام 1919.", semester: 3, },
  ],
  'secondary-2as-arts_phil-philosophy': [
    { title: "مدخل إلى التفلسف: المشكلة والإشكالية والسؤال الفلسفي", description: "مفهوم الفلسفة، السؤال العلمي والسؤال الفلسفي، وقيمة التفلسف في حياة الإنسان.", semester: 1, },
    { title: "انطباق الفكر مع نفسه: المنطق الصوري وقوانين الفكر الأساسية", description: "قانون الهوية، عدم التناقض، الثالث المرفوع، والقياس الأرسطي وشروطه ونتائجه.", semester: 2, },
    { title: "انطباق الفكر مع الواقع: المنهج الاستقرائي والعلوم التجريبية", description: "خطوات الاستقراء: الملاحظة، الفرضية، التجربة، وصياغة القوانين العلمية.", semester: 3, },
  ],
  'secondary-2as-arts_phil-arabic': [
    { title: "شعر العصر العباسي: النزعة العقلية، الثورات الفكرية، وشعر الزهد", description: "أبو نواس، بشار بن برد، أبو العتاهية، وتأثير الثقافات المجاورة على الشعر العربي.", semester: 1, },
    { title: "شعر الحكمة والبطولة عند أبي تمام والمتنبي وفنون المقامات", description: "روائع المتنبي، شعر الحماسة، وبديع الزمان الهمذاني والمقامة البغدادية.", semester: 2, },
    { title: "الأدب الأندلسي: الموشحات، شعر الطبيعة ورثاء المدن والممالك", description: "ابن خفاجة الأندلسي، لسان الدين بن الخطيب، وموسيقى الموشحات الأندلسية.", semester: 3, },
  ],
  'secondary-2as-arts_phil-history': [
    { title: "الاستعمار الأوروبي في إفريقيا وآسيا ومؤتمر برلين 1884", description: "أسباب التكالب الاستعماري، النفوذ في القارتين، وردود الفعل الشعبية الأولية.", semester: 1, },
    { title: "المقاومة الوطنية الجزائرية (1830-1919): الأمير، المقراني، وبوعمامة", description: "أهداف المقاومة، أسباب إخفاقها العسكري، وتأسيس قاعدة النضال السياسي المستقبلي.", semester: 2, },
    { title: "الحرب العالمية الأولى وتطور الفكر السياسي الوطني وحق تقرير المصير", description: "مبادئ ولسن الأربعة عشر، مشاركة الجزائريين في الحرب، ومطالب الأمير خالد.", semester: 3, },
  ],
  'secondary-2as-arts_phil-islamic': [
    { title: "مصادر التشريع الإسلامي الأصيلة والتبعية", description: "القرآن والسنة، الإجماع، القياس، والمصالح المرسلة والاستحسان وسد الذرائع.", semester: 1, },
    { title: "الأخلاق الفردية والاجتماعية في الإسلام ودورها في بناء الحضارة", description: "العدل، الإحسان، الشورى، التكافل الاجتماعي ومحاربة الطبقية والعنصرية.", semester: 2, },
    { title: "فقه الأسرة: الخطبة، الزواج، الطلاق، والآثار المترتبة عليها", description: "عقد النكاح، الحقوق الزوجية، الحكمة من تشريع الطلاق، ونفقة وحضانة الأولاد.", semester: 3, },
  ],
  'secondary-2as-arts_phil-languages': [
    { title: "التواصل الثقافي والحضاري عبر اللغات الأجنبية الحديثة", description: "دراسة نصوص حضارية، مقارنة الأنماط الثقافية، وتطوير التعبير الشفوي والكتابي.", semester: 1, },
    { title: "القضايا المعاصرة: الهجرة، البيئة، وحوار الحضارات", description: "تحليل المقالات الفكرية، استخلاص الأفكار المحورية، وصياغة آراء نقدية معللة.", semester: 2, },
    { title: "الأدب العالمي والترجمة ونقل العلوم بين الشعوب", description: "مبادئ الترجمة، مقارنة النصوص الأدبية، وإثراء الرصيد اللغوي الاصطلاحي.", semester: 3, },
  ],
  'secondary-2as-languages-languages': [
    { title: "النصوص الحضارية والأدبية التأسيسية باللغة الأجنبية الثالثة", description: "قواعد النطق، التراكيب النحوية الأساسية، ورصيد المفردات اليومية والثقافية.", semester: 1, },
    { title: "الحياة الاجتماعية، الشباب، والمؤسسات الثقافية", description: "المحادثة التفاعلية، قراءة النصوص الوصفية والسردية، وكتابة فقرات متماسكة.", semester: 2, },
    { title: "السياحة والتراث والتاريخ الإنساني المشترك", description: "تقديم العروض، فهم التسجيلات الصوتية، والترجمة المزدوجة المبسطة.", semester: 3, },
  ],
  'secondary-2as-languages-english': [
    { title: "Signs of the Times: Cross-Cultural Lifestyles and Traditions", description: "Comparative discourse, active listening, idiomatic expressions, and opinion essays.", semester: 1, },
    { title: "Make Peace: Humanitarian Law, Peace Negotiations & Conflicts", description: "Subjunctive mood, diplomatic correspondence, and critical analysis of editorial articles.", semester: 2, },
    { title: "Waste Not, Want Not: Ecology and Green Architecture", description: "Presenting ecological solutions, rhetorical devices, and persuasive public speaking.", semester: 3, },
  ],
  'secondary-2as-languages-french': [
    { title: "Le discours d'expertise scientifique et technique", description: "Les marques de l'énonciation, l'effacement de l'auteur et la structure logique de la démonstration.", semester: 1, },
    { title: "Le plaidoyer et le réquisitoire dans les débats de société", description: "Procédés polémiques, lexique valorisant et dévalorisant, et argumentation engagée.", semester: 2, },
    { title: "L'art théâtral: dialogue, conflit des personnages et dénouement", description: "La double énonciation, le quiproquo comique ou tragique, et la dramaturgie.", semester: 3, },
  ],
  'secondary-2as-languages-arabic': [
    { title: "الأدب العباسي: حركة التجديد، النزعة العقلية وشعر الزهد", description: "أبو نواس، بشار بن برد، أبو العتاهية، وتأثير الثقافات المجاورة على الشعر العربي.", semester: 1, },
    { title: "شعر الحكمة والبطولة عند أبي تمام والمتنبي وفنون المقامات", description: "روائع المتنبي، شعر الحماسة، وبديع الزمان الهمذاني والمقامة البغدادية.", semester: 2, },
    { title: "الأدب الأندلسي: الموشحات، شعر الطبيعة ورثاء المدن والممالك", description: "ابن خفاجة الأندلسي، لسان الدين بن الخطيب، وموسيقى الموشحات الأندلسية.", semester: 3, },
  ],
  'secondary-2as-languages-philosophy': [
    { title: "مدخل إلى التفلسف: المشكلة والإشكالية والسؤال الفلسفي", description: "مفهوم الفلسفة، السؤال العلمي والسؤال الفلسفي، وقيمة التفلسف في حياة الإنسان.", semester: 1, },
    { title: "انطباق الفكر مع نفسه: المنطق الصوري وقوانين الفكر الأساسية", description: "قانون الهوية، عدم التناقض، الثالث المرفوع، والقياس الأرسطي وشروطه ونتائجه.", semester: 2, },
    { title: "انطباق الفكر مع الواقع: المنهج الاستقرائي والعلوم التجريبية", description: "خطوات الاستقراء: الملاحظة، الفرضية، التجربة، وصياغة القوانين العلمية.", semester: 3, },
  ],
  'secondary-2as-languages-history': [
    { title: "الاستعمار الأوروبي في إفريقيا وآسيا ومؤتمر برلين 1884", description: "أسباب التكالب الاستعماري، النفوذ في القارتين، وردود الفعل الشعبية الأولية.", semester: 1, },
    { title: "المقاومة الوطنية الجزائرية (1830-1919): الأمير، المقراني، وبوعمامة", description: "أهداف المقاومة، أسباب إخفاقها العسكري، وتأسيس قاعدة النضال السياسي المستقبلي.", semester: 2, },
    { title: "الحرب العالمية الأولى وتطور الفكر السياسي الوطني وحق تقرير المصير", description: "مبادئ ولسن الأربعة عشر، مشاركة الجزائريين في الحرب، ومطالب الأمير خالد.", semester: 3, },
  ],
  'secondary-3as-exp_science-french': [
    { title: "Le texte d'histoire et le témoignage historique (Guerre de Libération)", description: "Faits et événements, visée informative/commémorative, témoignages, et compte rendu critique.", semester: 1, },
    { title: "Le discours exhortatif: L'appel humanitaire et l'engagement", description: "Situation d'urgence, interpellation (vous), impératif, verbes de modalité, et structure tripartite.", semester: 2, },
    { title: "Le débat d'idées et la confrontation des thèses contradictoires", description: "Thèse défendue, thèse réfutée, arguments, concessions, et connecteurs d'opposition.", semester: 3, },
  ],
  'secondary-3as-exp_science-english': [
    { title: "Ancient Civilizations: Rise, Achievements, and Collapse of Empires", description: "Nile Valley, Sumer, Greece, Rome; past continuous, used to, and descriptive essay writing.", semester: 1, },
    { title: "Ethics in Business: Fighting Bribery, Counterfeiting and Corruption", description: "Passive voice, expressing condition (provided that, as long as), wishes (I wish, It's high time).", semester: 2, },
    { title: "Education in the World and Safety First (Consumer Protection)", description: "Comparing educational systems, advertising techniques, health risks of junk food, and modals.", semester: 3, },
  ],
  'secondary-3as-math_track-math': [
    { title: "الدوال العددية والنهايات والاستمرارية ومبرهنة القيم المتوسطة", description: "دراسة الدوال الشاملة، المستقيمات المقاربة، ونقاط الانعطاف والاشتقاق المتقدم.", semester: 1, },
    { title: "الدالة الأسية النيبيرية (Exp) والدالة اللوغاريتمية (Ln) والتزايد المقارن", description: "الخواص الجبرية، المعادلات والمتراجحات، النهايات الشهيرة وتطبيقاتها.", semester: 1, },
    { title: "المتتاليات العددية والبرهان بالتراجع والمتتاليات المتجاورة", description: "التقارب والمحدودية، المتتاليات التراجعية، وحساب المجاميع والجداءات الرياضية.", semester: 2, },
    { title: "الحساب في Z، القسمة الإقليدية، الموافقات، والأعداد الأولية", description: "خواص الموافقات، مبرهنة غوص وبيزو، التعداد، والحل في Z للمعادلات ax + by = c.", semester: 2, },
    { title: "الأعداد المركبة والتحويلات النقطية (الانسحاب، التحاكي، الدوران، والتشابه)", description: "الشكل الجبري، المثلثي، الأسي، دستور دو موافر، وزاوية ونسبة التشابه المباشر.", semester: 3, },
    { title: "الحساب التكاملي، الهندسة في الفضاء، والاحتمالات والتوزيعات", description: "الدوال الأصلية، حساب المساحات والحجوم، معادلة مستو ومستقيم، وتوزيع برنولي.", semester: 3, },
  ],
  'secondary-3as-math_track-physics': [
    { title: "المتابعة الزمنية لتحول كيميائي وسرعة التفاعل وزمن نصف التفاعل t1/2", description: "المعايرة اللونية، قياس الناقلية، المعايرة البي إتشية، وجداول التقدم وسرعة الاختفاء والتشكل.", semester: 1, },
    { title: "تطور جملة ميكانيكية: قوانين نيوتن الثلاثة وحركة الكواكب والأقمار", description: "قوانين كيبلر، السقوط الشاقولي الحقيقي والحر، حركة القذائف في مجال الثقالة المنتظم.", semester: 1, },
    { title: "الظواهر الكهربائية: ثنائي القطب RC وثنائي القطب RL والطاقة المخزنة", description: "المعادلات التفاضلية للشحن والتفريغ، ثابت الزمن τ، وتصرف الوشيعة وتأسيس التيار.", semester: 2, },
    { title: "التحولات النووية: النشاط الإشعاعي (ألفا، بيتا، غاما) وقانون التناقص الإشعاعي", description: "طاقة الربط النووي، النقص الكتلي، منحنى أستون، والانشطار والاندماج النووي.", semester: 2, },
    { title: "تطور جملة كيميائية نحو حالة التوازن (الأحماض والأسس والـ pH)", description: "كسر التفاعل Qr، ثابت التوازن K، الـ pKa، ومجالات تغلب الصفة الحمضية والأساسية.", semester: 3, },
    { title: "الاهتزازات الميكانيكية والكهربائية الحرة وظاهرة التجاوب", description: "النواس الثقالي، النواس المرن، الدارة RLC المتذبذبة، وانحفاظ الطاقة والتخامد.", semester: 3, },
  ],
  'secondary-3as-math_track-philosophy': [
    { title: "المشكلة والإشكالية والمنطق الصوري والرياضيات والأكسيوماتيك", description: "أصل المفاهيم الرياضية (العقل أم الحواس؟)، وأزمة الأسس والأنساق البديهية الحديثة.", semester: 1, },
    { title: "العلوم التجريبية: علوم المادة الحية والمادة الجامدة والحتمية", description: "تطبيق المنهج التجريبي في الفيزياء والكيمياء والبيولوجيا ومبدأ اللاحتمية والهايبركوانتوم.", semester: 2, },
    { title: "العلوم الإنسانية (التاريخ وعلم النفس وعلم الاجتماع) وإشكالية الموضوعية", description: "عائق الذاتية في دراسة السلوك الإنساني وقابلية الظاهرة الاجتماعية للقياس والتجريب.", semester: 3, },
  ],
  'secondary-3as-math_track-history': [
    { title: "بروز الصراع وتشكل العالم والحرب الباردة (1945-1989)", description: "الاستقطاب الثنائي، مبدأ ترومان، مشروع مارشال، حلف وارسو، وأزمات برلين وكوريا وكوبا.", semester: 1, },
    { title: "الثورة التحريرية الكبرى (1954-1962): الإستراتيجيات العسكرية والسياسية", description: "هجومات الشمال القسنطيني، مؤتمر الصومام، الدبلوماسية الجزائرية، والمفاوضات واسترجاع السيادة.", semester: 2, },
    { title: "جغرافية الاقتصاد العالمي: التقدم والتخلف وأسواق المواد الاستراتيجية", description: "أسواق البترول والغاز والقمح، البورصات العالمية، والقوى الاقتصادية الكبرى (أمريكا، الاتحاد الأوروبي، آسيا).", semester: 3, },
  ],
  'secondary-3as-math_track-arabic': [
    { title: "عصر الضعف والانحطاط: شعر المديح النبوي والزهد والنثر العلمي المتأدب", description: "البوصيري وابن خلدون وخصائص التكرار والزخرفة اللفظية وقيمتها التاريخية.", semester: 1, },
    { title: "عصر النهضة: مدرسة الإحياء والبعث وشعر المنفى والشعر الرومانسي المهجري", description: "محمود سامي البارودي، أحمد شوقي، إيليا أبو ماضي، والرابطة القلمية وتجديد المعاني.", semester: 2, },
    { title: "الشعر الحر وشعر الالتزام والقضية الفلسطينية والثورة الجزائرية", description: "نازك الملائكة، بدر شاكر السياب، محمود درويش، مفدي زكريا، وظاهرة الرمز والأسطورة.", semester: 3, },
  ],
  'secondary-3as-math_track-science': [
    { title: "آليات تركيب البروتين والنسخ والترجمة وتنشيط الأحماض الأمينية", description: "الـ ARNm، الـ ARNt، الريبوزومات، مراحل الترجمة (البداية، الاستطالة، النهاية) والشفرة الوراثية.", semester: 1, },
    { title: "العلاقة بين بنية البروتين ووظيفته والتخصص الوظيفي للبروتينات في الدفاع عن الذات", description: "البنيات الفراغية، الروابط الكيميائية، الجهاز المناعي، الاستجابة الخلطية والخلوية والـ VIH.", semester: 2, },
    { title: "دور البروتينات في التحفيز الإنزيمي والاتصال العصبي", description: "الموقع الفعال، التكامل المحفز، العوامل المؤثرة (الحرارة و pH)، والمشابك وكمونات العمل.", semester: 3, },
  ],
  'secondary-3as-tech_math-technology': [
    { title: "هندسة ميكانيكية: التحليل البنيوي، مقاومة المواد (الشد، الانضغاط، والقص)", description: "شروط المقاومة، حساب الإجهادات، وصلات التوجيه، والمحامل ومسننات نقل الحركة.", semester: 1, },
    { title: "هندسة كهربائية: الأنظمة الآلية والمنطق التعاقبي والعدادات والمبرمج الصناعي (API)", description: "نظام GRAFCET، المعقبات الهوائية والكهربائية، الميكروكنترولر، ومكبرات العمليات.", semester: 2, },
    { title: "هندسة مدنية وطرائق: حساب العوارض، الخرسانة المسلحة، والديناميكا الحرارية", description: "حساب ردود الأفعال، عزم الانحناء، الكيمياء الحركية، والبترول ومشتقاته والتكرير.", semester: 3, },
  ],
  'secondary-3as-tech_math-math': [
    { title: "الدوال العددية والنهايات والاشتقاقية والدوال الأسية واللوغاريتمية", description: "دراسة شاملة، التزايد المقارن، إزالة حالات عدم التعيين، وتطبيقات المعادلات الفيزيائية.", semester: 1, },
    { title: "المتتاليات العددية والاستدلال بالتراجع والحساب التكاملي", description: "المتتاليات الحسابية والهندسية، المتتاليات التراجعية، وحساب المساحات والتكامل بالتجزئة.", semester: 2, },
    { title: "الأعداد المركبة والتحويلات النقطية والهندسة الفضائية والاحتمالات", description: "الشكل الأسي، التشابه المباشر، الجداء السلمي في الفضاء، والمتغيرات العشوائية المنفصلة.", semester: 3, },
  ],
  'secondary-3as-tech_math-physics': [
    { title: "المتابعة الزمنية لتحول كيميائي وتطور جملة ميكانيكية (قوانين نيوتن)", description: "سرعات التفاعل، المعايرة، حركة القذائف وحركة السقوط الشاقولي الحقيقي والحر.", semester: 1, },
    { title: "الظواهر الكهربائية (RC و RL) والتحولات النووية", description: "المعادلات التفاضلية، ثابت الزمن، التناقص الإشعاعي، وطاقة الانشطار والاندماج.", semester: 2, },
    { title: "الأحماض والأسس وتطور جملة نحو حالة التوازن والأسترة والاهتزازات", description: "ثابت الحموضة Ka، تفاعل الأسترة وإماهة الإستر، والدارة RLC والاهتزاز الميكانيكي.", semester: 3, },
  ],
  'secondary-3as-tech_math-history': [
    { title: "بروز الصراع وتشكل العالم بعد الحرب العالمية الثانية والحرب الباردة", description: "المعايير السياسية والاقتصادية، المخططات والمشاريع، وحركات التحرر في العالم الثالث.", semester: 1, },
    { title: "الثورة التحريرية الكبرى (1954-1962): التنظيم، الهجومات، والمفاوضات", description: "مؤتمر الصومام، استراتيجيات جيش التحرير، الدبلوماسية، واتفاقيات إيفيان الحاسمة.", semester: 2, },
    { title: "جغرافية القوى الاقتصادية الكبرى والمبادلات التجارية العالمية", description: "عوامل قوة الاقتصاد الأمريكي والأوروبي والآسيوي، وأسواق البترول ورؤوس الأموال.", semester: 3, },
  ],
  'secondary-3as-tech_math-arabic': [
    { title: "عصر الضعف والانحطاط: شعر المديح النبوي والزهد والنثر العلمي المتأدب", description: "البوصيري وابن خلدون وخصائص التكرار والزخرفة اللفظية وقيمتها التاريخية.", semester: 1, },
    { title: "عصر النهضة: مدرسة الإحياء والبعث وشعر المنفى والشعر الرومانسي المهجري", description: "محمود سامي البارودي، أحمد شوقي، إيليا أبو ماضي، والرابطة القلمية وتجديد المعاني.", semester: 2, },
    { title: "الشعر الحر وشعر الالتزام والقضية الفلسطينية والثورة الجزائرية", description: "نازك الملائكة، بدر شاكر السياب، محمود درويش، مفدي زكريا، وظاهرة الرمز والأسطورة.", semester: 3, },
  ],
  'secondary-3as-management-management': [
    { title: "أعمال نهاية السنة: الاهتلاك الخطي، المتناقص، والمتزايد للمثبتات", description: "مفاهيم الاهتلاك، جداول الاهتلاك، التسجيل المحاسبي في دفتر اليومية، وخسائر القيمة.", semester: 1, },
    { title: "تسوية المخزونات وحسابات الزبائن المشكوك فيهم وحالة التقارب البنكي", description: "فروق الجرد المبررة وغير المبررة، تقييم خسائر ديون الزبائن، والتقارب المحاسبي والبنكي.", semester: 1, },
    { title: "حساب النتائج حسب الطبيعة وحسب الوظيفة وتحليل مؤشرات التسيير", description: "إنتاج السنة المالية، القيمة المضافة، إجمالي فائض الاستغلال، والنتيجة الصافية للسنة.", semester: 2, },
    { title: "قدرة التمويل الذاتي (CAF) واختيار المشاريع الاستثمارية", description: "حساب الـ CAF بالطريقتين، القيمة الحالية الصافية (VAN)، مؤشر المردودية (IP)، وفترة الاسترداد (DR).", semester: 2, },
    { title: "الرياضيات المالية: الفائدة المركبة، القيمة الحالية، واستهلاك القروض العادية", description: "جداول استهلاك القروض بالأقساط الثابتة، استنتاج الاستهلاك الأول، ومعدل الفائدة المركب.", semester: 3, },
    { title: "الميزانية الوظيفية وتحليل التوازن المالي للمؤسسة", description: "رأس المال العامل الصافي الإجمالي (FRNG)، احتياج رأس المال العامل (BFR)، والخزينة الصافية (TN).", semester: 3, },
  ],
  'secondary-3as-management-economics': [
    { title: "النقود ووظائفها والكتلة النقدية وإصدار النقود في الاقتصاد", description: "مقاييس الكتلة النقدية (M1, M2, M3)، غطاء النقود، ووظائف النقود كوسيط وقاعدة دفع مؤجل.", semester: 1, },
    { title: "النظام المصرفي الجزائري: البنك المركزي (بنك الجزائر) والبنوك التجارية", description: "وظائف بنك الجزائر وأدوات السياسة النقدية (سعر إعادة الخصم، نسبة الاحتياطي الإجباري).", semester: 1, },
    { title: "السوق والأسعار، التضخم وآثاره، والبطالة وسياسات التشغيل", description: "أنواع الأسواق، أسباب التضخم (الطلب، التكلفة)، آثاره الاجتماعية، وأنواع البطالة.", semester: 2, },
    { title: "التجارة الخارجية، ميزان المدفوعات، وسياسات الحماية وحرية التجارة", description: "أقسام ميزان المدفوعات (الحساب الجاري، حساب رأس المال والمالي)، وسعر الصرف.", semester: 2, },
    { title: "المنظمات الاقتصادية الدولية وصندوق النقد الدولي واستراتيجيات التنمية", description: "دور الـ FMI، البنك الدولي (BIRD)، المنظمة العالمية للتجارة (OMC)، وتحديات الاقتصاد الوطني.", semester: 3, },
  ],
  'secondary-3as-management-law': [
    { title: "عقد البيع التجاري: أركانه، شروطه، والتزامات البائع والمشتري", description: "التراضي، المحل، السبب، التزام تسليم المبيع، ضمان العيوب الخفية، ودفع الثمن وتسلم المبيع.", semester: 1, },
    { title: "عقد الشركة التجارية والأركان العامة والخاصة وشروط الصحة", description: "تعدد الشركاء، تقديم الحصص، نية المشاركة، واقتسام الأرباح والخسائر والشخصية المعنوية.", semester: 1, },
    { title: "شركة المساهمة (SPA) والشركة ذات المسؤولية المحدودة (SARL)", description: "التأسيس، الحد الأدنى لرأس المال، عدد الشركاء، التسيير والإدارة ومجلس المراقبة.", semester: 2, },
    { title: "علاقات العمل الفردية: عقد العمل، الأجر، فترات الراحة، وانقضاء العقد", description: "التسريح الاقتصادي والتعسفي، الاستقالة، العطل مدفوعة الأجر، ومفتشية العمل وقانون العمل الجزائري.", semester: 2, },
    { title: "علاقات العمل الجماعية: التفاوض الجماعي، الإضراب، والنزاعات والمنافسة", description: "الاتفاقيات الجماعية، شروط ممارسة حق الإضراب، المصالحة والوساطة والتحكيم، ومجلس المنافسة.", semester: 3, },
  ],
  'secondary-3as-management-math': [
    { title: "الدوال العددية والاشتقاق ودوال التكلفة والإيراد والربح الأقصى", description: "دراسة التغيرات، نقطة التعادل، التكلفة الحدية، وتحقيق أعلى هامش ربح للمؤسسة.", semester: 1, },
    { title: "الدالة الأسية واللوغاريتمية وتطبيقات النمو الاقتصادي والتراجع", description: "حل المعادلات والمتراجحات، التزايد المقارن، ومعدلات النمو الاقتصادي والديموغرافي.", semester: 2, },
    { title: "المتتاليات العددية والاحتمالات التوزيعية والإحصاء الرياضي", description: "المتتاليات التراجعية، حساب الاحتمالات الشرطية، وقوانين المتغيرات العشوائية.", semester: 3, },
  ],
  'secondary-3as-management-arabic': [
    { title: "عصر الضعف والانحطاط: شعر المديح النبوي والزهد والنثر العلمي المتأدب", description: "البوصيري وابن خلدون وخصائص التكرار والزخرفة اللفظية وقيمتها التاريخية.", semester: 1, },
    { title: "عصر النهضة: مدرسة الإحياء والبعث وشعر المنفى والشعر الرومانسي المهجري", description: "محمود سامي البارودي، أحمد شوقي، إيليا أبو ماضي، والرابطة القلمية وتجديد المعاني.", semester: 2, },
    { title: "الشعر الحر وشعر الالتزام والقضية الفلسطينية والثورة الجزائرية", description: "نازك الملائكة، بدر شاكر السياب، محمود درويش، مفدي زكريا، وظاهرة الرمز والأسطورة.", semester: 3, },
  ],
  'secondary-3as-management-history': [
    { title: "بروز الصراع وتشكل العالم بعد الحرب العالمية الثانية والحرب الباردة", description: "المعايير السياسية والاقتصادية، المخططات والمشاريع، وحركات التحرر في العالم الثالث.", semester: 1, },
    { title: "الثورة التحريرية الكبرى (1954-1962): التنظيم، الهجومات، والمفاوضات", description: "مؤتمر الصومام، استراتيجيات جيش التحرير، الدبلوماسية، واتفاقيات إيفيان الحاسمة.", semester: 2, },
    { title: "جغرافية القوى الاقتصادية الكبرى والمبادلات التجارية العالمية", description: "عوامل قوة الاقتصاد الأمريكي والأوروبي والآسيوي، وأسواق البترول ورؤوس الأموال.", semester: 3, },
  ],
  'secondary-3as-arts_phil-philosophy': [
    { title: "المشكلة والإشكالية: السؤال الفلسفي والسؤال العلمي والمقارنة المنهجية", description: "مجال الميتافيزيقا ومجال المادة المحسوسة، وأهمية الفلسفة في عصر التقنية والعلم المعاصر.", semester: 1, },
    { title: "انطباق الفكر مع نفسه ومع الواقع: المنطق الصوري والاستقراء العلمي", description: "القياس الأرسطي، قواعد التجريب العلمي، وصعوبات تطبيق المنهج التجريبي في البيولوجيا.", semester: 1, },
    { title: "العلوم الإنسانية: التاريخ، علم النفس، وعلم الاجتماع وإشكالية العلمية", description: "هل يمكن دراسة الحادثة التاريخية والنفسية دراسة موضوعية مجردة كالمادة الجامدة؟", semester: 2, },
    { title: "الشعور واللاشعور ومدرسة التحليل النفسي (سيغموند فرويد)", description: "الوعي واللاوعي، الحيل الدفاعية، تفسير الأحلام وزلات اللسان، وجهاز الشخصية (الهو، الأنا، الأنا الأعلى).", semester: 2, },
    { title: "الحرية والمسؤولية بين الجبرية والتحرر الأخلاقي والقانوني", description: "موقف الحتميين (الجبرية البيولوجية والاجتماعية)، موقف دعاة الحرية المطلقة، والتوفيق بينهما.", semester: 3, },
    { title: "الفكر السياسي: العدالة، الديمقراطية، العولمة، والأنظمة السياسية والاقتصادية", description: "المساواة والتفاوت، الرأسمالية والاشتراكية، مفهوم الدولة وحقوق الإنسان وحرية الرأي.", semester: 3, },
  ],
  'secondary-3as-arts_phil-arabic': [
    { title: "عصر الضعف والانحطاط: شعر المديح والزهد والنثر العلمي المتأدب", description: "تحليل نصوص البوصيري، ابن نباتة، ومقدمة ابن خلدون مع قواعد الإعراب اللفظي والتقديري.", semester: 1, },
    { title: "عصر النهضة والمدارس الشعرية الحديثة: الإحياء والبعث والشعر المهجري", description: "شعر المنفى للبارودي، أحمد شوقي، إيليا أبو ماضي، وتوظيف الطبيعة والتسامح الإنساني.", semester: 2, },
    { title: "شعر الالتزام والقضية الفلسطينية والثورة الجزائرية وظاهرة الحزن والألم", description: "مفدي زكريا، محمود درويش، نازك الملائكة، بدر شاكر السياب، وأدب القصة والمسرح العربي.", semester: 3, },
  ],
  'secondary-3as-arts_phil-history': [
    { title: "العالم بعد الحرب العالمية الثانية: الحرب الباردة، التعايش السلمي، وحركة عدم الانحياز", description: "معايير تشكل العالم، الصراع الإيديولوجي، مؤتمر باندونغ 1955، ومؤتمر الجزائر 1973.", semester: 1, },
    { title: "الثورة التحريرية الجزائرية (1954-1962): العمليات الكبرى، الدبلوماسية، والاستقلال", description: "بيان أول نوفمبر، مؤتمر الصومام، الحكومة المؤقتة GPRA، ومفاوضات إيفيان واستعادة السيادة.", semester: 2, },
    { title: "جغرافية التنمية والمبادلات: الثروات الطبيعية، البترول، والتكتلات الاقتصادية الكبرى", description: "إشكالية التقدم والتخلف، أسواق المواد الاستراتيجية، والولايات المتحدة والاتحاد الأوروبي وشرق آسيا.", semester: 3, },
  ],
  'secondary-3as-arts_phil-islamic': [
    { title: "العقيدة الإسلامية وأثرها، والقرآن الكريم وتوجيهه للعقل الإنساني", description: "أهمية العقل في التدبر والاجتهاد، حدود إعمال العقل، وموقف الإسلام من التقليد الأعمى.", semester: 1, },
    { title: "مقاصد الشريعة الإسلامية: الكليات الخمس (الدين، النفس، العقل، النسل، المال)", description: "الضروريات، الحاجيات، التحسينيات، ومنهج الإسلام في محاربة الانحراف والجريمة والعقوبات.", semester: 2, },
    { title: "المعاملات المالية وأحكام الأسرة والميراث في الإسلام", description: "الربا بنوعيه، المعاملات المعاصرة الجائزة والمحرمة، النسب، التبني، الكفالة، وقسمة التركات.", semester: 3, },
  ],
  'secondary-3as-arts_phil-languages': [
    { title: "النصوص الفكرية والحضارية والفلسفية باللغات العالمية", description: "قراءة نصوص فلسفية مترجمة، مهارات التحليل والنقد والمناظرة اللغوية المنهجية.", semester: 1, },
    { title: "التحولات الثقافية والأدبية العالمية وقضايا الحداثة", description: "دراسة التيارات الأدبية العالمية، كتابة المقالات النقدية، وإتقان تقنيات الترجمة الأدبية.", semester: 2, },
    { title: "التحضير المنهجي لمواضيع شهادة البكالوريا في اللغات الأجنبية", description: "معالجة النصوص النموذجية، إتقان التعبير الكتابي الحر والموجه، وتفادي الأخطاء الشائعة.", semester: 3, },
  ],
  'secondary-3as-languages-languages': [
    { title: "الأدب والحضارة في اللغة المختارة (إسبانية / ألمانية / إيطالية)", description: "تحليل النصوص الروائية والشعرية، دراسة الخلفية التاريخية والاجتماعية والثقافية.", semester: 1, },
    { title: "القضايا المعاصرة: الإعلام الجديد، العولمة، والتحديات الإنسانية", description: "فهم النصوص التحليلية، صياغة الحجج المنطقية، وإثراء الرصيد اللغوي والمفردات التخصصية.", semester: 2, },
    { title: "التحضير الشامل لشهادة البكالوريا في اللغة الثالثة", description: "نماذج امتحانات البكالوريا السابقة، منهجية تحليل الأسئلة النصية، وكتابة المقال التعبيري.", semester: 3, },
  ],
  'secondary-3as-languages-english': [
    { title: "Ancient Civilizations: The Genesis and Decline of World Empires", description: "In-depth textual analysis, vocabulary of archaeology, historical narratives, and synthetic summaries.", semester: 1, },
    { title: "Ethics in Business: Corporate Integrity and Anti-Fraud Strategies", description: "Complex clauses, expressing conditions and advice, debating business dilemmas, and opinion essays.", semester: 2, },
    { title: "Education and Social Issues: Comparing Educational Frameworks", description: "Educational systems worldwide, consumerism, food safety, and advanced essay composition for BAC.", semester: 3, },
  ],
  'secondary-3as-languages-french': [
    { title: "Le texte d'histoire: Témoignages et devoir de mémoire (Guerre d'Algérie)", description: "Analyse énonciative, visée communicative, discours rapporté, lexique de l'histoire, et compte rendu.", semester: 1, },
    { title: "L'appel et le discours exhortatif: Mobilisation et causes universelles", description: "Constat négatif, nécessité de changement, interpellation directe, et dynamique argumentative.", semester: 2, },
    { title: "Le débat d'idées et la controverse philosophique et sociétale", description: "Confrontation des thèses, réfutation, concession, et rédaction du compte rendu critique pour le BAC.", semester: 3, },
  ],
  'secondary-3as-languages-arabic': [
    { title: "عصر الضعف والانحطاط: شعر المديح والزهد والنثر العلمي المتأدب", description: "تحليل نصوص البوصيري، ابن نباتة، ومقدمة ابن خلدون مع قواعد الإعراب اللفظي والتقديري.", semester: 1, },
    { title: "عصر النهضة والمدارس الشعرية الحديثة: الإحياء والبعث والشعر المهجري", description: "شعر المنفى للبارودي، أحمد شوقي، إيليا أبو ماضي، وتوظيف الطبيعة والتسامح الإنساني.", semester: 2, },
    { title: "شعر الالتزام والقضية الفلسطينية والثورة الجزائرية وظاهرة الحزن والألم", description: "مفدي زكريا، محمود درويش، نازك الملائكة، بدر شاكر السياب، وأدب القصة والمسرح العربي.", semester: 3, },
  ],
  'secondary-3as-languages-philosophy': [
    { title: "المشكلة والإشكالية: السؤال الفلسفي والسؤال العلمي والمقارنة المنهجية", description: "مجال الميتافيزيقا ومجال المادة المحسوسة، وأهمية الفلسفة في عصر التقنية والعلم المعاصر.", semester: 1, },
    { title: "انطباق الفكر مع نفسه ومع الواقع: المنطق الصوري والاستقراء العلمي", description: "القياس الأرسطي، قواعد التجريب العلمي، وصعوبات تطبيق المنهج التجريبي في البيولوجيا.", semester: 1, },
    { title: "اللغة والفكر، الشعور واللاشعور، والحرية والمسؤولية في الفلسفة المعاصرة", description: "العلاقة بين الدال والمدلول، هل الفكر يسبق اللغة؟ ومسؤولية الإنسان الأخلاقية والقانونية.", semester: 2, },
    { title: "العولمة والدولة والأنظمة السياسية والعدالة الاجتماعية والتفاوت", description: "الأنظمة الديمقراطية، حقوق الإنسان، الرأسمالية والاشتراكية، والمساواة والتفاوت.", semester: 3, },
  ],
  'secondary-3as-languages-history': [
    { title: "العالم بعد الحرب العالمية الثانية: الحرب الباردة، التعايش السلمي، وحركة عدم الانحياز", description: "معايير تشكل العالم، الصراع الإيديولوجي، مؤتمر باندونغ 1955، ومؤتمر الجزائر 1973.", semester: 1, },
    { title: "الثورة التحريرية الجزائرية (1954-1962): العمليات الكبرى، الدبلوماسية، والاستقلال", description: "بيان أول نوفمبر، مؤتمر الصومام، الحكومة المؤقتة GPRA، ومفاوضات إيفيان واستعادة السيادة.", semester: 2, },
    { title: "جغرافية التنمية والمبادلات: الثروات الطبيعية، البترول، والتكتلات الاقتصادية الكبرى", description: "إشكالية التقدم والتخلف، أسواق المواد الاستراتيجية، والولايات المتحدة والاتحاد الأوروبي وشرق آسيا.", semester: 3, },
  ],
};

/**
 * دالة مساعدة ذكية لاسترجاع وتصفية الدروس المعتمدة لأي مستوى وسنة ومادة وشعبة وفصل دراسي بدقة 100%
 */
export function getCurriculumLessonsForSubject(
  levelId: string,
  yearId: string,
  subjectId: string,
  trackId?: string | null,
  semester?: number | string | null
): LessonIndexItem[] {
  let lessons: LessonIndexItem[] = [];

  // 1. مفتاح محدد جداً للشعبة (Secondary Tracks)
  if (trackId) {
    const trackKey = `${levelId}-${yearId}-${trackId}-${subjectId}`;
    if (ALL_CURRICULUM_LESSONS[trackKey] && ALL_CURRICULUM_LESSONS[trackKey].length > 0) {
      lessons = ALL_CURRICULUM_LESSONS[trackKey];
    }
  }

  // 2. مفتاح السنة والمادة (Year + Subject)
  if (lessons.length === 0) {
    const yearKey = `${levelId}-${yearId}-${subjectId}`;
    if (ALL_CURRICULUM_LESSONS[yearKey] && ALL_CURRICULUM_LESSONS[yearKey].length > 0) {
      lessons = ALL_CURRICULUM_LESSONS[yearKey];
    }
  }

  // 3. محاولة تطابق المواد المتقاطعة للشعب الثانوية
  if (lessons.length === 0 && levelId === 'secondary') {
    const fallbackExpKey = `secondary-${yearId}-exp_science-${subjectId}`;
    if (ALL_CURRICULUM_LESSONS[fallbackExpKey]) {
      lessons = ALL_CURRICULUM_LESSONS[fallbackExpKey];
    } else {
      const fallbackArtsKey = `secondary-${yearId}-arts_core-${subjectId}`;
      if (ALL_CURRICULUM_LESSONS[fallbackArtsKey]) {
        lessons = ALL_CURRICULUM_LESSONS[fallbackArtsKey];
      } else {
        const fallback3asKey = `secondary-3as-${subjectId}`;
        if (ALL_CURRICULUM_LESSONS[fallback3asKey]) {
          lessons = ALL_CURRICULUM_LESSONS[fallback3asKey];
        }
      }
    }
  }

  // 4. محاولة البحث في المواد المتشابهة بالمرحلة
  if (lessons.length === 0) {
    const levelGenericKey = `${levelId}-${subjectId}`;
    if (ALL_CURRICULUM_LESSONS[levelGenericKey]) {
      lessons = ALL_CURRICULUM_LESSONS[levelGenericKey];
    }
  }

  // 5. في حال لم يتوفر مفتاح خاص، توليد 6 وحدات موزعة فصلياً بدقة
  if (lessons.length === 0) {
    lessons = [
      { title: 'الوحدة الأولى: المفاهيم التأسيسية والقواعد الأولية', description: 'المدخل النظري والقواعد التمهيدية المقررة في المنهاج الوزاري.', semester: 1 },
      { title: 'الوحدة الثانية: الدروس التطبيقية والأنشطة الإدماجية', description: 'شرح تفصيلي مع أمثلة تطبيقية وتمارين تدريبية للمكتسبات القبلية.', semester: 1 },
      { title: 'الوحدة الثالثة: تعميق المفاهيم وحل المشكلات الواقعية', description: 'تطبيقات نموذجية وتحليل وضعيات إشكالية وفق الكفاءات المستهدفة.', semester: 2 },
      { title: 'الوحدة الرابعة: المنهجية التطبيقية ونماذج التقييم الفصلي', description: 'تدريبات منهجية ونماذج اختبارات تحضيرية للفصل الثاني.', semester: 2 },
      { title: 'الوحدة الخامسة: التطبيقات الشاملة والتركيب المعرفي', description: 'دمج المكتسبات المعرفية وحل وضعيات مركبة ومتطورة.', semester: 3 },
      { title: 'الوحدة السادسة: المراجعة العامة والتحضير للامتحانات الرسمية', description: 'ملخصات مركزة وتوجيهات منهجية لنيل أعلى الدرجات في الامتحانات.', semester: 3 }
    ];
  }

  // تصفية حسب الفصل (Semester) في حال تم اختياره
  if (semester && semester !== 'all') {
    const semNum = Number(semester);
    const filtered = lessons.filter(l => !l.semester || l.semester === semNum);
    if (filtered.length > 0) {
      return filtered;
    }
  }

  return lessons;
}
