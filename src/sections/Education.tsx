import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { SpotlightCard } from '../components/animations/SpotlightCard';
import { useLanguage } from '../hooks/useLanguage';
import { FiAward, FiBook, FiGlobe, FiMapPin, FiCalendar } from 'react-icons/fi';

export function EducationSection({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="education" className={`py-24 section-padding ${isDark ? 'bg-surface-900/40' : 'bg-surface-50/70'}`}>
      <div className="max-w-6xl mx-auto space-y-16">
        <AnimateOnScroll>
          <SectionHeading
            title={t.education.title}
            subtitle={t.education.subtitle}
            isDark={isDark}
          />
        </AnimateOnScroll>

        {/* Formal Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteContent.education.map((edu, idx) => (
            <AnimateOnScroll key={edu.id} delay={0.1 + idx * 0.1}>
              <SpotlightCard isDark={isDark} className="h-full p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl ${isDark ? 'bg-primary-500/15 text-primary-400' : 'bg-primary-50 text-primary-600'}`}>
                        <FiBook size={18} />
                      </div>
                      <div>
                        <h4 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-surface-900'}`}>
                          {edu.institution}
                        </h4>
                        <div className="flex items-center gap-2 text-xs font-mono opacity-70 mt-0.5">
                          <span className="flex items-center gap-1"><FiMapPin size={11} /> {edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold font-mono mb-4 border ${
                    isDark ? 'bg-surface-800 text-cyan-300 border-cyan-500/20' : 'bg-cyan-50 text-cyan-800 border-cyan-200'
                  }`}>
                    {edu.degree}
                  </div>

                  {edu.details && (
                    <ul className="space-y-2 mt-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className={`text-xs sm:text-sm flex items-start gap-2 ${isDark ? 'text-surface-300' : 'text-surface-700'}`}>
                          <span className="text-primary-500 mt-1 flex-shrink-0 text-sm">▹</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-surface-200/20 dark:border-surface-700/40 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 opacity-60">
                    <FiCalendar size={13} />
                    {edu.period}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    idx === 0
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'bg-surface-800 text-surface-400'
                  }`}>
                    {idx === 0 ? 'Current Degree' : 'Completed'}
                  </span>
                </div>
              </SpotlightCard>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Academic Engagement & Honors Subsection */}
        <div className="space-y-8 pt-6">
          <AnimateOnScroll delay={0.2}>
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-semibold flex items-center justify-center gap-2.5 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                <FiAward className="text-primary-400" />
                {t.academicEngagement.title}
              </h3>
              <p className={`text-sm mt-2 ${isDark ? 'text-surface-200/60' : 'text-surface-700/60'}`}>
                {t.academicEngagement.subtitle}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.academicEngagement.map((item, idx) => (
              <AnimateOnScroll key={item.id} delay={0.15 + idx * 0.1}>
                <SpotlightCard isDark={isDark} className="h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-md border ${
                        idx === 0
                          ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                          : idx === 1
                            ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                            : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                      }`}>
                        {item.program}
                      </span>
                      <span className="text-[11px] font-mono opacity-60 flex items-center gap-1">
                        <FiCalendar size={11} /> {item.period}
                      </span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                      {item.role}
                    </h4>

                    <p className="text-xs font-mono text-primary-400 mb-4 flex items-center gap-1">
                      <FiGlobe size={12} /> {item.location}
                    </p>

                    <ul className="space-y-2">
                      {item.details.map((d, i) => (
                        <li key={i} className={`text-xs leading-relaxed ${isDark ? 'text-surface-300' : 'text-surface-700'}`}>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
