import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { t, localized } from '../../i18n/translations';
import { getCategoryById } from '../../data/categories';
import { ProductImage } from '../ProductImage';
import { IconArrowUpRight } from '../Icons';

interface FeaturedSpotlightProps {
  product: Product;
}

export function FeaturedSpotlight({ product }: FeaturedSpotlightProps) {
  const { language } = useLanguage();
  const category = getCategoryById(product.categoryId);

  return (
    <Link to={`/product/${product.id}`} className="spotlight-card">
      <div className="spotlight-card__visual">
        <ProductImage
          categoryId={product.categoryId}
          name={localized(product.name, language)}
          isFresh={product.isFreshGround}
          size="lg"
        />
      </div>
      <div className="spotlight-card__body">
        <span className="spotlight-card__label">{t('featuredPick', language)}</span>
        <h2 className="spotlight-card__title">{localized(product.name, language)}</h2>
        <p className="spotlight-card__desc">{localized(product.description, language)}</p>
        <div className="spotlight-card__meta">
          <span className="spotlight-card__price">₹{product.price}</span>
          <span className="spotlight-card__tag">
            {category ? localized(category.name, language) : product.weight}
          </span>
        </div>
        <span className="spotlight-card__cta">
          {t('viewProduct', language)}
          <IconArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
