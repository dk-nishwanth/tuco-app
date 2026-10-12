import React, { useState } from 'react';
import { ArrowLeft, Star, Check } from 'lucide-react';
import { AptivoBottomNav, AptivoNavTab } from '../../AptivoBottomNav';

interface Screen7AptivoCourseDetailProps {
  onBack?: () => void;
  onNavigateTab?: (tab: AptivoNavTab) => void;
  isWireframe?: boolean;
}

export const Screen7AptivoCourseDetail: React.FC<Screen7AptivoCourseDetailProps> = ({
  onBack,
  onNavigateTab,
  isWireframe = false,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  const lessons = [
    { id: 1, title: 'Numbers 1 to 5', done: true },
    { id: 2, title: 'Numbers 6 to 10', done: true },
    { id: 3, title: 'Numbers 11 to 15', active: true },
    { id: 4, title: 'Numbers 16 to 20', done: false },
    { id: 5, title: 'Counting Game', done: false },
    { id: 6, title: 'Practice Quiz 1', done: false },
    { id: 7, title: 'Practice Quiz 2', done: false },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] overflow-hidden ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* Top Hero Banner matching Screen 7 in image 570.png */}
        <div
          className={`p-5 pt-4 pb-6 relative rounded-b-[28px] shadow-sm ${
            isWireframe ? 'bg-zinc-800 text-white' : 'bg-[#2F80ED] text-white'
          }`}
        >
          {/* Top Row with Back & Star */}
          <div className="flex items-center justify-between pb-3">
            <button
              type="button"
              onClick={onBack}
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white active:scale-95 transition-transform"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <Star className="w-4 h-4 fill-white text-white opacity-90" />
          </div>

          {/* Title and Badge Card */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-stone-900 flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
              <span className="text-xl">🔢</span>
            </div>
            <div>
              <h1 className="font-['Poppins'] text-base font-bold leading-tight">
                Counting to 20
              </h1>
              <p className="text-[11px] opacity-80 font-medium">
                Math • 6 lessons
              </p>
            </div>
          </div>
        </div>

        {/* Sub-Card & Description */}
        <div className="p-5 space-y-4">
          <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-2">
            <p className="text-[11px] text-stone-600 leading-snug">
              Learn to count all the way to 20 with fun games, pictures, and clean daily skin habits!
            </p>

            {/* Mascot Progress Pill */}
            <div className="flex items-center gap-2 pt-1">
              <div className="w-6 h-6 rounded-full bg-[#FB7185] flex items-center justify-center text-xs">
                🌸
              </div>
              <span className="font-['Poppins'] text-[11px] font-bold text-stone-800">
                2 of 6 lessons done
              </span>
            </div>
          </div>

          {/* Section: Lessons Pill List matching Screen 7 in image 570.png */}
          <div className="space-y-2">
            <span className="text-xs font-bold font-['Poppins'] text-stone-800 block px-0.5">
              Lessons
            </span>

              {/* Lessons List */}
              <div className="space-y-2">
                {lessons.map((lesson, idx) => {
                  const isActive = idx === activeStepIndex;
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`p-3 rounded-2xl flex items-center justify-between cursor-pointer transition-all shadow-2xs ${
                        isActive
                          ? 'bg-white border-2 border-[#2F80ED] text-stone-900 font-bold'
                          : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <span className="text-xs font-['Poppins']">
                        {lesson.title}
                      </span>

                      {lesson.done && (
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Start Lesson Primary Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  className={`w-full py-3 px-5 rounded-full font-['Poppins'] text-xs font-bold text-center tracking-wide shadow-sm transition-all active:scale-98 ${
                    isWireframe
                      ? 'bg-zinc-900 text-white'
                      : 'bg-[#2F80ED] hover:bg-[#2563EB] text-white'
                  }`}
                >
                  Start Lesson 3 • Numbers 11 to 15
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Floating Bottom Navigation */}
      <AptivoBottomNav
        activeTab="courses"
        onTabChange={onNavigateTab}
        isWireframe={isWireframe}
      />
    </div>
  );
};
