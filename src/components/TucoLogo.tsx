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
  const textColor = isWireframe ? 'text-stone-800' : 'text-[#352002]';

  const sizeClasses = {
    sm: {
      tuco: 'text-2xl',
      kids: 'text-[9px] tracking-widest',
    },
    md: {
      tuco: 'text-4xl',
      kids: 'text-xs tracking-widest',
    },
    lg: {
      tuco: 'text-5xl',
      kids: 'text-sm tracking-widest font-black',
    },
    xl: {
      tuco: 'text-6xl',
      kids: 'text-base tracking-[0.25em] font-black',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex flex-col items-center select-none font-['Poppins'] ${className}`}>
      <div className="relative flex items-center">
        {/* Playful brand name using Poppins */}
        <span className={`font-['Poppins'] font-extrabold ${currentSize.tuco} ${textColor} leading-none tracking-tight`}>
          tüco
        </span>
        <span className={`text-[11px] align-super font-bold ml-0.5 ${textColor} opacity-80`}>
          ®
        </span>
      </div>
      {/* "K!DS" sub-label on right */}
      <div className="w-full flex justify-end pr-1 mt-0.5">
        <span className={`font-['Poppins'] font-black ${currentSize.kids} ${textColor} uppercase opacity-90`}>
          K!DS
        </span>
      </div>
    </div>
  );
};
