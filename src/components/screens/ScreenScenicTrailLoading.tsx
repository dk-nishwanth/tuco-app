import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Check, MapPin, Compass, ShieldCheck, Heart, Leaf } from 'lucide-react';
import { TucoRunningMascot } from '../TucoRunningMascot';
import { QuizState, ChildAgeGroup, ChildConcern } from '../../types';

interface ScreenScenicTrailLoadingProps {
  quizState: QuizState;
  onUpdateQuizState: (updates: Partial<QuizState>) => void;
  onCompleteTrail?: () => void;
  isWireframe?: boolean;
}

export const ScreenScenicTrailLoading: React.FC<ScreenScenicTrailLoadingProps> = ({
  quizState,
  onUpdateQuizState,
  onCompleteTrail,
  isWireframe = false,
}) => {
  // Steps within the running trail experience
  const [currentStep, setCurrentStep] = useState<number>(1); // 1: Name, 2: Age, 3: Concern, 4: Finished/Formulating
  const [progressDistance, setProgressDistance] = useState<number>(342.5);
  const [isDashing, setIsDashing] = useState<boolean>(false);

  // Animate distance increase on step change
  const advanceStep = () => {
    setIsDashing(true);
    setTimeout(() => {
      setIsDashing(false);
      if (currentStep < 3) {
        setCurrentStep((prev) => prev + 1);
        setProgressDistance((prev) => +(prev + 372.4).toFixed(1));
      } else {
        setCurrentStep(4);
        setProgressDistance(1087.2);
        setTimeout(() => {
          onCompleteTrail?.();
        }, 1500);
      }
    }, 400);
  };

  const ageOptions: ChildAgeGroup[] = [
    '3-5 years old',
    '6-9 years old',
    '10-12 years old',
    '13-15 years old',
  ];

  const concernOptions: ChildConcern[] = [
    'dull & tanned skin',
    'tangled & frizzy hair',
    'safe makeup',
    'looking for gifts?',
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between overflow-hidden select-none transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900'
          : 'bg-[#181513] text-stone-100'
      }`}
    >
      {/* ================= TOP SCENIC HALF ================= */}
      <div className="relative w-full h-[54%] shrink-0 overflow-hidden">
        {/* Sky Background */}
        <div
          className={`absolute inset-0 ${
            isWireframe
              ? 'bg-zinc-200'
              : 'bg-gradient-to-b from-[#94BEE5] via-[#B8D7F2] to-[#E2E8F0]'
          }`}
        >
          {/* Gentle morning sun / clouds */}
          {!isWireframe && (
            <>
              <div className="absolute top-10 left-12 w-16 h-16 rounded-full bg-amber-200/50 blur-lg" />
              <div className="absolute top-14 right-16 w-12 h-6 bg-white/40 rounded-full blur-xs" />
              <div className="absolute top-20 left-20 w-16 h-7 bg-white/30 rounded-full blur-xs" />
            </>
          )}
        </div>

        {/* Top Floating Action Buttons (Like reference: floral/botanical left, share/sparkle right) */}
        <div className="relative z-30 pt-3 px-5 flex items-center justify-between">
          <button
            type="button"
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 shadow-sm ${
              isWireframe
                ? 'bg-white/80 border border-zinc-400 text-zinc-800'
                : 'bg-white/40 border border-white/60 text-stone-800 hover:bg-white/60'
            }`}
            title="Clean Botanical Standards"
          >
            <Leaf className="w-4 h-4 text-emerald-800" />
          </button>

          {/* Title in sky */}
          <div className="text-center">
            <span className={`text-[11px] font-fredoka font-bold uppercase tracking-wider ${
              isWireframe ? 'text-zinc-700' : 'text-stone-800/80 drop-shadow-xs'
            }`}>
              Tuco Clean Care Trail
            </span>
          </div>

          <button
            type="button"
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 shadow-sm ${
              isWireframe
                ? 'bg-white/80 border border-zinc-400 text-zinc-800'
                : 'bg-white/40 border border-white/60 text-stone-800 hover:bg-white/60'
            }`}
            title="100% Natural Safe Trail"
          >
            <Sparkles className="w-4 h-4 text-amber-700" />
          </button>
        </div>

        {/* Scenic Layered Mountains SVG */}
        <svg
          viewBox="0 0 375 280"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 w-full h-[88%] z-10 pointer-events-none"
        >
          {/* Back Distant Peaks (Lavender / Soft Rose) */}
          <path
            d="M-20,280 L-20,120 L40,65 L95,115 L145,55 L220,140 L280,45 L350,110 L400,75 L400,280 Z"
            fill={isWireframe ? '#E4E4E7' : '#E2D4E8'}
            opacity="0.8"
          />

          {/* Mid Layer High Peaks (Strawberry-Peach Sun-Kissed Ridge matching image) */}
          <path
            d="M-10,280 L-10,135 L50,85 L110,145 L170,40 L245,130 L310,60 L390,135 L390,280 Z"
            fill={isWireframe ? '#D4D4D8' : '#FCA5A5'}
          />

          {/* Glacial / Cream Snow Highlight Accents on Mountain Ridges */}
          <path
            d="M170,40 L195,85 L180,95 L170,75 L155,90 L150,75 Z"
            fill={isWireframe ? '#FAFAFA' : '#FEF3C7'}
            opacity="0.9"
          />
          <path
            d="M310,60 L335,100 L320,110 L305,85 Z"
            fill={isWireframe ? '#FAFAFA' : '#FEF3C7'}
            opacity="0.85"
          />

          {/* Pine Tree Forest Ridge Silhouette (Dark Teal / Slate Forest) */}
          <path
            d="M-10,280 L-10,185 
               Q30,175 75,190 
               Q130,175 190,195 
               Q260,170 330,185 
               Q360,180 390,190 L390,280 Z"
            fill={isWireframe ? '#71717A' : '#1E293B'}
          />

          {/* Individual Stylized Pine silhouettes */}
          <g fill={isWireframe ? '#52525B' : '#0F172A'} opacity="0.9">
            <polygon points="40,175 36,188 44,188" />
            <polygon points="48,172 44,185 52,185" />
            <polygon points="120,180 116,192 124,192" />
            <polygon points="135,174 130,190 140,190" />
            <polygon points="270,170 265,185 275,185" />
            <polygon points="290,176 285,190 295,190" />
          </g>

          {/* The Curved Organic Horizon Ridge where Tuco runs! (Matching the black curved wave from screenshot) */}
          <path
            d="M-10,280 L-10,210 
               C60,205 130,225 187.5,225 
               C245,225 315,205 390,210 
               L390,280 Z"
            fill={isWireframe ? '#27272A' : '#141210'}
          />
        </svg>

        {/* THE RUNNING TUCO MASCOT (Positioned directly on the crest!) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 z-20 flex flex-col items-center pointer-events-none">
          <div
            className={`transform transition-all duration-300 ${
              isDashing ? 'scale-110 translate-x-3' : 'scale-100'
            }`}
          >
            <TucoRunningMascot
              size="md"
              isWireframe={isWireframe}
              className="w-16 h-16 drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* ================= BOTTOM QUESTIONS & TRACKER HALF ================= */}
      <div
        className={`relative z-20 flex-1 px-5 pt-3 pb-4 flex flex-col justify-between ${
          isWireframe
            ? 'bg-zinc-900 text-zinc-100'
            : 'bg-[#141210] text-stone-100'
        }`}
      >
        {/* Milestone Subtitle */}
        <div className="text-center pt-1">
          <span className="text-[11px] font-mono tracking-widest text-stone-400 uppercase">
            {currentStep === 4 ? 'Analysis Complete' : `Milestone 0${currentStep} of 03`}
          </span>

          {/* Big Bold Metric / Trail Progress (Like the reference "1087.2 miles") */}
          <div className="mt-1">
            <span className="font-fredoka text-3xl sm:text-4xl font-extrabold tracking-tight text-white block">
              {currentStep === 4 ? '100% Ready' : `${progressDistance}`}
            </span>
            <span className="text-[10px] text-stone-400 font-body uppercase tracking-wider">
              {currentStep === 4 ? 'Pure Clean Happiness' : 'Miles of gentle care explored'}
            </span>
          </div>
        </div>

        {/* Dynamic Interactive Question Area */}
        <div className="my-auto py-2">
          {/* STEP 1: CHILD'S NAME */}
          {currentStep === 1 && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="text-center space-y-0.5">
                <h3 className="font-fredoka text-base font-bold text-amber-300">
                  Who are we formulating for today?
                </h3>
                <p className="text-[11px] text-stone-400">
                  Every Tuco blend is tailored to your child’s name & skin story.
                </p>
              </div>

              <div className="flex items-center gap-2 max-w-xs mx-auto">
                <input
                  type="text"
                  value={quizState.childName}
                  onChange={(e) => onUpdateQuizState({ childName: e.target.value })}
                  placeholder="Child's name (e.g. Maya)"
                  className="flex-1 bg-stone-900/90 border border-stone-700/80 rounded-full px-4 py-2.5 text-xs text-white placeholder-stone-500 text-center outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                />
                <button
                  type="button"
                  onClick={advanceStep}
                  className="px-4 py-2.5 rounded-full bg-amber-400 text-stone-950 font-fredoka font-bold text-xs flex items-center gap-1 shrink-0 active:scale-95 shadow-md"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CHILD'S AGE */}
          {currentStep === 2 && (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              <div className="text-center space-y-0.5">
                <h3 className="font-fredoka text-base font-bold text-amber-300">
                  How old is {quizState.childName || 'your child'}?
                </h3>
                <p className="text-[11px] text-stone-400">
                  Formulas calibrate from early preschool to active pre-teens.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                {ageOptions.map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => {
                      onUpdateQuizState({ ageGroup: age });
                      advanceStep();
                    }}
                    className={`py-2 px-3 rounded-full text-xs font-fredoka font-semibold transition-all active:scale-95 border ${
                      quizState.ageGroup === age
                        ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                        : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-600'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: MAIN CONCERN */}
          {currentStep === 3 && (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              <div className="text-center space-y-0.5">
                <h3 className="font-fredoka text-base font-bold text-amber-300">
                  What’s their biggest priority?
                </h3>
                <p className="text-[11px] text-stone-400">
                  Select their focus to match sunsticks, washes, or serums.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                {concernOptions.map((concern) => (
                  <button
                    key={concern}
                    type="button"
                    onClick={() => {
                      onUpdateQuizState({ concern });
                      advanceStep();
                    }}
                    className={`py-2 px-3 rounded-full text-[11px] font-fredoka font-semibold transition-all active:scale-95 border text-center line-clamp-1 ${
                      quizState.concern === concern
                        ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                        : concern === 'looking for gifts?'
                        ? 'bg-rose-950/40 text-rose-300 border-rose-900/50 hover:border-rose-700'
                        : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-600'
                    }`}
                  >
                    {concern}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: FORMULATED & SPRINTING TO HOME */}
          {currentStep === 4 && (
            <div className="text-center space-y-2 animate-in fade-in duration-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-fredoka font-bold">
                <Check className="w-3.5 h-3.5" />
                <span>Routine Formulated!</span>
              </div>
              <p className="text-xs text-stone-300 font-body">
                Tuco has locked in a 100% natural regimen for <strong className="text-white">{quizState.childName}</strong>!
              </p>
            </div>
          )}
        </div>

        {/* Location / Checkpoint Card (Styled exactly like Kinney Reservoir card in uploaded reference) */}
        <div className="p-3 rounded-2xl bg-stone-900/90 border border-stone-800 text-left space-y-1 shadow-lg">
          <div className="flex items-center gap-1.5 text-xs font-fredoka font-bold text-amber-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {currentStep === 1
                ? 'Papaya & Saffron Valley'
                : currentStep === 2
                ? 'Gentle Oat Barrier Ridge'
                : currentStep === 3
                ? 'Kakadu Plum Sunshine Peak'
                : '100% Clean Skincare Sanctuary'}
            </span>
          </div>
          <p className="text-[10px] text-stone-400 font-body leading-snug line-clamp-2">
            {currentStep === 1
              ? 'Harvesting gentle fruit cleansing enzymes that safely wash away playground dirt without drying skin.'
              : currentStep === 2
              ? 'Calibrating tear-free oat lipids & cold-pressed barrier ceramides for delicate age-appropriate care.'
              : currentStep === 3
              ? 'Mineral zinc oxide SPF 50 shield ready with 80-minute sweat-proof outdoor playtime defense.'
              : 'All 0-toxin ingredients unlocked. Welcoming you to your personalized Tuco Kids discovery hub.'}
          </p>
        </div>

        {/* Trail Bottom 3-Icon Navigation Bar (Like the reference waypoints / map / badge) */}
        <div className="pt-2 flex items-center justify-around border-t border-stone-800/80 text-stone-500">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`p-1.5 transition-colors ${currentStep === 1 ? 'text-amber-400' : 'hover:text-stone-300'}`}
            title="Step 1: Name"
          >
            <Compass className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={advanceStep}
            className={`p-1.5 transition-colors ${currentStep === 2 ? 'text-amber-400' : 'hover:text-stone-300'}`}
            title="Step 2: Age"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onCompleteTrail?.()}
            className="p-1.5 hover:text-stone-300 transition-colors"
            title="Go to Home"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
