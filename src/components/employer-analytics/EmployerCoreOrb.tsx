import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';

const orbitData = [
  { label: 'Health Benefits', color: '#f97316', radius: 2.2, speed: 0.3 },
  { label: 'Workforce Health', color: '#06b6d4', radius: 2.8, speed: 0.25 },
  { label: 'Human Capital', color: '#8b5cf6', radius: 3.4, speed: 0.2 },
  { label: 'Financial Risk', color: '#22c55e', radius: 4.0, speed: 0.15 },
  { label: 'Compliance & Fiduciary', color: '#ec4899', radius: 4.6, speed: 0.1 },
];

function DataParticles({ radius, color, count = 20, speed }: { radius: number; color: string; count?: number; speed: number }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, [count, radius]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += speed * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color={color} transparent opacity={0.8} />
    </points>
  );
}

function OrbitRing({ radius, color, speed, label }: { radius: number; color: string; speed: number; label: string }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const labelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += speed * 0.002;
    }
    if (labelRef.current) {
      const time = state.clock.elapsedTime * speed;
      labelRef.current.position.x = Math.cos(time) * radius;
      labelRef.current.position.z = Math.sin(time) * radius;
    }
  });

  return (
    <group>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.015, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
      <group ref={labelRef}>
        <Html center distanceFactor={8}>
          <div className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap backdrop-blur-sm border"
            style={{ 
              backgroundColor: `${color}20`,
              borderColor: `${color}60`,
              color: color,
            }}>
            {label}
          </div>
        </Html>
      </group>
      <DataParticles radius={radius} color={color} speed={speed} />
    </group>
  );
}

function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
    }
  });

  return (
    <group>
      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.15} />
      </mesh>
      {/* Main orb */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          emissive="#f97316"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
      {/* Center label */}
      <Html center distanceFactor={6}>
        <div className="text-center pointer-events-none">
          <div className="text-xs font-semibold text-primary opacity-90">Health Compiler</div>
          <div className="text-[10px] text-muted-foreground">Employer Analytics Layer</div>
        </div>
      </Html>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
      
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <CentralOrb />
      </Float>
      
      {orbitData.map((orbit, i) => (
        <OrbitRing key={i} {...orbit} />
      ))}
    </>
  );
}

export function EmployerCoreOrb() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}