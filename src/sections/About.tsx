import { siteContent } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Chip } from '../components/ui/Chip';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { useLanguage } from '../hooks/useLanguage';
import { FiAward, FiBookOpen, FiShield, FiCpu } from 'react-icons/fi';

export function About({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  const keyHighlights = [
    {
      icon: FiCpu,
      title: 'TU Darmstadt',
      subtitle: 'M.Sc. Artificial Intelligence & Machine Learning',
      color: 'text-primary-400 bg-primary-500/10 border-primary-500/25',
    },
    {
      icon: FiShield,
      title: 'Fraunhofer SIT',
      subtitle: 'Research Assistant, AI & Security (DeCNeC)',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
    },
    {
      icon: FiBookOpen,
      title: 'Springer Nature (2025)',
      subtitle: 'First-Author Peer-Reviewed Publication (Discover AI)',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    },
    {
      icon: FiAward,
      title: 'AI Grid Member',
      subtitle: 'Micro Focus Group: CV, Medical & Biological Imaging',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/25',
    },
  ];

  return (
    <section id="about" className="relative py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.about.title} subtitle={t.about.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile image & quick badges */}
          <AnimateOnScroll direction="left" className="lg:col-span-2 flex flex-col items-center">
            <div
              className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden card-gradient-hover ${
                isDark ? 'bg-surface-800 border border-surface-700/50' : 'bg-surface-100 border border-surface-200'
              } flex items-center justify-center shadow-xl`}
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

            <div className="mt-4 text-center">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                isDark ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Researcher @ Fraunhofer SIT & TU Darmstadt
              </span>
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <AnimateOnScroll delay={0.1}>
              <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-surface-200/90' : 'text-surface-800'}`}>
                {siteContent.longAbout}
              </p>
            </AnimateOnScroll>

            {/* Quick 2x2 Highlights Grid */}
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {keyHighlights.map((hl) => {
                  const Icon = hl.icon;
                  return (
                    <div
                      key={hl.title}
                      className={`p-3.5 rounded-xl border flex items-start gap-3 transition-all ${
                        isDark ? 'bg-surface-900/60 border-surface-800 hover:border-surface-700' : 'bg-white border-slate-200 shadow-sm'
                      }`}
                    >
                      <div className={`p-2 rounded-lg border ${hl.color} flex-shrink-0 mt-0.5`}>
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <h4 className={`text-xs font-bold font-mono tracking-wide ${isDark ? 'text-white' : 'text-surface-900'}`}>
                          {hl.title}
                        </h4>
                        <p className={`text-[11px] leading-tight mt-0.5 ${isDark ? 'text-surface-300' : 'text-surface-600'}`}>
                          {hl.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
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
