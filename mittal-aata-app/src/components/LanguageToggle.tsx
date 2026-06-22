import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={t('language', language)}
    >
      <span className={`lang-toggle__option ${language === 'en' ? 'lang-toggle__active' : ''}`}>
        EN
      </span>
      <span className="lang-toggle__divider" aria-hidden="true">|</span>
      <span className={`lang-toggle__option lang-toggle__option--hi ${language === 'hi' ? 'lang-toggle__active' : ''}`}>
        HI
      </span>
    </button>
  );
}
