import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft, Heart, Star, Check, Sparkles, ShieldCheck, ChevronRight, Gift } from 'lucide-react';
import { TucoWavyNav } from '../TucoWavyNav';
import { ProductIllustration } from '../ProductIllustration';
import { TUCO_PRODUCTS, TUCO_PROMISES } from '../../data/tucoData';
import { Product, QuizState } from '../../types';

interface Screen6RoutineProps {
  quizState: QuizState;
  cartCount: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  onSelectProduct?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onAddBundleToCart?: (products: Product[]) => void;
  onNavigateTab?: (tab: 'home' | 'settings' | 'profile' | 'wishlist' | 'search') => void;
  onBackToHome?: () => void;
  isWireframe?: boolean;
}

export const Screen6Routine: React.FC<Screen6RoutineProps> = ({
  quizState,
  cartCount = 0,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  onAddToCart,
  onAddBundleToCart,
  onNavigateTab,
  onBackToHome,
  isWireframe = false,
}) => {
  const [activeStepTab, setActiveStepTab] = useState<'routine' | 'all'>('routine');

  // Determine top 3 routine products based on child's concern
  const routineSteps = [
    {
      step: 'Step 1: Cleanse',
      product: TUCO_PRODUCTS.find(p => p.id === 'tuco-face-wash-tan-off') || TUCO_PRODUCTS[1],
      timing: 'Morning & After Play',
      why: 'Washes away sun grime & city dirt without stripping moisture'
    },
    {
      step: 'Step 2: Protect',
      product: TUCO_PRODUCTS.find(p => p.id === 'tuco-sun-stick-50') || TUCO_PRODUCTS[0],
      timing: 'Before School & Outdoors',
      why: 'Broad spectrum SPF 50 mineral shield, water-resistant for 80 mins'
    },
    {
      step: 'Step 3: Nourish',
      product: TUCO_PRODUCTS.find(p => p.id === 'tuco-glow-cream-spf') || TUCO_PRODUCTS[5],
      timing: 'Daily Barrier Care',
      why: 'Oat lipids & ceramides rebuild young skin microbiome'
    }
  ];

  const bundleTotal = routineSteps.reduce((acc, curr) => acc + curr.product.price, 0);
  const bundleDiscounted = Math.round(bundleTotal * 0.82); // 18% off bundle

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none ${
        isWireframe
          ? 'bg-zinc-50 text-zinc-900'
          : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Main Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-2 pb-6 space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={onBackToHome}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isWireframe
                ? 'bg-white border border-zinc-300 text-zinc-700'
                : 'bg-white text-stone-700 border border-stone-200 hover:text-amber-600 shadow-xs'
            }`}
            title="Back to Home"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <div className="text-center">
            <h1 className="font-fredoka text-sm font-bold text-stone-900">
              {quizState.childName || 'Child'}’s Clean Routine
            </h1>
            <p className="text-[10px] text-stone-400 font-body">
              Targeted for {quizState.concern}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
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
        </div>

        {/* Routine Summary Banner Card */}
        <div
          className={`rounded-3xl p-4 relative overflow-hidden transition-all ${
            isWireframe
              ? 'bg-zinc-200 border border-zinc-300 text-zinc-900'
              : 'bg-gradient-to-br from-[#FEF08A] to-[#FDE047] text-[#3E2500] border border-amber-300/50 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-fredoka font-bold uppercase tracking-wider bg-white/70 px-2 py-0.5 rounded-full text-[#3E2500]">
              Personalized Plan
            </span>
            <span className="text-[11px] font-fredoka font-bold text-amber-900">
              Save 18% on Trio
            </span>
          </div>

          <h2 className="font-fredoka text-lg font-bold leading-tight">
            3 Simple Steps to Protect & Glow
          </h2>
          <p className="text-[11px] font-body opacity-85 mt-1 leading-snug">
            Formulated without harsh irritants, sulfates, or artificial endocrine disruptors.
          </p>

          {/* Quick bundle CTA */}
          <div className="mt-3 pt-3 border-t border-amber-900/15 flex items-center justify-between">
            <div>
              <span className="text-[10px] opacity-75">Full Bundle: </span>
              <span className="font-fredoka font-bold text-sm text-[#3E2500]">₹{bundleDiscounted}</span>
              <span className="text-[10px] line-through opacity-60 ml-1">₹{bundleTotal}</span>
            </div>

            <button
              type="button"
              onClick={() => onAddBundleToCart?.(routineSteps.map(s => s.product))}
              className={`text-xs font-fredoka font-bold py-2 px-3.5 rounded-full transition-all active:scale-95 flex items-center gap-1.5 shadow-sm ${
                isWireframe
                  ? 'bg-zinc-900 text-white'
                  : 'bg-[#3E2500] text-[#FED543] hover:bg-[#281700]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Add All 3 to Bag</span>
            </button>
          </div>
        </div>

        {/* Step-by-Step Card Flow */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-fredoka font-bold text-stone-800">The 3-Step Routine</span>
            <span className="text-[10px] text-stone-500 font-body">Pediatrician Approved</span>
          </div>

          {routineSteps.map((stepItem, idx) => (
            <div
              key={idx}
              onClick={() => onSelectProduct?.(stepItem.product)}
              className={`rounded-2xl p-3.5 cursor-pointer transition-all hover:scale-[1.01] ${
                isWireframe
                  ? 'bg-white border border-zinc-200'
                  : 'bg-white border border-stone-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
              }`}
            >
              {/* Step indicator header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-fredoka font-bold text-amber-700">
                  {stepItem.step}
                </span>
                <span className="text-[10px] text-stone-400 font-body">
                  {stepItem.timing}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Product Illustration */}
                <div
                  className="w-16 h-18 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: isWireframe ? '#F4F4F5' : stepItem.product.imageBg }}
                >
                  <ProductIllustration
                    type={stepItem.product.illustration}
                    isWireframe={isWireframe}
                    className="w-12 h-14"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-fredoka text-xs font-bold text-stone-900 truncate">
                    {stepItem.product.name}
                  </h3>
                  <p className="text-[10px] text-stone-500 font-body line-clamp-1 mt-0.5">
                    {stepItem.why}
                  </p>
                  
                  {/* Ingredients chip */}
                  <div className="flex items-center gap-1.5 mt-1.5 text-[9px] text-stone-600 font-medium">
                    <span className="text-emerald-600">🌿 {stepItem.product.keyIngredients[0]}</span>
                    <span>•</span>
                    <span>{stepItem.product.keyIngredients[1]}</span>
                  </div>
                </div>

                {/* Price and Add button */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="font-fredoka font-bold text-xs text-stone-900">
                    ₹{stepItem.product.price}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart?.(stepItem.product);
                    }}
                    className={`text-[10px] font-fredoka font-bold px-2.5 py-1 rounded-full transition-all active:scale-95 ${
                      isWireframe
                        ? 'bg-zinc-900 text-white'
                        : 'bg-[#3E2500] text-[#FED543] hover:bg-amber-950'
                    }`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tuco Safety Promises Badges */}
        <div className={`rounded-2xl p-3 space-y-2 ${
          isWireframe ? 'bg-zinc-100 border border-zinc-200' : 'bg-emerald-50/60 border border-emerald-100'
        }`}>
          <div className="flex items-center gap-1.5 text-xs font-fredoka font-bold text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>The Tuco Kids Clean Promise</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] text-stone-700">
            <div className="flex items-center gap-1.5">
              <span>🌱</span>
              <span className="font-medium">100% Plant & Mineral</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🚫</span>
              <span className="font-medium">Zero Sulphates / Dyes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🩺</span>
              <span className="font-medium">Pediatrician Tested</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🐰</span>
              <span className="font-medium">Cruelty-Free Certified</span>
            </div>
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
