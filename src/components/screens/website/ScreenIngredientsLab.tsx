import React, { useState } from 'react';
import { ShieldCheck, Ban, Sparkles, Check, Info, ArrowLeft } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';

interface ScreenIngredientsLabProps {
  onBack?: () => void;
  isWireframe?: boolean;
}

export const ScreenIngredientsLab: React.FC<ScreenIngredientsLabProps> = ({
  onBack,
  isWireframe = false,
}) => {
  const [activeTab, setActiveTab] = useState<'plants' | 'never'>('plants');

  const botanicalGoodies = [
    {
      name: 'Kakadu Plum',
      emoji: '🍈',
      role: 'Supercharged Vitamin C (100x more than oranges) for outdoor barrier defense.',
      usedIn: 'Super Sun Stick SPF 50',
    },
    {
      name: 'Mineral Zinc Oxide',
      emoji: '🛡️',
      role: 'Physical UV blocker. Bounces sun rays like mirrors. Zero chemical absorption.',
      usedIn: 'Mineral Sunscreen Range',
    },
    {
      name: 'Edible Beetroot',
      emoji: '🍓',
      role: '100% food-grade pigment. Gives a healthy rosy glow without heavy metals.',
      usedIn: 'Safe Lip Butter',
    },
    {
      name: 'Colloidal Oat Lipids',
      emoji: '🌾',
      role: 'Pediatrician-recommended ceramide lipids that stop itching and seal moisture.',
      usedIn: 'Everyday Glow Cream',
    },
    {
      name: 'Kashmiri Kesar (Saffron)',
      emoji: '🌸',
      role: 'Natural antioxidant that gently revives skin tone after strong playground sun.',
      usedIn: 'Tan-Off Face Wash',
    },
    {
      name: 'Pure Argan & Strawberry Seed',
      emoji: '🌰',
      role: 'Unlocks morning bedhead tangles in 10 seconds without comb-crying tears.',
      usedIn: 'Tangle-Free Hair Serum',
    },
  ];

  const neverEverList = [
    { toxin: 'Sulphates (SLS / SLES)', why: 'Strips young natural sebum and causes eye-stinging tears.' },
    { toxin: 'Parabens', why: 'Synthetic preservatives linked to endocrine disruption in growing kids.' },
    { toxin: 'Synthetic Dyes & Lead', why: 'Banned in food-grade cosmetics; Tuco uses edible beetroot pigment.' },
    { toxin: 'Silicones (Dimethicone)', why: 'Clogs young pores and traps playground sweat.' },
    { toxin: 'Aluminium Salts', why: 'Blocks natural sweat glands; Tuco uses arrowroot powder instead.' },
    { toxin: 'Phthalates', why: 'Plasticizing agents never allowed near children.' },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Transparency Lab
          </span>
          <div className="flex items-center gap-1 text-[11px] font-bold text-stone-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Certified</span>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="font-['Poppins'] text-lg font-bold text-[#352002] leading-snug">
            The Clean Ingredients Standard 🌿
          </h1>
          <p className="text-xs text-stone-500">
            Every single drop tested on young skin, never in secret.
          </p>
        </div>

        {/* Tab Switcher: Plants vs The Never Ever List */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('plants')}
            className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'plants'
                ? 'bg-white text-stone-900 shadow-xs font-bold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            🌱 What's In It
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('never')}
            className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'never'
                ? 'bg-rose-50 text-rose-900 border border-rose-200 shadow-xs font-bold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            🚫 The Never Ever List
          </button>
        </div>

        {activeTab === 'plants' ? (
          <div className="space-y-2.5 animate-in fade-in duration-150">
            <span className="text-[11px] font-bold text-stone-700 block">
              Hero Botanical Actives:
            </span>
            {botanicalGoodies.map((b, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1 hover:border-amber-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{b.emoji}</span>
                    <h4 className="font-bold text-xs text-stone-900">{b.name}</h4>
                  </div>
                  <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-[11px] text-stone-600 leading-snug pl-7">{b.role}</p>
                <span className="text-[9px] font-mono text-amber-800 block pl-7 pt-0.5">
                  Found in: {b.usedIn}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2.5 animate-in fade-in duration-150">
            <div className="p-3 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-900 space-y-1">
              <span className="font-bold block">Our Strict Toxin Ban:</span>
              <p className="text-[11px] text-rose-800 leading-relaxed">
                If an ingredient wouldn't be safe if accidentally licked by a toddler, it has zero place in Tuco formulas.
              </p>
            </div>

            {neverEverList.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1"
              >
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
                  <Ban className="w-4 h-4 shrink-0" />
                  <span className="text-stone-900">{item.toxin}</span>
                </div>
                <p className="text-[11px] text-stone-500 pl-6 leading-tight">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Doctor Stamp Banner */}
        <div className="p-3.5 rounded-2xl bg-[#FED543]/20 border border-amber-300 flex items-center gap-3">
          <TucoMascot size="xs" expression="happy" showShadow={false} className="w-9 h-9 shrink-0" />
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-[#352002] block">Certified Pediatrician Tested</span>
            <p className="text-[10px] text-stone-600">
              Zero tears, zero harsh foam, 100% peace of mind for Indian moms and dads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
