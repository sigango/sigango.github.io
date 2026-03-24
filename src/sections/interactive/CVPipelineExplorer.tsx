import { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cvPipelineSteps } from '../../data/content';
import { FiChevronRight, FiChevronLeft, FiPlay, FiPause } from 'react-icons/fi';
import { useLanguage } from '../../hooks/useLanguage';

const CNN3DVisualizer = lazy(() =>
  import('../../components/three/CNN3DVisualizer').then((m) => ({ default: m.CNN3DVisualizer }))
);

/** Simulated real-world visualization for each pipeline step using the cv.jpg image */
function StepVisualization({ stepIndex, isDark }: { stepIndex: number; isDark: boolean }) {
  const getStepConfig = () => {
    const configs = [
      { bg: '#3b82f6', label: 'RGB Input' },
      { bg: '#6366f1', label: 'Preprocessing' },
      { bg: '#8b5cf6', label: 'Feature Maps' },
      { bg: '#a78bfa', label: 'Inference' },
      { bg: '#06b6d4', label: 'Explainability' },
      { bg: '#10b981', label: 'Prediction' },
    ];
    return configs[stepIndex] || configs[0];
  };

  const config = getStepConfig();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border border-surface-200/20 bg-black shadow-lg">
        {/* Base Image */}
        <motion.img 
          src="/cv.jpg" 
          alt="Eiffel Tower CV Input"
          className="absolute inset-0 w-full h-full object-cover"
          animate={{
            filter: 
              stepIndex === 0 ? 'grayscale(0%) blur(0px) contrast(100%)' :
              stepIndex === 1 ? 'grayscale(100%) blur(2px) contrast(120%)' :
              stepIndex === 2 ? 'grayscale(100%) contrast(300%) invert(100%)' :
              'grayscale(0%) blur(0px) contrast(110%)',
            opacity: stepIndex === 2 ? 0.8 : 1
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Inference Scanning Overlay (Step 3) */}
        <AnimatePresence>
          {stepIndex === 3 && (
            <motion.div
              initial={{ top: '-20%' }}
              animate={{ top: '120%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent border-b border-cyan-400/80 mix-blend-overlay"
            />
          )}
        </AnimatePresence>

        {/* Explainability Heatmap (Step 4) */}
        <AnimatePresence>
          {stepIndex === 4 && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.85 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 mix-blend-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/80 via-yellow-500/20 to-transparent"
               style={{ backgroundPosition: 'center 30%', backgroundSize: '120% 120%' }}
            />
          )}
        </AnimatePresence>

        {/* Prediction Bounding Box (Step 5) */}
        <AnimatePresence>
          {stepIndex === 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute border-2 border-green-500 bg-green-500/10"
              // Adjust bounding box dynamically based on standard Eiffel tower photos
              style={{ top: '10%', left: '25%', right: '25%', bottom: '10%' }}
            >
              <div className="absolute -top-6 left-0 bg-green-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-sm whitespace-nowrap shadow-md">
                Eiffel Tower 98%
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <span className={`text-[10px] font-mono tracking-widest uppercase ${isDark ? 'text-surface-200/40' : 'text-surface-700/40'}`}>
        {config.label}
      </span>
    </div>
  );
}

export function CVPipelineExplorer({ isDark }: { isDark: boolean }) {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const step = cvPipelineSteps[activeStep];
  const { t } = useLanguage();

  // Auto-play timer
  useState(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % cvPipelineSteps.length);
    }, 2500);
    return () => clearInterval(timer);
  });

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
          {t.cvPipeline.title}
        </h3>
        <p className={`text-sm ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>
          {t.cvPipeline.subtitle}
        </p>
      </div>

      {/* 3D CNN Toggle */}
      <div className="flex justify-center">
        <button
          onClick={() => setShow3D(!show3D)}
          className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer ${
            show3D
              ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg shadow-primary-500/20'
              : isDark
                ? 'bg-surface-800/60 text-surface-200/60 border border-surface-700/50 hover:border-primary-500/30'
                : 'bg-white text-surface-700/60 border border-surface-200 hover:border-primary-300'
          }`}
        >
          🧠 {show3D ? 'Hide' : 'Show'} 3D CNN Architecture
        </button>
      </div>

      {/* 3D CNN Visualizer */}
      <AnimatePresence>
        {show3D && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Suspense fallback={
              <div className={`rounded-xl p-8 text-center ${isDark ? 'bg-surface-900/80 border border-surface-700/30' : 'bg-surface-50 border border-surface-200'}`}>
                <div className="animate-pulse text-sm text-surface-200/40">Loading 3D scene...</div>
              </div>
            }>
              <CNN3DVisualizer isDark={isDark} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pipeline steps indicator */}
      <div className="flex items-center justify-center gap-1 xl:gap-2 flex-wrap">
        {cvPipelineSteps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(i)}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              i === activeStep
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                : i < activeStep
                  ? isDark
                    ? 'bg-primary-500/15 text-primary-300 border border-primary-500/30 hover:bg-primary-500/25'
                    : 'bg-primary-50 text-primary-700 border border-primary-200 hover:bg-primary-100'
                  : isDark
                    ? 'bg-surface-800 text-surface-200 border border-surface-600 hover:bg-surface-700'
                    : 'bg-surface-100 text-surface-700/70 border border-surface-200 hover:bg-surface-200'
            }`}
          >
            <span>{s.icon}</span>
            <span className="hidden sm:inline">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Active step detail with visualization */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={`rounded-xl p-8 ${
            isDark ? 'bg-surface-800/60 border border-surface-700/50' : 'bg-white border border-surface-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Mini visualization */}
            <StepVisualization stepIndex={activeStep} isDark={isDark} />

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
                Step {activeStep + 1}: {step.title}
              </h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>
                {step.description}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className={`mt-6 h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-surface-700' : 'bg-surface-200'}`}>
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-violet-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((activeStep + 1) / cvPipelineSteps.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className={`p-2.5 rounded-xl transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
            isDark ? 'bg-surface-800 text-surface-200 hover:bg-surface-700' : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
          }`}
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
            autoPlay
              ? 'bg-primary-600 text-white'
              : isDark ? 'bg-surface-800 text-surface-200 hover:bg-surface-700' : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
          }`}
        >
          {autoPlay ? <FiPause size={18} /> : <FiPlay size={18} />}
        </button>
        <button
          onClick={() => setActiveStep(Math.min(cvPipelineSteps.length - 1, activeStep + 1))}
          disabled={activeStep === cvPipelineSteps.length - 1}
          className={`p-2.5 rounded-xl transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
            isDark ? 'bg-surface-800 text-surface-200 hover:bg-surface-700' : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
          }`}
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
