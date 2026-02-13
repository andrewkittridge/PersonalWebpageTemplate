import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ScrollCameraProps {
  scrollProgress: number;
}

export function ScrollCamera({ scrollProgress }: ScrollCameraProps) {
  const { camera } = useThree();

  useFrame(() => {
    // Camera pushes forward as user scrolls: z goes from 5 to 3
    const targetZ = 5 - scrollProgress * 2;
    camera.position.z += (targetZ - camera.position.z) * 0.05;

    // Subtle vertical shift
    const targetY = -scrollProgress * 0.5;
    camera.position.y += (targetY - camera.position.y) * 0.03;

    camera.lookAt(new THREE.Vector3(0, camera.position.y * 0.5, 0));
  });

  return null;
}
