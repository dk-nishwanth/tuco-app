import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Star, Filter, ChevronRight, Plus, Sparkles, Check } from 'lucide-react';
import { TucoWavyNav } from '../../TucoWavyNav';
import { ProductIllustration } from '../../ProductIllustration';
import { TUCO_PRODUCTS } from '../../../data/tucoData';
import { Product } from '../../../types';

interface ScreenShopCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  cartCount: number;
  isWireframe?: boolean;
}

export const ScreenShopCatalog: React.FC<ScreenShopCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
  onOpenCart,
  onOpenWishlist,
  cartCount,
  isWireframe = false,
}) => {
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ageFilters = [
    { id: 'all', label: 'All Ages' },
    { id: '3-5', label: '3-5 yrs' },
    { id: '6-9', label: '6-9 yrs' },
    { id: '10-12', label: '10-12 yrs' },
    { id: 'teens', label: 'Teens' },
  ];

  const categoryChips = [
    { id: 'all', label: 'All Products' },
    { id: 'Sun Care', label: '☀️ Sun Defense' },
    { id: 'Face Care', label: '🫧 Gentle Face' },
    { id: 'Hair Care', label: '🧴 Hair & Knots' },
    { id: 'Bath & Body', label: '🛁 Deo & Bath' },
    { id: 'Lip & Glow', label: '🍓 Safe Lip' },
  ];

  const filteredProducts = TUCO_PRODUCTS.filter((p) => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      return (
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-2 pb-4 space-y-3">
        {/* Top Header Row */}
        <div className="flex items-center gap-2 pt-1">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mineral sunstick, wash..."
              className="w-full py-2 pl-8 pr-3 text-[11px] rounded-full outline-none font-['Poppins'] bg-white text-stone-800 border border-stone-200 placeholder-stone-400 shadow-2xs focus:border-amber-400"
            />
          </div>

          <button
            type="button"
            onClick={onOpenWishlist}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
          >
            <Heart className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F97316] text-white font-['Poppins'] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Catalog Banner */}
        <div className="flex items-center justify-between px-0.5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full">
              Tuco Clean Catalog
            </span>
            <h1 className="font-['Poppins'] text-base font-bold text-[#352002] mt-0.5">
              Shop 100% Natural Care
            </h1>
          </div>
          <span className="text-[10px] font-medium text-stone-500">
            {filteredProducts.length} Goodies
          </span>
        </div>

        {/* Age Segmented Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-0.5">
          {ageFilters.map((age) => (
            <button
              key={age.id}
              type="button"
              onClick={() => setSelectedAge(age.id)}
              className={`px-3 py-1 rounded-full text-[10px] font-['Poppins'] font-medium whitespace-nowrap transition-all ${
                selectedAge === age.id
                  ? 'bg-[#352002] text-[#FED543] font-bold shadow-2xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {age.label}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1">
          {categoryChips.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-['Poppins'] whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-100 text-amber-950 font-bold border border-amber-300'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="rounded-2xl p-2.5 bg-white border border-stone-200 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all group"
            >
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold font-['Poppins'] bg-amber-50 text-amber-900 px-2 py-0.5 rounded-full">
                  {p.badge || 'Natural'}
                </span>
                <span className="text-[9px] text-stone-400 font-mono">
                  {p.naturalPercent}% Nat.
                </span>
              </div>

              {/* Illustration Frame */}
              <div
                className="w-full h-24 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: p.imageBg }}
              >
                <ProductIllustration type={p.illustration} isWireframe={isWireframe} className="w-14 h-16 transform group-hover:scale-105 transition-transform" />
              </div>

              {/* Info */}
              <div className="space-y-1 mt-1.5">
                <h4 className="font-['Poppins'] text-[11px] font-bold text-stone-900 leading-tight line-clamp-1">
                  {p.name}
                </h4>
                <p className="text-[9px] text-stone-500 line-clamp-1">
                  {p.tagline}
                </p>

                <div className="flex items-center gap-1 text-[9px] text-amber-600 font-medium">
                  <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                  <span>{p.rating}</span>
                  <span className="text-stone-400">({p.reviewsCount})</span>
                </div>

                <div className="flex items-baseline gap-1 text-[11px] pt-0.5">
                  <span className="font-['Poppins'] font-bold text-stone-900">₹{p.price}</span>
                  <span className="text-[9px] text-stone-400 line-through">₹{p.originalPrice}</span>
                  <span className="text-[8px] text-emerald-600 font-bold font-mono">
                    (Save ₹{p.originalPrice - p.price})
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
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

      {/* Signature Bottom Nav */}
      <TucoWavyNav activeTab="home" isWireframe={isWireframe} />
    </div>
  );
};
