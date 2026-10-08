import React from 'react';

interface TucoMascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isWaving?: boolean;
  isWireframe?: boolean;
  showShadow?: boolean;
}

export const TucoMascot: React.FC<TucoMascotProps> = ({
  className = '',
  size = 'md',
  isWaving = true,
  isWireframe = false,
  showShadow = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
  };

  const cloudFill = isWireframe ? '#FAFAFA' : '#FFFFFF';
  const strokeColor = '#1F2937';
  const blushColor = isWireframe ? '#E5E7EB' : '#FECDD3';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      {/* Soft ground shadow */}
      {showShadow && !isWireframe && (
        <div className="absolute -bottom-1 w-3/4 h-2 bg-amber-900/10 rounded-full blur-[2px]" />
      )}

      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
      >
        {/* Legs & Shoes */}
        <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Left leg */}
          <line x1="50" y1="88" x2="50" y2="104" />
          <path d="M46 104 C46 107 54 107 55 104" fill={strokeColor} />

          {/* Right leg */}
          <line x1="68" y1="88" x2="68" y2="104" />
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

        {/* Cute Face */}
        {/* Left eye */}
        <ellipse cx="48" cy="52" rx="3.2" ry="4" fill={strokeColor} />
        <circle cx="49.5" cy="50.5" r="1.2" fill="#FFFFFF" />

        {/* Right eye */}
        <ellipse cx="72" cy="52" rx="3.2" ry="4" fill={strokeColor} />
        <circle cx="73.5" cy="50.5" r="1.2" fill="#FFFFFF" />

        {/* Happy smiling mouth */}
        <path
          d="M56 57 C58 62 62 62 64 57"
          stroke={strokeColor}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Stick Arms */}
        {/* Left Arm: Resting or posing */}
        <path
          d="M26 62 C20 64 22 72 28 68"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Arm: Waving hello enthusiastically! */}
        {isWaving ? (
          <g className="origin-[85px_60px] animate-pulse">
            <path
              d="M86 58 C96 52 101 44 104 38"
              stroke={strokeColor}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            {/* Tiny cute mitten hand */}
            <circle cx="104" cy="37" r="3" fill={strokeColor} />
          </g>
        ) : (
          <path
            d="M86 60 C92 64 94 70 88 72"
            stroke={strokeColor}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        )}
      </svg>
    </div>
  );
};
