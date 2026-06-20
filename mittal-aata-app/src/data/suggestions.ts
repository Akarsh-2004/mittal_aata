import type { Product, SuggestionGroup } from '../types';
import { products, getProductById } from './products';

/** Category pairing rules — e.g. dal → rice, ghee → other ghee brands */
const categoryPairs: Record<string, string[]> = {
  dal: ['rice', 'ghee-oil', 'spices'],
  rice: ['dal', 'ghee-oil'],
  atta: ['ghee-oil', 'daily'],
  'ghee-oil': ['atta', 'dal', 'spices'],
  spices: ['dal', 'ghee-oil'],
  snacks: ['snacks', 'daily'],
  pahadi: ['ghee-oil', 'atta'],
  daily: ['atta', 'snacks'],
};

export function getProductSuggestions(productId: string): SuggestionGroup[] {
  const product = getProductById(productId);
  if (!product) return [];

  const groups: SuggestionGroup[] = [];
  const usedIds = new Set<string>([productId]);

  const addProducts = (
    ids: string[],
    type: SuggestionGroup['type'],
    title: SuggestionGroup['title'],
    limit = 4
  ) => {
    const filtered = ids.filter((id) => !usedIds.has(id)).slice(0, limit);
    if (filtered.length === 0) return;
    filtered.forEach((id) => usedIds.add(id));
    groups.push({ type, title, productIds: filtered });
  };

  // Pairs well with (cross-category)
  const pairedCategories = categoryPairs[product.categoryId] ?? [];
  const pairedProducts = products
    .filter((p) => pairedCategories.includes(p.categoryId) && p.id !== productId)
    .map((p) => p.id);
  addProducts(pairedProducts, 'pairs_with', {
    en: 'Goes well with this',
    hi: 'इसके साथ अच्छा लगता है',
  });

  // Same category, different brand — e.g. other ghee brands
  const isGhee = product.name.en.toLowerCase().includes('ghee');
  if (product.categoryId === 'ghee-oil' && isGhee) {
    const otherGhee = products
      .filter(
        (p) =>
          p.categoryId === 'ghee-oil' &&
          p.id !== productId &&
          p.name.en.toLowerCase().includes('ghee')
      )
      .map((p) => p.id);
    addProducts(otherGhee, 'similar_brand', {
      en: 'Other ghee brands',
      hi: 'अन्य घी ब्रांड',
    });
  } else {
    const sameCategoryOtherBrand = products
      .filter(
        (p) =>
          p.categoryId === product.categoryId &&
          p.brand !== product.brand &&
          p.id !== productId
      )
      .map((p) => p.id);
    if (sameCategoryOtherBrand.length > 0) {
      addProducts(sameCategoryOtherBrand, 'similar_brand', {
        en: 'Other brands you might like',
        hi: 'अन्य ब्रांड जो आपको पसंद आ सकते हैं',
      });
    }
  }

  // Same category alternatives
  const sameCategory = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== productId)
    .map((p) => p.id);
  addProducts(sameCategory, 'same_category', {
    en: 'More in this category',
    hi: 'इस श्रेणी में और',
  }, 4);

  // Snacks → other snacks
  if (product.categoryId === 'snacks') {
    const otherSnacks = products
      .filter((p) => p.categoryId === 'snacks' && p.id !== productId)
      .map((p) => p.id);
    addProducts(otherSnacks, 'frequently_bought', {
      en: 'Other snacks to try',
      hi: 'अन्य नाश्ते आज़माएँ',
    });
  }

  // Dal → rice specifically called out
  if (product.categoryId === 'dal') {
    const riceProducts = products
      .filter((p) => p.categoryId === 'rice')
      .map((p) => p.id);
    if (riceProducts.length > 0 && !groups.some((g) => g.type === 'pairs_with')) {
      addProducts(riceProducts, 'pairs_with', {
        en: 'Complete your meal — add rice',
        hi: 'खाना पूरा करें — चावल जोड़ें',
      });
    }
  }

  return groups;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFreshGround || p.tags.includes('staple')).slice(0, 6);
}

export function getFreshTodayProducts(): Product[] {
  return products.filter((p) => p.isFreshGround);
}
