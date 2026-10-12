import React, { useState } from 'react';
import { TucoMascot, MascotExpression } from '../../TucoMascot';
import { DailyCheckInState, IngredientCard, CBIMission } from '../../../types';
import { Sparkles, Flame, Check, X, ChevronRight, Award, Compass, BookOpen } from 'lucide-react';

interface ScreenHomeScreenProps {
  childName: string;
  checkInState: DailyCheckInState;
  onCheckIn: (didRoutine: boolean) => void;
  latestCard: IngredientCard;
  cbiMission: CBIMission;
  onOpenCollection: () => void;
  onOpenRoutine: () => void;
  onOpenTeensMode: () => void;
  isWireframe?: boolean;
}

export const ScreenHomeScreen: React.FC<ScreenHomeScreenProps> = ({
  childName,
  checkInState,
  onCheckIn,
  latestCard,
  cbiMission,
  onOpenCollection,
  onOpenRoutine,
  onOpenTeensMode,
  isWireframe = false,
}) => {
  const [gentleMessage, setGentleMessage] = useState(false);

  // Determine mascot expression
  let mascotExp: MascotExpression = 'happy';
  if (checkInState.didRoutine === true) {
    mascotExp = 'celebrating';
  } else if (checkInState.didRoutine === false) {
    mascotExp = 'gentle';
  }

  const handleYes = () => {
    setGentleMessage(false);
    onCheckIn(true);
  };

  const handleNo = () => {
    setGentleMessage(true);
    onCheckIn(false);
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Top Greeting & Seasonal Atmosphere */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base">🌟</span>
              <h1 className="font-fredoka text-xl font-bold tracking-tight text-[#3E2500]">
                Good morning, {childName || 'Ishaan'}!
              </h1>
            </div>
            <p className="text-[11px] text-stone-500 font-body">
              Winter morning • 30-second shared check-in
            </p>
          </div>

          {/* Dynamic Mascot expression based on state */}
          <div className="transform scale-90">
            <TucoMascot
              size="sm"
              expression={mascotExp}
              isWireframe={isWireframe}
              className="w-12 h-12"
            />
          </div>
        </div>

        {/* TODAY'S CHECK-IN CARD — The Core 30-second habit */}
        <div className={`rounded-3xl p-4 transition-all shadow-sm ${
          isWireframe
            ? 'bg-white border-2 border-zinc-300'
            : 'bg-white border border-amber-200/60'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-fredoka font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full">
              Today's Shared Check-In
            </span>
            <span className="text-[10px] text-stone-400 font-mono">30 seconds</span>
          </div>

          <h3 className="font-fredoka text-base font-bold text-stone-900">
            Did {childName || 'Ishaan'} do his evening routine?
          </h3>
          <p className="text-xs text-stone-500 font-body mt-0.5 mb-3">
            Wash face + clean lip butter before bed.
          </p>

          {/* Interactive Check-in State */}
          {checkInState.hasAnsweredToday ? (
            checkInState.didRoutine ? (
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1 animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-center gap-1 text-emerald-800 font-fredoka font-bold text-sm">
                  <span>🎉 Great job {childName}!</span>
                </div>
                <p className="text-[11px] text-emerald-700 font-body">
                  Day streak updated! Mascot celebrated. Tap below to see your card!
                </p>
              </div>
            ) : (
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1">
                <p className="font-fredoka font-bold text-amber-900 text-xs">
                  That's okay! Try tomorrow. 💛
                </p>
                <p className="text-[11px] text-amber-800 font-body">
                  No guilt at all! Habits take time to grow.
                </p>
              </div>
            )
          ) : (
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={handleYes}
                className="py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Yes ✓</span>
              </button>

              <button
                type="button"
                onClick={handleNo}
                className="py-3 px-4 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-fredoka font-semibold text-sm flex items-center justify-center gap-1.5 transition-transform active:scale-95"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
                <span>No ✗</span>
              </button>
            </div>
          )}
        </div>

        {/* STREAK COUNTER CARD */}
        <div className="rounded-2xl p-3.5 bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-amber-50 border border-amber-300/40 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-xs">
              <Flame className="w-5 h-5 fill-white stroke-none animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-fredoka text-sm font-extrabold text-stone-900">
                  {checkInState.streakDays} days in a row!
                </span>
              </div>
              <p className="text-[11px] text-stone-600 font-body">
                Keep going to unlock "The Knot Whisperer" card!
              </p>
            </div>
          </div>
          <span className="text-xl">🔥</span>
        </div>

        {/* LATEST INGREDIENT CARD PREVIEW */}
        <div
          onClick={onOpenCollection}
          className="rounded-3xl p-4 bg-white border border-stone-200/80 shadow-xs cursor-pointer hover:border-amber-300 transition-all space-y-2.5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-fredoka font-bold text-stone-800">
                Latest Unlocked Ingredient Card
              </span>
            </div>
            <span className="text-[11px] font-fredoka text-amber-600 flex items-center gap-0.5">
              <span>View All</span>
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-stone-50 border border-stone-100">
            <div
              className="w-12 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-2xs"
              style={{ backgroundColor: isWireframe ? '#E5E7EB' : `${latestCard.accentColor}25` }}
            >
              {latestCard.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono uppercase text-amber-800 font-bold">
                {latestCard.name}
              </span>
              <h4 className="font-fredoka text-sm font-bold text-stone-900 truncate">
                "{latestCard.funName}"
              </h4>
              <p className="text-[11px] text-stone-500 font-body line-clamp-1">
                {latestCard.fact}
              </p>
            </div>
          </div>
        </div>

        {/* CBI MISSION OF THE WEEK */}
        <div className="rounded-3xl p-4 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 border border-sky-200/70 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-fredoka font-bold uppercase tracking-wider text-sky-800 bg-white/80 px-2 py-0.5 rounded-full">
              CBI Mission of the Week
            </span>
            <span className="text-[10px] font-mono text-sky-700 font-bold">Week 1</span>
          </div>

          <h4 className="font-fredoka text-sm font-bold text-stone-900">
            {cbiMission.title}
          </h4>
          <p className="text-xs text-stone-600 font-body leading-relaxed">
            "{cbiMission.prompt}"
          </p>

          <div className="pt-1 flex items-center justify-between">
            <span className="text-[10px] text-sky-800 font-medium">Reward: +1 Clean Detective Star</span>
            <span className="text-xs font-fredoka text-sky-700 font-bold">Shared Moment 🌟</span>
          </div>
        </div>

        {/* Quick Nav to Routine */}
        <div className="pt-1">
          <button
            type="button"
            onClick={onOpenRoutine}
            className="w-full py-3 px-4 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-fredoka font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open {childName}'s Winter Routine (Products & Times)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
