import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'

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
]

// Convert 2D percentage to 3D position
const to3DPosition = (
  x: number,
  y: number,
  index: number
): [number, number, number] => {
  const xPos = ((x - 50) / 50) * 5
  const yPos = ((50 - y) / 50) * 3.5
  const zPos = (index % 5) * 0.15 - 0.3 // subtle depth variation
  return [xPos, yPos, zPos]
}

// Integration card
const IntegrationCard = ({
  integration,
  index,
}: {
  integration: (typeof integrations)[0]
  index: number
}) => {
  const position = useMemo(
    () => to3DPosition(integration.x, integration.y, index),
    [integration.x, integration.y, index]
  )

  return (
    <group position={position}>
      <Html
        transform
        distanceFactor={8}
        style={{ pointerEvents: 'none' }}
      >
        <div
          className={`
            px-3 py-2 rounded-lg border text-xs font-medium whitespace-nowrap
            ${
              integration.highlighted
                ? 'border-primary bg-primary/10 text-primary shadow-sm'
                : 'border-border/60 bg-white/95 text-foreground'
            }
          `}
        >
          {integration.name}
        </div>
      </Html>
    </group>
  )
}

// Animated particle traveling along a line
const ConnectionLine = ({
  start,
  index,
}: {
  start: THREE.Vector3
  index: number
}) => {
  const particleRef = useRef<THREE.Mesh>(null)
  const end = useMemo(() => new THREE.Vector3(0, 0, 0), [])

  const curve = useMemo(() => {
    const mid = new THREE.Vector3().lerpVectors(start, end, 0.5)
    mid.z += 0.3
    return new THREE.QuadraticBezierCurve3(start, mid, end)
  }, [start, end])

  const points = useMemo(() => curve.getPoints(30), [curve])

  const lineGeometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  )
  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: '#e2e8f0',
        transparent: true,
        opacity: 0.5,
      }),
    []
  )
  const lineObject = useMemo(
    () => new THREE.Line(lineGeometry, lineMaterial),
    [lineGeometry, lineMaterial]
  )

  useFrame(({ clock }) => {
    if (particleRef.current) {
      const t = (clock.getElapsedTime() * 0.2 + index * 0.15) % 1
      const point = curve.getPoint(t)
      particleRef.current.position.copy(point)
    }
  })

  return (
    <group>
      <primitive object={lineObject} />
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial
          color='#f97316'
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  )
}

// Connection lines from edges to center
const ConnectionLines = () => {
  const lines = useMemo(
    () => [
      new THREE.Vector3(-4.5, 1.5, 0),
      new THREE.Vector3(-4, -1, 0),
      new THREE.Vector3(-3.5, -2.5, 0),
      new THREE.Vector3(4.5, 2, 0),
      new THREE.Vector3(4, 0, 0),
      new THREE.Vector3(4.5, -2, 0),
      new THREE.Vector3(-2, 3, 0),
      new THREE.Vector3(2, 3, 0),
      new THREE.Vector3(-1.5, -3, 0),
      new THREE.Vector3(2, -3, 0),
    ],
    []
  )

  return (
    <group>
      {lines.map((start, i) => (
        <ConnectionLine
          key={i}
          start={start}
          index={i}
        />
      ))}
    </group>
  )
}

// Central hub
const CentralHub = () => {
  return (
    <group position={[0, 0, 0.5]}>
      <Html
        transform
        distanceFactor={6}
        center
      >
        <div className='relative bg-white border border-border rounded-xl shadow-lg p-4 w-44'>
          <div className='flex items-center gap-1.5 mb-3'>
            <div className='w-2 h-2 rounded-full bg-red-400'></div>
            <div className='w-2 h-2 rounded-full bg-yellow-400'></div>
            <div className='w-2 h-2 rounded-full bg-green-400'></div>
          </div>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-5 h-5 bg-primary/20 rounded flex items-center justify-center'>
              <span className='text-xs'>📊</span>
            </div>
            <div>
              <h3 className='text-base font-bold text-foreground leading-tight'>
                Insights
              </h3>
              <p className='text-[9px] text-primary font-medium'>
                HealthCompiler
              </p>
            </div>
          </div>
          <div className='space-y-1.5 mb-3'>
            <div className='h-1.5 bg-muted rounded-full w-full'></div>
            <div className='h-1.5 bg-muted rounded-full w-3/4'></div>
            <div className='h-1.5 bg-muted rounded-full w-1/2'></div>
          </div>
          <div className='flex items-end gap-0.5 h-8'>
            {[30, 50, 40, 70, 55, 45, 65].map((h, i) => (
              <div
                key={i}
                className='flex-1 bg-primary/40 rounded-t-sm'
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
      </Html>
    </group>
  )
}

export const IntegrationScene3D = () => {
  return (
    <div className='w-full h-[550px] md:h-[650px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white border border-border/50'>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <Suspense fallback={<div>Loading 3D cluster...</div>}>
          <ConnectionLines />
        </Suspense>
        <CentralHub />

        {integrations.map((integration, index) => (
          <IntegrationCard
            key={integration.name}
            integration={integration}
            index={index}
          />
        ))}
      </Canvas>
    </div>
  )
}
