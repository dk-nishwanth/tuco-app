export type ScreenId = 
  | 'screen-0-trail'
  | 'screen-1-splash'
  | 'screen-2-name'
  | 'screen-3-age'
  | 'screen-4-concern'
  | 'screen-5-home'
  | 'screen-6-routine';


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

export type ViewMode = 'canvas' | 'simulator' | 'split';
export type VisualStyle = 'hifi' | 'wireframe';
