import { useState } from 'react';
import type { QuantityPreset, Unit } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { t, localized } from '../i18n/translations';

interface QuantitySelectorProps {
  presets: QuantityPreset[];
  defaultUnit: Unit;
  onSelect: (quantity: number, unit: Unit) => void;
  selectedQuantity?: number;
  labelKey?: 'selectQuantity' | 'selectSize';
}

function formatPreset(preset: QuantityPreset, lang: 'en' | 'hi'): string {
  if (preset.label) return localized(preset.label, lang);
  const unitLabels: Record<Unit, { en: string; hi: string }> = {
    kg: { en: 'kg', hi: 'kg' },
    g: { en: 'g', hi: 'g' },
    L: { en: 'L', hi: 'L' },
    ml: { en: 'ml', hi: 'ml' },
    piece: { en: 'pc', hi: 'pc' },
    pack: { en: 'pack', hi: 'pack' },
  };
  return `${preset.value} ${unitLabels[preset.unit][lang]}`;
}

export function QuantitySelector({
  presets,
  defaultUnit,
  onSelect,
  selectedQuantity,
  labelKey = 'selectQuantity',
}: QuantitySelectorProps) {
  const { language } = useLanguage();
  const [customMode, setCustomMode] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const handlePresetClick = (preset: QuantityPreset) => {
    setCustomMode(false);
    onSelect(preset.value, preset.unit);
  };

  const handleCustomSubmit = () => {
    const val = parseFloat(customValue);
    if (!isNaN(val) && val > 0) {
      onSelect(val, defaultUnit);
    }
  };

  return (
    <div className="qty-selector">
      <p className="qty-selector__label">{t(labelKey, language)}</p>
      <div className="qty-selector__presets" role="group" aria-label={t('quantity', language)}>
        {presets.map((preset) => {
          const isSelected =
            !customMode && selectedQuantity === preset.value;
          return (
            <button
              key={`${preset.value}-${preset.unit}`}
              type="button"
              className={`qty-selector__preset ${isSelected ? 'qty-selector__preset--active' : ''}`}
              onClick={() => handlePresetClick(preset)}
            >
              {formatPreset(preset, language)}
            </button>
          );
        })}
        <button
          type="button"
          className={`qty-selector__preset qty-selector__preset--custom ${customMode ? 'qty-selector__preset--active' : ''}`}
          onClick={() => setCustomMode(true)}
        >
          {t('customQuantity', language)}
        </button>
      </div>
      {customMode && (
        <div className="qty-selector__custom">
          <input
            type="number"
            className="qty-selector__custom-input"
            placeholder={`0 ${defaultUnit}`}
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            min="0.1"
            step="0.5"
            inputMode="decimal"
            aria-label={t('customQuantity', language)}
          />
          <button
            type="button"
            className="btn btn--gold btn--sm"
            onClick={handleCustomSubmit}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}
