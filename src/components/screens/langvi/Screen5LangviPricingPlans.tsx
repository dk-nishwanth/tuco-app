import React, { useState } from 'react';

interface Screen5LangviPricingPlansProps {
  onNext: () => void;
  onBack?: () => void;
  isWireframe?: boolean;
}

export const Screen5LangviPricingPlans: React.FC<Screen5LangviPricingPlansProps> = ({
  onNext,
  onBack,
  isWireframe = false,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('teen');

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden px-5 pt-3 pb-5 ${
        isWireframe ? 'bg-zinc-900 text-white' : 'bg-[#1E1675] text-white'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-2 pt-0.5 pb-2 font-semibold text-white shrink-0">
        <span className="font-semibold text-[12px] tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 text-[11px]">
          {/* Signal */}
          <div className="flex items-end gap-0.5 h-2.5">
            <span className="w-0.5 h-1 bg-white rounded-full" />
            <span className="w-0.5 h-1.5 bg-white rounded-full" />
            <span className="w-0.5 h-2 bg-white rounded-full" />
            <span className="w-0.5 h-2.5 bg-white rounded-full" />
          </div>
          {/* WiFi */}
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
            <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" />
          </svg>
          {/* Battery */}
          <div className="w-5 h-2.5 border border-white rounded-[3px] p-0.5 flex items-center relative">
            <div className="w-full h-full bg-white rounded-[1.5px]" />
            <div className="w-0.5 h-1 bg-white rounded-r-xs absolute -right-1" />
          </div>
        </div>
      </div>

      {/* Top Header matching Image 571 Screen 5 */}
      <div className="space-y-1 pt-3 shrink-0">
        <span className="text-xs font-semibold text-[#A594F9] block tracking-wide">
          Our lessons
        </span>
        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-[1.12]">
          We help you <br />
          love learning
        </h1>
      </div>

      {/* Pricing Cards List matching Image 571 */}
      <div className="space-y-3.5 my-auto py-2">
        {/* Card 1: Teenagers (Lime Green Card with White Price Box) */}
        <div
          onClick={() => {
            setSelectedPlan('teen');
            onNext();
          }}
          className={`p-5 rounded-3xl cursor-pointer transition-all active:scale-98 shadow-md relative overflow-hidden ${
            isWireframe
              ? 'bg-zinc-200 text-zinc-900'
              : 'bg-[#C6F432] text-stone-950'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-800/80 block">
                12-18 years old
              </span>
              <h3 className="text-2xl font-black tracking-tight text-stone-950">
                Teenagers
              </h3>
            </div>

            {/* White price pill box */}
            <div className="py-2.5 px-4 rounded-2xl bg-white text-center shrink-0 shadow-xs border border-stone-200/40">
              <span className="text-2xl font-black text-stone-950 block leading-tight">
                $79
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Kids (Light Cyan/Sky Blue Card with White Price Box) */}
        <div
          onClick={() => {
            setSelectedPlan('kids');
            onNext();
          }}
          className={`p-5 rounded-3xl cursor-pointer transition-all active:scale-98 shadow-md relative overflow-hidden ${
            isWireframe
              ? 'bg-zinc-300 text-zinc-900'
              : 'bg-[#A0E7FD] text-stone-950'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-800/80 block">
                4-12 years old
              </span>
              <h3 className="text-2xl font-black tracking-tight text-stone-950">
                Kids
              </h3>
            </div>

            {/* White price pill box */}
            <div className="py-2.5 px-4 rounded-2xl bg-white text-center shrink-0 shadow-xs border border-stone-200/40">
              <span className="text-2xl font-black text-stone-950 block leading-tight">
                $57
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Adults (Soft Lavender Card) */}
        <div
          onClick={() => {
            setSelectedPlan('adults');
            onNext();
          }}
          className={`p-5 rounded-3xl cursor-pointer transition-all active:scale-98 shadow-md relative overflow-hidden opacity-95 ${
            isWireframe
              ? 'bg-zinc-400 text-zinc-900'
              : 'bg-[#DDD6FE] text-stone-950'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold text-stone-800/80 block">
                18+ years old
              </span>
              <h3 className="text-2xl font-black tracking-tight text-stone-950">
                Adults
              </h3>
            </div>

            <div className="py-2.5 px-4 rounded-2xl bg-white text-center shrink-0 shadow-xs border border-stone-200/40">
              <span className="text-2xl font-black text-stone-950 block leading-tight">
                $89
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="w-32 h-1 bg-white/70 rounded-full mx-auto shrink-0" />
    </div>
  );
};
