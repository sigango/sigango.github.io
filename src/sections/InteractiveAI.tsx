import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionBackground } from '../components/ui/SectionBackground';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { useLanguage } from '../hooks/useLanguage';
import { CVPipelineExplorer } from './interactive/CVPipelineExplorer';
import { ResearchIdeaGenerator } from './interactive/ResearchIdeaGenerator';
import { ModelInsightDemo } from './interactive/ModelInsightDemo';

export function InteractiveAI({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();
  const tabs = [
    { id: 'pipeline' as const, label: t.aiLab.tabs.pipeline, icon: '🔬' },
    { id: 'research' as const, label: t.aiLab.tabs.research, icon: '💡' },
    { id: 'insight' as const, label: t.aiLab.tabs.insight, icon: '🧠' },
  ];
  type TabId = (typeof tabs)[number]['id'];
  const [activeTab, setActiveTab] = useState<TabId>('pipeline');

  const renderContent = () => {
    switch (activeTab) {
      case 'pipeline': return <CVPipelineExplorer isDark={isDark} />;
      case 'research': return <ResearchIdeaGenerator isDark={isDark} />;
      case 'insight': return <ModelInsightDemo isDark={isDark} />;
    }
  };

  return (
    <section id="ai-lab" className={`relative py-24 section-padding overflow-hidden ${isDark ? 'bg-surface-900/50' : 'bg-surface-50'}`}>
      <SectionBackground isDark={isDark} opacity={0.03} />
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title={t.aiLab.title} subtitle={t.aiLab.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? isDark ? 'bg-surface-800 text-surface-50 border border-primary-500/30 shadow-lg shadow-primary-500/10' : 'bg-white text-surface-900 border border-primary-300 shadow-lg shadow-primary-500/10'
                    : isDark ? 'text-surface-200/60 hover:text-surface-200 hover:bg-surface-800/50' : 'text-surface-700/60 hover:text-surface-700 hover:bg-surface-100'
                }`}>
                <span>{tab.icon}</span>
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTabIndicator" className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" transition={{ duration: 0.3 }} />
                )}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
}
