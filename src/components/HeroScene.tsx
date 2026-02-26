import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const RetroShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.2;
      meshRef.current.rotation.z = Math.cos(t * 0.1) * 0.05;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * -0.15;
      wireRef.current.rotation.x = Math.cos(t * 0.12) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        {/* Inner solid shape */}
        <mesh ref={meshRef} scale={1.8}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#ff0080"
            emissiveIntensity={0.15}
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>
        {/* Outer wireframe */}
        <mesh ref={wireRef} scale={2.6}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            color="#00ffff"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="!absolute inset-0"
      style={{ pointerEvents: "auto" }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00ffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ff0080" />
      <pointLight position={[0, -5, 3]} intensity={0.4} color="#ff8800" />
      <RetroShape />
    </Canvas>
  );
};

export default HeroScene;
