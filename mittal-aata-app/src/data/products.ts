import type { Product } from '../types';

const kgPresets = (sizes: number[]) =>
  sizes.map((v) => ({ value: v, unit: 'kg' as const }));

const gPresets = (sizes: number[]) =>
  sizes.map((v) => ({ value: v, unit: 'g' as const }));

const LPresets = (sizes: number[]) =>
  sizes.map((v) => ({ value: v, unit: 'L' as const }));

export const products: Product[] = [
  // Fresh Atta — Mittal's core
  {
    id: 'mittal-gehun-atta-5',
    name: { en: 'Shudh Gehun Atta', hi: 'शुद्ध गेहूँ का आटा' },
    brand: 'mittal',
    categoryId: 'atta',
    price: 280,
    unit: 'kg',
    weight: '5 kg',
    image: '/images/products/atta-gehun.jpg',
    description: {
      en: 'Freshly stone-ground wheat flour, ground today. No preservatives.',
      hi: 'ताज़ा पिसा हुआ शुद्ध गेहूँ का आटा। बिना किसी परिरक्षक के।',
    },
    quantityPresets: kgPresets([1, 2, 5, 10]),
    tags: ['fresh', 'chakki', 'staple'],
    inStock: true,
    isFreshGround: true,
  },
  {
    id: 'mittal-multigrain-atta-5',
    name: { en: 'Multigrain Atta', hi: 'मल्टीग्रेन आटा' },
    brand: 'mittal',
    categoryId: 'atta',
    price: 320,
    unit: 'kg',
    weight: '5 kg',
    image: '/images/products/atta-multigrain.jpg',
    description: {
      en: 'Blend of wheat, ragi, jowar & barley — ground fresh daily.',
      hi: 'गेहूं, रागी, ज्वार और जौ का मिश्रण — रोज़ ताज़ा पिसा।',
    },
    quantityPresets: kgPresets([1, 2, 5]),
    tags: ['fresh', 'chakki', 'healthy'],
    inStock: true,
    isFreshGround: true,
  },
  {
    id: 'mittal-bajra-atta-2',
    name: { en: 'Bajra Atta', hi: 'बाजरे का आटा' },
    brand: 'mittal',
    categoryId: 'pahadi',
    price: 180,
    unit: 'kg',
    weight: '2 kg',
    image: '/images/products/atta-bajra.jpg',
    description: {
      en: 'Freshly ground pearl millet flour from Uttarakhand grains.',
      hi: 'उत्तराखंड के अनाज से ताज़ा पिसा बाजरा आटा।',
    },
    quantityPresets: kgPresets([1, 2, 5]),
    tags: ['fresh', 'pahadi'],
    inStock: true,
    isFreshGround: true,
  },
  {
    id: 'aashirvaad-atta-5',
    name: { en: 'Aashirvaad Atta', hi: 'आशीर्वाद आटा' },
    brand: 'aashirvaad',
    categoryId: 'atta',
    price: 260,
    unit: 'kg',
    weight: '5 kg',
    image: '/images/products/atta-aashirvaad.jpg',
    description: {
      en: 'Premium whole wheat flour — 0% maida.',
      hi: 'प्रीमियम गेहूं का आटा — 0% मैदा।',
    },
    quantityPresets: kgPresets([1, 5, 10]),
    tags: ['packaged', 'staple'],
    inStock: true,
  },

  // Dal
  {
    id: 'tata-toor-dal-1',
    name: { en: 'Toor Dal (Arhar)', hi: 'अरहर दाल' },
    brand: 'tata',
    categoryId: 'dal',
    price: 145,
    unit: 'kg',
    weight: '1 kg',
    image: '/images/products/dal-toor.jpg',
    description: {
      en: 'Unpolished toor dal — rich in protein.',
      hi: 'अनपॉलिश अरहर दाल — प्रोटीन से भरपूर।',
    },
    quantityPresets: kgPresets([0.5, 1, 2, 5]),
    tags: ['staple', 'protein'],
    inStock: true,
  },
  {
    id: 'tata-moong-dal-1',
    name: { en: 'Moong Dal', hi: 'मूंग दाल' },
    brand: 'tata',
    categoryId: 'dal',
    price: 130,
    unit: 'kg',
    weight: '1 kg',
    image: '/images/products/dal-moong.jpg',
    description: {
      en: 'Split green gram — easy to digest.',
      hi: 'मूंग की दाल — हज़म करने में आसान।',
    },
    quantityPresets: kgPresets([0.5, 1, 2]),
    tags: ['staple', 'protein'],
    inStock: true,
  },
  {
    id: 'tata-chana-dal-1',
    name: { en: 'Chana Dal', hi: 'चना दाल' },
    brand: 'tata',
    categoryId: 'dal',
    price: 95,
    unit: 'kg',
    weight: '1 kg',
    image: '/images/products/dal-chana.jpg',
    description: {
      en: 'Split Bengal gram — perfect for dal fry.',
      hi: 'चना दाल — दाल फ्राई के लिए बढ़िया।',
    },
    quantityPresets: kgPresets([0.5, 1, 2]),
    tags: ['staple'],
    inStock: true,
  },

  // Rice
  {
    id: 'fortune-basmati-5',
    name: { en: 'Basmati Rice', hi: 'बासमती चावल' },
    brand: 'fortune',
    categoryId: 'rice',
    price: 450,
    unit: 'kg',
    weight: '5 kg',
    image: '/images/products/rice-basmati.jpg',
    description: {
      en: 'Long grain basmati — aromatic and fluffy.',
      hi: 'लंबे दाने वाला बासमती — खुशबूदार और फूला हुआ।',
    },
    quantityPresets: kgPresets([1, 5, 10, 25]),
    tags: ['staple', 'premium'],
    inStock: true,
  },
  {
    id: 'fortune-sona-masoori-5',
    name: { en: 'Sona Masoori Rice', hi: 'सोना मसूरी चावल' },
    brand: 'fortune',
    categoryId: 'rice',
    price: 320,
    unit: 'kg',
    weight: '5 kg',
    image: '/images/products/rice-sona.jpg',
    description: {
      en: 'Everyday rice — light and easy to cook.',
      hi: 'रोज़मर्रा का चावल — हल्का और पकाने में आसान।',
    },
    quantityPresets: kgPresets([1, 5, 10, 25]),
    tags: ['staple'],
    inStock: true,
  },

  // Ghee & Oil
  {
    id: 'amul-ghee-1',
    name: { en: 'Pure Cow Ghee', hi: 'शुद्ध गाय का घी' },
    brand: 'amul',
    categoryId: 'ghee-oil',
    price: 580,
    unit: 'L',
    weight: '1 L',
    image: '/images/products/ghee-amul.jpg',
    description: {
      en: 'Pure cow ghee — rich aroma and golden colour.',
      hi: 'शुद्ध गाय का घी — गहरी खुशबू और सुनहरा रंग।',
    },
    quantityPresets: LPresets([0.5, 1, 2]),
    tags: ['dairy', 'premium'],
    inStock: true,
  },
  {
    id: 'patanjali-ghee-1',
    name: { en: 'Patanjali Cow Ghee', hi: 'पतंजलि गाय घी' },
    brand: 'patanjali',
    categoryId: 'ghee-oil',
    price: 520,
    unit: 'L',
    weight: '1 L',
    image: '/images/products/ghee-patanjali.jpg',
    description: {
      en: 'Desi cow ghee from Patanjali.',
      hi: 'पतंजलि का देसी गाय घी।',
    },
    quantityPresets: LPresets([0.5, 1, 2]),
    tags: ['dairy'],
    inStock: true,
  },
  {
    id: 'fortune-oil-5',
    name: { en: 'Sunflower Oil', hi: 'सूरजमुखी तेल' },
    brand: 'fortune',
    categoryId: 'ghee-oil',
    price: 680,
    unit: 'L',
    weight: '5 L',
    image: '/images/products/oil-sunflower.jpg',
    description: {
      en: 'Refined sunflower oil — light and heart-friendly.',
      hi: 'रिफाइंड सूरजमुखी तेल — हल्का और सेहतमंद।',
    },
    quantityPresets: LPresets([1, 5]),
    tags: ['cooking'],
    inStock: true,
  },

  // Spices
  {
    id: 'mdh-garam-masala-100',
    name: { en: 'Garam Masala', hi: 'गरम मसाला' },
    brand: 'mdh',
    categoryId: 'spices',
    price: 65,
    unit: 'g',
    weight: '100 g',
    image: '/images/products/spice-garam.jpg',
    description: {
      en: 'Classic MDH garam masala blend.',
      hi: 'क्लासिक MDH गरम मसाला।',
    },
    quantityPresets: gPresets([50, 100, 200]),
    tags: ['spice'],
    inStock: true,
  },
  {
    id: 'everest-turmeric-200',
    name: { en: 'Turmeric Powder', hi: 'हल्दी पाउडर' },
    brand: 'everest',
    categoryId: 'spices',
    price: 55,
    unit: 'g',
    weight: '200 g',
    image: '/images/products/spice-haldi.jpg',
    description: {
      en: 'Pure turmeric powder — vibrant colour.',
      hi: 'शुद्ध हल्दी पाउडर — चमकीला रंग।',
    },
    quantityPresets: gPresets([100, 200, 500]),
    tags: ['spice'],
    inStock: true,
  },

  // Snacks
  {
    id: 'parle-g-biscuit',
    name: { en: 'Parle-G Biscuits', hi: 'पारle-G बिस्कुट' },
    brand: 'parle',
    categoryId: 'snacks',
    price: 10,
    unit: 'pack',
    weight: '80 g',
    image: '/images/products/snack-parle.jpg',
    description: {
      en: 'India\'s favourite glucose biscuits.',
      hi: 'भारत के पसंदीदा ग्लूकोज़ बिस्कुट।',
    },
    quantityPresets: [
      { value: 1, unit: 'pack' },
      { value: 5, unit: 'pack', label: { en: '5 packs', hi: '5 पैक' } },
      { value: 10, unit: 'pack', label: { en: '10 packs', hi: '10 पैक' } },
    ],
    tags: ['snack', 'tea-time'],
    inStock: true,
  },
  {
    id: 'britannia-good-day',
    name: { en: 'Good Day Cashew Cookies', hi: 'गुड डे कaju बिस्कुट' },
    brand: 'britannia',
    categoryId: 'snacks',
    price: 30,
    unit: 'pack',
    weight: '100 g',
    image: '/images/products/snack-goodday.jpg',
    description: {
      en: 'Buttery cashew cookies — perfect with chai.',
      hi: 'मक्खन जaisa कaju बिस्कुट — chai के साथ perfect।',
    },
    quantityPresets: [
      { value: 1, unit: 'pack' },
      { value: 3, unit: 'pack', label: { en: '3 packs', hi: '3 पैक' } },
      { value: 6, unit: 'pack', label: { en: '6 packs', hi: '6 पैक' } },
    ],
    tags: ['snack', 'tea-time'],
    inStock: true,
  },
  {
    id: 'parle-krackjack',
    name: { en: 'Krack Jack Crackers', hi: 'Krack Jack क्रैकर' },
    brand: 'parle',
    categoryId: 'snacks',
    price: 20,
    unit: 'pack',
    weight: '66 g',
    image: '/images/products/snack-krackjack.jpg',
    description: {
      en: 'Sweet and salty crackers.',
      hi: 'मीठे और नमकीन क्रैकर।',
    },
    quantityPresets: [
      { value: 1, unit: 'pack' },
      { value: 5, unit: 'pack', label: { en: '5 packs', hi: '5 पैक' } },
    ],
    tags: ['snack'],
    inStock: true,
  },

  // Pahadi
  {
    id: 'mittal-mandua-1',
    name: { en: 'Mandua (Ragi) Flour', hi: 'मंडुआ (रागी) आटा' },
    brand: 'mittal',
    categoryId: 'pahadi',
    price: 200,
    unit: 'kg',
    weight: '1 kg',
    image: '/images/products/pahadi-mandua.jpg',
    description: {
      en: 'Hill-grown finger millet — ground fresh.',
      hi: 'पहाड़ी रागी — ताज़ा पिसा।',
    },
    quantityPresets: kgPresets([0.5, 1, 2]),
    tags: ['pahadi', 'healthy', 'fresh'],
    inStock: true,
    isFreshGround: true,
  },
  {
    id: 'mittal-jhangora-1',
    name: { en: 'Jhangora (Barnyard Millet)', hi: 'झंगोरा' },
    brand: 'mittal',
    categoryId: 'pahadi',
    price: 220,
    unit: 'kg',
    weight: '1 kg',
    image: '/images/products/pahadi-jhangora.jpg',
    description: {
      en: 'Traditional Uttarakhand millet — nutritious and light.',
      hi: 'पारंपरिक उत्तराखंड का अनाज — पौष्टिक और हल्का।',
    },
    quantityPresets: kgPresets([0.5, 1, 2]),
    tags: ['pahadi', 'healthy'],
    inStock: true,
  },

  // Daily needs
  {
    id: 'tata-salt-1',
    name: { en: 'Iodised Salt', hi: 'आयोडीन नमक' },
    brand: 'tata',
    categoryId: 'daily',
    price: 28,
    unit: 'kg',
    weight: '1 kg',
    image: '/images/products/daily-salt.jpg',
    description: {
      en: 'Tata salt with iodine — essential for health.',
      hi: 'आयोडीन युक्त टाटा नमक।',
    },
    quantityPresets: kgPresets([1, 2]),
    tags: ['daily'],
    inStock: true,
  },
  {
    id: 'tata-sugar-1',
    name: { en: 'Sugar', hi: 'चीनी' },
    brand: 'tata',
    categoryId: 'daily',
    price: 50,
    unit: 'kg',
    weight: '1 kg',
    image: '/images/products/daily-sugar.jpg',
    description: {
      en: 'Refined white sugar.',
      hi: 'रिफाइंड सफेद चीनी।',
    },
    quantityPresets: kgPresets([1, 2, 5]),
    tags: ['daily'],
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductsByBrand(brandId: string): Product[] {
  return products.filter((p) => p.brand === brandId);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.en.toLowerCase().includes(q) ||
      p.name.hi.includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
}
