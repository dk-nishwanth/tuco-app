import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Star, ChevronRight, ShieldCheck, Sparkles, Plus, ArrowRight } from 'lucide-react';
import { TucoWavyNav } from '../../TucoWavyNav';
import { ProductIllustration } from '../../ProductIllustration';
import { TUCO_PRODUCTS } from '../../../data/tucoData';
import { Product } from '../../../types';

interface ScreenHomepageTwoScrollsProps {
  childName: string;
  cartCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onGoToStreakPage: () => void;
  onGoToCatalog: () => void;
  isWireframe?: boolean;
}

export const ScreenHomepageTwoScrolls: React.FC<ScreenHomepageTwoScrollsProps> = ({
  childName = 'Omar',
  cartCount = 2,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  onAddToCart,
  onGoToStreakPage,
  onGoToCatalog,
  isWireframe = false,
}) => {
  const [selectedConcern, setSelectedConcern] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const concernsList = [
    { id: 'all', label: 'All Goals', icon: '✨' },
    { id: 'sun', label: 'Sun & Tan', icon: '☀️' },
    { id: 'hair', label: 'Tangles & Frizz', icon: '🦁' },
    { id: 'face', label: 'Sensitive Skin', icon: '🫧' },
    { id: 'lip', label: 'Safe Makeup', icon: '🍓' },
    { id: 'deo', label: 'Sweat & Odor', icon: '🛁' },
  ];

  const categories = [
    { id: 'sun', name: 'Sun Defense', count: '6 items', icon: '☀️', color: '#FEF08A' },
    { id: 'hair', name: 'Hair & Curls', count: '5 items', icon: '🧴', color: '#FCE7F3' },
    { id: 'face', name: 'Clean Face', count: '4 items', icon: '🫧', color: '#FED7AA' },
    { id: 'bath', name: 'Bath & Deo', count: '4 items', icon: '🛁', color: '#CFFAFE' },
    { id: 'lip', name: 'Safe Lips', count: '3 items', icon: '🍓', color: '#FFE4E6' },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container spanning 2 full scrolls */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-2 pb-6 space-y-4">
        {/* ========================================================= */}
        {/* SCROLL 1: SEARCH BAR, CART, CONCERNS, BANNER, CATEGORIES */}
        {/* ========================================================= */}

        {/* 1. Search Bar & Cart Header */}
        <div className="flex items-center gap-2 pt-1">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gentle sunsticks, wash..."
              className="w-full py-2 pl-8 pr-3 text-[11px] rounded-full outline-none font-['Poppins'] bg-white text-stone-800 border border-stone-200 placeholder-stone-400 shadow-2xs focus:border-amber-400"
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
            title="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F97316] text-white font-['Poppins'] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Personalized Welcome Kicker */}
        <div className="flex items-center justify-between px-0.5">
          <div>
            <p className="text-[10px] text-stone-500 font-['Poppins']">
              Good morning, <span className="font-bold text-stone-900">{childName}</span>! 🌟
            </p>
            <h1 className="font-['Poppins'] text-base font-bold tracking-tight text-[#352002]">
              Discover Clean Care
            </h1>
          </div>
          <button
            type="button"
            onClick={onGoToStreakPage}
            className="text-[10px] font-['Poppins'] font-bold flex items-center gap-1 text-orange-800 bg-orange-100 px-2.5 py-1 rounded-full shadow-2xs hover:bg-orange-200"
          >
            <span>🔥 Streak Page</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* 2. Concerns Row (Shop by Goal) */}
        <div>
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[11px] font-bold font-['Poppins'] text-stone-700">
              Shop by Concern & Goal
            </span>
            <span className="text-[10px] text-amber-700 font-medium">100% Natural</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1">
            {concernsList.map((con) => {
              const isActive = selectedConcern === con.id;
              return (
                <button
                  key={con.id}
                  type="button"
                  onClick={() => setSelectedConcern(con.id)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-['Poppins'] whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#352002] text-[#FED543] font-bold shadow-2xs'
                      : 'bg-white border border-stone-200 text-stone-700 hover:border-amber-300'
                  }`}
                >
                  <span>{con.icon}</span>
                  <span>{con.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Hero Promotional Banner */}
        <div
          onClick={onGoToCatalog}
          className={`relative rounded-3xl p-4 overflow-hidden cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-sm ${
            isWireframe
              ? 'bg-zinc-200 border border-zinc-300 text-zinc-800'
              : 'bg-gradient-to-br from-[#38B6FF] via-[#0EA5E9] to-[#0284C7] text-white'
          }`}
        >
          <div className="relative z-10 flex flex-col justify-between min-h-[135px]">
            <div className="max-w-[195px] space-y-1">
              <h2 className="font-['Poppins'] text-lg font-bold leading-tight">
                we're rebuilding kids skincare. 🌿
              </h2>
              <p className="text-[10px] opacity-90 leading-tight">
                harsh adult products were never meant for their delicate barrier
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

        {/* 4. Categories of Products */}
        <div>
          <div className="flex items-center justify-between mb-2 px-0.5">
            <span className="text-[11px] font-['Poppins'] font-bold text-stone-700">Categories</span>
            <button
              type="button"
              onClick={onGoToCatalog}
              className="text-[10px] text-amber-700 font-semibold hover:underline"
            >
              See All (5)
            </button>
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            {categories.map((c) => (
              <div
                key={c.id}
                onClick={onGoToCatalog}
                className="h-20 rounded-2xl bg-white border border-stone-200 flex flex-col items-center justify-center p-1 cursor-pointer transition-all hover:border-amber-400 shadow-2xs group"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm mb-1 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: c.color }}
                >
                  {c.icon}
                </div>
                <span className="text-[9px] font-['Poppins'] font-bold text-center line-clamp-1 leading-tight text-stone-900">
                  {c.name}
                </span>
                <span className="text-[8px] text-stone-400 font-mono mt-0.5">{c.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SCROLL 2: RECOMMENDATIONS, BESTSELLERS, TUCO CLEAN PROMISE */}
        {/* ========================================================= */}
        <div className="pt-2 border-t border-stone-200/60 space-y-3">
          {/* Scroll Indicator Divider */}
          <div className="flex items-center justify-center gap-1.5 text-stone-400 py-1">
            <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">
              Scroll 2 • Recommendations & Trust
            </span>
          </div>

          {/* Section: Matched for Child */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-0.5">
              <div>
                <span className="text-[11px] font-['Poppins'] font-bold text-stone-800 block">
                  Recommended for {childName}
                </span>
                <p className="text-[9px] text-stone-500">
                  Customized for age & daily outdoor routine
                </p>
              </div>
              <button
                type="button"
                onClick={onGoToCatalog}
                className="text-[10px] font-['Poppins'] font-semibold text-amber-700 hover:underline"
              >
                View Routine
              </button>
            </div>

            {/* 2-Column Product Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {TUCO_PRODUCTS.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className="rounded-2xl p-2.5 bg-white border border-stone-200 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-amber-300 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-bold bg-amber-50 text-amber-900 px-1.5 py-0.2 rounded-full">
                      {p.badge || 'Doctor Tested'}
                    </span>
                    <span className="text-[8px] text-stone-400 font-mono">100% Nat.</span>
                  </div>

                  <div
                    className="w-full h-20 rounded-xl flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: p.imageBg }}
                  >
                    <ProductIllustration type={p.illustration} isWireframe={isWireframe} className="w-12 h-14" />
                  </div>

                  <div className="space-y-0.5 mt-1.5">
                    <h4 className="font-['Poppins'] text-[11px] font-semibold text-stone-900 leading-tight line-clamp-1">
                      {p.name}
                    </h4>

                    <div className="flex items-center gap-1 text-[9px] text-amber-600 font-medium">
                      <div className="flex text-amber-400">{'★'.repeat(5)}</div>
                      <span>({p.reviewsCount})</span>
                    </div>

                    <div className="flex items-baseline gap-1 text-[11px] pt-0.5">
                      <span className="font-['Poppins'] font-bold text-stone-900">₹{p.price}</span>
                      <span className="text-[9px] text-stone-400 line-through">₹{p.originalPrice}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(p);
                    }}
                    className="w-full mt-2 py-1.5 rounded-full bg-[#FED543] hover:bg-amber-400 text-[#352002] font-['Poppins'] font-bold text-[10px] text-center shadow-2xs transition-transform active:scale-95"
                  >
                    add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* The Tuco Clean Promise Banner */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>The Tuco Clean Promise</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px] text-emerald-950">
              <div className="flex items-center gap-1.5">
                <span>🌱</span>
                <span className="font-medium">100% Natural Mineral</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>🚫</span>
                <span className="font-medium">0% Sulphates & Parabens</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>🩺</span>
                <span className="font-medium">Pediatrician Approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>🐰</span>
                <span className="font-medium">Cruelty-Free Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Curved Wavy Nav Bar */}
      <TucoWavyNav activeTab="home" isWireframe={isWireframe} />
    </div>
  );
};
