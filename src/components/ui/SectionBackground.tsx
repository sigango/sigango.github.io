/**
 * SectionBackground — reusable layered background with Unsplash AI background
 * image (neural-bg.jpg), gradient overlays, and optional animated lighting.
 *
 * The default image is from Unsplash (free to use, CC-compatible).
 * To swap for a different image: set `imageSrc` prop to another path in `public/`.
 * Example: <SectionBackground imageSrc="/backgrounds/custom.webp" />
 *
 * Current image: https://unsplash.com/photos/abstract-neural-network-technology
 */

interface SectionBackgroundProps {
  isDark: boolean;
  /** Optional image path. Default: /backgrounds/neural-bg.jpg */
  imageSrc?: string;
  /** Opacity of the pattern layer (0-1). Default: 0.06 */
  opacity?: number;
  /** Show animated subtle light sweep. Default: false */
  animated?: boolean;
  /** Additional className */
  className?: string;
}

export function SectionBackground({
  isDark,
  imageSrc = '/backgrounds/neural-bg.jpg',
  opacity = 0.06,
  animated = false,
  className = '',
}: SectionBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${imageSrc}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDark ? opacity : opacity * 0.5,
          filter: 'blur(1px)',
        }}
      />

      {/* Dark gradient overlay — vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at center, transparent 30%, rgba(6, 10, 20, 0.85) 100%)'
            : 'radial-gradient(ellipse at center, transparent 30%, rgba(255, 255, 255, 0.85) 100%)',
        }}
      />

      {/* Optional animated light sweep */}
      {animated && (
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, transparent 40%, rgba(99, 102, 241, 0.03) 50%, transparent 60%)'
              : 'linear-gradient(135deg, transparent 40%, rgba(99, 102, 241, 0.02) 50%, transparent 60%)',
            animation: 'lightSweep 8s ease-in-out infinite',
          }}
        />
      )}

      <style>{`
        @keyframes lightSweep {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
