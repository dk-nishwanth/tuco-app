import React, { useState, useEffect } from 'react';
import { TucoMascot } from '../../TucoMascot';
import { DiagnosticAnswers } from '../../../types';
import { ArrowLeft, ArrowRight, Check, MapPin, Sparkles, Sun, CloudRain, Snowflake, Wind } from 'lucide-react';

interface ScreenDiagnosticFlowProps {
  childName: string;
  initialQuestionIndex?: number;
  answers: DiagnosticAnswers;
  onUpdateAnswers: (updated: Partial<DiagnosticAnswers>) => void;
  onFinishDiagnostic: () => void;
  onBackToOnboarding: () => void;
  isWireframe?: boolean;
}

export const ScreenDiagnosticFlow: React.FC<ScreenDiagnosticFlowProps> = ({
  childName,
  initialQuestionIndex = 0,
  answers,
  onUpdateAnswers,
  onFinishDiagnostic,
  onBackToOnboarding,
  isWireframe = false,
}) => {
  const [currentStep, setCurrentStep] = useState(initialQuestionIndex);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Sync with initialQuestionIndex if prop changes
  useEffect(() => {
    setCurrentStep(initialQuestionIndex);
  }, [initialQuestionIndex]);

  // Loading screen (Q8) anticipation timer
  useEffect(() => {
    if (currentStep === 7) {
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onFinishDiagnostic(), 400);
            return 100;
          }
          return prev + 2.5; // ~4-5 seconds
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [currentStep, onFinishDiagnostic]);

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBackToOnboarding();
    }
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#3E2500]'
      }`}
    >
      {/* Top Header with Back & Step Progress */}
      {currentStep < 7 && (
        <div className="w-full flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={handleBack}
            className="p-1 rounded-full hover:bg-black/10 transition-colors text-[#3E2500]"
            title="Back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Progress dots (7 question steps) */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentStep
                    ? 'w-5 bg-[#3E2500]'
                    : i < currentStep
                    ? 'bg-[#3E2500] opacity-80'
                    : 'bg-[#3E2500] opacity-25'
                }`}
              />
            ))}
          </div>

          <span className="text-[10px] font-fredoka font-bold opacity-60">
            Q{currentStep + 1}/7
          </span>
        </div>
      )}

      {/* QUESTION 1: Hair or Skin first? */}
      {currentStep === 0 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-5">
          <TucoMascot size="lg" expression="waving" isWireframe={isWireframe} className="w-24 h-24" />

          <div className="space-y-1">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-2.5 py-0.5 rounded-full text-amber-950 inline-block mb-1">
              Mum reads: "Ishaan, should we start with your hair or skin?"
            </span>
            <h2 className="font-fredoka text-xl font-bold tracking-tight text-[#3E2500]">
              {childName}, hair or skin first?
            </h2>
            <p className="text-xs opacity-75 font-body">Child points or nods. Mum taps!</p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full pt-1">
            <button
              type="button"
              onClick={() => {
                onUpdateAnswers({ startFocus: 'hair' });
                handleNext();
              }}
              className={`p-4 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all active:scale-95 shadow-sm ${
                answers.startFocus === 'hair'
                  ? 'bg-white text-[#3E2500] ring-4 ring-[#3E2500]/20 font-bold scale-[1.02]'
                  : 'bg-white/80 hover:bg-white text-[#3E2500]'
              }`}
            >
              <span className="text-4xl">💇</span>
              <span className="font-fredoka font-bold text-sm">Hair Care</span>
              <span className="text-[10px] opacity-70">Scalp & Curls</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onUpdateAnswers({ startFocus: 'skin' });
                handleNext();
              }}
              className={`p-4 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all active:scale-95 shadow-sm ${
                answers.startFocus === 'skin'
                  ? 'bg-white text-[#3E2500] ring-4 ring-[#3E2500]/20 font-bold scale-[1.02]'
                  : 'bg-white/80 hover:bg-white text-[#3E2500]'
              }`}
            >
              <span className="text-4xl">✨</span>
              <span className="font-fredoka font-bold text-sm">Skin Care</span>
              <span className="text-[10px] opacity-70">Face & Barrier</span>
            </button>
          </div>
        </div>
      )}

      {/* QUESTION 2: Hair - What does scalp feel like after washing? */}
      {currentStep === 1 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-4">
          <TucoMascot size="md" expression="thinking" isWireframe={isWireframe} className="w-20 h-20" />

          <div className="space-y-1">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-2.5 py-0.5 rounded-full text-amber-950 inline-block mb-1">
              Hair • Scalp Check
            </span>
            <h2 className="font-fredoka text-lg font-bold tracking-tight text-[#3E2500]">
              What does your scalp feel like after washing?
            </h2>
          </div>

          <div className="w-full space-y-2.5 pt-1">
            {[
              { id: 'dry-flaky', label: 'Dry and flaky', emoji: '❄️', hint: 'Feels tight or white specks' },
              { id: 'fine', label: 'Fine & happy', emoji: '😊', hint: 'Clean and comfortable' },
              { id: 'itchy', label: 'Itchy & scratchy', emoji: '🤏', hint: 'Wants to scratch their head' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onUpdateAnswers({ hairScalpFeel: opt.id as any });
                  handleNext();
                }}
                className={`w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition-all active:scale-98 ${
                  answers.hairScalpFeel === opt.id
                    ? 'bg-white text-[#3E2500] ring-3 ring-[#3E2500]/20 font-bold shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#3E2500]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.emoji}</span>
                  <div>
                    <span className="font-fredoka text-sm font-bold block">{opt.label}</span>
                    <span className="text-[11px] opacity-70 font-body">{opt.hint}</span>
                  </div>
                </div>
                {answers.hairScalpFeel === opt.id && <Check className="w-4 h-4 text-amber-600 stroke-[3]" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUESTION 3: Hair - What does hair look like the next day? */}
      {currentStep === 2 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-4">
          <TucoMascot size="md" expression="happy" isWireframe={isWireframe} className="w-20 h-20" />

          <div className="space-y-1">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-2.5 py-0.5 rounded-full text-amber-950 inline-block mb-1">
              Hair • Morning Look
            </span>
            <h2 className="font-fredoka text-lg font-bold tracking-tight text-[#3E2500]">
              What does your hair look like the next day?
            </h2>
          </div>

          <div className="w-full space-y-2.5 pt-1">
            {[
              { id: 'soft-bouncy', label: 'Soft and bouncy', emoji: '🌸', desc: 'Combs easily without tears' },
              { id: 'frizzy-tangled', label: 'Frizzy and tangled', emoji: '🦁', desc: 'Morning bedhead tantrums' },
              { id: 'oily-flat', label: 'Oily and flat', emoji: '💧', desc: 'Loses volume quickly' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onUpdateAnswers({ hairNextDay: opt.id as any });
                  handleNext();
                }}
                className={`w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition-all active:scale-98 ${
                  answers.hairNextDay === opt.id
                    ? 'bg-white text-[#3E2500] ring-3 ring-[#3E2500]/20 font-bold shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#3E2500]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.emoji}</span>
                  <div>
                    <span className="font-fredoka text-sm font-bold block">{opt.label}</span>
                    <span className="text-[11px] opacity-70 font-body">{opt.desc}</span>
                  </div>
                </div>
                {answers.hairNextDay === opt.id && <Check className="w-4 h-4 text-amber-600 stroke-[3]" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUESTION 4: Skin - After your bath, what does your skin feel like? */}
      {currentStep === 3 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-4">
          <TucoMascot size="md" expression="gentle" isWireframe={isWireframe} className="w-20 h-20" />

          <div className="space-y-1">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-2.5 py-0.5 rounded-full text-amber-950 inline-block mb-1">
              Skin • After Bath Feel
            </span>
            <h2 className="font-fredoka text-lg font-bold tracking-tight text-[#3E2500]">
              After your bath, what does your skin feel like?
            </h2>
          </div>

          <div className="w-full space-y-2.5 pt-1">
            {[
              { id: 'tight-dry', label: 'Tight and dry', emoji: '🌵', desc: 'Needs cream immediately' },
              { id: 'soft-fine', label: 'Soft and fine', emoji: '👶', desc: 'Normal comfortable skin' },
              { id: 'itchy-rough', label: 'Itchy and rough', emoji: '🔴', desc: 'Red patches or sensitive skin' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onUpdateAnswers({ skinBathFeel: opt.id as any });
                  handleNext();
                }}
                className={`w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition-all active:scale-98 ${
                  answers.skinBathFeel === opt.id
                    ? 'bg-white text-[#3E2500] ring-3 ring-[#3E2500]/20 font-bold shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#3E2500]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.emoji}</span>
                  <div>
                    <span className="font-fredoka text-sm font-bold block">{opt.label}</span>
                    <span className="text-[11px] opacity-70 font-body">{opt.desc}</span>
                  </div>
                </div>
                {answers.skinBathFeel === opt.id && <Check className="w-4 h-4 text-amber-600 stroke-[3]" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUESTION 5: Skin - Does your skin look dull after playing outside? */}
      {currentStep === 4 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-4">
          <div className="relative">
            <TucoMascot size="md" expression="thinking" isWireframe={isWireframe} className="w-20 h-20" />
            <span className="absolute -top-1 -right-2 text-xl">☀️</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-2.5 py-0.5 rounded-full text-amber-950 inline-block mb-1">
              Sun & Play Check
            </span>
            <h2 className="font-fredoka text-lg font-bold tracking-tight text-[#3E2500]">
              Does your skin look dull after playing outside?
            </h2>
            <p className="text-xs opacity-75 font-body">Coming home from playground or outdoor sports</p>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full pt-1">
            {[
              { id: 'yes', label: 'Yes', emoji: '🥵', desc: 'Gets tanned' },
              { id: 'sometimes', label: 'Sometimes', emoji: '⛅', desc: 'In strong sun' },
              { id: 'never', label: 'Never', emoji: '😎', desc: 'Stays bright' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onUpdateAnswers({ skinDullSun: opt.id as any });
                  handleNext();
                }}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs ${
                  answers.skinDullSun === opt.id
                    ? 'bg-white text-[#3E2500] ring-3 ring-[#3E2500]/20 font-bold shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#3E2500]'
                }`}
              >
                <span className="text-2xl">{opt.emoji}</span>
                <span className="font-fredoka text-sm font-bold">{opt.label}</span>
                <span className="text-[10px] opacity-70">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUESTION 6: Season Check - Automatic from phone location */}
      {currentStep === 5 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-4">
          <TucoMascot size="md" expression="happy" isWireframe={isWireframe} className="w-20 h-20" />

          <div className="space-y-1">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-2.5 py-0.5 rounded-full text-amber-950 inline-block mb-1">
              Weather & Season Adaptation
            </span>
            <h2 className="font-fredoka text-lg font-bold tracking-tight text-[#3E2500]">
              It's winter in Bangalore right now.
            </h2>
            <p className="text-xs opacity-75 font-body">
              Automatic from location • Mum confirms or changes
            </p>
          </div>

          {/* Location / Season Card */}
          <div className="w-full p-4 rounded-3xl bg-white shadow-md text-left space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span className="font-fredoka font-bold text-sm text-stone-900">Current Climate</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                Auto-Detected
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {[
                { city: 'Bangalore · Winter', icon: <Snowflake className="w-4 h-4 text-sky-500" />, desc: 'Dry cool breeze' },
                { city: 'Mumbai · Humid', icon: <CloudRain className="w-4 h-4 text-blue-500" />, desc: 'Sweaty coastal air' },
                { city: 'Delhi · Cold Dry', icon: <Wind className="w-4 h-4 text-teal-500" />, desc: 'Chapped barrier' },
                { city: 'Chennai · Warm Sun', icon: <Sun className="w-4 h-4 text-amber-500" />, desc: 'Year-round UV' },
              ].map((loc) => (
                <button
                  key={loc.city}
                  type="button"
                  onClick={() => onUpdateAnswers({ seasonCity: loc.city })}
                  className={`p-2.5 rounded-2xl border text-left flex items-start gap-2 transition-all ${
                    answers.seasonCity === loc.city
                      ? 'border-[#3E2500] bg-amber-50/80 font-bold ring-2 ring-[#3E2500]/20'
                      : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800'
                  }`}
                >
                  <span className="mt-0.5">{loc.icon}</span>
                  <div>
                    <span className="font-fredoka text-xs block leading-tight">{loc.city}</span>
                    <span className="text-[10px] text-stone-500 font-body">{loc.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* QUESTION 7: Any concerns? (Multi-select) */}
      {currentStep === 6 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-4">
          <TucoMascot size="md" expression="waving" isWireframe={isWireframe} className="w-20 h-20" />

          <div className="space-y-1">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-2.5 py-0.5 rounded-full text-amber-950 inline-block mb-1">
              Final Step • Multi-Select
            </span>
            <h2 className="font-fredoka text-lg font-bold tracking-tight text-[#3E2500]">
              Any specific concerns for {childName}?
            </h2>
            <p className="text-xs opacity-75 font-body">Tap any that apply (or choose None)</p>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full pt-1">
            {[
              { id: 'Dry skin', emoji: '🌵' },
              { id: 'Dull skin', emoji: '☀️' },
              { id: 'Tangles', emoji: '🦁' },
              { id: 'Dandruff', emoji: '❄️' },
              { id: 'Sensitive skin', emoji: '🌱' },
              { id: 'None', emoji: '✨' },
            ].map((concern) => {
              const isSelected = answers.concerns.includes(concern.id);
              return (
                <button
                  key={concern.id}
                  type="button"
                  onClick={() => {
                    if (concern.id === 'None') {
                      onUpdateAnswers({ concerns: ['None'] });
                    } else {
                      const updated = isSelected
                        ? answers.concerns.filter((c: string) => c !== concern.id)
                        : [...answers.concerns.filter((c: string) => c !== 'None'), concern.id];
                      onUpdateAnswers({ concerns: updated });
                    }
                  }}
                  className={`p-3 rounded-2xl flex items-center justify-between text-left transition-all active:scale-95 ${
                    isSelected
                      ? 'bg-white text-[#3E2500] ring-3 ring-[#3E2500]/20 font-bold shadow-md'
                      : 'bg-white/80 hover:bg-white text-[#3E2500]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{concern.emoji}</span>
                    <span className="font-fredoka text-xs font-bold">{concern.id}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-600 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* QUESTION 8: Loading Screen (Mascot is thinking, animated, 5 seconds) */}
      {currentStep === 7 && (
        <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto text-center space-y-6">
          <div className="relative transform scale-110">
            <TucoMascot
              size="xl"
              expression="thinking"
              isWireframe={isWireframe}
              className="w-36 h-36"
            />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-fredoka font-semibold bg-white/70 px-3 py-1 rounded-full text-amber-950 inline-block shadow-2xs">
              Mascot is thinking... 💭
            </span>
            <h2 className="font-fredoka text-2xl font-bold tracking-tight text-[#3E2500] leading-snug">
              {childName}’s perfect routine is being created...
            </h2>
            <p className="text-xs opacity-75 font-body">
              Matching plant ceramides, SPF shield, and tear-free ingredients.
            </p>
          </div>

          {/* 5-second progress bar */}
          <div className="w-full space-y-1.5 pt-2">
            <div className="w-full bg-black/10 h-2.5 rounded-full overflow-hidden p-0.5">
              <div
                className="bg-[#3E2500] h-full rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono opacity-70">
              <span>Analyzing Bangalore winter</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA for steps 0 to 6 */}
      {currentStep < 7 && (
        <div className="w-full pb-4">
          <button
            type="button"
            onClick={handleNext}
            className={`w-full py-4 px-6 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
              isWireframe
                ? 'bg-zinc-900 text-white'
                : 'bg-[#3E2500] text-[#FED543] hover:bg-[#271700] shadow-amber-950/20'
            }`}
          >
            <span>{currentStep === 6 ? `Create ${childName}'s Routine` : 'Continue'}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      )}
    </div>
  );
};
