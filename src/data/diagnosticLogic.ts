import { DiagnosticAnswers, GeneratedRoutine, IngredientCard, CBIMission, RoutineItem } from '../types';

export const INITIAL_DIAGNOSTIC_ANSWERS: DiagnosticAnswers = {
  startFocus: 'skin',
  hairScalpFeel: 'dry-flaky',
  hairNextDay: 'frizzy-tangled',
  skinBathFeel: 'tight-dry',
  skinDullSun: 'sometimes',
  seasonCity: 'Bangalore · Winter',
  concerns: ['Dry skin', 'Tangles'],
};

// Routine Products Catalog
export const CATALOG_ROUTINE_ITEMS: Record<string, RoutineItem> = {
  faceWash: {
    id: 'tuco-face-wash',
    name: 'Tan-Off Gentle Face Wash',
    category: 'Face Care',
    price: 399,
    originalPrice: 475,
    illustration: 'facewash',
    imageBg: '#FED7AA',
    whyLine: 'Lifts playground grime and outdoor dust without stripping delicate lipid barrier.',
    instruction: '1 pump on damp face, rinse with lukewarm water',
  },
  glowCream: {
    id: 'tuco-glow-cream',
    name: 'Everyday Glow Barrier Cream',
    category: 'Face Care',
    price: 499,
    originalPrice: 599,
    illustration: 'lotion',
    imageBg: '#E0F2FE',
    whyLine: 'Oat lipids and ceramides lock in 24h moisture against winter dryness.',
    instruction: 'Dot gently on cheeks, forehead and chin',
  },
  sunStick: {
    id: 'tuco-sun-stick',
    name: 'Super Sun Stick SPF 50',
    category: 'Sun Care',
    price: 499,
    originalPrice: 599,
    illustration: 'sunstick',
    imageBg: '#FEF3C7',
    whyLine: 'Mineral zinc shield; water and sweat resistant for 80 minutes of outdoor games.',
    instruction: 'Glide evenly across nose, ears and forehead before leaving home',
  },
  nightLipButter: {
    id: 'tuco-lip-butter',
    name: 'Safe Beetroot Lip Butter',
    category: 'Lip & Glow',
    price: 249,
    originalPrice: 299,
    illustration: 'lipbalm',
    imageBg: '#FFE4E6',
    whyLine: '100% edible-grade cocoa butter heals chapped lips overnight.',
    instruction: 'Swipe before bedtime story',
  },
  hairDetangler: {
    id: 'tuco-detangler',
    name: 'Tangle-Free Hair Serum',
    category: 'Hair Care',
    price: 449,
    originalPrice: 525,
    illustration: 'detangler',
    imageBg: '#FCE7F3',
    whyLine: 'Strawberry & argan mist unknots morning bedhead in seconds without tears.',
    instruction: '2 spritzes on damp or dry hair before school comb',
  },
  champiOil: {
    id: 'tuco-champi-oil',
    name: 'Nourishing Champi Hair Oil',
    category: 'Hair Care',
    price: 399,
    originalPrice: 480,
    illustration: 'lotion',
    imageBg: '#FEF08A',
    whyLine: 'Cold-pressed coconut, almond & hibiscus for Sunday mother-child bonding.',
    instruction: 'Warm 5 drops between palms and massage gently into scalp',
  },
  deoStick: {
    id: 'tuco-deo-dot',
    name: 'No-Sweat Deo Dot',
    category: 'Bath & Body',
    price: 379,
    originalPrice: 450,
    illustration: 'deo',
    imageBg: '#CFFAFE',
    whyLine: 'Aluminium-free citrus freshness for active sports and school days.',
    instruction: 'Swipe under arms after morning bath',
  },
};

// Generates personal routine based on child answers
export function generateRoutineFromAnswers(
  childName: string,
  answers: DiagnosticAnswers
): GeneratedRoutine {
  const isWinter = answers.seasonCity.toLowerCase().includes('winter');
  const hasDrySkin = answers.skinBathFeel === 'tight-dry' || answers.concerns.includes('Dry skin');
  const hasTangles = answers.hairNextDay === 'frizzy-tangled' || answers.concerns.includes('Tangles');

  // Morning Products
  const morning: RoutineItem[] = [
    {
      ...CATALOG_ROUTINE_ITEMS.glowCream,
      whyLine: hasDrySkin
        ? `Extra barrier nourishment for ${childName}'s delicate winter skin.`
        : `Daily plant ceramide shield before school.`,
    },
    {
      ...CATALOG_ROUTINE_ITEMS.sunStick,
      whyLine: `Zero white cast SPF 50 shield for playground playtime.`,
    },
  ];

  // If tangles were noted, suggest detangler as part of morning prep
  if (hasTangles) {
    morning.push({
      ...CATALOG_ROUTINE_ITEMS.hairDetangler,
      whyLine: `Tear-free berry mist so morning combing is quick and painless.`,
    });
  }

  // Evening Products
  const evening: RoutineItem[] = [
    {
      ...CATALOG_ROUTINE_ITEMS.faceWash,
      whyLine: `Lifts playground grime and pollution before bedtime.`,
    },
    {
      ...CATALOG_ROUTINE_ITEMS.nightLipButter,
      whyLine: `100% edible natural tint that nourishes lips overnight.`,
    },
  ];

  return {
    seasonTitle: `${childName}'s ${isWinter ? 'Winter' : 'Summer'} Routine 🌿`,
    morning,
    evening,
    weekly: {
      title: 'Champi Scalp Ritual',
      subtitle: 'Once a week on Sunday',
      frequency: 'Once a week',
      instruction: 'Warm a few drops in mum’s hands. Gentle circular scalp massage for 10 minutes.',
      product: CATALOG_ROUTINE_ITEMS.champiOil,
    },
  };
}

