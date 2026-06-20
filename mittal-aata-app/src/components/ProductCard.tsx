import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { t, localized } from '../i18n/translations';
import { getBrandById } from '../data/brands';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact }: ProductCardProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const brand = getBrandById(product.brand);

  const defaultQty = product.quantityPresets[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultQty) {
      addItem(product.id, defaultQty.value, defaultQty.unit);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={`product-card ${compact ? 'product-card--compact' : ''}`}
    >
      <ProductImage
        categoryId={product.categoryId}
        name={localized(product.name, language)}
        isFresh={product.isFreshGround}
        size={compact ? 'sm' : 'md'}
      />
      <div className="product-card__body">
        {product.isFreshGround && (
          <span className="product-card__badge">{t('freshGround', language)}</span>
        )}
        <p className="product-card__brand">{brand?.name ?? product.brand}</p>
        <h3 className="product-card__name">{localized(product.name, language)}</h3>
        <p className="product-card__weight">{product.weight}</p>
        <div className="product-card__footer">
          <span className="product-card__price">
            ₹{product.price}
            <span className="product-card__unit">
              /{product.unit === 'pack' ? 'pack' : product.unit}
            </span>
          </span>
          <button
            type="button"
            className="btn btn--green btn--sm product-card__add"
            onClick={handleQuickAdd}
            aria-label={`${t('addToCart', language)} ${localized(product.name, language)}`}
          >
            +
          </button>
        </div>
      </div>
    </Link>
  );
}
