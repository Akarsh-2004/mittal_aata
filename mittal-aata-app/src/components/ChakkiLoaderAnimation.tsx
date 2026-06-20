export function ChakkiLoaderAnimation() {
  return (
    <svg
      className="page-loader__chakki"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="118" stroke="#C4973A" strokeWidth="1.5" opacity="0.55" />
      <g className="page-loader__chakki-rotor">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 120 120"
          to="360 120 120"
          dur="1.8s"
          repeatCount="indefinite"
        />
        <circle cx="120" cy="120" r="78" stroke="#C4973A" strokeWidth="2.5" />
        <line x1="120" y1="50" x2="120" y2="68" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="120" y1="172" x2="120" y2="190" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="120" x2="68" y2="120" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="172" y1="120" x2="190" y2="120" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="69" y1="69" x2="81" y2="81" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="159" y1="159" x2="171" y2="171" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="171" y1="69" x2="159" y2="81" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="81" y1="159" x2="69" y2="171" stroke="#C4973A" strokeWidth="3" strokeLinecap="round" />
        <line x1="120" y1="120" x2="120" y2="78" stroke="#C4973A" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="78" x2="188" y2="38" stroke="#C4973A" strokeWidth="4" strokeLinecap="round" />
        <circle cx="188" cy="38" r="9" fill="#C4973A" />
        <circle cx="120" cy="120" r="16" fill="#C4973A" />
      </g>
    </svg>
  );
}
