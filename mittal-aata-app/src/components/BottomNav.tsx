import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { t } from '../i18n/translations';
import { IconHome, IconChakki, IconSearch, IconCart } from './Icons';

const NAV_ITEMS = [
  { to: '/', icon: IconHome, labelKey: 'home' as const, exact: true },
  { to: '/chakki', icon: IconChakki, labelKey: 'chakkiNav' as const },
  { to: '/search', icon: IconSearch, labelKey: 'search' as const },
  { to: '/cart', icon: IconCart, labelKey: 'cart' as const },
];

export function BottomNav() {
  const { language } = useLanguage();
  const { itemCount } = useCart();
  const location = useLocation();

  const isActive = (to: string, exact?: boolean) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {NAV_ITEMS.map(({ to, icon: Icon, labelKey, exact }) => {
        const active = isActive(to, exact);
        const showBadge = to === '/cart' && itemCount > 0;

        return (
          <Link
            key={to}
            to={to}
            className={`bottom-nav__link ${active ? 'bottom-nav__link--active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="bottom-nav__icon-wrap">
              <Icon size={22} />
              {showBadge && (
                <span className="bottom-nav__badge" aria-label={`${itemCount} items`}>
                  {itemCount}
                </span>
              )}
            </span>
            <span className="bottom-nav__label">{t(labelKey, language)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
