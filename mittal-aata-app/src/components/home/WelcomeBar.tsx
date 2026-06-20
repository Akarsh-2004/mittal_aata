import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../i18n/translations';
import { IconSearch } from '../Icons';

export function WelcomeBar() {
  const { language } = useLanguage();

  return (
    <div className="welcome-bar">
      <div className="welcome-bar__text">
        <p className="welcome-bar__greeting">{t('welcome', language)}</p>
        <p className="welcome-bar__sub">{t('welcomeSub', language)}</p>
      </div>
      <Link to="/search" className="welcome-bar__search">
        <IconSearch size={20} />
        <span>{t('search', language)}</span>
      </Link>
    </div>
  );
}
