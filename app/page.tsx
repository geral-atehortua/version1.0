import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { Process } from "@/components/process"
import { Support247 } from "@/components/support-247"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <CaseStudies />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Process />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Support247 />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ContactForm />
      </ScrollReveal>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
