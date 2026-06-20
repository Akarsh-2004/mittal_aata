import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { IconSearch } from './Icons';

interface SearchBarProps {
  autoFocus?: boolean;
  initialQuery?: string;
  onSearch?: (query: string) => void;
  compact?: boolean;
}

export function SearchBar({
  autoFocus,
  initialQuery = '',
  onSearch,
  compact,
}: SearchBarProps) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (onSearch) {
      onSearch(q);
    } else if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <form
      className={`search-bar ${compact ? 'search-bar--compact' : ''}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <span className="search-bar__icon" aria-hidden="true">
        <IconSearch size={18} />
      </span>
      <input
        type="search"
        className="search-bar__input"
        placeholder={t('searchPlaceholder', language)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus={autoFocus}
        aria-label={t('search', language)}
      />
      {query && (
        <button
          type="submit"
          className="search-bar__btn"
          aria-label={t('search', language)}
        >
          {t('search', language)}
        </button>
      )}
    </form>
  );
}
