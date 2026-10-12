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

// Langvi Screens (Exact recreation of user's uploaded image 571.png):
import { Screen1LangviCreateAccount } from './components/screens/langvi/Screen1LangviCreateAccount';
import { Screen2LangviQuizDone } from './components/screens/langvi/Screen2LangviQuizDone';
import { Screen3LangviStudyCalendar } from './components/screens/langvi/Screen3LangviStudyCalendar';
import { Screen4LangviInteractiveQuiz } from './components/screens/langvi/Screen4LangviInteractiveQuiz';
import { Screen5LangviPricingPlans } from './components/screens/langvi/Screen5LangviPricingPlans';
import { Screen6LangviQuizMastery } from './components/screens/langvi/Screen6LangviQuizMastery';
import { Screen7LangviPeekingLogin } from './components/screens/langvi/Screen7LangviPeekingLogin';
import { Screen8LangviStudyMilestone } from './components/screens/langvi/Screen8LangviStudyMilestone';
import { Screen9LangviJacobProfile } from './components/screens/langvi/Screen9LangviJacobProfile';
import { Screen10LangviOnlineLessons } from './components/screens/langvi/Screen10LangviOnlineLessons';

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
  // Active Screen ID defaults to Langvi Quiz Done screen (Image 571)
  const [activeScreenId, setActiveScreenId] = useState<string>('langvi-quiz-done');
  // Default to Canvas view showing ALL screens first
  const [viewMode, setViewMode] = useState<ViewMode>('canvas'); // 'canvas' | 'single' | 'simulator'
  const [visualStyle, setVisualStyle] = useState<VisualStyle>('hifi'); // 'hifi' | 'wireframe'
  const [canvasZoom, setCanvasZoom] = useState<number>(0.45);
  // Default to langvi_spec so newly uploaded image 571 screens are shown first
  const [activeScreenSet, setActiveScreenSet] = useState<'langvi_spec' | 'aptivo_spec' | 'wireframe_spec' | 'all_ecosystem'>('langvi_spec');
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

  // 0. LANGVI 10-SCREEN FLOW (EXACT MATCH TO USER'S UPLOADED IMAGE 571.png)
  const langviScreens = [
    {
      id: 'langvi-create-account',
      title: 'Langvi 01: Create Account',
      subtitle: 'Social Sign-Up & Peeking Mascot (Row 1 #1)',
      render: (
        <Screen1LangviCreateAccount
          onNext={() => setActiveScreenId('langvi-quiz-done')}
          onGoToLogin={() => setActiveScreenId('langvi-peeking-login')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-quiz-done',
      title: 'Langvi 02: Congrats Quiz Done',
      subtitle: 'Purple Backdrop & Sleeping Mascot (Row 1 #2)',
      render: (
        <Screen2LangviQuizDone
          onNext={() => setActiveScreenId('langvi-calendar')}
          onHome={() => setActiveScreenId('langvi-calendar')}
          onClose={() => setActiveScreenId('langvi-create-account')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-calendar',
      title: 'Langvi 03: Study Calendar',
      subtitle: 'Mascot Faces 35-Day Grid & Stats (Row 1 #3)',
      render: (
        <Screen3LangviStudyCalendar
          onNext={() => setActiveScreenId('langvi-quiz')}
          onClose={() => setActiveScreenId('langvi-quiz-done')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-quiz',
      title: 'Langvi 04: Interactive Quiz',
      subtitle: 'Lightbulb Idea Mascot & Bread Question (Row 1 #4)',
      render: (
        <Screen4LangviInteractiveQuiz
          onNext={() => setActiveScreenId('langvi-pricing')}
          onClose={() => setActiveScreenId('langvi-calendar')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-pricing',
      title: 'Langvi 05: Lessons Pricing',
      subtitle: 'Teenagers $79 & Kids $57 Plans (Row 1 #5)',
      render: (
        <Screen5LangviPricingPlans
          onNext={() => setActiveScreenId('langvi-mastery')}
          onBack={() => setActiveScreenId('langvi-quiz')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-mastery',
      title: 'Langvi 06: Quiz Mastery 97%',
      subtitle: 'Mascot Hearts & Sentence Completion (Row 2 #1)',
      render: (
        <Screen6LangviQuizMastery
          onNext={() => setActiveScreenId('langvi-peeking-login')}
          onClose={() => setActiveScreenId('langvi-pricing')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-peeking-login',
      title: 'Langvi 07: Peeking Mascot Login',
      subtitle: 'Yellow Mascot Peek & Rounded Bottom Sheet (Row 2 #2)',
      render: (
        <Screen7LangviPeekingLogin
          onNext={() => setActiveScreenId('langvi-milestone')}
          onGoToSignUp={() => setActiveScreenId('langvi-create-account')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-milestone',
      title: 'Langvi 08: 15-Min Milestone',
      subtitle: 'Blue Kissing Mascot & Sound Equalizer (Row 2 #3)',
      render: (
        <Screen8LangviStudyMilestone
          onNext={() => setActiveScreenId('langvi-profile')}
          onClose={() => setActiveScreenId('langvi-peeking-login')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-profile',
      title: 'Langvi 09: Jacob Profile',
      subtitle: 'Glasses Avatar, Tasks & Skill Progress (Row 2 #4)',
      render: (
        <Screen9LangviJacobProfile
          onNext={() => setActiveScreenId('langvi-online-lessons')}
          onClose={() => setActiveScreenId('langvi-milestone')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'langvi-online-lessons',
      title: 'Langvi 10: Online Lessons',
      subtitle: 'Interactive Lessons Hub & Media Pill (Row 2 #5)',
      render: (
        <Screen10LangviOnlineLessons
          onNext={() => setActiveScreenId('langvi-quiz-done')}
          onClose={() => setActiveScreenId('langvi-profile')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
  ];

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
      title: 'Tuco 01: Onboarding Splash',
      subtitle: 'Splash & Cloud Mascot Welcome',
      render: (
        <ScreenOnboardingSplash
          onNext={() => setActiveScreenId('wireframe-name')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-name',
      title: 'Tuco 02: Child Name Input',
      subtitle: 'Onboarding Name Input & Keypad',
      render: (
        <ScreenOnboardingName
          name={childName}
          onChangeName={(n) => setChildName(n)}
          onNext={() => setActiveScreenId('wireframe-age')}
          onBack={() => setActiveScreenId('wireframe-splash')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-age',
      title: 'Tuco 03: Age & Buddy Carousel (Ref 568)',
      subtitle: 'Age Carousel 7-8-9 & Buddy Illustration',
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
      title: 'Tuco 04: Interests & Goals (Ref 570)',
      subtitle: 'Care Goals Multiselect 2×3 Grid',
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
      title: 'Tuco 05: Routine Born Pathway (Ref 571)',
      subtitle: 'Congrats Diagnostic Reveal & Action Matrix',
      render: (
        <ScreenOnboardingTransition
          childName={childName}
          age={childAge}
          selectedGoals={selectedGoals}
          onFinishOnboarding={() => setActiveScreenId('wireframe-homepage')}
          onBack={() => setActiveScreenId('wireframe-goals')}
          isWireframe={visualStyle === 'wireframe'}
        />
      ),
    },
    {
      id: 'wireframe-homepage',
      title: 'Tuco 06: Homepage Two Scrolls (Ref 574)',
      subtitle: 'Search, Cart, Concerns, Banner, Categories',
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
      title: 'Tuco 07: Streak & Calendar (Ref 571/575)',
      subtitle: 'Mascot + Actions & 31-Day Calendar',
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
    activeScreenSet === 'langvi_spec'
      ? langviScreens
      : activeScreenSet === 'aptivo_spec'
      ? aptivoScreens
      : activeScreenSet === 'wireframe_spec'
      ? wireframeSpecScreens
      : [...langviScreens, ...aptivoScreens, ...wireframeSpecScreens, ...ecosystemScreens];

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#1E1E22] text-stone-100 font-['Poppins'] select-none">
      {/* Studio Header Bar */}
      <header className="h-14 border-b border-stone-800 bg-[#161619] px-5 flex items-center justify-between shrink-0 z-40">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6147F6]" />
            <span className="font-['Caveat'] text-2xl font-black text-[#6147F6] tracking-wide">
              langvi & app screens
            </span>
            <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300">
              32 Screens Board • Ready for Figma
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
                  ? 'bg-stone-800 text-[#6147F6] font-bold shadow-xs'
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
                  ? 'bg-[#6147F6] text-white font-bold shadow-xs'
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
                  ? 'bg-stone-800 text-[#6147F6] font-bold shadow-xs'
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
                setActiveScreenSet('langvi_spec');
                setActiveScreenId('langvi-quiz-done');
              }}
              className={`px-3 py-1 rounded-lg font-['Poppins'] transition-all ${
                activeScreenSet === 'langvi_spec'
                  ? 'bg-[#6147F6] text-white font-bold shadow-2xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              ★ Image 571 Langvi (10)
            </button>
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
              Image 570 (9)
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
              Tuco Wireframes (7)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveScreenSet('all_ecosystem');
                setActiveScreenId('langvi-quiz-done');
              }}
              className={`px-3 py-1 rounded-lg font-['Poppins'] transition-all ${
                activeScreenSet === 'all_ecosystem'
                  ? 'bg-stone-700 text-stone-100 font-bold shadow-2xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All (32)
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
              onClick={() => setCanvasZoom(0.4)}
              className="text-[11px] font-['Poppins'] px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              Fit All (40%)
            </button>

            <button
              type="button"
              onClick={() => setCanvasZoom(0.6)}
              className="text-[11px] font-['Poppins'] px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              60%
            </button>

            <button
              type="button"
              onClick={() => setCanvasZoom(1)}
              className="text-[11px] font-['Poppins'] px-2 py-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800"
            >
              100% (1:1)
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
            {/* CANVAS BOARD: Displaying All Screens by default */}
            {activeScreenSet === 'all_ecosystem' ? (
              <div
                className="inline-flex flex-col gap-16 pb-36 transition-transform duration-200"
                style={{
                  transform: `scale(${canvasZoom})`,
                  transformOrigin: 'top left',
                }}
              >
                {/* SECTION 01: Langvi Mascot Learning Flow (Image 571 — 10 Artboards in 5x2 Grid) */}
                <div className="p-8 rounded-3xl bg-[#18181C]/90 border border-stone-800 shadow-2xl flex flex-col gap-8">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-[#6147F6]/20 text-[#6147F6] font-bold text-xs uppercase tracking-wider">
                        Section 01 • Image 571
                      </span>
                      <div>
                        <h2 className="text-base font-bold text-stone-100 font-['Poppins']">
                          Langvi Mascot Mobile Screens Flow (Recreated from image 571.png)
                        </h2>
                        <p className="text-xs text-stone-400 font-['Poppins']">
                          10 Screens (5×2 Grid): Create Account, Congrats Quiz Done, Study Calendar, Interactive Quiz, Pricing Plans, Quiz Mastery 97%, Peeking Login, 15-Min Milestone, Jacob Profile, Online Lessons
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-stone-300">
                      10 Artboards • 393 × 852 px
                    </span>
                  </div>

                  {/* Row 1: Screens 1 to 5 */}
                  <div className="inline-flex items-start gap-10">
                    {langviScreens.slice(0, 5).map((screen) => (
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

                  {/* Row 2: Screens 6 to 10 */}
                  <div className="inline-flex items-start gap-10">
                    {langviScreens.slice(5, 10).map((screen) => (
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
                </div>

                {/* SECTION 2: Aptivo Flow (Image 570 — 9 Artboards) */}
                <div className="p-8 rounded-3xl bg-[#18181C]/90 border border-stone-800 shadow-2xl flex flex-col gap-8">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-[#F06553]/20 text-[#F06553] font-bold text-xs uppercase tracking-wider">
                        Section 02 • Image 570
                      </span>
                      <div>
                        <h2 className="text-base font-bold text-stone-100 font-['Poppins']">
                          Aptivo Mobile Screens Flow (Recreated from image 570.png)
                        </h2>
                        <p className="text-xs text-stone-400 font-['Poppins']">
                          9 Screens: Mascot Splash, Peeking Mascot, Name Input, Goals 2x3, Home Lessons, Courses 3x3, Course Detail, Progress, and Profile
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-stone-300">
                      9 Artboards • 393 × 852 px
                    </span>
                  </div>

                  {/* Row 1: Screens 1 to 4 */}
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

                  {/* Row 2: Screens 5 to 8 */}
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

                      {/* Cute annotation sticker like in Image 570.png */}
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

                {/* SECTION 2: Tuco Kids Spec Wireframes (Images 568, 571, 574, 575, 576) */}
                <div className="p-8 rounded-3xl bg-[#18181C]/90 border border-stone-800 shadow-2xl flex flex-col gap-8">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-[#FED543]/20 text-[#FED543] font-bold text-xs uppercase tracking-wider">
                        Section 02
                      </span>
                      <div>
                        <h2 className="text-base font-bold text-stone-100 font-['Poppins']">
                          Tuco Kids Core Wireframes & Daily Habit Flow
                        </h2>
                        <p className="text-xs text-stone-400 font-['Poppins']">
                          7 Screens: Splash, Child Name, Age Carousel (Ref 568), Interests/Goals, Routine Born, Two-Scrolls Homepage (Ref 574), Mascot Streak Page (Ref 571 & 575)
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-stone-300">
                      7 Artboards • 393 × 852 px
                    </span>
                  </div>

                  <div className="inline-flex items-start gap-10 overflow-x-auto pb-4">
                    {wireframeSpecScreens.map((screen) => (
                      <div key={screen.id} className="relative flex items-center shrink-0">
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
                </div>

                {/* SECTION 3: Store & Care Ecosystem */}
                <div className="p-8 rounded-3xl bg-[#18181C]/90 border border-stone-800 shadow-2xl flex flex-col gap-8">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-sky-500/20 text-sky-400 font-bold text-xs uppercase tracking-wider">
                        Section 03
                      </span>
                      <div>
                        <h2 className="text-base font-bold text-stone-100 font-['Poppins']">
                          Tuco Kids Store Catalog & Community Screens
                        </h2>
                        <p className="text-xs text-stone-400 font-['Poppins']">
                          6 Screens: Product Catalog, Product Detail Page (PDP), Custom Trio Box, Bag & Checkout, Clean Lab, Doctor Reviews
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-stone-300">
                      6 Artboards • 393 × 852 px
                    </span>
                  </div>

                  <div className="inline-flex items-start gap-10 overflow-x-auto pb-4">
                    {ecosystemScreens.map((screen) => (
                      <div key={screen.id} className="relative flex items-center shrink-0">
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
                </div>
              </div>
            ) : activeScreenSet === 'langvi_spec' ? (
              <div
                className="inline-flex flex-col gap-12 pb-32 transition-transform duration-200"
                style={{
                  transform: `scale(${canvasZoom})`,
                  transformOrigin: 'top left',
                }}
              >
                {/* 5x2 Grid matching Image 571.png */}
                <div className="p-8 rounded-3xl bg-[#18181C]/90 border border-stone-800 shadow-2xl flex flex-col gap-8">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-[#6147F6]/20 text-[#6147F6] font-bold text-xs uppercase tracking-wider">
                        Image 571 Reference Suite
                      </span>
                      <div>
                        <h2 className="text-base font-bold text-stone-100 font-['Poppins']">
                          Langvi 10 Screens Board (Exact 5×2 Artboard Layout)
                        </h2>
                        <p className="text-xs text-stone-400 font-['Poppins']">
                          Row 1: Create Account, Congrats Quiz Done, Study Calendar, Interactive Quiz, Pricing Plans | Row 2: Quiz Mastery, Peeking Login, 15-Min Milestone, Jacob Profile, Online Lessons
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-stone-300">
                      10 Artboards • 393 × 852 px
                    </span>
                  </div>

                  {/* Row 1: First 5 screens */}
                  <div className="inline-flex items-start gap-10">
                    {langviScreens.slice(0, 5).map((screen) => (
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

                  {/* Row 2: Second 5 screens */}
                  <div className="inline-flex items-start gap-10">
                    {langviScreens.slice(5, 10).map((screen) => (
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
                </div>
              </div>
            ) : activeScreenSet === 'aptivo_spec' && boardLayout === 'grid' ? (
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
            <div className="w-full bg-[#1A1A1E] border-b border-stone-800/80 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0 z-20">
              {/* Prev Button + Suite Quick Switcher */}
              <div className="flex items-center gap-2">
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
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {/* Inline Suite Switcher for fast focus */}
                <div className="flex items-center p-0.5 bg-stone-900 border border-stone-800 rounded-xl text-[11px]">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveScreenSet('langvi_spec');
                      setActiveScreenId('langvi-quiz-done');
                    }}
                    className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                      activeScreenSet === 'langvi_spec'
                        ? 'bg-[#6147F6] text-white font-bold shadow-xs'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    ★ Langvi (10)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveScreenSet('aptivo_spec');
                      setActiveScreenId('aptivo-splash-1');
                    }}
                    className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                      activeScreenSet === 'aptivo_spec'
                        ? 'bg-[#F06553] text-white font-bold shadow-xs'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    Image 570 (9)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveScreenSet('wireframe_spec');
                      setActiveScreenId('wireframe-age');
                    }}
                    className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                      activeScreenSet === 'wireframe_spec'
                        ? 'bg-[#FED543] text-[#271700] font-bold shadow-xs'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    Tuco (7)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveScreenSet('all_ecosystem');
                      setActiveScreenId('langvi-quiz-done');
                    }}
                    className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                      activeScreenSet === 'all_ecosystem'
                        ? 'bg-stone-700 text-white font-bold shadow-xs'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    All (32)
                  </button>
                </div>
              </div>

              {/* Scrollable Screen Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar px-2 max-w-2xl">
                {currentScreens.map((s, idx) => {
                  const isActive = activeScreenId === s.id;
                  const shortName = s.title.includes(': ') ? s.title.split(': ')[1] : s.title;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveScreenId(s.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-['Poppins'] shrink-0 transition-all ${
                        isActive
                          ? s.id.startsWith('langvi-')
                            ? 'bg-[#6147F6] text-white font-bold shadow-md ring-2 ring-[#6147F6]/40 scale-102'
                            : s.id.startsWith('wireframe-')
                            ? 'bg-[#FED543] text-[#271700] font-bold shadow-md ring-2 ring-[#FED543]/40 scale-102'
                            : 'bg-[#F06553] text-white font-bold shadow-md ring-2 ring-[#F06553]/30 scale-102'
                          : 'bg-stone-900/90 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-stone-800/80'
                      }`}
                    >
                      <span className="font-mono text-[10px] opacity-80">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate max-w-[130px] font-medium">{shortName}</span>
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
                <span className="hidden sm:inline">Next</span>
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
                const isLangvi = currentScreen.id.startsWith('langvi-');
                const isTuco = currentScreen.id.startsWith('wireframe-');
                const isAptivo = currentScreen.id.startsWith('aptivo-');

                const colorTokens = isLangvi
                  ? [
                      { name: 'Royal Violet (Brand)', hex: '#5B42F3', bg: '#5B42F3' },
                      { name: 'Lime Action (CTA)', hex: '#D2F843', bg: '#D2F843', textDark: true },
                      { name: 'Sun Yellow Blob', hex: '#FEE55A', bg: '#FEE55A', textDark: true },
                      { name: 'Sky Blue Mascot', hex: '#A7E8FC', bg: '#A7E8FC', textDark: true },
                      { name: 'Pastel Pink Blob', hex: '#FBCFE8', bg: '#FBCFE8', textDark: true },
                      { name: 'Dark Indigo Slate', hex: '#231C78', bg: '#231C78' },
                      { name: 'Clean Lavender', hex: '#F5F4F9', bg: '#F5F4F9', textDark: true },
                      { name: 'Pure White Card', hex: '#FFFFFF', bg: '#FFFFFF', textDark: true },
                    ]
                  : isTuco
                  ? [
                      { name: 'Sunbeam Gold', hex: '#FED543', bg: '#FED543' },
                      { name: 'Warm Coral (568)', hex: '#F05438', bg: '#F05438' },
                      { name: 'Navy Black CTA', hex: '#1C2030', bg: '#1C2030' },
                      { name: 'Sky Defense', hex: '#38B6FF', bg: '#38B6FF' },
                      { name: 'Berry Pink Hair', hex: '#EC4899', bg: '#EC4899' },
                      { name: 'Toxin-Free Green', hex: '#10B981', bg: '#10B981' },
                      { name: 'Streak Flame', hex: '#F97316', bg: '#F97316' },
                      { name: 'Oat Canvas', hex: '#FAF8F5', bg: '#FAF8F5', textDark: true },
                    ]
                  : [
                      { name: 'Coral Brand', hex: '#F06553', bg: '#F06553' },
                      { name: 'Cream Canvas', hex: '#FAF5EF', bg: '#FAF5EF', textDark: true },
                      { name: 'Art Lilac', hex: '#98A2F8', bg: '#98A2F8' },
                      { name: 'Mint Logic', hex: '#40CDB0', bg: '#40CDB0' },
                      { name: 'Azure Math', hex: '#5B9DF8', bg: '#5B9DF8' },
                      { name: 'Rose Music', hex: '#E56598', bg: '#E56598' },
                    ];

                const componentSpecs = isLangvi
                  ? currentScreen.id === 'langvi-create-account'
                    ? '• Top peeking purple mascot\n• 4 Rounded social auth buttons (Facebook, Google, Apple, Email)\n• Log in footer navigation'
                    : currentScreen.id === 'langvi-quiz-done'
                    ? '• Royal purple backdrop (#5B42F3) with white close icon\n• Yellow mascot with open smile & 4 diagonal cartoon Zs\n• 2 white diamond sparkles on left\n• Headline: Congrats! The quiz is done\n• 3 action cards: Home (yellow), Rating (pink), Share (blue)'
                    : currentScreen.id === 'langvi-calendar'
                    ? '• Study calendar header with close & next arrows\n• Mon-Sun 7-column header\n• 35-day grid with mascot face cells (glasses, smiles, blue streaks)\n• Monthly progress card with pink peeking mascot\n• 3 stats cards: Activity, Discipline, Energy'
                    : currentScreen.id === 'langvi-quiz'
                    ? '• Script langvi logo in purple & heart lives badge\n• Yellow standing mascot pointing with idea lightbulb\n• 89% lime green progress bar\n• Sentence fill-in-the-blank question card\n• Option pills & lime green CONTINUE button'
                    : currentScreen.id === 'langvi-pricing'
                    ? '• Deep indigo backdrop (#231C78)\n• Heading: We help you love learning\n• Teenagers $79 lime card & Kids $57 cyan card\n• Adults $99 card\n• Plan selection CTA'
                    : currentScreen.id === 'langvi-mastery'
                    ? '• Final Question counter & 5-lives heart pill\n• Mascot celebration with floating pink hearts\n• 97% lime progress bar\n• Sentence matching verbs pills\n• Lime green CONTINUE button'
                    : currentScreen.id === 'langvi-peeking-login'
                    ? '• Royal violet top backdrop (#5B42F3)\n• Giant yellow mascot head peeking down with serene eyes\n• Rounded white bottom sheet\n• Email pill input & royal purple Login button\n• Sign Up footer link'
                    : currentScreen.id === 'langvi-milestone'
                    ? '• Midnight purple backdrop (#291B86)\n• Large bold "15" number\n• Speech bubble: You studied for 15 minutes!\n• Light blue mascot blowing heart kisses\n• Sound equalizer audio waves bars'
                    : currentScreen.id === 'langvi-profile'
                    ? '• Jacob circular avatar with yellow glasses mascot\n• Dual tasks cards: Monthly (purple blob) & Daily (pink blob)\n• Progress section with Speak, Listen, Mistakes, Level bars'
                    : currentScreen.id === 'langvi-online-lessons'
                    ? '• Yellow mascot pointing right toward media lessons\n• "Interactive online lessons" headline\n• Sample lesson audio/video pill with play button\n• 24 Lessons exploration CTA'
                    : currentScreen.subtitle
                  : isTuco
                  ? currentScreen.id === 'wireframe-splash'
                    ? '• Waving cloud mascot hero\n• 100% Kid Safe & Age 3-15 badges\n• Brand typography & 30-sec routine tagline\n• High-contrast navy action CTA pill'
                    : currentScreen.id === 'wireframe-name'
                    ? "• Step 1 of 4 counter badge\n• Personalized input field with clear button\n• Quick pick name chips (Omar, Maya, Aria)\n• Character waving illustration\n• Optional iOS keypad simulation"
                    : currentScreen.id === 'wireframe-age'
                    ? '• Step 2 of 4 header with back button\n• Warm Coral #F05438 card container\n• Horizontal age carousel (3-16) with active bubble\n• Vector buddy illustration (child + companion)\n• Dark navy solid Continue pill'
                    : currentScreen.id === 'wireframe-goals'
                    ? '• Step 3 of 4 header with back arrow\n• 2×3 pastel multiselect goal cards\n• Category icons: Sun, Hair, Face, Lip, Deo, Safe\n• Active checkmark badge and selection ring\n• Dynamic bottom CTA with counter'
                    : currentScreen.id === 'wireframe-transition'
                    ? '• Diagnostic Complete celebration badge\n• Mascot celebratory confetti pose\n• Action trio: Home, Star Rating, Share\n• Personalized formula card with verified checkmarks\n• Take Me to My Products primary CTA'
                    : currentScreen.id === 'wireframe-homepage'
                    ? '• Search input + Wishlist & Cart counter badges\n• Personalized good morning greeting\n• 6 horizontal concern chips\n• Cyan gradient promotional banner with cutout\n• 5 category icon tiles & routine carousel'
                    : currentScreen.id === 'wireframe-streak'
                    ? '• Streak flame counter header\n• Yellow gradient mascot action hero card\n• 31-day mascot calendar grid with facial emojis\n• Daily routine checklist with checkbox pills\n• Habit milestone trophy achievements'
                    : currentScreen.subtitle
                  : currentScreen.subtitle;

                return (
                  <div className="hidden xl:flex flex-col gap-4 bg-stone-900/95 border border-stone-800 p-5 rounded-3xl w-80 shadow-2xl text-xs font-['Poppins'] shrink-0 max-h-[82vh] overflow-y-auto hide-scrollbar">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                      <div>
                        <span
                          className={`text-[10px] font-bold tracking-widest uppercase block ${
                            isLangvi
                              ? 'text-[#6147F6]'
                              : isTuco
                              ? 'text-[#FED543]'
                              : 'text-[#F06553]'
                          }`}
                        >
                          Figma Artboard Specs
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

                    {/* Component Architecture */}
                    <div className="space-y-1">
                      <span className="text-[11px] text-stone-400 font-medium">Figma Layers / Components:</span>
                      <pre className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-stone-300 text-[10.5px] font-sans leading-relaxed whitespace-pre-line">
                        {componentSpecs}
                      </pre>
                    </div>

                    {/* Color Tokens Palette with click-to-copy */}
                    <div className="space-y-2">
                      <span className="text-[11px] text-stone-400 font-medium">Color Tokens (Click to Copy):</span>
                      <div className="grid grid-cols-2 gap-2">
                        {colorTokens.map((c) => (
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
                          <span className="font-bold text-stone-200">Poppins Bold 16-32px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400">Labels / Pills:</span>
                          <span className="font-semibold text-stone-200">Poppins SemiBold 11-12px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400">Body & Meta:</span>
                          <span className="text-stone-400">Poppins Regular 9-11px</span>
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
                        className={`w-full py-2 px-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all ${
                          isTuco
                            ? 'bg-[#FED543]/20 hover:bg-[#FED543]/30 text-[#FED543]'
                            : 'bg-[#F06553]/20 hover:bg-[#F06553]/30 text-[#F06553]'
                        }`}
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
