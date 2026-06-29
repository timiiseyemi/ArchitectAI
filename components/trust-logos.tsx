"use client"

import {

  SiVercel,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiCloudflare,
  SiTerraform,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiOpenai,
} from "react-icons/si"

import { Cpu } from "lucide-react"

const technologies = [

  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
  },
  {
    name: "Terraform",
    icon: SiTerraform,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Redis",
    icon: SiRedis,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
  },
  {
    name: "Amazon Bedrock",
    icon: Cpu,
  },
]

export function TrustLogos() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/40 py-20">

      <div className="mx-auto mb-14 max-w-3xl text-center">

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          BUILT WITH INDUSTRY LEADERS
        </span>

        <h2 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
          Powered by the modern cloud ecosystem
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          ArchitectAI recommends architectures using the same technologies
          trusted by AWS, Vercel, Cloudflare, GitHub and thousands of engineering
          teams worldwide.
        </p>

      </div>

      <div className="relative overflow-hidden">

        {/* left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-44 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />

        {/* right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-44 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent" />

        <div className="flex w-max animate-logo-marquee gap-8 px-4">

  {[...technologies, ...technologies].map((tech, index) => {
    const Icon = tech.icon

    return (
      <div
        key={index}
        className="
          flex
          h-20
          min-w-[190px]
          items-center
          justify-center
          gap-4
          rounded-2xl
          border
          border-slate-200/60
          bg-transparent
          px-8
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:border-slate-300
          hover:bg-white/30
        "
      >
        <Icon className="h-7 w-7 text-slate-700" />

        <span className="text-lg font-semibold text-slate-800">
          {tech.name}
        </span>
      </div>
    )
  })}

</div>

      </div>

    </section>
  )
}