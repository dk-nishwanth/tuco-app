import React from 'react';

interface Screen1AptivoSplashProps {
  onNext?: () => void;
  isWireframe?: boolean;
}

export const Screen1AptivoSplash: React.FC<Screen1AptivoSplashProps> = ({
  onNext,
  isWireframe = false,
}) => {
  const bg = isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#F06553] text-white';
  const stroke = isWireframe ? '#52525B' : '#1E293B';
  const logoColor = isWireframe ? 'text-zinc-800' : 'text-white';

  return (
    <div
      onClick={onNext}
      className={`relative w-full h-full flex flex-col justify-between items-center p-6 cursor-pointer select-none font-['Poppins'] ${bg}`}
    >
      {/* Top iOS Status Bar Area */}
      <div className="w-full flex items-center justify-between pt-2 px-1">
        <span className="text-xs font-semibold tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 opacity-90 text-xs">
          <span>●●●</span>
          <span>Wi-Fi</span>
        </div>
      </div>

      {/* Giant Cartoon Mascot Eyes & Smile in Center matching Screen 1 in image 570.png */}
      <div className="my-auto flex flex-col items-center justify-center space-y-3">
        <div className="w-48 h-36 flex items-center justify-center">
          <svg viewBox="0 0 200 140" fill="none" className="w-full h-full">
            {/* Left Eye */}
            <g>
              {/* Eyelashes */}
              <path d="M60 48 L48 34" stroke={stroke} strokeWidth="4.5" strokeLinecap="round" />
              <path d="M74 42 L72 26" stroke={stroke} strokeWidth="4.5" strokeLinecap="round" />
              <path d="M88 44 L95 28" stroke={stroke} strokeWidth="4.5" strokeLinecap="round" />

              {/* White Sclera */}
              <ellipse cx="76" cy="68" rx="22" ry="25" fill="#FFFFFF" stroke={stroke} strokeWidth="4.5" />
              {/* Black Pupil */}
              <circle cx="78" cy="70" r="14" fill={stroke} />
              {/* Shine Highlights */}
              <circle cx="75" cy="65" r="5.5" fill="#FFFFFF" />
              <circle cx="82" cy="74" r="2.2" fill="#FFFFFF" />
            </g>

            {/* Right Eye */}
            <g>
              {/* Eyelashes */}
              <path d="M112 44 L105 28" stroke={stroke} strokeWidth="4.5" strokeLinecap="round" />
              <path d="M126 42 L128 26" stroke={stroke} strokeWidth="4.5" strokeLinecap="round" />
              <path d="M140 48 L152 34" stroke={stroke} strokeWidth="4.5" strokeLinecap="round" />

              {/* White Sclera */}
              <ellipse cx="124" cy="68" rx="22" ry="25" fill="#FFFFFF" stroke={stroke} strokeWidth="4.5" />
              {/* Black Pupil */}
              <circle cx="122" cy="70" r="14" fill={stroke} />
              {/* Shine Highlights */}
              <circle cx="119" cy="65" r="5.5" fill="#FFFFFF" />
              <circle cx="126" cy="74" r="2.2" fill="#FFFFFF" />
            </g>

            {/* Cute Smile */}
            <path
              d="M93 102 Q100 110 107 102"
              fill="none"
              stroke={stroke}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Brand Wordmark matching Aptivo font in Reference 570 */}
        <div className="text-center pt-2">
          <h1
            className={`font-['Poppins'] text-4xl font-black tracking-wider uppercase ${logoColor}`}
            style={{ letterSpacing: '0.08em' }}
          >
            Aptivo
          </h1>
          <p className="text-[11px] font-medium opacity-80 mt-1">
            kids learning & care adventure
          </p>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="pb-4">
        <span className="text-[10px] font-semibold uppercase tracking-widest opacity-60">
          Tap screen to start
        </span>
      </div>
    </div>
  );
};
