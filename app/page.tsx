'use client'

import Navigation from '@/components/navigation'
import Hero3D from '@/components/hero-3d'
import ProjectsShowcase from '@/components/projects-showcase'
import ExperienceTimeline from '@/components/experience-timeline'
import SkillsSection from '@/components/skills-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      <main className="relative">
        <Hero3D />
        <ProjectsShowcase />
        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  )
}
