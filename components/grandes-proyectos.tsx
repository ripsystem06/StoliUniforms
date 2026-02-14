import { useRef, useEffect } from "react";

const slides = [
  {
    name: "Nova",
    description:
      "Featuring neon green hair, cybernetic eye implants, and a high-tech headset.",
    img: "https://assets.codepen.io/3617690/cyberpunk-character-alt-1.png",
  },
  {
    name: "Electra",
    description:
      "Characterized by bright pink hair, holographic tattoos, and a sleek, armored bodysuit.",
    img: "https://assets.codepen.io/3617690/cyberpunk-character-alt-2.png",
  },
  {
    name: "Azure",
    description:
      "With electric blue hair, glowing facial piercings, and a metallic futuristic jacket.",
    img: "https://assets.codepen.io/3617690/cyberpunk-character-alt-3.png",
  },
  {
    name: "Scarlett",
    description:
      "Known for her fiery red hair, augmented reality glasses, and a jacket with LED displays.",
    img: "https://assets.codepen.io/3617690/cyberpunk-character-alt-4.png",
  },
  {
    name: "Luna",
    description:
      "Distinguished by silvery white hair, a high-tech mask partially covering her face, and a jacket with integrated circuit patterns.",
    img: "https://assets.codepen.io/3617690/cyberpunk-character-alt-5.png",
  },
];

export function GrandesProyectos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll<HTMLDivElement>(".slide");
    if (!items) return;
    items.forEach((item, i) => {
      (item as any).clicked = false;
      item.addEventListener("click", () => {
        items.forEach((it, ind) => {
          if (i === ind) return;
          (it as any).clicked = false;
          it.classList.remove("active");
        });
        (item as any).clicked = !(item as any).clicked;
        if ((item as any).clicked) {
          item.classList.add("active");
        }
      });
    });
    // Limpieza
    return () => {
      items.forEach((item) => {
        item.replaceWith(item.cloneNode(true));
      });
    };
  }, []);

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-cover bg-[url('https://assets.codepen.io/3617690/cyberpunk-bg.png')]" />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg uppercase tracking-widest">
          Grandes Proyectos
        </h2>
        <div
          ref={containerRef}
          className="slider flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-2 px-2 md:px-0"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.name}
              className="slide mx-0 md:mx-2 relative flex-1 min-w-[220px] h-[350px] md:h-[600px] lg:h-[700px] transition-all duration-[2000ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] bg-center bg-no-repeat bg-cover rounded-[40px] md:rounded-[100px] group"
              style={{ backgroundImage: `url('${slide.img}')` }}
            >
              <div className="slide__text absolute bottom-6 md:bottom-10 p-3 md:p-5 text-white opacity-0 scale-0 transition-all duration-0 group-[.active]:opacity-100 group-[.active]:scale-100">
                <p className="name font-['Orbitron'] font-bold text-[#0f0] [text-shadow:_0_0_10px_rgb(0_255_0_/_100%)] text-lg md:text-2xl mb-2.5">
                  {slide.name}
                </p>
                <p className="description font-['Orbitron'] font-normal text-white mb-3 md:mb-5 text-sm md:text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
