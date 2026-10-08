import React from 'react';

interface TucoLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isWireframe?: boolean;
  className?: string;
}

export const TucoLogo: React.FC<TucoLogoProps> = ({
  size = 'md',
  isWireframe = false,
  className = '',
}) => {
  const textColor = isWireframe ? 'text-stone-800' : 'text-[#3E2500]';

  const sizeClasses = {
    sm: {
      tuco: 'text-2xl',
      kids: 'text-[9px] tracking-widest',
      dotSize: 'w-1 h-1',
    },
    md: {
      tuco: 'text-4xl',
      kids: 'text-xs tracking-widest',
      dotSize: 'w-1.5 h-1.5',
    },
    lg: {
      tuco: 'text-5xl',
      kids: 'text-sm tracking-widest font-black',
      dotSize: 'w-2 h-2',
    },
    xl: {
      tuco: 'text-6xl',
      kids: 'text-base tracking-[0.25em] font-black',
      dotSize: 'w-2.5 h-2.5',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className="relative flex items-center">
        {/* Playful brand name */}
        <span className={`font-fredoka font-bold ${currentSize.tuco} ${textColor} leading-none tracking-tight`}>
          tüco
        </span>
        <span className={`text-[10px] align-super font-bold ml-0.5 ${textColor} opacity-80`}>
          ®
        </span>
      </div>
      {/* "K!DS" sub-label */}
      <div className="w-full flex justify-end pr-1 mt-0.5">
        <span className={`font-fredoka font-extrabold ${currentSize.kids} ${textColor} uppercase opacity-90`}>
          K!DS
        </span>
      </div>
    </div>
  );
};
