import { useState } from 'react';
import { engineeringProcess } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimateOnScroll } from '../components/animations/AnimateOnScroll';
import { SpotlightCard } from '../components/animations/SpotlightCard';
import { useLanguage } from '../hooks/useLanguage';
import { motion, AnimatePresence } from 'motion/react';

export function EngineeringProcess({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className={`py-24 section-padding relative overflow-hidden ${isDark ? 'bg-surface-900 border-t border-surface-800' : 'bg-surface-50 border-t border-surface-200'}`}>
      
      {/* Subtle organic background glow to fit the neural theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimateOnScroll>
          <SectionHeading title={t.process.title} subtitle={t.process.subtitle} isDark={isDark} />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="mt-16 mb-12">
            
            {/* Horizontal Neural Pipeline Track */}
            <div className="relative max-w-4xl mx-auto">
              {/* Background Track Line */}
              <div className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full ${isDark ? 'bg-surface-800' : 'bg-surface-200'}`} />
              
              {/* Animated Progress Line */}
              <motion.div 
                className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-600 via-violet-500 to-accent-500"
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep / (engineeringProcess.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* Pipeline Nodes */}
              <div className="relative flex justify-between items-center z-10">
                {engineeringProcess.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isPassed = idx <= activeStep;
                  
                  return (
                    <div key={step.id} className="relative flex flex-col items-center group">
                      <button
                        onClick={() => setActiveStep(idx)}
                        className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-lg md:text-xl transition-all duration-300 relative z-10 backdrop-blur-md cursor-pointer ${
                          isActive
                            ? 'bg-primary-500 text-white shadow-[0_0_30px_rgba(var(--color-primary-500),0.5)] scale-110 border-2 border-primary-300/50'
                            : isPassed
                            ? (isDark ? 'bg-surface-800 border-2 border-primary-500/50 text-primary-400' : 'bg-white border-2 border-primary-400 text-primary-600')
                            : (isDark ? 'bg-surface-800 border-2 border-surface-700 text-surface-500 hover:border-surface-600' : 'bg-white border-2 border-surface-200 text-surface-400 hover:border-surface-300')
                        }`}
                      >
                        {step.icon}
                        
                        {/* Pulse effect for active node */}
                        {isActive && (
                          <span className="absolute inset-0 rounded-xl bg-primary-400 opacity-50 animate-ping" style={{ animationDuration: '3s' }} />
                        )}
                      </button>
                      
                      {/* Desktop Label positioned below the node */}
                      <div className={`absolute top-full mt-4 text-center w-32 hidden md:block transition-all duration-300 ${
                        isActive 
                          ? (isDark ? 'text-primary-300 font-bold' : 'text-primary-700 font-bold') 
                          : (isDark ? 'text-surface-500 font-medium' : 'text-surface-400 font-medium')
                      }`}>
                        <span className="font-mono text-[9px] tracking-widest uppercase block mb-1 opacity-70">Step {step.step}</span>
                        <span className="text-xs">{step.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feature Detail Card */}
            <div className="mt-8 md:mt-24 max-w-3xl mx-auto min-h-[200px] relative perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, rotateX: -10, y: 15 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: 10, y: -15 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                  className="h-full"
                >
                  <SpotlightCard isDark={isDark} className="p-6 md:p-8 text-center flex flex-col items-center justify-center border-t border-t-primary-500/50 shadow-xl">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-4 inline-block ${
                      isDark ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'bg-primary-50 text-primary-600 border border-primary-200'
                    }`}>
                      Phase {engineeringProcess[activeStep].step}: {engineeringProcess[activeStep].title}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                      {engineeringProcess[activeStep].title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-surface-200/80' : 'text-surface-700'}`}>
                      {engineeringProcess[activeStep].description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
