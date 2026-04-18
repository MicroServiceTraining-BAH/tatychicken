export type MenuCategory = 'chicken' | 'combos' | 'sides' | 'drinks' | 'specials';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  popular?: boolean;
  spicy?: boolean;
};

export const menuItems: MenuItem[] = [
  // CHICKEN
  {
    id: 'whole-chicken',
    name: 'Whole Chicken',
    description: 'Seasoned and fried whole bird. Golden, juicy, and packed with flavor.',
    price: 'Market Price',
    category: 'chicken',
  },
  {
    id: 'half-chicken',
    name: 'Half Chicken',
    description: 'Half bird, crispy on the outside, juicy on the inside. Served hot.',
    price: '$9.99',
    category: 'chicken',
    popular: true,
  },
  {
    id: 'quarter-breast',
    name: 'Quarter Chicken (Breast)',
    description: 'Crispy golden breast quarter, the crowd favorite cut.',
    price: '$5.99',
    category: 'chicken',
  },
  {
    id: 'quarter-leg',
    name: 'Quarter Chicken (Leg & Thigh)',
    description: 'Tender, flavorful leg and thigh quarter with signature seasoning.',
    price: '$5.49',
    category: 'chicken',
  },
  {
    id: 'strip-meal',
    name: '3-Piece Strip Meal',
    description: 'Three golden chicken strips with your choice of one side and a drink.',
    price: '$9.49',
    category: 'chicken',
    popular: true,
  },
  {
    id: 'wing-combo',
    name: 'Wing Combo (6 pc)',
    description: 'Six crispy wings seasoned to perfection, served with one side.',
    price: '$10.99',
    category: 'chicken',
  },

  // COMBOS
  {
    id: 'classic-combo',
    name: 'Classic Combo',
    description: '2 pieces of our signature fried chicken, crispy fries, and a drink.',
    price: '$8.99',
    category: 'combos',
    popular: true,
  },
  {
    id: 'big-combo',
    name: 'Big Combo',
    description: '3 pieces of chicken, two sides of your choice, and a drink.',
    price: '$12.99',
    category: 'combos',
  },
  {
    id: 'family-feast',
    name: 'Family Feast',
    description: '8 pieces of chicken, 2 large sides, and 4 drinks. Feed the whole family.',
    price: '$34.99',
    category: 'combos',
    popular: true,
  },
  {
    id: 'latin-spicy-box',
    name: 'Latin Spicy Box',
    description: 'Spicy marinated chicken, Latin-style rice & beans, and sweet fried plantains.',
    price: '$11.99',
    category: 'combos',
    popular: true,
    spicy: true,
  },

  // SIDES
  {
    id: 'fries',
    name: 'French Fries',
    description: 'Golden, crispy fries. Seasoned and perfectly salted.',
    price: '$2.49',
    category: 'sides',
    popular: true,
  },
  {
    id: 'rice-beans',
    name: 'Rice & Beans',
    description: 'Authentic Latin-style rice and beans, a true comfort classic.',
    price: '$2.99',
    category: 'sides',
  },
  {
    id: 'mac-cheese',
    name: 'Macaroni & Cheese',
    description: 'Creamy, rich mac & cheese made in-house. Kids love it.',
    price: '$2.99',
    category: 'sides',
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    description: 'Cool, creamy coleslaw. The perfect balance to crispy chicken.',
    price: '$1.99',
    category: 'sides',
  },
  {
    id: 'plantains',
    name: 'Fried Plantains',
    description: "Sweet and crispy maduros, a Latin staple you can't skip.",
    price: '$2.99',
    category: 'sides',
    popular: true,
  },
  {
    id: 'corn',
    name: 'Corn on the Cob',
    description: 'Buttered corn on the cob. Simple, sweet, and satisfying.',
    price: '$1.49',
    category: 'sides',
  },

  // DRINKS
  {
    id: 'soda',
    name: 'Soda (Can)',
    description: 'Coke, Sprite, or your choice of canned soda.',
    price: '$1.25',
    category: 'drinks',
  },
  {
    id: 'water',
    name: 'Bottled Water',
    description: 'Cold, refreshing bottled water.',
    price: '$1.00',
    category: 'drinks',
  },
  {
    id: 'lemonade',
    name: 'Fresh Lemonade',
    description: 'Freshly squeezed lemonade. Sweet, tart, and ice cold.',
    price: '$2.99',
    category: 'drinks',
    popular: true,
  },
  {
    id: 'agua-fresca',
    name: 'Agua Fresca',
    description: "House-made agua fresca. Ask about today's flavor.",
    price: '$2.99',
    category: 'drinks',
  },

  // SPECIALS
  {
    id: 'daily-special',
    name: 'Daily Special',
    description: 'Ask about our rotating daily deals. Always fresh, always a great value.',
    price: 'Market Price',
    category: 'specials',
  },
  {
    id: 'catering',
    name: 'Catering Packages',
    description: 'Feed your event right. Custom packages available for any size group. Call to plan.',
    price: 'Call for Pricing',
    category: 'specials',
  },
];

export const categories: { id: MenuCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Items' },
  { id: 'chicken', label: 'Chicken' },
  { id: 'combos', label: 'Combos' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'specials', label: 'Specials' },
];

export const featuredItems = menuItems.filter((item) => item.popular).slice(0, 4);
