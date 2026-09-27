/**
 * CNN3DVisualizer — Interactive 3D Convolutional Neural Network architecture
 * Features:
 * - OrbitControls for 3D exploration
 * - Animated data signal pulse flowing through the layers
 * - Non-flickering HUD layer inspector (click or hover to inspect)
 * - Layer bounding glow & wireframe highlights
 * - WebGL ErrorBoundary fallback
 * - Safe useFrame material animations without external font dependencies
 */

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import { FiPlay, FiPause, FiRotateCcw, FiEye, FiLayers } from 'react-icons/fi';

export interface CNNLayerConfig {
  label: string;
  type: 'input' | 'conv' | 'pool' | 'fc' | 'output';
  width: number;
  height: number;
  depth: number;
  color: string;
  shape: string;
  info: string;
  description: string;
}

export const CNN_LAYERS: CNNLayerConfig[] = [
  {
    label: 'Input',
    type: 'input',
    width: 2.4,
    height: 2.4,
    depth: 0.18,
    color: '#3b82f6',
    shape: '224 × 224 × 3',
    info: 'RGB Raw Tensor',
    description: 'Raw image data fed into the network. Represents pixel intensities across RGB color channels.',
  },
  {
    label: 'Conv1',
    type: 'conv',
    width: 2.2,
    height: 2.2,
    depth: 0.45,
    color: '#6366f1',
    shape: '112 × 112 × 64',
    info: '64 filters (3×3), stride 2',
    description: 'First convolutional layer extracting low-level primitives: oriented edges, color transitions, and texture gradients.',
  },
  {
    label: 'ReLU1',
    type: 'conv',
    width: 2.2,
    height: 2.2,
    depth: 0.12,
    color: '#8b5cf6',
    shape: '112 × 112 × 64',
    info: 'Non-linear Activation',
    description: 'Applies max(0, x) activation function to introduce non-linearity and filter out negative activations.',
  },
  {
    label: 'Pool1',
    type: 'pool',
    width: 1.7,
    height: 1.7,
    depth: 0.15,
    color: '#06b6d4',
    shape: '56 × 56 × 64',
    info: 'MaxPool 2×2, stride 2',
    description: 'Spatial downsampling to achieve translation invariance and decrease memory footprint.',
  },
  {
    label: 'Conv2',
    type: 'conv',
    width: 1.4,
    height: 1.4,
    depth: 0.65,
    color: '#6366f1',
    shape: '56 × 56 × 128',
    info: '128 filters (3×3)',
    description: 'Hierarchical feature aggregation capturing object parts, corner junctions, and intermediate contours.',
  },
  {
    label: 'Pool2',
    type: 'pool',
    width: 1.0,
    height: 1.0,
    depth: 0.15,
    color: '#06b6d4',
    shape: '28 × 28 × 128',
    info: 'MaxPool 2×2, stride 2',
    description: 'Second downsampling stage doubling the effective receptive field for deeper semantic abstraction.',
  },
  {
    label: 'Conv3',
    type: 'conv',
    width: 0.8,
    height: 0.8,
    depth: 0.85,
    color: '#a855f7',
    shape: '28 × 28 × 256',
    info: '256 filters (3×3)',
    description: 'High-level semantic feature maps that respond to complex semantic concepts (e.g. wheels, towers, faces).',
  },
  {
    label: 'Conv4',
    type: 'conv',
    width: 0.6,
    height: 0.6,
    depth: 0.95,
    color: '#ec4899',
    shape: '14 × 14 × 512',
    info: '512 filters (3×3)',
    description: 'Deep spatial representation layer encoding spatial relationships and global object geometry.',
  },
  {
    label: 'FC1',
    type: 'fc',
    width: 0.25,
    height: 1.6,
    depth: 0.25,
    color: '#10b981',
    shape: '4096-dim vector',
    info: 'Dense Linear Layer',
    description: 'Flattens 3D feature volumes into a 1D dense vector synthesizing spatial features into class evidence.',
  },
  {
    label: 'FC2',
    type: 'fc',
    width: 0.25,
    height: 1.0,
    depth: 0.25,
    color: '#10b981',
    shape: '1024-dim vector',
    info: 'Dense Projection',
    description: 'Penultimate representation layer applying dropout regularization and high-level reasoning.',
  },
  {
    label: 'Softmax',
    type: 'output',
    width: 0.25,
    height: 0.6,
    depth: 0.25,
    color: '#f59e0b',
    shape: 'Class Probabilities',
    info: 'Softmax Classifier',
    description: 'Normalized probability distribution across object categories with confidence scores.',
  },
];

