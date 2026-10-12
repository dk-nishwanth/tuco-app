import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Star, ShieldCheck, Check, Sparkles, ShoppingBag, Plus, Minus } from 'lucide-react';
import { ProductIllustration } from '../../ProductIllustration';
import { TUCO_PRODUCTS } from '../../../data/tucoData';
import { Product } from '../../../types';

interface ScreenProductDetailFullProps {
  product?: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onOpenCart: () => void;
  cartCount: number;
  isWireframe?: boolean;
}

export const ScreenProductDetailFull: React.FC<ScreenProductDetailFullProps> = ({
  product = TUCO_PRODUCTS[0],
  onBack,
  onAddToCart,
  onOpenCart,
  cartCount,
  isWireframe = false,
}) => {
  const [packOption, setPackOption] = useState<'single' | 'duo'>('single');
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const priceMultiplier = packOption === 'duo' ? 1.7 : 1; // 15% discount on duo
  const currentPrice = Math.round(product.price * priceMultiplier);
  const originalPrice = Math.round(product.originalPrice * (packOption === 'duo' ? 2 : 1));

  const handleAdd = () => {
    onAddToCart(product, quantity * (packOption === 'duo' ? 2 : 1));
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 800);
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Product Details */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-2 pb-24 space-y-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <span className="text-[10px] font-bold font-['Poppins'] bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-200">
            {product.category}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
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
        </div>

        {/* Product Hero Image Card */}
        <div
          className="w-full h-48 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-xs"
          style={{ backgroundColor: product.imageBg }}
        >
          <ProductIllustration
            type={product.illustration}
            isWireframe={isWireframe}
            className="w-24 h-28 drop-shadow-md"
          />
          <div className="absolute top-3 left-3 bg-white/95 text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
            {product.naturalPercent}% Natural Origin
          </div>
          <div className="absolute bottom-3 right-3 bg-amber-400 text-stone-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
            Made Safe Certified
          </div>
        </div>

        {/* Product Title & Reviews */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium">
            <div className="flex text-amber-400">{'★'.repeat(5)}</div>
            <span className="font-bold text-stone-800">{product.rating}</span>
            <span className="text-stone-400 text-[10px]">({product.reviewsCount} verified parents)</span>
          </div>

          <h1 className="font-['Poppins'] text-lg font-bold text-stone-900 leading-snug">
            {product.name}
          </h1>

          <p className="text-xs text-stone-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pack Selector (Single vs Duo Save 15%) */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-stone-700 block">Select Pack:</span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setPackOption('single')}
              className={`p-2.5 rounded-2xl border text-left transition-all ${
                packOption === 'single'
                  ? 'border-[#352002] bg-amber-50/80 ring-2 ring-amber-300'
                  : 'border-stone-200 bg-white hover:border-stone-300'
              }`}
            >
              <span className="font-bold text-xs block text-stone-900">Single Stick</span>
              <span className="text-[10px] text-stone-500">Standard 45g</span>
            </button>

            <button
              type="button"
              onClick={() => setPackOption('duo')}
              className={`p-2.5 rounded-2xl border text-left transition-all relative ${
                packOption === 'duo'
                  ? 'border-[#352002] bg-amber-50/80 ring-2 ring-amber-300'
                  : 'border-stone-200 bg-white hover:border-stone-300'
              }`}
            >
              <span className="absolute -top-2 right-2 bg-emerald-600 text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full">
                SAVE 15%
              </span>
              <span className="font-bold text-xs block text-stone-900">Duo Pack (2x)</span>
              <span className="text-[10px] text-stone-500">Playground + School</span>
            </button>
          </div>
        </div>

        {/* Why Kids Love It vs Why Parents Trust It */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/60 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">
              👧 Why Kids Love It
            </span>
            <ul className="text-[10px] text-amber-900/90 space-y-1">
              <li>• Zero white cast</li>
              <li>• Fun glide-on stick</li>
              <li>• Sweet berry natural scent</li>
            </ul>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200/60 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 block">
              🛡️ Why Parents Trust It
            </span>
            <ul className="text-[10px] text-emerald-900/90 space-y-1">
              <li>• 100% natural mineral zinc</li>
              <li>• 80-min water resistant</li>
              <li>• Pediatrician certified</li>
            </ul>
          </div>
        </div>

        {/* Hero Botanical Ingredients */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wide block">
            What's Inside (100% Natural Goodness)
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.keyIngredients.map((ing, i) => (
              <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-800 shadow-2xs">
                🌱 {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Doctor Certifications */}
        <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Doctor & Safety Certifications</span>
          </div>
          <p className="text-[10px] text-stone-500">
            Tested under strict paediatric dermatology protocols in India. Suitable for sensitive, eczema-prone young skin.
          </p>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="p-4 bg-white border-t border-stone-200 flex items-center gap-3 shrink-0 shadow-lg">
        {/* Quantity Stepper */}
        <div className="flex items-center border border-stone-200 rounded-full px-2 py-1 gap-2 bg-stone-50">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 text-stone-600 hover:text-stone-900"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="font-['Poppins'] font-bold text-xs min-w-4 text-center">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 text-stone-600 hover:text-stone-900"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Add to Bag Button */}
        <button
          type="button"
          onClick={handleAdd}
          className={`flex-1 py-3.5 px-4 rounded-full font-['Poppins'] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md ${
            addedToast
              ? 'bg-emerald-600 text-white'
              : 'bg-[#FED543] hover:bg-amber-400 text-[#352002]'
          }`}
        >
          {addedToast ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added to Bag!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag • ₹{currentPrice * quantity}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
