'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'Java'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma ORM', 'Database Design'],
  },
  {
    category: 'AI & ML',
    skills: ['LLMs', 'NLP', 'Gemini API', 'scikit-learn', 'TensorFlow', 'Data Analysis'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Vercel', 'AWS', 'Cloud Computing', 'Docker', 'Git', 'CI/CD'],
  },
  {
    category: 'Product & Leadership',
    skills: ['Product Development', 'Agile Methodologies', 'Team Management', 'Client Coordination'],
  },
]

const techStack = [
  { name: 'Next.js', level: 95 },
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'AI/ML', level: 80 },
  { name: 'Full Stack', level: 90 },
]

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="relative py-20 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive set of technical and leadership skills developed over 3+ years.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-lg font-bold mb-4 text-primary">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium group-hover:bg-primary/20 group-hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {techStack.map((tech) => (
              <div key={tech.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <p className="text-sm text-muted-foreground">Years of Experience</p>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">7+</div>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <p className="text-sm text-muted-foreground">Startups Founded</p>
          </div>
        </div>
      </div>
    </section>
  )
}
