import { Suspense } from 'react'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { TrendingUp, Activity, AlertTriangle, CheckCircle } from 'lucide-react'

const clusters = [
  { label: 'Improving', color: '#22c55e', position: [1.5, 1, 0.5] },
  { label: 'Stable', color: '#06b6d4', position: [-1.2, 0.8, 1] },
  { label: 'At Risk', color: '#f97316', position: [0.5, -1, 1.5] },
  { label: 'Proactive Outreach', color: '#8b5cf6', position: [-0.8, -0.5, -1] },
]

const outcomes = [
  {
    icon: TrendingUp,
    label: 'Patients improving',
    color: 'text-green-500',
    description: 'Patients whose outcomes are improving',
  },
  {
    icon: Activity,
    label: 'Clinically stable',
    color: 'text-cyan-500',
    description: 'Patients who remain clinically stable',
  },
  {
    icon: AlertTriangle,
    label: 'Early risk signals',
    color: 'text-orange-500',
    description:
      'Patients showing early risk signals requiring proactive outreach',
  },
  {
    icon: CheckCircle,
    label: 'Better coordination',
    color: 'text-purple-500',
    description:
      'This enables earlier intervention, better care coordination, and measurable improvement in outcomes',
  },
]

function PopulationNodes({ count = 150 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const clusterColors = [
      new THREE.Color('#22c55e'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#f97316'),
      new THREE.Color('#8b5cf6'),
    ]

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 2 + Math.random() * 0.5

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      const clusterIdx = Math.floor(Math.random() * 4)
      const color = clusterColors[clusterIdx]
      col[i * 3] = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b
    }
    return [pos, col]
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach='attributes-color'
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.9}
      />
    </points>
  )
}

function ClusterLabel({
  position,
  label,
  color,
}: {
  position: number[]
  label: string
  color: string
}) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x =
        position[0] + Math.sin(state.clock.elapsedTime + position[1]) * 0.1
      ref.current.position.y =
        position[1] + Math.cos(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <group
      ref={ref}
      position={position as [number, number, number]}
    >
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Html
        center
        distanceFactor={8}
      >
        <div
          className='px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap backdrop-blur-sm'
          style={{ backgroundColor: `${color}30`, color }}
        >
          {label}
        </div>
      </Html>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight
        position={[10, 10, 10]}
        intensity={0.8}
      />

      <Suspense fallback={<div>Loading 3D cluster...</div>}>
        <PopulationNodes />
      </Suspense>
      <Suspense fallback={<div>Loading 3D cluster...</div>}>
        {clusters.map((cluster, i) => (
          <ClusterLabel
            key={i}
            {...cluster}
          />
        ))}
      </Suspense>

      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color='#1a1a2e'
          transparent
          opacity={0.5}
        />
      </mesh>
    </>
  )
}

export function HowWeImprove() {
  return (
    <section className='py-20 md:py-28 bg-muted/40'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            How Health Compiler Improves Health Outcomes
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Health Compiler provides continuous population health visibility,
            not point-in-time snapshots. Care teams can quickly identify:
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* 3D Sphere */}
          <div className='h-[400px] md:h-[500px] relative'>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <Scene />
            </Canvas>

            <div className='absolute inset-0 pointer-events-none'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20 animate-ping-slow' />
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-accent/10 animate-ping-slow'
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>

          {/* Outcomes */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-6'>
              Patient Outcomes Visibility
            </h3>
            <div className='space-y-4'>
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className='flex items-center gap-4 p-5 rounded-xl bg-card border hover:shadow-lg transition-all group'
                >
                  <div className='w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <outcome.icon className={`w-6 h-6 ${outcome.color}`} />
                  </div>
                  <div>
                    <span className='font-semibold'>{outcome.label}</span>
                    <p className='text-sm text-muted-foreground mt-0.5'>
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
