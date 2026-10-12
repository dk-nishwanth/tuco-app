import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { LangviMascot } from '../../LangviMascot';

interface Screen3LangviStudyCalendarProps {
  onNext: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen3LangviStudyCalendar: React.FC<Screen3LangviStudyCalendarProps> = ({
  onNext,
  onClose,
  isWireframe = false,
}) => {
  // Calendar Grid (5 rows of 7 days = 35 days matching Image 571 Screen 3 exactly)
  const calendarCells: Array<'yellow_glasses' | 'blue' | 'empty'> = [
    // Row 1
    'empty',
    'yellow_glasses',
    'yellow_glasses',
    'yellow_glasses',
    'empty',
    'blue',
    'yellow_glasses',
    // Row 2
    'blue',
    'yellow_glasses',
    'yellow_glasses',
    'blue',
    'yellow_glasses',
    'empty',
    'yellow_glasses',
    // Row 3
    'yellow_glasses',
    'yellow_glasses',
    'yellow_glasses',
    'blue',
    'yellow_glasses',
    'empty',
    'blue',
    // Row 4
    'empty',
    'yellow_glasses',
    'empty',
    'yellow_glasses',
    'yellow_glasses',
    'empty',
    'yellow_glasses',
    // Row 5
    'yellow_glasses',
    'yellow_glasses',
    'blue',
    'empty',
    'empty',
    'empty',
    'empty',
  ];

  const daysHeader = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden px-5 pt-3 pb-5 ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#EFEFF4] text-stone-900'
      }`}
    >
      {/* Authentic iOS Status Bar */}
      <div className="w-full flex items-center justify-between text-xs px-2 pt-0.5 pb-2 font-semibold text-stone-800 shrink-0">
        <span className="font-semibold text-[12px] tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 text-[11px]">
          {/* Signal */}
          <div className="flex items-end gap-0.5 h-2.5">
            <span className="w-0.5 h-1 bg-stone-900 rounded-full" />
            <span className="w-0.5 h-1.5 bg-stone-900 rounded-full" />
            <span className="w-0.5 h-2 bg-stone-900 rounded-full" />
            <span className="w-0.5 h-2.5 bg-stone-900 rounded-full" />
          </div>
          {/* WiFi */}
          <svg className="w-3.5 h-3.5 fill-stone-900" viewBox="0 0 24 24">
            <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" />
          </svg>
          {/* Battery */}
          <div className="w-5 h-2.5 border border-stone-900 rounded-[3px] p-0.5 flex items-center relative">
            <div className="w-full h-full bg-stone-900 rounded-[1.5px]" />
            <div className="w-0.5 h-1 bg-stone-900 rounded-r-xs absolute -right-1" />
          </div>
        </div>
      </div>

      {/* Top Header: Close on left, Title center, Chevron right on right */}
      <div className="flex items-center justify-between shrink-0 pb-1">
        <button
          type="button"
          onClick={onClose || onNext}
          className="w-8 h-8 flex items-center justify-center text-stone-900 hover:text-stone-600 transition-all active:scale-90 -ml-1"
          title="Close"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <h2 className="text-base font-extrabold text-stone-900">
          Study calendar
        </h2>

        <button
          type="button"
          onClick={onNext}
          className="w-8 h-8 flex items-center justify-center text-stone-900 hover:text-stone-600 transition-all active:scale-90 -mr-1"
          title="Next"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Days of Week Row */}
      <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold text-stone-400 py-0.5">
        {daysHeader.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* 35 Calendar Cells Grid matching Image 571 exactly */}
      <div className="grid grid-cols-7 gap-1.5 py-1">
        {calendarCells.map((cell, idx) => {
          if (cell === 'yellow_glasses') {
            return (
              <div
                key={idx}
                className="aspect-square rounded-xl bg-[#FEE55A] border border-[#FDE047] flex items-center justify-center shadow-2xs overflow-hidden p-0.5"
              >
                <LangviMascot
                  type="yellow"
                  expression="glasses"
                  size="xs"
                  className="w-7 h-7"
                  isWireframe={isWireframe}
                />
              </div>
            );
          }
          if (cell === 'blue') {
            return (
              <div
                key={idx}
                className="aspect-square rounded-xl bg-[#A7E8FC] border border-[#7DD3FC] flex items-center justify-center shadow-2xs overflow-hidden p-0.5"
              >
                <LangviMascot
                  type="blue"
                  expression="celebrate"
                  size="xs"
                  className="w-7 h-7"
                  isWireframe={isWireframe}
                />
              </div>
            );
          }
          return (
            <div
              key={idx}
              className="aspect-square rounded-xl bg-[#D6D6DD]/80 border border-[#CECED6] flex items-center justify-center"
            >
              <div className="w-3 h-1 rounded-full bg-[#B8B8C2]" />
            </div>
          );
        })}
      </div>

      {/* Monthly Progress Card with Pink Peeking Mascot matching Image 571 */}
      <div
        onClick={onNext}
        className={`rounded-3xl p-4.5 relative overflow-hidden shadow-xs cursor-pointer transition-transform hover:scale-[1.01] my-1 ${
          isWireframe
            ? 'bg-zinc-200 border border-zinc-300 text-zinc-900'
            : 'bg-[#F9C5D5] text-stone-900'
        }`}
      >
        <div className="relative z-10 space-y-0.5 max-w-[210px]">
          <span className="text-[11px] font-bold text-stone-600 block">
            Monthly progress
          </span>
          <h3 className="text-sm font-bold text-white leading-tight">
            You studied for
          </h3>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            25 days!
          </h2>
        </div>

        {/* Cute Pink Mascot peeking from top-right edge with black eyes & open mouth */}
        <div className="absolute -top-3 -right-2 w-24 h-24 pointer-events-none">
          <LangviMascot
            type="pink"
            expression="open_mouth"
            size="md"
            isWireframe={isWireframe}
            className="w-24 h-24"
          />
        </div>
      </div>

      {/* 3 Stats in a horizontal row matching Image 571 */}
      <div className="grid grid-cols-3 gap-2.5 pt-1 pb-2">
        {/* Activity */}
        <div className="p-3 rounded-2xl bg-[#D6D6DE]/70 border border-stone-300/60 shadow-2xs space-y-0.5">
          <span className="text-[10px] font-medium text-stone-500 block">Activity</span>
          <div className="text-lg font-black text-white">237</div>
          <span className="text-[9px] font-medium text-stone-500 block">minutes</span>
        </div>

        {/* Descipline (spelled Descipline in Image 571) */}
        <div className="p-3 rounded-2xl bg-[#D6D6DE]/70 border border-stone-300/60 shadow-2xs space-y-0.5">
          <span className="text-[10px] font-medium text-stone-500 block">Descipline</span>
          <div className="text-lg font-black text-white">78%</div>
          <span className="text-[9px] font-medium text-stone-500 block">focus score</span>
        </div>

        {/* Energy */}
        <div className="p-3 rounded-2xl bg-[#D6D6DE]/70 border border-stone-300/60 shadow-2xs space-y-0.5">
          <span className="text-[10px] font-medium text-stone-500 block">Energy</span>
          <div className="text-lg font-black text-white">82%</div>
          <span className="text-[9px] font-medium text-stone-500 block">battery</span>
        </div>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="w-32 h-1 bg-stone-900/80 rounded-full mx-auto shrink-0" />
    </div>
  );
};