// Initial 8 Ingredient Cards
export const INITIAL_INGREDIENT_CARDS: IngredientCard[] = [
  {
    id: 'turmeric',
    name: 'Turmeric (Haldi)',
    funName: 'The Golden One',
    fact: 'Used on skin for over 4,000 years to naturally calm redness and brighten.',
    routineUsage: "Inside Ishaan's Tan-Off Face Wash",
    isUnlocked: true,
    unlockCriteria: 'Unlocked by finishing the Diagnostic Quiz!',
    accentColor: '#F59E0B',
    emoji: '✨',
  },
  {
    id: 'kakadu-plum',
    name: 'Kakadu Plum',
    funName: 'The Super Shield',
    fact: 'Contains 100x more Vitamin C than oranges! Gives natural antioxidant sun defense.',
    routineUsage: "Inside Ishaan's Super Sun Stick SPF 50",
    isUnlocked: true,
    unlockCriteria: 'Unlocked by finishing the Diagnostic Quiz!',
    accentColor: '#10B981',
    emoji: '🍈',
  },
  {
    id: 'oat-lipids',
    name: 'Colloidal Oat',
    funName: 'The Cloud Blanket',
    fact: 'Doctors call it the skin microbiome best friend. Soothes tight winter dryness.',
    routineUsage: "Inside Ishaan's Glow Barrier Cream",
    isUnlocked: true,
    unlockCriteria: 'Unlocked by finishing the Diagnostic Quiz!',
    accentColor: '#38BDF8',
    emoji: '🌾',
  },
  {
    id: 'beetroot',
    name: 'Natural Beetroot',
    funName: 'The Ruby Kiss',
    fact: '100% edible food pigment that naturally keeps lips soft without chemicals or lead.',
    routineUsage: "Inside Ishaan's Safe Lip Butter",
    isUnlocked: false,
    unlockCriteria: 'Unlocks on Day 3 check-in streak!',
    accentColor: '#EC4899',
    emoji: '🍓',
  },
  {
    id: 'cold-pressed-argan',
    name: 'Pure Argan Oil',
    funName: 'The Knot Whisperer',
    fact: 'Harvested from Moroccan trees to make hair silky without stinging eyes.',
    routineUsage: "Inside Ishaan's Tangle-Free Spray",
    isUnlocked: false,
    unlockCriteria: 'Unlocks on Day 7 check-in streak!',
    accentColor: '#8B5CF6',
    emoji: '🌰',
  },
  {
    id: 'aloe-vera',
    name: 'Fresh Aloe Juice',
    funName: 'The Cool Breeze',
    fact: 'Over 99% pure botanical water that instantly cools hot skin after playground games.',
    routineUsage: 'Inside Foaming Body Wash & Gel',
    isUnlocked: false,
    unlockCriteria: 'Scan QR code on your Tuco delivery box',
    accentColor: '#14B8A6',
    emoji: '🌱',
  },
  {
    id: 'saffron',
    name: 'Kashmiri Kesar',
    funName: 'The Royal Thread',
    fact: 'It takes 75,000 flowers to make just one pound of saffron! Natural glow enhancer.',
    routineUsage: 'Special Festive Diwali Card',
    isUnlocked: false,
    unlockCriteria: 'Diwali Seasonal card (Unlocks in October)',
    accentColor: '#F97316',
    emoji: '🌸',
  },
  {
    id: 'zinc-oxide',
    name: 'Pure Mineral Zinc',
    funName: 'The White Knight',
    fact: 'Reflects harmful UV rays away like tiny invisible mirrors. Won’t absorb into bloodstream.',
    routineUsage: "Inside Ishaan's Mineral Sunscreen",
    isUnlocked: false,
    unlockCriteria: 'Unlocks when you tap "Did evening routine" 5 times',
    accentColor: '#6366F1',
    emoji: '🛡️',
  },
];

// Rotating CBI missions
export const CBI_MISSIONS: CBIMission[] = [
  {
    id: 'cbi-week-1',
    weekNumber: 1,
    title: 'Bottle Detective Mission 🔍',
    prompt: 'Find the word "Sulphate-Free" or "Natural" on your Tuco bottle together.',
    rewardFact: 'Tuco products are formulated with 0% SLS and 0% Parabens!',
    isDone: false,
  },
  {
    id: 'cbi-week-2',
    weekNumber: 2,
    title: 'The Sunday Champi Ritual 💆',
    prompt: 'Do a warm 5-minute scalp massage with mum or dad before hair wash.',
    rewardFact: 'Champi stimulates blood circulation and makes hair roots strong.',
    isDone: false,
  },
  {
    id: 'cbi-week-3',
    weekNumber: 3,
    title: 'Sun Shield Detective ☀️',
    prompt: 'Find the SPF 50 mark on your stick before heading out for sports.',
    rewardFact: 'Mineral sunscreen protects skin immediately without a 20-minute wait.',
    isDone: false,
  },
];
