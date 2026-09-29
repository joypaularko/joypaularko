'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#academic', label: 'Academic' },
  { href: '#thoughts', label: 'Thoughts' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="group flex items-center gap-3 text-foreground"
          aria-label="Joy Paul Arko, back to top"
        >
          <span className="flex size-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-xs font-bold tracking-wider text-primary shadow-[0_0_16px_-4px] shadow-primary/60 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            JPA
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Joy Paul Arko
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
          className="flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
