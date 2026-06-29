import { Reveal } from "@/components/reveal"
const stats = [
  {
    value: "12+",
    label: "Years of experience designing AI-powered cloud architecture solutions",
  },
  {
    value: "250+",
    label: "Cloud architecture blueprints generated",
  },
  {
    value: "40+",
    label: "AWS services intelligently mapped",
  },
  {
    value: "15+",
    label: "Production deployment patterns supported",
  },
]
export function Features() {
  return (
    <section
      id="features"
      className="border-y border-border bg-background px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.value}
              delay={index * 80}
            >
              <div className="group flex min-h-[300px] flex-col justify-between rounded-[32px] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                <div>
                  <p className="text-7xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </p>
                </div>
                <p className="mt-10 text-lg leading-8 text-muted-foreground">
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