interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  step = 1,
}: QuantityStepperProps) {
  return (
    <div className="qty-stepper">
      <button
        type="button"
        className="qty-stepper__btn"
        onClick={() => onChange(Math.max(min, value - step))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="qty-stepper__value">{value}</span>
      <button
        type="button"
        className="qty-stepper__btn"
        onClick={() => onChange(value + step)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
