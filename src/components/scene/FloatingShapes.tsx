import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { RefObject } from 'react';

interface ShapeDef {
  geometry: THREE.BufferGeometry;
  color: number;
  baseX: number;
  baseY: number;
  baseZ: number;
}

interface FloatingShapesProps {
  scrollRatio: RefObject<number>;
}

const ACCENT = 0x00ff88;
const ACCENT2 = 0x7c3aed;

export function FloatingShapes({ scrollRatio }: FloatingShapesProps) {
  const groupRef = useRef<THREE.Group>(null);

  const shapes = useMemo<ShapeDef[]>(
    () => [
      { geometry: new THREE.IcosahedronGeometry(3.5, 1), color: ACCENT, baseX: 10, baseY: 3, baseZ: -8 },
      { geometry: new THREE.OctahedronGeometry(2.8, 0), color: ACCENT2, baseX: -12, baseY: -8, baseZ: -6 },
      { geometry: new THREE.TorusGeometry(3, 0.8, 8, 20), color: ACCENT, baseX: -8, baseY: -18, baseZ: -10 },
      { geometry: new THREE.TetrahedronGeometry(2.4, 0), color: ACCENT2, baseX: 12, baseY: -28, baseZ: -5 },
      { geometry: new THREE.IcosahedronGeometry(2, 0), color: ACCENT, baseX: -10, baseY: -38, baseZ: -12 },
      { geometry: new THREE.TorusKnotGeometry(2, 0.5, 60, 8), color: ACCENT2, baseX: 10, baseY: -48, baseZ: -14 },
    ],
    [],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const ratio = scrollRatio.current;
    const group = groupRef.current;
    if (!group) return;

    group.children.forEach((mesh, i) => {
      const s = shapes[i];
      mesh.rotation.x = t * (0.06 + i * 0.015) + ratio * 2.0;
      mesh.rotation.y = t * (0.05 + i * 0.012) + ratio * 1.5;
      mesh.position.y = s.baseY + Math.sin(t * 0.4 + i * 1.5) * 0.3 + ratio * 32;
      mesh.position.x = s.baseX + Math.cos(t * 0.3 + i * 1.2) * 0.2;
    });
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <mesh key={i} geometry={s.geometry} position={[s.baseX, s.baseY, s.baseZ]}>
          <meshBasicMaterial color={s.color} wireframe transparent opacity={0.16} />
        </mesh>
      ))}
    </group>
  );
}
