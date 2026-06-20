import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getProductById } from '../data/products';
import { getFreshTodayProducts, getFeaturedProducts } from '../data/suggestions';
import { useLanguage } from '../context/LanguageContext';
import { t, localized } from '../i18n/translations';
import { HomeHero } from '../components/home/HomeHero';
import { HomeFeatureStrip } from '../components/home/HomeFeatureStrip';
import { WelcomeBar } from '../components/home/WelcomeBar';
import { FeaturedSpotlight } from '../components/home/FeaturedSpotlight';
import { ProductScrollRow } from '../components/home/ProductScrollRow';
import { ExploreCard } from '../components/home/ExploreCard';

const SPOTLIGHT_ID = 'mittal-gehun-atta-5';

export function HomePage() {
  const { language } = useLanguage();
  const freshProducts = getFreshTodayProducts();
  const exploreProducts = getFeaturedProducts();
  const spotlight = getProductById(SPOTLIGHT_ID);

  return (
    <div className="home-page">
      <HomeHero />
      <HomeFeatureStrip />

      <div className="home-page__body">
        <WelcomeBar />

        {spotlight && <FeaturedSpotlight product={spotlight} />}

        <section className="section">
          <div className="section__header">
            <h2 className="section__title">{t('categories', language)}</h2>
            <Link to="/categories" className="section__link">
              {t('viewAll', language)} →
            </Link>
          </div>
          <div className="category-pills">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="category-pill"
                style={{ '--cat-color': cat.color } as CSSProperties}
              >
                <span className="category-pill__icon" aria-hidden="true">{cat.icon}</span>
                {localized(cat.name, language)}
              </Link>
            ))}
          </div>
        </section>

        <ProductScrollRow
          title={t('exploreProducts', language)}
          viewAllTo="/categories"
          viewAllLabel={t('viewAll', language)}
        >
          {exploreProducts.map((p) => (
            <ExploreCard key={p.id} product={p} />
          ))}
        </ProductScrollRow>

        {freshProducts.length > 0 && (
          <ProductScrollRow
            title={`✦ ${t('freshToday', language)}`}
            viewAllTo="/category/atta"
            viewAllLabel={t('viewAll', language)}
          >
            {freshProducts.map((p) => (
              <ExploreCard key={p.id} product={p} />
            ))}
          </ProductScrollRow>
        )}

        <div className="promo-card">
          <div className="promo-card__content">
            <p className="promo-card__badge">{t('promoBadge', language)}</p>
            <h3 className="promo-card__title">{t('promoTitle', language)}</h3>
            <p className="promo-card__sub">{t('promoSub', language)}</p>
          </div>
          <Link to="/category/atta" className="promo-card__btn">
            {t('heroExplore', language)}
          </Link>
        </div>
      </div>
    </div>
  );
}
