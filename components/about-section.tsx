"use client"

import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const highlights = [
    "Sublimación de alta calidad",
    "Diseños personalizados",
    "Entrega rápida",
    "Asesoría completa",
  ]

  return (
    <section id="nosotros" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Acerca de Nosotros
            </p>
            <h2 className="font-display text-balance text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              Expertos en Uniformes Deportivos
            </h2>
            <p className="mt-6 text-pretty text-muted-foreground leading-relaxed">
              En Stoli Uniforms nos especializamos en la manufactura de uniformes
              deportivos sublimados de alta calidad. Con años de experiencia,
              hemos trabajado con equipos, escuelas y empresas de todo el país.
            </p>
            <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
              Nuestro compromiso es ofrecer productos de excelencia, con diseños
              innovadores y materiales duraderos que reflejen la identidad de tu
              equipo o empresa.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-card border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-2">Equipos Satisfechos</p>
              </div>
            </div>
            <div className="rounded-lg bg-card border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground mt-2">Años de Experiencia</p>
              </div>
            </div>
            <div className="rounded-lg bg-card border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Satisfacción</p>
              </div>
            </div>
            <div className="rounded-lg bg-card border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Calidad PREMIUM</p>
                <p className="text-sm text-muted-foreground mt-2">Materiales de la mejor calidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
