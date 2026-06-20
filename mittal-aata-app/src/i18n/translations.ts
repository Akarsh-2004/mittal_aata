import type { Language } from '../types';

type TranslationKeys =
  | 'appName'
  | 'tagline'
  | 'searchPlaceholder'
  | 'search'
  | 'categories'
  | 'brands'
  | 'freshToday'
  | 'featured'
  | 'viewAll'
  | 'addToCart'
  | 'addedToCart'
  | 'buyNow'
  | 'cart'
  | 'emptyCart'
  | 'continueShopping'
  | 'total'
  | 'checkout'
  | 'quantity'
  | 'customQuantity'
  | 'selectQuantity'
  | 'inStock'
  | 'outOfStock'
  | 'freshGround'
  | 'groundToday'
  | 'home'
  | 'shop'
  | 'language'
  | 'english'
  | 'hindi'
  | 'items'
  | 'item'
  | 'remove'
  | 'orderViaWhatsApp'
  | 'deliveryNote'
  | 'productsFound'
  | 'noResults'
  | 'tryDifferent'
  | 'allBrands'
  | 'filterByBrand'
  | 'back'
  | 'description'
  | 'price'
  | 'per'
  | 'since1994'
  | 'trustedKitchens'
  | 'heroExplore'
  | 'heroSubtext'
  | 'heroFeatures'
  | 'heroFeature1'
  | 'heroFeature1Link'
  | 'heroFeature2'
  | 'heroFeature3'
  | 'heroStep_grind'
  | 'heroStep_pack'
  | 'heroStep_deliver'
  | 'welcome'
  | 'welcomeSub'
  | 'exploreProducts'
  | 'featuredPick'
  | 'proceed'
  | 'selectSize'
  | 'promoBadge'
  | 'promoTitle'
  | 'promoSub'
  | 'loading';

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: {
    appName: 'Mittal Aata Chakki',
    tagline: 'Taaza Pisa. Seedha Aapke Liye.',
    searchPlaceholder: 'Search atta, dal, ghee, snacks...',
    search: 'Search',
    categories: 'Categories',
    brands: 'Brands',
    freshToday: 'Fresh Ground Today',
    featured: 'Popular Items',
    viewAll: 'View All',
    addToCart: 'Add to Cart',
    addedToCart: 'Added!',
    buyNow: 'Buy Now',
    cart: 'Cart',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    total: 'Total',
    checkout: 'Place Order',
    quantity: 'Quantity',
    customQuantity: 'Custom',
    selectQuantity: 'Select quantity',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    freshGround: 'Freshly Ground',
    groundToday: 'Ground today at our chakki',
    home: 'Home',
    shop: 'Shop',
    language: 'Language',
    english: 'English',
    hindi: 'हिंदी',
    items: 'items',
    item: 'item',
    remove: 'Remove',
    orderViaWhatsApp: 'Order via WhatsApp',
    deliveryNote: 'Order by 12 PM for same-day delivery in Dehradun',
    productsFound: 'products found',
    noResults: 'No products found',
    tryDifferent: 'Try a different search term',
    allBrands: 'All Brands',
    filterByBrand: 'Filter by brand',
    back: 'Back',
    description: 'About this product',
    price: 'Price',
    per: 'per',
    since1994: 'Trusted in kitchens since 1994',
    trustedKitchens: 'Dehradun\'s trusted grocery store',
    heroExplore: 'Shop Fresh Atta',
    heroSubtext: 'Stone-ground atta, milled today at our chakki — delivered straight to your kitchen.',
    heroFeatures: 'Why Mittal',
    heroFeature1: 'Start your weekly atta order the easy way',
    heroFeature1Link: 'Browse Atta',
    heroFeature2: 'Ground fresh today at our chakki — no warehouse stock',
    heroFeature3: 'Trusted by Dehradun families for over 30 years',
    heroStep_grind: 'Grind',
    heroStep_pack: 'Pack',
    heroStep_deliver: 'Deliver',
    welcome: 'Namaste! Welcome back',
    welcomeSub: 'What do you need from the shop today?',
    exploreProducts: 'Explore Products',
    featuredPick: "Today's Pick",
    proceed: 'Proceed to Cart',
    selectSize: 'Select size',
    promoBadge: 'Same-day delivery',
    promoTitle: 'Order fresh atta by 12 PM',
    promoSub: 'Ground this morning at our chakki — delivered to your door in Dehradun.',
    loading: 'Getting your fresh groceries ready…',
  },
  hi: {
    appName: 'मittal आटा चक्की',
    tagline: 'ताज़ा पिसा। सीधा आapke लिए।',
    searchPlaceholder: 'आटा, दाल, घी, नाश्ता खोजें...',
    search: 'खोजें',
    categories: 'श्रेणियाँ',
    brands: 'ब्रांड',
    freshToday: 'आज ताज़ा पिसा',
    featured: 'लोकप्रिय सामान',
    viewAll: 'सब देखें',
    addToCart: 'कार्ट में डालें',
    addedToCart: 'जोड़ दिया!',
    buyNow: 'अभी खरीदें',
    cart: 'कार्ट',
    emptyCart: 'आapki कार्ट खाली है',
    continueShopping: 'खरीदारी जारी रखें',
    total: 'कुल',
    checkout: 'ऑर्डर करें',
    quantity: 'मात्रा',
    customQuantity: 'अपनी मात्रा',
    selectQuantity: 'मात्रा चुनें',
    inStock: 'उपलब्ध',
    outOfStock: 'स्टॉck में नहीं',
    freshGround: 'ताज़ा पिसा',
    groundToday: 'आज हमari चकki में पisa',
    home: 'होम',
    shop: 'दुकान',
    language: 'भाषा',
    english: 'English',
    hindi: 'हिंदी',
    items: 'सामान',
    item: 'सामान',
    remove: 'हटाएँ',
    orderViaWhatsApp: 'WhatsApp से ऑर्डर',
    deliveryNote: '12 बजे से पहle ऑर्डर — आज ही डिलीवरी (dehradun)',
    productsFound: 'सामान मile',
    noResults: 'कोई सामान नहीं मila',
    tryDifferent: 'दूसra शबd खोजें',
    allBrands: 'सभी ब्रांड',
    filterByBrand: 'ब्रांड se filter',
    back: 'वapas',
    description: 'इस सामan ke baare mein',
    price: 'कीमत',
    per: 'prati',
    since1994: '1994 se bharosemand',
    trustedKitchens: 'Dehradun ki bharosemand dukaan',
    heroExplore: 'Taaza Atta Dekhein',
    heroSubtext: 'Aaj hamari chakki mein pisa — seedha aapke kitchen tak.',
    heroFeatures: 'Kyun Mittal',
    heroFeature1: 'Apna weekly atta order aasaani se shuru karein',
    heroFeature1Link: 'Atta Dekhein',
    heroFeature2: 'Aaj taaza pisa — koi purana stock nahi',
    heroFeature3: '30 saal se Dehradun parivaaron ka bharosa',
    heroStep_grind: 'Pisa',
    heroStep_pack: 'Pack',
    heroStep_deliver: 'Delivery',
    welcome: 'Namaste! Swagat hai',
    welcomeSub: 'Aaj dukaan se kya chahiye?',
    exploreProducts: 'Samaan Dekhein',
    featuredPick: 'Aaj ki Pasand',
    proceed: 'Cart mein Jaayein',
    selectSize: 'Size chunein',
    promoBadge: 'Aaj hi delivery',
    promoTitle: '12 baje se pehle taaza atta order karein',
    promoSub: 'Subah hamari chakki mein pisa — Dehradun mein ghar tak.',
    loading: 'Taaza samaan taiyaar ho raha hai…',
  },
};

export function t(key: TranslationKeys, lang: Language): string {
  return translations[lang][key];
}

export function localized<T extends { en: string; hi: string }>(
  obj: T,
  lang: Language
): string {
  return obj[lang];
}
