/**
 * CNN3DVisualizer — Interactive 3D Convolutional Neural Network architecture
 * inspired by dora.run-style immersive 3D experiences.
 *
 * Shows a CNN pipeline as 3D layers floating in space:
 * Input → Conv → Pool → Conv → Pool → FC → Output
 * with animated data flow "signal" traveling through layers.
 *
 * Features:
 * - OrbitControls for exploration
 * - Animated signal pulse flowing through network
 * - Layer hover highlights
 * - Configurable architecture
 * - Reduced motion support
 * - WebGL fallback
 */

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';

interface LayerConfig {
  label: string;
  type: 'input' | 'conv' | 'pool' | 'fc' | 'output';
  width: number;
  height: number;
  depth: number;
  color: string;
  info: string;
  description: string;
}

const CNN_LAYERS: LayerConfig[] = [
  { label: 'Input', type: 'input', width: 2.2, height: 2.2, depth: 0.15, color: '#3b82f6', info: '224×224×3 RGB', description: 'Raw image data fed into the network. Represents pixel intensities across color channels.' },
  { label: 'Conv1', type: 'conv', width: 2.0, height: 2.0, depth: 0.5, color: '#6366f1', info: '64 filters, 3×3', description: 'First convolutional block. Learns low-level features like edges, textures, and simple spatial patterns.' },
  { label: 'ReLU', type: 'conv', width: 2.0, height: 2.0, depth: 0.12, color: '#8b5cf6', info: 'Activation', description: 'Non-linear activation function. Introduces non-linearity to the network, allowing it to learn complex representations.' },
  { label: 'Pool1', type: 'pool', width: 1.5, height: 1.5, depth: 0.12, color: '#06b6d4', info: 'MaxPool 2×2', description: 'Spatial downsampling. Reduces dimensionality and computational load while providing translation invariance.' },
  { label: 'Conv2', type: 'conv', width: 1.3, height: 1.3, depth: 0.7, color: '#6366f1', info: '128 filters, 3×3', description: 'Deep convolutional features. Learns higher-level, more complex shapes and object parts.' },
  { label: 'ReLU', type: 'conv', width: 1.3, height: 1.3, depth: 0.12, color: '#8b5cf6', info: 'Activation', description: 'Second non-linear activation passing positive signals forward.' },
  { label: 'Pool2', type: 'pool', width: 0.9, height: 0.9, depth: 0.12, color: '#06b6d4', info: 'MaxPool 2×2', description: 'Further downsampling to increase the receptive field of deeper layers.' },
  { label: 'Conv3', type: 'conv', width: 0.7, height: 0.7, depth: 0.9, color: '#6366f1', info: '256 filters, 3×3', description: 'Highly semantic feature maps aggregating complex visual patterns specific to object classes.' },
  { label: 'FC1', type: 'fc', width: 0.3, height: 1.4, depth: 0.3, color: '#10b981', info: '4096 neurons', description: 'Fully connected layer flattening the 3D spatial features into a 1D vector for classification.' },
  { label: 'FC2', type: 'fc', width: 0.3, height: 0.8, depth: 0.3, color: '#10b981', info: '1024 neurons', description: 'Dense reasoning layer synthesizing all extracted features into high-level abstractions.' },
  { label: 'Output', type: 'output', width: 0.3, height: 0.5, depth: 0.3, color: '#f59e0b', info: '10 classes', description: 'Softmax probability distribution predicting the final likelihood of each target class.' },
];

