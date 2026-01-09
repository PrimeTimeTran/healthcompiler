import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { Activity, AlertTriangle, Heart, Users } from 'lucide-react'

const clusters = [
  { label: 'Chronic conditions', color: '#ef4444', position: [1.5, 1, 0.5] },
  { label: 'Preventable risk', color: '#f97316', position: [-1.2, 0.8, 1] },
  { label: 'Care gaps', color: '#eab308', position: [0.5, -1, 1.5] },
  { label: 'Engagement levels', color: '#22c55e', position: [-0.8, -0.5, -1] },
]

const insights = [
  { icon: Activity, label: 'Chronic burden', color: 'text-red-500' },
  { icon: AlertTriangle, label: 'Preventable spend', color: 'text-orange-500' },
  { icon: Heart, label: 'Access & utilization', color: 'text-yellow-500' },
  { icon: Users, label: 'Care engagement', color: 'text-green-500' },
]

function PopulationNodes({ count = 150 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const clusterColors = [
      new THREE.Color('#ef4444'),
      new THREE.Color('#f97316'),
      new THREE.Color('#eab308'),
      new THREE.Color('#22c55e'),
    ]

    for (let i = 0; i < count; i++) {
      // Distribute in sphere
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 2 + Math.random() * 0.5

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      // Assign cluster color
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

      {/* Core sphere */}
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

export function WorkforceHealthSphere() {
  return (
    <section className='py-20 md:py-28 bg-muted/30 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Workforce Health Analytics
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Understand health risk before it becomes financial risk.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* 3D Sphere */}
          <div className='h-[400px] md:h-[500px] relative'>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <Scene />
            </Canvas>

            {/* Animated overlay effects */}
            <div className='absolute inset-0 pointer-events-none'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20 animate-ping-slow' />
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-accent/10 animate-ping-slow'
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>

          {/* Insights */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-6'>Key Insights</h3>
            <div className='space-y-4'>
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className='flex items-center gap-4 p-5 rounded-xl bg-card border hover:shadow-lg transition-all group'
                >
                  <div className='w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <insight.icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                  <div>
                    <span className='font-semibold'>{insight.label}</span>
                    <p className='text-sm text-muted-foreground mt-0.5'>
                      {index === 0 &&
                        'Track chronic disease burden across your population'}
                      {index === 1 && 'Identify avoidable healthcare spend'}
                      {index === 2 &&
                        'Monitor care access and utilization patterns'}
                      {index === 3 &&
                        'Measure employee engagement with health programs'}
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
