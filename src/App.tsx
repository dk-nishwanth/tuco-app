/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sliders,
  Smartphone,
  LayoutGrid,
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Palette,
  Eye,
  Info,
  RefreshCw,
} from 'lucide-react';
import { PhoneFrame } from './components/PhoneFrame';
import { ScreenScenicTrailLoading } from './components/screens/ScreenScenicTrailLoading';
import { Screen1Splash } from './components/screens/Screen1Splash';
import { Screen2Name } from './components/screens/Screen2Name';
import { Screen3Age } from './components/screens/Screen3Age';
import { Screen4Concern } from './components/screens/Screen4Concern';
import { Screen5Home } from './components/screens/Screen5Home';
import { Screen6Routine } from './components/screens/Screen6Routine';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { DesignTokensPanel } from './components/DesignTokensPanel';
import { TUCO_PRODUCTS } from './data/tucoData';
import { ScreenId, QuizState, Product, CartItem, VisualStyle, ViewMode } from './types';

export default function App() {
  // Navigation & Screen selection - Default to the new Scenic Running Mascot Trail Screen!
  const [activeScreenId, setActiveScreenId] = useState<ScreenId>('screen-0-trail');
  const [viewMode, setViewMode] = useState<ViewMode>('canvas'); // 'canvas' | 'simulator'
  const [visualStyle, setVisualStyle] = useState<VisualStyle>('hifi'); // 'hifi' | 'wireframe'
  const [canvasZoom, setCanvasZoom] = useState<number>(0.85);
  const [showFlowConnectors, setShowFlowConnectors] = useState<boolean>(true);
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);

  // Child Quiz Personalization State
  const [quizState, setQuizState] = useState<QuizState>({
    childName: 'Maya',
    ageGroup: '6-9 years old',
    concern: 'dull & tanned skin',
  });

  // E-Commerce cart & wishlist
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: TUCO_PRODUCTS[0], quantity: 1 },
    { product: TUCO_PRODUCTS[1], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  // Canvas horizontal container ref
  const canvasRef = useRef<HTMLDivElement>(null);

  // Cart actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
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
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleClearCart = () => setCartItems([]);

  // Auto scroll to screen in canvas when selected
  const handleSelectScreenInCanvas = (screenId: ScreenId) => {
    setActiveScreenId(screenId);
    if (viewMode === 'canvas') {
      const element = document.getElementById(screenId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  // Keyboard zoom shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '=') {
        e.preventDefault();
        setCanvasZoom((prev) => Math.min(1.2, +(prev + 0.1).toFixed(2)));
      } else if ((e.metaKey || e.ctrlKey) && e.key === '-') {
        e.preventDefault();
        setCanvasZoom((prev) => Math.max(0.5, +(prev - 0.1).toFixed(2)));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const screensConfig = [
    {
      id: 'screen-0-trail' as ScreenId,
      number: 'Trail',
      title: 'iPhone 17 - Trail Loading',
      subtitle: 'Scenic Running Mascot & Live Quiz',
      render: (
        <ScreenScenicTrailLoading
          quizState={quizState}
          onUpdateQuizState={(updates) => setQuizState((prev) => ({ ...prev, ...updates }))}
          onCompleteTrail={() => {
            setActiveScreenId('screen-5-home');
            handleSelectScreenInCanvas('screen-5-home');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'screen-1-splash' as ScreenId,
      number: '1',
      title: 'iPhone 17 - 1',
      subtitle: 'Splash & Brand Intro',
      render: (
        <Screen1Splash
          isWireframe={visualStyle === 'wireframe'}
          onNext={() => {
            setActiveScreenId('screen-2-name');
            handleSelectScreenInCanvas('screen-2-name');
          }}
        />
      ),
    },
    {
      id: 'screen-2-name' as ScreenId,
      number: '2',
      title: 'iPhone 17 - 2',
      subtitle: 'Step 1: Child Name',
      render: (
        <Screen2Name
          name={quizState.childName}
          onChangeName={(name) => setQuizState((prev) => ({ ...prev, childName: name }))}
          onNext={() => {
            setActiveScreenId('screen-3-age');
            handleSelectScreenInCanvas('screen-3-age');
          }}
          onClose={() => {
            setActiveScreenId('screen-5-home');
            handleSelectScreenInCanvas('screen-5-home');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'screen-3-age' as ScreenId,
      number: '3',
      title: 'iPhone 17 - 3',
      subtitle: 'Step 2: Child Age',
      render: (
        <Screen3Age
          selectedAge={quizState.ageGroup}
          onSelectAge={(age) => setQuizState((prev) => ({ ...prev, ageGroup: age }))}
          onNext={() => {
            setActiveScreenId('screen-4-concern');
            handleSelectScreenInCanvas('screen-4-concern');
          }}
          onBack={() => {
            setActiveScreenId('screen-2-name');
            handleSelectScreenInCanvas('screen-2-name');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'screen-4-concern' as ScreenId,
      number: '4',
      title: 'iPhone 17 - 4',
      subtitle: 'Step 3: Child Concern',
      render: (
        <Screen4Concern
          selectedConcern={quizState.concern}
          onSelectConcern={(concern) => setQuizState((prev) => ({ ...prev, concern }))}
          onNext={() => {
            setActiveScreenId('screen-5-home');
            handleSelectScreenInCanvas('screen-5-home');
          }}
          onBack={() => {
            setActiveScreenId('screen-3-age');
            handleSelectScreenInCanvas('screen-3-age');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'screen-5-home' as ScreenId,
      number: '5',
      title: 'iPhone 17 - 5',
      subtitle: 'Home & Discovery Feed',
      render: (
        <Screen5Home
          quizState={quizState}
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onSelectProduct={(p) => setSelectedProductForModal(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onNavigateTab={(tab) => {
            if (tab === 'home') setActiveScreenId('screen-5-home');
            if (tab === 'profile' || tab === 'settings') setIsInspectorOpen(true);
          }}
          onGoToRoutine={() => {
            setActiveScreenId('screen-6-routine');
            handleSelectScreenInCanvas('screen-6-routine');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'screen-6-routine' as ScreenId,
      number: '6',
      title: 'iPhone 17 - 6',
      subtitle: 'Personalized Routine & Bundle',
      render: (
        <Screen6Routine
          quizState={quizState}
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onSelectProduct={(p) => setSelectedProductForModal(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onAddBundleToCart={handleAddBundleToCart}
          onNavigateTab={(tab) => {
            if (tab === 'home') {
              setActiveScreenId('screen-5-home');
              handleSelectScreenInCanvas('screen-5-home');
            }
          }}
          onBackToHome={() => {
            setActiveScreenId('screen-5-home');
            handleSelectScreenInCanvas('screen-5-home');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#1E1E22] text-stone-100 font-sans select-none">
      {/* Top Studio Application Bar */}
      <header className="h-14 border-b border-stone-800 bg-[#18181B] px-4 flex items-center justify-between shrink-0 z-40">
        {/* Brand & Project Info */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
            <span className="font-fredoka text-lg font-bold text-amber-400 tracking-tight">
              tüco KIDS
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-800 text-stone-300">
              App Wireframe & Prototype Studio
            </span>
          </div>

          <a
            href="https://tucokids.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1 text-[11px] text-stone-400 hover:text-amber-400 transition-colors ml-2"
          >
            <span>tucokids.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* View Mode & Screen Selectors */}
        <div className="flex items-center gap-1.5">
          {/* Canvas vs Simulator Toggle */}
          <div className="flex items-center p-1 bg-stone-900 border border-stone-800 rounded-xl">
            <button
              type="button"
              onClick={() => setViewMode('canvas')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                viewMode === 'canvas'
                  ? 'bg-stone-800 text-amber-400 font-semibold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Canvas Board (All 6)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                viewMode === 'simulator'
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive Simulator</span>
            </button>
          </div>

          {/* Quick Screen Selector in simulator mode */}
          {viewMode === 'simulator' && (
            <div className="flex items-center gap-1 bg-stone-900 border border-stone-800 rounded-xl p-1">
              {screensConfig.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveScreenId(s.id)}
                  className={`min-w-6 px-1.5 h-6 rounded-lg text-[11px] font-bold font-fredoka flex items-center justify-center transition-all ${
                    activeScreenId === s.id
                      ? 'bg-amber-400 text-stone-950 shadow-xs'
                      : 'text-stone-400 hover:bg-stone-800'
                  }`}
                  title={`${s.title}: ${s.subtitle}`}
                >
                  {s.id === 'screen-0-trail' ? '🏃 Trail' : s.number}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions: High-Fi toggle, Zoom, Cart, Inspector */}
        <div className="flex items-center gap-2">
          {/* Wireframe vs High-Fi Toggle */}
          <button
            type="button"
            onClick={() => setVisualStyle(visualStyle === 'hifi' ? 'wireframe' : 'hifi')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-fredoka font-semibold rounded-xl border transition-all ${
              visualStyle === 'hifi'
                ? 'bg-amber-400/15 border-amber-400/40 text-amber-300'
                : 'bg-stone-800 border-stone-700 text-stone-200'
            }`}
            title="Toggle between High Fidelity Tuco Yellow and Blueprint Wireframe mode"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {visualStyle === 'hifi' ? '🎨 High-Fi Mode' : '📐 Blueprint Mode'}
            </span>
          </button>

          {/* Cart Bag trigger */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors"
            title="Open Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-stone-950 font-bold font-fredoka text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            )}
          </button>

          {/* Inspector / Design Tokens */}
          <button
            type="button"
            onClick={() => setIsInspectorOpen(!isInspectorOpen)}
            className={`p-2 rounded-xl border transition-colors ${
              isInspectorOpen
                ? 'bg-amber-400 border-amber-400 text-stone-950'
                : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
            }`}
            title="Design Specs, Colors & Tokens"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Workspace Area */}
      <div className="relative flex-1 w-full overflow-hidden flex flex-col">
        {/* Floating Zoom & Canvas Controls Bar (when in Canvas mode) */}
        {viewMode === 'canvas' && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#18181B]/90 backdrop-blur-md border border-stone-800/90 rounded-2xl px-3 py-1.5 shadow-2xl">
            <button
              type="button"
              onClick={() => setCanvasZoom((prev) => Math.max(0.4, +(prev - 0.1).toFixed(2)))}
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
              onClick={() => setCanvasZoom(0.85)}
              className="text-[11px] font-fredoka px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              Reset 85%
            </button>

            <button
              type="button"
              onClick={() => setCanvasZoom(0.65)}
              className="text-[11px] font-fredoka px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              Fit All 6
            </button>

            <div className="w-px h-4 bg-stone-800 mx-1" />

            <button
              type="button"
              onClick={() => setShowFlowConnectors(!showFlowConnectors)}
              className={`text-[11px] font-fredoka px-2.5 py-1 rounded-md transition-colors ${
                showFlowConnectors ? 'bg-amber-400/20 text-amber-300 font-bold' : 'text-stone-400 hover:text-white'
              }`}
            >
              {showFlowConnectors ? 'Flow Lines: ON' : 'Flow Lines: OFF'}
            </button>
          </div>
        )}

        {/* VIEW 1: Figma Style Canvas View with All 6 Screens Side-by-Side */}
        {viewMode === 'canvas' && (
          <div
            ref={canvasRef}
            className="flex-1 w-full h-full overflow-x-auto overflow-y-auto p-12 bg-[#202024] cursor-grab active:cursor-grabbing hide-scrollbar"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          >
            <div
              className="inline-flex items-start gap-12 pb-24 transition-transform duration-200"
              style={{
                transform: `scale(${canvasZoom})`,
                transformOrigin: 'top left',
              }}
            >
              {screensConfig.map((screen, index) => (
                <div key={screen.id} className="relative flex items-center">
                  {/* Phone Mockup Frame */}
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

                  {/* Flow Arrow connecting to next screen */}
                  {showFlowConnectors && index < screensConfig.length - 1 && (
                    <div className="mx-2 hidden lg:flex flex-col items-center justify-center text-amber-400/60 pointer-events-none">
                      <div className="w-8 border-t-2 border-dashed border-amber-400/50 relative">
                        <ArrowRight className="w-4 h-4 text-amber-400 absolute -right-2 -top-2" />
                      </div>
                      <span className="text-[10px] font-mono text-stone-500 mt-1">
                        Step {index + 1}→{index + 2}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Interactive Mobile Device Simulator (1:1 scale test) */}
        {viewMode === 'simulator' && (
          <div className="flex-1 w-full h-full flex items-center justify-center p-6 bg-[#18181B] relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

            {/* Left Screen Step Navigator */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2.5 bg-stone-900/90 border border-stone-800 p-3 rounded-2xl shadow-xl">
              <span className="text-[10px] font-bold font-fredoka text-amber-400 uppercase tracking-wider mb-1">
                Prototype Journey
              </span>
              {screensConfig.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveScreenId(s.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-left transition-all ${
                    activeScreenId === s.id
                      ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                      : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-70">{s.id === 'screen-0-trail' ? '🏃' : `0${s.number}`}</span>
                  <div>
                    <span className="block">{s.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Centered Device */}
            <div className="relative">
              {screensConfig.map((screen) => {
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

            {/* Right Quick Controls */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 bg-stone-900/90 border border-stone-800 p-4 rounded-2xl w-64 shadow-xl text-xs font-body">
              <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                <span className="font-fredoka font-bold text-stone-200">Personalized State</span>
                <span className="text-[10px] text-amber-400 font-mono">Live</span>
              </div>
              <div>
                <span className="text-stone-400 text-[11px]">Child:</span>
                <p className="font-semibold text-white">{quizState.childName} ({quizState.ageGroup})</p>
              </div>
              <div>
                <span className="text-stone-400 text-[11px]">Primary Concern:</span>
                <p className="font-semibold text-amber-400">{quizState.concern}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveScreenId('screen-1-splash');
                }}
                className="w-full mt-2 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-fredoka font-semibold flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restart Onboarding</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
        isWireframe={visualStyle === 'wireframe'}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
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

      {/* Design Specs & Inspector Drawer */}
      <DesignTokensPanel
        quizState={quizState}
        onUpdateQuizState={(updates) => setQuizState((prev) => ({ ...prev, ...updates }))}
        visualStyle={visualStyle}
        onToggleVisualStyle={(style) => setVisualStyle(style)}
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />
    </div>
  );
}
