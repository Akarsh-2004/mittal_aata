import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';

type BrandLogoProps = {
  size?: number;
  variant?: 'gold' | 'green' | 'cream';
  className?: string;
};

const strokeColors = {
  gold: '#C4973A',
  green: '#1E3D20',
  cream: '#F7F0E0',
};

export function BrandLogo({ size = 80, variant = 'gold', className }: BrandLogoProps) {
  const stroke = strokeColors[variant];
  const handleStroke = variant === 'green' ? '#C4973A' : stroke;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="36" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <circle cx="40" cy="40" r="24" fill="none" stroke={stroke} strokeWidth="1.2" />
      <line x1="40" y1="16" x2="40" y2="24" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="56.97" y1="23.03" x2="51.31" y2="28.69" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="64" y1="40" x2="56" y2="40" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="56.97" y1="56.97" x2="51.31" y2="51.31" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="40" y1="64" x2="40" y2="56" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="23.03" y1="56.97" x2="28.69" y2="51.31" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="16" y1="40" x2="24" y2="40" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="23.03" y1="23.03" x2="28.69" y2="28.69" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <circle cx="40" cy="40" r="10" fill="none" stroke={stroke} strokeWidth="1.2" />
      <circle cx="40" cy="40" r="3" fill={stroke} />
      <line x1="40" y1="16" x2="58" y2="16" stroke={handleStroke} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="58" cy="16" r="2.5" fill={handleStroke} />
    </svg>
  );
}

type BrandWordmarkProps = {
  compact?: boolean;
  light?: boolean;
  className?: string;
};

export function BrandWordmark({ compact, light, className }: BrandWordmarkProps) {
  const { language } = useLanguage();

  return (
    <div className={`brand-wordmark ${light ? 'brand-wordmark--light' : ''} ${compact ? 'brand-wordmark--compact' : ''} ${className ?? ''}`}>
      <div className="brand-wordmark__name">MITTAL</div>
      <div className="brand-wordmark__line" aria-hidden="true" />
      <div className="brand-wordmark__sub">{t('brandSubtitle', language)}</div>
    </div>
  );
}
