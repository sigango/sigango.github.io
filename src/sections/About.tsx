import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Chip } from '../components/ui/Chip';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { useLanguage } from '../hooks/useLanguage';

export function About({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.about.title} subtitle={t.about.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile image */}
          <AnimateOnScroll direction="left" className="lg:col-span-2 flex justify-center">
            <div
              className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden card-gradient-hover ${
                isDark ? 'bg-surface-800 border border-surface-700/50' : 'bg-surface-100 border border-surface-200'
              } flex items-center justify-center`}
            >
              {siteContent.profileImage && siteContent.profileImage !== '/profile.jpg' ? (
                <img src={siteContent.profileImage} alt={siteContent.name} className="w-full h-full object-cover relative z-10" />
              ) : (
                <div className={`text-center relative z-10 ${isDark ? 'text-surface-200/30' : 'text-surface-700/30'}`}>
                  <div className="text-5xl mb-2">📷</div>
                  <p className="text-sm font-medium">Profile Image</p>
                </div>
              )}
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-surface-200/80' : 'text-surface-800'}`}>
              {siteContent.longAbout} I specialize in both AI research and robust <strong>Software Engineering</strong>, ensuring that complex models are built on scalable, production-ready infrastructure.
            </p>
            </div>

            <AnimateOnScroll delay={0.2}>
              <div className={`p-5 rounded-xl border-l-4 border-primary-500 ${isDark ? 'bg-surface-800/50' : 'bg-primary-50/50'}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                  {t.about.missionLabel}
                </p>
                <p className={`text-sm italic leading-relaxed ${isDark ? 'text-surface-200/70' : 'text-surface-700/80'}`}>
                  "{siteContent.missionStatement}"
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div>
                <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>
                  {t.about.focusLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {siteContent.interests.map((interest) => (
                    <Chip key={interest.label} label={interest.label} isDark={isDark} size="md" />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
