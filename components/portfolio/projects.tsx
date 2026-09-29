'use client'

import { useState } from 'react'
import { ProjectCard, type Project } from './project-card'

const projects: Project[] = [
  {
    title: 'Customer Churn Survival Model',
    summary:
      'Cox proportional hazards and random survival forests to predict subscriber churn, lifting retention-campaign precision by 31%.',
    image: '/projects/churn.png',
    tags: ['Python', 'SQL'],
    metric: { value: '0.84', label: 'C-index' },
    href: 'https://github.com',
  },
  {
    title: 'Energy Demand Forecasting',
    summary:
      'Hierarchical SARIMA + gradient-boosted residuals forecasting regional grid load with calibrated prediction intervals.',
    image: '/projects/forecast.png',
    tags: ['R', 'SQL'],
    metric: { value: '4.2%', label: 'MAPE' },
    href: 'https://github.com',
  },
  {
    title: 'Bayesian A/B Testing Toolkit',
    summary:
      'An R package + Shiny app for Beta-Binomial experiments with sequential stopping rules and posterior visualizations.',
    image: '/projects/bayes.png',
    tags: ['R'],
    metric: { value: '2.1k', label: 'Downloads' },
    href: 'https://github.com',
  },
  {
    title: 'Monte Carlo Options Engine',
    summary:
      'A multithreaded C++ simulation engine with Python bindings, pricing exotic options 40x faster than a pure NumPy baseline.',
    image: '/projects/montecarlo.png',
    tags: ['C++', 'Python'],
    metric: { value: '40x', label: 'Speedup' },
    href: 'https://github.com',
  },
]

const filters = ['All', 'Python', 'R', 'SQL', 'C++'] as const
type Filter = (typeof filters)[number]

export function Projects() {
  const [active, setActive] = useState<Filter>('All')
  const visible =
    active === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(active))

  return (
    <div
      aria-labelledby="projects-heading"
      role="region"
      id="projects"
      className="scroll-mt-16"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <h3
              id="projects-heading"
              className="text-xl font-semibold tracking-tight"
            >
              Academic projects
            </h3>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
              Coursework and research spanning statistical modeling,
              forecasting, and high-performance simulation.
            </p>
          </div>
          <div
            role="group"
            aria-label="Filter projects by language"
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
                className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground aria-pressed:border-primary/50 aria-pressed:bg-primary/10 aria-pressed:text-primary"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <ul className="grid gap-6 md:grid-cols-2" aria-live="polite">
          {visible.map((project) => (
            <li key={project.title} className="animate-in fade-in duration-300">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
