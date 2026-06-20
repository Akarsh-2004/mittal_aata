import type { ReactNode } from 'react';
import { getCategoryBackground } from '../data/categoryBackgrounds';

interface CategoryBgLayoutProps {
  categoryId: string;
  children: ReactNode;
}

export function CategoryBgLayout({ categoryId, children }: CategoryBgLayoutProps) {
  const bg = getCategoryBackground(categoryId);

  return (
    <div className="cat-bg-layout">
      {bg && (
        <>
          <div
            className="cat-bg-layout__image"
            style={{ backgroundImage: `url(${bg})` }}
            aria-hidden="true"
          />
          <div className="cat-bg-layout__scrim" aria-hidden="true" />
        </>
      )}
      <div className="cat-bg-layout__glass">{children}</div>
    </div>
  );
}
