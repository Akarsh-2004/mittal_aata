import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { t } from '../i18n/translations';
import { LanguageToggle } from './LanguageToggle';
import { SearchBar } from './SearchBar';
import { IconCart } from './Icons';
import { BrandWordmark } from './BrandLogo';

interface HeaderProps {
  showSearch?: boolean;
  overlay?: boolean;
}

export function Header({ showSearch = true, overlay = false }: HeaderProps) {
  const { language } = useLanguage();
  const { itemCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('home', language), exact: true },
    { to: '/categories', label: t('categories', language) },
    { to: '/search', label: t('search', language) },
  ];

  const isActive = (to: string, exact?: boolean) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <header className={`header ${overlay ? 'header--overlay' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__brand">
          <img
            src="/images/logo.png"
            alt="Mittal Aata Chakki"
            className="header__logo"
            width={44}
            height={44}
          />
          <BrandWordmark compact light={overlay} className="header__brand-text" />
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map(({ to, label, exact }) => (
            <Link
              key={to}
              to={to}
              className={`header__nav-link ${isActive(to, exact) ? 'header__nav-link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          {showSearch && (
            <div className="header__search-inline">
              <SearchBar compact />
            </div>
          )}
          <LanguageToggle />
          <Link to="/cart" className="header__cart" aria-label={t('cart', language)}>
            <IconCart size={22} />
            {itemCount > 0 && (
              <span className="header__cart-count">{itemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
