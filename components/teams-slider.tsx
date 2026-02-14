"use client"

import React from "react"

// Custom Sports Icons as SVG components
const SoccerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20M2 12h20" />
    <path d="M8 5l4 2.5L16 5" />
    <path d="M8 19l4-2.5L16 19" />
    <path d="M5 8l2.5 4L5 16" />
    <path d="M19 8l-2.5 4L19 16" />
  </svg>
)

const BasketballIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20M2 12h20" />
    <path d="M4.93 4.93c2.73 2.73 2.73 7.41 0 10.14M19.07 4.93c-2.73 2.73-2.73 7.41 0 10.14" />
    <path d="M4.93 19.07c2.73-2.73 7.41-2.73 10.14 0M19.07 19.07c-2.73-2.73-7.41-2.73-10.14 0" />
  </svg>
)

const VolleyballIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20M2 12h20" />
    <path d="M16 16c-1.5 1.5-3.5 2-5 0s-2-3.5 0-5 3.5-2 5 0" />
    <path d="M8 8c1.5-1.5 3.5-2 5 0s2 3.5 0 5-3.5 2-5 0" />
  </svg>
)

const BaseballIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 10 10M2 12a10 10 0 0 0 10 10" />
    <path d="M18.36 5.64c-3.51 3.51-3.51 9.21 0 12.72" />
    <path d="M5.64 5.64c3.51 3.51 3.51 9.21 0 12.72" />
  </svg>
)

const AmericanFootballIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6.5 13.5c-2.8 1.4-4.5 3.4-4.5 5.5 0 2.2 2.3 4 5 4s5-1.8 5-4c0-2.1-1.7-4.1-4.5-5.5" />
    <path d="M17.5 10.5c2.8-1.4 4.5-3.4 4.5-5.5 0-2.2-2.3-4-5-4s-5 1.8-5 4c0 2.1 1.7 4.1 4.5 5.5" />
    <path d="M6.5 13.5l11-3" />
    <path d="M10.5 7.5l-3 1.5" />
    <path d="M13.5 16.5l-3-1.5" />
    <path d="M12 12h.01" />
    <path d="M12 12v.01" />
  </svg>
)

export function TeamsSlider() {
  const teams = [
    {
      name: "Futbol Soccer",
      sport: "Soccer",
      icon: SoccerIcon,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "Basketball",
      sport: "Basketball",
      icon: BasketballIcon,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      name: "Volleyball",
      sport: "Volleyball",
      icon: VolleyballIcon,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      name: "Beisbol",
      sport: "Beisbol",
      icon: BaseballIcon,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "Flag",
      sport: "Flag Football",
      icon: AmericanFootballIcon,
      iconColor: "text-green-800",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <section id="modelos" className="w-full bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Deportes Destacados
          </p>
          <h2 className="font-display text-balance text-3xl font-bold uppercase tracking-tight text-black md:text-5xl">
            Estos son los mas solicitados. <br></br>Pero contactanos para conocer mas modelos y deportes disponibles.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {teams.map((team) => {
            const Icon = team.icon
            return (
              <div
                key={team.name}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 group"
              >
                <div className={`h-40 w-full ${team.bgColor} flex items-center justify-center transition-colors group-hover:bg-white`}>
                  <Icon className={`h-20 w-20 ${team.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <div className="p-4 border-t border-gray-100 text-center">
                  <h3 className="font-display font-bold text-black text-lg">
                    {team.name}
                  </h3>
                  <p className="text-sm text-gray-600">{team.sport}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
