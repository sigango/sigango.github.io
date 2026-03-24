interface ChipProps {
  label: string;
  isDark: boolean;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md';
}

export function Chip({
  label,
  isDark,
  variant = 'default',
  size = 'sm',
}: ChipProps) {
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
  };

  const variantClasses = {
    default: isDark
      ? 'bg-primary-500/10 text-primary-300 border border-primary-500/20'
      : 'bg-primary-50 text-primary-700 border border-primary-200',
    outline: isDark
      ? 'border border-surface-700 text-surface-200'
      : 'border border-surface-200 text-surface-700',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
