import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Chip } from '../components/ui/Chip';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { SpotlightCard } from '../components/animations/SpotlightCard';
import { useLanguage } from '../hooks/useLanguage';

export function Experience({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="experience" className={`py-24 section-padding ${isDark ? 'bg-surface-900/50' : 'bg-surface-50'}`}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <div className="relative mt-8">
          {/* Glowing Timeline Line */}
          <div className={`absolute left-4 md:left-6 top-0 bottom-0 w-px ${isDark ? 'bg-gradient-to-b from-primary-500/50 via-violet-500/30 to-accent-500/10' : 'bg-surface-200 shadow-inner'}`} />

          <div className="space-y-8">
            {siteContent.experiences.map((exp, index) => (
              <AnimateOnScroll key={exp.id} delay={index * 0.15}>
                <div className="relative pl-10 md:pl-14 group">
                  {/* Glowing Node */}
                  <div className={`absolute left-[13.5px] md:left-[21.5px] top-5 w-3 h-3 rounded-full border-2 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary-400 ${
                    isDark ? 'bg-surface-900 border-primary-500 shadow-[0_0_10px_rgba(var(--color-primary-500),0.6)]' : 'bg-white border-primary-500 shadow-sm'
                  }`} />

                  <SpotlightCard isDark={isDark} className={`p-5 md:p-6 transition-all duration-300 ${
                    isDark
                      ? 'shadow-xl shadow-black/20 group-hover:-translate-y-1'
                      : 'shadow-lg shadow-surface-200/60 group-hover:-translate-y-1'
                  }`}>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className={`text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-surface-50 to-surface-300' : 'from-surface-900 to-surface-700'}`}>
                            {exp.role}
                          </h3>
                          <p className={`text-sm md:text-base font-semibold tracking-wide ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>{exp.organization}</p>
                        </div>
                        <div className={`text-left sm:text-right px-3 py-1.5 rounded-lg border backdrop-blur-sm ${
                          isDark ? 'bg-surface-800/50 border-surface-700 text-surface-300' : 'bg-surface-100 border-surface-200 text-surface-700'
                        }`}>
                          <p className={`text-xs tracking-widest font-mono font-bold uppercase`}>{exp.dateRange}</p>
                          <p className={`text-[10px] mt-0.5 opacity-70`}>{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-5">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className={`text-sm flex items-start gap-2.5 ${isDark ? 'text-surface-200/80 group-hover:text-surface-100' : 'text-surface-700 group-hover:text-surface-900'} transition-colors`}>
                            <span className="text-primary-500 mt-0.5 flex-shrink-0 text-base">▹</span>
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-3 border-t border-surface-200/20 dark:border-surface-700/40">
                        {exp.technologies.map((tech) => (
                          <div key={tech} className={`px-2 py-0.5 text-[10px] md:text-xs font-semibold rounded-md border transition-all ${
                            isDark ? 'bg-surface-800 text-primary-300 border-primary-500/20 group-hover:border-primary-500/50 group-hover:bg-primary-500/10' : 'bg-primary-50 text-primary-700 border-primary-200 group-hover:border-primary-300 group-hover:bg-primary-100'
                          }`}>
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
