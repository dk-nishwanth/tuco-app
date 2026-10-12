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
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
} from 'lucide-react';

import { PhoneFrame } from './components/PhoneFrame';

// Aptivo Screens (Exact recreation of user's uploaded image 570.png):
import { Screen1AptivoSplash } from './components/screens/aptivo/Screen1AptivoSplash';
import { Screen2AptivoLogoPeeking } from './components/screens/aptivo/Screen2AptivoLogoPeeking';
import { Screen3AptivoName } from './components/screens/aptivo/Screen3AptivoName';
import { Screen4AptivoGoals } from './components/screens/aptivo/Screen4AptivoGoals';
import { Screen5AptivoHome } from './components/screens/aptivo/Screen5AptivoHome';
import { Screen6AptivoCourses } from './components/screens/aptivo/Screen6AptivoCourses';
import { Screen7AptivoCourseDetail } from './components/screens/aptivo/Screen7AptivoCourseDetail';
import { Screen8AptivoProgress } from './components/screens/aptivo/Screen8AptivoProgress';
import { Screen9AptivoProfile } from './components/screens/aptivo/Screen9AptivoProfile';

// Additional Wireframe & Ecosystem Screens:
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
  // Active Screen ID defaults to Aptivo Splash screen
  const [activeScreenId, setActiveScreenId] = useState<string>('aptivo-splash-1');
  const [viewMode, setViewMode] = useState<ViewMode>('canvas'); // 'canvas' | 'simulator'
  const [visualStyle, setVisualStyle] = useState<VisualStyle>('hifi'); // 'hifi' | 'wireframe'
  const [canvasZoom, setCanvasZoom] = useState<number>(0.55);
  const [activeScreenSet, setActiveScreenSet] = useState<'aptivo_spec' | 'wireframe_spec' | 'all_ecosystem'>('aptivo_spec');
  const [boardLayout, setBoardLayout] = useState<'grid' | 'strip'>('grid');

  // User Onboarding State
  const [childName, setChildName] = useState<string>('Alyssa');
  const [childAge, setChildAge] = useState<number>(8);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['math', 'art']);
  const [streakCount, setStreakCount] = useState<number>(6);

  // E-Commerce Cart
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: TUCO_PRODUCTS[0], quantity: 1 },
    { product: TUCO_PRODUCTS[1], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1600);
  };

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

  // 1. APTIVO 9-SCREEN FLOW (EXACT MATCH TO USER'S UPLOADED IMAGE 570.png)
  const aptivoScreens = [
    {
      id: 'aptivo-splash-1',
      title: 'iPhone 17 - 01',
      subtitle: 'Mascot Face Splash (Row 1 #1)',
      render: (
        <Screen1AptivoSplash
          onNext={() => setActiveScreenId('aptivo-splash-2')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-splash-2',
      title: 'iPhone 17 - 02',
      subtitle: 'Logo & Peeking Mascot (Row 1 #2)',
      render: (
        <Screen2AptivoLogoPeeking
          onNext={() => setActiveScreenId('aptivo-name')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-name',
      title: 'iPhone 17 - 03',
      subtitle: "Hi I'm Petal! Name (Row 1 #3)",
      render: (
        <Screen3AptivoName
          name={childName}
          onChangeName={(n) => setChildName(n)}
          onNext={() => setActiveScreenId('aptivo-goals')}
          onBack={() => setActiveScreenId('aptivo-splash-2')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-goals',
      title: 'iPhone 17 - 04',
      subtitle: 'Pick What You Love (Row 1 #4)',
      render: (
        <Screen4AptivoGoals
          selectedGoals={selectedGoals}
          onToggleGoal={handleToggleGoal}
          onNext={() => setActiveScreenId('aptivo-home')}
          onBack={() => setActiveScreenId('aptivo-name')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-home',
      title: 'iPhone 17 - 05',
      subtitle: 'Home Hub & Eyes Cards (Row 2 #1)',
      render: (
        <Screen5AptivoHome
          userName={childName}
          onNavigateTab={(tab) => {
            if (tab === 'courses') setActiveScreenId('aptivo-courses');
            if (tab === 'progress') setActiveScreenId('aptivo-progress');
            if (tab === 'profile') setActiveScreenId('aptivo-profile');
          }}
          onSelectCourse={() => setActiveScreenId('aptivo-course-detail')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-courses',
      title: 'iPhone 17 - 06',
      subtitle: 'My Courses & Grid (Row 2 #2)',
      render: (
        <Screen6AptivoCourses
          onNavigateTab={(tab) => {
            if (tab === 'home') setActiveScreenId('aptivo-home');
            if (tab === 'progress') setActiveScreenId('aptivo-progress');
            if (tab === 'profile') setActiveScreenId('aptivo-profile');
          }}
          onSelectCourse={() => setActiveScreenId('aptivo-course-detail')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-course-detail',
      title: 'iPhone 17 - 07',
      subtitle: 'Counting to 20 Detail (Row 2 #3)',
      render: (
        <Screen7AptivoCourseDetail
          onBack={() => setActiveScreenId('aptivo-courses')}
          onNavigateTab={(tab) => {
            if (tab === 'home') setActiveScreenId('aptivo-home');
            if (tab === 'progress') setActiveScreenId('aptivo-progress');
            if (tab === 'profile') setActiveScreenId('aptivo-profile');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-progress',
      title: 'iPhone 17 - 08',
      subtitle: 'My Progress & Streak (Row 2 #4)',
      render: (
        <Screen8AptivoProgress
          streakCount={streakCount}
          onBack={() => setActiveScreenId('aptivo-home')}
          onNavigateTab={(tab) => {
            if (tab === 'home') setActiveScreenId('aptivo-home');
            if (tab === 'courses') setActiveScreenId('aptivo-courses');
            if (tab === 'profile') setActiveScreenId('aptivo-profile');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'aptivo-profile',
      title: 'iPhone 17 - 09',
      subtitle: 'Profile & Trophy Case (Bottom)',
      render: (
        <Screen9AptivoProfile
          userName={childName}
          streakCount={streakCount}
          onBack={() => setActiveScreenId('aptivo-home')}
          onNavigateTab={(tab) => {
            if (tab === 'home') setActiveScreenId('aptivo-home');
            if (tab === 'courses') setActiveScreenId('aptivo-courses');
            if (tab === 'progress') setActiveScreenId('aptivo-progress');
          }}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
  ];

  // 2. PRIMARY SPEC WIREFRAME SCREENS (Ref 568 + Tucokids Wireframe)
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
    activeScreenSet === 'aptivo_spec'
      ? aptivoScreens
      : activeScreenSet === 'wireframe_spec'
      ? wireframeSpecScreens
      : [...aptivoScreens, ...wireframeSpecScreens, ...ecosystemScreens];

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#1E1E22] text-stone-100 font-['Poppins'] select-none">
      {/* Studio Header Bar */}
      <header className="h-14 border-b border-stone-800 bg-[#161619] px-5 flex items-center justify-between shrink-0 z-40">
        {/* Tuco App Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F06553]" />
            <span className="font-['Poppins'] text-lg font-black text-[#F06553] tracking-wider uppercase">
              Aptivo
            </span>
            <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300">
              image 570.png • 9 Screens Flow
            </span>
          </div>
        </div>

        {/* View Mode & Filter Tabs */}
        <div className="flex items-center gap-2">
          {/* Canvas Mode vs Separate Screen vs Simulator Mode */}
          <div className="flex items-center p-1 bg-stone-900 border border-stone-800 rounded-xl">
            <button
              type="button"
              onClick={() => setViewMode('canvas')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-['Poppins'] font-medium rounded-lg transition-all ${
                viewMode === 'canvas'
                  ? 'bg-stone-800 text-[#F06553] font-bold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Canvas Board ({currentScreens.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('single')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-['Poppins'] font-medium rounded-lg transition-all ${
                viewMode === 'single'
                  ? 'bg-[#F06553] text-white font-bold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Inspect Separately (1-by-1)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-['Poppins'] font-medium rounded-lg transition-all ${
                viewMode === 'simulator'
                  ? 'bg-stone-800 text-[#F06553] font-bold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Simulator</span>
            </button>
          </div>

          {/* Screen Set Switcher */}
          <div className="hidden md:flex items-center p-1 bg-stone-900 border border-stone-800 rounded-xl text-xs">
            <button
              type="button"
              onClick={() => {
                setActiveScreenSet('aptivo_spec');
                setActiveScreenId('aptivo-splash-1');
              }}
              className={`px-3 py-1 rounded-lg font-['Poppins'] transition-all ${
                activeScreenSet === 'aptivo_spec'
                  ? 'bg-[#F06553] text-white font-bold shadow-2xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              ★ Image 570 (9 Screens)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveScreenSet('wireframe_spec');
                setActiveScreenId('wireframe-age');
              }}
              className={`px-3 py-1 rounded-lg font-['Poppins'] transition-all ${
                activeScreenSet === 'wireframe_spec'
                  ? 'bg-[#FED543] text-[#271700] font-bold shadow-2xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Age Carousel (Image 568)
            </button>
            <button
              type="button"
              onClick={() => setActiveScreenSet('all_ecosystem')}
              className={`px-3 py-1 rounded-lg font-['Poppins'] transition-all ${
                activeScreenSet === 'all_ecosystem'
                  ? 'bg-stone-700 text-white font-bold shadow-2xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Screens (22)
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
                ? 'bg-[#F06553]/15 border-[#F06553]/40 text-[#F06553]'
                : 'bg-stone-800 border-stone-700 text-stone-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {visualStyle === 'hifi' ? '🎨 High-Fi Mode' : '📐 Blueprint Mode'}
            </span>
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
              onClick={() => setCanvasZoom((prev) => Math.max(0.25, +(prev - 0.1).toFixed(2)))}
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
              onClick={() => setCanvasZoom(0.5)}
              className="text-[11px] font-['Poppins'] px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              Fit Grid (50%)
            </button>

            <button
              type="button"
              onClick={() => setCanvasZoom(0.8)}
              className="text-[11px] font-['Poppins'] px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              80% Detail
            </button>

            {activeScreenSet === 'aptivo_spec' && (
              <>
                <div className="w-px h-4 bg-stone-800 mx-1" />
                <button
                  type="button"
                  onClick={() => setBoardLayout(boardLayout === 'grid' ? 'strip' : 'grid')}
                  className={`text-[11px] font-['Poppins'] px-2.5 py-1 rounded-md transition-all ${
                    boardLayout === 'grid'
                      ? 'bg-[#F06553] text-white font-bold'
                      : 'text-stone-400 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  {boardLayout === 'grid' ? '📐 4x2 Grid (Image 570)' : '↔ Single Strip'}
                </button>
              </>
            )}
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
            {/* If Aptivo 9-screens grid layout matching Image 570.png: */}
            {activeScreenSet === 'aptivo_spec' && boardLayout === 'grid' ? (
              <div
                className="inline-flex flex-col gap-12 pb-32 transition-transform duration-200"
                style={{
                  transform: `scale(${canvasZoom})`,
                  transformOrigin: 'top left',
                }}
              >
                {/* Row 1: First 4 screens (Screens 1 to 4) */}
                <div className="inline-flex items-start gap-10">
                  {aptivoScreens.slice(0, 4).map((screen) => (
                    <div key={screen.id} className="relative flex items-center">
                      <PhoneFrame
                        id={screen.id}
                        title={screen.title}
                        subtitle={screen.subtitle}
                        isActive={activeScreenId === screen.id}
                        isWireframe={visualStyle === 'wireframe'}
                        onSelect={() => setActiveScreenId(screen.id)}
                        onInspectSeparately={() => {
                          setActiveScreenId(screen.id);
                          setViewMode('single');
                        }}
                        scale={1}
                      >
                        {screen.render}
                      </PhoneFrame>
                    </div>
                  ))}
                </div>

                {/* Row 2: Middle 4 screens (Screens 5 to 8) */}
                <div className="inline-flex items-start gap-10">
                  {aptivoScreens.slice(4, 8).map((screen) => (
                    <div key={screen.id} className="relative flex items-center">
                      <PhoneFrame
                        id={screen.id}
                        title={screen.title}
                        subtitle={screen.subtitle}
                        isActive={activeScreenId === screen.id}
                        isWireframe={visualStyle === 'wireframe'}
                        onSelect={() => setActiveScreenId(screen.id)}
                        onInspectSeparately={() => {
                          setActiveScreenId(screen.id);
                          setViewMode('single');
                        }}
                        scale={1}
                      >
                        {screen.render}
                      </PhoneFrame>
                    </div>
                  ))}
                </div>

                {/* Row 3: Screen 9 centered below matching Image 570.png */}
                <div className="relative flex items-center justify-center pt-2">
                  <div className="relative">
                    <PhoneFrame
                      id={aptivoScreens[8].id}
                      title={aptivoScreens[8].title}
                      subtitle={aptivoScreens[8].subtitle}
                      isActive={activeScreenId === aptivoScreens[8].id}
                      isWireframe={visualStyle === 'wireframe'}
                      onSelect={() => setActiveScreenId(aptivoScreens[8].id)}
                      onInspectSeparately={() => {
                        setActiveScreenId(aptivoScreens[8].id);
                        setViewMode('single');
                      }}
                      scale={1}
                    >
                      {aptivoScreens[8].render}
                    </PhoneFrame>

                    {/* Cute annotation text like in Image 570.png */}
                    <div className="absolute -right-52 top-1/2 -translate-y-1/2 flex items-center gap-3 select-none pointer-events-none">
                      <div className="text-3xl">⤴️</div>
                      <div>
                        <span className="font-['Poppins'] text-lg font-bold text-stone-200 block">
                          mobile app screens
                        </span>
                        <span className="text-xs text-stone-400">
                          Recreated from image 570.png
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Strip layout */
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
                      onInspectSeparately={() => {
                        setActiveScreenId(screen.id);
                        setViewMode('single');
                      }}
                      scale={1}
                    >
                      {screen.render}
                    </PhoneFrame>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: Single Screen Inspector Mode (Examine Each Screen Separately for Figma Recreation) */}
        {viewMode === 'single' && (
          <div className="flex-1 w-full h-full flex flex-col bg-[#161619] relative overflow-hidden select-none">
            {/* Top Separate Screen Pagination Ribbon */}
            <div className="w-full bg-[#1A1A1E] border-b border-stone-800/80 px-6 py-2.5 flex items-center justify-between shrink-0 z-20">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => {
                  const idx = currentScreens.findIndex((s) => s.id === activeScreenId);
                  if (idx > 0) setActiveScreenId(currentScreens[idx - 1].id);
                }}
                disabled={currentScreens.findIndex((s) => s.id === activeScreenId) <= 0}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800 disabled:opacity-30 disabled:pointer-events-none text-xs font-['Poppins'] font-semibold transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous Screen</span>
              </button>

              {/* Scrollable Screen Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar px-3 max-w-2xl">
                {currentScreens.map((s, idx) => {
                  const isActive = activeScreenId === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveScreenId(s.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-['Poppins'] shrink-0 transition-all ${
                        isActive
                          ? 'bg-[#F06553] text-white font-bold shadow-md ring-2 ring-[#F06553]/30 scale-102'
                          : 'bg-stone-900/90 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-stone-800/80'
                      }`}
                    >
                      <span className="font-mono text-[10px] opacity-80">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate max-w-[120px]">{s.title.replace('iPhone 17 - ', 'Screen ')}</span>
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => {
                  const idx = currentScreens.findIndex((s) => s.id === activeScreenId);
                  if (idx < currentScreens.length - 1) setActiveScreenId(currentScreens[idx + 1].id);
                }}
                disabled={currentScreens.findIndex((s) => s.id === activeScreenId) >= currentScreens.length - 1}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800 disabled:opacity-30 disabled:pointer-events-none text-xs font-['Poppins'] font-semibold transition-all"
              >
                <span className="hidden sm:inline">Next Screen</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Main Stage with Centered Screen & Figma Specs Panel */}
            <div className="flex-1 w-full overflow-y-auto overflow-x-hidden flex items-center justify-center p-6 lg:p-8 gap-8 relative">
              <div className="absolute w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-[140px] pointer-events-none" />

              {/* Centered Isolated Screen Frame */}
              <div className="relative shrink-0 flex items-center justify-center py-4">
                {currentScreens.map((screen) => {
                  if (screen.id !== activeScreenId) return null;
                  return (
                    <div key={screen.id} className="relative">
                      <PhoneFrame
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
                    </div>
                  );
                })}
              </div>

              {/* Right Figma Recreation Specs Card */}
              {(() => {
                const screenIndex = currentScreens.findIndex((s) => s.id === activeScreenId);
                const currentScreen = currentScreens[screenIndex >= 0 ? screenIndex : 0];
                return (
                  <div className="hidden xl:flex flex-col gap-4 bg-stone-900/95 border border-stone-800 p-5 rounded-3xl w-80 shadow-2xl text-xs font-['Poppins'] shrink-0 max-h-[82vh] overflow-y-auto hide-scrollbar">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                      <div>
                        <span className="text-[10px] font-bold text-[#F06553] tracking-widest uppercase block">
                          Figma Recreation Specs
                        </span>
                        <h3 className="font-bold text-sm text-stone-100 mt-0.5">
                          {currentScreen.title}
                        </h3>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-stone-800 text-stone-300 font-mono text-[10px]">
                        {screenIndex + 1}/{currentScreens.length}
                      </span>
                    </div>

                    {/* Viewport Frame */}
                    <div className="space-y-1">
                      <span className="text-[11px] text-stone-400 font-medium">Artboard Frame:</span>
                      <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
                        <span>393 × 852 px</span>
                        <span className="text-stone-500">iPhone 17</span>
                      </div>
                    </div>

                    {/* Purpose / Role */}
                    <div className="space-y-1">
                      <span className="text-[11px] text-stone-400 font-medium">Screen Purpose:</span>
                      <p className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-stone-300 text-[11px] leading-relaxed">
                        {currentScreen.subtitle}
                      </p>
                    </div>

                    {/* Color Tokens Palette with click-to-copy */}
                    <div className="space-y-2">
                      <span className="text-[11px] text-stone-400 font-medium">Color Tokens (Click to Copy):</span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: 'Coral Brand', hex: '#F06553', bg: '#F06553' },
                          { name: 'Cream Canvas', hex: '#FAF5EF', bg: '#FAF5EF', textDark: true },
                          { name: 'Art Lilac', hex: '#98A2F8', bg: '#98A2F8' },
                          { name: 'Mint Logic', hex: '#40CDB0', bg: '#40CDB0' },
                          { name: 'Azure Math', hex: '#5B9DF8', bg: '#5B9DF8' },
                          { name: 'Rose Music', hex: '#E56598', bg: '#E56598' },
                        ].map((c) => (
                          <button
                            key={c.hex}
                            type="button"
                            onClick={() => copyToClipboard(c.hex)}
                            className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-950/90 border border-stone-800 hover:border-stone-700 text-left transition-all group"
                          >
                            <span
                              className="w-4 h-4 rounded-md shrink-0 border border-black/10"
                              style={{ backgroundColor: c.bg }}
                            />
                            <div className="min-w-0 flex-1">
                              <span className="block text-[9px] text-stone-400 truncate leading-tight">
                                {c.name}
                              </span>
                              <span className="font-mono text-[10px] text-stone-200 block truncate">
                                {copiedHex === c.hex ? '✓ Copied' : c.hex}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Typography Token */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] text-stone-400 font-medium">Typography Hierarchy:</span>
                      <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1 text-[10px]">
                        <div className="flex justify-between">
                          <span className="text-stone-400">Headings:</span>
                          <span className="font-bold text-stone-200">Poppins Bold 16-36px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400">Labels / Pills:</span>
                          <span className="font-semibold text-stone-200">Poppins SemiBold 11-12px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400">Body & Meta:</span>
                          <span className="text-stone-400">Poppins Regular 9-10px</span>
                        </div>
                      </div>
                    </div>

                    {/* Corner Radii */}
                    <div className="space-y-1">
                      <span className="text-[11px] text-stone-400 font-medium">Corner Radii Tokens:</span>
                      <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-mono">
                        <span className="p-1 rounded-lg bg-stone-950 border border-stone-800 text-stone-300">
                          24px Card
                        </span>
                        <span className="p-1 rounded-lg bg-stone-950 border border-stone-800 text-stone-300">
                          16px Tile
                        </span>
                        <span className="p-1 rounded-lg bg-stone-950 border border-stone-800 text-stone-300">
                          Full Pill
                        </span>
                      </div>
                    </div>

                    {/* Quick Mode Jump Buttons */}
                    <div className="pt-2 border-t border-stone-800 space-y-1.5">
                      <button
                        type="button"
                        onClick={() => setViewMode('canvas')}
                        className="w-full py-2 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span>View All Screens on Canvas Board</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setViewMode('simulator')}
                        className="w-full py-2 px-3 rounded-xl bg-[#F06553]/20 hover:bg-[#F06553]/30 text-[#F06553] font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Test Clickable Flow in Simulator</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* VIEW 3: Interactive Mobile Device Simulator (Playable 1:1) */}
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