/** Single 3D CNN Layer Box */
function CNNLayerMesh({
  config,
  position,
  isActive,
  isHovered,
  onSelect,
  onHover,
}: {
  config: CNNLayerConfig;
  position: [number, number, number];
  isActive: boolean;
  isHovered: boolean;
  onSelect: () => void;
  onHover: (hover: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const currentScale = useRef(1);
  const targetScale = isActive ? 1.08 : isHovered ? 1.04 : 1;

  useFrame((_, delta) => {
    currentScale.current += (targetScale - currentScale.current) * Math.min(delta * 12, 1);
    if (meshRef.current) {
      meshRef.current.scale.setScalar(currentScale.current);
    }
  });

  return (
    <group position={position}>
      {/* 3D Glass Layer Box */}
      <RoundedBox
        ref={meshRef}
        args={[config.depth, config.height, config.width]}
        radius={0.04}
        smoothness={4}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(true);
        }}
        onPointerOut={() => onHover(false)}
      >
        <meshPhysicalMaterial
          color={config.color}
          transparent
          opacity={isActive ? 0.95 : isHovered ? 0.8 : 0.65}
          emissive={config.color}
          emissiveIntensity={isActive ? 0.4 : isHovered ? 0.25 : 0.05}
          roughness={0.15}
          metalness={0.3}
          clearcoat={0.9}
          clearcoatRoughness={0.15}
        />
      </RoundedBox>

      {/* Wireframe Outline on Active */}
      {(isActive || isHovered) && (
        <lineSegments position={[0, 0, 0]}>
          <edgesGeometry args={[new THREE.BoxGeometry(config.depth * 1.02, config.height * 1.02, config.width * 1.02)]} />
          <lineBasicMaterial color={isActive ? '#38bdf8' : '#818cf8'} linewidth={2} />
        </lineSegments>
      )}

      {/* 3D Text Label Below Layer */}
      <Text
        position={[0, -config.height / 2 - 0.35, 0]}
        fontSize={0.16}
        color={isActive ? '#38bdf8' : isHovered ? '#ffffff' : '#94a3b8'}
        anchorX="center"
        anchorY="top"
      >
        {config.label}
      </Text>
    </group>
  );
}

/** Animated Signal Pulse traversing the network */
function SignalPulse({
  positions,
  isPlaying,
}: {
  positions: [number, number, number][];
  isPlaying: boolean;
}) {
  const pulseRef = useRef<THREE.Mesh>(null!);
  const trailRef = useRef<THREE.Mesh>(null!);
  const progress = useRef(0);

  useFrame((_, delta) => {
    if (!isPlaying) return;
    progress.current = (progress.current + delta * 0.35) % 1;
    const t = progress.current;
    const totalSegments = positions.length - 1;
    const segIdx = Math.min(Math.floor(t * totalSegments), totalSegments - 1);
    const segT = t * totalSegments - segIdx;

    const from = positions[segIdx];
    const to = positions[segIdx + 1];
    if (from && to) {
      const x = from[0] + (to[0] - from[0]) * segT;
      const y = from[1] + (to[1] - from[1]) * segT;
      const z = from[2] + (to[2] - from[2]) * segT;

      if (pulseRef.current) {
        pulseRef.current.position.set(x, y, z);
      }
      if (trailRef.current) {
        trailRef.current.position.set(
          from[0] + (to[0] - from[0]) * Math.max(0, segT - 0.08),
          from[1] + (to[1] - from[1]) * Math.max(0, segT - 0.08),
          from[2] + (to[2] - from[2]) * Math.max(0, segT - 0.08)
        );
      }
    }
  });

  return (
    <>
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <mesh ref={trailRef}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.6} />
      </mesh>
    </>
  );
}

