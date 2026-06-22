import type { Language } from '../types';

type TranslationKeys =
  | 'appName'
  | 'brandSubtitle'
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
  | 'payNow'
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
  | 'clearCart'
  | 'deliveryNote'
  | 'productsFound'
  | 'noResults'
  | 'tryDifferent'
  | 'allBrands'
  | 'filterByBrand'
  | 'filterBySnackType'
  | 'groundSpicesSection'
  | 'groundSpicesNote'
  | 'packagedSpicesSection'
  | 'packagedSpicesNote'
  | 'chakkiBringGrains'
  | 'back'
  | 'description'
  | 'price'
  | 'per'
  | 'since1994'
  | 'trustedKitchens'
  | 'chakkiNav'
  | 'heroExplore'
  | 'viewProduct'
  | 'browseChakki'
  | 'chakkiBadge'
  | 'chakkiSectionTitle'
  | 'chakkiSectionSub'
  | 'chakkiPageTitle'
  | 'chakkiPageSub'
  | 'chakkiStepsLabel'
  | 'chakkiAisleEmpty'
  | 'chakkiAisle_atta'
  | 'chakkiAisle_spices'
  | 'chakkiAisle_millets'
  | 'chakkiAisle_other'
  | 'chakkiAisleDesc_atta'
  | 'chakkiAisleDesc_spices'
  | 'chakkiAisleDesc_millets'
  | 'chakkiAisleDesc_other'
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
  | 'loading'
  | 'deliveryDetails'
  | 'customerName'
  | 'phone'
  | 'address'
  | 'paymentNote'
  | 'orderSummary'
  | 'orderPlaced'
  | 'orderPlacedSub'
  | 'supportEyebrow'
  | 'supportTitle'
  | 'supportSub'
  | 'callSupport'
  | 'chatSupport'
  | 'supportPhone'
  | 'supportEmail'
  | 'supportStore'
  | 'supportHours';

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: {
    appName: 'Mittal Provision Store and Atta Chakki',
    brandSubtitle: 'Provision Store and Atta Chakki · Dehradun',
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
    emptyCart: 'Your cart is empty.',
    continueShopping: 'Continue Shopping',
    total: 'Total',
    checkout: 'Place Order',
    payNow: 'Pay Now',
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
    clearCart: 'Clear cart',
    deliveryNote: 'Order any atta or flour by 12 PM for same-day delivery in Dehradun',
    productsFound: 'products found',
    noResults: 'No products found.',
    tryDifferent: 'Try a different search term',
    allBrands: 'All Brands',
    filterByBrand: 'Filter by brand',
    filterBySnackType: 'Filter by type',
    groundSpicesSection: 'Fresh ground spices',
    groundSpicesNote: 'Ground to order at our chakki — whole spices, fresh every time.',
    packagedSpicesSection: 'Packaged branded spices',
    packagedSpicesNote: 'Trusted brands like MDH, Everest and more.',
    chakkiBringGrains: 'Bring your own wheat, millets or pulses — we grind them fresh for you.',
    back: 'Back',
    description: 'About this product',
    price: 'Price',
    per: 'per',
    since1994: 'Trusted in kitchens since 1994',
    trustedKitchens: 'Dehradun\'s trusted grocery store',
    chakkiNav: 'Chakki',
    heroExplore: 'Shop from Chakki',
    viewProduct: 'View product',
    browseChakki: 'Browse',
    chakkiBadge: 'Our Chakki',
    chakkiSectionTitle: 'Fresh from our chakki',
    chakkiSectionSub: 'Stone-ground flour, spices, millets and more — milled today, delivered to your door.',
    chakkiPageTitle: 'Shop from our chakki',
    chakkiPageSub: 'Everything ground fresh at Mittal\'s chakki — no warehouse stock, no stale flour. We grind your own grains too.',
    chakkiStepsLabel: 'How our chakki works',
    chakkiAisleEmpty: 'Ask at the shop — we grind this fresh for you.',
    chakkiAisle_atta: 'Atta',
    chakkiAisle_spices: 'Spices',
    chakkiAisle_millets: 'Millets',
    chakkiAisle_other: 'Other Chakki Grinds',
    chakkiAisleDesc_atta: 'Wheat, multigrain and specialty flours — ground fresh daily.',
    chakkiAisleDesc_spices: 'Whole spices ground to order at our chakki. Packaged MDH & Everest also available.',
    chakkiAisleDesc_millets: 'Pahadi ragi, jhangora, bajra and hill grains from Uttarakhand.',
    chakkiAisleDesc_other: 'Multigrain blends and custom grinds — ask our chakki wala.',
    heroSubtext: 'Stone-ground flour, milled today at our chakki — delivered straight to your kitchen.',
    heroFeatures: 'Why Mittal',
    heroFeature1: 'Start your weekly atta order the easy way',
    heroFeature1Link: 'Browse Chakki',
    heroFeature2: 'Ground fresh today at our chakki — bring your own grains to grind',
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
    promoBadge: 'Same-day delivery in Dehradun',
    promoTitle: 'Order any atta or flour by 12 PM',
    promoSub: 'For same-day delivery in Dehradun.',
    loading: 'Getting your fresh groceries ready…',
    deliveryDetails: 'Delivery details',
    customerName: 'Full name',
    phone: 'Phone number',
    address: 'Delivery address',
    paymentNote: 'Pay securely on this site. Cash on delivery also available in Dehradun.',
    orderSummary: 'Order summary',
    orderPlaced: 'Order placed!',
    orderPlacedSub: 'Thank you. We will confirm your delivery shortly.',
    supportEyebrow: 'Customer support',
    supportTitle: 'Need help? We\'re here for you',
    supportSub: 'Call, message, or visit our chakki — friendly help for orders, delivery, and product questions.',
    callSupport: 'Call us',
    chatSupport: 'Message on WhatsApp',
    supportPhone: 'Phone',
    supportEmail: 'Email',
    supportStore: 'Store',
    supportHours: 'Open hours',
  },
  hi: {
    appName: 'Mittal प्रोविजन स्टोर और आटा चक्की',
    brandSubtitle: 'प्रोविजन स्टोर और आटा चक्की · देहरादून',
    tagline: 'ताज़ा पिसा हुआ। सीधे आपके लिए।',
    searchPlaceholder: 'आटा, दाल, घी, नाश्ता खोजें...',
    search: 'खोजें',
    categories: 'श्रेणियाँ',
    brands: 'ब्रांड',
    freshToday: 'आज ताज़ा पिसा हुआ',
    featured: 'लोकप्रिय सामान',
    viewAll: 'सभी देखें',
    addToCart: 'कार्ट में जोड़ें',
    addedToCart: 'जोड़ दिया गया!',
    buyNow: 'अभी खरीदें',
    cart: 'कार्ट',
    emptyCart: 'आपकी कार्ट खाली है।',
    continueShopping: 'खरीदारी जारी रखें',
    total: 'कुल',
    checkout: 'ऑर्डर करें',
    payNow: 'अभी भुगतान करें',
    quantity: 'मात्रा',
    customQuantity: 'अपनी मात्रा',
    selectQuantity: 'मात्रा चुनें',
    inStock: 'उपलब्ध',
    outOfStock: 'स्टॉक में नहीं है',
    freshGround: 'ताज़ा पिसा हुआ',
    groundToday: 'आज हमारी चक्की में पिसा हुआ',
    home: 'होम',
    shop: 'दुकान',
    language: 'भाषा',
    english: 'English',
    hindi: 'हिंदी',
    items: 'सामान',
    item: 'सामान',
    remove: 'हटाएँ',
    clearCart: 'कार्ट खाली करें',
    deliveryNote: '12 बजे से पहले कोई भी आटा ऑर्डर करें — देहरादून में आज ही डिलीवरी',
    productsFound: 'सामान मिले',
    noResults: 'कोई सामान नहीं मिला।',
    tryDifferent: 'कोई दूसरा शब्द खोजें',
    allBrands: 'सभी ब्रांड',
    filterByBrand: 'ब्रांड के अनुसार छाँटें',
    filterBySnackType: 'प्रकार के अनुसार छाँटें',
    groundSpicesSection: 'ताज़ा पिसे मसाले',
    groundSpicesNote: 'चक्की में आपके अनुसार पिसे — साबुत मसाले, हर बार ताज़ा।',
    packagedSpicesSection: 'पैक किए ब्रांडेड मसाले',
    packagedSpicesNote: 'MDH, Everest जैसे भरोसेमंद ब्रांड।',
    chakkiBringGrains: 'अपना गेहूँ, मिलेट या दाल लाएँ — हम ताज़ा पिसकर देंगे।',
    back: 'वापस',
    description: 'इस सामान के बारे में',
    price: 'कीमत',
    per: 'प्रति',
    since1994: '1994 से भरोसेमंद',
    trustedKitchens: 'देहरादून की भरोसेमंद किराना दुकान',
    chakkiNav: 'चक्की',
    heroExplore: 'चक्की से खरीदें',
    viewProduct: 'सामान देखें',
    browseChakki: 'देखें',
    chakkiBadge: 'हमारी चक्की',
    chakkiSectionTitle: 'चक्की से ताज़ा',
    chakkiSectionSub: 'आटा, मसाले, मिलेट और अन्य — आज पिसा, सीधे आपके घर तक।',
    chakkiPageTitle: 'हमारी चक्की से खरीदें',
    chakkiPageSub: 'Mittal की चक्की में आज ताज़ा पिसा — न कोई गोदाम, न पुराना आटा। अपना अनाज लाएँ, हम पिसेंगे।',
    chakkiStepsLabel: 'चक्की कैसे काम करती है',
    chakkiAisleEmpty: 'दुकान पर पूछें — हम यह ताज़ा पिसकर देंगे।',
    chakkiAisle_atta: 'आटा',
    chakkiAisle_spices: 'मसाले',
    chakkiAisle_millets: 'मिलेट',
    chakkiAisle_other: 'अन्य चक्की पिसाई',
    chakkiAisleDesc_atta: 'गेहूँ, मल्टीग्रेन और विशेष आटा — रोज़ ताज़ा पिसा।',
    chakkiAisleDesc_spices: 'चक्की में साबुत मसाले पिसे। MDH और Everest पैक भी उपलब्ध।',
    chakkiAisleDesc_millets: 'पहाड़ी रागी, झंगोरा, बाजरा — उत्तराखंड के अनाज।',
    chakkiAisleDesc_other: 'मल्टीग्रेन मिश्रण और विशेष पिसाई — चक्कीवाले से पूछें।',
    heroSubtext: 'आज हमारी चक्की में पिसा हुआ आटा — सीधे आपकी रसोई तक।',
    heroFeatures: 'Mittal क्यों',
    heroFeature1: 'अपना साप्ताहिक आटा ऑर्डर आसानी से शुरू करें',
    heroFeature1Link: 'चक्की देखें',
    heroFeature2: 'आज ताज़ा पिसा — अपना अनाज लाकर चक्की में पिसवाएँ',
    heroFeature3: '30 वर्षों से देहरादून के परिवारों का भरोसा',
    heroStep_grind: 'पिसाई',
    heroStep_pack: 'पैक',
    heroStep_deliver: 'डिलीवरी',
    welcome: 'नमस्ते! आपका स्वागत है।',
    welcomeSub: 'आज आपको दुकान से क्या चाहिए?',
    exploreProducts: 'सामान देखें',
    featuredPick: 'आज की पसंद',
    proceed: 'कार्ट में जाएँ',
    selectSize: 'आकार चुनें',
    promoBadge: 'देहरादून में आज ही डिलीवरी',
    promoTitle: '12 बजे से पहले कोई भी आटा ऑर्डर करें',
    promoSub: 'देहरादून में आज ही डिलीवरी के लिए।',
    loading: 'ताज़ा सामान तैयार किया जा रहा है…',
    deliveryDetails: 'डिलीवरी विवरण',
    customerName: 'पूरा नाम',
    phone: 'फ़ोन नंबर',
    address: 'डिलीवरी का पता',
    paymentNote: 'इसी साइट पर सुरक्षित भुगतान करें। देहरादून में डिलीवरी पर नकद भी उपलब्ध है।',
    orderSummary: 'ऑर्डर सारांश',
    orderPlaced: 'ऑर्डर हो गया!',
    orderPlacedSub: 'धन्यवाद। हम जल्द ही आपकी डिलीवरी की पुष्टि करेंगे।',
    supportEyebrow: 'ग्राहक सहायता',
    supportTitle: 'मदद चाहिए? हम यहाँ हैं',
    supportSub: 'कॉल करें, संदेश भेजें, या चक्की पर आएँ — ऑर्डर, डिलीवरी और सामान के बारे में सहायता।',
    callSupport: 'हमें कॉल करें',
    chatSupport: 'WhatsApp पर संदेश',
    supportPhone: 'फ़ोन',
    supportEmail: 'ईमेल',
    supportStore: 'दुकान',
    supportHours: 'खुलने का समय',
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
