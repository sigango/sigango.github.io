import { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cvPipelineSteps } from '../../data/content';
import { FiChevronRight, FiChevronLeft, FiPlay, FiPause } from 'react-icons/fi';
import { useLanguage } from '../../hooks/useLanguage';

const CNN3DVisualizer = lazy(() =>
  import('../../components/three/CNN3DVisualizer').then((m) => ({ default: m.CNN3DVisualizer }))
);

/** Simulated mini-visualization for each pipeline step */
function StepVisualization({ stepIndex, isDark }: { stepIndex: number; isDark: boolean }) {
  const gridSize = stepIndex <= 1 ? 8 : stepIndex <= 3 ? 6 : 4;
  const cells = Array.from({ length: gridSize * gridSize });

  const getColor = () => {
    const colors = [
      { bg: '#3b82f6', label: 'RGB Input' },
      { bg: '#6366f1', label: 'Preprocessing' },
      { bg: '#8b5cf6', label: 'Feature Maps' },
      { bg: '#a78bfa', label: 'Inference' },
      { bg: '#06b6d4', label: 'Explainability' },
      { bg: '#10b981', label: 'Prediction' },
    ];
    return colors[stepIndex] || colors[0];
  };

  const config = getColor();

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="grid gap-[2px] rounded-lg overflow-hidden"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          width: '160px',
          height: '160px',
        }}
      >
        {cells.map((_, i) => {
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          let opacity = 0.15;

          // Different patterns per step
          switch (stepIndex) {
            case 0: // Input — gradient
              opacity = 0.2 + (row / gridSize) * 0.6;
              break;
            case 1: // Preprocessing — uniform
              opacity = 0.3 + Math.random() * 0.2;
              break;
            case 2: // Feature extraction — edge-like
              opacity = Math.abs(Math.sin(row * 1.5) * Math.cos(col * 1.5)) * 0.7 + 0.15;
              break;
            case 3: // Inference — center hotspot
              {
                const cx = gridSize / 2 - 0.5;
                const dist = Math.sqrt((row - cx) ** 2 + (col - cx) ** 2);
                opacity = Math.max(0.1, Math.exp(-dist * dist / 4));
              }
              break;
            case 4: // Explainability — heatmap
              opacity = Math.max(0.1, 1 - Math.sqrt((row - 2) ** 2 + (col - 2) ** 2) / 4);
              break;
            case 5: // Prediction — sparse high confidence
              opacity = (i === 5 || i === 10) ? 0.9 : 0.1 + Math.random() * 0.1;
              break;
          }

          return (
            <motion.div
              key={`step-${stepIndex}-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.006, duration: 0.3 }}
              style={{ backgroundColor: config.bg, opacity }}
            />
          );
        })}
      </div>
      <span className={`text-[10px] font-mono ${isDark ? 'text-surface-200/30' : 'text-surface-700/30'}`}>
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
