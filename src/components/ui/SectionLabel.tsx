export interface SectionLabelProps {
  readonly label: string;
  readonly className?: string;
}

export default function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`block text-xs uppercase tracking-[0.3em] font-medium mb-4 ${className}`}
      style={{ color: '#00e5ff' }}
    >
      {label}
    </span>
  );
}
