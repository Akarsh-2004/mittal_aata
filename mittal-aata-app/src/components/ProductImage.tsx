import type { CSSProperties } from 'react';
import { categories } from '../data/categories';

const categoryIcons: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.id, c.icon]),
);

const categoryColors: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.id, c.color]),
);

export interface ProductImageProps {
  categoryId: string;
  name: string;
  isFresh?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function ProductImage({
  categoryId,
  name,
  isFresh,
  size = 'md',
}: ProductImageProps) {
  const icon = categoryIcons[categoryId] ?? '🛒';
  const color = categoryColors[categoryId] ?? '#1E3D20';

  return (
    <div
      className={`product-image product-image--${size}`}
      style={{ '--accent': color } as CSSProperties}
      aria-label={name}
    >
      <span className="product-image__icon" aria-hidden="true">
        {icon}
      </span>
      {isFresh ? (
        <span className="product-image__fresh-badge" aria-hidden="true">
          ✦
        </span>
      ) : null}
    </div>
  );
}

export default ProductImage;
