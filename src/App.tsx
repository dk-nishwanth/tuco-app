/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Smartphone,
  LayoutGrid,
  ShoppingBag,
  ExternalLink,
  Palette,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react';

import { PhoneFrame } from './components/PhoneFrame';

// New Core Wireframe Screens matching User's Exact Specification & Uploaded References:
import { ScreenOnboardingSplash } from './components/screens/wireframes/ScreenOnboardingSplash';
import { ScreenOnboardingName } from './components/screens/wireframes/ScreenOnboardingName';
import { ScreenOnboardingAge } from './components/screens/wireframes/ScreenOnboardingAge';
import { ScreenOnboardingGoals } from './components/screens/wireframes/ScreenOnboardingGoals';
import { ScreenOnboardingTransition } from './components/screens/wireframes/ScreenOnboardingTransition';
import { ScreenHomepageTwoScrolls } from './components/screens/wireframes/ScreenHomepageTwoScrolls';
import { ScreenStreakPage } from './components/screens/wireframes/ScreenStreakPage';

// Additional App Ecosystem Screens
import { ScreenShopCatalog } from './components/screens/website/ScreenShopCatalog';
import { ScreenProductDetailFull } from './components/screens/website/ScreenProductDetailFull';
import { ScreenBundleBuilder } from './components/screens/website/ScreenBundleBuilder';
import { ScreenBagCheckout } from './components/screens/website/ScreenBagCheckout';
import { ScreenIngredientsLab } from './components/screens/website/ScreenIngredientsLab';
import { ScreenDoctorCommunity } from './components/screens/website/ScreenDoctorCommunity';

import { BadgeEarnedModal } from './components/BadgeEarnedModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';

import { TUCO_PRODUCTS } from './data/tucoData';
import { Product, CartItem, VisualStyle, ViewMode } from './types';

