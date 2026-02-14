import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [fading, setFading] = useState(false)

  function handleEnded() {
    // brief fade-out then restart
    setFading(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {})
      }
      setFading(false)
    }, 300)
  }
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/vid/bannerstoli.webm"
          className={`w-full h-full object-cover transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center md:items-start px-4 py-32 text-center md:text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Uniformes Deportivos Sublimados
        </p>
        <h1 className="font-display text-balance text-5xl font-bold uppercase leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
          Creamos el uniforme que necesitas
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-gray-300 md:text-xl">
          Diseño y manufactura de uniformes deportivos personalizados con
          sublimacion de alta calidad. Para equipos, escuelas y empresas.
        </p>
        <div className="mt-10 flex flex-col items-center md:items-start gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/#nosotros">
              Conoce Mas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
          >
            <Link href="/#contacto">Solicita una Cotizacion</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
