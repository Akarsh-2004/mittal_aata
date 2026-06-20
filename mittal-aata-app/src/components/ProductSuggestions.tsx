import { getProductById } from '../data/products';
import type { SuggestionGroup } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { localized } from '../i18n/translations';
import { ProductCard } from './ProductCard';

interface ProductSuggestionsProps {
  groups: SuggestionGroup[];
}

export function ProductSuggestions({ groups }: ProductSuggestionsProps) {
  const { language } = useLanguage();

  if (groups.length === 0) return null;

  return (
    <section className="suggestions" aria-label="Product suggestions">
      {groups.map((group) => (
        <div key={group.type} className="suggestions__group">
          <h2 className="suggestions__title">
            {localized(group.title, language)}
          </h2>
          <div className="suggestions__scroll">
            {group.productIds.map((id) => {
              const product = getProductById(id);
              if (!product) return null;
              return (
                <div key={id} className="suggestions__item">
                  <ProductCard product={product} compact />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
