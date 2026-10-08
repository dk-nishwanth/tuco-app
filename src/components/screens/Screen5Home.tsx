import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Star, Plus, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { TucoWavyNav } from '../TucoWavyNav';
import { ProductIllustration } from '../ProductIllustration';
import { TUCO_PRODUCTS, TUCO_CATEGORIES } from '../../data/tucoData';
import { Product, QuizState } from '../../types';

interface Screen5HomeProps {
  quizState: QuizState;
  cartCount: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  onSelectProduct?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onNavigateTab?: (tab: 'home' | 'settings' | 'profile' | 'wishlist' | 'search') => void;
  onGoToRoutine?: () => void;
  isWireframe?: boolean;
}

export const Screen5Home: React.FC<Screen5HomeProps> = ({
  quizState,
  cartCount = 0,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  onAddToCart,
  onNavigateTab,
  onGoToRoutine,
  isWireframe = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Products matching quiz concern first
  const recommendedProducts = TUCO_PRODUCTS.filter(p => 
    p.concernMatch.includes(quizState.concern)
  );

  const displayedProducts = TUCO_PRODUCTS.filter(p => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'sun') return p.category === 'Sun Care';
    if (selectedCategory === 'hair') return p.category === 'Hair Care';
    if (selectedCategory === 'face') return p.category === 'Face Care';
    if (selectedCategory === 'body') return p.category === 'Bath & Body';
    if (selectedCategory === 'lip') return p.category === 'Lip & Glow';
    return true;
  });

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none ${
        isWireframe
          ? 'bg-zinc-50 text-zinc-900'
          : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-2 pb-6 space-y-4">
        {/* Top Navigation & Action Row */}
        <div className="flex items-center gap-2 pt-1">
          {/* Search Pill */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={`Search gentle sunsticks, wash...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-2 pl-9 pr-3 text-xs rounded-full outline-none transition-all ${
                isWireframe
                  ? 'bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400'
                  : 'bg-white text-stone-900 border border-stone-200 placeholder-stone-400 shadow-xs focus:border-amber-400'
              }`}
            />
          </div>

          {/* Wishlist Heart button */}
          <button
            type="button"
            onClick={onOpenWishlist}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isWireframe
                ? 'bg-white border border-zinc-300 text-zinc-700'
                : 'bg-white text-stone-700 border border-stone-200 hover:text-rose-500 shadow-xs'
            }`}
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>

          {/* Cart Bag button */}
          <button
            type="button"
            onClick={onOpenCart}
            className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isWireframe
                ? 'bg-white border border-zinc-300 text-zinc-700'
                : 'bg-white text-stone-700 border border-stone-200 hover:text-amber-600 shadow-xs'
            }`}
            title="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white font-fredoka text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Personalized Welcome Kicker */}
        <div className="flex items-center justify-between px-1">
          <div>
            <p className="text-[11px] font-medium text-stone-500 font-body">
              Special Routine for <span className="font-bold text-stone-800">{quizState.childName || 'Maya'}</span> ({quizState.ageGroup.split(' ')[0]} yrs)
            </p>
            <h1 className="font-fredoka text-lg font-bold tracking-tight text-[#3E2500]">
              Discover Clean Care
            </h1>
          </div>
          <button
            type="button"
            onClick={onGoToRoutine}
            className={`text-[11px] font-fredoka font-semibold flex items-center gap-1 px-2.5 py-1 rounded-full ${
              isWireframe
                ? 'bg-zinc-200 text-zinc-800'
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
            }`}
          >
            <span>Routine</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Hero Promotional Banner matching Screenshot */}
        <div
          onClick={onGoToRoutine}
          className={`relative rounded-3xl p-4 overflow-hidden cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-sm ${
            isWireframe
              ? 'bg-zinc-200 border border-zinc-300 text-zinc-800'
              : 'bg-gradient-to-br from-[#38B6FF] via-[#0EA5E9] to-[#0284C7] text-white shadow-sky-500/15'
          }`}
        >
          {/* Subtle leaves decoration */}
          {!isWireframe && (
            <>
              <div className="absolute top-2 right-2 text-2xl opacity-80">🌿</div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none" />
            </>
          )}

          <div className="relative z-10 flex flex-col justify-between min-h-[140px]">
            <div className="max-w-[190px] space-y-1">
              <h2 className="font-fredoka text-xl font-bold leading-tight">
                we're rebuilding kids skincare. 🌿
              </h2>
              <p className="text-[10px] opacity-90 font-body leading-snug">
                harsh adult products were never meant for their delicate barrier.
              </p>
            </div>

            {/* Circular photo cutout & product bottle showcase */}
            <div className="absolute right-2 bottom-1 w-32 h-32 flex items-center justify-center">
              {/* Joyful kid representation circle */}
              <div className="relative w-20 h-20 rounded-full border-2 border-white/80 overflow-hidden bg-amber-100 flex items-center justify-center shadow-md">
                <div className="text-3xl">👧</div>
              </div>
              {/* Mini SPF stick overlay */}
              <div className="absolute -left-1 bottom-0 transform rotate-12 scale-75">
                <ProductIllustration type="sunstick" isWireframe={isWireframe} />
              </div>
            </div>

            <div className="pt-2">
              <span className={`inline-flex items-center gap-1 text-[11px] font-fredoka font-bold px-3 py-1 rounded-full ${
                isWireframe ? 'bg-zinc-900 text-white' : 'bg-white text-sky-800 shadow-xs'
              }`}>
                Shop Kid Safe Sun & Wash
                <ChevronRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </div>
          </div>
        </div>

        {/* Quick Category Circles / Cards (Screenshot matches horizontal category grid) */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-fredoka font-semibold text-stone-700">Categories</span>
            <span className="text-[11px] text-stone-400 font-body">100% certified</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {TUCO_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center justify-center min-w-[70px] py-2 px-2 rounded-2xl transition-all duration-200 shrink-0 ${
                    isSelected
                      ? isWireframe
                        ? 'bg-zinc-900 text-white'
                        : 'bg-[#3E2500] text-amber-300 font-bold shadow-sm'
                      : isWireframe
                      ? 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                      : 'bg-white border border-stone-200/80 text-stone-700 hover:border-amber-300'
                  }`}
                >
                  <span className="text-lg mb-1">{cat.icon}</span>
                  <span className="text-[10px] font-fredoka whitespace-nowrap">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Personalized Picks Section */}
        <div>
          <div className="flex items-center justify-between mb-2.5 px-1">
            <div>
              <span className="text-xs font-fredoka font-bold text-stone-800">
                Matched for {quizState.concern}
              </span>
              <p className="text-[10px] text-stone-500 font-body">
                Dermatologist vetted for young skin
              </p>
            </div>
            <button
              type="button"
              onClick={onGoToRoutine}
              className="text-[11px] font-fredoka text-amber-600 hover:underline"
            >
              View Routine
            </button>
          </div>

          {/* 2-Column Product Grid */}
          <div className="grid grid-cols-2 gap-3">
            {displayedProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct?.(product)}
                className={`relative rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] ${
                  isWireframe
                    ? 'bg-white border border-zinc-200 shadow-xs'
                    : 'bg-white border border-stone-200/70 shadow-[0_4px_14px_rgba(0,0,0,0.03)]'
                }`}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="self-start mb-1.5">
                    <span className={`text-[9px] font-fredoka font-bold px-2 py-0.5 rounded-full ${
                      isWireframe
                        ? 'bg-zinc-100 text-zinc-700 border border-zinc-300'
                        : 'bg-amber-100 text-amber-900'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Illustration Frame */}
                <div
                  className="w-full h-24 rounded-xl flex items-center justify-center my-1 relative overflow-hidden"
                  style={{ backgroundColor: isWireframe ? '#F4F4F5' : product.imageBg }}
                >
                  <ProductIllustration
                    type={product.illustration}
                    isWireframe={isWireframe}
                    className="w-16 h-20 transform hover:scale-110 transition-transform"
                  />
                  {/* Natural % tag */}
                  <div className="absolute bottom-1 right-1 bg-white/90 text-stone-800 text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                    {product.naturalPercent}% Nat.
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1 mt-1">
                  <div className="flex items-center gap-1 text-[10px] text-amber-700 font-semibold">
                    <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                    <span>{product.rating}</span>
                    <span className="text-stone-400 text-[9px]">({product.reviewsCount})</span>
                  </div>
                  <h3 className="font-fredoka text-xs font-bold text-stone-900 leading-tight line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-stone-500 font-body line-clamp-1">
                    {product.tagline}
                  </p>
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-100">
                  <div className="flex items-baseline gap-1">
                    <span className="font-fredoka font-bold text-xs text-stone-900">
                      ₹{product.price}
                    </span>
                    <span className="text-[10px] text-stone-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart?.(product);
                    }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all active:scale-90 ${
                      isWireframe
                        ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                        : 'bg-[#3E2500] text-[#FED543] hover:bg-amber-950 shadow-xs'
                    }`}
                    title="Add to bag"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Tuco Wavy Bottom Nav */}
      <TucoWavyNav
        activeTab="home"
        isWireframe={isWireframe}
        onTabChange={onNavigateTab}
      />
    </div>
  );
};