/** Synaptic connections between layers */
function SynapticConnections({ positions }: { positions: [number, number, number][] }) {
  const lineGeo = useMemo(() => {
    const verts: number[] = [];
    for (let i = 0; i < positions.length - 1; i++) {
      verts.push(...positions[i], ...positions[i + 1]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [positions]);

  return (
    <lineSegments geometry={lineGeo}>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.25} />
    </lineSegments>
  );
}

/** Main 3D Scene */
function CNNSceneContent({
  activeLayerIdx,
  setActiveLayerIdx,
  hoveredIdx,
  setHoveredIdx,
  autoRotate,
  isPlaying,
  controlsRef,
}: {
  activeLayerIdx: number;
  setActiveLayerIdx: (idx: number) => void;
  hoveredIdx: number | null;
  setHoveredIdx: (idx: number | null) => void;
  autoRotate: boolean;
  isPlaying: boolean;
  controlsRef: React.MutableRefObject<any>;
}) {
  const layerSpacing = 1.15;
  const totalWidth = (CNN_LAYERS.length - 1) * layerSpacing;
  const startX = -totalWidth / 2;

  const positions: [number, number, number][] = useMemo(
    () => CNN_LAYERS.map((_, i) => [startX + i * layerSpacing, 0, 0]),
    [startX, layerSpacing]
  );

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[10, 10, 8]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -5, 5]} intensity={0.4} color="#38bdf8" />
      <pointLight position={[0, 8, -5]} intensity={0.5} color="#818cf8" />

      {CNN_LAYERS.map((layer, i) => (
        <CNNLayerMesh
          key={`${layer.label}-${i}`}
          config={layer}
          position={positions[i]}
          isActive={activeLayerIdx === i}
          isHovered={hoveredIdx === i}
          onSelect={() => setActiveLayerIdx(i)}
          onHover={(h) => setHoveredIdx(h ? i : null)}
        />
      ))}

      <SynapticConnections positions={positions} />
      <SignalPulse positions={positions} isPlaying={isPlaying} />

      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        minDistance={6}
        maxDistance={24}
        enablePan={true}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}

