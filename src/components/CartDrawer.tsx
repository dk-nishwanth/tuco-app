import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles, Tag, Check } from 'lucide-react';
import { ProductIllustration } from './ProductIllustration';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart: () => void;
  isWireframe?: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
  isWireframe = false,
}) => {
  const [coupon, setCoupon] = useState('TUCOKIDS15');
  const [couponApplied, setCouponApplied] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.15) : 0;
  const shippingThreshold = 699;
  const freeShipping = subtotal >= shippingThreshold;
  const shippingFee = freeShipping || items.length === 0 ? 0 : 49;
  const grandTotal = Math.max(0, subtotal - discount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'TUCOKIDS15' || coupon.trim().toUpperCase() === 'CLEAN') {
      setCouponApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div
        className={`w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200 ${
          isWireframe
            ? 'bg-white border-l-2 border-zinc-400 text-zinc-900'
            : 'bg-white text-stone-900'
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <h2 className="font-fredoka text-base font-bold text-stone-900">
              Shopping Bag
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
              {items.reduce((acc, i) => acc + i.quantity, 0)} items
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="p-3 bg-amber-50/70 border-b border-amber-100/60 text-xs">
          {freeShipping ? (
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold font-fredoka">
              <Sparkles className="w-4 h-4" />
              <span>Yay! You unlocked FREE express delivery 🚚</span>
            </div>
          ) : (
            <div>
              <p className="text-stone-600 font-body">
                Add <span className="font-bold text-amber-800">₹{shippingThreshold - subtotal}</span> more for Free Shipping!
              </p>
              <div className="w-full bg-amber-200/50 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-fredoka text-xl font-bold text-stone-900">
                Order Confirmed! 🎉
              </h3>
              <p className="text-xs text-stone-600 font-body max-w-xs">
                Your kid's clean skincare routine will be freshly packed and dispatched within 24 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClearCart();
                setOrderPlaced(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#3E2500] text-[#FED543] font-fredoka font-bold text-sm"
            >
              Back to Catalog
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 hide-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <span className="text-4xl">🛍️</span>
                  <p className="font-fredoka text-base font-bold text-stone-800">Your bag is empty</p>
                  <p className="text-xs text-stone-500 font-body">
                    Take the skincare quiz or choose a product to get started!
                  </p>
                </div>
              ) : (
                items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-200/70"
                  >
                    <div
                      className="w-14 h-16 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: isWireframe ? '#E5E7EB' : product.imageBg }}
                    >
                      <ProductIllustration
                        type={product.illustration}
                        isWireframe={isWireframe}
                        className="w-10 h-12"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-fredoka text-xs font-bold text-stone-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-[10px] text-stone-500 truncate font-body">
                        {product.tagline}
                      </p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="font-fredoka font-bold text-xs text-stone-900">
                          ₹{product.price}
                        </span>
                        <span className="text-[10px] text-stone-400 line-through">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center border border-stone-200 bg-white rounded-full px-1.5 py-0.5 gap-1.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="p-1 text-stone-500 hover:text-stone-900"
                        >
                          {quantity === 1 ? <Trash2 className="w-3 h-3 text-rose-500" /> : <Minus className="w-3 h-3" />}
                        </button>
                        <span className="text-xs font-bold font-fredoka min-w-3 text-center">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="p-1 text-stone-500 hover:text-stone-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-4 border-t border-stone-100 bg-white space-y-3">
                {/* Coupon Code Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="Enter promo code"
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full border border-stone-200 uppercase font-mono outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-full text-xs font-fredoka font-bold bg-stone-100 hover:bg-stone-200 text-stone-800"
                  >
                    Apply
                  </button>
                </form>

                {couponApplied && (
                  <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    <span>Code <strong>TUCOKIDS15</strong> applied!</span>
                    <span>-15%</span>
                  </div>
                )}

                {/* Subtotal calculation breakdown */}
                <div className="space-y-1 text-xs text-stone-600 font-body">
                  <div className="flex justify-between">
                    <span>Bag Total</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Discount (15%)</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Standard Shipping</span>
                    <span>{freeShipping ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-stone-900 font-fredoka pt-1 border-t border-stone-100">
                    <span>Total Amount</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full py-3.5 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md ${
                    isWireframe
                      ? 'bg-zinc-900 text-white'
                      : 'bg-[#3E2500] text-[#FED543] hover:bg-amber-950'
                  }`}
                >
                  {isCheckingOut ? (
                    <span>Processing Clean Checkout...</span>
                  ) : (
                    <>
                      <span>Place Order • ₹{grandTotal}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
