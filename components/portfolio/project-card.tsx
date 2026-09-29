'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { MouseEvent } from 'react'

export type Project = {
  title: string
  summary: string
  image: string
  tags: string[]
  metric: { value: string; label: string }
  href: string
}

function trackSpotlight(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`)
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      onMouseMove={trackSpotlight}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_48px_-16px] hover:shadow-primary/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), oklch(0.74 0.17 290 / 10%), transparent 60%)',
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`Visualization for ${project.title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
        <div className="absolute right-3 top-3 rounded-lg border border-border bg-background/80 px-3 py-1.5 text-right backdrop-blur-sm">
          <p className="font-mono text-sm font-semibold text-primary">
            {project.metric.value}
          </p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {project.metric.label}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:z-20 focus-visible:outline-none"
            >
              {project.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-primary/0 transition group-has-[a:focus-visible]:ring-primary"
      />
    </article>
  )
}
