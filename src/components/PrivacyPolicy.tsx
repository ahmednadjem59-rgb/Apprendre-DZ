import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500" dir="rtl">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-black"
      >
        <ArrowRight size={20} />
        <span>العودة</span>
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200 border border-slate-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center shadow-inner">
            <Shield size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 leading-tight">سياسة الخصوصية</h1>
            <p className="text-slate-400 font-bold">Privacy Policy - منصة التفوق</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-right leading-[1.8]" dir="rtl">
          <section>
            <h2 className="text-xl font-black text-slate-800 border-r-4 border-blue-600 pr-4">1. المعلومات التي نجمعها</h2>
            <p className="text-slate-600">
              نحن نجمع معلومات محدودة عند استخدامك لتطبيقنا، بما في ذلك بيانات الحساب (مثل البريد الإلكتروني والاسم) عند التسجيل عبر Google، وذلك لتخصيص تجربة التعلم الخاصة بك وحفظ تقدمك.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 border-r-4 border-blue-600 pr-4">2. ملفات تعريف الارتباط وتجربة الاستخدام</h2>
            <p className="text-slate-600">
              تطبيقنا منصة تعليمية خالية تماماً من الإعلانات التجارية. نستخدم ملفات تعريف الارتباط الأساسية (Cookies) فقط للحفاظ على تسجيل دخولك الآمن ومزامنة تقدمك الدراسي ونتائج الاختبارات.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 border-r-4 border-blue-600 pr-4">3. حماية البيانات</h2>
            <p className="text-slate-600">
              نحن نلتزم بحماية بياناتك ولا نقوم ببيعها أو مشاركتها مع أطراف ثالثة لأغراض تسويقية. البيانات تُستخدم فقط لتحسين أداء التطبيق وتوفير إحصائيات دقيقة عن تقدمك الدراسي.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 border-r-4 border-blue-600 pr-4">4. التغييرات على سياسة الخصوصية</h2>
            <p className="text-slate-600">
              قد نقوم بتحديث هذه السياسة من حين لآخر. سنقوم بإخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار داخل التطبيق.
            </p>
          </section>

          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-12">
            <h2 className="text-lg font-black text-slate-900 mb-4 text-center">تواصل معنا</h2>
            <p className="text-slate-600 text-center leading-relaxed">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك مراسلتنا عبر البريد الإلكتروني:
              <br />
              <strong className="text-blue-600 block mt-2 text-xl">ahmednadjem59@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
      
      <div className="mt-12 text-center text-slate-400 text-sm font-bold pb-12">
        جميع الحقوق محفوظة © {new Date().getFullYear()} منصة التفوق
      </div>
    </div>
  );
};
