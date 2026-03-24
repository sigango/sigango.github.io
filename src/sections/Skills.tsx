import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { useLanguage } from '../hooks/useLanguage';

export function Skills({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.skillCategories.map((category) => (
            <StaggerItem key={category.name}>
              <div className={`rounded-xl p-6 h-full transition-all duration-300 card-gradient-hover ${
                isDark ? 'bg-surface-800/60 border border-surface-700/50 hover:shadow-lg hover:shadow-primary-500/5' : 'bg-white border border-surface-200 shadow-sm hover:shadow-md'
              }`}>
                <div className="relative z-10">
                  <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        isDark ? 'bg-surface-700/50 text-surface-200 hover:bg-primary-500/10 hover:text-primary-300' : 'bg-surface-100 text-surface-700 hover:bg-primary-50 hover:text-primary-700'
                      }`}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
