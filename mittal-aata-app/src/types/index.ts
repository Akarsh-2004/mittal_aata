export type Language = 'en' | 'hi';

export type Unit = 'kg' | 'g' | 'L' | 'ml' | 'piece' | 'pack';

export interface QuantityPreset {
  value: number;
  unit: Unit;
  label?: { en: string; hi: string };
}

export interface Product {
  id: string;
  name: { en: string; hi: string };
  brand: string;
  categoryId: string;
  price: number;
  unit: Unit;
  weight?: string;
  image: string;
  description: { en: string; hi: string };
  quantityPresets: QuantityPreset[];
  tags: string[];
  inStock: boolean;
  isFreshGround?: boolean;
}

export interface Category {
  id: string;
  name: { en: string; hi: string };
  icon: string;
  color: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  unit: Unit;
}

export type SuggestionType = 'pairs_with' | 'similar_brand' | 'same_category' | 'frequently_bought';

export interface SuggestionGroup {
  type: SuggestionType;
  title: { en: string; hi: string };
  productIds: string[];
}