/** Single CNN layer as a 3D box */
function CNNLayer({
  config,
  position,
  isActive,
  onHover,
}: {
  config: LayerConfig;
  position: [number, number, number];
  isActive: boolean;
  onHover: (hovering: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const targetEmissive = isActive ? 0.25 : 0;
  const currentEmissive = useRef(0);

  useFrame(() => {
    currentEmissive.current += (targetEmissive - currentEmissive.current) * 0.08;
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = currentEmissive.current;
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[config.depth, config.height, config.width]}
        radius={0.03}
        smoothness={4}
        onPointerOver={() => onHover(true)}
        onPointerOut={() => onHover(false)}
      >
        <meshPhysicalMaterial
          color={config.color}
          transparent
          opacity={isActive ? 0.95 : 0.65}
          emissive={config.color}
          emissiveIntensity={0}
          roughness={0.1}
          metalness={0.4}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>
      {/* Layer label below */}
      <Text
        position={[0, -config.height / 2 - 0.25, 0]}
        fontSize={0.12}
        color={isActive ? "#ffffff" : "#94a3b8"}
        anchorX="center"
        anchorY="top"
        font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf"
      >
        {config.label}
      </Text>
      
      {/* HTML tooltip on hover */}
      {isActive && (
        <Html center position={[0, config.height / 2 + 0.5, 0]} zIndexRange={[100, 0]}>
          <div className="bg-surface-900 border border-primary-500/30 rounded-lg p-3 w-48 shadow-xl shadow-primary-500/10 pointer-events-none transform -translate-y-2">
            <h4 className="text-sm font-semibold text-primary-400 mb-1">{config.label}</h4>
            <p className="text-xs font-mono text-surface-200/50 mb-1.5">{config.info}</p>
            <p className="text-[10px] leading-relaxed text-surface-200/80">
              {config.description}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}

/** Animated signal pulse traveling through the network */
function SignalPulse({ positions }: { positions: [number, number, number][] }) {
  const pulseRef = useRef<THREE.Mesh>(null!);
  const progress = useRef(0);

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * 0.3) % 1;
    const t = progress.current;
    const totalSegments = positions.length - 1;
    const segIdx = Math.min(Math.floor(t * totalSegments), totalSegments - 1);
    const segT = (t * totalSegments) - segIdx;

    const from = positions[segIdx];
    const to = positions[segIdx + 1];
    if (pulseRef.current && from && to) {
      pulseRef.current.position.set(
        from[0] + (to[0] - from[0]) * segT,
        from[1] + (to[1] - from[1]) * segT,
        from[2] + (to[2] - from[2]) * segT,
      );
    }
  });

  return (
    <mesh ref={pulseRef}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

/** Connection lines between layers */
function ConnectionLines({ positions }: { positions: [number, number, number][] }) {
  const lineRef = useRef<THREE.LineSegments>(null!);
  
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
    <lineSegments ref={lineRef} geometry={lineGeo}>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.15} />
    </lineSegments>
  );
}

/** Main CNN Scene */
function CNNScene() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const layerSpacing = 1.2;
  const totalWidth = (CNN_LAYERS.length - 1) * layerSpacing;
  const startX = -totalWidth / 2;

  const positions: [number, number, number][] = CNN_LAYERS.map((_, i) => [
    startX + i * layerSpacing,
    0,
    0,
  ]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#818cf8" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#06b6d4" />

      {CNN_LAYERS.map((layer, i) => (
        <CNNLayer
          key={`${layer.label}-${i}`}
          config={layer}
          position={positions[i]}
          isActive={hoveredIdx === i}
          onHover={(h) => setHoveredIdx(h ? i : null)}
        />
      ))}

      <ConnectionLines positions={positions} />
      <SignalPulse positions={positions} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

/** Exported component with WebGL fallback */
export function CNN3DVisualizer({ isDark }: { isDark: boolean }) {
  const [webglFailed, setWebglFailed] = useState(false);

  if (webglFailed) {
    return (
      <div className={`rounded-xl p-8 text-center ${isDark ? 'bg-surface-900/80 border border-surface-700/30' : 'bg-surface-50 border border-surface-200'}`}>
        <div className="text-4xl mb-3">🧠</div>
        <p className={`text-sm ${isDark ? 'text-surface-200/60' : 'text-surface-700/60'}`}>
          3D visualization requires WebGL. Your browser does not support it.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-surface-950 border border-surface-700/30' : 'bg-surface-900 border border-surface-200'}`}>
      <div style={{ height: '420px', width: '100%' }}>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          onError={() => setWebglFailed(true)}
          style={{ background: 'linear-gradient(180deg, #060a14 0%, #0c1220 100%)' }}
        >
          <CNNScene />
        </Canvas>
      </div>
      <div className={`px-5 py-3 text-center border-t ${isDark ? 'border-surface-700/30' : 'border-surface-700'}`}>
        <p className="text-xs text-surface-200/40 font-mono">
          Drag to rotate · Hover layers for details · Signal shows inference flow
        </p>
      </div>
    </div>
  );
}
