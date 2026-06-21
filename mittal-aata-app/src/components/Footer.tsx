import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand">
          <span className="site-footer__name">MITTAL</span>
          <span className="site-footer__sub">{t('appName', language)}</span>
          <p className="site-footer__tagline">{t('tagline', language)}</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link to="/">{t('home', language)}</Link>
          <Link to="/categories">{t('categories', language)}</Link>
          <Link to="/search">{t('search', language)}</Link>
          <Link to="/cart">{t('cart', language)}</Link>
        </nav>
        <p className="site-footer__note">
          {t('since1994', language)} · {t('deliveryNote', language)}
        </p>
        <p className="site-footer__copy">© {year} {t('appName', language)}</p>
      </div>
    </footer>
  );
}
