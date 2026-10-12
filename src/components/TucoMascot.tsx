import React from 'react';

export type MascotExpression = 'happy' | 'waving' | 'thinking' | 'celebrating' | 'gentle';

interface TucoMascotProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  expression?: MascotExpression;
  isWaving?: boolean;
  isWireframe?: boolean;
  showShadow?: boolean;
}

export const TucoMascot: React.FC<TucoMascotProps> = ({
  className = '',
  size = 'md',
  expression = 'waving',
  isWaving = true,
  isWireframe = false,
  showShadow = true,
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
  };

  const cloudFill = isWireframe ? '#FAFAFA' : '#FFFFFF';
  const strokeColor = '#1F2937';
  const blushColor = isWireframe ? '#E5E7EB' : '#FECDD3';

  // Eye and mouth configurations based on expression
  const isThinking = expression === 'thinking';
  const isCelebrating = expression === 'celebrating';
  const isGentle = expression === 'gentle';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      {/* Soft ground shadow */}
      {showShadow && !isWireframe && (
        <div className="absolute -bottom-1 w-3/4 h-2 bg-amber-900/10 rounded-full blur-[2px]" />
      )}

      {/* Floating sparkles for celebrating expression */}
      {isCelebrating && !isWireframe && (
        <>
          <span className="absolute -top-2 -left-2 text-xs animate-bounce">✨</span>
          <span className="absolute -top-3 right-0 text-sm animate-pulse">🌟</span>
          <span className="absolute top-1/2 -right-3 text-xs animate-bounce">🎉</span>
        </>
      )}

      {/* Thinking bubble for thinking expression */}
      {isThinking && (
        <div className="absolute -top-3 -right-2 flex items-center gap-0.5 bg-amber-100 text-amber-900 text-[9px] px-1.5 py-0.5 rounded-full font-bold shadow-xs">
          <span>💭</span>
          <span className="animate-pulse">...</span>
        </div>
      )}

      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full filter drop-shadow-sm transition-transform duration-300 ${
          isCelebrating ? 'animate-bounce' : 'hover:scale-105'
        }`}
      >
        {/* Legs & Shoes */}
        <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Left leg */}
          <line x1="50" y1="88" x2={isCelebrating ? "48" : "50"} y2={isCelebrating ? "100" : "104"} />
          <path d="M46 104 C46 107 54 107 55 104" fill={strokeColor} />

          {/* Right leg */}
          <line x1="68" y1="88" x2={isCelebrating ? "70" : "68"} y2={isCelebrating ? "100" : "104"} />
          <path d="M64 104 C64 107 72 107 73 104" fill={strokeColor} />
        </g>

        {/* Fluffy Cloud Body - Puffy scalloped edges matching Tuco's character */}
        <path
          d="M32 64
             C24 64 18 56 20 48
             C22 40 28 36 34 37
             C36 30 44 24 52 25
             C56 20 66 19 72 23
             C78 20 88 23 90 30
             C98 33 102 42 98 50
             C104 56 102 66 96 70
             C98 78 90 85 82 84
             C77 89 66 89 60 86
             C54 89 44 88 40 83
             C32 84 25 76 27 68
             C29 66 30 65 32 64 Z"
          fill={cloudFill}
          stroke={strokeColor}
          strokeWidth="3.2"
          strokeLinejoin="round"
        />

        {/* Cloud bump texture details (fluffy inner lines) */}
        <path
          d="M34 50 C38 46 44 48 46 52"
          stroke={isWireframe ? '#D1D5DB' : '#F3F4F6'}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M74 34 C78 32 84 34 86 38"
          stroke={isWireframe ? '#D1D5DB' : '#F3F4F6'}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Rosy Cheeks */}
        <ellipse cx="44" cy="59" rx="4.5" ry="3" fill={blushColor} />
        <ellipse cx="76" cy="59" rx="4.5" ry="3" fill={blushColor} />

        {/* EYES */}
        {isCelebrating ? (
          // Joyful arched eyes ^^
          <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M45 53 C47 48 51 48 53 53" />
            <path d="M67 53 C69 48 73 48 75 53" />
          </g>
        ) : isThinking ? (
          // Curious eyes looking up to the right
          <>
            <ellipse cx="49" cy="50" rx="3.2" ry="3.8" fill={strokeColor} />
            <circle cx="51" cy="48" r="1.3" fill="#FFFFFF" />
            <ellipse cx="73" cy="50" rx="3.2" ry="3.8" fill={strokeColor} />
            <circle cx="75" cy="48" r="1.3" fill="#FFFFFF" />
            {/* Thoughtful brows */}
            <path d="M46 44 C49 43 52 45 54 46" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M68 45 C71 43 75 43 78 44" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          </>
        ) : isGentle ? (
          // Soft smiling eyes
          <>
            <ellipse cx="48" cy="53" rx="3" ry="3.5" fill={strokeColor} />
            <circle cx="49.5" cy="51.5" r="1.2" fill="#FFFFFF" />
            <ellipse cx="72" cy="53" rx="3" ry="3.5" fill={strokeColor} />
            <circle cx="73.5" cy="51.5" r="1.2" fill="#FFFFFF" />
          </>
        ) : (
          // Standard happy eyes
          <>
            <ellipse cx="48" cy="52" rx="3.2" ry="4" fill={strokeColor} />
            <circle cx="49.5" cy="50.5" r="1.2" fill="#FFFFFF" />
            <ellipse cx="72" cy="52" rx="3.2" ry="4" fill={strokeColor} />
            <circle cx="73.5" cy="50.5" r="1.2" fill="#FFFFFF" />
          </>
        )}

        {/* MOUTH */}
        {isCelebrating ? (
          // Big joyful open mouth with tongue :D
          <path
            d="M54 57 C54 65 66 65 66 57 Z"
            fill="#EF4444"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : isThinking ? (
          // Tiny curious pout / o-mouth
          <circle cx="60" cy="58" r="2.5" fill={strokeColor} />
        ) : isGentle ? (
          // Soft gentle curve
          <path
            d="M56 57 C58 60 62 60 64 57"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          // Smiling friendly mouth
          <path
            d="M56 57 C58 62 62 62 64 57"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* ARMS */}
        {isCelebrating ? (
          // Both arms high in the air \o/
          <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M26 56 C18 48 16 38 14 32" />
            <circle cx="14" cy="31" r="3" fill={strokeColor} />
            <path d="M86 56 C94 48 96 38 98 32" />
            <circle cx="98" cy="31" r="3" fill={strokeColor} />
          </g>
        ) : isThinking ? (
          // Hand touching chin thoughtfully
          <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M26 62 C22 66 22 72 26 70" />
            <path d="M86 62 C82 60 70 63 65 62" />
            <circle cx="64" cy="62" r="3" fill={strokeColor} />
          </g>
        ) : isGentle ? (
          // Relaxed arms at sides
          <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M26 62 C22 68 24 74 28 72" />
            <path d="M86 62 C90 68 88 74 84 72" />
          </g>
        ) : isWaving ? (
          // Left resting, right waving hello
          <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M26 62 C20 64 22 72 28 68" />
            <g className="origin-[85px_60px]">
              <path d="M86 58 C96 52 101 44 104 38" />
              <circle cx="104" cy="37" r="3" fill={strokeColor} />
            </g>
          </g>
        ) : (
          <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M26 62 C20 64 22 72 28 68" />
            <path d="M86 60 C92 64 94 70 88 72" />
          </g>
        )}
      </svg>
    </div>
  );
};