/** Exported CNN3DVisualizer */
export function CNN3DVisualizer({ isDark = true }: { isDark?: boolean }) {
  const [activeLayerIdx, setActiveLayerIdx] = useState(1);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [contextLost, setContextLost] = useState(false);
  const controlsRef = useRef<any>(null);

  const activeLayer = CNN_LAYERS[hoveredIdx !== null ? hoveredIdx : activeLayerIdx];

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 shadow-2xl ${
        isDark
          ? 'bg-surface-950/90 border-primary-500/25 shadow-primary-950/40'
          : 'bg-white border-surface-200 shadow-xl'
      }`}
    >
      {/* Visualizer Top Bar & Controls */}
      <div
        className={`px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b ${
          isDark ? 'bg-surface-900/80 border-surface-800' : 'bg-surface-50 border-surface-200'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-surface-200' : 'text-surface-800'}`}>
            3D Neural Network Architecture Inspector
          </span>
          <span className={`hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full font-mono ${
            isDark ? 'bg-primary-500/15 text-primary-400 border border-primary-500/30' : 'bg-primary-50 text-primary-700'
          }`}>
            11 Layers {contextLost ? 'Schematic' : 'Floating'}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {!contextLost && (
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`px-2.5 py-1 text-xs rounded-lg font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                autoRotate
                  ? isDark
                    ? 'bg-primary-500/20 text-primary-300 border border-primary-500/40'
                    : 'bg-primary-100 text-primary-800'
                  : isDark
                    ? 'bg-surface-800 text-surface-400 hover:text-white'
                    : 'bg-surface-200 text-surface-600'
              }`}
              title="Toggle Auto-Rotation"
            >
              <FiRotateCcw size={12} className={autoRotate ? 'animate-spin' : ''} />
              <span className="hidden sm:inline">Rotate</span>
            </button>
          )}

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-2.5 py-1 text-xs rounded-lg font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              isPlaying
                ? isDark
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-cyan-100 text-cyan-800'
                : isDark
                  ? 'bg-surface-800 text-surface-400 hover:text-white'
                  : 'bg-surface-200 text-surface-600'
            }`}
            title="Toggle Data Flow Signal"
          >
            {isPlaying ? <FiPause size={12} /> : <FiPlay size={12} />}
            <span className="hidden sm:inline">{isPlaying ? 'Signal' : 'Paused'}</span>
          </button>

          {!contextLost && (
            <button
              onClick={resetCamera}
              className={`px-2.5 py-1 text-xs rounded-lg font-mono flex items-center gap-1 transition-all cursor-pointer ${
                isDark ? 'bg-surface-800 text-surface-300 hover:bg-surface-700' : 'bg-surface-200 text-surface-700 hover:bg-surface-300'
              }`}
              title="Reset 3D Camera"
            >
              <FiEye size={12} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport / 2D Schematic Fallback */}
      <div className="relative h-[380px] sm:h-[430px] w-full cursor-grab active:cursor-grabbing">
        {contextLost ? (
          <div className="h-full w-full p-6 flex flex-col justify-center items-center overflow-x-auto bg-surface-950">
            <div className="flex items-center gap-3 py-6 px-4">
              {CNN_LAYERS.map((layer, idx) => (
                <button
                  key={layer.label}
                  onClick={() => setActiveLayerIdx(idx)}
                  className={`flex flex-col items-center p-3 rounded-xl border transition-all cursor-pointer ${
                    activeLayerIdx === idx
                      ? 'border-primary-400 bg-primary-500/20 shadow-lg shadow-primary-500/30 scale-105'
                      : 'border-surface-800 bg-surface-900/60 hover:border-surface-700'
                  }`}
                  style={{ minWidth: '95px' }}
                >
                  <div
                    className="w-12 h-16 rounded-lg mb-2 shadow-inner transition-transform"
                    style={{ backgroundColor: layer.color, opacity: activeLayerIdx === idx ? 0.95 : 0.6 }}
                  />
                  <span className="text-xs font-mono font-bold text-white">{layer.label}</span>
                  <span className="text-[10px] font-mono text-cyan-300/70 mt-0.5">{layer.type}</span>
                </button>
              ))}
            </div>
            <p className="text-xs font-mono text-surface-400 text-center mt-2">
              Schematic Architecture View · Click any block to inspect tensor attributes
            </p>
          </div>
        ) : (
          <ErrorBoundary
            fallback={
              <div className="h-full flex flex-col items-center justify-center p-6 text-center bg-surface-950">
                <FiLayers className="text-primary-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-surface-200">Interactive Visualizer</p>
                <button
                  onClick={() => setContextLost(true)}
                  className="mt-3 px-3 py-1.5 text-xs rounded-lg bg-primary-600 text-white"
                >
                  Switch to Schematic Mode
                </button>
              </div>
            }
          >
            <Canvas
              camera={{ position: [0, 2.5, 14], fov: 42 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              style={{ background: isDark ? 'radial-gradient(ellipse at center, #0f172a 0%, #020617 100%)' : '#f8fafc' }}
              onCreated={({ gl }) => {
                gl.domElement.addEventListener('webglcontextlost', (e) => {
                  e.preventDefault();
                  setContextLost(true);
                });
              }}
            >
              <CNNSceneContent
                activeLayerIdx={activeLayerIdx}
                setActiveLayerIdx={setActiveLayerIdx}
                hoveredIdx={hoveredIdx}
                setHoveredIdx={setHoveredIdx}
                autoRotate={autoRotate}
                isPlaying={isPlaying}
                controlsRef={controlsRef}
              />
            </Canvas>
          </ErrorBoundary>
        )}

        {/* Floating Quick Hint */}
        {!contextLost && (
          <div className="absolute top-3 left-4 pointer-events-none">
            <span className="text-[11px] font-mono text-cyan-400/70 bg-surface-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/20">
              Click layer to inspect · Drag to rotate · Scroll to zoom
            </span>
          </div>
        )}
      </div>

      {/* Interactive Layer Inspector HUD */}
      <div
        className={`p-4 sm:p-5 border-t ${
          isDark ? 'bg-surface-900/95 border-surface-800' : 'bg-surface-50 border-surface-200'
        }`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: activeLayer.color }}
              />
              <h4 className={`text-base font-bold font-mono ${isDark ? 'text-white' : 'text-surface-900'}`}>
                {activeLayer.label}
              </h4>
              <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                isDark ? 'bg-surface-800 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
              }`}>
                Shape: {activeLayer.shape}
              </span>
              <span className={`text-xs font-mono opacity-60 ${isDark ? 'text-surface-300' : 'text-surface-600'}`}>
                ({activeLayer.info})
              </span>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-surface-300' : 'text-surface-700'}`}>
              {activeLayer.description}
            </p>
          </div>

          {/* Quick Layer Switcher Buttons */}
          <div className="flex items-center gap-1 flex-wrap max-w-full md:max-w-md">
            {CNN_LAYERS.map((layer, idx) => (
              <button
                key={layer.label}
                onClick={() => setActiveLayerIdx(idx)}
                className={`px-2 py-1 text-[10px] font-mono rounded transition-all cursor-pointer ${
                  activeLayerIdx === idx
                    ? 'bg-primary-500 text-white font-bold shadow-md shadow-primary-500/30 scale-105'
                    : isDark
                      ? 'bg-surface-800/80 text-surface-400 hover:text-white hover:bg-surface-700'
                      : 'bg-surface-200 text-surface-700 hover:bg-surface-300'
                }`}
              >
                {layer.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
