import Hero from '@/components/Hero'
import LogosSection from '@/components/LogosSection'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import AIPlaybookCTA from '@/components/AIPlaybookCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LogosSection />
        <CaseStudies />
        <Testimonials />
        <Services />
        <AIPlaybookCTA />
      </main>
      <Footer />
    </>
  )
} 