import React from 'react';

export type LangviMascotType = 'yellow' | 'blue' | 'pink' | 'purple';
export type LangviExpression =
  | 'celebrate'
  | 'idea'
  | 'sleeping'
  | 'kiss'
  | 'happy'
  | 'smile'
  | 'glasses'
  | 'zen'
  | 'open_mouth'
  | 'waving';

interface LangviMascotProps {
  type?: LangviMascotType;
  expression?: LangviExpression;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'giant';
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
    giant: 'w-64 h-64',
  };

  const getColors = () => {
    if (isWireframe) {
      return {
        body: '#F4F4F5',
        stroke: '#27272A',
        cheek: '#E4E4E7',
        highlight: '#FFFFFF',
      };
    }
    switch (type) {
      case 'yellow':
        return {
          body: '#FEE343',
          stroke: '#1A1A1A',
          cheek: '#FF9EC3',
          highlight: '#FFF6A5',
        };
      case 'blue':
        return {
          body: '#9BE4FB',
          stroke: '#1A1A1A',
          cheek: '#FF9EC3',
          highlight: '#DDF7FF',
        };
      case 'pink':
        return {
          body: '#F8B4D9',
          stroke: '#1A1A1A',
          cheek: '#FF70A6',
          highlight: '#FFE4F2',
        };
      case 'purple':
        return {
          body: '#8672F7',
          stroke: '#1A1A1A',
          cheek: '#C4B5FD',
          highlight: '#DDD6FE',
        };
    }
  };

  const { body, stroke, cheek } = getColors();

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-sm overflow-visible"
      >
        {/* LEGS: Standing poses */}
        {(expression === 'idea' || expression === 'celebrate') && (
          <g id="standing-legs">
            <path
              d="M75 140 L68 185"
              stroke={body}
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M125 140 L132 185"
              stroke={body}
              strokeWidth="20"
              strokeLinecap="round"
            />
          </g>
        )}

        {expression === 'kiss' && (
          <g id="blue-legs">
            <path
              d="M80 145 L74 190"
              stroke={body}
              strokeWidth="22"
              strokeLinecap="round"
            />
            <path
              d="M120 145 L135 190"
              stroke={body}
              strokeWidth="22"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* ARMS: Idea arm pointing up on the left */}
        {expression === 'idea' && (
          <g id="left-arm-pointing">
            <path
              d="M55 105 C42 95 38 75 42 55"
              stroke={body}
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hand with finger lines */}
            <circle cx="42" cy="50" r="10" fill={body} />
            <path
              d="M38 42 L38 35 M43 40 L43 32 M48 42 L48 35"
              stroke={stroke}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* ARMS: Idea arm resting on hip on the right */}
        {expression === 'idea' && (
          <g id="right-arm-hip">
            <path
              d="M145 105 C162 108 165 125 148 132"
              stroke={body}
              strokeWidth="15"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* ARMS: Celebrate arms raised up */}
        {expression === 'celebrate' && (
          <g id="celebrate-arms">
            <path
              d="M50 110 C32 95 35 70 48 60"
              stroke={body}
              strokeWidth="15"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M150 110 C168 95 165 70 152 60"
              stroke={body}
              strokeWidth="15"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* ARMS: Waving arms for Screen 10 */}
        {expression === 'waving' && (
          <g id="waving-arms">
            <path
              d="M50 100 C30 90 25 75 35 65"
              stroke={body}
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M60 120 C35 125 25 140 40 150"
              stroke={body}
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* BODY: Plump teardrop with 3 distinctive hair tufts on top */}
        <path
          d="
            M100 28
            C108 18 116 20 118 30
            C126 30 134 38 130 46
            C148 58 168 85 168 115
            C168 152 138 168 100 168
            C62 168 32 152 32 115
            C32 85 52 58 70 46
            C66 38 74 30 82 30
            C84 20 92 18 100 28
            Z
          "
          fill={body}
        />

        {/* ROSY CHEEKS: Big friendly circles */}
        <ellipse cx="62" cy="118" rx="14" ry="12" fill={cheek} />
        <ellipse cx="138" cy="118" rx="14" ry="12" fill={cheek} />

        {/* EXPRESSION 1: Happy Open Smiling Mouth with Tongue */}
        {(expression === 'celebrate' || expression === 'open_mouth') && (
          <g id="open-mouth-face">
            {/* Eyes: Round black dots with highlight */}
            <circle cx="78" cy="92" r="6" fill={stroke} />
            <circle cx="76" cy="90" r="2" fill="#FFFFFF" />

            <circle cx="122" cy="92" r="6" fill={stroke} />
            <circle cx="120" cy="90" r="2" fill="#FFFFFF" />

            {/* Little curved eyebrows */}
            <path
              d="M72 82 Q78 78 84 82"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M116 82 Q122 78 128 82"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Open Happy Mouth */}
            <path
              d="M90 106 C90 124 110 124 110 106 Z"
              fill={stroke}
            />
            {/* Pink Tongue */}
            <path
              d="M93 116 C98 122 102 122 107 116 Z"
              fill="#FF70A6"
            />
          </g>
        )}

        {/* EXPRESSION 2: Idea Face (Happy, looking up with focus) */}
        {expression === 'idea' && (
          <g id="idea-face">
            <circle cx="80" cy="94" r="5.5" fill={stroke} />
            <circle cx="78" cy="92" r="1.8" fill="#FFFFFF" />

            <circle cx="120" cy="94" r="5.5" fill={stroke} />
            <circle cx="118" cy="92" r="1.8" fill="#FFFFFF" />

            {/* Eyebrows */}
            <path
              d="M74 84 Q80 80 86 84"
              stroke={stroke}
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M114 84 Q120 80 126 84"
              stroke={stroke}
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />

            {/* Open smiling mouth */}
            <path
              d="M92 108 C92 122 108 122 108 108 Z"
              fill={stroke}
            />
            <path
              d="M95 116 C98 120 102 120 105 116 Z"
              fill="#FF70A6"
            />
          </g>
        )}

        {/* EXPRESSION 3: Zen / Sleeping closed serene curved eyes (Screen 7 Login) */}
        {(expression === 'sleeping' || expression === 'zen') && (
          <g id="zen-face">
            {/* Serene downward-curving eyes */}
            <path
              d="M68 95 C74 105 86 105 92 95"
              stroke={stroke}
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M108 95 C114 105 126 105 132 95"
              stroke={stroke}
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Eyebrows */}
            <path
              d="M72 82 Q80 77 88 82"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M112 82 Q120 77 128 82"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Gentle smile */}
            <path
              d="M94 116 Q100 124 106 116"
              stroke={stroke}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* EXPRESSION 4: Blowing Kiss (Screen 8 Milestone) */}
        {expression === 'kiss' && (
          <g id="kiss-face">
            {/* Happy closed eyes */}
            <path
              d="M70 94 Q78 88 86 94"
              stroke={stroke}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M114 94 Q122 88 130 94"
              stroke={stroke}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Kissy mouth '3' */}
            <path
              d="M95 110 C101 107 101 113 97 114 C101 115 101 121 95 118"
              stroke={stroke}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* EXPRESSION 5: Spectacles / Glasses (Screen 9 Jacob & Screen 3 Calendar) */}
        {expression === 'glasses' && (
          <g id="glasses-face">
            {/* Black round spectacles */}
            <circle
              cx="76"
              cy="95"
              r="15"
              stroke={stroke}
              strokeWidth="3.5"
              fill="none"
            />
            <circle
              cx="124"
              cy="95"
              r="15"
              stroke={stroke}
              strokeWidth="3.5"
              fill="none"
            />
            {/* Bridge */}
            <line
              x1="91"
              y1="95"
              x2="109"
              y2="95"
              stroke={stroke}
              strokeWidth="3.5"
            />

            {/* Eyes inside glasses */}
            <circle cx="76" cy="95" r="4.5" fill={stroke} />
            <circle cx="124" cy="95" r="4.5" fill={stroke} />

            {/* Cute smile */}
            <path
              d="M93 118 Q100 125 107 118"
              stroke={stroke}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* EXPRESSION 6: Simple Happy Smile */}
        {(expression === 'happy' || expression === 'smile' || expression === 'waving') && (
          <g id="happy-face">
            <circle cx="78" cy="94" r="5.5" fill={stroke} />
            <circle cx="76" cy="92" r="1.8" fill="#FFFFFF" />

            <circle cx="122" cy="94" r="5.5" fill={stroke} />
            <circle cx="120" cy="92" r="1.8" fill="#FFFFFF" />

            <path
              d="M92 114 Q100 124 108 114"
              stroke={stroke}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
