interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  isDark: boolean;
}

export function SectionHeading({ title, subtitle, isDark }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${
          isDark ? 'text-surface-200/60' : 'text-surface-700/70'
        }`}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
    </div>
  );
}
