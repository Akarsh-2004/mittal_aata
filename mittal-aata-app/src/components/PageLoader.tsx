import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { ChakkiLoaderAnimation } from './ChakkiLoaderAnimation';

interface PageLoaderProps {
  exiting: boolean;
}

export function PageLoader({ exiting }: PageLoaderProps) {
  const { language } = useLanguage();

  return (
    <div
      className={`page-loader ${exiting ? 'page-loader--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={t('loading', language)}
    >
      <div className="page-loader__inner">
        <img
          src="/images/logo.png"
          alt="Mittal Aata Chakki"
          className="page-loader__logo"
          width={120}
          height={120}
        />
        <p className="page-loader__brand">MITTAL</p>
        <ChakkiLoaderAnimation />
        <p className="page-loader__text">{t('loading', language)}</p>
        <p className="page-loader__tagline">{t('tagline', language)}</p>
      </div>
    </div>
  );
}
