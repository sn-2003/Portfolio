'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Button } from '@/components/ui/button'

function AnimatedSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<any>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <Environment preset="night" />
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      <AnimatedSphere position={[-3, 1, 0]} color="#3b82f6" speed={0.3} />
      <AnimatedSphere position={[3, -1, -1]} color="#f59e0b" speed={0.2} />
      <AnimatedSphere position={[0, 2, -2]} color="#10b981" speed={0.25} />
    </>
  )
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="about">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                S. Nikhil
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium">
              Full Stack Developer | AI Engineer | Startup Founder
            </p>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions with Next.js, AI/ML, and modern web technologies.
            <span className="block mt-2">3+ years of experience in full-stack development and product engineering.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="#projects">
              <Button size="lg" className="text-lg px-8 py-6">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
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
