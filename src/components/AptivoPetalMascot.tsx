import React from 'react';

interface AptivoPetalMascotProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'giant';
  variant?: 'coral' | 'yellow' | 'pink' | 'wireframe';
  expression?: 'happy' | 'smile' | 'wink' | 'curious';
  className?: string;
  isPeeking?: boolean;
}

export const AptivoPetalMascot: React.FC<AptivoPetalMascotProps> = ({
  size = 'md',
  variant = 'coral',
  expression = 'happy',
  className = '',
  isPeeking = false,
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-10 h-10',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48',
    giant: 'w-72 h-72',
  };

  const colors = {
    coral: { fill: '#F06553', stroke: '#1E293B', cheek: '#FDA4AF' },
    yellow: { fill: '#FED543', stroke: '#1E293B', cheek: '#FDE047' },
    pink: { fill: '#FB7185', stroke: '#1E293B', cheek: '#FECDD3' },
    wireframe: { fill: '#F4F4F5', stroke: '#52525B', cheek: '#E4E4E7' },
  };

  const { fill, stroke } = colors[variant];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-xs"
      >
        {/* Flower / Cloud Petals (5 rounded lobes) */}
        <path
          d={
            isPeeking
              ? "M15 160 C10 120 20 85 45 75 C60 70 70 85 80 85 C90 85 100 70 115 75 C140 85 150 120 145 160 Z"
              : "M80 20 C95 20 108 32 108 48 C122 42 138 52 140 68 C142 82 130 96 122 104 C132 118 122 136 106 138 C94 140 84 132 80 132 C76 132 66 140 54 138 C38 136 28 118 38 104 C30 96 18 82 20 68 C22 52 38 42 52 48 C52 32 65 20 80 20 Z"
          }
          fill={fill}
          stroke={stroke}
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Big Expressive Cartoon Eyes (Matching Reference image 570.png) */}
        <g id="eyes">
          {/* Left Eye */}
          <g>
            {/* Eyelashes (3 distinct lashes) */}
            <path d="M54 62 L48 53" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M62 58 L60 48" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M70 60 L73 50" stroke={stroke} strokeWidth="3" strokeLinecap="round" />

            {/* White Sclera */}
            <ellipse cx="62" cy="76" rx="14" ry="16" fill="#FFFFFF" stroke={stroke} strokeWidth="3.5" />
            {/* Black Pupil */}
            <circle cx="63" cy="77" r="9" fill={stroke} />
            {/* Shine Highlights */}
            <circle cx="61" cy="74" r="3.5" fill="#FFFFFF" />
            <circle cx="66" cy="80" r="1.5" fill="#FFFFFF" />
          </g>

          {/* Right Eye */}
          <g>
            {/* Eyelashes (3 distinct lashes) */}
            <path d="M90 60 L87 50" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M98 58 L100 48" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <path d="M106 62 L112 53" stroke={stroke} strokeWidth="3" strokeLinecap="round" />

            {/* White Sclera */}
            <ellipse cx="98" cy="76" rx="14" ry="16" fill="#FFFFFF" stroke={stroke} strokeWidth="3.5" />
            {/* Black Pupil */}
            <circle cx="97" cy="77" r="9" fill={stroke} />
            {/* Shine Highlights */}
            <circle cx="95" cy="74" r="3.5" fill="#FFFFFF" />
            <circle cx="100" cy="80" r="1.5" fill="#FFFFFF" />
          </g>
        </g>

        {/* Tiny Sweet Smiling Mouth */}
        <path
          d="M74 97 Q80 103 86 97"
          fill="none"
          stroke={stroke}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Cute mini eyes topper for dashboard lesson cards matching Reference 570
export const CardEyeTopper: React.FC<{ strokeColor?: string }> = ({ strokeColor = '#1E293B' }) => {
  return (
    <div className="flex items-end justify-center gap-1.5 -mb-1 select-none">
      {/* Left Eye */}
      <div className="relative w-5 h-6">
        <svg viewBox="0 0 24 28" fill="none" className="w-full h-full">
          <path d="M5 9 L2 4" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 7 L12 2" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M19 9 L22 4" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="12" cy="18" rx="10" ry="10" fill="#FFFFFF" stroke={strokeColor} strokeWidth="2.5" />
          <circle cx="12" cy="18" r="6" fill={strokeColor} />
          <circle cx="10" cy="16" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Right Eye */}
      <div className="relative w-5 h-6">
        <svg viewBox="0 0 24 28" fill="none" className="w-full h-full">
          <path d="M5 9 L2 4" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 7 L12 2" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M19 9 L22 4" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="12" cy="18" rx="10" ry="10" fill="#FFFFFF" stroke={strokeColor} strokeWidth="2.5" />
          <circle cx="12" cy="18" r="6" fill={strokeColor} />
          <circle cx="10" cy="16" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
};
