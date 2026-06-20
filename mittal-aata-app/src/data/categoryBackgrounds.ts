/** Full-bleed background images per category — used in page backgrounds, not cards */
export const categoryBackgrounds: Record<string, string> = {
  atta: '/images/categories/atta.jpg',
  dal: '/images/categories/dal.jpg',
  rice: '/images/categories/rice.jpg',
  'ghee-oil': '/images/categories/ghee-oil.jpg',
  spices: '/images/categories/spices.jpg',
  snacks: '/images/categories/snacks.jpg',
  pahadi: '/images/categories/pahadi.webp',
  daily: '/images/categories/daily.jpg',
};

export function getCategoryBackground(categoryId: string): string | undefined {
  return categoryBackgrounds[categoryId];
}

/** Home hero uses fresh atta / flour imagery */
export const homeHeroBackground = categoryBackgrounds.atta;
