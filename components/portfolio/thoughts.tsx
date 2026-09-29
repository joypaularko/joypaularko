import { Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'

const thoughts = [
  {
    date: 'Sep 2026',
    readTime: '6 min read',
    tag: 'Philosophy',
    title: 'Why I stopped worshipping p-values',
    excerpt:
      'A p-value answers a narrow question that almost nobody is actually asking. Here is how I learned to report effect sizes and uncertainty instead — and why my conclusions got better.',
  },
  {
    date: 'Jul 2026',
    readTime: '4 min read',
    tag: 'Learning',
    title: 'What tutoring intro stats taught me about explaining models',
    excerpt:
      "If you can't explain a confidence interval to a nervous first-year, you probably don't understand it as well as you think. Lessons from two years of office hours.",
  },
  {
    date: 'Apr 2026',
    readTime: '8 min read',
    tag: 'Ethics',
    title: 'Every dataset has an author',
    excerpt:
      'Data is never raw. Someone chose what to measure, who to ask, and what to leave out. Thinking about those choices is part of doing statistics responsibly.',
  },
]

export function Thoughts() {
  return (
    <section
      aria-labelledby="thoughts-heading"
      id="thoughts"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:py-28">
        <SectionHeading
          id="thoughts-heading"
          index="03"
          title="Personal thoughts"
          description="Short essays on statistics, learning, and the human side of working with data."
        />

        <figure className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10">
          <Quote aria-hidden="true" className="size-8 text-primary" />
          <blockquote className="text-balance text-2xl font-medium leading-snug md:text-3xl">
            {
              '“All models are wrong, but some are useful.” The work is figuring out which ones — and being honest about how wrong they are.'
            }
          </blockquote>
          <figcaption className="font-mono text-sm text-muted-foreground">
            {'— George Box, with my addendum'}
          </figcaption>
        </figure>

        <ul className="grid gap-6 md:grid-cols-3">
          {thoughts.map((post) => (
            <li key={post.title}>
              <article className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_32px_-12px] hover:shadow-primary/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">
                    {post.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-balance text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <time className="font-mono text-xs text-muted-foreground">
                  {post.date}
                </time>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
