import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe, FiFileText, FiBox } from 'react-icons/fi';
import { useLanguage } from '../../hooks/useLanguage';
import { ViewMode } from '../../hooks/useViewMode';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  viewMode: ViewMode;
  toggleViewMode: () => void;
}

export function Navbar({ isDark, toggleTheme, viewMode, toggleViewMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.research, href: '#research' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.aiLab, href: '#ai-lab' },
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
            ? 'bg-surface-950/85 backdrop-blur-md shadow-lg border-b border-surface-800/60'
            : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-lg font-extrabold gradient-text tracking-tight group-hover:scale-105 transition-transform">
              PLN
            </span>
            <span className="hidden sm:inline-block text-xs font-mono opacity-50 border-l pl-2 border-surface-700">
              Linh Phuc Ngo
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {viewMode === 'interactive' &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                    isDark
                      ? 'text-surface-200 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}

            {/* Mode Switcher Pill */}
            <button
              onClick={toggleViewMode}
              className={`ml-2 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border shadow-sm ${
                viewMode === 'hr'
                  ? 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white border-primary-400/50 shadow-primary-500/20 animate-pulse'
                  : isDark
                    ? 'bg-surface-800/80 text-emerald-400 border-emerald-500/40 hover:bg-surface-700'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
              }`}
              title={
                viewMode === 'hr'
                  ? 'Switch to 3D Interactive Showcase'
                  : 'Switch to HR / Recruiter Executive View (Zero 3D lag, fast text)'
              }
            >
              {viewMode === 'hr' ? (
                <>
                  <FiBox size={13} />
                  <span>{t.hrView.switchToInteractive}</span>
                </>
              ) : (
                <>
                  <FiFileText size={13} />
                  <span>{t.hrView.switchToHR}</span>
                </>
              )}
            </button>

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`ml-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                isDark ? 'text-surface-200 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FiGlobe size={14} />
              {lang.toUpperCase()}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                isDark ? 'text-surface-200 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={toggleViewMode}
              className={`px-2 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 border ${
                viewMode === 'hr'
                  ? 'bg-primary-600 text-white border-primary-400'
                  : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
              }`}
            >
              {viewMode === 'hr' ? <FiBox size={12} /> : <FiFileText size={12} />}
              <span>{viewMode === 'hr' ? '3D' : 'HR'}</span>
            </button>

            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer ${
                isDark ? 'text-surface-200' : 'text-slate-700'
              }`}
            >
              <FiGlobe size={13} />
              {lang.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-1.5 rounded-lg cursor-pointer ${isDark ? 'text-surface-200' : 'text-slate-700'}`}
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            {viewMode === 'interactive' && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className={`p-1.5 rounded-lg cursor-pointer ${isDark ? 'text-surface-200' : 'text-slate-700'}`}
              >
                {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && viewMode === 'interactive' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t ${
              isDark ? 'bg-surface-950/95 border-surface-800/80 backdrop-blur-md' : 'bg-white/95 border-slate-200 backdrop-blur-md'
            }`}
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
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
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
