"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teams = [
  {
    id: 1,
    image: "/cetys.webp",
    title: "Cetys",
    description:
      "Uniformes deportivos personalizados para los equipos deportivos de Cetys. Con los colores institucionales y branding de la universidad.",
  },
  {
    id: 2,
    image: "/toros.webp",
    title: "Toros de Tijuana",
    description:
      "Linea de coleccion para los Toros de Tijuana. Jerseys con diseños modernos y colores vibrantes que representan la energian del equipo.",
  },
  {
    id: 3,
    image: "/soles.webp",
    title: "Soles de Mexicali",
    description:
      "Uniformes personalizados para los Soles de Mexicali. Jerseys sublimados con un diseno profesional que refleja la identidad del equipo y su legado en el baloncesto mexicano.",
  },
  {
    id: 4,
    image: "/oaxaca.webp",
    title: "Guerreros de Oaxaca",
    description:
      "Jerseys personalizados para los Guerreros de Oaxaca. Uniformes confeccionados con aplicaciones bordadas acorde a la identidad del equipo, con un diseno moderno y profesional que representa la fuerza y el espiritu de los Guerreros.",
  },
]

export function TeamsGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % teams.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + teams.length) % teams.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(goNext, 3000)
    return () => clearInterval(interval)
  }, [goNext])

  return (
    <section id="portfolio" className="bg-gray-950 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Nuestros Clientes
          </p>
          <h2 className="font-display text-balance text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Equipos que confian en nosotros
          </h2>
        </div>
      </div>

      {/* Desktop: Diagonal / skewed layout */}
      <div className="hidden lg:block">
        <div className="relative flex items-center justify-center gap-8 py-12 overflow-x-auto mx-auto max-w-[92rem] px-4 lg:px-8">
          {teams.map((team, index) => {
            const isActive = index === activeIndex
            return (
              <div
                key={team.id}
                className="relative cursor-pointer transition-all duration-500 flex-shrink-0"
                style={{
                  transform: `skewX(-6deg) ${isActive ? "scale(1.08)" : "scale(0.95)"}`,
                  width: isActive ? "368px" : "230px",
                  height: isActive ? "460px" : "345px",
                }}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg transition-all duration-500 shadow-lg"
                >
                  <Image
                    src={team.image || "/placeholder.svg"}
                    alt={team.title}
                    fill
                    className="object-cover w-full h-full"
                    style={{ transform: "skewX(6deg) scale(1.1)" }}
                    priority={isActive}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredIndex === index || isActive
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div
                      className="absolute bottom-0 left-0 right-0 p-5"
                      style={{ transform: "skewX(6deg)" }}
                    >
                      <h3 className="font-display text-base font-bold uppercase text-white leading-tight">
                        {team.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-gray-300 line-clamp-3">
                        {team.description}
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute top-0 left-0 h-1 w-full bg-red-500" style={{ transform: "skewX(6deg)" }} />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile & Tablet: Horizontal slider */}
      <div className="lg:hidden">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ aspectRatio: "16/10" }}
          >
            {teams.map((team, index) => (
              <div
                key={team.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={team.image || "/placeholder.svg"}
                  alt={team.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-lg font-bold uppercase text-white">
                    {team.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-300 line-clamp-2">
                    {team.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-red-500/80"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-red-500/80"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {teams.map((_, index) => (
            <button
              key={teams[index].id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-red-500"
                  : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Ir al equipo ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-red-500 hover:text-white"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {teams.map((_, index) => (
              <button
                key={teams[index].id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-10 bg-red-500"
                    : "w-4 bg-gray-700 hover:bg-gray-500"
                }`}
                aria-label={`Ir al equipo ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-red-500 hover:text-white"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
