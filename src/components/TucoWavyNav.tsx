import React from 'react';
import { Settings, User } from 'lucide-react';
import { TucoMascot } from './TucoMascot';

interface TucoWavyNavProps {
  activeTab?: 'home' | 'settings' | 'profile';
  onTabChange?: (tab: 'home' | 'settings' | 'profile') => void;
  isWireframe?: boolean;
}

export const TucoWavyNav: React.FC<TucoWavyNavProps> = ({
  activeTab = 'home',
  onTabChange,
  isWireframe = false,
}) => {
  return (
    <div className="relative w-full shrink-0 select-none font-['Poppins']">
      {/* Curved SVG Wave background */}
      <div className="relative w-full h-[74px] overflow-visible">
        <svg
          viewBox="0 0 375 74"
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[0_-6px_16px_rgba(0,0,0,0.06)]"
          fill="none"
        >
          <path
            d="M0,24 
               C50,24 85,24 112,24 
               C142,24 150,4 187.5,4 
               C225,4 233,24 263,24 
               C290,24 325,24 375,24 
               L375,74 L0,74 Z"
            fill={isWireframe ? '#F3F4F6' : '#FFFFFF'}
            stroke={isWireframe ? '#D1D5DB' : '#F1F5F9'}
            strokeWidth="1.2"
          />
        </svg>

        {/* Tab Items positioned along the wave */}
        <div className="absolute inset-0 flex items-center justify-between px-8 pt-3">
          {/* Settings Tab (Left) */}
          <button
            type="button"
            onClick={() => onTabChange?.('settings')}
            className={`flex flex-col items-center justify-center p-2 rounded-full transition-transform active:scale-90 ${
              activeTab === 'settings'
                ? isWireframe ? 'text-stone-900' : 'text-amber-600'
                : 'text-stone-400 hover:text-stone-600'
            }`}
            title="Settings"
          >
            <Settings className="w-5 h-5 stroke-[2]" />
          </button>

          {/* Center: Yellow circular Tuco mascot home button matching screenshot */}
          <div className="relative -top-2 flex flex-col items-center">
            <button
              type="button"
              onClick={() => onTabChange?.('home')}
              className="group relative flex flex-col items-center transition-all duration-300 active:scale-95"
              title="Home"
            >
              <div className="w-10 h-10 rounded-full bg-[#FED543] flex items-center justify-center shadow-xs border border-amber-300/60 p-0.5">
                <TucoMascot
                  size="xs"
                  isWireframe={isWireframe}
                  isWaving={false}
                  showShadow={false}
                  className="w-8 h-8"
                />
              </div>
              <span
                className={`font-['Poppins'] text-[10px] font-bold tracking-tight mt-0.5 ${
                  activeTab === 'home'
                    ? isWireframe ? 'text-stone-900' : 'text-[#352002]'
                    : 'text-stone-400'
                }`}
              >
                home
              </span>
            </button>
          </div>

          {/* Profile Tab (Right) */}
          <button
            type="button"
            onClick={() => onTabChange?.('profile')}
            className={`flex flex-col items-center justify-center p-2 rounded-full transition-transform active:scale-90 ${
              activeTab === 'profile'
                ? isWireframe ? 'text-stone-900' : 'text-amber-600'
                : 'text-stone-400 hover:text-stone-600'
            }`}
            title="Profile"
          >
            <User className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </div>
    </div>
  );
};
