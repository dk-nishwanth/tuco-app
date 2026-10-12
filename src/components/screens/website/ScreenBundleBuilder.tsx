import React, { useState } from 'react';
import { Sparkles, Gift, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { ProductIllustration } from '../../ProductIllustration';
import { TUCO_PRODUCTS } from '../../../data/tucoData';
import { Product } from '../../../types';

interface ScreenBundleBuilderProps {
  childName: string;
  onAddBundleToCart: (products: Product[]) => void;
  onBack: () => void;
  isWireframe?: boolean;
}

export const ScreenBundleBuilder: React.FC<ScreenBundleBuilderProps> = ({
  childName = 'Maya',
  onAddBundleToCart,
  onBack,
  isWireframe = false,
}) => {
  const [selectedCleanse, setSelectedCleanse] = useState<Product>(TUCO_PRODUCTS[1]);
  const [selectedProtect, setSelectedProtect] = useState<Product>(TUCO_PRODUCTS[0]);
  const [selectedNourish, setSelectedNourish] = useState<Product>(TUCO_PRODUCTS[4]);
  const [boxColor, setBoxColor] = useState<'yellow' | 'blue' | 'pink'>('yellow');
  const [added, setAdded] = useState<boolean>(false);

  const boxColors = [
    { id: 'yellow', label: 'Sunflower Yellow', hex: '#FED543', text: 'text-amber-950' },
    { id: 'blue', label: 'Playground Sky', hex: '#38B6FF', text: 'text-sky-950' },
    { id: 'pink', label: 'Berry Blush', hex: '#F472B6', text: 'text-pink-950' },
  ];

  const handleAddBox = () => {
    onAddBundleToCart([selectedCleanse, selectedProtect, selectedNourish]);
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-24 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            Custom Gifting & Routine
          </span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            Save ₹398
          </span>
        </div>

        <div className="space-y-1">
          <h1 className="font-['Poppins'] text-lg font-bold text-[#352002] leading-snug">
            Build {childName}'s Custom Trio Box 🎁
          </h1>
          <p className="text-xs text-stone-500">
            Pick 1 Cleanse + 1 Protect + 1 Nourish for just ₹999 (MRP ₹1397)
          </p>
        </div>

        {/* 3D Box Preview Card */}
        <div
          className="rounded-3xl p-4 transition-all duration-300 relative overflow-hidden shadow-xs border border-black/10"
          style={{ backgroundColor: boxColors.find((c) => c.id === boxColor)?.hex }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-full text-stone-800">
              Personalized Keepsake Box
            </span>
            <Sparkles className="w-4 h-4 text-white" />
          </div>

          <div className="text-center py-2">
            <span className="text-[11px] font-medium opacity-80 block">Specially Handcrafted for:</span>
            <h3 className="text-xl font-extrabold text-[#352002] tracking-tight">
              {childName}'s Daily Trio
            </h3>
          </div>

          {/* 3 Selected items in box */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-black/10">
            <div className="bg-white/90 p-2 rounded-2xl flex flex-col items-center text-center">
              <ProductIllustration type={selectedCleanse.illustration} className="w-10 h-12" />
              <span className="text-[9px] font-bold text-stone-800 line-clamp-1 mt-1">
                {selectedCleanse.name}
              </span>
            </div>
            <div className="bg-white/90 p-2 rounded-2xl flex flex-col items-center text-center">
              <ProductIllustration type={selectedProtect.illustration} className="w-10 h-12" />
              <span className="text-[9px] font-bold text-stone-800 line-clamp-1 mt-1">
                {selectedProtect.name}
              </span>
            </div>
            <div className="bg-white/90 p-2 rounded-2xl flex flex-col items-center text-center">
              <ProductIllustration type={selectedNourish.illustration} className="w-10 h-12" />
              <span className="text-[9px] font-bold text-stone-800 line-clamp-1 mt-1">
                {selectedNourish.name}
              </span>
            </div>
          </div>
        </div>

        {/* Box Color Swatches */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-stone-700">Choose Box Color:</span>
          <div className="flex items-center gap-2">
            {boxColors.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setBoxColor(c.id as any)}
                className={`flex-1 py-2 px-3 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  boxColor === c.id
                    ? 'border-stone-900 bg-white ring-2 ring-stone-900 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: c.hex }} />
                <span>{c.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 1 Selector: Cleanse */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800">Step 1: Choose Cleanser</span>
            <span className="text-[10px] text-amber-700 font-semibold">{selectedCleanse.name}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[TUCO_PRODUCTS[1], TUCO_PRODUCTS[3]].map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedCleanse(p)}
                className={`p-2.5 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
                  selectedCleanse.id === p.id
                    ? 'border-amber-500 bg-amber-50/70 ring-1 ring-amber-400'
                    : 'border-stone-200 bg-white'
                }`}
              >
                <ProductIllustration type={p.illustration} className="w-8 h-10 shrink-0" />
                <div className="min-w-0">
                  <h5 className="text-[11px] font-bold text-stone-900 truncate">{p.name}</h5>
                  <span className="text-[9px] text-stone-500">{p.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2 Selector: Protect */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800">Step 2: Choose Sun Defense</span>
            <span className="text-[10px] text-amber-700 font-semibold">{selectedProtect.name}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[TUCO_PRODUCTS[0], TUCO_PRODUCTS[5]].map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProtect(p)}
                className={`p-2.5 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
                  selectedProtect.id === p.id
                    ? 'border-amber-500 bg-amber-50/70 ring-1 ring-amber-400'
                    : 'border-stone-200 bg-white'
                }`}
              >
                <ProductIllustration type={p.illustration} className="w-8 h-10 shrink-0" />
                <div className="min-w-0">
                  <h5 className="text-[11px] font-bold text-stone-900 truncate">{p.name}</h5>
                  <span className="text-[9px] text-stone-500">SPF Defense</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3 Selector: Nourish */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800">Step 3: Choose Daily Nourish</span>
            <span className="text-[10px] text-amber-700 font-semibold">{selectedNourish.name}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[TUCO_PRODUCTS[4], TUCO_PRODUCTS[2]].map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedNourish(p)}
                className={`p-2.5 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
                  selectedNourish.id === p.id
                    ? 'border-amber-500 bg-amber-50/70 ring-1 ring-amber-400'
                    : 'border-stone-200 bg-white'
                }`}
              >
                <ProductIllustration type={p.illustration} className="w-8 h-10 shrink-0" />
                <div className="min-w-0">
                  <h5 className="text-[11px] font-bold text-stone-900 truncate">{p.name}</h5>
                  <span className="text-[9px] text-stone-500">{p.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between shrink-0 shadow-lg">
        <div>
          <span className="text-[10px] text-stone-500">Bundle Price (3 Items):</span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-['Poppins'] font-bold text-base text-stone-900">₹999</span>
            <span className="text-xs text-stone-400 line-through">₹1397</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddBox}
          className={`py-3 px-6 rounded-full font-['Poppins'] font-bold text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 ${
            added ? 'bg-emerald-600 text-white' : 'bg-[#FED543] hover:bg-amber-400 text-[#352002]'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>Trio Box Added!</span>
            </>
          ) : (
            <>
              <Gift className="w-4 h-4" />
              <span>Add Custom Trio Box</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
