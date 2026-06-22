import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { localized } from '../../i18n/translations';
import { productNavState } from '../../utils/productNav';
import { ProductImage } from '../ProductImage';

interface ExploreCardProps {
  product: Product;
}

export function ExploreCard({ product }: ExploreCardProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const defaultQty = product.quantityPresets[0];

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultQty) addItem(product.id, defaultQty.value, defaultQty.unit);
  };

  return (
    <Link to={`/product/${product.id}`} state={productNavState('/')} className="explore-card">
      <div className="explore-card__visual">
        <ProductImage
          categoryId={product.categoryId}
          name={localized(product.name, language)}
          isFresh={product.isFreshGround}
          size="md"
        />
      </div>
      <div className="explore-card__body">
        <h3 className="explore-card__name">{localized(product.name, language)}</h3>
        <p className="explore-card__desc">
          {localized(product.description, language).slice(0, 60)}…
        </p>
        <div className="explore-card__footer">
          <span className="explore-card__price">₹{product.price}</span>
          <button type="button" className="explore-card__add" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </Link>
  );
}
