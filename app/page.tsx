import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustLogos } from "@/components/trust-logos"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Templates } from "@/components/templates"
import { ArchitectureShowcase } from "@/components/architecture-showcase"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="hero-gradient">
          <Hero />
          <TrustLogos />
        </div>
        <Features />
        <HowItWorks />
        <Templates />
        <ArchitectureShowcase />
        <Testimonials />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
