import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display text-xl font-bold uppercase tracking-wider text-white">
                STOLI
              </span>
              <span className="font-display text-xs font-light uppercase tracking-widest text-gray-500">
                Uniforms
              </span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-gray-400">
              Uniformes deportivos sublimados personalizados para equipos, escuelas y empresas.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/STOLIUNIFORMS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/stoliuniforms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.stoliuniforms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Web
              </a>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Términos
              </Link>
              <Link href="/aviso-legal" className="text-sm text-gray-400 hover:text-white">
                Aviso Legal
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacidad
              </Link>
              <Link href="/faq" className="text-sm text-gray-400 hover:text-white">
                Preguntas
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">{"Stoli Uniforms. Todos los derechos reservados."}</p>
          <p className="text-xs text-gray-500 mt-2">
            Desarrollado por{" "}
    
              href="https://www.facebook.com/XantTecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
            Xant
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
