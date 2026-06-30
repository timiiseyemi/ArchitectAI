import { Reveal } from "@/components/reveal"

const stats = [
  {
    value: "3",
    label: "Architecture strategies generated for every project (Budget, Balanced & Enterprise).",
  },
  {
    value: "70+",
    label: "AWS services available for intelligent architecture recommendations.",
  },
  {
    value: "100%",
    label: "AI-generated deployment plans, cost estimates, and architecture diagrams.",
  },
  {
    value: "<10s",
    label: "Average time to generate a complete production-ready cloud architecture.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="bg-background px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
            >
              <div
                className="
                  group
                  flex
                  min-h-[320px]
                  flex-col
                  justify-between
                  rounded-[32px]
                  border
                  border-border
                  bg-card
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-2xl
                "
              >
                <div>
                  <p className="text-7xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </p>

                  <div className="mt-6 h-1 w-16 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}