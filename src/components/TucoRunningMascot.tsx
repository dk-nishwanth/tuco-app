import React from 'react';

interface TucoRunningMascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isWireframe?: boolean;
}

export const TucoRunningMascot: React.FC<TucoRunningMascotProps> = ({
  className = '',
  size = 'md',
  isWireframe = false,
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
  };

  const cloudFill = isWireframe ? '#FAFAFA' : '#FFFFFF';
  const strokeColor = '#1F2937';
  const blushColor = isWireframe ? '#E5E7EB' : '#FECDD3';
  const shoeColor = isWireframe ? '#4B5563' : '#F59E0B';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      {/* Animated shadow under running mascot */}
      {!isWireframe && (
        <div className="absolute -bottom-1 w-14 h-2 bg-amber-950/20 rounded-full blur-[2px] animate-pulse" />
      )}

      {/* SVG Running Tuco Cloud */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-md animate-bounce"
        style={{ animationDuration: '0.6s' }}
      >
        {/* Trail wind lines behind Tuco */}
        {!isWireframe && (
          <g stroke="#FED543" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
            <line x1="8" y1="45" x2="20" y2="45" />
            <line x1="4" y1="55" x2="16" y2="55" />
            <line x1="12" y1="65" x2="22" y2="65" />
          </g>
        )}

        {/* Back Leg (Kicking backward in running stride) */}
        <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="48" y1="86" x2="32" y2="98" />
          <line x1="32" y1="98" x2="24" y2="104" />
          {/* Running shoe */}
          <path d="M22 103 C20 108 28 110 32 105" fill={shoeColor} stroke={strokeColor} strokeWidth="2" />
        </g>

        {/* Fluffy Cloud Body - Tilted forward into running motion */}
        <g transform="rotate(6 60 60)">
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

          {/* Cloud fluffy texture */}
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
          <ellipse cx="46" cy="59" rx="4.5" ry="3" fill={blushColor} />
          <ellipse cx="78" cy="59" rx="4.5" ry="3" fill={blushColor} />

          {/* Enthusiastic Running Eyes */}
          <ellipse cx="50" cy="52" rx="3.2" ry="4" fill={strokeColor} />
          <circle cx="51.5" cy="50.5" r="1.2" fill="#FFFFFF" />

          <ellipse cx="74" cy="52" rx="3.2" ry="4" fill={strokeColor} />
          <circle cx="75.5" cy="50.5" r="1.2" fill="#FFFFFF" />

          {/* Big happy running smile with open grin */}
          <path
            d="M58 56 C60 63 66 63 68 56 Z"
            fill={isWireframe ? '#4B5563' : '#F43F5E'}
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Cute Sporty Sweatband across the cloud */}
          {!isWireframe && (
            <path
              d="M36 40 C52 35 72 35 88 40"
              stroke="#F59E0B"
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}

          {/* Left Arm: Pumping forward */}
          <path
            d="M78 64 C88 62 94 56 96 48"
            stroke={strokeColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="96" cy="48" r="3" fill={strokeColor} />

          {/* Right Arm: Pumping back */}
          <path
            d="M38 66 C30 68 24 76 22 82"
            stroke={strokeColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="22" cy="82" r="3" fill={strokeColor} />
        </g>

        {/* Front Leg (Stepping forward in run stride) */}
        <g stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="68" y1="88" x2="80" y2="98" />
          <line x1="80" y1="98" x2="88" y2="105" />
          {/* Running shoe */}
          <path d="M86 104 C92 103 96 108 90 110 Z" fill={shoeColor} stroke={strokeColor} strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};
