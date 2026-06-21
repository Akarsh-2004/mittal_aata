import type { Product } from '../types';
import { products } from './products';

export type ChakkiAisleId = 'atta' | 'spices' | 'millets' | 'other';

export type ChakkiAisle = {
  id: ChakkiAisleId;
  icon: string;
  categoryId: string;
  color: string;
};

export const chakkiAisles: ChakkiAisle[] = [
  { id: 'atta', icon: '🌾', categoryId: 'atta', color: '#C4973A' },
  { id: 'spices', icon: '🌶️', categoryId: 'spices', color: '#C44A20' },
  { id: 'millets', icon: '⛰️', categoryId: 'pahadi', color: '#1E3D20' },
  { id: 'other', icon: '⚙️', categoryId: 'atta', color: '#2E5E31' },
];

export function getChakkiAisleProducts(aisleId: ChakkiAisleId): Product[] {
  switch (aisleId) {
    case 'atta':
      return products.filter((p) => p.categoryId === 'atta' && p.isFreshGround);
    case 'spices':
      return products.filter((p) => p.categoryId === 'spices');
    case 'millets':
      return products.filter((p) => p.categoryId === 'pahadi');
    case 'other':
      return products.filter(
        (p) =>
          p.isFreshGround &&
          p.categoryId === 'atta' &&
          p.tags.includes('healthy')
      );
    default:
      return [];
  }
}

export function getAllChakkiProducts(): Product[] {
  const ids = new Set<string>();
  const result: Product[] = [];
  for (const aisle of chakkiAisles) {
    for (const product of getChakkiAisleProducts(aisle.id)) {
      if (!ids.has(product.id)) {
        ids.add(product.id);
        result.push(product);
      }
    }
  }
  return result;
}
