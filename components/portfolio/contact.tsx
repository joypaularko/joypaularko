import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { ContactForm } from './contact-form'

const channels = [
  { href: 'mailto:joypaularko@example.com', label: 'joypaularko@example.com', icon: Mail },
  { href: 'https://github.com', label: 'github.com/mayachen', icon: Code2 },
  { href: 'https://linkedin.com', label: 'linkedin.com/in/mayachen', icon: BriefcaseBusiness },
]

export function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      id="contact"
      className="scroll-mt-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="contact-heading"
            index="04"
            title="Let's work together"
            description="Looking for a data science intern, a research collaborator, or someone to sanity-check your confidence intervals? Drop me a line."
          />
          <ul className="flex flex-col gap-3">
            {channels.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="font-mono text-sm">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
