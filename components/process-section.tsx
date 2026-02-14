"use client"

import { Card } from "@/components/ui/card"
import { Zap, Palette, CheckCircle2, Truck } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consulta",
      description: "Cuéntanos tus necesidades, cantidad y especificaciones del diseño.",
      icon: Palette,
    },
    {
      number: "02",
      title: "Diseño",
      description: "Creamos el diseño personalizado según tus requerimientos.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Aprobación",
      description: "Revisas y apruebas el diseño antes de la producción.",
      icon: CheckCircle2,
    },
    {
      number: "04",
      title: "Entrega",
      description: "Recibe tu pedido en un lapso de 1 a 4 semanas directamente en tu puerta.",
      icon: Truck,
    },
  ]

  return (
    <section id="proceso" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Nuestro Proceso
          </p>
          <h2 className="font-display text-balance text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Cómo Funcionamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Un proceso simple y transparente para obtener tus uniformes personalizados
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={step.number}
                className="relative overflow-hidden bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-primary/10">
                  {step.number}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20" />
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
