import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../i18n/translations';
import { BrandLogo, BrandWordmark } from '../BrandLogo';
import { IconArrowUpRight } from '../Icons';

export function HomeHero() {
  const { language } = useLanguage();

  return (
    <section className="home-hero home-hero--cover" aria-label={t('appName', language)}>
      <div className="home-hero__rings" aria-hidden="true">
        <span className="home-hero__ring home-hero__ring--outer" />
        <span className="home-hero__ring home-hero__ring--inner" />
      </div>

      <div className="home-hero__cover-inner">
        <p className="home-hero__cover-label">{t('since1994', language)}</p>

        <div className="home-hero__logo-lockup">
          <BrandLogo size={88} variant="gold" className="home-hero__logo-icon" />
          <BrandWordmark light />
        </div>

        <p className="home-hero__cover-tagline">{t('tagline', language)}</p>

        <div className="home-hero__cover-actions">
          <Link to="/category/atta" className="home-hero__cta home-hero__cta--gold">
            {t('heroExplore', language)}
            <IconArrowUpRight size={18} />
          </Link>
          <Link to="/categories" className="home-hero__cta-secondary">
            {t('categories', language)} →
          </Link>
        </div>

        <p className="home-hero__cover-note">{t('heroSubtext', language)}</p>
      </div>
    </section>
  );
}
