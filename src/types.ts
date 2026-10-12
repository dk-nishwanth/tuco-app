export type AppScreenId =
  // Onboarding (4 screens)
  | 'onboarding-1-welcome'
  | 'onboarding-2-profile'
  | 'onboarding-3-greeting'
  | 'onboarding-4-how-it-works'
  // Diagnostic (8 screens)
  | 'diag-q1-focus'
  | 'diag-q2-scalp'
  | 'diag-q3-hair-day'
  | 'diag-q4-skin-bath'
  | 'diag-q5-skin-dull'
  | 'diag-q6-season'
  | 'diag-q7-concerns'
  | 'diag-q8-loading'
  // Core Post-Diagnostic Screens
  | 'screen-my-routine'
  | 'screen-home'
  | 'screen-ingredient-collection'
  | 'screen-teens-mode';

export type ScreenId = AppScreenId;

export type UserType = 'child' | 'teen';

export type ChildAgeGroup = '3-5 years old' | '6-9 years old' | '10-12 years old' | '13-15 years old';

export type ChildConcern =
  | 'dull & tanned skin'
  | 'tangled & frizzy hair'
  | 'safe makeup'
  | 'looking for gifts?'
  | 'active & sweaty odor';

export interface QuizState {
  childName: string;
  ageGroup: ChildAgeGroup;
  concern: ChildConcern;
  skinType?: 'normal' | 'sensitive' | 'dry' | 'sweat-prone';
}

export interface ChildProfile {
  name: string;
  age: number;
  seasonCity: string;
}

export interface DiagnosticAnswers {
  startFocus: 'hair' | 'skin';
  hairScalpFeel: 'dry-flaky' | 'fine' | 'itchy';
  hairNextDay: 'soft-bouncy' | 'frizzy-tangled' | 'oily-flat';
  skinBathFeel: 'tight-dry' | 'soft-fine' | 'itchy-rough';
  skinDullSun: 'yes' | 'sometimes' | 'never';
  seasonCity: string;
  concerns: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Sun Care' | 'Hair Care' | 'Face Care' | 'Bath & Body' | 'Lip & Glow';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  imageBg: string;
  illustration: 'sunstick' | 'facewash' | 'detangler' | 'deo' | 'lipbalm' | 'lotion' | 'bodywash';
  accentColor: string;
  suitableAge: string;
  naturalPercent: number;
  keyIngredients: string[];
  description: string;
  benefits: string[];
  safetyCertifications: string[];
  concernMatch: ChildConcern[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RoutineItem {
  id: string;
  name: string;
  category: 'Sun Care' | 'Hair Care' | 'Face Care' | 'Bath & Body' | 'Lip & Glow';
  price: number;
  originalPrice: number;
  illustration: 'sunstick' | 'facewash' | 'detangler' | 'deo' | 'lipbalm' | 'lotion' | 'bodywash';
  imageBg: string;
  whyLine: string;
  instruction: string;
}

export interface GeneratedRoutine {
  seasonTitle: string;
  morning: RoutineItem[];
  evening: RoutineItem[];
  weekly: {
    title: string;
    subtitle: string;
    frequency: string;
    instruction: string;
    product: RoutineItem;
  };
}

export interface IngredientCard {
  id: string;
  name: string;
  funName: string;
  fact: string;
  routineUsage: string;
  isUnlocked: boolean;
  unlockCriteria: string;
  accentColor: string;
  emoji: string;
}

export interface CBIMission {
  id: string;
  weekNumber: number;
  title: string;
  prompt: string;
  rewardFact: string;
  isDone: boolean;
}

export interface DailyCheckInState {
  hasAnsweredToday: boolean;
  didRoutine: boolean | null;
  streakDays: number;
  badgeHistory: string[];
}

export interface TeenDiagnosticAnswers {
  skinType: 'oily-t-zone' | 'dry-dehydrated' | 'reactive';
  acneConcern: 'blackheads' | 'breakouts' | 'post-sun marks';
  stressLevel: 'school-exams' | 'sports-sweat' | 'balanced';
  spfDaily: boolean;
}

export type ViewMode = 'canvas' | 'single' | 'simulator';
export type VisualStyle = 'hifi' | 'wireframe';
