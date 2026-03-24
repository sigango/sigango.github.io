import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiRefreshCw, FiCpu } from 'react-icons/fi';
import { researchIdeas } from '../../data/content';

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
    'Computer Vision': isDark ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 'text-blue-700 bg-blue-50 border-blue-200',
    'Multimodal AI': isDark ? 'text-purple-400 bg-purple-500/10 border-purple-500/20' : 'text-purple-700 bg-purple-50 border-purple-200',
    'Adversarial Robustness': isDark ? 'text-red-400 bg-red-500/10 border-red-500/20' : 'text-red-700 bg-red-50 border-red-200',
    'Public Health AI': isDark ? 'text-green-400 bg-green-500/10 border-green-500/20' : 'text-green-700 bg-green-50 border-green-200',
    'Generative AI': isDark ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 'text-amber-700 bg-amber-50 border-amber-200',
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
          AI Research Idea Generator
        </h3>
        <p className={`text-sm ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>
          Explore curated research directions in AI and computer vision
        </p>
      </div>

      <div className="flex justify-center">
        <motion.button
          onClick={generateIdeas}
          disabled={isGenerating}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer disabled:cursor-wait ${
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
          {isGenerating ? 'Generating...' : 'Generate Ideas'}
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-4"
        >
          {displayedIdeas.map((idea, i) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className={`rounded-xl p-5 transition-all duration-300 ${
                isDark
                  ? 'bg-surface-800/60 border border-surface-700/50 hover:border-primary-500/20'
                  : 'bg-white border border-surface-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                  domainColors[idea.domain] || (isDark ? 'text-surface-200 bg-surface-700 border-surface-600' : 'text-surface-700 bg-surface-100 border-surface-200')
                }`}>
                  {idea.domain}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`text-base font-semibold mb-1.5 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                    {idea.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-200/60' : 'text-surface-700/70'}`}>
                    {idea.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
