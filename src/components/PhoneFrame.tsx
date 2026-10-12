import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface PhoneFrameProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  isActive?: boolean;
  isWireframe?: boolean;
  onSelect?: () => void;
  scale?: number;
  showArtboardLabel?: boolean;
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  id,
  title,
  subtitle,
  children,
  isActive = false,
  isWireframe = false,
  onSelect,
  scale = 1,
  showArtboardLabel = true,
  className = '',
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col items-center select-none transition-all duration-200 ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
    >
      {/* Artboard Header matching Figma screenshot */}
      {showArtboardLabel && (
        <div
          onClick={onSelect}
          className="flex items-center justify-between w-[375px] mb-3 px-1 cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <span className="font-['Poppins'] text-sm font-medium tracking-tight text-stone-300 group-hover:text-amber-400 transition-colors">
              {title}
            </span>
            {subtitle && (
              <span className="font-['Poppins'] text-[11px] text-stone-500">
                {subtitle}
              </span>
            )}
          </div>
          {/* Figma Diamond Component Icon matching screenshot */}
          <div className="flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-4 h-4 text-stone-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)" />
              <rect x="7" y="7" width="10" height="10" rx="1" transform="rotate(45 12 12)" />
            </svg>
          </div>
        </div>
      )}

      {/* iPhone Device Body with exact bezel and optional Figma selection ring */}
      <div
        onClick={onSelect}
        className={`relative w-[375px] h-[812px] rounded-[48px] overflow-hidden transition-all duration-300 ${
          isActive
            ? 'ring-2 ring-[#0D99FF] ring-offset-2 ring-offset-[#202024] shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            : 'shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
        } ${
          isWireframe
            ? 'bg-white border-2 border-dashed border-stone-400'
            : 'border-[5px] border-[#2A2A2E] bg-stone-900'
        } flex flex-col`}
      >
        {/* Dynamic Island & Status Bar */}
        <div className="relative z-30 shrink-0 w-full pt-3 px-7 flex items-center justify-between text-xs pointer-events-none">
          {/* Time */}
          <span className={`font-['Poppins'] font-semibold tracking-tight text-[12px] ${isWireframe ? 'text-stone-800' : 'text-stone-900'}`}>
            9:41
          </span>

          {/* Dynamic Island Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[104px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-900/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950/60 ring-1 ring-blue-900/40" />
          </div>

          {/* Status Icons */}
          <div className={`flex items-center gap-1.5 ${isWireframe ? 'text-stone-800' : 'text-stone-900'}`}>
            <div className="flex items-end gap-[1.5px] h-2.5">
              <span className="w-[2.5px] h-1 bg-current rounded-xs" />
              <span className="w-[2.5px] h-1.5 bg-current rounded-xs" />
              <span className="w-[2.5px] h-2 bg-current rounded-xs" />
              <span className="w-[2.5px] h-2.5 bg-current rounded-xs" />
            </div>
            <Wifi className="w-3 h-3 stroke-[2.5]" />
            <Battery className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>

        {/* Screen Content Viewport */}
        <div className="relative flex-1 w-full overflow-y-auto overflow-x-hidden hide-scrollbar flex flex-col font-['Poppins']">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="relative z-30 shrink-0 w-full pb-2 pt-1 flex justify-center pointer-events-none">
          <div className={`w-32 h-1 rounded-full ${isWireframe ? 'bg-stone-500' : 'bg-stone-900/40'}`} />
        </div>
      </div>
    </div>
  );
};
