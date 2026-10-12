import React from 'react';

export type LangviMascotType = 'yellow' | 'blue' | 'pink' | 'purple';
export type LangviExpression = 'celebrate' | 'idea' | 'sleeping' | 'kiss' | 'happy' | 'smile' | 'glasses';

interface LangviMascotProps {
  type?: LangviMascotType;
  expression?: LangviExpression;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  hasIdea?: boolean;
  isWireframe?: boolean;
}

export const LangviMascot: React.FC<LangviMascotProps> = ({
  type = 'yellow',
  expression = 'celebrate',
  size = 'md',
  className = '',
  hasIdea = false,
  isWireframe = false,
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-10 h-10',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48',
  };

  const getColors = () => {
    if (isWireframe) {
      return { body: '#F4F4F5', stroke: '#52525B', cheek: '#E4E4E7' };
    }
    switch (type) {
      case 'yellow':
        return { body: '#FEE55A', stroke: '#2A2004', cheek: '#F9A8D4' };
      case 'blue':
        return { body: '#A7E8FC', stroke: '#0C4A6E', cheek: '#F9A8D4' };
      case 'pink':
        return { body: '#FBCFE8', stroke: '#831843', cheek: '#FDA4AF' };
      case 'purple':
        return { body: '#A78BFA', stroke: '#4C1D95', cheek: '#DDD6FE' };
    }
  };

  const { body, stroke, cheek } = getColors();

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      {/* Lightbulb Idea indicator */}
      {hasIdea && !isWireframe && (
        <div className="absolute -top-3 right-0 text-xl animate-bounce">
          💡
        </div>
      )}

      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full filter drop-shadow-xs">
        {/* Legs if standing */}
        {expression === 'idea' && (
          <g id="legs">
            <path d="M60 120 L50 148" stroke={stroke} strokeWidth="8" strokeLinecap="round" />
            <path d="M100 120 L110 148" stroke={stroke} strokeWidth="8" strokeLinecap="round" />
          </g>
        )}

        {expression === 'kiss' && (
          <g id="legs-blue">
            <path d="M65 115 L60 150" stroke="#7DD3FC" strokeWidth="12" strokeLinecap="round" />
            <path d="M95 115 L100 150" stroke="#7DD3FC" strokeWidth="12" strokeLinecap="round" />
          </g>
        )}

        {/* Arms */}
        {expression === 'idea' && (
          <g id="arms">
            {/* Left arm pointing up */}
            <path d="M40 85 L28 60 L28 45" stroke={body} strokeWidth="10" strokeLinecap="round" />
            <path d="M40 85 L28 60 L28 45" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="28" cy="45" r="4" fill={stroke} />
          </g>
        )}

        {/* Body droplet shape with top crest */}
        <path
          d="M80 15 C88 28 98 32 108 42 C125 58 135 80 135 104 C135 128 112 142 80 142 C48 142 25 128 25 104 C25 80 35 58 52 42 C62 32 72 28 80 15 Z"
          fill={body}
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Rosy Cheeks */}
        <circle cx="50" cy="98" r="9" fill={cheek} />
        <circle cx="110" cy="98" r="9" fill={cheek} />

        {/* Eyes & Mouth Expressions */}
        {expression === 'celebrate' && (
          <g>
            <circle cx="62" cy="76" r="4.5" fill={stroke} />
            <circle cx="98" cy="76" r="4.5" fill={stroke} />
            {/* Open Happy Mouth */}
            <path
              d="M72 88 Q80 102 88 88 Z"
              fill={stroke}
            />
            <path d="M74 94 Q80 98 86 94" fill="#F43F5E" />
          </g>
        )}

        {expression === 'idea' && (
          <g>
            <ellipse cx="64" cy="75" rx="3.5" ry="4.5" fill={stroke} />
            <ellipse cx="96" cy="75" rx="3.5" ry="4.5" fill={stroke} />
            <path d="M75 88 Q80 95 85 88" stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        )}

        {expression === 'kiss' && (
          <g>
            {/* Closed pleased eyes */}
            <path d="M56 74 Q62 70 68 74" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M92 74 Q98 70 104 74" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* Cute kissy mouth '3' / 'ε' */}
            <path d="M76 86 C82 84 82 89 77 90 C82 91 82 96 76 94" stroke={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        )}

        {expression === 'sleeping' && (
          <g>
            <path d="M56 78 Q62 84 68 78" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M92 78 Q98 84 104 78" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M76 94 Q80 98 84 94" stroke={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        )}

        {expression === 'glasses' && (
          <g>
            {/* Glasses frame */}
            <circle cx="62" cy="75" r="10" stroke={stroke} strokeWidth="3" fill="none" />
            <circle cx="98" cy="75" r="10" stroke={stroke} strokeWidth="3" fill="none" />
            <line x1="72" y1="75" x2="88" y2="75" stroke={stroke} strokeWidth="3" />
            <circle cx="62" cy="75" r="3.5" fill={stroke} />
            <circle cx="98" cy="75" r="3.5" fill={stroke} />
            <path d="M75 95 Q80 100 85 95" stroke={stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        )}
      </svg>
    </div>
  );
};
