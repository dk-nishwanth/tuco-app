import React from 'react';
import { TucoMascot } from '../../TucoMascot';
import { ArrowRight, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface ScreenOnboardingHowItWorksProps {
  childName: string;
  onStartDiagnostic: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingHowItWorks: React.FC<ScreenOnboardingHowItWorksProps> = ({
  childName,
  onStartDiagnostic,
  isWireframe = false,
}) => {
  const steps = [
    {
      step: '1',
      icon: '💬',
      title: 'Answer a few questions',
      subtitle: 'Mum reads. Child points or nods. Mum taps.',
    },
    {
      step: '2',
      icon: '🧴',
      title: 'Get your routine',
      subtitle: 'Pure 100% natural formulas built for their age & skin.',
    },
    {
      step: '3',
      icon: '🌟',
      title: 'Check in daily',
      subtitle: '30 seconds each night. Earn badges & unlock ingredient cards.',
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#3E2500]'
      }`}
    >
      {/* Top Header */}
      <div className="pt-2 flex items-center justify-between">
        <span className="text-[11px] font-fredoka font-bold opacity-75">
          How this works
        </span>
        <TucoMascot
          size="xs"
          expression="happy"
          isWireframe={isWireframe}
          showShadow={false}
          className="w-7 h-7"
        />
      </div>

      {/* Main 3 Simple Icons & Steps */}
      <div className="my-auto space-y-5 max-w-[320px] mx-auto w-full">
        <div className="text-center space-y-1">
          <h2 className="font-fredoka text-2xl font-bold tracking-tight text-[#3E2500]">
            The 30-Second Habit
          </h2>
          <p className="text-xs opacity-80 font-body">
            Simple, joyful, and shared together.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="space-y-3">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className={`flex items-start gap-3.5 p-3.5 rounded-2xl transition-all shadow-xs ${
                isWireframe
                  ? 'bg-white border border-zinc-300 text-zinc-900'
                  : 'bg-white/95 text-[#3E2500] hover:bg-white'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl shrink-0">
                {s.icon}
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold font-mono text-amber-800 bg-amber-200/60 px-1.5 py-0.2 rounded">
                    0{s.step}
                  </span>
                  <h3 className="font-fredoka text-sm font-bold leading-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[11px] opacity-75 font-body leading-tight">
                  {s.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <div className="w-full pb-4">
        <button
          type="button"
          onClick={onStartDiagnostic}
          className={`w-full py-4 px-6 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#3E2500] text-[#FED543] hover:bg-[#271700] shadow-amber-950/20'
          }`}
        >
          <span>Start with {childName || 'Ishaan'}</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
