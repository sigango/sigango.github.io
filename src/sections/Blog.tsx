import { motion } from 'motion/react';
import { FiEdit3, FiClock, FiRss } from 'react-icons/fi';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionBackground } from '../components/ui/SectionBackground';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { SpotlightCard } from '../components/animations/SpotlightCard';
import { useLanguage } from '../hooks/useLanguage';

const COMING_SOON_POSTS = [
  {
    title: 'Understanding Grad-CAM: Visual Explanations from Deep Networks',
    tags: ['XAI', 'Computer Vision'],
    readTime: '8 min',
  },
  {
    title: 'Building Retrieval-Augmented Generation Systems from Scratch',
    tags: ['RAG', 'LLMs'],
    readTime: '12 min',
  },
  {
    title: 'Physics-Informed Neural Networks for Epidemiological Modeling',
    tags: ['Research', 'PINNs'],
    readTime: '10 min',
  },
  {
    title: 'Adversarial Robustness in Vision-Language Models',
    tags: ['Multimodal AI', 'Security'],
    readTime: '9 min',
  },
];

export function Blog({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="blog" className="relative py-24 section-padding overflow-hidden">
      <SectionBackground isDark={isDark} opacity={0.03} />
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title={t.blog.title}
            subtitle={t.blog.subtitle}
            isDark={isDark}
          />
        </AnimateOnScroll>

        {/* Coming Soon Banner */}
        <AnimateOnScroll delay={0.1}>
          <motion.div
            className={`mb-10 rounded-xl p-6 text-center border ${
              isDark
                ? 'bg-surface-800/40 border-primary-500/20'
                : 'bg-primary-50/50 border-primary-200'
            }`}
            initial={{ scale: 0.98 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
              <FiRss size={12} />
              {t.blog.comingSoon}
            </div>
            <p className={`text-sm ${isDark ? 'text-surface-200/60' : 'text-surface-700/60'}`}>
              {t.blog.comingSoonDescription}
            </p>
          </motion.div>
        </AnimateOnScroll>

        {/* Preview cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {COMING_SOON_POSTS.map((post, i) => (
            <AnimateOnScroll key={post.title} delay={0.1 + i * 0.08}>
              <SpotlightCard
                isDark={isDark}
                className="group h-full p-6 transition-all duration-300 cursor-pointer"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <FiEdit3 className={`${isDark ? 'text-primary-400' : 'text-primary-600'}`} size={16} />
                    <span className={`text-[10px] uppercase font-mono tracking-widest ${isDark ? 'text-surface-200/40' : 'text-surface-700/40'}`}>
                      {t.blog.draft}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-4 flex-1 leading-snug group-hover:text-primary-500 transition-colors ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-surface-200/10 dark:border-surface-700/30 group-hover:border-primary-500/20 transition-colors">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded-md ${
                          isDark ? 'bg-surface-800 text-surface-300' : 'bg-surface-100 text-surface-600'
                        }`}>{tag}</span>
                      ))}
                    </div>
                    <span className={`text-xs font-medium flex items-center gap-1.5 ${isDark ? 'text-surface-200/40' : 'text-surface-700/40'}`}>
                      <FiClock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
