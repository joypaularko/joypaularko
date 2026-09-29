import { Award, BookOpen, GraduationCap } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Projects } from './projects'

const timeline = [
  {
    period: 'Present · 2nd Year',
    title: 'BS in Applied Statistics & Data Science',
    place: 'Institute of Applied Statistics and Data Science (IASDS), University of Dhaka',
    detail:
      'Coursework spanning probability, statistical inference, regression, programming, and data analysis.',
    icon: GraduationCap,
  },
  {
    period: 'Summer 2025',
    title: 'Undergraduate Research Assistant',
    place: 'Center for Statistics & the Social Sciences',
    detail:
      'Built hierarchical Bayesian models to estimate county-level health outcomes from sparse survey data.',
    icon: BookOpen,
  },
  {
    period: '2024',
    title: 'Putnam Competition — Top 500',
    place: 'Mathematical Association of America',
    detail:
      'Ranked in the top 500 nationally; led the campus problem-solving club the following year.',
    icon: Award,
  },
]

const coursework = [
  { code: 'STAT 423', name: 'Applied Regression & ANOVA' },
  { code: 'STAT 435', name: 'Statistical Learning' },
  { code: 'STAT 502', name: 'Design of Experiments' },
  { code: 'STAT 533', name: 'Bayesian Data Analysis' },
  { code: 'STAT 519', name: 'Time Series Analysis' },
  { code: 'MATH 394', name: 'Probability Theory' },
  { code: 'CSE 373', name: 'Data Structures & Algorithms' },
  { code: 'CSE 414', name: 'Database Systems' },
]

export function Academic() {
  return (
    <section
      aria-labelledby="academic-heading"
      id="academic"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 md:py-28">
        <SectionHeading
          id="academic-heading"
          index="02"
          title="Academic journey"
          description="Education, research, and the coursework that shaped how I think about data."
        />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
            {timeline.map(({ period, title, place, detail, icon: Icon }) => (
              <li key={title} className="relative flex flex-col gap-2">
                <span className="absolute -left-[3.05rem] top-0 flex size-9 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_16px_-4px] shadow-primary/60">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <p className="font-mono text-xs text-primary">{period}</p>
                <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                <p className="text-sm text-foreground/80">{place}</p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Relevant coursework
            </h3>
            <ul className="flex flex-col divide-y divide-border">
              {coursework.map((course) => (
                <li
                  key={course.code}
                  className="flex items-center justify-between gap-4 py-3 text-sm"
                >
                  <span>{course.name}</span>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {course.code}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Projects />
      </div>
    </section>
  )
}
