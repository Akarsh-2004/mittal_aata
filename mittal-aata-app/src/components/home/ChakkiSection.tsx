import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../i18n/translations';
import { chakkiAisles } from '../../data/chakki';
import { IconChakki, IconArrowUpRight } from '../Icons';

export function ChakkiSection() {
  const { language } = useLanguage();

  return (
    <section className="chakki-section" aria-labelledby="chakki-section-title">
      <div className="chakki-section__header">
        <div className="chakki-section__intro">
          <span className="chakki-section__badge">
            <IconChakki size={16} />
            {t('chakkiBadge', language)}
          </span>
          <h2 id="chakki-section-title" className="chakki-section__title">
            {t('chakkiSectionTitle', language)}
          </h2>
          <p className="chakki-section__sub">{t('chakkiSectionSub', language)}</p>
          <p className="chakki-section__grains">{t('chakkiBringGrains', language)}</p>
        </div>
        <Link to="/chakki" className="chakki-section__cta">
          {t('heroExplore', language)}
          <IconArrowUpRight size={18} />
        </Link>
      </div>

      <div className="chakki-section__grid">
        {chakkiAisles.map((aisle) => (
          <Link
            key={aisle.id}
            to={`/chakki#${aisle.id}`}
            className="chakki-aisle-card"
            style={{ '--aisle-color': aisle.color } as CSSProperties}
          >
            <span className="chakki-aisle-card__icon" aria-hidden="true">
              {aisle.icon}
            </span>
            <h3 className="chakki-aisle-card__name">
              {t(`chakkiAisle_${aisle.id}`, language)}
            </h3>
            <p className="chakki-aisle-card__desc">
              {t(`chakkiAisleDesc_${aisle.id}`, language)}
            </p>
            <span className="chakki-aisle-card__link">
              {t('browseChakki', language)} →
            </span>
          </Link>
        ))}
      </div>

      <div className="chakki-section__steps" role="list" aria-label={t('chakkiStepsLabel', language)}>
        {(['grind', 'pack', 'deliver'] as const).map((step) => (
          <div key={step} className="chakki-section__step" role="listitem">
            <span className="chakki-section__step-dot" aria-hidden="true" />
            <span>{t(`heroStep_${step}`, language)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
