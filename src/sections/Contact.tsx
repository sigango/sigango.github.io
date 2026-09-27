import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCopy, FiCheck } from 'react-icons/fi';
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
  { label: 'Google Scholar', value: 'Linh Phuc Ngo', href: 'https://scholar.google.com/citations?user=oNDaKAQAAAAJ&hl=en', icon: SiGooglescholar },
];

export function Contact({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteContent.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFallbackSubmit = (e: React.FormEvent) => {
    if (!siteContent.formspreeId) {
      e.preventDefault();
      const subject = encodeURIComponent(`Collaboration Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Linh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      );
      window.location.href = `mailto:${siteContent.contactEmail}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contact" className={`py-24 section-padding ${isDark ? 'bg-surface-900/50' : 'bg-surface-50'}`}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="space-y-6">
              <p className={`text-base leading-relaxed ${isDark ? 'text-surface-200/80' : 'text-surface-700'}`}>
                {siteContent.contactMessage}
              </p>
              
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === 'Email' ? undefined : '_blank'}
                    rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group border ${
                      isDark
                        ? 'bg-surface-850/50 border-surface-800 hover:border-primary-500/40 hover:bg-surface-800'
                        : 'bg-white border-slate-200 hover:border-primary-400 hover:shadow-sm'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isDark
                          ? 'bg-surface-800 text-surface-200/60 group-hover:text-primary-400 group-hover:bg-primary-500/10'
                          : 'bg-surface-100 text-surface-700/60 group-hover:text-primary-600 group-hover:bg-primary-50'
                      }`}
                    >
                      <link.icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-surface-400' : 'text-slate-500'}`}>
                        {link.label}
                      </p>
                      <p className={`text-sm font-medium truncate ${isDark ? 'text-surface-100' : 'text-slate-900'}`}>
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Direct copy email button */}
              <button
                onClick={handleCopyEmail}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : isDark
                      ? 'bg-surface-800 text-surface-300 border-surface-700 hover:text-white hover:bg-surface-700'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {copied ? <FiCheck size={14} className="text-emerald-400" /> : <FiCopy size={14} />}
                <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <form
              action={siteContent.formspreeId ? `https://formspree.io/f/${siteContent.formspreeId}` : undefined}
              method={siteContent.formspreeId ? 'POST' : undefined}
              onSubmit={handleFallbackSubmit}
              className={`rounded-2xl p-6 sm:p-8 space-y-4 border ${
                isDark ? 'bg-surface-800/60 border-surface-700/50 shadow-xl' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-surface-300' : 'text-slate-700'}`}
                >
                  {t.contact.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 border ${
                    isDark
                      ? 'bg-surface-900 border-surface-700 text-surface-100 focus:border-primary-500 placeholder:text-surface-600'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-primary-500 placeholder:text-slate-400'
                  }`}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-surface-300' : 'text-slate-700'}`}
                >
                  {t.contact.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 border ${
                    isDark
                      ? 'bg-surface-900 border-surface-700 text-surface-100 focus:border-primary-500 placeholder:text-surface-600'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-primary-500 placeholder:text-slate-400'
                  }`}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-surface-300' : 'text-slate-700'}`}
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none border ${
                    isDark
                      ? 'bg-surface-900 border-surface-700 text-surface-100 focus:border-primary-500 placeholder:text-surface-600'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-primary-500 placeholder:text-slate-400'
                  }`}
                  placeholder={t.contact.messagePlaceholder}
                />
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
