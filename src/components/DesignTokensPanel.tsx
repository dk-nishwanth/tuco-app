import React from 'react';
import { Palette, Type, Layers, Smartphone, Sparkles, Check, Info } from 'lucide-react';
import { QuizState } from '../types';

interface DesignTokensPanelProps {
  quizState: QuizState;
  onUpdateQuizState: (updates: Partial<QuizState>) => void;
  visualStyle: 'hifi' | 'wireframe';
  onToggleVisualStyle: (style: 'hifi' | 'wireframe') => void;
  isOpen: boolean;
  onClose: () => void;
}

export const DesignTokensPanel: React.FC<DesignTokensPanelProps> = ({
  quizState,
  onUpdateQuizState,
  visualStyle,
  onToggleVisualStyle,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const colorTokens = [
    { name: 'Tuco Buttercup', hex: '#FED543', role: 'Brand Splash & Onboarding Primary' },
    { name: 'Cocoa Brown', hex: '#3E2500', role: 'High-contrast Typography & Action CTAs' },
    { name: 'Clean Cream Canvas', hex: '#FAF8F5', role: 'Home & Discovery Neutral Canvas' },
    { name: 'Sky Wave Blue', hex: '#38B6FF', role: 'Skincare Mission Hero Banner' },
    { name: 'Berry Blush Pink', hex: '#FCE7F3', role: 'Gift & Hair Care Accents' },
    { name: 'Doctor Leaf Green', hex: '#10B981', role: '100% Natural & Safe Certifications' },
  ];

  return (
    <div className="fixed top-14 right-4 z-40 w-96 max-h-[85vh] bg-stone-900/95 border border-stone-800 text-stone-100 rounded-3xl p-5 shadow-2xl backdrop-blur-md overflow-y-auto hide-scrollbar">
      {/* Panel Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-800">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          <h3 className="font-fredoka text-base font-bold">Design Specs & Inspector</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-stone-400 hover:text-white text-xs font-mono px-2 py-1 rounded bg-stone-800"
        >
          ESC
        </button>
      </div>

      <div className="py-4 space-y-6">
        {/* Style Mode Switcher */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
            Rendering Engine
          </span>
          <div className="grid grid-cols-2 gap-2 p-1 bg-stone-950 rounded-xl border border-stone-800">
            <button
              type="button"
              onClick={() => onToggleVisualStyle('hifi')}
              className={`py-2 px-3 text-xs font-fredoka font-bold rounded-lg transition-all ${
                visualStyle === 'hifi'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              🎨 High-Fidelity
            </button>
            <button
              type="button"
              onClick={() => onToggleVisualStyle('wireframe')}
              className={`py-2 px-3 text-xs font-fredoka font-bold rounded-lg transition-all ${
                visualStyle === 'wireframe'
                  ? 'bg-stone-700 text-white shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              📐 Wireframe Blueprint
            </button>
          </div>
        </div>

        {/* Live Quiz State Simulator */}
        <div className="space-y-3 bg-stone-950/60 p-3.5 rounded-2xl border border-stone-800/80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-300">
              Live Mockup Personalization
            </span>
            <span className="text-[10px] text-amber-400 font-mono">Dynamic Flow</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div>
              <label className="text-stone-400 text-[11px] block mb-1">Child's Name</label>
              <input
                type="text"
                value={quizState.childName}
                onChange={(e) => onUpdateQuizState({ childName: e.target.value })}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="text-stone-400 text-[11px] block mb-1">Age Bracket</label>
              <select
                value={quizState.ageGroup}
                onChange={(e) => onUpdateQuizState({ ageGroup: e.target.value as any })}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-amber-400"
              >
                <option value="3-5 years old">3-5 years old (Early explorers)</option>
                <option value="6-9 years old">6-9 years old (Active kids)</option>
                <option value="10-12 years old">10-12 years old (Pre-teens)</option>
                <option value="13-15 years old">13-15 years old (Teens)</option>
              </select>
            </div>

            <div>
              <label className="text-stone-400 text-[11px] block mb-1">Main Concern</label>
              <select
                value={quizState.concern}
                onChange={(e) => onUpdateQuizState({ concern: e.target.value as any })}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-amber-400"
              >
                <option value="dull & tanned skin">Dull & tanned skin (SPF + Face Wash)</option>
                <option value="tangled & frizzy hair">Tangled & frizzy hair (Detangler)</option>
                <option value="safe makeup">Safe makeup (Beetroot balm)</option>
                <option value="looking for gifts?">Looking for gifts? (Trio Box)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Color Palette Tokens */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-300">
            <Palette className="w-4 h-4 text-amber-400" />
            <span>Tuco Kids Color System</span>
          </div>

          <div className="space-y-1.5">
            {colorTokens.map((c) => (
              <div key={c.hex} className="flex items-center justify-between p-2 rounded-xl bg-stone-950 border border-stone-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-md border border-white/20 shadow-xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="font-medium text-stone-200">{c.name}</span>
                    <span className="block text-[10px] text-stone-500 font-body">{c.role}</span>
                  </div>
                </div>
                <code className="text-[11px] font-mono text-stone-400 bg-stone-900 px-1.5 py-0.5 rounded">
                  {c.hex}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Wireframe Architecture Notes */}
        <div className="space-y-2 text-xs text-stone-400 leading-relaxed bg-stone-950/40 p-3 rounded-2xl border border-stone-800/60 font-body">
          <div className="flex items-center gap-1.5 text-stone-200 font-semibold font-fredoka">
            <Info className="w-4 h-4 text-amber-400" />
            <span>Ergonomics & Layout Math</span>
          </div>
          <ul className="space-y-1 text-[11px] list-disc list-inside">
            <li><strong>Device Specs:</strong> iPhone 17 (375x812pt baseline, r: 48px).</li>
            <li><strong>Touch Zones:</strong> All buttons exceed 44x44px hitbox.</li>
            <li><strong>Wavy Nav:</strong> 76px ergonomic curved bottom anchor with mascot center bubble.</li>
            <li><strong>Scenic Trail Loading Screen:</strong> Inspired by the Pacific Crest Trail reference layout, featuring the animated running Tuco cloud mascot, botanical sky & mountain layers, interactive live quiz questions, and checkpoint formulation cards.</li>
            <li><strong>Full App Lifecycle:</strong> Trail Loading & Formulation → Brand Splash → Step 1 Name → Step 2 Age → Step 3 Concern → Discovery Hub & Wavy Nav → Personalized 3-Step Routine.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
