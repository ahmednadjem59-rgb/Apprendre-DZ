import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Video, ShieldCheck, CheckCircle2, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface OneTimePermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId?: string;
  onComplete?: (granted: boolean) => void;
  showNotification?: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const OneTimePermissionModal: React.FC<OneTimePermissionModalProps> = ({
  isOpen,
  onClose,
  userId,
  onComplete,
  showNotification
}) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGrantPermissions = async () => {
    setIsRequesting(true);
    setStatusMessage('يرجى الضغط على "سماح" (Allow) في نافذة المتصفح لتفعيل الميكروفون والكاميرا...');

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request both audio and video permission
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true
        });

        // Immediately stop all tracks so camera/mic are not active in background
        stream.getTracks().forEach((track) => track.stop());

        // Mark as granted and requested in localStorage
        localStorage.setItem('chat_media_permissions_requested', 'true');
        localStorage.setItem('media_permissions_requested', 'true');
        localStorage.setItem('media_permissions_granted', 'true');

        // Save status in Firestore user doc if logged in
        if (userId) {
          try {
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, {
              mediaPermissionsGranted: true,
              mediaPermissionsRequestedAt: new Date().toISOString(),
              chatMediaPermissionsConfigured: true
            });
          } catch (e) {
            console.error('Permission doc update notice:', e);
          }
        }

        if (showNotification) {
          showNotification('تم تفعيل إذن الكاميرا والميكروفون للدردشة والمكالمات بنجاح! 🎙️📹', 'success');
        }
        if (onComplete) {
          onComplete(true);
        } else {
          onClose();
        }
      } else {
        localStorage.setItem('chat_media_permissions_requested', 'true');
        localStorage.setItem('media_permissions_requested', 'true');
        if (userId) {
          try {
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, {
              chatMediaPermissionsConfigured: true
            });
          } catch (e) {}
        }
        if (showNotification) {
          showNotification('تم حفظ إعدادات الدردشة بنجاح!', 'success');
        }
        if (onComplete) {
          onComplete(false);
        } else {
          onClose();
        }
      }
    } catch (err: any) {
      console.warn('User permission response:', err);
      // Mark as requested once so we don't prompt the student repeatedly
      localStorage.setItem('chat_media_permissions_requested', 'true');
      localStorage.setItem('media_permissions_requested', 'true');
      localStorage.setItem('media_permissions_granted', 'false');

      if (userId) {
        try {
          const userRef = doc(db, 'users', userId);
          await updateDoc(userRef, {
            mediaPermissionsGranted: false,
            mediaPermissionsRequestedAt: new Date().toISOString(),
            chatMediaPermissionsConfigured: true
          });
        } catch (e) {}
      }

      if (showNotification) {
        showNotification('تم حفظ تفضيلاتك، يمكنك تفعيل الكاميرا والمايكروفون عند بدء مكالمة.', 'info');
      }
      if (onComplete) {
        onComplete(false);
      } else {
        onClose();
      }
    } finally {
      setIsRequesting(false);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('chat_media_permissions_requested', 'true');
    localStorage.setItem('media_permissions_requested', 'true');
    if (userId) {
      try {
        const userRef = doc(db, 'users', userId);
        updateDoc(userRef, {
          mediaPermissionsGranted: false,
          mediaPermissionsRequestedAt: new Date().toISOString(),
          chatMediaPermissionsConfigured: true
        }).catch(() => {});
      } catch (e) {}
    }
    if (onComplete) {
      onComplete(false);
    } else {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[170] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
        dir="rtl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-md w-full shadow-2xl border border-blue-100 text-center space-y-5"
        >
          {/* Header Icon */}
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-blue-500/25">
            <div className="flex items-center gap-1.5">
              <Mic size={22} className="text-white animate-pulse" />
              <Video size={22} className="text-white" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-black px-3.5 py-1 rounded-full">
              <MessageSquare size={12} className="text-blue-600" />
              <span>إذن الدردشة والمكالمات التفاعلية</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              تفعيل الميكروفون والكاميرا
            </h3>
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              لتتمكن من التحدث في الغرف الصوتية، وحصص المراجعة والمكالمات المباشرة مع الأساتذة، نطلب الإذن منك الآن <strong className="text-blue-600">لمرة واحدة فقط</strong> في الدردشة!
            </p>
          </div>

          {/* Feature Badges */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2.5 text-right text-xs">
            <div className="flex items-center gap-2.5 text-slate-700 font-bold">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <Mic size={14} />
              </div>
              <span><strong>الميكروفون:</strong> للتحدث والمشاركة الصوتية أثناء الحصص والغرف</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 font-bold">
              <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <Video size={14} />
              </div>
              <span><strong>الكاميرا:</strong> لمكالمات الفيديو التفاعلية (يمكنك كتمها في أي وقت)</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-500 font-bold text-[11px] pt-1.5 border-t border-slate-200/60">
              <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
              <span>خصوصيتك محمية بالكامل ولن تُفتح الكاميرا إلا عندما تبدأ أو تقبل مكالمة.</span>
            </div>
          </div>

          {statusMessage && (
            <div className="p-3 bg-amber-50 text-amber-800 text-xs font-black rounded-xl border border-amber-200 flex items-center justify-center gap-2">
              <Loader2 size={16} className="animate-spin text-amber-600" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            <button
              onClick={handleGrantPermissions}
              disabled={isRequesting}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 active:scale-98 text-white font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
            >
              {isRequesting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>جاري تأكيد الإذن...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} />
                  <span>سماح بالميكروفون والكاميرا 🎙️📹</span>
                </>
              )}
            </button>

            <button
              onClick={handleSkip}
              disabled={isRequesting}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-black text-xs rounded-xl transition-all cursor-pointer"
            >
              المتابعة بدون تفعيل الآن
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
