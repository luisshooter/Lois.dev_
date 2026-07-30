import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export interface ModelSlotProps {
  /** Path to a .glb/.gltf under /public, e.g. "/models/laptop.glb". Omit to show the placeholder. */
  path?: string;
  position?: [number, number, number];
  scale?: number;
}

/**
 * Wireframe placeholder shown until a real GLTF model is dropped in `public/models/`
 * and its path is passed in. Keeps the "real 3D object" slot visually consistent
 * with the rest of the scene in the meantime.
 */
function Placeholder({ position, scale = 1 }: ModelSlotProps) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
    ref.current.rotation.x = clock.getElapsedTime() * 0.1;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <dodecahedronGeometry args={[1.6, 0]} />
      <meshBasicMaterial color={0x00ff88} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function GltfModel({ path, position, scale = 1 }: Required<Pick<ModelSlotProps, 'path'>> & ModelSlotProps) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={position} scale={scale} />;
}

/** Drop-in slot for a real 3D model. No `path` → renders a placeholder, same API either way. */
export function ModelSlot({ path, position = [0, 0, 0], scale = 1 }: ModelSlotProps) {
  if (!path) {
    return <Placeholder position={position} scale={scale} />;
  }
  return (
    <Suspense fallback={<Placeholder position={position} scale={scale} />}>
      <GltfModel path={path} position={position} scale={scale} />
    </Suspense>
  );
}
