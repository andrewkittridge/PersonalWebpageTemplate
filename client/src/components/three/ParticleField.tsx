import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParticleFieldProps {
  scrollProgress: number;
  mouseX: number;
  mouseY: number;
}

export function ParticleField({ scrollProgress, mouseX, mouseY }: ParticleFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const isMobile = useIsMobile();
  const count = isMobile ? 120 : 400;

  const { positions, speeds, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      speeds[i] = 0.2 + Math.random() * 0.8;
      sizes[i] = 0.02 + Math.random() * 0.04;
    }

    return { positions, speeds, sizes };
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const baseX = positions[i * 3];
      const baseY = positions[i * 3 + 1];
      const baseZ = positions[i * 3 + 2];
      const speed = speeds[i];

      // Sinusoidal drift
      const driftX = Math.sin(t * 0.3 * speed + i * 0.5) * 0.5;
      const driftY = Math.cos(t * 0.2 * speed + i * 0.3) * 0.4;
      const driftZ = Math.sin(t * 0.15 * speed + i * 0.7) * 0.3;

      // Mouse repulsion (subtle)
      const dx = (baseX + driftX) - mouseX * 5;
      const dy = (baseY + driftY) - mouseY * 5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulsion = dist < 3 ? (3 - dist) / 3 * 0.5 : 0;
      const repX = dist > 0.01 ? (dx / dist) * repulsion : 0;
      const repY = dist > 0.01 ? (dy / dist) * repulsion : 0;

      // Scroll influence: rotate field
      const scrollAngle = scrollProgress * Math.PI * 0.3;

      dummy.position.set(
        baseX + driftX + repX,
        baseY + driftY + repY - scrollProgress * 4,
        baseZ + driftZ
      );

      // Apply scroll rotation around Y
      dummy.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), scrollAngle * 0.1);

      const s = sizes[i];
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Color: mix amber and teal based on position
      const colorMix = (Math.sin(i * 0.1 + t * 0.2) + 1) / 2;
      color.setRGB(
        0.94 * colorMix + 0.22 * (1 - colorMix),
        0.66 * colorMix + 0.74 * (1 - colorMix),
        0.19 * colorMix + 0.82 * (1 - colorMix)
      );
      meshRef.current.setColorAt(i, color);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 6]} />
      <meshBasicMaterial transparent opacity={0.6} toneMapped={false} />
    </instancedMesh>
  );
}
