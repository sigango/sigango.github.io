import { Suspense, lazy, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'motion/react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { siteContent } from '../data/content';
import { Button } from '../components/ui/Button';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useLanguage } from '../hooks/useLanguage';
import { SectionBackground } from '../components/ui/SectionBackground';

const NeuralLattice = lazy(() =>
  import('../components/three/NeuralLattice').then((m) => ({ default: m.NeuralLattice }))
);

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  scholar: SiGooglescholar,
  email: FiMail,
};

function useWebGLSupport() {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    try {
      const c = document.createElement('canvas');
      const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}

export function Hero({ isDark }: { isDark: boolean }) {
  const prefersReduced = useReducedMotion();
  const webglSupported = useWebGLSupport();
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? 'hero-gradient-dark' : 'hero-gradient-light'
      }`}
    >
      {/* 3D Background (with WebGL fallback) */}
      <div className="absolute inset-0 z-0">
        
        {webglSupported && !prefersReduced ? (
          <div className="absolute inset-0 z-10">
            <Suspense fallback={null}>
              <Canvas
                camera={{ position: [0, 0, 9], fov: 55 }}
                dpr={[1, 1.5]}
                style={{ background: 'transparent' }}
                gl={{ antialias: false, alpha: true }}
              >
                <NeuralLattice />
              </Canvas>
            </Suspense>
          </div>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? 'radial-gradient(ellipse at 30% 40%, rgba(99,102,241,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(139,92,246,0.05) 0%, transparent 60%)'
                : 'radial-gradient(ellipse at 30% 40%, rgba(99,102,241,0.05) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(139,92,246,0.03) 0%, transparent 60%)',
            }}
          />
        )}
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-transparent via-surface-950/40 to-surface-950'
              : 'bg-gradient-to-b from-transparent via-white/40 to-white'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-sm font-mono font-medium tracking-wider uppercase mb-4 ${
              isDark ? 'text-primary-400' : 'text-primary-600'
            }`}
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className={isDark ? 'text-surface-50' : 'text-surface-900'}>
              {siteContent.name}
            </span>
          </motion.h1>

          <motion.h2
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text mb-6"
          >
            {siteContent.title}
          </motion.h2>

          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-8 ${
              isDark ? 'text-surface-200/70' : 'text-surface-700/80'
            }`}
          >
            {t.hero.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Button href="#projects" isDark={isDark}>
              {t.hero.viewProjects}
            </Button>
            <Button href="#research" variant="secondary" isDark={isDark}>
              {t.hero.viewResearch}
            </Button>
            <Button href="#contact" variant="secondary" isDark={isDark}>
              {t.hero.contactMe}
            </Button>
            <Button href={siteContent.cvUrl} variant="ghost" isDark={isDark} download>
              <FiFileText size={16} />
              {t.hero.downloadCV}
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3"
          >
            {siteContent.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.icon === 'email' ? undefined : '_blank'}
                  rel={link.icon === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={link.label}
                  className={`p-2.5 rounded-xl transition-all duration-200 ${
                    isDark
                      ? 'text-surface-200/60 hover:text-primary-400 hover:bg-white/5 border border-surface-700/50 hover:border-primary-500/30'
                      : 'text-surface-700/60 hover:text-primary-600 hover:bg-primary-50 border border-surface-200 hover:border-primary-300'
                  }`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown className={isDark ? 'text-surface-200/30' : 'text-surface-700/30'} size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
