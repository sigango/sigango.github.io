import { siteContent } from '../../data/content';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { useLanguage } from '../../hooks/useLanguage';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  scholar: SiGooglescholar,
  email: FiMail,
};

export function Footer({ isDark }: { isDark: boolean }) {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className={`border-t gradient-border-top ${isDark ? 'border-surface-800 bg-surface-950' : 'border-surface-200 bg-surface-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold gradient-text">{siteContent.name}</p>
            <p className={`text-sm mt-1 ${isDark ? 'text-surface-200/60' : 'text-surface-700/60'}`}>{siteContent.title}</p>
          </div>
          <div className="flex items-center gap-4">
            {siteContent.socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.label} href={link.url}
                  target={link.icon === 'email' ? undefined : '_blank'}
                  rel={link.icon === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={link.label}
                  className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'text-surface-200/60 hover:text-primary-400 hover:bg-white/5' : 'text-surface-700/60 hover:text-primary-600 hover:bg-surface-100'}`}
                ><Icon size={20} /></a>
              );
            })}
          </div>
        </div>
        <div className={`mt-8 pt-6 border-t text-center text-sm ${isDark ? 'border-surface-800 text-surface-200/40' : 'border-surface-200 text-surface-700/40'}`}>
          <p>© {year} {siteContent.name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
