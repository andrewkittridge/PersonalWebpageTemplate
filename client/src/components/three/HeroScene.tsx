import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface HeroSceneProps {
  scrollProgress: number;
  mouseX: number;
  mouseY: number;
}

export function HeroScene({ scrollProgress, mouseX, mouseY }: HeroSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!groupRef.current) return;

    // Lerp toward mouse position
    targetRotation.current.x = mouseY * 0.3;
    targetRotation.current.y = mouseX * 0.3;

    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.z += 0.002;

    // Fade out on scroll
    const opacity = Math.max(0, 1 - scrollProgress * 4);
    groupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        (child.material as THREE.MeshBasicMaterial).opacity = opacity;
      }
    });

    // Scale down slightly as scrolling
    const scale = 1 - scrollProgress * 0.5;
    groupRef.current.scale.setScalar(Math.max(0.5, scale));
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={[3, 0.5, -1]}>
        {/* Wireframe icosahedron — amber glow */}
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial
            color="#f0a830"
            wireframe
            transparent
            opacity={0.25}
            toneMapped={false}
          />
        </mesh>

        {/* Inner icosahedron — teal, slower rotation offset */}
        <mesh rotation={[0.4, 0.2, 0]}>
          <icosahedronGeometry args={[1.0, 0]} />
          <meshBasicMaterial
            color="#38bdd2"
            wireframe
            transparent
            opacity={0.15}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}
