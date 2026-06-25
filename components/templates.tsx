import { ArrowUpRight, Layers, Landmark, ShoppingBag, HeartPulse, Store, Brain } from "lucide-react"
import { Reveal } from "@/components/reveal"

const templates = [
  { icon: Layers, name: "SaaS Platform", desc: "Multi-tenant app with auth, billing, and analytics." },
  { icon: Landmark, name: "FinTech Application", desc: "Secure, compliant infrastructure for payments." },
  { icon: ShoppingBag, name: "Marketplace", desc: "Two-sided platform with search and messaging." },
  { icon: HeartPulse, name: "Healthcare System", desc: "HIPAA-aware design with audit and encryption." },
  { icon: Store, name: "E-Commerce Platform", desc: "High-traffic storefront with cart and checkout." },
  { icon: Brain, name: "AI Application", desc: "Inference pipelines, vector stores, and queues." },
]

export function Templates() {
  return (
    <section id="templates" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold text-primary">Templates</span>
        <h2 className="mt-3 text-balance text-3xl font-normal tracking-normal text-foreground sm:text-4xl">
          Start from a battle-tested blueprint
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Pick a starting point and let ArchitectAI tailor it to your exact
          requirements.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 90} as="a" href="#">
            <span className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
              <span className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <t.icon className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </span>
              <span className="mt-5 block text-base font-semibold text-foreground">
                {t.name}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
