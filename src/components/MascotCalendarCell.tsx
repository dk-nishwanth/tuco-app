import React from 'react';

export type MascotFaceType = 'happy' | 'cool' | 'star' | 'blush' | 'wink' | 'sleep' | 'bubble';

interface MascotCalendarCellProps {
  day: number;
  type?: MascotFaceType | null;
  isDone?: boolean;
  isWireframe?: boolean;
}

export const MascotCalendarCell: React.FC<MascotCalendarCellProps> = ({
  day,
  type = 'happy',
  isDone = false,
  isWireframe = false,
}) => {
  if (!isDone || !type) {
    return (
      <div
        className={`aspect-square rounded-xl flex flex-col items-center justify-center p-1 transition-all ${
          isWireframe
            ? 'bg-zinc-100 border border-zinc-200 text-zinc-400'
            : 'bg-stone-50 border border-stone-100 text-stone-300'
        }`}
      >
        <span className="text-[9px] font-mono opacity-50">-</span>
        <span className="text-[8px] font-mono opacity-50">{day}</span>
      </div>
    );
  }

  // Pastel card colors matching Reference 571/575 (Soft yellow, sky blue, peach, mint)
  const bgColors: Record<MascotFaceType, string> = {
    happy: isWireframe ? 'bg-zinc-200 border-zinc-300' : 'bg-[#FEF08A] border-[#FDE047]',
    cool: isWireframe ? 'bg-zinc-200 border-zinc-300' : 'bg-[#BAE6FD] border-[#7DD3FC]',
    star: isWireframe ? 'bg-zinc-200 border-zinc-300' : 'bg-[#FED7AA] border-[#FDBA74]',
    blush: isWireframe ? 'bg-zinc-200 border-zinc-300' : 'bg-[#FBCFE8] border-[#F472B6]',
    wink: isWireframe ? 'bg-zinc-200 border-zinc-300' : 'bg-[#FEF08A] border-[#FDE047]',
    sleep: isWireframe ? 'bg-zinc-200 border-zinc-300' : 'bg-[#E9D5FF] border-[#D8B4FE]',
    bubble: isWireframe ? 'bg-zinc-200 border-zinc-300' : 'bg-[#A7F3D0] border-[#6EE7B7]',
  };

  const stroke = isWireframe ? '#52525B' : '#1E293B';

  return (
    <div
      className={`aspect-square rounded-xl flex flex-col items-center justify-between p-1 border shadow-2xs transition-transform ${bgColors[type]}`}
      title={`Day ${day}: Routine completed!`}
    >
      {/* Mini SVG Mascot Face matching Reference 571 */}
      <svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 mt-0.5">
        {/* Face Silhouette (Yellow/White cute droplet or cloud) */}
        <ellipse cx="18" cy="14" rx="14" ry="12" fill={isWireframe ? '#FFFFFF' : '#FFFFFF'} opacity="0.9" />

        {/* Eyes & Expressions */}
        {type === 'happy' && (
          <>
            <circle cx="13" cy="12" r="1.8" fill={stroke} />
            <circle cx="23" cy="12" r="1.8" fill={stroke} />
            <path d="M15 17 Q18 21 21 17" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <circle cx="10" cy="15" r="1.5" fill="#FDA4AF" />
            <circle cx="26" cy="15" r="1.5" fill="#FDA4AF" />
          </>
        )}

        {type === 'cool' && (
          <>
            {/* Sunglasses */}
            <rect x="9" y="10" width="8" height="5" rx="1.5" fill={stroke} />
            <rect x="19" y="10" width="8" height="5" rx="1.5" fill={stroke} />
            <line x1="17" y1="12" x2="19" y2="12" stroke={stroke} strokeWidth="1.5" />
            <path d="M16 18 Q18 20 20 18" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
          </>
        )}

        {type === 'star' && (
          <>
            {/* Star eyes */}
            <path d="M13 9 L14 12 L17 12 L14.5 14 L15.5 17 L13 15 L10.5 17 L11.5 14 L9 12 L12 12 Z" fill="#F59E0B" />
            <path d="M23 9 L24 12 L27 12 L24.5 14 L25.5 17 L23 15 L20.5 17 L21.5 14 L19 12 L22 12 Z" fill="#F59E0B" />
            <ellipse cx="18" cy="18" rx="2" ry="2.5" fill={stroke} />
          </>
        )}

        {type === 'blush' && (
          <>
            <path d="M11 13 Q13 10 15 13" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M21 13 Q23 10 25 13" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M16 17 Q18 19 20 17" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <circle cx="9.5" cy="14" r="2" fill="#F43F5E" opacity="0.8" />
            <circle cx="26.5" cy="14" r="2" fill="#F43F5E" opacity="0.8" />
          </>
        )}

        {type === 'wink' && (
          <>
            <circle cx="13" cy="12" r="1.8" fill={stroke} />
            <path d="M20 12 Q23 9 26 12" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M15 17 Q18 20 21 17" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <circle cx="10" cy="15" r="1.5" fill="#FDA4AF" />
          </>
        )}

        {type === 'sleep' && (
          <>
            <line x1="11" y1="13" x2="15" y2="13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="21" y1="13" x2="25" y2="13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="18" cy="17" r="1.5" fill={stroke} />
            <text x="26" y="9" fontSize="6" fontWeight="bold" fill="#8B5CF6">z</text>
          </>
        )}

        {type === 'bubble' && (
          <>
            <circle cx="13" cy="12" r="1.8" fill={stroke} />
            <circle cx="23" cy="12" r="1.8" fill={stroke} />
            <path d="M16 16 Q18 19 20 16" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <circle cx="26" cy="8" r="2.5" fill="#38BDF8" opacity="0.7" />
          </>
        )}
      </svg>

      {/* Date Day Number */}
      <span className="text-[8px] font-bold font-mono text-stone-800 leading-none">
        {day}
      </span>
    </div>
  );
};
