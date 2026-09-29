import Image from 'next/image'
import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Skills } from './skills'

const facts = [
  { icon: GraduationCap, label: '2nd Year, IASDS · University of Dhaka' },
  { icon: MapPin, label: 'Based in Seattle, WA' },
  { icon: Sparkles, label: 'Currently exploring causal inference' },
]

export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      className="scroll-mt-16 border-b border-border/60"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-2xl bg-primary/15 blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/profile.jpg"
                alt="Portrait of Joy Paul Arko"
                width={640}
                height={640}
                className="aspect-square w-full object-cover"
                priority={false}
              />
            </div>
            <p className="absolute -bottom-4 right-4 rounded-lg border border-primary/30 bg-background px-3 py-1.5 font-mono text-xs text-primary">
              {'n = 1, σ = high'}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <SectionHeading
              id="about-heading"
              index="01"
              title="About me"
              description="Statistician by training, curious builder by habit."
            />
            <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                {"I'm Joy Paul Arko, a second-year student at the Institute of Applied Statistics and Data Science (IASDS), University of Dhaka. I fell in love with the field the first time a simple regression explained something I thought was random. Since then, I've been chasing that feeling — the moment a messy dataset finally tells a clear story."}
              </p>
              <p>
                {"I care about rigor as much as results: well-specified models, honest uncertainty, and code that someone else can rerun a year later. Outside class, you'll find me running, reading about the history of probability, or volunteering as a stats tutor."}
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {facts.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span className="flex size-8 items-center justify-center rounded-md border border-border bg-card text-primary">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  )
}
