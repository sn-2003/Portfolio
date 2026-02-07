'use client'

import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, PerspectiveCamera, Environment } from '@react-three/drei'
import { useScroll } from '@react-three/drei'

function HeroContent() {
  const groupRef = useRef(null)

  useEffect(() => {
    let animationId: number
    const animate = () => {
      if (groupRef.current) {
        const group = groupRef.current as any
        group.rotation.x += 0.0005
        group.rotation.y += 0.001
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <Environment preset="night" />

      <group ref={groupRef}>
        {/* Floating cubes */}
        <mesh position={[-3, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshPhongMaterial color="#3b82f6" emissive="#1e40af" />
        </mesh>

        <mesh position={[3, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshPhongMaterial color="#f59e0b" emissive="#b45309" />
        </mesh>

        <mesh position={[0, 2.5, 0]}>
          <octahedronGeometry args={[1]} />
          <meshPhongMaterial color="#10b981" emissive="#059669" />
        </mesh>

        <mesh position={[0, -2.5, 0]}>
          <tetrahedronGeometry args={[1.2]} />
          <meshPhongMaterial color="#8b5cf6" emissive="#6d28d9" />
        </mesh>
      </group>

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, 5]} intensity={1} color="#f59e0b" />

      {/* HTML overlay */}
      <Html distanceFactor={1.5} position={[0, 0, 0]}>
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 whitespace-nowrap">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
              S. Nikhil
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Full Stack Developer | AI Engineer | Startup Founder
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions with Next.js, AI/ML, and modern web technologies.
            3+ years of experience in full-stack development and product engineering.
          </p>
        </div>
      </Html>
    </>
  )
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full" id="about">
      <Canvas>
        <HeroContent />
      </Canvas>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
