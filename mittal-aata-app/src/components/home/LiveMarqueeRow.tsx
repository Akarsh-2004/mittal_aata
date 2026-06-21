import { useMemo, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { ExploreCard } from './ExploreCard';

interface LiveMarqueeRowProps {
  title: string;
  products: Product[];
  viewAllTo?: string;
  viewAllLabel?: string;
}

export function LiveMarqueeRow({
  title,
  products,
  viewAllTo,
  viewAllLabel,
}: LiveMarqueeRowProps) {
  const loop = useMemo(() => {
    if (products.length === 0) return [];
    return [...products, ...products];
  }, [products]);

  if (products.length === 0) return null;

  return (
    <section className="live-marquee" aria-label={title}>
      <div className="live-marquee__header">
        <div className="live-marquee__title-wrap">
          <span className="live-marquee__live" aria-hidden="true">
            <span className="live-marquee__dot" />
            Live
          </span>
          <h2 className="live-marquee__title">{title}</h2>
        </div>
        {viewAllTo && viewAllLabel && (
          <Link to={viewAllTo} className="live-marquee__link">
            {viewAllLabel} →
          </Link>
        )}
      </div>

      <div className="live-marquee__viewport">
        <div
          className="live-marquee__track"
          style={{ '--marquee-count': products.length } as CSSProperties}
        >
          {loop.map((product, index) => (
            <ExploreCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
