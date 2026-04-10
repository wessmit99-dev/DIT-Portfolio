export interface BadgeProps {
  readonly label: string;
  readonly className?: string;
}

export default function Badge({ label, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs uppercase tracking-widest font-medium ${className}`}
      style={{ backgroundColor: 'rgba(0,229,255,0.10)', color: '#c3f5ff' }}
    >
      {label}
    </span>
  );
}
