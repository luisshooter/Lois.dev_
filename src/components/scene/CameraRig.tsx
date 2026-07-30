import { useFrame, useThree } from '@react-three/fiber';
import type { RefObject } from 'react';

interface CameraRigProps {
  scrollRatio: RefObject<number>;
  mouse: RefObject<{ x: number; y: number }>;
}

/** Moves the camera down as the page scrolls and adds subtle mouse parallax. */
export function CameraRig({ scrollRatio, mouse }: CameraRigProps) {
  const { camera } = useThree();

  useFrame(() => {
    const ratio = scrollRatio.current;
    const m = mouse.current;
    const targetY = -ratio * 35;
    camera.position.x += (m.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (targetY + m.y * 0.8 - camera.position.y) * 0.05;
  });

  return null;
}
