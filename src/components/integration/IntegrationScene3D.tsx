import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const integrations = [
  { name: 'Stripe', x: 48, y: 8, highlighted: false },
  { name: 'Fitbit', x: 68, y: 10, highlighted: false },
  { name: 'Hint', x: 58, y: 16, highlighted: true },
  { name: 'Cerbo', x: 72, y: 18, highlighted: true },
  { name: 'OURA', x: 85, y: 14, highlighted: false },
  { name: 'Azalea Health', x: 12, y: 18, highlighted: false },
  { name: 'AdvancedMD', x: 28, y: 16, highlighted: false },
  { name: 'Elation', x: 38, y: 22, highlighted: true },
  { name: 'Dexcom', x: 92, y: 22, highlighted: false },
  { name: 'Allscripts', x: 8, y: 28, highlighted: false },
  { name: 'Wahoo', x: 25, y: 26, highlighted: false },
  { name: 'AkuteHealth', x: 82, y: 28, highlighted: true },
  { name: 'NextGen', x: 94, y: 32, highlighted: false },
  { name: 'Netsmart', x: 18, y: 36, highlighted: false },
  { name: 'CharmHealth', x: 35, y: 34, highlighted: true },
  { name: 'Lemlist', x: 78, y: 36, highlighted: false },
  { name: 'Google Fit', x: 88, y: 38, highlighted: false },
  { name: 'DrChrono', x: 10, y: 42, highlighted: false },
  { name: 'Garmin', x: 22, y: 48, highlighted: false },
  { name: 'Spruce', x: 38, y: 46, highlighted: false },
  { name: 'TriNet', x: 94, y: 48, highlighted: false },
  { name: 'Quest', x: 14, y: 56, highlighted: false },
  { name: 'Epic', x: 30, y: 58, highlighted: false },
  { name: 'Practice Fusion', x: 42, y: 64, highlighted: true },
  { name: 'Google Console', x: 78, y: 52, highlighted: false },
  { name: 'Yuzu Health', x: 88, y: 56, highlighted: false },
  { name: 'OMRON', x: 14, y: 68, highlighted: false },
  { name: 'Cerner', x: 32, y: 72, highlighted: false },
  { name: 'eClinicalWorks', x: 52, y: 74, highlighted: false },
  { name: 'Google Analytics', x: 74, y: 64, highlighted: false },
  { name: 'Workday', x: 84, y: 66, highlighted: false },
  { name: 'ModMed', x: 94, y: 72, highlighted: false },
  { name: 'ManifestRx', x: 60, y: 78, highlighted: false },
  { name: 'AthenaHealth', x: 75, y: 76, highlighted: false },
  { name: 'QuickBooks', x: 86, y: 80, highlighted: false },
  { name: 'Paycom', x: 95, y: 84, highlighted: false },
];

// Convert 2D percentage positions to 3D coordinates
const to3DPosition = (x: number, y: number): [number, number, number] => {
  const xPos = ((x - 50) / 50) * 6;
  const yPos = ((50 - y) / 50) * 4;
  const zPos = (Math.random() - 0.5) * 2;
  return [xPos, yPos, zPos];
};

// Integration card component in 3D space
const IntegrationCard = ({ integration, index }: { integration: typeof integrations[0]; index: number }) => {
  const position = useMemo(() => to3DPosition(integration.x, integration.y), [integration.x, integration.y]);
  
  return (
    <Float
      speed={1.5 + index * 0.1}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={position}>
        <Html
          transform
          occlude
          distanceFactor={8}
          style={{
            transition: 'all 0.3s',
          }}
        >
          <div
            className={`
              px-3 py-2 rounded-lg border text-xs font-medium
              whitespace-nowrap cursor-pointer backdrop-blur-sm
              transition-all duration-300 hover:scale-110
              ${integration.highlighted 
                ? 'border-primary bg-primary/20 text-primary shadow-md' 
                : 'border-border/50 bg-white/90 text-foreground hover:border-primary/50'
              }
            `}
          >
            {integration.name}
          </div>
        </Html>
      </group>
    </Float>
  );
};

// Animated connection lines
const ConnectionLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  const lineData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 4 + Math.random() * 2;
      return {
        start: new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * (radius * 0.6), (Math.random() - 0.5) * 2),
        end: new THREE.Vector3(0, 0, 0),
      };
    });
  }, []);

  return (
    <group ref={linesRef}>
      {lineData.map((line, i) => (
        <AnimatedLine key={i} start={line.start} end={line.end} index={i} />
      ))}
    </group>
  );
};

// Single animated line with particle
const AnimatedLine = ({ start, end, index }: { start: THREE.Vector3; end: THREE.Vector3; index: number }) => {
  const particleRef = useRef<THREE.Mesh>(null);
  
  const curve = useMemo(() => {
    const midPoint = new THREE.Vector3().lerpVectors(start, end, 0.5);
    midPoint.z += (Math.random() - 0.5) * 1;
    return new THREE.QuadraticBezierCurve3(start, midPoint, end);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);
  
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: '#e5e5e5', transparent: true, opacity: 0.3 });
  }, []);

  const lineObject = useMemo(() => {
    return new THREE.Line(lineGeometry, lineMaterial);
  }, [lineGeometry, lineMaterial]);

  useFrame(({ clock }) => {
    if (particleRef.current) {
      const t = ((clock.getElapsedTime() * 0.3 + index * 0.1) % 1);
      const point = curve.getPoint(t);
      particleRef.current.position.copy(point);
    }
  });

  return (
    <group>
      <primitive object={lineObject} />
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#f97316" />
      </mesh>
    </group>
  );
};

// Central hub component
const CentralHub = () => {
  const hubRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (hubRef.current) {
      hubRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={hubRef} position={[0, 0, 0]}>
        {/* Glow effect */}
        <mesh>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.1} />
        </mesh>
        
        <Html transform distanceFactor={6} center>
          <div className="relative bg-white border border-border rounded-xl shadow-elevated p-4 w-44">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            
            {/* Content */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center">
                <span className="text-xs">📊</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground leading-tight">Insights</h3>
                <p className="text-[9px] text-primary font-medium">HealthCompiler</p>
              </div>
            </div>
            
            {/* Skeleton lines */}
            <div className="space-y-1.5 mb-3">
              <div className="h-1.5 bg-muted rounded-full w-full"></div>
              <div className="h-1.5 bg-muted rounded-full w-3/4"></div>
              <div className="h-1.5 bg-muted rounded-full w-1/2"></div>
            </div>
            
            {/* Mini chart */}
            <div className="flex items-end gap-0.5 h-10">
              {[30, 50, 40, 70, 55, 45, 65].map((h, i) => (
                <div 
                  key={i}
                  className="flex-1 bg-primary/40 rounded-t-sm"
                  style={{ 
                    height: `${h}%`,
                    animation: `pulse ${1.5 + i * 0.2}s ease-in-out infinite`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
};

// Background particles
const BackgroundParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#cbd5e1" transparent opacity={0.6} />
    </points>
  );
};

export const IntegrationScene3D = () => {
  return (
    <div className="w-full h-[550px] md:h-[650px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white border border-border/50">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <BackgroundParticles />
        <ConnectionLines />
        <CentralHub />
        
        {integrations.map((integration, index) => (
          <IntegrationCard key={integration.name} integration={integration} index={index} />
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
