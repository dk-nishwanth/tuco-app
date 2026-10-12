import React from 'react';
import { ProductIllustration } from '../../ProductIllustration';
import { GeneratedRoutine, RoutineItem } from '../../../types';
import { ArrowLeft, ExternalLink, Sparkles, Sun, Moon, Calendar, Heart, ShieldCheck, ShoppingBag } from 'lucide-react';

interface ScreenMyRoutineProps {
  childName: string;
  routine: GeneratedRoutine;
  onGoToHome: () => void;
  onOpenShopBag: () => void;
  onSelectProduct: (product: any) => void;
  isWireframe?: boolean;
}

export const ScreenMyRoutine: React.FC<ScreenMyRoutineProps> = ({
  childName,
  routine,
  onGoToHome,
  onOpenShopBag,
  onSelectProduct,
  isWireframe = false,
}) => {
  const allRoutineItems = [...routine.morning, ...routine.evening, routine.weekly.product];
  const totalPrice = allRoutineItems.reduce((sum, item) => sum + item.price, 0);
  const bundleDiscount = Math.round(totalPrice * 0.85); // 15% routine bundle savings

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Top Bar with back to home & cart trigger */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={onGoToHome}
            className="flex items-center gap-1.5 text-xs font-fredoka font-semibold text-stone-600 hover:text-stone-900 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Daily Home</span>
          </button>

          <span className="text-[10px] font-fredoka font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
            Dermatologist Vetted
          </span>
        </div>

        {/* Hero Header as specified */}
        <div className="text-center space-y-1 py-1">
          <h1 className="font-fredoka text-2xl font-bold tracking-tight text-[#3E2500]">
            {routine.seasonTitle}
          </h1>
          <p className="text-xs text-stone-500 font-body">
            Formulated just for {childName || 'Ishaan'} • 100% plant & mineral goodness
          </p>
        </div>

        {/* MORNING ROUTINE CARD */}
        <div className="rounded-3xl p-4 bg-white border border-stone-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm">
                <Sun className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-fredoka text-sm font-bold text-stone-900">Morning Routine</h3>
                <span className="text-[10px] text-stone-400 font-body">Before school & morning playground</span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-amber-600 font-bold">2 mins</span>
          </div>

          <div className="space-y-3">
            {routine.morning.map((item, idx) => (
              <div
                key={item.id + idx}
                onClick={() => onSelectProduct(item)}
                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-stone-50 cursor-pointer transition-all border border-transparent hover:border-stone-200"
              >
                <div
                  className="w-14 h-16 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: isWireframe ? '#E5E7EB' : item.imageBg }}
                >
                  <ProductIllustration type={item.illustration} isWireframe={isWireframe} className="w-10 h-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-fredoka text-xs font-bold text-stone-900 truncate">{item.name}</h4>
                    <span className="font-fredoka text-xs font-bold text-stone-800">₹{item.price}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 font-body leading-snug mt-0.5">{item.whyLine}</p>
                  <span className="text-[10px] text-amber-700 font-semibold mt-1 inline-block bg-amber-50 px-2 py-0.5 rounded-md">
                    {item.instruction}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EVENING ROUTINE CARD */}
        <div className="rounded-3xl p-4 bg-white border border-stone-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm">
                <Moon className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-fredoka text-sm font-bold text-stone-900">Evening Routine</h3>
                <span className="text-[10px] text-stone-400 font-body">After playtime & bath</span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-indigo-600 font-bold">1 min</span>
          </div>

          <div className="space-y-3">
            {routine.evening.map((item, idx) => (
              <div
                key={item.id + idx}
                onClick={() => onSelectProduct(item)}
                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-stone-50 cursor-pointer transition-all border border-transparent hover:border-stone-200"
              >
                <div
                  className="w-14 h-16 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: isWireframe ? '#E5E7EB' : item.imageBg }}
                >
                  <ProductIllustration type={item.illustration} isWireframe={isWireframe} className="w-10 h-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-fredoka text-xs font-bold text-stone-900 truncate">{item.name}</h4>
                    <span className="font-fredoka text-xs font-bold text-stone-800">₹{item.price}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 font-body leading-snug mt-0.5">{item.whyLine}</p>
                  <span className="text-[10px] text-indigo-700 font-semibold mt-1 inline-block bg-indigo-50 px-2 py-0.5 rounded-md">
                    {item.instruction}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WEEKLY CHAMPI CARD */}
        <div className="rounded-3xl p-4 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 border border-amber-200/60 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">💆</span>
              <div>
                <h3 className="font-fredoka text-sm font-bold text-amber-950">{routine.weekly.title}</h3>
                <span className="text-[10px] text-amber-800 font-semibold">{routine.weekly.subtitle}</span>
              </div>
            </div>
            <span className="text-[10px] font-fredoka font-bold text-amber-900 bg-white/80 px-2.5 py-0.5 rounded-full">
              {routine.weekly.frequency}
            </span>
          </div>

          <p className="text-xs text-amber-900/90 font-body leading-relaxed">
            {routine.weekly.instruction}
          </p>

          <div
            onClick={() => onSelectProduct(routine.weekly.product)}
            className="flex items-center gap-3 p-2 rounded-2xl bg-white/90 hover:bg-white cursor-pointer transition-all border border-amber-200/40"
          >
            <div className="w-10 h-12 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
              <ProductIllustration type="lotion" isWireframe={isWireframe} className="w-8 h-10" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-fredoka text-xs font-bold text-stone-900 truncate">
                {routine.weekly.product.name}
              </h5>
              <p className="text-[10px] text-stone-500 font-body">Pure coconut, hibiscus & almond</p>
            </div>
            <span className="font-fredoka text-xs font-bold text-amber-900">₹{routine.weekly.product.price}</span>
          </div>
        </div>

        {/* BOTTOM SHOP CALLOUT & SEASON REMINDER */}
        <div className="pt-2 space-y-3">
          <a
            href={`https://tucokids.com/`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              // Also trigger open bag for demo interaction
              onOpenShopBag();
            }}
            className={`w-full py-4 px-6 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
              isWireframe
                ? 'bg-zinc-900 text-white'
                : 'bg-[#3E2500] text-[#FED543] hover:bg-[#271700] shadow-amber-950/20'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop this routine → (Pre-filled bundle ₹{bundleDiscount})</span>
          </a>

          <p className="text-[11px] text-center text-stone-500 font-body">
            We’ll remind you when to update this for summer. ☀️
          </p>
        </div>
      </div>
    </div>
  );
};
