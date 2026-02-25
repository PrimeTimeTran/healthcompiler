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
  { icon: Activity, label: 'Chronic disease burden', color: 'text-red-500', description: 'Track prevalence and progression of diabetes, cardiovascular disease, musculoskeletal conditions, and behavioral health across your population. Know where to invest in prevention.' },
  { icon: AlertTriangle, label: 'Preventable spend', color: 'text-orange-500', description: 'Quantify how much of your annual claims spend is attributable to avoidable ER visits, low-value care, and conditions that could have been managed earlier. This is where the real savings live.' },
  { icon: Heart, label: 'Access & utilization patterns', color: 'text-yellow-500', description: 'Are your employees actually using the benefits you\'re paying for? Identify utilization deserts, over-reliance on emergency care, and gaps between available services and actual engagement.' },
  { icon: Users, label: 'Care engagement', color: 'text-green-500', description: 'Measure participation in wellness programs, chronic care management, preventive screenings, and virtual care. Engagement isn\'t just a feel-good metric — it\'s a leading indicator of future cost.' },
]

function PopulationNodes({ count = 150 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const clusterColors = [new THREE.Color('#ef4444'), new THREE.Color('#f97316'), new THREE.Color('#eab308'), new THREE.Color('#22c55e')]
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
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' count={count} array={positions} itemSize={3} />
        <bufferAttribute attach='attributes-color' count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} />
    </points>
  )
}

function ClusterLabel({ position, label, color }: { position: number[]; label: string; color: string }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = position[0] + Math.sin(state.clock.elapsedTime + position[1]) * 0.1
      ref.current.position.y = position[1] + Math.cos(state.clock.elapsedTime + position[0]) * 0.1
    }
  })
  return (
    <group ref={ref} position={position as [number, number, number]}>
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <Html center distanceFactor={8}>
        <div className='px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap backdrop-blur-sm' style={{ backgroundColor: `${color}30`, color }}>{label}</div>
      </Html>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Suspense fallback={<div>Loading 3D cluster...</div>}>
        <PopulationNodes />
      </Suspense>
      <Suspense fallback={<div>Loading 3D cluster...</div>}>
        {clusters.map((cluster, i) => <ClusterLabel key={i} {...cluster} />)}
      </Suspense>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color='#1a1a2e' transparent opacity={0.5} />
      </mesh>
    </>
  )
}

export function WorkforceHealthSphere() {
  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
            Population Health
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Workforce Health Analytics
          </h2>
          <h3 className='text-xl text-muted-foreground mb-6'>
            Understand Health Risk Before It Becomes Financial Risk
          </h3>
          <div className='space-y-4 text-muted-foreground leading-relaxed'>
            <p>
              Healthcare costs don't materialize out of nowhere. They build slowly — through unmanaged chronic conditions, preventable ER visits, missed screenings, and care gaps that nobody caught until it was too late. HealthCompiler surfaces these signals before they show up on your claims run.
            </p>
            <p>
              Our workforce health analytics layer maps your employee population against clinical risk factors, engagement patterns, and care utilization data. You'll see the full picture — not just who's costing the most right now, but who's heading in that direction.
            </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='h-[400px] md:h-[500px] relative'>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <Scene />
            </Canvas>
            <div className='absolute inset-0 pointer-events-none'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20 animate-ping-slow' />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-accent/10 animate-ping-slow' style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-6'>Key Insights</h3>
            <div className='space-y-4'>
              {insights.map((insight, index) => (
                <div key={index} className='flex items-start gap-4 p-5 rounded-xl bg-card border hover:shadow-lg transition-all group'>
                  <div className='w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform'>
                    <insight.icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                  <div>
                    <span className='font-semibold'>{insight.label}</span>
                    <p className='text-sm text-muted-foreground mt-1 leading-relaxed'>{insight.description}</p>
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
