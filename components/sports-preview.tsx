"use client"


import { motion } from "framer-motion"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function SportsPreview() {
  const [open, setOpen] = useState(false)
  const [selectedImg, setSelectedImg] = useState<{src: string, alt: string} | null>(null)
  const galleryImages = [
    {
      src: "/gallery/1.jpg",
      alt: "Uniforme Football Warrior",
    },
    {
      src: "/gallery/2.jpg",
      alt: "Uniforme Flag Titan",
    },
    {
      src: "/gallery/3.jpg",
      alt: "Uniforme Voley Classic",
    },
    {
      src: "/gallery/4.jpg",
      alt: "Uniforme Basketball Dunk",
    },
    {
      src: "/gallery/5.jpg",
      alt: "Uniforme Basketball Court",
    },
    {
      src: "/gallery/7.jpg",
      alt: "Uniforme Baseball Slugger",
    },
    {
      src: "/gallery/8.jpg",
      alt: "Uniforme Baseball Allstar",
    },
    {
      src: "/gallery/9.jpg",
      alt: "Uniforme Basket Modern",
    },
    {
      src: "/gallery/10.jpg",
      alt: "Uniforme Soccer Pro",
    },
    {
      src: "/gallery/11.jpg",
      alt: "Uniforme Volleyball",
    },
    {
      src: "/gallery/12.jpg",
      alt: "Uniforme Volleyball Spike",
    },
    {
      src: "/gallery/14.jpg",
      alt: "Uniforme Volleyball Ace",
    },
  ]

  return (
    <section id="galeria" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Nuestro trabajo
          </p>
          <h2 className="font-display text-balance text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Equipos que confian en nosotros
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Estos son algunos de los uniformes deportivos sublimados que hemos creado para nuestros clientes. 
            Cada diseño es único y refleja la identidad de cada equipo o empresa. Ofrecemos una amplia variedad de opciones.
            Para satisfacer las necesidades de cada cliente, desde equipos deportivos hasta uniformes corporativos.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]"
            style={{ gridAutoFlow: 'dense' }}
          >
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                className={
                  "relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 cursor-pointer " +
                  (idx % 5 === 0
                    ? "row-span-2 col-span-2"
                    : idx % 3 === 0
                    ? "row-span-2"
                    : idx % 2 === 0
                    ? "col-span-2"
                    : "")
                }
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                onClick={() => {
                  setSelectedImg(img)
                  setOpen(true)
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ver ${img.alt} en grande`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full min-h-[180px] max-h-[400px] transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="sr-only">{img.alt}</span>
                </div>
              </motion.div>
            ))}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="max-w-3xl w-full flex flex-col items-center justify-center bg-black/95 p-0">
                {selectedImg && (
                  <img
                    src={selectedImg.src}
                    alt={selectedImg.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    style={{ background: '#222' }}
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}