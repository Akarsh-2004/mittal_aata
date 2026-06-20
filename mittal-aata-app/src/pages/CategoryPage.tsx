import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { brands } from '../data/brands';
import { useLanguage } from '../context/LanguageContext';
import { t, localized } from '../i18n/translations';
import { ProductCard } from '../components/ProductCard';
import { CategoryBgLayout } from '../components/CategoryBgLayout';

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { language } = useLanguage();
  const [brandFilter, setBrandFilter] = useState<string>('all');

  const category = categoryId ? getCategoryById(categoryId) : undefined;
  const allProducts = categoryId ? getProductsByCategory(categoryId) : [];

  const availableBrands = useMemo(() => {
    const brandIds = new Set(allProducts.map((p) => p.brand));
    return brands.filter((b) => brandIds.has(b.id));
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    if (brandFilter === 'all') return allProducts;
    return allProducts.filter((p) => p.brand === brandFilter);
  }, [allProducts, brandFilter]);

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
        <Link to="/categories" className="back-link back-link--glass">
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

        {availableBrands.length > 1 && (
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

        <div className="product-grid product-grid--glass">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty-message">{t('noResults', language)}</p>
        )}
      </div>
    </CategoryBgLayout>
  );
}
