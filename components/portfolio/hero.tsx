import Image from 'next/image'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

const stats = [
  { value: '2nd', label: 'Year at IASDS, DU' },
  { value: '∞', label: 'Places to explore' },
  { value: 'H₁', label: 'Always curious' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -z-10 h-80 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-20 md:pb-28 md:pt-28 lg:grid-cols-[1fr_auto]">
        <div className="flex min-w-0 flex-col gap-10">
        <div className="w-fit rounded-full bg-gradient-to-r from-primary via-accent to-primary p-px shadow-[0_0_28px_-6px] shadow-primary/70">
          <p className="inline-flex items-center gap-3 rounded-full bg-background/90 py-1.5 pl-1.5 pr-4 text-sm backdrop-blur">
            <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sparkles aria-hidden="true" className="size-3.5" />
            </span>
            <span className="font-medium text-foreground">
              Welcome to my website
            </span>
            <span aria-hidden="true" className="h-4 w-px bg-border" />
            <span className="font-mono text-xs text-accent">
              {'hello, world()'}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-glow animate-glow text-primary">
              Joy Paul Arko
            </span>
            <span className="sr-only"> — </span>
            <span className="mt-4 flex items-center gap-2 whitespace-nowrap text-lg font-semibold tracking-tight sm:gap-3 sm:text-2xl md:text-4xl">
              <span aria-hidden="true" className="font-mono font-normal text-accent/70">
                {'~/'}
              </span>
              <span className="text-foreground">Data,</span>
              <span className="text-foreground">Code</span>
              <span className="font-serif text-[1.15em] font-normal italic text-accent">
                &amp;
              </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text italic text-transparent">
                Life in Between
              </span>
              <span
                aria-hidden="true"
                className="h-[0.9em] w-[0.12em] animate-pulse rounded-sm bg-primary"
              />
            </span>
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Welcome! I&apos;m a 2nd-year Applied Statistics &amp; Data Science
            student at IASDS, University of Dhaka. When I&apos;m not analyzing
            data or coding in Python, R, and SQL, you&apos;ll usually find me
            traveling to new places, getting lost in a good book, enjoying
            movies and music, or keeping up with cricket. This site is my
            portfolio, personal journal, and digital playground.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#academic"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/60 transition-shadow hover:shadow-[0_0_36px_-2px] hover:shadow-primary/70"
          >
            Explore me
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            <Download aria-hidden="true" className="size-4" />
            Request resume
          </a>
        </div>

        <dl className="grid max-w-xl grid-cols-3 gap-4 border-t border-border/60 pt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="order-2 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-1 font-mono text-xl font-semibold text-foreground sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:w-80 xl:w-96">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-2xl"
          />
          <div className="rounded-[1.75rem] bg-gradient-to-br from-primary via-accent to-primary p-px shadow-[0_0_40px_-10px] shadow-primary/60">
            <div className="overflow-hidden rounded-[1.7rem] bg-card">
              <Image
                src="/profile.jpg"
                alt="Joy Paul Arko in a black suit and blue polka-dot tie"
                width={1659}
                height={2212}
                priority
                sizes="(min-width: 1280px) 384px, (min-width: 1024px) 320px, 384px"
                className="aspect-[4/5] w-full object-cover object-[center_30%]"
              />
            </div>
          </div>
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background/90 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="text-accent">{'>'}</span> Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </section>
  )
}
