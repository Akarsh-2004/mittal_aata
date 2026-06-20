import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { getProductSuggestions } from '../data/suggestions';
import { getBrandById } from '../data/brands';
import { getCategoryById } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { t, localized } from '../i18n/translations';
import { ProductImage } from '../components/ProductImage';
import { QuantitySelector } from '../components/QuantitySelector';
import { QuantityStepper } from '../components/QuantityStepper';
import { ProductSuggestions } from '../components/ProductSuggestions';
import { CategoryBgLayout } from '../components/CategoryBgLayout';

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { language } = useLanguage();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const product = productId ? getProductById(productId) : undefined;
  const defaultPreset = product?.quantityPresets[0];
  const [selectedQty, setSelectedQty] = useState(defaultPreset?.value ?? 1);
  const [selectedUnit, setSelectedUnit] = useState(defaultPreset?.unit ?? 'kg');
  const [packCount, setPackCount] = useState(1);

  if (!product) {
    return (
      <div className="page">
        <p>{t('noResults', language)}</p>
        <Link to="/">{t('back', language)}</Link>
      </div>
    );
  }

  const brand = getBrandById(product.brand);
  const category = getCategoryById(product.categoryId);
  const suggestions = getProductSuggestions(product.id);

  const totalPrice = product.price * packCount;
  const orderQty = selectedQty * packCount;

  const handleProceed = () => {
    addItem(product.id, orderQty, selectedUnit);
    navigate('/cart');
  };

  const tags = [
    category && localized(category.name, language),
    brand?.name,
    product.isFreshGround ? t('freshGround', language) : null,
  ].filter(Boolean) as string[];

  return (
    <CategoryBgLayout categoryId={product.categoryId}>
      <div className="page product-page">
        <Link to={`/category/${product.categoryId}`} className="back-link back-link--glass">
          ← {t('back', language)}
        </Link>

        <div className="product-page__layout">
          <div className="product-page__visual-card glass-panel">
            <ProductImage
              categoryId={product.categoryId}
              name={localized(product.name, language)}
              isFresh={product.isFreshGround}
              size="lg"
            />
            {product.isFreshGround && (
              <span className="product-page__fresh-badge">
                ✦ {t('freshGround', language)}
              </span>
            )}
          </div>

          <div className="product-page__panel glass-panel">
            <div className="product-page__meta-row">
              <span className="product-page__rating">
                ★ 4.8 · {t('trustedKitchens', language)}
              </span>
              <span className="product-page__price">₹{product.price}</span>
            </div>

            <h1 className="product-page__title">{localized(product.name, language)}</h1>
            <p className="product-page__weight">{product.weight}</p>

            <p className="product-page__desc">
              {localized(product.description, language)}
            </p>

            <div className="product-page__tags">
              {tags.map((tag) => (
                <span key={tag} className="product-page__tag">{tag}</span>
              ))}
            </div>

            <div className="product-page__section">
              <QuantitySelector
                presets={product.quantityPresets}
                defaultUnit={product.unit}
                selectedQuantity={selectedQty}
                labelKey="selectSize"
                onSelect={(qty, unit) => {
                  setSelectedQty(qty);
                  setSelectedUnit(unit);
                }}
              />
            </div>

            <div className="product-page__qty-row">
              <span className="product-page__qty-label">{t('quantity', language)}</span>
              <QuantityStepper value={packCount} onChange={setPackCount} />
            </div>

            <div className="product-page__total-row">
              <span>{t('total', language)}</span>
              <strong>₹{totalPrice}</strong>
            </div>

            <button
              type="button"
              className="btn btn--gold btn--lg btn--full product-page__proceed"
              onClick={handleProceed}
              disabled={!product.inStock}
            >
              {t('proceed', language)} · ₹{totalPrice}
            </button>

            <span
              className={`stock-badge ${product.inStock ? 'stock-badge--in' : 'stock-badge--out'}`}
            >
              {product.inStock ? t('inStock', language) : t('outOfStock', language)}
            </span>
          </div>
        </div>

        <div className="glass-panel glass-panel--suggestions">
          <ProductSuggestions groups={suggestions} />
        </div>
      </div>
    </CategoryBgLayout>
  );
}
