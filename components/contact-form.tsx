"use client"

import React from "react"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const whatsappMsg = encodeURIComponent(
      `Hola Stoli Uniforms, soy ${formData.name}${formData.company ? ` de ${formData.company}` : ""}.\n\n${formData.message}\n\nContacto:\nEmail: ${formData.email}\nTel: ${formData.phone}`
    )
    window.open(`https://wa.me/526462166311?text=${whatsappMsg}`, "_blank")
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contacto
          </p>
          <h2 className="font-display text-balance text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Solicita una Cotizacion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Completa el formulario y nos contactaremos contigo en la brevedad
            para brindarte una cotización personalizada.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Send className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold uppercase text-card-foreground">
              Mensaje enviado
            </h3>
            <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
              Se abrio WhatsApp con tu mensaje. Si no se abrio automaticamente,
              por favor contactanos directamente al +52 812 345 6789.
            </p>
            <Button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Enviar otro mensaje
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-card p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name" className="text-sm font-medium text-card-foreground">
                  Nombre completo *
                </Label>
                <Input
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Tu nombre"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email" className="text-sm font-medium text-card-foreground">
                  Email *
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="tu@email.com"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-company" className="text-sm font-medium text-card-foreground">
                  Empresa / Escuela / Equipo
                </Label>
                <Input
                  id="contact-company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  placeholder="Nombre de la organizacion"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-phone" className="text-sm font-medium text-card-foreground">
                  Telefono *
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="+52 123 456 7890"
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Label htmlFor="contact-message" className="text-sm font-medium text-card-foreground">
                Mensaje *
              </Label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                placeholder="Describe lo que necesitas: deporte, cantidad de uniformes, colores, fecha de entrega..."
                className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full bg-green-600 text-white hover:bg-green-700 sm:w-auto mx-auto block"
            >
              Enviar por WhatsApp
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
