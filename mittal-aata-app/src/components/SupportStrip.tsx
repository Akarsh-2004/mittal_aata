import { useLanguage } from '../context/LanguageContext';
import { t, localized } from '../i18n/translations';
import { supportContact } from '../data/contact';
import { IconPhone, IconMail, IconMapPin, IconClock } from './Icons';

export function SupportStrip() {
  const { language } = useLanguage();
  const storeName = t('appName', language);
  const whatsappMessage = encodeURIComponent(
    language === 'hi'
      ? `नमस्ते ${storeName}, मुझे ऑर्डर/सामान के बारे में सहायता चाहिए।`
      : `Hello ${storeName}, I need help with my order or products.`
  );

  return (
    <section className="support-strip" aria-labelledby="support-strip-title">
      <div className="support-strip__inner">
        <div className="support-strip__intro">
          <p className="support-strip__eyebrow">{t('supportEyebrow', language)}</p>
          <h2 id="support-strip-title" className="support-strip__title">
            {t('supportTitle', language)}
          </h2>
          <p className="support-strip__sub">{t('supportSub', language)}</p>
          <div className="support-strip__actions">
            <a href={`tel:${supportContact.phoneTel}`} className="support-strip__btn support-strip__btn--primary">
              <IconPhone size={18} />
              {t('callSupport', language)}
            </a>
            <a
              href={`https://wa.me/${supportContact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="support-strip__btn support-strip__btn--outline"
            >
              {t('chatSupport', language)}
            </a>
          </div>
        </div>

        <ul className="support-strip__grid">
          <li className="support-strip__card">
            <span className="support-strip__icon" aria-hidden="true">
              <IconPhone size={22} />
            </span>
            <div>
              <p className="support-strip__label">{t('supportPhone', language)}</p>
              <a href={`tel:${supportContact.phoneTel}`} className="support-strip__value">
                {supportContact.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="support-strip__card">
            <span className="support-strip__icon" aria-hidden="true">
              <IconMail size={22} />
            </span>
            <div>
              <p className="support-strip__label">{t('supportEmail', language)}</p>
              <a href={`mailto:${supportContact.email}`} className="support-strip__value">
                {supportContact.email}
              </a>
            </div>
          </li>
          <li className="support-strip__card">
            <span className="support-strip__icon" aria-hidden="true">
              <IconMapPin size={22} />
            </span>
            <div>
              <p className="support-strip__label">{t('supportStore', language)}</p>
              <a
                href={supportContact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="support-strip__value support-strip__value--multiline"
              >
                {localized(supportContact.address, language)}
              </a>
            </div>
          </li>
          <li className="support-strip__card">
            <span className="support-strip__icon" aria-hidden="true">
              <IconClock size={22} />
            </span>
            <div>
              <p className="support-strip__label">{t('supportHours', language)}</p>
              <p className="support-strip__value support-strip__value--static">
                {localized(supportContact.hours, language)}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
