import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { RefObject } from 'react';

interface ParticleFieldProps {
  scrollRatio: RefObject<number>;
}

const COUNT = 2000;

export function ParticleField({ scrollRatio }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 120;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const ratio = scrollRatio.current;
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = t * 0.015 + ratio * 1.5;
    pointsRef.current.rotation.x = t * 0.006 + ratio * 0.8;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={0x00ff88} size={0.12} transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}
