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
      {/* Artboard Header (Figma style) */}
      {showArtboardLabel && (
        <div
          onClick={onSelect}
          className={`flex items-center justify-between w-[375px] mb-3 px-1 cursor-pointer group`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-tight text-stone-400 group-hover:text-amber-400 transition-colors">
              {title}
            </span>
            {subtitle && (
              <span className="text-[11px] text-stone-500 font-mono">
                {subtitle}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            {/* Figma-like frame symbol */}
            <svg className="w-3.5 h-3.5 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <line x1="15" y1="3" x2="15" y2="21" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
            </svg>
          </div>
        </div>
      )}

      {/* iPhone 17 Device Body */}
      <div
        onClick={onSelect}
        className={`relative w-[375px] h-[812px] rounded-[48px] overflow-hidden transition-all duration-300 ${
          isWireframe
            ? 'bg-white border-2 border-dashed border-stone-400 shadow-lg'
            : isActive
            ? 'border-4 border-amber-400 shadow-[0_20px_50px_rgba(254,213,67,0.25)] ring-4 ring-amber-400/20'
            : 'border-[6px] border-stone-800 shadow-2xl hover:border-stone-700'
        } bg-stone-900 flex flex-col`}
      >
        {/* Dynamic Island & Status Bar */}
        <div className="relative z-30 shrink-0 w-full pt-3 px-7 flex items-center justify-between text-xs pointer-events-none">
          {/* Time */}
          <span className={`font-semibold tracking-tight text-[12px] ${isWireframe ? 'text-stone-800' : 'text-stone-900'}`}>
            9:41
          </span>

          {/* Dynamic Island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[104px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-900/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950/60 ring-1 ring-blue-900/40" />
          </div>

          {/* Status Icons */}
          <div className={`flex items-center gap-1.5 ${isWireframe ? 'text-stone-800' : 'text-stone-900'}`}>
            {/* Cellular */}
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

        {/* Screen Content Viewport (Scrollable inside) */}
        <div className="relative flex-1 w-full overflow-y-auto overflow-x-hidden hide-scrollbar flex flex-col">
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
