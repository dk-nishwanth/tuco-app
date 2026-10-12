import React from 'react';

interface BuddyCharacterIllustrationProps {
  isWireframe?: boolean;
  className?: string;
  age?: number;
}

export const BuddyCharacterIllustration: React.FC<BuddyCharacterIllustrationProps> = ({
  isWireframe = false,
  className = '',
  age = 8,
}) => {
  // Colors matching Reference Screenshot 568 (Warm orange backdrop, yellow/peach kid character, teal/navy buddy)
  const kidSkin = isWireframe ? '#F4F4F5' : '#FCD34D'; // Yellow/warm skin
  const kidHair = isWireframe ? '#71717A' : '#3B82F6'; // Royal blue stylish hair tuft
  const kidShirt = isWireframe ? '#E4E4E7' : '#4338CA'; // Indigo/blue sweater with cloud/wave graphic
  const kidGraphic = isWireframe ? '#A1A1AA' : '#FFFFFF';
  const kidPants = isWireframe ? '#D4D4D8' : '#3B82F6';
  const kidCheeks = isWireframe ? '#E4E4E7' : '#F87171';

  const buddySkin = isWireframe ? '#F4F4F5' : '#FED7AA'; // Peach skin
  const buddyHair = isWireframe ? '#27272A' : '#1E293B'; // Dark hair
  const buddyShirt = isWireframe ? '#E4E4E7' : '#34D399'; // Mint/teal striped shirt
  const buddyPants = isWireframe ? '#D4D4D8' : '#4F46E5'; // Violet blue shorts
  const stroke = isWireframe ? '#52525B' : '#1E293B';

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 340 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[250px] filter drop-shadow-sm"
      >
        {/* Soft shadow under characters */}
        {!isWireframe && (
          <ellipse cx="170" cy="265" rx="120" ry="12" fill="#000000" fillOpacity="0.15" />
        )}

        {/* =================================================== */}
        {/* BUDDY / OLDER BROTHER (Right Character) */}
        {/* =================================================== */}
        <g id="buddy-character">
          {/* Buddy Legs */}
          <g stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Left Leg */}
            <rect x="180" y="210" width="14" height="42" rx="4" fill={buddySkin} />
            {/* Right Leg */}
            <rect x="206" y="210" width="14" height="42" rx="4" fill={buddySkin} />
            {/* Shoes */}
            <path d="M174 252 H196 C196 256 193 260 188 260 H174 Z" fill={isWireframe ? '#A1A1AA' : '#1E293B'} />
            <path d="M206 252 H228 C228 256 225 260 220 260 H206 Z" fill={isWireframe ? '#A1A1AA' : '#1E293B'} />
          </g>

          {/* Buddy Shorts */}
          <path
            d="M174 172 H228 V212 H204 V196 H198 V212 H174 Z"
            fill={buddyPants}
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Buddy Torso / Striped Shirt */}
          <path
            d="M166 116 C166 112 172 108 184 108 H218 C230 108 236 112 236 116 L232 176 H170 Z"
            fill={buddyShirt}
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Shirt Stripes */}
          {!isWireframe && (
            <g stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8">
              <path d="M172 126 Q200 130 230 126" />
              <path d="M171 140 Q200 144 231 140" />
              <path d="M171 154 Q200 158 231 154" />
              <path d="M170 168 Q200 172 232 168" />
            </g>
          )}

          {/* Buddy Right Arm (on waist / side) */}
          <path
            d="M234 116 L254 140 L242 166 L230 162"
            fill="none"
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="230" cy="162" r="5" fill={buddySkin} stroke={stroke} strokeWidth="3.5" />

          {/* Buddy Left Arm (Reaching around kid's shoulder!) */}
          <path
            d="M168 120 C156 122 134 126 124 136 C120 140 122 148 130 146"
            fill="none"
            stroke={stroke}
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M168 120 C156 122 134 126 124 136 C120 140 122 148 130 146"
            fill="none"
            stroke={buddyShirt}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <circle cx="128" cy="144" r="6" fill={buddySkin} stroke={stroke} strokeWidth="2.5" />

          {/* Buddy Neck & Head */}
          <rect x="194" y="98" width="14" height="14" fill={buddySkin} stroke={stroke} strokeWidth="3" />
          <ellipse cx="201" cy="84" rx="18" ry="19" fill={buddySkin} stroke={stroke} strokeWidth="3.5" />

          {/* Buddy Hair */}
          <path
            d="M184 80 C182 66 195 62 204 62 C214 62 222 68 221 80 C218 78 214 78 210 80 C206 76 198 76 194 80 C190 78 186 78 184 80 Z"
            fill={buddyHair}
            stroke={stroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Buddy Facial Features */}
          <circle cx="196" cy="83" r="2.2" fill={stroke} />
          <circle cx="208" cy="83" r="2.2" fill={stroke} />
          <circle cx="192" cy="88" r="3" fill={kidCheeks} opacity="0.6" />
          <circle cx="212" cy="88" r="3" fill={kidCheeks} opacity="0.6" />
          <path d="M199 88 Q202 93 205 88" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
        </g>

        {/* =================================================== */}
        {/* KID HERO CHARACTER (Left Character - Center Focus) */}
        {/* =================================================== */}
        <g id="kid-hero">
          {/* Kid Legs */}
          <g stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Left Leg */}
            <rect x="94" y="212" width="13" height="40" rx="3.5" fill={isWireframe ? '#E4E4E7' : '#FFFFFF'} />
            {/* Right Leg */}
            <rect x="117" y="212" width="13" height="40" rx="3.5" fill={isWireframe ? '#E4E4E7' : '#FFFFFF'} />
            {/* Shoes */}
            <path d="M88 252 H109 C109 256 106 260 100 260 H88 Z" fill={isWireframe ? '#71717A' : '#1E293B'} />
            <path d="M117 252 H138 C138 256 135 260 129 260 H117 Z" fill={isWireframe ? '#71717A' : '#1E293B'} />
          </g>

          {/* Kid Shorts / Bottom */}
          <path
            d="M86 182 H138 V214 H117 V200 H107 V214 H86 Z"
            fill={kidPants}
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Kid Sweater / Body */}
          <path
            d="M74 136 C74 130 84 126 112 126 C140 126 150 130 150 136 L144 186 H80 Z"
            fill={kidShirt}
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Wave / Fish Graphic on Sweater (matching Reference 568) */}
          <g stroke={kidGraphic} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M96 156 Q106 148 116 156 T136 156" />
            <path d="M102 164 Q112 158 122 164" />
          </g>

          {/* Kid Arms on Hips */}
          {/* Left Arm */}
          <path
            d="M76 138 L60 158 L76 174 L84 172"
            fill="none"
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="84" cy="172" r="5" fill={kidSkin} stroke={stroke} strokeWidth="3" />

          {/* Right Arm */}
          <path
            d="M148 138 L162 158 L148 174 L140 172"
            fill="none"
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="140" cy="172" r="5" fill={kidSkin} stroke={stroke} strokeWidth="3" />

          {/* Kid Head & Face (Big, Round, Expressive) */}
          <ellipse
            cx="112"
            cy="104"
            rx="32"
            ry="28"
            fill={kidSkin}
            stroke={stroke}
            strokeWidth="3.5"
          />

          {/* Kid Hair Tuft (Crown / Stylish Tuco Blue Hair) */}
          <path
            d="M96 82 C96 72 104 68 112 68 C120 68 126 72 128 82 C122 78 118 78 112 80 C106 76 100 78 96 82 Z"
            fill={kidHair}
            stroke={stroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Extra cute hair ridges */}
          <path d="M100 74 Q106 66 114 74" fill={kidHair} stroke={stroke} strokeWidth="2" />

          {/* Kid Big Curious Eyes */}
          <circle cx="101" cy="102" r="4.2" fill={stroke} />
          <circle cx="99.5" cy="100.5" r="1.3" fill="#FFFFFF" />

          <circle cx="123" cy="102" r="4.2" fill={stroke} />
          <circle cx="121.5" cy="100.5" r="1.3" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <circle cx="93" cy="110" r="5.5" fill={kidCheeks} opacity="0.65" />
          <circle cx="131" cy="110" r="5.5" fill={kidCheeks} opacity="0.65" />

          {/* Happy Open Smile */}
          <path
            d="M106 112 Q112 120 118 112"
            fill="none"
            stroke={stroke}
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Ears */}
          <circle cx="79" cy="104" r="5.5" fill={kidSkin} stroke={stroke} strokeWidth="3" />
          <circle cx="145" cy="104" r="5.5" fill={kidSkin} stroke={stroke} strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
};
