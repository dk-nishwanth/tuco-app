import React, { useState } from 'react';
import { Search, Star, Lock } from 'lucide-react';
import { AptivoBottomNav, AptivoNavTab } from '../../AptivoBottomNav';

interface Screen6AptivoCoursesProps {
  onNavigateTab?: (tab: AptivoNavTab) => void;
  onSelectCourse?: (id: string) => void;
  isWireframe?: boolean;
}

export const Screen6AptivoCourses: React.FC<Screen6AptivoCoursesProps> = ({
  onNavigateTab,
  onSelectCourse,
  isWireframe = false,
}) => {
  const [activeCategory, setActiveCategory] = useState('math');
  const [search, setSearch] = useState('');

  const categories = [
    { id: 'math', label: 'Math', icon: '🧮' },
    { id: 'art', label: 'Art', icon: '🎨' },
    { id: 'logic', label: 'Logic', icon: '💡' },
  ];

  const gridCourses = [
    { id: 'addition', title: 'Addition', icon: '+', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#40A9FF]', text: 'text-white' },
    { id: 'puzzles', title: 'Puzzles', icon: '🧩', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#9254DE]', text: 'text-white' },
    { id: 'riddles', title: 'Riddles', icon: '❓', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#36CFC9]', text: 'text-white' },

    { id: 'counting', title: 'Counting', icon: '123', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#1890FF]', text: 'text-white' },
    { id: 'paint', title: 'Paint', icon: '🖌️', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#722ED1]', text: 'text-white' },
    { id: 'coding', title: 'Coding', icon: '</>', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#52C41A]', text: 'text-white' },

    { id: 'subtraction', title: 'Subtraction', icon: '-', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#FF7A45]', text: 'text-white' },
    { id: 'coloring', title: 'Coloring', icon: '🖍️', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#597EF7]', text: 'text-white' },
    { id: 'chess', title: 'Chess', icon: '♟️', bg: isWireframe ? 'bg-zinc-200' : 'bg-[#13C2C2]', text: 'text-white' },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] overflow-hidden ${
        isWireframe ? 'bg-zinc-100 text-zinc-900' : 'bg-[#FAF5EF] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-5 pt-4 space-y-3.5">
        {/* Top Header matching Screen 6 in image 570.png */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FB7185] border border-white flex items-center justify-center text-white text-xs">
              🌸
            </div>
            <h1 className="font-['Poppins'] text-sm font-bold text-stone-900">
              My courses
            </h1>
          </div>

          <span className="w-6 h-6 rounded-full bg-[#F06553] text-white flex items-center justify-center text-xs shadow-2xs">
            ⭐
          </span>
        </div>

        {/* Search Pill Input matching Screen 6 */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full py-2.5 pl-9 pr-3 text-xs rounded-full bg-white border border-stone-200 text-stone-800 placeholder-stone-400 outline-none shadow-2xs font-['Poppins'] focus:border-[#F06553]"
          />
        </div>

        {/* Categories Pill Selector */}
        <div className="flex items-center gap-2 pt-0.5">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-['Poppins'] font-medium transition-all ${
                activeCategory === c.id
                  ? 'bg-white border-2 border-amber-300 text-stone-900 font-bold shadow-2xs'
                  : 'bg-white/80 border border-stone-200 text-stone-600'
              }`}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* 3x3 Grid of Colorful Subject Cards matching Screen 6 in image 570.png */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {gridCourses.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCourse?.(item.id)}
              className={`h-20 rounded-2xl flex flex-col items-center justify-center p-1.5 cursor-pointer shadow-2xs transition-transform hover:scale-103 ${item.bg} ${item.text}`}
            >
              <span className="text-base font-bold font-mono mb-1">{item.icon}</span>
              <span className="font-['Poppins'] text-[10px] font-bold text-center line-clamp-1 leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Subject Rows (Music, Science, Coming Soon) */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="h-16 rounded-2xl bg-[#FF85C0] text-white flex flex-col items-center justify-center p-1 shadow-2xs">
            <span className="text-xs">🎵</span>
            <span className="text-[10px] font-bold font-['Poppins'] mt-1">Music</span>
          </div>

          <div className="h-16 rounded-2xl bg-[#73D13D] text-white flex flex-col items-center justify-center p-1 shadow-2xs">
            <span className="text-xs">🧪</span>
            <span className="text-[10px] font-bold font-['Poppins'] mt-1">Science</span>
          </div>

          <div className="h-16 rounded-2xl bg-stone-200 text-stone-400 flex flex-col items-center justify-center p-1 border border-dashed border-stone-300">
            <Lock className="w-3.5 h-3.5 mb-1" />
            <span className="text-[8px] font-bold font-['Poppins'] uppercase">Locked</span>
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
