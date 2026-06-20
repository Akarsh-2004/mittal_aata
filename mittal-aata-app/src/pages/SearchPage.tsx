import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { searchProducts } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { SearchBar } from '../components/SearchBar';
import { ProductCard } from '../components/ProductCard';

export function SearchPage() {
  const { language } = useLanguage();
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';

  const results = useMemo(() => searchProducts(query), [query]);

  const handleSearch = (q: string) => {
    if (q) {
      setParams({ q });
    } else {
      setParams({});
    }
  };

  return (
    <div className="page search-page">
      <h1 className="page-title">{t('search', language)}</h1>
      <SearchBar autoFocus initialQuery={query} onSearch={handleSearch} />

      {query && (
        <p className="search-results__count">
          {results.length} {t('productsFound', language)} &ldquo;{query}&rdquo;
        </p>
      )}

      {query && results.length === 0 && (
        <div className="empty-state">
          <p>{t('noResults', language)}</p>
          <p className="empty-state__hint">{t('tryDifferent', language)}</p>
        </div>
      )}

      <div className="product-grid">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {!query && (
        <div className="search-hints">
          <p>{t('searchPlaceholder', language)}</p>
          <div className="search-hints__chips">
            {['atta', 'dal', 'ghee', 'rice', 'biscuit'].map((term) => (
              <button
                key={term}
                type="button"
                className="brand-chip"
                onClick={() => handleSearch(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
