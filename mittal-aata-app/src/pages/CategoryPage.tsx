import { useMemo, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import {
  getProductsByCategory,
  getGroundSpiceProducts,
  getPackagedSpiceProducts,
} from '../data/products';
import { brands } from '../data/brands';
import { snackTypes } from '../data/snackTypes';
import { useLanguage } from '../context/LanguageContext';
import { t, localized } from '../i18n/translations';
import { ProductCard } from '../components/ProductCard';
import { CategoryBgLayout } from '../components/CategoryBgLayout';

type CategoryPageState = {
  fromChakki?: boolean;
  chakkiAisle?: string;
};

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { language } = useLanguage();
  const location = useLocation();
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [snackFilter, setSnackFilter] = useState<string>('all');

  const chakkiState = location.state as CategoryPageState | null;
  const backLink = chakkiState?.fromChakki
    ? `/chakki${chakkiState.chakkiAisle ? `#${chakkiState.chakkiAisle}` : ''}`
    : '/categories';

  const category = categoryId ? getCategoryById(categoryId) : undefined;
  const allProducts = categoryId ? getProductsByCategory(categoryId) : [];
  const isSpices = categoryId === 'spices';
  const isSnacks = categoryId === 'snacks';

  const groundSpices = useMemo(() => getGroundSpiceProducts(), []);
  const packagedSpices = useMemo(() => getPackagedSpiceProducts(), []);

  const availableBrands = useMemo(() => {
    const brandIds = new Set(allProducts.map((p) => p.brand));
    return brands.filter((b) => brandIds.has(b.id));
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    if (isSnacks) {
      if (snackFilter === 'all') return allProducts;
      return allProducts.filter((p) => p.tags.includes(snackFilter));
    }
    if (brandFilter === 'all') return allProducts;
    return allProducts.filter((p) => p.brand === brandFilter);
  }, [allProducts, brandFilter, snackFilter, isSnacks]);

  const showBrandFilter = !isSpices && !isSnacks && availableBrands.length > 1;

  if (!category || !categoryId) {
    return (
      <div className="page">
        <p>{t('noResults', language)}</p>
        <Link to="/">{t('back', language)}</Link>
      </div>
    );
  }

  return (
    <CategoryBgLayout categoryId={categoryId}>
      <div className="page category-page">
        <Link to={backLink} className="back-link back-link--glass">
          ← {t('back', language)}
        </Link>
        <div className="category-page__header">
          <span className="category-page__icon" aria-hidden="true">
            {category.icon}
          </span>
          <h1 className="page-title page-title--glass">
            {localized(category.name, language)}
          </h1>
        </div>

        {isSnacks && (
          <div className="brand-filter glass-inline">
            <p className="brand-filter__label">{t('filterBySnackType', language)}</p>
            <div className="brand-filter__chips">
              {snackTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`brand-chip ${snackFilter === type.id ? 'brand-chip--active' : ''}`}
                  onClick={() => setSnackFilter(type.id)}
                >
                  {localized(type.label, language)}
                </button>
              ))}
            </div>
          </div>
        )}

        {showBrandFilter && (
          <div className="brand-filter glass-inline">
            <p className="brand-filter__label">{t('filterByBrand', language)}</p>
            <div className="brand-filter__chips">
              <button
                type="button"
                className={`brand-chip ${brandFilter === 'all' ? 'brand-chip--active' : ''}`}
                onClick={() => setBrandFilter('all')}
              >
                {t('allBrands', language)}
              </button>
              {availableBrands.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  className={`brand-chip ${brandFilter === b.id ? 'brand-chip--active' : ''}`}
                  onClick={() => setBrandFilter(b.id)}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {isSpices ? (
          <>
            <section id="ground-spices" className="category-section">
              <h2 className="category-section__title category-section__title--glass">
                {t('groundSpicesSection', language)}
              </h2>
              <p className="category-section__note category-section__note--glass">
                {t('groundSpicesNote', language)}
              </p>
              {groundSpices.length > 0 ? (
                <div className="product-grid product-grid--glass">
                  {groundSpices.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <p className="empty-message">{t('chakkiAisleEmpty', language)}</p>
              )}
            </section>

            <section id="packaged-spices" className="category-section">
              <h2 className="category-section__title category-section__title--glass">
                {t('packagedSpicesSection', language)}
              </h2>
              <p className="category-section__note category-section__note--glass">
                {t('packagedSpicesNote', language)}
              </p>
              {packagedSpices.length > 0 ? (
                <div className="product-grid product-grid--glass">
                  {packagedSpices.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <p className="empty-message">{t('noResults', language)}</p>
              )}
            </section>
          </>
        ) : (
          <>
            <div className="product-grid product-grid--glass">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <p className="empty-message">{t('noResults', language)}</p>
            )}
          </>
        )}
      </div>
    </CategoryBgLayout>
  );
}
