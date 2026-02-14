"use client"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { TeamsSlider } from "@/components/teams-slider"
import { TeamsGallery } from "@/components/teams-gallery"
import { GrandesProyectos } from "@/components/grandes-proyectos"
import { SportsPreview } from "@/components/sports-preview"
import { ProcessSection } from "@/components/process-section"
import { ContactForm } from "@/components/contact-form"


export default function Page() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SportsPreview />
      <TeamsGallery />
      <TeamsSlider />
      <ProcessSection />
      <ContactForm />
    </>
  )
}
