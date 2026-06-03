import React from "react"
import type { Metadata, Viewport } from "next"
import { Roboto, Montserrat } from "next/font/google"
import { AppProviders } from "@/components/app-providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Stoli Uniforms | Uniformes Deportivos Personalizados",
  description:
    "Manufactura de uniformes deportivos sublimados personalizados para soccer, futbol americano, beisbol, voleibol y basquetbol. Cotiza sin compromiso.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: "Stoli Uniforms | Uniformes Deportivos Personalizados",
    description:
      "Manufactura de uniformes deportivos sublimados personalizados para soccer, futbol americano, beisbol, voleibol y basquetbol. Cotiza sin compromiso.",
    url: "https://www.stoliuniforms.com",
    siteName: "Stoli Uniforms",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stoli Uniforms - Uniformes Deportivos",
      },
    ],
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stoli Uniforms | Uniformes Deportivos Personalizados",
    description:
      "Manufactura de uniformes deportivos sublimados personalizados. Cotiza sin compromiso.",
    images: ["/og-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <AppProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </AppProviders>
      </body>
    </html>
  )
}
