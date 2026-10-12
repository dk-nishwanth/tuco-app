import React, { useState } from 'react';
import { ArrowLeft, Check, Flame, Shield, Sparkles, BookOpen, ChevronRight, Zap } from 'lucide-react';

interface ScreenTeensModeProps {
  onSwitchToKidsMode: () => void;
  onOpenRoutine: () => void;
  isWireframe?: boolean;
}

export const ScreenTeensMode: React.FC<ScreenTeensModeProps> = ({
  onSwitchToKidsMode,
  onOpenRoutine,
  isWireframe = false,
}) => {
  const [teenSkinType, setTeenSkinType] = useState<'oily-t-zone' | 'sensitive' | 'breakout-prone'>('breakout-prone');
  const [didTeenRoutine, setDidTeenRoutine] = useState(false);
  const [streakDays, setStreakDays] = useState(5);

  const clinicalRoutine = [
    {
      step: '01 / Clarify',
      product: 'Salicylic & Papaya Gentle Wash',
      desc: 'Micro-exfoliates sebum without irritating active comedones.',
      time: 'AM & PM',
    },
    {
      step: '02 / Barrier Defense',
      product: 'Ceramide Light Fluid SPF 50',
      desc: 'Non-comedogenic physical zinc barrier against UV post-inflammatory hyperpigmentation.',
      time: 'AM Everyday',
    },
    {
      step: '03 / Spot Repair',
      product: 'Niacinamide & Zinc Rescue Gel',
      desc: 'Calms redness from sports sweat and academic stress cortisol spikes.',
      time: 'PM Targeted',
    },
  ];

  const ingredientGlossary = [
    { name: 'Niacinamide (Vitamin B3)', role: 'Regulates sebum & strengthens epidermal barrier.' },
    { name: 'Mineral Zinc Oxide', role: 'Calms surface inflammation and blocks broad-spectrum UVA/B.' },
    { name: 'Cold-Pressed Argan Lipids', role: 'Replenishes fatty acids without clogging follicular ostia.' },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#F4F4F5] text-stone-900 font-sans'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Top Header - Rhode-inspired minimalist aesthetic */}
        <div className="flex items-center justify-between pt-1 border-b border-stone-200/60 pb-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                TUCO CLINICAL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
              <span className="text-xs font-semibold text-stone-700">Teens Lab</span>
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-stone-900 mt-0.5">
              Personalized Barrier Feed
            </h1>
          </div>

          <button
            type="button"
            onClick={onSwitchToKidsMode}
            className="text-[11px] font-fredoka font-semibold px-2.5 py-1 rounded-full bg-amber-400 text-stone-950 shadow-2xs hover:bg-amber-300"
          >
            ← Kids Mode
          </button>
        </div>

        {/* Minimal Hero Streak Card */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase text-stone-500">
              Protocol Consistency
            </span>
            <div className="flex items-center gap-1 text-stone-900 font-mono font-bold text-xs">
              <Flame className="w-3.5 h-3.5 fill-stone-900 stroke-none" />
              <span>{streakDays} DAYS</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <p className="text-sm font-medium text-stone-900">Evening PM Protocol Completed?</p>
              <p className="text-[11px] text-stone-500">Self-monitored • No parent check-in required.</p>
            </div>

            <button
              type="button"
              onClick={() => {
                if (!didTeenRoutine) {
                  setDidTeenRoutine(true);
                  setStreakDays(streakDays + 1);
                }
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                didTeenRoutine
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              {didTeenRoutine ? 'Logged ✓' : 'Mark Done'}
            </button>
          </div>
        </div>

        {/* Weekly Science-Backed Skin Tip (Replaces CBI Missions) */}
        <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200/80 space-y-1.5">
          <div className="flex items-center gap-1.5 text-stone-700 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>Weekly Dermatological Note</span>
          </div>
          <p className="text-xs text-stone-700 leading-relaxed">
            "Cortisol from exam stress activates sebaceous glands. Double cleansing after evening study prevents inflammatory comedones."
          </p>
          <span className="text-[10px] text-stone-500 font-mono block">Source: Journal of Pediatric Dermatology</span>
        </div>

        {/* 3-Step Clinical Protocol (Heroes of Teens Mode) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase text-stone-500">
              Your Daily Protocol
            </span>
            <span className="text-[11px] text-stone-500 font-mono">Dermatologist Vetted</span>
          </div>

          {clinicalRoutine.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1 hover:border-stone-400 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-stone-500">
                  {item.step}
                </span>
                <span className="text-[10px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                  {item.time}
                </span>
              </div>
              <h4 className="text-xs font-semibold text-stone-900">{item.product}</h4>
              <p className="text-[11px] text-stone-600 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Ingredient Scientific Glossary (Replaces Gamified Cards) */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2.5">
          <div className="flex items-center gap-1.5 text-stone-900 font-semibold text-xs">
            <BookOpen className="w-3.5 h-3.5 text-stone-600" />
            <span>Active Ingredient Glossary</span>
          </div>

          <div className="space-y-2 text-xs">
            {ingredientGlossary.map((g, i) => (
              <div key={i} className="pb-1.5 border-b border-stone-100 last:border-0 last:pb-0">
                <span className="font-medium text-stone-900 block">{g.name}</span>
                <span className="text-[11px] text-stone-600 leading-snug block">{g.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
