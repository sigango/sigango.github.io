import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../../hooks/useLanguage';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.research, href: '#research' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.aiLab, href: '#ai-lab' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-surface-950/60 backdrop-blur-md shadow-lg border-b border-surface-800/50'
            : 'bg-white/80 backdrop-blur-md shadow-lg border-b border-surface-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-lg font-bold gradient-text tracking-tight">
            PLN
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200
                  ${isDark
                    ? 'text-surface-200 hover:text-white hover:bg-white/5'
                    : 'text-surface-700 hover:text-surface-900 hover:bg-surface-100'
                  }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`ml-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                isDark
                  ? 'text-surface-200 hover:bg-white/10'
                  : 'text-surface-700 hover:bg-surface-100'
              }`}
            >
              <FiGlobe size={14} />
              {lang.toUpperCase()}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`ml-1 p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                isDark
                  ? 'text-surface-200 hover:bg-white/10'
                  : 'text-surface-700 hover:bg-surface-100'
              }`}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer ${
                isDark ? 'text-surface-200' : 'text-surface-700'
              }`}
            >
              <FiGlobe size={14} />
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg cursor-pointer ${isDark ? 'text-surface-200' : 'text-surface-700'}`}
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-lg cursor-pointer ${isDark ? 'text-surface-200' : 'text-surface-700'}`}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card border-t border-white/5"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isDark
                      ? 'text-surface-200 hover:text-white hover:bg-white/5'
                      : 'text-surface-700 hover:text-surface-900 hover:bg-surface-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
