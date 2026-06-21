import type { Category } from '../types';

export const categories: Category[] = [
  { id: 'atta', name: { en: 'Fresh Atta', hi: 'ताज़ा आटा' }, icon: '🌾', color: '#C4973A' },
  { id: 'dal', name: { en: 'Dal & Pulses', hi: 'दालें' }, icon: '🫘', color: '#E2BE7A' },
  { id: 'rice', name: { en: 'Rice', hi: 'चावल' }, icon: '🍚', color: '#4A8C4E' },
  { id: 'ghee-oil', name: { en: 'Ghee & Oil', hi: 'घी और तेल' }, icon: '🫒', color: '#2E5E31' },
  { id: 'spices', name: { en: 'Spices', hi: 'मसाले' }, icon: '🌶️', color: '#C44A20' },
  { id: 'snacks', name: { en: 'Snacks', hi: 'नाश्ता' }, icon: '🍪', color: '#7A7468' },
  { id: 'pahadi', name: { en: 'Pahadi Grains', hi: 'पहाड़ी अनाज' }, icon: '⛰️', color: '#1E3D20' },
  { id: 'daily', name: { en: 'Daily Needs', hi: 'रोज़मर्रा की आवश्यकताएँ' }, icon: '🛒', color: '#1A1A18' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
