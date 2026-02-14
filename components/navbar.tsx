"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo - Reemplazar /logocompleto.pnh con tu logo */}
          <div className="relative h-8 w-20 sm:h-9 sm:w-28 md:h-10 md:w-36 lg:h-11 lg:w-44 xl:h-12 xl:w-48 flex-shrink-0">
            <Image
              src="/logocompleto.png"
              alt="Stoli Uniforms Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden">
            <span className="font-display text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wider text-gray-900">
              STOLI
            </span>
            <span className="font-display text-xs font-light uppercase tracking-widest text-gray-500">
              Uniforms
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <Link href="/#inicio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Inicio</Link>
          <Link href="/#nosotros" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Nosotros</Link>
          <Link href="/#galeria" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Galeria</Link>
          <Link href="/#portfolio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Porfolio</Link>
          <Link href="/#modelos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Modelos</Link>
          <Link href="/#proceso" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Proceso</Link>
          <Link href="/#contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contacto</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/526462166311?text=Hola%2C%20buen%20d%C3%ADa%20%F0%9F%98%8A%0AQuiero%20hacer%20una%20cotizaci%C3%B3n%20de%20uniformes%20con%20STOLI.%20%C2%BFMe%20pueden%20apoyar%20con%20la%20informaci%C3%B3n%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button className="flex gap-2 bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </a>

          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <Link href="/#inicio" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Inicio</Link>
            <Link href="/#nosotros" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Nosotros</Link>
            <Link href="/#galeria" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Galeria</Link>
            <Link href="/#porfolio" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Porfolio</Link>
            <Link href="/#modelos" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Modelos</Link>
            <Link href="/#proceso" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Proceso</Link>
            <Link href="/#contacto" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Contacto</Link>
            <a
              href="https://wa.me/526462166311?text=Hola%2C%20buen%20d%C3%ADa%20%F0%9F%98%8A%0AQuiero%20hacer%20una%20cotizaci%C3%B3n%20de%20uniformes%20con%20STOLI.%20%C2%BFMe%20pueden%20apoyar%20con%20la%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-green-600 transition-colors hover:bg-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
