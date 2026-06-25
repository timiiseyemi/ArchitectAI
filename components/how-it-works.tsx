import { MessageSquare, Cpu, Rocket } from "lucide-react"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Describe Your App",
    description:
      "Tell ArchitectAI what you're building in plain language — your stack, scale, and constraints.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Generates Architecture",
    description:
      "Get a complete AWS architecture with diagrams, cost estimates, and security recommendations.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Review & Deploy",
    description:
      "Refine the design, export deployment blueprints, and ship to production with confidence.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">How it works</span>
          <h2 className="mt-3 text-balance text-3xl font-normal tracking-normal text-foreground sm:text-4xl">
            From idea to architecture in three steps
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute inset-x-12 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={i * 120}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="pointer-events-none absolute -right-2 -top-3 text-7xl font-bold text-accent transition-colors group-hover:text-primary/10">
                {s.step}
              </span>
              <span className="relative flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="size-5" />
              </span>
              <span className="relative mt-5 block text-xs font-semibold tracking-widest text-muted-foreground">
                STEP {s.step}
              </span>
              <h3 className="relative mt-1 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
