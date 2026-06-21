import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { t, localized } from '../i18n/translations';

export function CheckoutPage() {
  const { language } = useLanguage();
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [placed, setPlaced] = useState(false);

  if (items.length === 0 && !placed) {
    return (
      <div className="page checkout-page">
        <h1 className="page-title">{t('checkout', language)}</h1>
        <div className="empty-state">
          <p>{t('emptyCart', language)}</p>
          <Link to="/" className="btn btn--green btn--lg">
            {t('continueShopping', language)}
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="page checkout-page">
        <div className="checkout-success">
          <span className="checkout-success__icon" aria-hidden="true">✓</span>
          <h1 className="page-title">{t('orderPlaced', language)}</h1>
          <p className="checkout-success__sub">{t('orderPlacedSub', language)}</p>
          <Link to="/" className="btn btn--green btn--lg">
            {t('continueShopping', language)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page checkout-page">
      <button type="button" className="back-link" onClick={() => navigate('/cart')}>
        ← {t('back', language)}
      </button>
      <h1 className="page-title">{t('checkout', language)}</h1>

      <div className="checkout-layout">
        <form className="checkout-form glass-panel" onSubmit={handlePlaceOrder}>
          <h2 className="checkout-form__title">{t('deliveryDetails', language)}</h2>
          <label className="checkout-field">
            <span>{t('customerName', language)}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>
          <label className="checkout-field">
            <span>{t('phone', language)}</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="tel"
            />
          </label>
          <label className="checkout-field">
            <span>{t('address', language)}</span>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              rows={3}
              autoComplete="street-address"
            />
          </label>
          <p className="checkout-form__note">{t('paymentNote', language)}</p>
          <button type="submit" className="btn btn--gold btn--lg btn--full">
            {t('payNow', language)} · ₹{total}
          </button>
        </form>

        <aside className="checkout-summary glass-panel">
          <h2 className="checkout-summary__title">{t('orderSummary', language)}</h2>
          <ul className="checkout-summary__list">
            {items.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;
              return (
                <li key={item.productId} className="checkout-summary__item">
                  <span>{localized(product.name, language)}</span>
                  <span>
                    {item.quantity} {item.unit} · ₹{product.price * item.quantity}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="checkout-summary__total">
            <span>{t('total', language)}</span>
            <strong>₹{total}</strong>
          </div>
          <p className="checkout-summary__note">{t('deliveryNote', language)}</p>
        </aside>
      </div>
    </div>
  );
}
