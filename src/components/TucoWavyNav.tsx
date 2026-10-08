import React from 'react';
import { Settings, User, Heart, Search } from 'lucide-react';
import { TucoMascot } from './TucoMascot';

interface TucoWavyNavProps {
  activeTab: 'home' | 'settings' | 'profile' | 'wishlist' | 'search';
  onTabChange?: (tab: 'home' | 'settings' | 'profile' | 'wishlist' | 'search') => void;
  isWireframe?: boolean;
}

export const TucoWavyNav: React.FC<TucoWavyNavProps> = ({
  activeTab = 'home',
  onTabChange,
  isWireframe = false,
}) => {
  return (
    <div className="relative w-full shrink-0 select-none">
      {/* Curved SVG Wave background */}
      <div className="relative w-full h-[76px] overflow-visible">
        <svg
          viewBox="0 0 375 76"
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[0_-8px_16px_rgba(0,0,0,0.06)]"
          fill="none"
        >
          {/* Wave silhouette */}
          <path
            d="M0,28 
               C50,28 85,28 115,28 
               C145,28 152,6 187.5,6 
               C223,6 230,28 260,28 
               C290,28 325,28 375,28 
               L375,76 L0,76 Z"
            fill={isWireframe ? '#F3F4F6' : '#FFFFFF'}
            stroke={isWireframe ? '#D1D5DB' : '#F1F5F9'}
            strokeWidth="1.5"
          />
        </svg>

        {/* Tab Items positioned along the wave */}
        <div className="absolute inset-0 flex items-center justify-between px-7 pt-4">
          {/* Settings Tab (Left) */}
          <button
            type="button"
            onClick={() => onTabChange?.('settings')}
            className={`flex flex-col items-center justify-center p-2 rounded-full transition-transform active:scale-90 ${
              activeTab === 'settings'
                ? isWireframe ? 'text-stone-900' : 'text-amber-500'
                : 'text-stone-400 hover:text-stone-600'
            }`}
            title="Settings"
          >
            <Settings className="w-5 h-5 stroke-[2]" />
            <span className="text-[9px] font-medium tracking-tight mt-0.5 opacity-80">settings</span>
          </button>

          {/* Center: Signature Tuco Cloud Home Button */}
          <div className="relative -top-3 flex flex-col items-center">
            <button
              type="button"
              onClick={() => onTabChange?.('home')}
              className={`group relative flex flex-col items-center transition-all duration-300 active:scale-95`}
              title="Home"
            >
              <div className="relative">
                <TucoMascot
                  size="sm"
                  isWireframe={isWireframe}
                  isWaving={false}
                  showShadow={false}
                  className="w-9 h-9"
                />
              </div>
              <span
                className={`font-fredoka text-[10px] font-bold tracking-wide -mt-0.5 ${
                  activeTab === 'home'
                    ? isWireframe ? 'text-stone-900 font-bold' : 'text-[#3E2500] font-black'
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
                ? isWireframe ? 'text-stone-900' : 'text-amber-500'
                : 'text-stone-400 hover:text-stone-600'
            }`}
            title="Profile"
          >
            <User className="w-5 h-5 stroke-[2]" />
            <span className="text-[9px] font-medium tracking-tight mt-0.5 opacity-80">profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};
