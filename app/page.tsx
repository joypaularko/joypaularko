import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Academic } from '@/components/portfolio/academic'
import { Thoughts } from '@/components/portfolio/thoughts'
import { Contact } from '@/components/portfolio/contact'
import { SiteFooter } from '@/components/portfolio/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Academic />
        <Thoughts />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
