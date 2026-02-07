'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const projects = [
  {
    id: 1,
    title: 'Stag-It',
    subtitle: 'Clubbing & Social Connection',
    description: 'A platform solving real-life problems in the clubbing community with a unique stag-matching social feature. Developed as a full-stack website and iOS/Android mobile app with a complex matching algorithm.',
    tags: ['Next.js', 'Prisma', 'Postgres', 'React Native', 'Expo', 'Vercel', 'Supabase'],
    color: 'from-blue-500 to-cyan-500',
    date: '2026',
  },
  {
    id: 2,
    title: 'Hackathon Management System',
    subtitle: 'Event Management Platform',
    description: 'Production-ready platform for organizing and hosting hackathons and events from start to finish with comprehensive management capabilities and event tracking.',
    tags: ['Express.js', 'React', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Neon'],
    color: 'from-purple-500 to-pink-500',
    date: '2025',
  },
  {
    id: 3,
    title: 'StartupGram',
    subtitle: 'Startup Talent Network',
    description: 'Platform connecting startups with university talent, featuring free marketing tools, recruitment features, and algorithm-free networking experience for seamless collaboration.',
    tags: ['Next.js', 'Postgres', 'Prisma', 'Tailwind CSS', 'Vercel', 'Neon'],
    color: 'from-green-500 to-emerald-500',
    date: '2025',
  },
  {
    id: 4,
    title: 'AI ToolKart',
    subtitle: 'AI Tools Marketplace',
    description: 'Cutting-edge platform for discovering, accessing, and running AI tools with Cloud-GPU support. Enables developers to share knowledge, develop, and deploy their own AI tools in one unified platform.',
    tags: ['React', 'Node.js', 'MySQL', 'Cloud-GPU', 'Vercel', 'Supabase'],
    color: 'from-yellow-500 to-orange-500',
    date: '2025',
  },
  {
    id: 5,
    title: 'Iota Studio AI',
    subtitle: 'AI Development Platform',
    description: 'Founded an AI development platform with integrated AI marketplace. Features a sophisticated search and prompt engine designed to understand user intent for producing highly relevant results.',
    tags: ['AI', 'Prompt Engine', 'Search Algorithm', 'Marketplace', 'Cloud'],
    color: 'from-cyan-500 to-blue-500',
    date: '2025',
  },
  {
    id: 6,
    title: 'GenAI - Personal Assistant',
    subtitle: 'AI-Powered Assistant',
    description: 'Personal GenAI assistant capable of multitasking including code generation, file system management, image analysis from prompts, and managing day-to-day tasks through speech interface.',
    tags: ['Django', 'FastAPI', 'Gemini API', 'Python', 'Speech Recognition'],
    color: 'from-pink-500 to-purple-500',
    date: '2024',
  },
  {
    id: 7,
    title: 'Plagiarism Detector',
    subtitle: 'Text Analysis Tool',
    description: 'Python-based plagiarism detection system that identifies content similarity using cosine similarity algorithms. Useful for academic and content verification purposes.',
    tags: ['Python', 'scikit-learn', 'NLTK', 'NumPy', 'Pandas'],
    color: 'from-orange-500 to-yellow-500',
    date: '2024',
  },
]

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="relative py-20 px-6 min-h-screen flex items-center" ref={ref}>
      <div className={`max-w-7xl mx-auto w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building innovative solutions that solve real-world problems. Explore my latest projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Project list */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selectedProject === index && (
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Project detail */}
          <div className="relative">
            <div
              className={`bg-gradient-to-br ${projects[selectedProject].color} opacity-20 absolute inset-0 rounded-2xl blur-3xl`}
            />
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 min-h-96 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-bold text-primary uppercase tracking-widest">
                    Project {selectedProject + 1}
                  </div>
                  <div className="text-sm text-muted-foreground">{projects[selectedProject].date}</div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{projects[selectedProject].title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {projects[selectedProject].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[selectedProject].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
