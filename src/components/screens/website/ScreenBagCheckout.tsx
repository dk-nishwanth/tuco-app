import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft, Plus, Minus, Trash2, Tag, Check, ShieldCheck, MapPin, CreditCard, Sparkles } from 'lucide-react';
import { ProductIllustration } from '../../ProductIllustration';
import { TUCO_PRODUCTS } from '../../../data/tucoData';
import { Product, CartItem } from '../../../types';

interface ScreenBagCheckoutProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart: () => void;
  onBack?: () => void;
  isWireframe?: boolean;
}

export const ScreenBagCheckout: React.FC<ScreenBagCheckoutProps> = ({
  items,
  onUpdateQuantity,
  onClearCart,
  onBack,
  isWireframe = false,
}) => {
  const [couponCode, setCouponCode] = useState('TUCOKIDS15');
  const [couponApplied, setCouponApplied] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.15) : 0;
  const isFreeDelivery = subtotal >= 499;
  const deliveryFee = isFreeDelivery || items.length === 0 ? 0 : 49;
  const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-24 space-y-3.5">
        {/* Top Header */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[#352002]">My Shopping Bag</span>
            <span className="text-[10px] font-bold bg-[#FED543] text-[#352002] px-2 py-0.5 rounded-full">
              {items.reduce((acc, i) => acc + i.quantity, 0)} Items
            </span>
          </div>

          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Secure 256-bit</span>
          </span>
        </div>

        {orderPlaced ? (
          <div className="p-6 rounded-3xl bg-white border border-stone-200 text-center space-y-4 my-8 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
              🎉
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg text-stone-900">Order Placed Successfully!</h3>
              <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                Your kid's 100% natural care package is freshly packed and dispatched with love!
              </p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl text-xs text-amber-950 font-semibold">
              🚚 Express Delivery to Bangalore by tomorrow!
            </div>
            <button
              type="button"
              onClick={() => {
                onClearCart();
                setOrderPlaced(false);
              }}
              className="py-2.5 px-6 rounded-full bg-[#352002] text-[#FED543] font-bold text-xs"
            >
              Back to Catalog
            </button>
          </div>
        ) : (
          <>
            {/* Free Shipping Banner */}
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
              {isFreeDelivery ? (
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Yay! You've unlocked FREE express shipping 🚚</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <span className="text-stone-700 font-medium">
                    Add <strong className="text-amber-800">₹{499 - subtotal}</strong> more for Free Shipping!
                  </span>
                  <div className="w-full bg-amber-200/50 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all"
                      style={{ width: `${Math.min(100, (subtotal / 499) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bag Items List */}
            <div className="space-y-2">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3 rounded-2xl bg-white border border-stone-200 flex items-center gap-3 shadow-2xs"
                >
                  <div
                    className="w-14 h-16 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: product.imageBg }}
                  >
                    <ProductIllustration type={product.illustration} className="w-10 h-12" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-stone-900 truncate">{product.name}</h4>
                    <p className="text-[10px] text-stone-500 truncate">{product.tagline}</p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-bold text-xs text-stone-900">₹{product.price}</span>
                      <span className="text-[10px] text-stone-400 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center border border-stone-200 rounded-full px-1.5 py-0.5 gap-1 bg-stone-50">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                      className="p-1 text-stone-500 hover:text-stone-900"
                    >
                      {quantity === 1 ? <Trash2 className="w-3 h-3 text-rose-500" /> : <Minus className="w-3 h-3" />}
                    </button>
                    <span className="text-xs font-bold min-w-3 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                      className="p-1 text-stone-500 hover:text-stone-900"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Address Card */}
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>Deliver to Maya's Home</span>
                </div>
                <span className="text-[10px] text-amber-700 font-semibold cursor-pointer">Change</span>
              </div>
              <p className="text-[11px] text-stone-600 pl-5">
                42 Palm Avenue, Indiranagar, Bangalore · 560038
              </p>
            </div>

            {/* Promo Code Input */}
            <div className="p-3 rounded-2xl bg-white border border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-emerald-600" />
                <div>
                  <span className="font-bold text-xs text-stone-900 block">TUCOKIDS15</span>
                  <span className="text-[10px] text-emerald-600 font-medium">15% Parent Discount Applied</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700">-₹{discount}</span>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-stone-700 block">Payment Mode:</span>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'upi', label: '⚡ UPI / GPay' },
                  { id: 'card', label: '💳 Cards / Net' },
                  { id: 'cod', label: '💵 Cash On Del.' },
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setPaymentMethod(pm.id as any)}
                    className={`py-2 px-1 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                      paymentMethod === pm.id
                        ? 'border-[#352002] bg-amber-50 text-[#352002] font-bold ring-1 ring-amber-400'
                        : 'border-stone-200 bg-white text-stone-600'
                    }`}
                  >
                    {pm.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bill Summary */}
            <div className="p-3 rounded-2xl bg-stone-100/70 space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Coupon Discount</span>
                <span>-₹{discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>{isFreeDelivery ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-stone-900 pt-1 border-t border-stone-200">
                <span>Total Amount</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Sticky Bottom Checkout Action */}
      {!orderPlaced && items.length > 0 && (
        <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between shrink-0 shadow-lg">
          <div>
            <span className="text-[10px] text-stone-500">Payable Total:</span>
            <div className="font-['Poppins'] font-bold text-base text-stone-900">
              ₹{finalTotal}
            </div>
          </div>

          <button
            type="button"
            onClick={handlePlaceOrder}
            className="py-3 px-6 rounded-full bg-[#352002] hover:bg-black text-[#FED543] font-['Poppins'] font-bold text-xs shadow-md transition-transform active:scale-95"
          >
            Place Order & Pay
          </button>
        </div>
      )}
    </div>
  );
};
