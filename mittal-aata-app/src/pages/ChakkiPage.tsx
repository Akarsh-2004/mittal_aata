import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { chakkiAisles, getChakkiAisleProducts } from '../data/chakki';
import { ProductCard } from '../components/ProductCard';
import { IconChakki } from '../components/Icons';

export function ChakkiPage() {
  const { language } = useLanguage();

  return (
    <div className="page chakki-page">
      <Link to="/" className="back-link">
        ← {t('back', language)}
      </Link>

      <header className="chakki-page__hero">
        <span className="chakki-page__badge">
          <IconChakki size={20} />
          {t('chakkiBadge', language)}
        </span>
        <h1 className="chakki-page__title">{t('chakkiPageTitle', language)}</h1>
        <p className="chakki-page__sub">{t('chakkiPageSub', language)}</p>
        <p className="chakki-page__grains">{t('chakkiBringGrains', language)}</p>
        <div className="chakki-page__steps" role="list">
          {(['grind', 'pack', 'deliver'] as const).map((step) => (
            <div key={step} className="chakki-page__step" role="listitem">
              <span className="chakki-page__step-dot" aria-hidden="true" />
              {t(`heroStep_${step}`, language)}
            </div>
          ))}
        </div>
      </header>

      {chakkiAisles.map((aisle) => {
        const aisleProducts = getChakkiAisleProducts(aisle.id);

        return (
          <section
            key={aisle.id}
            id={aisle.id}
            className="chakki-page__aisle"
            aria-labelledby={`chakki-aisle-${aisle.id}`}
          >
            <div className="chakki-page__aisle-header">
              <div className="chakki-page__aisle-title-row">
                <span className="chakki-page__aisle-icon" aria-hidden="true">
                  {aisle.icon}
                </span>
                <h2 id={`chakki-aisle-${aisle.id}`} className="chakki-page__aisle-title">
                  {t(`chakkiAisle_${aisle.id}`, language)}
                </h2>
              </div>
              <Link
                to={
                  aisle.id === 'spices'
                    ? `/category/spices#ground-spices`
                    : `/category/${aisle.categoryId}`
                }
                state={{ fromChakki: true, chakkiAisle: aisle.id }}
                className="chakki-page__aisle-link"
              >
                {t('viewAll', language)} →
              </Link>
            </div>
            <p className="chakki-page__aisle-desc">{t(`chakkiAisleDesc_${aisle.id}`, language)}</p>

            {aisleProducts.length > 0 ? (
              <div className="product-grid chakki-page__grid">
                {aisleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="chakki-page__empty">{t('chakkiAisleEmpty', language)}</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
