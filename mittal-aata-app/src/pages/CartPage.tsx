import { Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { t, localized } from '../i18n/translations';
import { ProductImage } from '../components/ProductImage';

export function CartPage() {
  const { language } = useLanguage();
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="page cart-page">
        <h1 className="page-title">{t('cart', language)}</h1>
        <div className="empty-state">
          <span className="empty-state__icon" aria-hidden="true">🛒</span>
          <p>{t('emptyCart', language)}</p>
          <Link to="/" className="btn btn--green btn--lg">
            {t('continueShopping', language)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <h1 className="page-title">{t('cart', language)}</h1>
      <p className="cart-page__count">
        {items.length} {items.length === 1 ? t('item', language) : t('items', language)}
      </p>

      <ul className="cart-list">
        {items.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          const lineTotal = product.price * item.quantity;

          return (
            <li key={item.productId} className="cart-item">
              <Link to={`/product/${product.id}`} className="cart-item__image">
                <ProductImage
                  categoryId={product.categoryId}
                  name={localized(product.name, language)}
                  size="sm"
                />
              </Link>
              <div className="cart-item__details">
                <Link to={`/product/${product.id}`} className="cart-item__name">
                  {localized(product.name, language)}
                </Link>
                <p className="cart-item__meta">
                  {item.quantity} {item.unit} × ₹{product.price}
                </p>
                <div className="cart-item__controls">
                  <button
                    type="button"
                    className="cart-item__qty-btn"
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="cart-item__qty">{item.quantity}</span>
                  <button
                    type="button"
                    className="cart-item__qty-btn"
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => removeItem(item.productId)}
                  >
                    {t('remove', language)}
                  </button>
                </div>
              </div>
              <span className="cart-item__total">₹{lineTotal}</span>
            </li>
          );
        })}
      </ul>

      <div className="cart-summary">
        <div className="cart-summary__row">
          <span>{t('total', language)}</span>
          <span className="cart-summary__total">₹{total}</span>
        </div>
        <p className="cart-summary__note">{t('deliveryNote', language)}</p>

        <Link to="/checkout" className="btn btn--gold btn--lg btn--full">
          {t('checkout', language)} · ₹{total}
        </Link>
        <button
          type="button"
          className="btn btn--outline btn--full"
          onClick={clearCart}
        >
          {t('clearCart', language)}
        </button>
      </div>
    </div>
  );
}
