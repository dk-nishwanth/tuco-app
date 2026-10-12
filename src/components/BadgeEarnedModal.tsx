import React from 'react';
import { TucoMascot } from './TucoMascot';
import { Sparkles, Award, ArrowRight, X } from 'lucide-react';

interface BadgeEarnedModalProps {
  isOpen: boolean;
  onClose: () => void;
  childName: string;
  streakCount: number;
}

export const BadgeEarnedModal: React.FC<BadgeEarnedModalProps> = ({
  isOpen,
  onClose,
  childName,
  streakCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-sm rounded-[36px] p-6 bg-white text-stone-900 shadow-2xl space-y-5 text-center relative overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Confetti & sparkles background */}
        <div className="absolute top-2 left-3 text-2xl animate-bounce">✨</div>
        <div className="absolute top-3 right-4 text-2xl animate-bounce delay-100">🎉</div>
        <div className="absolute bottom-4 left-4 text-xl">🌟</div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-100 text-stone-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mascot celebrating */}
        <div className="pt-2">
          <TucoMascot
            size="lg"
            expression="celebrating"
            className="w-28 h-28 mx-auto"
          />
        </div>

        {/* Badge Banner */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-fredoka font-bold">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>30-Second Mission Accomplished!</span>
          </div>

          <h3 className="font-fredoka text-2xl font-bold text-[#3E2500]">
            You Earned Today's Badge! 🏅
          </h3>

          <p className="text-xs text-stone-600 font-body max-w-xs mx-auto">
            {childName || 'Ishaan'} completed the evening routine with mum!
          </p>
        </div>

        {/* Streak Highlight */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/60 text-xs font-fredoka font-bold text-amber-950 flex items-center justify-center gap-2">
          <span>🔥 {streakCount} Days in a row!</span>
          <span className="text-[10px] text-amber-700 font-body">• Next card at 7 days!</span>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3.5 px-5 rounded-full bg-[#3E2500] hover:bg-amber-950 text-[#FED543] font-fredoka font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>High Five & Save Streak!</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
