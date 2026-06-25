import { Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    quote:
      "ArchitectAI turned a two-week infra planning cycle into an afternoon. The cost estimates were within 5% of our actual AWS bill.",
    name: "Maya Chen",
    role: "CTO, Lumen Health",
    initials: "MC",
  },
  {
    quote:
      "The security recommendations caught misconfigurations our last audit missed. It's like having a Well-Architected review on demand.",
    name: "David Okafor",
    role: "Staff Engineer, Northwind",
    initials: "DO",
  },
  {
    quote:
      "We onboard new engineers with the generated diagrams. Everyone finally understands how our system actually fits together.",
    name: "Sofia Rossi",
    role: "VP Engineering, Cadence",
    initials: "SR",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold text-primary">Testimonials</span>
        <h2 className="mt-3 text-balance text-3xl font-normal tracking-normal text-foreground sm:text-4xl">
          Loved by engineering teams
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 110}
            as="figure"
            className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
          >
            <span className="mb-4 flex text-primary">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="size-4 fill-current" />
              ))}
            </span>
            <blockquote className="flex-1 text-pretty text-base leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
