import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  Maximize2,
  Minimize2,
  MonitorUp,
  Users,
  Volume2,
  VolumeX,
  Radio,
  Sparkles,
  Shield,
  RefreshCw,
  Copy,
  Check,
  Crown,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { doc, setDoc, updateDoc, onSnapshot, deleteDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface CallParticipant {
  uid: string;
  name: string;
  avatar?: string | null;
  role?: string;
  studentId?: string | null;
  cameraOn: boolean;
  micOn: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean;
  joinedAt: string;
}

export interface LiveCallRoomProps {
  roomId: string;
  roomName: string;
  isGroup: boolean;
  initialCallType: 'video' | 'audio';
  currentUser: {
    uid: string;
    displayName: string;
    selectedAvatar?: string | null;
    role?: string;
    studentId?: string | null;
  };
  onEndCall: () => void;
  showNotification: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const LiveCallRoom: React.FC<LiveCallRoomProps> = ({
  roomId,
  roomName,
  isGroup,
  initialCallType,
  currentUser,
  onEndCall,
  showNotification,
}) => {
  const [callType, setCallType] = useState<'video' | 'audio'>(initialCallType);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(initialCallType === 'video');
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [participants, setParticipants] = useState<CallParticipant[]>([]);
  const [mediaPermissionError, setMediaPermissionError] = useState<string | null>(null);
  const [activeSpeakerUid, setActiveSpeakerUid] = useState<string | null>(currentUser.uid);
  const [copiedLink, setCopiedLink] = useState(false);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const screenShareVideoRef = useRef<HTMLVideoElement>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const screenStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Play subtle web audio chimes when call starts or joins
  const playChime = useCallback((type: 'start' | 'join' | 'leave') => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'start') {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'join') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.25);
      } else {
        osc.frequency.setValueAtTime(659.25, ctx.currentTime);
        osc.frequency.setValueAtTime(440, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // Ignore audio context block
    }
  }, []);

  // Initialize Media Stream (Camera & Mic)
  const startMedia = useCallback(async (videoDesired: boolean, audioDesired: boolean, face: 'user' | 'environment') => {
    try {
      setMediaPermissionError(null);
      // Stop old tracks
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(t => t.stop());
      }

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('متصفحك لا يدعم الوصول للكاميرا والميكروفون مباشرة في هذا الوضع');
      }

      const constraints: MediaStreamConstraints = {
        audio: audioDesired ? { echoCancellation: true, noiseSuppression: true } : false,
        video: videoDesired ? { facingMode: face, width: { ideal: 640 }, height: { ideal: 480 } } : false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current = stream;

      if (localVideoRef.current && videoDesired) {
        localVideoRef.current.srcObject = stream;
      }

      // Audio Level Analyser for talking indicator
      if (audioDesired && stream.getAudioTracks().length > 0) {
        try {
          const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioCtx) {
            const audioCtx = new AudioCtx();
            audioContextRef.current = audioCtx;
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            analyserRef.current = analyser;
            const source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);

            const dataArray = new Uint8Array(analyser.frequencyBinCount);
            const checkVolume = () => {
              if (analyserRef.current && isMicOn) {
                analyserRef.current.getByteFrequencyData(dataArray);
                let sum = 0;
                for (let i = 0; i < dataArray.length; i++) {
                  sum += dataArray[i];
                }
                const avg = sum / dataArray.length;
                if (avg > 18) {
                  setActiveSpeakerUid(currentUser.uid);
                }
              }
              animFrameRef.current = requestAnimationFrame(checkVolume);
            };
            checkVolume();
          }
        } catch {
          // Ignore audio analyser fail
        }
      }
    } catch (err: any) {
      console.warn('MediaStream error:', err);
      setMediaPermissionError(
        err.name === 'NotAllowedError'
          ? 'تم رفض إذن الوصول للكاميرا أو الميكروفون من المتصفح. يمكنك تفعيل الإذن من إعدادات المتصفح أو إكمال المكالمة في وضع الاستماع.'
          : err.message || 'تعذر تشغيل الكاميرا/الميكروفون في هذا الجهاز'
      );
    }
  }, [currentUser.uid, isMicOn]);

  // Handle Call Lifecycle & Firestore sync
  useEffect(() => {
    playChime('start');
    startMedia(isCameraOn, isMicOn, facingMode);

    const callDocRef = doc(db, 'live_calls', roomId);
    const myParticipant: CallParticipant = {
      uid: currentUser.uid,
      name: currentUser.displayName || 'مستخدم',
      avatar: currentUser.selectedAvatar || null,
      role: currentUser.role || 'student',
      studentId: currentUser.studentId || null,
      cameraOn: isCameraOn,
      micOn: isMicOn,
      isScreenSharing: false,
      isHost: true,
      joinedAt: new Date().toISOString(),
    };

    // Initialize or join call doc
    setDoc(callDocRef, {
      roomId,
      roomName,
      isGroup,
      callType,
      active: true,
      startedAt: new Date().toISOString(),
      participants: arrayUnion(myParticipant),
    }, { merge: true }).catch(() => {});

    // Listen to participants
    const unsub = onSnapshot(callDocRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        const parts: CallParticipant[] = data.participants || [];
        setParticipants(parts);
      }
    });

    // Duration timer
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => {
      unsub();
      clearInterval(timer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (audioContextRef.current) audioContextRef.current.close().catch(() => {});
      if (localStreamRef.current) localStreamRef.current.getTracks().forEach((t) => t.stop());
      if (screenStreamRef.current) screenStreamRef.current.getTracks().forEach((t) => t.stop());

      // Remove self from participants in Firestore
      updateDoc(callDocRef, {
        participants: arrayRemove(myParticipant),
      }).catch(() => {});
    };
  }, [roomId]);

  // Sync state changes (mic, camera, screen) to Firestore
  useEffect(() => {
    const callDocRef = doc(db, 'live_calls', roomId);
    const updated: CallParticipant = {
      uid: currentUser.uid,
      name: currentUser.displayName || 'مستخدم',
      avatar: currentUser.selectedAvatar || null,
      role: currentUser.role || 'student',
      studentId: currentUser.studentId || null,
      cameraOn: isCameraOn,
      micOn: isMicOn,
      isScreenSharing: isScreenSharing,
      isHost: true,
      joinedAt: new Date().toISOString(),
    };

    setDoc(callDocRef, {
      participants: [
        ...participants.filter(p => p.uid !== currentUser.uid),
        updated,
      ],
      callType,
    }, { merge: true }).catch(() => {});
  }, [isMicOn, isCameraOn, isScreenSharing, callType]);

  // Toggle Microphone
  const toggleMic = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach(track => {
        track.enabled = !isMicOn;
      });
      setIsMicOn(!isMicOn);
    } else {
      setIsMicOn(!isMicOn);
      startMedia(isCameraOn, !isMicOn, facingMode);
    }
  };

  // Toggle Camera
  const toggleCamera = () => {
    const nextState = !isCameraOn;
    setIsCameraOn(nextState);
    if (nextState) {
      setCallType('video');
    }
    startMedia(nextState, isMicOn, facingMode);
  };

  // Switch Camera Facing (Front / Back)
  const switchCameraFacing = () => {
    const nextMode = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(nextMode);
    if (isCameraOn) {
      startMedia(true, isMicOn, nextMode);
    }
  };

  // Toggle Screen Sharing
  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach(t => t.stop());
      }
      setIsScreenSharing(false);
    } else {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
          showNotification('مشاركة الشاشة غير مدعومة على هذا الجهاز/المتصفح', 'error');
          return;
        }
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        screenStreamRef.current = screenStream;
        setIsScreenSharing(true);

        if (screenShareVideoRef.current) {
          screenShareVideoRef.current.srcObject = screenStream;
        }

        screenStream.getVideoTracks()[0].onended = () => {
          setIsScreenSharing(false);
        };
      } catch (err: any) {
        if (err.name !== 'NotAllowedError') {
          showNotification('تعذر بدء مشاركة الشاشة', 'error');
        }
      }
    }
  };

  const handleEndCallAction = () => {
    playChime('leave');
    onEndCall();
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const allDisplayParticipants = participants.length > 0 ? participants : [{
    uid: currentUser.uid,
    name: currentUser.displayName || 'أنت',
    avatar: currentUser.selectedAvatar,
    role: currentUser.role,
    cameraOn: isCameraOn,
    micOn: isMicOn,
    isScreenSharing,
    joinedAt: new Date().toISOString(),
  }];

  // ----------------------------------------------------
  // MINIMIZED PICTURE-IN-PICTURE FLOATING VIEW
  // ----------------------------------------------------
  if (isMinimized) {
    return (
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -200, bottom: 200 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="fixed bottom-20 left-4 sm:left-8 z-[200] bg-slate-900/95 text-white rounded-3xl p-3 shadow-2xl border-2 border-blue-500/50 backdrop-blur-md flex items-center gap-3 cursor-move select-none"
      >
        <div className="relative w-12 h-12 rounded-2xl bg-blue-600/30 overflow-hidden flex items-center justify-center border border-blue-400/40 shrink-0">
          {isCameraOn ? (
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-sm font-black text-blue-300">
              {currentUser.displayName?.charAt(0) || 'أنت'}
            </div>
          )}
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse ring-2 ring-slate-900" />
        </div>

        <div className="text-right">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <p className="font-black text-xs text-slate-100 truncate max-w-[130px]">{roomName}</p>
          </div>
          <p className="text-[10px] font-mono text-emerald-400 font-bold">{formatTime(callDuration)} • {allDisplayParticipants.length} أعضاء</p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleMic}
            className={`p-2 rounded-xl transition-colors ${
              isMicOn ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-red-500/80 text-white'
            }`}
            title={isMicOn ? 'كتم الميكروفون' : 'تشغيل الميكروفون'}
          >
            {isMicOn ? <Mic size={14} /> : <MicOff size={14} />}
          </button>

          <button
            onClick={() => setIsMinimized(false)}
            className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors shadow-sm"
            title="تكبير المكالمة"
          >
            <Maximize2 size={14} />
          </button>

          <button
            onClick={handleEndCallAction}
            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors shadow-sm"
            title="إنهاء المكالمة"
          >
            <PhoneOff size={14} />
          </button>
        </div>
      </motion.div>
    );
  }

  // ----------------------------------------------------
  // FULL-SCREEN RICH INTERACTIVE STUDIO CALL VIEW
  // ----------------------------------------------------
  return (
    <div className="fixed inset-0 z-[220] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between overflow-hidden text-white font-sans">
      {/* Top Header Bar */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900/80 border-b border-slate-800/80 flex items-center justify-between z-20 backdrop-blur-md">
        <div className="flex items-center gap-3 text-right">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
            {callType === 'video' ? <Video size={20} /> : <Radio size={20} className="animate-pulse" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-sm sm:text-base text-slate-100 max-w-[200px] sm:max-w-md truncate">
                {roomName}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>مباشر</span>
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 font-bold flex items-center gap-2">
              <span>{formatTime(callDuration)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users size={12} />
                <span>{allDisplayParticipants.length} من 50 في الغرفة</span>
              </span>
            </p>
          </div>
        </div>

        {/* Top Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopiedLink(true);
              showNotification('تم نسخ رابط الغرفة بنجاح!', 'success');
              setTimeout(() => setCopiedLink(false), 2500);
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-black border border-slate-700 transition-colors"
            title="مشاركة رابط المكالمة"
          >
            {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copiedLink ? 'تم النسخ' : 'نسخ الرابط'}</span>
          </button>

          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 sm:px-3 sm:py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-black border border-slate-700 transition-colors flex items-center gap-1.5"
            title="تصغير المكالمة ومتابعة الدردشة"
          >
            <Minimize2 size={16} />
            <span className="hidden sm:inline">تصغير</span>
          </button>
        </div>
      </div>

      {/* Permission Warning Banner (if any) */}
      {mediaPermissionError && (
        <div className="bg-amber-500/20 border-b border-amber-500/40 text-amber-200 text-xs px-4 py-2 flex items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-2">
            <AlertCircle size={16} className="text-amber-400 shrink-0" />
            <p className="font-bold">{mediaPermissionError}</p>
          </div>
          <button
            onClick={() => startMedia(isCameraOn, isMicOn, facingMode)}
            className="px-3 py-1 bg-amber-500 text-slate-950 font-black rounded-lg text-[11px] hover:bg-amber-400 transition-colors shrink-0"
          >
            إعادة المحاولة
          </button>
        </div>
      )}

      {/* Main Video / Audio Grid Stage */}
      <div className="flex-1 p-3 sm:p-6 overflow-y-auto flex items-center justify-center">
        {/* Screen share view (if active) */}
        {isScreenSharing ? (
          <div className="w-full max-w-5xl h-full flex flex-col items-center justify-center gap-3">
            <div className="relative w-full flex-1 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
              <video
                ref={screenShareVideoRef}
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-xs font-black flex items-center gap-2 text-emerald-400">
                <MonitorUp size={14} />
                <span>مشاركة شاشتك الآن</span>
              </div>
            </div>
          </div>
        ) : (
          /* Responsive Multi-Participant Conference Grid */
          <div className={`w-full max-w-6xl mx-auto grid gap-3 sm:gap-4 ${
            allDisplayParticipants.length === 1 
              ? 'grid-cols-1 max-w-2xl' 
              : allDisplayParticipants.length === 2 
                ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl' 
                : allDisplayParticipants.length <= 4 
                  ? 'grid-cols-2 max-w-4xl' 
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
          }`}>
            {allDisplayParticipants.map((part) => {
              const isMe = part.uid === currentUser.uid;
              const isSpeaking = activeSpeakerUid === part.uid;

              return (
                <div
                  key={part.uid}
                  className={`relative aspect-video rounded-3xl overflow-hidden bg-slate-900/90 border-2 transition-all flex flex-col items-center justify-center p-4 shadow-xl group ${
                    isSpeaking 
                      ? 'border-emerald-500 shadow-emerald-500/20 ring-4 ring-emerald-500/20' 
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Camera Video Stream (For self or active video) */}
                  {isMe && isCameraOn ? (
                    <video
                      ref={localVideoRef}
                      autoPlay
                      playsInline
                      muted
                      className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
                    />
                  ) : part.cameraOn ? (
                    <div className="absolute inset-0 w-full h-full bg-slate-800 flex items-center justify-center">
                      <video
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    /* Avatar / Audio Call Card */
                    <div className="relative flex flex-col items-center justify-center gap-3 text-center z-10">
                      <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-700 p-1 flex items-center justify-center shadow-lg transition-transform ${
                        isSpeaking ? 'scale-110' : ''
                      }`}>
                        {part.avatar ? (
                          <img
                            src={part.avatar}
                            alt={part.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center font-black text-xl text-blue-400">
                            {part.name.charAt(0)}
                          </div>
                        )}

                        {/* Animated Speech Pulse Rings */}
                        {isSpeaking && (
                          <>
                            <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-75"></span>
                            <span className="absolute -inset-2 rounded-full border border-emerald-500/50 animate-pulse"></span>
                          </>
                        )}
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center justify-center gap-1">
                          <p className="font-black text-xs sm:text-sm text-slate-100 max-w-[130px] truncate">
                            {part.name} {isMe && '(أنت)'}
                          </p>
                          {part.role === 'teacher' && (
                            <span className="text-[9px] bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded-full font-black flex items-center gap-0.5">
                              <Crown size={10} />
                              <span>أستاذ</span>
                            </span>
                          )}
                        </div>
                        {part.studentId && (
                          <p className="text-[10px] font-mono text-slate-400 font-bold">{part.studentId}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Top-Right Badge: Name & Status Overlay */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 text-xs font-bold">
                    <span className="text-[11px] font-black truncate max-w-[100px]">{part.name}</span>
                    {isMe && <span className="text-[9px] text-blue-400 font-black">• أنت</span>}
                  </div>

                  {/* Bottom-Right Media Status Indicators */}
                  <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
                    <span className={`p-1.5 rounded-lg text-xs backdrop-blur-md border ${
                      (isMe ? isMicOn : part.micOn)
                        ? 'bg-slate-900/80 text-emerald-400 border-white/10' 
                        : 'bg-red-600/90 text-white border-red-500/50'
                    }`}>
                      {(isMe ? isMicOn : part.micOn) ? <Mic size={12} /> : <MicOff size={12} />}
                    </span>

                    <span className={`p-1.5 rounded-lg text-xs backdrop-blur-md border ${
                      (isMe ? isCameraOn : part.cameraOn)
                        ? 'bg-slate-900/80 text-blue-400 border-white/10' 
                        : 'bg-slate-900/80 text-slate-500 border-white/10'
                    }`}>
                      {(isMe ? isCameraOn : part.cameraOn) ? <Video size={12} /> : <VideoOff size={12} />}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Floating Interactive Call Controls */}
      <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800/80 backdrop-blur-xl z-30">
        <div className="max-w-xl mx-auto flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap">
          {/* Microphone Toggle Button */}
          <button
            onClick={toggleMic}
            className={`p-3.5 sm:p-4 rounded-2xl transition-all shadow-lg active:scale-95 flex flex-col items-center gap-1 font-black text-xs ${
              isMicOn
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                : 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/30'
            }`}
            title={isMicOn ? 'كتم الميكروفون' : 'تشغيل الميكروفون'}
          >
            {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
            <span className="text-[10px]">{isMicOn ? 'كتم' : 'تحدث'}</span>
          </button>

          {/* Camera Video Toggle Button */}
          <button
            onClick={toggleCamera}
            className={`p-3.5 sm:p-4 rounded-2xl transition-all shadow-lg active:scale-95 flex flex-col items-center gap-1 font-black text-xs ${
              isCameraOn
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
            }`}
            title={isCameraOn ? 'إيقاف الكاميرا' : 'تشغيل الكاميرا'}
          >
            {isCameraOn ? <Video size={20} /> : <VideoOff size={20} />}
            <span className="text-[10px]">{isCameraOn ? 'الكاميرا نشطة' : 'كاميرا'}</span>
          </button>

          {/* Flip / Switch Camera (Mobile) */}
          {isCameraOn && (
            <button
              onClick={switchCameraFacing}
              className="p-3.5 sm:p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all active:scale-95 flex flex-col items-center gap-1 font-black text-xs"
              title="تبديل الكاميرا (أمامية / خلفية)"
            >
              <RefreshCw size={20} />
              <span className="text-[10px]">قلب الكاميرا</span>
            </button>
          )}

          {/* Screen Sharing Toggle */}
          <button
            onClick={toggleScreenShare}
            className={`p-3.5 sm:p-4 rounded-2xl transition-all shadow-lg active:scale-95 flex flex-col items-center gap-1 font-black text-xs ${
              isScreenSharing
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
            title={isScreenSharing ? 'إيقاف مشاركة الشاشة' : 'مشاركة الشاشة'}
          >
            <MonitorUp size={20} />
            <span className="text-[10px]">{isScreenSharing ? 'إيقاف المشاركة' : 'مشاركة الشاشة'}</span>
          </button>

          {/* Speaker Mute/Unmute */}
          <button
            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
            className={`p-3.5 sm:p-4 rounded-2xl transition-all active:scale-95 flex flex-col items-center gap-1 font-black text-xs ${
              isSpeakerOn
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                : 'bg-amber-600 text-white'
            }`}
            title={isSpeakerOn ? 'كتم الصوت العام' : 'تشغيل الصوت العام'}
          >
            {isSpeakerOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            <span className="text-[10px]">{isSpeakerOn ? 'الصوت' : 'مكتوم'}</span>
          </button>

          {/* End Call Big Red Button */}
          <button
            onClick={handleEndCallAction}
            className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm shadow-xl shadow-red-600/40 active:scale-95 transition-all flex items-center gap-2"
            title="إنهاء المكالمة ومغادرة الغرفة"
          >
            <PhoneOff size={20} />
            <span>إنهاء المكالمة</span>
          </button>
        </div>
      </div>
    </div>
  );
};
