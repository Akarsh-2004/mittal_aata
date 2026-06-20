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
      <span className={language === 'en' ? 'lang-toggle__active' : ''}>
        EN
      </span>
      <span className="lang-toggle__divider">|</span>
      <span className={language === 'hi' ? 'lang-toggle__active' : ''}>
        हि
      </span>
    </button>
  );
}
