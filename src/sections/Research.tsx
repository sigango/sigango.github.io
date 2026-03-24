import { FiExternalLink, FiBookOpen } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { siteContent, researchThemes } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { SpotlightCard } from '../components/animations/SpotlightCard';
import { useLanguage } from '../hooks/useLanguage';

export function Research({ isDark }: { isDark: boolean }) {
  const pub = siteContent.publication;
  const { t } = useLanguage();

  return (
    <section id="research" className={`py-24 section-padding ${isDark ? 'bg-surface-900/50' : 'bg-surface-50'}`}>
      <div className="max-w-5xl mx-auto space-y-16">
        <AnimateOnScroll>
          <SectionHeading title={t.research.title} subtitle={t.research.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        {/* Research Themes */}
        <div className="space-y-8">
          <AnimateOnScroll delay={0.1}>
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                {t.research.themesTitle}
              </h3>
              <p className={`text-sm mt-2 ${isDark ? 'text-surface-200/60' : 'text-surface-700/60'}`}>
                {t.research.themesSubtitle}
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchThemes.map((theme, idx) => (
              <AnimateOnScroll key={theme.id} delay={0.1 + idx * 0.1}>
                <SpotlightCard isDark={isDark} className="h-full p-8 flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner ${
                    isDark ? 'bg-surface-900/50 shadow-black/50' : 'bg-surface-100 shadow-surface-200/50'
                  }`}>
                    {theme.icon}
                  </div>
                  <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                    {theme.title}
                  </h4>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>
                    {theme.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {theme.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${
                        isDark 
                          ? 'bg-primary-500/10 text-primary-300 border-primary-500/20' 
                          : 'bg-primary-50 text-primary-700 border-primary-200'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Selected Publications */}
        <div className="space-y-8 pt-8 border-t border-surface-200/10 dark:border-surface-700/50">
          <AnimateOnScroll delay={0.2}>
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                {t.research.publicationTitle}
              </h3>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <SpotlightCard isDark={isDark} className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-3 rounded-xl ${isDark ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
                  <FiBookOpen className="text-primary-500" size={24} />
                </div>
                <div>
                  <p className={`text-xs font-mono uppercase tracking-wider mb-1.5 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                    {t.research.publishedPaper} · {pub.year}
                  </p>
                  <h3 className={`text-xl md:text-2xl font-semibold mb-2 leading-tight ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>{pub.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-surface-200/60' : 'text-surface-700/60'}`}>{pub.authors}</p>
                </div>
              </div>
              
              <div className={`p-5 rounded-xl mb-6 ${isDark ? 'bg-surface-900/50 border border-surface-700/50' : 'bg-surface-50 border border-surface-200'}`}>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-200/80' : 'text-surface-700'}`}>{pub.summary}</p>
              </div>
              
              <p className={`text-sm font-medium mb-6 ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{pub.venue}</p>
              
              <div className="flex flex-wrap gap-3">
                <Button href={pub.url} variant="primary" size="sm" isDark={isDark} target="_blank">
                  <FiExternalLink size={14} /> {t.research.readPaper}
                </Button>
                <Button href={pub.scholarUrl} variant="secondary" size="sm" isDark={isDark} target="_blank">
                  <SiGooglescholar size={14} /> {t.research.googleScholar}
                </Button>
              </div>
            </SpotlightCard>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <div className={`mt-8 text-center p-6 rounded-xl border border-dashed ${isDark ? 'border-surface-700 text-surface-200/30' : 'border-surface-200 text-surface-700/30'}`}>
              <p className="text-sm font-medium">{t.research.moreComingSoon}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
