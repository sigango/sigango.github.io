import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Chip } from '../components/ui/Chip';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { useLanguage } from '../hooks/useLanguage';

export function Experience({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="experience" className={`py-24 section-padding ${isDark ? 'bg-surface-900/50' : 'bg-surface-50'}`}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <div className="relative">
          <div className={`absolute left-4 md:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-gradient-to-b from-primary-500/30 via-violet-500/20 to-accent-500/10' : 'bg-surface-200'}`} />

          <div className="space-y-12">
            {siteContent.experiences.map((exp, index) => (
              <AnimateOnScroll key={exp.id} delay={index * 0.15}>
                <div className="relative pl-12 md:pl-20">
                  <div className={`absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full border-2 ${isDark ? 'bg-primary-500 border-surface-950' : 'bg-primary-500 border-white'}`} />

                  <div className={`rounded-xl p-6 transition-all duration-300 card-gradient-hover ${
                    isDark
                      ? 'bg-surface-800/60 border border-surface-700/50 hover:shadow-lg hover:shadow-primary-500/5'
                      : 'bg-white border border-surface-200 shadow-sm hover:shadow-lg'
                  }`}>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className={`text-lg font-semibold ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>{exp.role}</h3>
                          <p className={`text-sm font-medium ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>{exp.organization}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-mono ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>{exp.dateRange}</p>
                          <p className={`text-xs ${isDark ? 'text-surface-200/40' : 'text-surface-700/40'}`}>{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className={`text-sm flex items-start gap-2 ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>
                            <span className="text-primary-500 mt-1 flex-shrink-0">▸</span>{a}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Chip key={tech} label={tech} isDark={isDark} variant="outline" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
