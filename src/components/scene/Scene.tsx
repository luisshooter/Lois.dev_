import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { FloatingShapes } from './FloatingShapes';
import { ModelSlot } from './ModelSlot';
import { Computer3D } from './Computer3D';
import { CameraRig } from './CameraRig';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Fixed full-viewport background scene: particle field, wireframe shapes and
 * an (optional) real 3D model slot, all reacting to scroll + mouse.
 */
export function Scene() {
  const { scrollRatio, mouse } = useScrollProgress();

  return (
    <Canvas
      className="!fixed !inset-0 -z-20 pointer-events-none"
      camera={{ position: [0, 0, 28], fov: 60, near: 0.1, far: 1000 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.75]}
    >
      <CameraRig scrollRatio={scrollRatio} mouse={mouse} />
      <ParticleField scrollRatio={scrollRatio} />
      <FloatingShapes scrollRatio={scrollRatio} />
      <Computer3D scrollRatio={scrollRatio} mouse={mouse} position={[13, -1.5, -11]} scale={1.3} />
      <ModelSlot position={[0, -60, -10]} scale={1.4} />
    </Canvas>
  );
}
