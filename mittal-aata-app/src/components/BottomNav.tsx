import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';

export function BottomNav() {
  const { language } = useLanguage();
  const location = useLocation();

  const links = [
    { to: '/', label: t('home', language), icon: '🏠' },
    { to: '/categories', label: t('categories', language), icon: '📦' },
    { to: '/search', label: t('search', language), icon: '🔍' },
    { to: '/cart', label: t('cart', language), icon: '🛒' },
  ];

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {links.map(({ to, label, icon }) => {
        const isActive =
          to === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(to);
        return (
          <Link
            key={to}
            to={to}
            className={`bottom-nav__link ${isActive ? 'bottom-nav__link--active' : ''}`}
          >
            <span className="bottom-nav__icon" aria-hidden="true">
              {icon}
            </span>
            <span className="bottom-nav__label">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
