import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { RefObject } from 'react';
import { heroInteraction } from '../../state/heroInteraction';

interface Computer3DProps {
  scrollRatio: RefObject<number>;
  mouse: RefObject<{ x: number; y: number }>;
  position?: [number, number, number];
  scale?: number;
}

const ACCENT = 0x00ff88;
const ACCENT2 = 0x7c3aed;

/**
 * Wireframe retro terminal that lives in the hero's 3D layer. It looks toward
 * the cursor (like the photo's tilt effect) and "wakes up" — brighter screen,
 * faster cursor blink — while the pointer is over the hero photo, via the
 * heroInteraction flag set from HeroPhoto's onMouseEnter/Leave.
 */
export function Computer3D({ scrollRatio, mouse, position = [0, 0, 0], scale = 1 }: Computer3DProps) {
  const rigRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.Mesh>(null);
  const frameRef = useRef<THREE.Mesh>(null);
  const cursorRef = useRef<THREE.Mesh>(null);
  const hoverAmount = useRef(0);

  useFrame(({ clock }) => {
    const rig = rigRef.current;
    if (!rig) return;

    const t = clock.getElapsedTime();
    const ratio = scrollRatio.current;
    const m = mouse.current;

    const targetRotY = m.x * 0.35;
    const targetRotX = -m.y * 0.15;
    rig.rotation.y += (targetRotY - rig.rotation.y) * 0.05;
    rig.rotation.x += (targetRotX - rig.rotation.x) * 0.05;

    rig.position.y = position[1] + Math.sin(t * 0.6) * 0.15 + ratio * 32;
    rig.position.x = position[0] + Math.cos(t * 0.35) * 0.12;

    const hoverTarget = heroInteraction.hovering ? 1 : 0;
    hoverAmount.current += (hoverTarget - hoverAmount.current) * 0.08;
    const h = hoverAmount.current;

    if (screenGlowRef.current) {
      const mat = screenGlowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.07 + h * 0.24;
    }
    if (frameRef.current) {
      const mat = frameRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.3 + h * 0.25;
    }
    if (cursorRef.current) {
      const mat = cursorRef.current.material as THREE.MeshBasicMaterial;
      const blinkSpeed = 1.2 + h * 5;
      mat.opacity = (Math.sin(t * blinkSpeed) * 0.5 + 0.5) * (0.35 + h * 0.65);
    }
  });

  return (
    <group position={position} scale={scale}>
      <group ref={rigRef}>
        {/* monitor frame */}
        <mesh ref={frameRef} position={[0, 1.3, 0]}>
          <boxGeometry args={[4.4, 2.8, 0.2]} />
          <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.3} />
        </mesh>

        {/* screen glow fill */}
        <mesh ref={screenGlowRef} position={[0, 1.3, 0.11]}>
          <planeGeometry args={[3.9, 2.35]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.07} depthWrite={false} />
        </mesh>

        {/* screen grid */}
        <mesh position={[0, 1.3, 0.12]}>
          <planeGeometry args={[3.9, 2.35, 8, 6]} />
          <meshBasicMaterial color={ACCENT2} wireframe transparent opacity={0.3} />
        </mesh>

        {/* blinking cursor on screen */}
        <mesh ref={cursorRef} position={[-1.55, 0.7, 0.13]}>
          <planeGeometry args={[0.28, 0.5]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.5} depthWrite={false} />
        </mesh>

        {/* neck */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 1.3, 6]} />
          <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.25} />
        </mesh>

        {/* base */}
        <mesh position={[0, -1.05, 0]}>
          <cylinderGeometry args={[1.1, 1.3, 0.16, 8]} />
          <meshBasicMaterial color={ACCENT2} wireframe transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}
