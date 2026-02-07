'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const experiences = [
  {
    id: 1,
    title: 'Project Manager & Developer',
    company: 'GMaps',
    period: 'Nov 2025 - Present',
    description:
      'Designed, managed and developed the whole project. Trained and integrated the machine learning model and developed the smart navigation system and routing system. Worked with government and third party APIs to create and integrate data enrichment layer for real time model decision.',
    achievements: [
      'ML model integration and training',
      'Smart navigation system development',
      'Real-time data enrichment layer',
      'Third-party API integration',
    ],
  },
  {
    id: 2,
    title: 'Founder, Full Stack & App Developer',
    company: 'Stag-It',
    period: 'July 2025 - Present',
    description:
      'Founded and led Stag-It, a platform that solves the real life problems faced in the clubbing community. Fully designed the whole system and implemented complex rules of the stagmatching system and developed and deployed website and the mobile app.',
    achievements: [
      'Full-stack application design',
      'Complex matching algorithm implementation',
      'Website and mobile app deployment',
      'Community problem solving',
    ],
  },
  {
    id: 3,
    title: 'Founder, Full Stack & AI Engineer',
    company: 'Iota Studio AI',
    period: 'April 2025 - July 2025',
    description:
      'Founded a startup focused on building an AI development platform and integrated AI marketplace, powered by search and prompt engine designed to understand the intent to produce relevant results.',
    achievements: [
      'AI platform architecture design',
      'Marketplace integration',
      'Prompt engine development',
      'Intent recognition system',
    ],
  },
  {
    id: 4,
    title: 'Data Analyst Intern',
    company: 'Earjobs Point',
    period: 'Jan 2024 - Mar 2024',
    description:
      'Assisted in data collection and analysis. Supported the development and implementation of data models and algorithms. Contributing to the ongoing improvements of data collection processes and tools.',
    achievements: [
      'Data model development',
      'Algorithm implementation',
      'Process optimization',
      'Tool improvements',
    ],
  },
]

export default function ExperienceTimeline() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="relative py-20 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            3+ years of experience building products and leading teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:w-1/2">
                  <div className={`${index % 2 === 1 ? 'md:ml-auto md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap mt-2 md:mt-0 md:ml-4">{exp.period}</span>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
