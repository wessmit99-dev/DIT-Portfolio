import { Link } from 'react-router-dom';

export interface ButtonProps {
  readonly variant?: 'primary' | 'ghost' | 'outline';
  readonly children: React.ReactNode;
  readonly href?: string;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly type?: 'button' | 'submit';
  readonly disabled?: boolean;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-white text-black font-semibold tracking-widest hover:bg-gray-200 transition-colors',
  ghost:   'border border-white text-white tracking-widest hover:bg-white/10 transition-colors',
  outline: 'border text-white tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-colors',
};

const baseClasses = 'inline-flex items-center justify-center px-8 py-3 text-xs uppercase font-bold tracking-[0.15em] cursor-pointer disabled:opacity-50';

export default function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    }
    return <Link to={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
