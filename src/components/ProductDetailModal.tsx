import React, { useState } from 'react';
import { X, Star, ShieldCheck, Check, Plus, Minus, ShoppingBag, Heart } from 'lucide-react';
import { ProductIllustration } from './ProductIllustration';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isWireframe?: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWireframe = false,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div
        className={`w-full max-w-md max-h-[90vh] rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200 ${
          isWireframe
            ? 'bg-white border-2 border-zinc-400 text-zinc-900'
            : 'bg-white text-stone-900'
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="font-fredoka text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
            <span className="text-xs text-stone-400">Suitable for {product.suitableAge}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-600"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 hide-scrollbar">
          {/* Product Hero showcase */}
          <div
            className="w-full h-44 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: isWireframe ? '#F3F4F6' : product.imageBg }}
          >
            <ProductIllustration
              type={product.illustration}
              isWireframe={isWireframe}
              className="w-24 h-28 drop-shadow-md"
            />
            <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-xs font-fredoka font-bold text-stone-800 shadow-xs">
              {product.naturalPercent}% Natural
            </div>
            {product.badge && (
              <div className="absolute top-3 right-3 bg-amber-400 text-stone-900 px-2.5 py-1 rounded-full text-[11px] font-fredoka font-bold">
                {product.badge}
              </div>
            )}
          </div>

          {/* Name & Pricing */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <span>{product.rating}</span>
              <span className="text-stone-400">({product.reviewsCount} verified parents)</span>
            </div>
            <h2 className="font-fredoka text-xl font-bold text-stone-900">
              {product.name}
            </h2>
            <p className="text-xs text-stone-600 font-body leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-baseline gap-2 pt-1">
              <span className="font-fredoka text-2xl font-bold text-stone-900">
                ₹{product.price}
              </span>
              <span className="text-sm text-stone-400 line-through">
                ₹{product.originalPrice}
              </span>
              <span className="text-xs font-fredoka font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Save ₹{product.originalPrice - product.price}
              </span>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-2">
            <h4 className="font-fredoka text-xs font-bold text-stone-800 uppercase tracking-wide">
              Kid-Safe Benefits
            </h4>
            <div className="space-y-1.5">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-stone-700 font-body">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Star Ingredients */}
          <div className="space-y-2">
            <h4 className="font-fredoka text-xs font-bold text-stone-800 uppercase tracking-wide">
              Hero Plant & Mineral Ingredients
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {product.keyIngredients.map((ing, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-800"
                >
                  🌱 {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Safety Certifications */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-fredoka font-bold text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Certified Child Safe Standards</span>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-amber-800">
              {product.safetyCertifications.map((cert, i) => (
                <span key={i} className="font-medium">• {cert}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-4 border-t border-stone-100 bg-white flex items-center gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center border border-stone-200 rounded-full px-2 py-1 gap-2">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 text-stone-500 hover:text-stone-900"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-fredoka font-bold text-sm min-w-4 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 text-stone-500 hover:text-stone-900"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Bag Button */}
          <button
            type="button"
            onClick={handleAdd}
            className={`flex-1 py-3 px-4 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md ${
              addedToast
                ? 'bg-emerald-600 text-white'
                : isWireframe
                ? 'bg-zinc-900 text-white'
                : 'bg-[#3E2500] text-[#FED543] hover:bg-amber-950'
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
                <span>Add to Bag • ₹{product.price * quantity}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
