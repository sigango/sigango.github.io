import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiRefreshCw, FiCpu, FiTrendingUp } from 'react-icons/fi';
import { researchIdeas } from '../../data/content';
import { SpotlightCard } from '../../components/animations/SpotlightCard';

export function ResearchIdeaGenerator({ isDark }: { isDark: boolean }) {
  const [displayedIdeas, setDisplayedIdeas] = useState(researchIdeas.slice(0, 3));
  const [isGenerating, setIsGenerating] = useState(false);
  const [key, setKey] = useState(0);

  const generateIdeas = useCallback(() => {
    setIsGenerating(true);
    setTimeout(() => {
      const shuffled = [...researchIdeas].sort(() => Math.random() - 0.5);
      setDisplayedIdeas(shuffled.slice(0, 3));
      setKey((k) => k + 1);
      setIsGenerating(false);
    }, 800);
  }, []);

  const domainColors: Record<string, string> = {
    'Computer Vision': isDark ? 'text-primary-400 bg-primary-500/10 border-primary-500/30' : 'text-primary-700 bg-primary-50 border-primary-200',
    'Multimodal AI': isDark ? 'text-accent-400 bg-accent-500/10 border-accent-500/30' : 'text-accent-700 bg-accent-50 border-accent-200',
    'Adversarial Robustness': isDark ? 'text-rose-400 bg-rose-500/10 border-rose-500/30' : 'text-rose-700 bg-rose-50 border-rose-200',
    'Public Health AI': isDark ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : 'text-emerald-700 bg-emerald-50 border-emerald-200',
    'Generative AI': isDark ? 'text-amber-400 bg-amber-500/10 border-amber-500/30' : 'text-amber-700 bg-amber-50 border-amber-200',
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-6 border-surface-200/10 dark:border-surface-700/50">
        <div>
          <h3 className={`text-2xl font-bold mb-2 flex items-center gap-3 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
            <FiTrendingUp className="text-primary-500" />
            AI Research Idea Generator
          </h3>
          <p className={`text-sm md:text-base ${isDark ? 'text-surface-200/60' : 'text-surface-700/60'}`}>
            Explore curated forward-looking architectures and problems.
          </p>
        </div>

        <motion.button
          onClick={generateIdeas}
          disabled={isGenerating}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all focus:outline-none disabled:opacity-70 disabled:cursor-wait ${
            isDark
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/20'
              : 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/20'
          }`}
        >
          {isGenerating ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            >
              <FiRefreshCw size={16} />
            </motion.span>
          ) : (
            <FiCpu size={16} />
          )}
          {isGenerating ? 'Synthesizing...' : 'Generate Ideas'}
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-6"
        >
          {displayedIdeas.map((idea, i) => (
            <AnimatePresence key={idea.id}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.4, type: "spring", bounce: 0.2 }}
              >
                <SpotlightCard
                  isDark={isDark}
                  className={`relative p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center transition-all ${
                    isDark ? 'shadow-xl shadow-black/20' : 'shadow-lg shadow-surface-200/40'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono font-bold border ${
                        domainColors[idea.domain] || (isDark ? 'text-surface-200 bg-surface-700 border-surface-600' : 'text-surface-700 bg-surface-100 border-surface-200')
                      }`}>
                        {idea.domain}
                      </span>
                    </div>
                    <h4 className={`text-xl md:text-2xl font-bold mb-3 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                      {idea.title}
                    </h4>
                    <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-surface-200/70' : 'text-surface-700/80'}`}>
                      {idea.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
