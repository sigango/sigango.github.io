import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuralLatticeInnerProps {
  pointer: { x: number; y: number };
}

function NeuralLatticeInner({ pointer }: NeuralLatticeInnerProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const pulseGroupRef = useRef<THREE.Group>(null!);

  // Generate 3D network topology
  const { points, lines, connections } = useMemo(() => {
    const pointCount = 220;
    const radius = 5.2;
    const connectionRadius = 1.9;
    const pts: number[] = [];
    const lns: number[] = [];
    const conns: { from: [number, number, number]; to: [number, number, number] }[] = [];

    // Distribute points organically inside a sphere
    for (let i = 0; i < pointCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * radius;
      pts.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }

    // Connect close nodes
    for (let i = 0; i < pointCount; i++) {
      for (let j = i + 1; j < pointCount; j++) {
        const dx = pts[i * 3] - pts[j * 3];
        const dy = pts[i * 3 + 1] - pts[j * 3 + 1];
        const dz = pts[i * 3 + 2] - pts[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionRadius) {
          lns.push(
            pts[i * 3], pts[i * 3 + 1], pts[i * 3 + 2],
            pts[j * 3], pts[j * 3 + 1], pts[j * 3 + 2]
          );
          if (conns.length < 40 && Math.random() > 0.6) {
            conns.push({
              from: [pts[i * 3], pts[i * 3 + 1], pts[i * 3 + 2]],
              to: [pts[j * 3], pts[j * 3 + 1], pts[j * 3 + 2]],
            });
          }
        }
      }
    }

    return { points: pts, lines: lns, connections: conns };
  }, []);

  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, [points]);

  const linesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
    return geo;
  }, [lines]);

  // Synaptic pulse signals
  const pulses = useMemo(() => {
    return connections.slice(0, 24).map((conn, idx) => ({
      from: conn.from,
      to: conn.to,
      speed: 0.2 + (idx % 5) * 0.1,
      offset: (idx / 24),
    }));
  }, [connections]);

  const pulseMeshes = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const cycle = time * ((Math.PI * 2) / 60);

    if (groupRef.current) {
      // Smooth ambient rotation + cursor inertia
      groupRef.current.rotation.y = cycle + pointer.x * 0.35;
      groupRef.current.rotation.x = Math.sin(cycle * 1.5) * 0.12 + pointer.y * 0.25;
      groupRef.current.rotation.z = Math.cos(cycle * 0.8) * 0.05;
    }

    // Animate synaptic signals along connection paths
    pulses.forEach((p, idx) => {
      const mesh = pulseMeshes.current[idx];
      if (mesh) {
        const progress = (time * p.speed + p.offset) % 1;
        mesh.position.set(
          p.from[0] + (p.to[0] - p.from[0]) * progress,
          p.from[1] + (p.to[1] - p.from[1]) * progress,
          p.from[2] + (p.to[2] - p.from[2]) * progress
        );
        const scale = Math.sin(progress * Math.PI) * 0.08 + 0.03;
        mesh.scale.setScalar(scale);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Primary Neural Nodes */}
      <points geometry={pointsGeometry}>
        <pointsMaterial
          size={0.09}
          color="#38bdf8"
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Outer Halo Nodes */}
      <points geometry={pointsGeometry}>
        <pointsMaterial
          size={0.18}
          color="#818cf8"
          transparent
          opacity={0.3}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Synaptic Wire Connections */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Traveling Synaptic Signals (Action Potentials) */}
      <group ref={pulseGroupRef}>
        {pulses.map((_, idx) => (
          <mesh
            key={idx}
            ref={(el) => { pulseMeshes.current[idx] = el; }}
          >
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial
              color={idx % 2 === 0 ? '#38bdf8' : '#c084fc'}
              transparent
              opacity={0.9}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>
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

/** WebGL fallback component — renders when Three.js canvas fails */
export function WebGLFallback({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? 'radial-gradient(ellipse at 30% 40%, rgba(99, 102, 241, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(56, 189, 248, 0.08) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 30% 40%, rgba(99, 102, 241, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(56, 189, 248, 0.04) 0%, transparent 60%)',
      }}
    />
  );
}
