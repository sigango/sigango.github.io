import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const XAI_MODES = [
  {
    id: 'saliency',
    name: 'Saliency Map',
    description: 'Highlights pixels with the highest gradient magnitude relative to the model output. Reveals which input regions most influence the prediction.',
    visualization: 'saliency',
    color: '#ef4444',
  },
  {
    id: 'attention',
    name: 'Attention Map',
    description: 'Visualizes self-attention weights from transformer layers, showing which image patches attend to each other during inference.',
    visualization: 'attention',
    color: '#8b5cf6',
  },
  {
    id: 'activation',
    name: 'Feature Activation',
    description: 'Displays intermediate feature map activations from convolutional layers, revealing learned spatial features at different depths.',
    visualization: 'activation',
    color: '#06b6d4',
  },
  {
    id: 'gradcam',
    name: 'Grad-CAM',
    description: 'Gradient-weighted Class Activation Mapping produces a coarse localization map highlighting important regions for a target class decision.',
    visualization: 'gradcam',
    color: '#f59e0b',
  },
];

function SimulatedVisualization({ mode, isDark }: { mode: string; isDark: boolean }) {
  const gridSize = 8;
  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => i);

  const getIntensity = (index: number, mode: string) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const cx = gridSize / 2 - 0.5;
    const cy = gridSize / 2 - 0.5;
    const dist = Math.sqrt((row - cy) ** 2 + (col - cx) ** 2);
    const maxDist = Math.sqrt(cx * cx + cy * cy);

    let base = 0;
    switch (mode) {
      case 'saliency':
        base = Math.max(0, 1 - dist / maxDist + (Math.random() * 0.3));
        break;
      case 'attention': {
        const topLeft = (row < 4 && col < 4) ? 0.5 : 0;
        const center = dist < 2.5 ? 0.8 : 0;
        base = Math.min(1, topLeft + center + Math.random() * 0.15);
        break;
      }
      case 'activation':
        base = (Math.sin(row * 0.8) * Math.cos(col * 0.8) + 1) / 2 + Math.random() * 0.2;
        break;
      case 'gradcam':
        base = Math.max(0, 1 - (dist / maxDist) * 0.8);
        break;
      default:
        base = 0.5;
    }
    return Math.min(1, Math.max(0, base));
  };

  const modeConfig = XAI_MODES.find((m) => m.id === mode);
  const baseColor = modeConfig?.color || '#6366f1';

  return (
    <div
      className={`rounded-xl p-4 relative overflow-hidden ${
        isDark ? 'bg-surface-900 border border-surface-700/50' : 'bg-surface-50 border border-surface-200'
      }`}
    >
      <div className="relative mx-auto" style={{ maxWidth: '320px', aspectRatio: '1' }}>
        {/* Background Image to give context to the heatmap */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden border border-white/10"
          style={{
            backgroundImage: 'url("/cv.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(120%)',
            opacity: isDark ? 0.4 : 0.6
          }}
        />

        {/* Heatmap Grid Overlay */}
        <div
          className="absolute inset-0 grid gap-0.5 mix-blend-screen"
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {cells.map((i) => {
            const intensity = getIntensity(i, mode);
            // Create a slight pulsing effect ranging from intensity*0.7 to intensity*1.0
            const pulseValues = [
              Math.max(0.1, intensity * 0.7),
              Math.min(1, intensity * 1.1),
              Math.max(0.1, Math.min(1, intensity * 0.8))
            ];
            
            return (
              <motion.div
                key={`${mode}-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: pulseValues,
                  scale: 1 
                }}
                transition={{ 
                  opacity: {
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 1
                  },
                  scale: { duration: 0.4, delay: i * 0.005 }
                }}
                className="rounded-sm"
                style={{
                  backgroundColor: baseColor,
                }}
              />
            );
          })}
        </div>
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-white/30 blur-sm mix-blend-overlay"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: baseColor, opacity: 0.2 }} />
          <span className={`text-xs ${isDark ? 'text-surface-200/40' : 'text-surface-700/40'}`}>Low Impact</span>
        </div>
        <span className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>
          {mode} Heatmap
        </span>
        <div className="flex items-center gap-2">
          <span className={`text-xs ${isDark ? 'text-surface-200/40' : 'text-surface-700/40'}`}>High Impact</span>
          <div className="w-3 h-3 rounded-sm shadow-[0_0_8px_currentColor]" style={{ backgroundColor: baseColor, color: baseColor }} />
        </div>
      </div>
    </div>
  );
}

export function ModelInsightDemo({ isDark }: { isDark: boolean }) {
  const [activeMode, setActiveMode] = useState('saliency');
  const mode = XAI_MODES.find((m) => m.id === activeMode)!;

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
          Model Insight Demo
        </h3>
        <p className={`text-sm ${isDark ? 'text-surface-200/50' : 'text-surface-700/50'}`}>
          Explore different explainability techniques for neural network decisions
        </p>
      </div>

      {/* Mode tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {XAI_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMode(m.id)}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
              activeMode === m.id
                ? 'text-white shadow-lg'
                : isDark
                  ? 'bg-surface-800 text-surface-200/60 border border-surface-700 hover:border-surface-600'
                  : 'bg-white text-surface-700/60 border border-surface-200 hover:border-surface-300'
            }`}
            style={
              activeMode === m.id
                ? { backgroundColor: m.color, boxShadow: `0 4px 15px ${m.color}33` }
                : undefined
            }
          >
            {m.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Visualization */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <SimulatedVisualization mode={activeMode} isDark={isDark} />
          </motion.div>
        </AnimatePresence>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`rounded-xl p-6 ${
              isDark
                ? 'bg-surface-800/60 border border-surface-700/50'
                : 'bg-white border border-surface-200 shadow-sm'
            }`}
          >
            <div
              className="w-2 h-8 rounded-full mb-4"
              style={{ backgroundColor: mode.color }}
            />
            <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-surface-50' : 'text-surface-900'}`}>
              {mode.name}
            </h4>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-200/70' : 'text-surface-700'}`}>
              {mode.description}
            </p>
            <div className={`mt-4 p-3 rounded-lg font-mono text-xs ${
              isDark ? 'bg-surface-900 text-surface-200/50' : 'bg-surface-50 text-surface-700/50'
            }`}>
              model.explain(input, method="{activeMode}")
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
