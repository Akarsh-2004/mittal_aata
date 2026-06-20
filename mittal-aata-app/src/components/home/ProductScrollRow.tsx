import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ProductScrollRowProps {
  title: string;
  viewAllTo?: string;
  viewAllLabel?: string;
  children: ReactNode;
}

export function ProductScrollRow({
  title,
  viewAllTo,
  viewAllLabel,
  children,
}: ProductScrollRowProps) {
  return (
    <section className="scroll-row">
      <div className="scroll-row__header">
        <h2 className="scroll-row__title">{title}</h2>
        {viewAllTo && viewAllLabel && (
          <Link to={viewAllTo} className="scroll-row__link">
            {viewAllLabel} →
          </Link>
        )}
      </div>
      <div className="scroll-row__track">{children}</div>
    </section>
  );
}
