import { useMemo } from 'react';
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
import { ChakkiSection } from '../components/home/ChakkiSection';
import { LiveMarqueeRow } from '../components/home/LiveMarqueeRow';

const SPOTLIGHT_ID = 'mittal-gehun-atta-5';

export function HomePage() {
  const { language } = useLanguage();
  const freshProducts = getFreshTodayProducts();
  const exploreProducts = getFeaturedProducts();
  const spotlight = getProductById(SPOTLIGHT_ID);

  const marqueeProducts = useMemo(() => {
    const seen = new Set<string>();
    return [...exploreProducts, ...freshProducts].filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  }, [exploreProducts, freshProducts]);

  return (
    <div className="home-page">
      <HomeHero />
      <HomeFeatureStrip />

      <div className="home-page__body">
        <WelcomeBar />

        {spotlight && <FeaturedSpotlight product={spotlight} />}

        <ChakkiSection />

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

        <LiveMarqueeRow
          title={t('exploreProducts', language)}
          products={marqueeProducts}
          viewAllTo="/categories"
          viewAllLabel={t('viewAll', language)}
        />

        <div className="promo-card">
          <div className="promo-card__content">
            <p className="promo-card__badge">{t('promoBadge', language)}</p>
            <h3 className="promo-card__title">{t('promoTitle', language)}</h3>
            <p className="promo-card__sub">{t('promoSub', language)}</p>
          </div>
          <Link to="/chakki" className="promo-card__btn">
            {t('heroExplore', language)}
          </Link>
        </div>
      </div>
    </div>
  );
}
