import React from 'react';

export type TangviMascotVariant = 'yellow' | 'blue' | 'purple' | 'pink' | 'wireframe';
export type TangviMascotExpression = 'happy' | 'idea' | 'sleep' | 'kiss' | 'glasses' | 'peeking';

interface TangviMascotProps {
  variant?: TangviMascotVariant;
  expression?: TangviMascotExpression;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'giant';
  className?: string;
}

export const TangviMascot: React.FC<TangviMascotProps> = ({
  variant = 'yellow',
  expression = 'happy',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-10 h-10',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48',
    giant: 'w-64 h-64',
  };

  if (variant === 'blue') {
    // Light Blue teardrop character with cute legs blowing a kiss (Screen 8 of image 571)
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
        <svg viewBox="0 0 160 180" fill="none" className="w-full h-full drop-shadow-md">
          {/* Two Cute Blue Legs */}
          <rect x="58" y="125" width="14" height="42" rx="7" fill="#74C0FC" />
          <rect x="88" y="125" width="14" height="42" rx="7" fill="#74C0FC" />

          {/* Body: Soft plump droplet */}
          <path
            d="M80 20 C115 20 135 55 135 90 C135 125 115 135 80 135 C45 135 25 125 25 90 C25 55 45 20 80 20 Z"
            fill="#A5D8FF"
            stroke="#1E1B4B"
            strokeWidth="3.5"
          />

          {/* Left Wing / Arm */}
          <ellipse cx="28" cy="95" rx="10" ry="14" fill="#74C0FC" stroke="#1E1B4B" strokeWidth="3" transform="rotate(-15 28 95)" />
          {/* Right Wing / Arm */}
          <ellipse cx="132" cy="95" rx="10" ry="14" fill="#74C0FC" stroke="#1E1B4B" strokeWidth="3" transform="rotate(15 132 95)" />

          {/* Sleeping / Kissing Curved Closed Eyes */}
          <path d="M58 75 Q65 70 72 75" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M88 75 Q95 70 102 75" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Cute Pucker Kiss Mouth */}
          <path d="M78 88 C76 85 74 89 77 92 C80 94 82 90 84 92 C86 94 83 96 80 96" stroke="#1E1B4B" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Floating Pink Kiss Hearts */}
          <g className="animate-pulse">
            <path
              d="M118 45 C118 41 122 38 126 38 C129 38 132 41 133 43 C134 41 137 38 140 38 C144 38 147 41 147 45 C147 52 135 59 133 60 C131 59 118 52 118 45 Z"
              fill="#FFB6C1"
              stroke="#F472B6"
              strokeWidth="1.5"
            />
            <path
              d="M136 25 C136 22 139 20 142 20 C144 20 146 22 147 23 C148 22 150 20 152 20 C155 20 157 22 157 25 C157 30 148 35 147 36 C145 35 136 30 136 25 Z"
              fill="#FFB6C1"
              stroke="#F472B6"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'purple') {
    // Purple rounded mascot peeking (Screen 9 monthly tasks)
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-sm">
          {/* Teardrop tilted body */}
          <path
            d="M50 15 C70 15 85 35 85 65 C85 85 70 92 50 92 C30 92 15 85 15 65 C15 35 30 15 50 15 Z"
            fill="#7950F2"
            stroke="#1E1B4B"
            strokeWidth="3"
          />
          {/* Eyes */}
          <circle cx="40" cy="55" r="3.5" fill="#1E1B4B" />
          <circle cx="60" cy="55" r="3.5" fill="#1E1B4B" />
          {/* Smile */}
          <path d="M44 68 Q50 74 56 68" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    );
  }

  if (variant === 'pink') {
    // Pink rounded mascot peeking (Screen 3 monthly progress banner)
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-sm">
          <path
            d="M50 15 C75 15 85 40 85 70 C85 88 72 92 50 92 C28 92 15 88 15 70 C15 40 25 15 50 15 Z"
            fill="#FFAAA6"
            stroke="#1E1B4B"
            strokeWidth="3"
          />
          {/* Black circle eyes */}
          <circle cx="38" cy="52" r="4" fill="#1E1B4B" />
          <circle cx="62" cy="52" r="4" fill="#1E1B4B" />
          {/* Open joyous mouth */}
          <path d="M42 66 Q50 78 58 66 Z" fill="#1E1B4B" />
          {/* Teeth highlight */}
          <path d="M46 66 Q50 69 54 66" fill="#FFFFFF" />
        </svg>
      </div>
    );
  }

  // Yellow Mascot (The main Tangvi hero - Screens 2, 4, 7, 9)
  const isIdea = expression === 'idea';
  const isSleep = expression === 'sleep';
  const isGlasses = expression === 'glasses';
  const isGiantPeeking = expression === 'peeking';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 160 170" fill="none" className="w-full h-full drop-shadow-md">
        {/* Sleeping ZZZ letters if sleep mode */}
        {isSleep && (
          <g fill="#FDE047" stroke="#1E1B4B" strokeWidth="2.5" className="animate-pulse">
            <path d="M120 28 H132 L122 40 H134" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M130 14 H140 L132 23 H142" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}

        {/* Idea raised hand & Lightbulb if idea mode */}
        {isIdea && (
          <>
            {/* Raised Hand */}
            <path
              d="M38 65 C32 45 42 35 48 40 C52 44 50 60 48 75"
              fill="#FDE047"
              stroke="#1E1B4B"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Two Yellow Legs */}
            <rect x="52" y="125" width="14" height="38" rx="6" fill="#FDE047" stroke="#1E1B4B" strokeWidth="3" />
            <rect x="94" y="125" width="14" height="38" rx="6" fill="#FDE047" stroke="#1E1B4B" strokeWidth="3" />

            {/* Glowing Lightbulb */}
            <g transform="translate(115, 20)">
              <circle cx="15" cy="15" r="12" fill="#FEF08A" stroke="#1E1B4B" strokeWidth="2.5" />
              <rect x="11" y="27" width="8" height="5" rx="2" fill="#D4D4D8" stroke="#1E1B4B" strokeWidth="1.5" />
              {/* Glow rays */}
              <path d="M15 0 L15 3 M28 6 L26 8 M2 6 L4 8" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
            </g>
          </>
        )}

        {/* Main Yellow Teardrop Plump Body */}
        <path
          d={
            isGiantPeeking
              ? "M20 170 C15 110 30 60 80 50 C130 60 145 110 140 170 Z"
              : "M80 20 C120 20 142 55 142 96 C142 135 120 142 80 142 C40 142 18 135 18 96 C18 55 40 20 80 20 Z"
          }
          fill="#FED543"
          stroke="#1E1B4B"
          strokeWidth="3.8"
          strokeLinejoin="round"
        />

        {/* Rosy Pink Round Cheeks */}
        <ellipse cx="46" cy="100" rx="11" ry="8" fill="#F472B6" opacity="0.85" />
        <ellipse cx="114" cy="100" rx="11" ry="8" fill="#F472B6" opacity="0.85" />

        {/* Eyes based on expression */}
        {isGlasses ? (
          // Glasses for Jacob's avatar
          <g>
            <circle cx="60" cy="82" r="13" fill="none" stroke="#1E1B4B" strokeWidth="3" />
            <circle cx="100" cy="82" r="13" fill="none" stroke="#1E1B4B" strokeWidth="3" />
            <path d="M73 82 H87" stroke="#1E1B4B" strokeWidth="3" />
            <circle cx="60" cy="82" r="4" fill="#1E1B4B" />
            <circle cx="100" cy="82" r="4" fill="#1E1B4B" />
          </g>
        ) : isSleep ? (
          // Closed smiling sleeping eyes ^ ^
          <g>
            <path d="M52 82 Q60 75 68 82" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M92 82 Q100 75 108 82" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </g>
        ) : isGiantPeeking ? (
          // Giant peeking closed eyes smiling gently
          <g>
            <path d="M50 90 Q60 82 70 90" stroke="#1E1B4B" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M90 90 Q100 82 110 90" stroke="#1E1B4B" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        ) : (
          // Big joyous round pupils with shines
          <g>
            <ellipse cx="58" cy="82" rx="7" ry="9" fill="#1E1B4B" />
            <circle cx="56" cy="79" r="2.8" fill="#FFFFFF" />
            <ellipse cx="102" cy="82" rx="7" ry="9" fill="#1E1B4B" />
            <circle cx="100" cy="79" r="2.8" fill="#FFFFFF" />
          </g>
        )}

        {/* Mouth */}
        {isSleep ? (
          <path d="M75 96 Q80 100 85 96" stroke="#1E1B4B" strokeWidth="3" strokeLinecap="round" fill="none" />
        ) : isGiantPeeking ? (
          <path d="M72 108 Q80 115 88 108" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        ) : (
          // Open cheerful tongue mouth
          <g>
            <path d="M70 94 Q80 110 90 94 Z" fill="#1E1B4B" />
            <path d="M74 99 Q80 108 86 99" fill="#FB7185" />
          </g>
        )}
      </svg>
    </div>
  );
};
