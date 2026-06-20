import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';
import { t, localized } from '../i18n/translations';

export function CategoriesPage() {
  const { language } = useLanguage();

  return (
    <div className="page categories-page">
      <h1 className="page-title">{t('categories', language)}</h1>
      <p className="page-subtitle">{t('trustedKitchens', language)}</p>
      <div className="category-list">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className="category-row"
            style={{ '--cat-color': cat.color } as React.CSSProperties}
          >
            <span className="category-row__icon" aria-hidden="true">
              {cat.icon}
            </span>
            <span className="category-row__name">
              {localized(cat.name, language)}
            </span>
            <span className="category-row__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