export default function App() {
  // Active Screen ID defaults to the Splash screen
  const [activeScreenId, setActiveScreenId] = useState<string>('wireframe-splash');
  const [viewMode, setViewMode] = useState<ViewMode>('canvas'); // 'canvas' | 'simulator'
  const [visualStyle, setVisualStyle] = useState<VisualStyle>('hifi'); // 'hifi' | 'wireframe'
  const [canvasZoom, setCanvasZoom] = useState<number>(0.8);
  const [activeScreenSet, setActiveScreenSet] = useState<'wireframe_spec' | 'all_ecosystem'>('wireframe_spec');

  // User Onboarding State
  const [childName, setChildName] = useState<string>('Omar');
  const [childAge, setChildAge] = useState<number>(8);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['sun', 'hair']);
  const [streakCount, setStreakCount] = useState<number>(7);

  // E-Commerce Cart
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: TUCO_PRODUCTS[0], quantity: 1 },
    { product: TUCO_PRODUCTS[1], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  const handleToggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleAddBundleToCart = (products: Product[]) => {
    products.forEach((p) => handleAddToCart(p, 1));
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
      );
    }
  };

  // 1. PRIMARY SPEC WIREFRAME SCREENS (EXACT MATCH TO USER REQUEST & FIGMA ARBOARDS)
  const wireframeSpecScreens = [
    {
      id: 'wireframe-splash',
      title: 'iPhone 17 - 01',
      subtitle: 'Splash & Mascot Intro',
      render: (
        <ScreenOnboardingSplash
          onNext={() => setActiveScreenId('wireframe-name')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-name',
      title: 'iPhone 17 - 02',
      subtitle: 'Onboarding Name Input',
      render: (
        <ScreenOnboardingName
          name={childName}
          onChangeName={(n) => setChildName(n)}
          onNext={() => setActiveScreenId('wireframe-age')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-age',
      title: 'iPhone 17 - 03',
      subtitle: 'Age Carousel & Buddy (Ref 568)',
      render: (
        <ScreenOnboardingAge
          age={childAge}
          onSelectAge={(a) => setChildAge(a)}
          onNext={() => setActiveScreenId('wireframe-goals')}
          onBack={() => setActiveScreenId('wireframe-name')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-goals',
      title: 'iPhone 17 - 04',
      subtitle: 'Interests / Goals Grid (Ref 570)',
      render: (
        <ScreenOnboardingGoals
          childName={childName}
          selectedGoals={selectedGoals}
          onToggleGoal={handleToggleGoal}
          onNext={() => setActiveScreenId('wireframe-transition')}
          onBack={() => setActiveScreenId('wireframe-age')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-transition',
      title: 'iPhone 17 - 05',
      subtitle: 'Routine Created Reveal (Ref 571)',
      render: (
        <ScreenOnboardingTransition
          childName={childName}
          age={childAge}
          selectedGoals={selectedGoals}
          onFinishOnboarding={() => setActiveScreenId('wireframe-homepage')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-homepage',
      title: 'iPhone 17 - 06',
      subtitle: 'Homepage Two Scrolls (Ref 574)',
      render: (
        <ScreenHomepageTwoScrolls
          childName={childName}
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onSelectProduct={(p) => setSelectedProductModal(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onGoToStreakPage={() => setActiveScreenId('wireframe-streak')}
          onGoToCatalog={() => setActiveScreenId('tuco-app-catalog')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-streak',
      title: 'iPhone 17 - 07',
      subtitle: 'Streak & Mascots Calendar (Ref 571)',
      render: (
        <ScreenStreakPage
          childName={childName}
          streakCount={streakCount}
          onBackToHome={() => setActiveScreenId('wireframe-homepage')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
  ];

  // Secondary ecosystem screens for catalog, PDP & checkout
  const ecosystemScreens = [
    {
      id: 'tuco-app-catalog',
      title: 'iPhone 17 - 08',
      subtitle: 'Shop Catalog & Filters',
      render: (
        <ScreenShopCatalog
          onSelectProduct={(p) => {
            setSelectedProductModal(p);
            setActiveScreenId('tuco-app-pdp');
          }}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'tuco-app-pdp',
      title: 'iPhone 17 - 09',
      subtitle: 'Product PDP (Ref 574)',
      render: (
        <ScreenProductDetailFull
          product={selectedProductModal || TUCO_PRODUCTS[0]}
          onBack={() => setActiveScreenId('tuco-app-catalog')}
          onAddToCart={(p, qty) => handleAddToCart(p, qty)}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'tuco-app-bundle',
      title: 'iPhone 17 - 10',
      subtitle: 'Custom Trio Bundle Box',
      render: (
        <ScreenBundleBuilder
          childName={childName}
          onAddBundleToCart={handleAddBundleToCart}
          onBack={() => setActiveScreenId('tuco-app-catalog')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'tuco-app-checkout',
      title: 'iPhone 17 - 11',
      subtitle: 'Shopping Bag & Checkout',
      render: (
        <ScreenBagCheckout
          items={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onClearCart={() => setCartItems([])}
          onBack={() => setActiveScreenId('tuco-app-catalog')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'tuco-app-ingredients',
      title: 'iPhone 17 - 12',
      subtitle: 'Clean Lab & Never-List',
      render: (
        <ScreenIngredientsLab
          onBack={() => setActiveScreenId('wireframe-homepage')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'tuco-app-doctors',
      title: 'iPhone 17 - 13',
      subtitle: 'Pediatrician Reviews',
      render: (
        <ScreenDoctorCommunity
          onBack={() => setActiveScreenId('wireframe-homepage')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
  ];

  const currentScreens =
    activeScreenSet === 'wireframe_spec'
      ? wireframeSpecScreens
      : [...wireframeSpecScreens, ...ecosystemScreens];

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#1E1E22] text-stone-100 font-['Poppins'] select-none">
      {/* Studio Header Bar */}
      <header className="h-14 border-b border-stone-800 bg-[#161619] px-5 flex items-center justify-between shrink-0 z-40">
        {/* Tuco App Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FED543]" />
            <span className="font-['Poppins'] text-lg font-bold text-[#FED543] tracking-tight">
              tüco KIDS
            </span>
            <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300">
              Wireframe Studio • Poppins
            </span>
          </div>

          <a
            href="https://tucokids.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-1 text-[11px] text-stone-400 hover:text-[#FED543] transition-colors ml-2 font-['Poppins']"
          >
            <span>tucokids.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* View Mode & Filter Tabs */}
        <div className="flex items-center gap-2">
          {/* Canvas Mode vs Simulator Mode */}
          <div className="flex items-center p-1 bg-stone-900 border border-stone-800 rounded-xl">
            <button
              type="button"
              onClick={() => setViewMode('canvas')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-['Poppins'] font-medium rounded-lg transition-all ${
                viewMode === 'canvas'
                  ? 'bg-stone-800 text-[#FED543] font-bold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Canvas Board ({currentScreens.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-['Poppins'] font-medium rounded-lg transition-all ${
                viewMode === 'simulator'
                  ? 'bg-[#FED543] text-[#271700] font-bold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Phone Simulator</span>
            </button>
          </div>

          {/* Screen Set Switcher */}
          <div className="hidden md:flex items-center p-1 bg-stone-900 border border-stone-800 rounded-xl text-xs">
            <button
              type="button"
              onClick={() => setActiveScreenSet('wireframe_spec')}
              className={`px-3 py-1 rounded-lg font-['Poppins'] transition-all ${
                activeScreenSet === 'wireframe_spec'
                  ? 'bg-[#FED543] text-[#271700] font-bold shadow-2xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Requested Wireframes (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveScreenSet('all_ecosystem')}
              className={`px-3 py-1 rounded-lg font-['Poppins'] transition-all ${
                activeScreenSet === 'all_ecosystem'
                  ? 'bg-[#FED543] text-[#271700] font-bold shadow-2xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              + E-Commerce & Lab (12)
            </button>
          </div>
        </div>

        {/* Right Tools: Style toggle & Cart */}
        <div className="flex items-center gap-2">
          {/* High-Fi vs Wireframe */}
          <button
            type="button"
            onClick={() => setVisualStyle(visualStyle === 'hifi' ? 'wireframe' : 'hifi')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-['Poppins'] font-semibold rounded-xl border transition-all ${
              visualStyle === 'hifi'
                ? 'bg-[#FED543]/15 border-[#FED543]/40 text-[#FED543]'
                : 'bg-stone-800 border-stone-700 text-stone-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {visualStyle === 'hifi' ? '🎨 High-Fi Mode' : '📐 Blueprint Mode'}
            </span>
          </button>

          {/* Cart Bag */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors"
            title="Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F97316] text-white font-['Poppins'] font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Studio Viewport */}
      <div className="relative flex-1 w-full overflow-hidden flex flex-col">
        {/* Floating Zoom Bar for Canvas Mode */}
        {viewMode === 'canvas' && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#161619]/90 backdrop-blur-md border border-stone-800 rounded-2xl px-3.5 py-1.5 shadow-2xl">
            <button
              type="button"
              onClick={() => setCanvasZoom((prev) => Math.max(0.35, +(prev - 0.1).toFixed(2)))}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-semibold text-stone-300 min-w-10 text-center">
              {Math.round(canvasZoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setCanvasZoom((prev) => Math.min(1.2, +(prev + 0.1).toFixed(2)))}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <div className="w-px h-4 bg-stone-800 mx-1" />

            <button
              type="button"
              onClick={() => setCanvasZoom(0.8)}
              className="text-[11px] font-['Poppins'] px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              Reset 80%
            </button>

            <button
              type="button"
              onClick={() => setCanvasZoom(0.55)}
              className="text-[11px] font-['Poppins'] px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              Fit All Screens
            </button>
          </div>
        )}

        {/* VIEW 1: Infinite-feel Figma Canvas Board */}
        {viewMode === 'canvas' && (
          <div
            className="flex-1 w-full h-full overflow-x-auto overflow-y-auto p-12 bg-[#202024] cursor-grab active:cursor-grabbing hide-scrollbar"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          >
            <div
              className="inline-flex items-start gap-10 pb-28 transition-transform duration-200"
              style={{
                transform: `scale(${canvasZoom})`,
                transformOrigin: 'top left',
              }}
            >
              {currentScreens.map((screen) => (
                <div key={screen.id} className="relative flex items-center">
                  <PhoneFrame
                    id={screen.id}
                    title={screen.title}
                    subtitle={screen.subtitle}
                    isActive={activeScreenId === screen.id}
                    isWireframe={visualStyle === 'wireframe'}
                    onSelect={() => setActiveScreenId(screen.id)}
                    scale={1}
                  >
                    {screen.render}
                  </PhoneFrame>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Interactive Mobile Device Simulator (Playable 1:1) */}
        {viewMode === 'simulator' && (
          <div className="flex-1 w-full h-full flex items-center justify-center p-6 bg-[#161619] relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

            {/* Left Screen Step Navigator */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-1.5 bg-stone-900/90 border border-stone-800 p-3 rounded-2xl shadow-xl max-h-[82vh] overflow-y-auto hide-scrollbar w-64">
              <span className="text-[10px] font-bold font-['Poppins'] text-[#FED543] uppercase tracking-wider mb-1">
                Requested Wireframe Flow
              </span>
              {currentScreens.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveScreenId(s.id)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-['Poppins'] text-left transition-all ${
                    activeScreenId === s.id
                      ? 'bg-[#FED543] text-[#271700] font-bold shadow-xs'
                      : 'text-stone-400 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-70">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <span className="block truncate font-semibold">{s.title}</span>
                    <span className="text-[9px] opacity-70 block truncate">{s.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Centered Device */}
            <div className="relative">
              {currentScreens.map((screen) => {
                if (screen.id !== activeScreenId) return null;
                return (
                  <PhoneFrame
                    key={screen.id}
                    id={screen.id}
                    title={screen.title}
                    subtitle={screen.subtitle}
                    isActive={true}
                    isWireframe={visualStyle === 'wireframe'}
                    scale={1}
                    showArtboardLabel={true}
                  >
                    {screen.render}
                  </PhoneFrame>
                );
              })}
            </div>

            {/* Right Quick Simulation Info */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 bg-stone-900/90 border border-stone-800 p-4 rounded-2xl w-64 shadow-xl text-xs font-['Poppins']">
              <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                <span className="font-bold text-stone-200">Wireframe State</span>
                <span className="text-[10px] text-[#FED543] font-mono">Live</span>
              </div>
              <div>
                <span className="text-stone-400 text-[11px]">Child:</span>
                <p className="font-semibold text-white">{childName} ({childAge} yrs)</p>
              </div>
              <div>
                <span className="text-stone-400 text-[11px]">Goals Selected:</span>
                <p className="font-semibold text-amber-400">{selectedGoals.join(', ')}</p>
              </div>
              <div>
                <span className="text-stone-400 text-[11px]">Streak Count:</span>
                <p className="font-semibold text-orange-400">🔥 {streakCount} Days active</p>
              </div>
              <div>
                <span className="text-stone-400 text-[11px]">Typography:</span>
                <p className="font-semibold text-sky-400">Poppins Font Family</p>
              </div>

              <div className="pt-2 border-t border-stone-800 space-y-1.5">
                <button
                  type="button"
                  onClick={() => setActiveScreenId('wireframe-name')}
                  className="w-full py-1.5 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
                >
                  Start from Name Screen
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScreenId('wireframe-homepage')}
                  className="w-full py-1.5 px-3 rounded-lg bg-[#FED543]/20 text-[#FED543] hover:bg-[#FED543]/30 text-xs font-semibold"
                >
                  View 2-Scroll Homepage
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScreenId('wireframe-streak')}
                  className="w-full py-1.5 px-3 rounded-lg bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 text-xs font-semibold"
                >
                  View Mascot Streak Page
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={handleAddToCart}
        isWireframe={visualStyle === 'wireframe'}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={() => setCartItems([])}
        isWireframe={visualStyle === 'wireframe'}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        products={TUCO_PRODUCTS}
        onAddToCart={(p) => handleAddToCart(p, 1)}
        isWireframe={visualStyle === 'wireframe'}
      />
    </div>
  );
}
