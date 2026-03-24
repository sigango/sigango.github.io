import { FiExternalLink, FiBookOpen } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { useLanguage } from '../hooks/useLanguage';

export function Research({ isDark }: { isDark: boolean }) {
  const pub = siteContent.publication;
  const { t } = useLanguage();

  return (
    <section id="research" className={`py-24 section-padding ${isDark ? 'bg-surface-900/50' : 'bg-surface-50'}`}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.research.title} subtitle={t.research.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className={`rounded-2xl p-8 transition-all duration-300 gradient-border-top ${
            isDark ? 'bg-surface-800/60 border border-surface-700/50 hover:shadow-lg hover:shadow-primary-500/5' : 'bg-white border border-surface-200 shadow-sm hover:shadow-md'
          }`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
                <FiBookOpen className="text-primary-500" size={24} />
              </div>
              <div>
                <p className={`text-xs font-mono uppercase tracking-wider mb-1 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                  {t.research.publishedPaper} · {pub.year}
                </p>
                <h3 className={`text-xl font-semibold mb-1 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>{pub.title}</h3>
                <p className={`text-sm ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{pub.authors}</p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>{pub.summary}</p>
            <p className={`text-sm font-medium mb-6 ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{pub.venue}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={pub.url} variant="primary" size="sm" isDark={isDark} target="_blank">
                <FiExternalLink size={14} /> {t.research.readPaper}
              </Button>
              <Button href={pub.scholarUrl} variant="secondary" size="sm" isDark={isDark} target="_blank">
                <SiGooglescholar size={14} /> {t.research.googleScholar}
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className={`mt-8 text-center p-6 rounded-xl border border-dashed ${isDark ? 'border-surface-700 text-surface-200/30' : 'border-surface-200 text-surface-700/30'}`}>
            <p className="text-sm font-medium">{t.research.moreComingSoon}</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
