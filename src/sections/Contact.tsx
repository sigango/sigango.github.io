import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { useLanguage } from '../hooks/useLanguage';

const contactLinks = [
  { label: 'Email', value: siteContent.contactEmail, href: `mailto:${siteContent.contactEmail}`, icon: FiMail },
  { label: 'GitHub', value: 'sigango', href: 'https://github.com/sigango', icon: FiGithub },
  { label: 'LinkedIn', value: 'linhngo1012', href: 'https://linkedin.com/in/linhngo1012/', icon: FiLinkedin },
  { label: 'Google Scholar', value: 'Phuc Linh Ngo', href: 'https://scholar.google.com/citations?user=oNDaKAQAAAAJ&hl=en', icon: SiGooglescholar },
];

export function Contact({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="contact" className={`py-24 section-padding ${isDark ? 'bg-surface-900/50' : 'bg-surface-50'}`}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="space-y-6">
              <p className={`text-base leading-relaxed ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>
                {siteContent.contactMessage}
              </p>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href}
                    target={link.label === 'Email' ? undefined : '_blank'}
                    rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-surface-100'}`}
                  >
                    <div className={`p-2.5 rounded-xl transition-colors ${isDark ? 'bg-surface-800 text-surface-200/60 group-hover:text-primary-400 group-hover:bg-primary-500/10' : 'bg-surface-100 text-surface-700/60 group-hover:text-primary-600 group-hover:bg-primary-50'}`}>
                      <link.icon size={18} />
                    </div>
                    <div>
                      <p className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-surface-200/40' : 'text-surface-700/40'}`}>{link.label}</p>
                      <p className={`text-sm font-medium ${isDark ? 'text-surface-200' : 'text-surface-900'}`}>{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
              className={`rounded-xl p-6 space-y-4 ${isDark ? 'bg-surface-800/60 border border-surface-700/50' : 'bg-white border border-surface-200 shadow-sm'}`}>
              <div>
                <label htmlFor="contact-name" className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-surface-200' : 'text-surface-900'}`}>{t.contact.name}</label>
                <input id="contact-name" type="text" name="name" required
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 ${isDark ? 'bg-surface-900 border border-surface-700 text-surface-100 focus:border-primary-500 placeholder:text-surface-200/30' : 'bg-surface-50 border border-surface-200 text-surface-900 focus:border-primary-500 placeholder:text-surface-700/30'}`}
                  placeholder={t.contact.namePlaceholder} />
              </div>
              <div>
                <label htmlFor="contact-email" className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-surface-200' : 'text-surface-900'}`}>{t.contact.email}</label>
                <input id="contact-email" type="email" name="email" required
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 ${isDark ? 'bg-surface-900 border border-surface-700 text-surface-100 focus:border-primary-500 placeholder:text-surface-200/30' : 'bg-surface-50 border border-surface-200 text-surface-900 focus:border-primary-500 placeholder:text-surface-700/30'}`}
                  placeholder={t.contact.emailPlaceholder} />
              </div>
              <div>
                <label htmlFor="contact-message" className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-surface-200' : 'text-surface-900'}`}>{t.contact.message}</label>
                <textarea id="contact-message" name="message" rows={4} required
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none ${isDark ? 'bg-surface-900 border border-surface-700 text-surface-100 focus:border-primary-500 placeholder:text-surface-200/30' : 'bg-surface-50 border border-surface-200 text-surface-900 focus:border-primary-500 placeholder:text-surface-700/30'}`}
                  placeholder={t.contact.messagePlaceholder} />
              </div>
              <Button variant="primary" isDark={isDark} className="w-full">
                <FiSend size={14} /> {t.contact.send}
              </Button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
