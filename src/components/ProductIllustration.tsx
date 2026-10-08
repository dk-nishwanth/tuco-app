import React from 'react';

interface ProductIllustrationProps {
  type: 'sunstick' | 'facewash' | 'detangler' | 'deo' | 'lipbalm' | 'lotion' | 'bodywash';
  isWireframe?: boolean;
  className?: string;
}

export const ProductIllustration: React.FC<ProductIllustrationProps> = ({
  type,
  isWireframe = false,
  className = 'w-16 h-20',
}) => {
  const stroke = isWireframe ? '#4B5563' : '#1F2937';

  switch (type) {
    case 'sunstick':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 64 80" fill="none" className="w-full h-full">
            {/* Tube body */}
            <rect
              x="18"
              y="22"
              width="28"
              height="50"
              rx="10"
              fill={isWireframe ? '#F3F4F6' : '#FDE047'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            {/* Cap */}
            <rect
              x="20"
              y="10"
              width="24"
              height="16"
              rx="4"
              fill={isWireframe ? '#E5E7EB' : '#38BDF8'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            {/* SPF 50 badge */}
            <circle cx="32" cy="42" r="8" fill={isWireframe ? '#E5E7EB' : '#FFFFFF'} stroke={stroke} strokeWidth="1.5" />
            <text x="32" y="45" fontSize="6" fontWeight="bold" textAnchor="middle" fill={stroke}>50</text>
            <path d="M24 58 L40 58" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M26 63 L38 63" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'facewash':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 64 80" fill="none" className="w-full h-full">
            {/* Pump nozzle */}
            <path d="M30 8 L38 8 L38 16 L26 16 L26 8 Z" fill={isWireframe ? '#E5E7EB' : '#FB923C'} stroke={stroke} strokeWidth="2" />
            <path d="M26 11 L18 13" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            {/* Neck */}
            <rect x="28" y="16" width="8" height="6" fill={isWireframe ? '#D1D5DB' : '#FFFFFF'} stroke={stroke} strokeWidth="2" />
            {/* Bottle body */}
            <rect
              x="16"
              y="22"
              width="32"
              height="52"
              rx="12"
              fill={isWireframe ? '#F3F4F6' : '#FFEDD5'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            {/* Foam bubbles */}
            <circle cx="28" cy="38" r="4" fill={isWireframe ? '#E5E7EB' : '#FFFFFF'} stroke={stroke} strokeWidth="1.5" />
            <circle cx="36" cy="35" r="3" fill={isWireframe ? '#E5E7EB' : '#FFFFFF'} stroke={stroke} strokeWidth="1.5" />
            <circle cx="34" cy="44" r="5" fill={isWireframe ? '#E5E7EB' : '#FFFFFF'} stroke={stroke} strokeWidth="1.5" />
            <path d="M22 56 L42 56" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'detangler':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 64 80" fill="none" className="w-full h-full">
            {/* Spray trigger head */}
            <path d="M28 10 H36 V18 H28 Z" fill={isWireframe ? '#E5E7EB' : '#F472B6'} stroke={stroke} strokeWidth="2" />
            <path d="M24 14 H16" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            {/* Bottle body */}
            <path
              d="M20 24 C20 20 44 20 44 24 L42 70 C42 73 40 75 37 75 H27 C24 75 22 73 22 70 Z"
              fill={isWireframe ? '#F3F4F6' : '#FCE7F3'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            {/* Berry leaf */}
            <path d="M32 38 C32 34 38 34 38 38 C38 42 32 42 32 38 Z" fill={isWireframe ? '#D1D5DB' : '#EC4899'} stroke={stroke} strokeWidth="1.5" />
            <path d="M26 48 L38 48" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M28 54 L36 54" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'deo':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 64 80" fill="none" className="w-full h-full">
            {/* Rounded roller cap */}
            <path
              d="M20 30 C20 18 44 18 44 30 Z"
              fill={isWireframe ? '#E5E7EB' : '#22D3EE'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            {/* Stick body */}
            <rect
              x="20"
              y="30"
              width="24"
              height="44"
              rx="6"
              fill={isWireframe ? '#F3F4F6' : '#E0F2FE'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            {/* Fresh star/dot icon */}
            <circle cx="32" cy="48" r="5" fill={isWireframe ? '#D1D5DB' : '#06B6D4'} stroke={stroke} strokeWidth="1.5" />
            <path d="M26 60 L38 60" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'lipbalm':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 64 80" fill="none" className="w-full h-full">
            {/* Angled balm tip */}
            <path d="M26 22 L38 16 L38 28 L26 28 Z" fill={isWireframe ? '#D1D5DB' : '#FB7185'} stroke={stroke} strokeWidth="2" />
            {/* Twist cylinder */}
            <rect
              x="24"
              y="28"
              width="16"
              height="46"
              rx="4"
              fill={isWireframe ? '#F3F4F6' : '#FFE4E6'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            <line x1="24" y1="58" x2="40" y2="58" stroke={stroke} strokeWidth="2" />
            <path d="M28 42 L36 42" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'lotion':
    default:
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 64 80" fill="none" className="w-full h-full">
            {/* Pump */}
            <path d="M30 10 H38 V18 H26 V10 Z" fill={isWireframe ? '#E5E7EB' : '#60A5FA'} stroke={stroke} strokeWidth="2" />
            <path d="M26 13 H18" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            {/* Bottle */}
            <rect
              x="18"
              y="20"
              width="28"
              height="54"
              rx="8"
              fill={isWireframe ? '#F3F4F6' : '#EFF6FF'}
              stroke={stroke}
              strokeWidth="2.5"
            />
            <circle cx="32" cy="40" r="6" fill={isWireframe ? '#E5E7EB' : '#BFDBFE'} stroke={stroke} strokeWidth="1.5" />
            <path d="M24 54 L40 54" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );
  }
};
