import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuralLatticeInnerProps {
  pointer: { x: number; y: number };
}

function NeuralLatticeInner({ pointer }: NeuralLatticeInnerProps) {
  const groupRef = useRef<THREE.Group>(null!);

  const { pointsGeometry, linesGeometry } = useMemo(() => {
    const gridSize = 7;
    const spacing = 1.1;
    const points: number[] = [];
    const lines: number[] = [];

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          const px = (x - gridSize / 2) * spacing;
          const py = (y - gridSize / 2) * spacing;
          const pz = (z - gridSize / 2) * spacing;
          points.push(px, py, pz);
        }
      }
    }

    const totalPoints = gridSize * gridSize * gridSize;
    for (let i = 0; i < totalPoints; i++) {
      for (let j = i + 1; j < totalPoints; j++) {
        const dx = points[i * 3] - points[j * 3];
        const dy = points[i * 3 + 1] - points[j * 3 + 1];
        const dz = points[i * 3 + 2] - points[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < spacing * 1.25) {
          lines.push(
            points[i * 3], points[i * 3 + 1], points[i * 3 + 2],
            points[j * 3], points[j * 3 + 1], points[j * 3 + 2]
          );
        }
      }
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));

    return { pointsGeometry: pGeo, linesGeometry: lGeo };
  }, []);

  useFrame(({ clock }) => {
    // Exactly 1 minute (60 seconds) per full rotation cycle
    const t = clock.getElapsedTime() * ((Math.PI * 2) / 60);
    if (groupRef.current) {
      // Slow ambient rotation + subtle pointer influence
      groupRef.current.rotation.y = t + pointer.x * 0.3;
      groupRef.current.rotation.x = Math.sin(t * 1.5) * 0.08 + pointer.y * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={pointsGeometry}>
        <pointsMaterial
          size={0.07}
          color="#818cf8"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export function NeuralLattice() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [prefersReduced]);

  return <NeuralLatticeInner pointer={prefersReduced ? { x: 0, y: 0 } : pointer} />;
}

/**
 * WebGL fallback component — renders when Three.js canvas fails.
 * Shows a CSS-only animated gradient instead.
 */
export function WebGLFallback({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? 'radial-gradient(ellipse at 30% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.05) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 30% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.03) 0%, transparent 60%)',
      }}
    />
  );
}
