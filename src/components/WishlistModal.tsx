import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { ProductIllustration } from './ProductIllustration';
import { Product } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
  isWireframe?: boolean;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddToCart,
  isWireframe = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className={`w-full max-w-md rounded-3xl p-5 shadow-2xl max-h-[80vh] flex flex-col ${
        isWireframe ? 'bg-white border-2 border-zinc-400 text-zinc-900' : 'bg-white text-stone-900'
      }`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <h3 className="font-fredoka text-base font-bold text-stone-900">
            Saved Favorites ({products.length})
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-2.5 hide-scrollbar">
          {products.slice(0, 4).map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-2.5 rounded-2xl bg-stone-50 border border-stone-200/60"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-12 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: isWireframe ? '#E5E7EB' : p.imageBg }}
                >
                  <ProductIllustration type={p.illustration} isWireframe={isWireframe} className="w-8 h-10" />
                </div>
                <div>
                  <h4 className="font-fredoka text-xs font-bold text-stone-900">{p.name}</h4>
                  <span className="font-fredoka text-xs text-amber-700 font-bold">₹{p.price}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onAddToCart(p);
                  onClose();
                }}
                className="px-3 py-1.5 rounded-full bg-[#3E2500] text-[#FED543] font-fredoka text-xs font-bold"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
