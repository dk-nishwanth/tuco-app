import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Star, ChevronRight } from 'lucide-react';
import { TucoWavyNav } from '../TucoWavyNav';
import { ProductIllustration } from '../ProductIllustration';
import { QuizState } from '../../types';

interface Screen6DiscoverHomeProps {
  quizState: QuizState;
  cartCount: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  onSelectProduct?: (product: any) => void;
  onAddToCart?: (product: any) => void;
  onNavigateTab?: (tab: 'home' | 'settings' | 'profile') => void;
  onGoToRoutine?: () => void;
  isWireframe?: boolean;
}

export const Screen6DiscoverHome: React.FC<Screen6DiscoverHomeProps> = ({
  quizState,
  cartCount = 2,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  onAddToCart,
  onNavigateTab,
  onGoToRoutine,
  isWireframe = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'sun', name: 'Sun & Tan', icon: '☀️' },
    { id: 'hair', name: 'Hair Care', icon: '🧴' },
    { id: 'face', name: 'Face Care', icon: '🫧' },
    { id: 'bath', name: 'Bath & Body', icon: '🛁' },
  ];

  const matchedProducts = [
    {
      id: 'prod-1',
      name: 'reetha shampoo for kids',
      rating: 4.8,
      reviews: 420,
      price: 410,
      originalPrice: 450,
      discount: '10% off',
      badge: 'Bestseller',
      illustration: 'sunstick' as const,
      imageBg: '#FEF08A',
    },
    {
      id: 'prod-2',
      name: 'reetha shampoo for kids',
      rating: 4.9,
      reviews: 312,
      price: 410,
      originalPrice: 450,
      discount: '10% off',
      badge: 'Parent Pick',
      illustration: 'facewash' as const,
      imageBg: '#FED7AA',
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Feed Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-2 pb-4 space-y-3.5">
        {/* Top Header: Search + Heart + Bag with orange badge */}
        <div className="flex items-center gap-2 pt-1">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search gentle sunsticks, wash..."
              readOnly
              className={`w-full py-2 pl-8 pr-3 text-[11px] rounded-full outline-none font-['Poppins'] transition-all ${
                isWireframe
                  ? 'bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400'
                  : 'bg-white text-stone-800 border border-stone-200 placeholder-stone-400 shadow-2xs'
              }`}
            />
          </div>

          <button
            type="button"
            onClick={onOpenWishlist}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
            title="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F97316] text-white font-['Poppins'] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Kicker Row matching Screenshot 6 */}
        <div className="flex items-center justify-between px-0.5">
          <div>
            <p className="text-[10px] text-stone-500 font-['Poppins']">
              Special Routine for <span className="font-semibold text-stone-800">{quizState.childName || 'Maya'}</span> ({quizState.ageGroup.split(' ')[0]} yrs)
            </p>
            <h1 className="font-['Poppins'] text-base font-bold tracking-tight text-[#352002]">
              Discover Clean Care
            </h1>
          </div>
          <button
            type="button"
            onClick={onGoToRoutine}
            className="text-[10px] font-['Poppins'] font-bold flex items-center gap-0.5 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full"
          >
            <span>Routine</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Hero Promotional Banner matching Screenshot 6 */}
        <div
          onClick={onGoToRoutine}
          className={`relative rounded-3xl p-4 overflow-hidden cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-sm ${
            isWireframe
              ? 'bg-zinc-200 border border-zinc-300 text-zinc-800'
              : 'bg-gradient-to-br from-[#38B6FF] via-[#0EA5E9] to-[#0284C7] text-white'
          }`}
        >
          <div className="relative z-10 flex flex-col justify-between min-h-[130px]">
            <div className="max-w-[190px] space-y-1">
              <h2 className="font-['Poppins'] text-lg font-bold leading-tight">
                we're rebuilding kids skincare. 🌿
              </h2>
              <p className="text-[10px] opacity-90 leading-tight">
                harsh adult products were never meant for them
              </p>
            </div>

            {/* Circular photo & product bottle cutout */}
            <div className="absolute right-2 bottom-1 w-28 h-28 flex items-center justify-center">
              <div className="relative w-18 h-18 rounded-full border-2 border-white/90 overflow-hidden bg-amber-100 flex items-center justify-center shadow-md">
                <span className="text-2xl">👧</span>
              </div>
              <div className="absolute -left-1 bottom-0 transform rotate-12 scale-70">
                <ProductIllustration type="sunstick" isWireframe={isWireframe} />
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-['Poppins'] font-bold px-3 py-1 rounded-full bg-white text-sky-800 shadow-2xs">
                <span>Shop Kid Safe Sun & Wash</span>
                <ChevronRight className="w-3 h-3 stroke-[3]" />
              </span>
            </div>
          </div>
        </div>

        {/* Categories Row matching Screenshot 6 */}
        <div>
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[11px] font-['Poppins'] font-bold text-stone-700">Categories</span>
            <span className="text-[10px] text-stone-400 font-['Poppins']">100% certified</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {categories.map((c) => (
              <div
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`h-16 rounded-2xl flex flex-col items-center justify-center p-1 cursor-pointer transition-all ${
                  isWireframe
                    ? 'bg-white border border-zinc-200 text-zinc-700'
                    : selectedCategory === c.id
                    ? 'bg-amber-100 border border-amber-300 text-[#352002] font-semibold'
                    : 'bg-white border border-stone-200 text-stone-700 hover:border-amber-300'
                }`}
              >
                <span className="text-lg">{c.icon}</span>
                <span className="text-[9px] font-['Poppins'] font-medium text-center line-clamp-1 mt-0.5">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Matched Section matching Screenshot 6 */}
        <div className="space-y-2 pt-0.5">
          <div className="flex items-center justify-between px-0.5">
            <div>
              <span className="text-[11px] font-['Poppins'] font-bold text-stone-800 block">
                Matched for {quizState.concern}
              </span>
              <p className="text-[9px] text-stone-500">
                Dermatologist vetted for young skin
              </p>
            </div>
            <button
              type="button"
              onClick={onGoToRoutine}
              className="text-[10px] font-['Poppins'] font-semibold text-amber-700 hover:underline"
            >
              View Routine
            </button>
          </div>

          {/* 2-Column Product Cards matching Screenshot 6 */}
          <div className="grid grid-cols-2 gap-2.5">
            {matchedProducts.map((p, idx) => (
              <div
                key={p.id + idx}
                onClick={() => onSelectProduct?.(p)}
                className="rounded-2xl p-2.5 bg-white border border-stone-200 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-amber-300 transition-all"
              >
                {/* Illustration Frame with Bottles */}
                <div
                  className="w-full h-24 rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: p.imageBg }}
                >
                  <ProductIllustration type={p.illustration} isWireframe={isWireframe} className="w-14 h-16" />
                </div>

                <div className="space-y-1 mt-1.5">
                  <h4 className="font-['Poppins'] text-[11px] font-semibold text-stone-900 leading-tight line-clamp-1">
                    {p.name}
                  </h4>

                  <div className="flex items-center gap-1 text-[9px] text-amber-600 font-medium">
                    <div className="flex text-amber-400">
                      {'★'.repeat(5)}
                    </div>
                    <span>({p.reviews})</span>
                  </div>

                  <div className="flex items-baseline gap-1 text-[11px]">
                    <span className="font-['Poppins'] font-bold text-stone-900">₹{p.price}</span>
                    <span className="text-[9px] text-stone-400 line-through">₹{p.originalPrice}</span>
                    <span className="text-[8px] text-emerald-600 font-semibold font-mono">({p.discount})</span>
                  </div>
                </div>

                {/* Yellow "add to cart" pill button matching Screenshot 6 */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart?.(p);
                  }}
                  className="w-full mt-2 py-1.5 rounded-full bg-[#FED543] hover:bg-amber-400 text-[#352002] font-['Poppins'] font-bold text-[10px] text-center shadow-2xs transition-transform active:scale-95"
                >
                  add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Curved Wavy Nav Bar with Yellow Home Mascot Bubble */}
      <TucoWavyNav
        activeTab="home"
        isWireframe={isWireframe}
        onTabChange={onNavigateTab}
      />
    </div>
  );
};
