import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../i18n/translations';
import { IconChakki, IconWheat } from '../Icons';

const STEPS = ['grind', 'pack', 'deliver'] as const;
const CUSTOMERS = ['P', 'R', 'M'];

export function HomeFeatureStrip() {
  const { language } = useLanguage();

  return (
    <section className="feature-strip" aria-label={t('heroFeatures', language)}>
      <div className="feature-strip__card feature-strip__card--cream">
        <div className="feature-strip__content">
          <p className="feature-strip__text">{t('heroFeature1', language)}</p>
          <Link to="/category/atta" className="feature-strip__link">
            {t('heroFeature1Link', language)}
          </Link>
        </div>
        <div className="feature-strip__visual feature-strip__visual--atta" aria-hidden="true">
          <div className="feature-strip__mini-bag">
            <IconWheat size={28} />
            <span>5 kg</span>
          </div>
        </div>
      </div>

      <div className="feature-strip__card feature-strip__card--white">
        <div className="feature-strip__icon-wrap" aria-hidden="true">
          <IconChakki size={18} />
        </div>
        <p className="feature-strip__text feature-strip__text--dark">
          {t('heroFeature2', language)}
        </p>
        <div className="feature-strip__steps" role="list">
          {STEPS.map((step, i) => (
            <div
              key={step}
              className={`feature-strip__step ${i === 0 ? 'feature-strip__step--active' : ''}`}
              role="listitem"
            >
              <span className="feature-strip__step-dot" />
              <span className="feature-strip__step-label">
                {t(`heroStep_${step}`, language)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-strip__card feature-strip__card--dark">
        <div className="feature-strip__avatars" aria-hidden="true">
          {CUSTOMERS.map((initial, i) => (
            <span
              key={initial}
              className="feature-strip__avatar"
              style={{ zIndex: CUSTOMERS.length - i }}
            >
              {initial}
            </span>
          ))}
        </div>
        <p className="feature-strip__social">{t('heroFeature3', language)}</p>
      </div>
    </section>
  );
}
