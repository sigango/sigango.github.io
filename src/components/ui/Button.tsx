import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  isDark?: boolean;
  download?: boolean;
  target?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  isDark = true,
  download,
  target,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30',
    secondary: isDark
      ? 'bg-surface-800 text-surface-100 border border-surface-700 hover:bg-surface-700'
      : 'bg-surface-100 text-surface-900 border border-surface-200 hover:bg-surface-200',
    ghost: isDark
      ? 'text-surface-200 hover:bg-white/5'
      : 'text-surface-700 hover:bg-surface-100',
  };

  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={base} {...motionProps}>
      {children}
    </motion.button>
  );
}
