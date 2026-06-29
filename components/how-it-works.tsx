import { MessageSquare, Cpu, Rocket } from "lucide-react"
import { Reveal } from "@/components/reveal"
const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Describe Your Application",
    description:
      "Describe your application, users, traffic, budget and requirements using natural language. No AWS knowledge required.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Designs AWS Infrastructure",
    description:
      "ArchitectAI analyzes your requirements and generates multiple production-ready AWS architectures with cost estimates and security recommendations.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Review & Deploy",
    description:
      "Compare architectures, inspect AWS services, visualize infrastructure and export a deployment-ready cloud blueprint.",
  },
]
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-border bg-background py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-slate-500/10 blur-[160px]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            AI WORKFLOW
          </span>
          <h2 className="mt-8 text-5xl font-semibold tracking-tight text-foreground">
            AI Cloud Architecture
            <br />
            in Minutes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Generate production-ready AWS architectures,
            compare multiple solutions, estimate costs,
            and deploy with confidence—all powered by AI.
          </p>
        </Reveal>
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 120}
            >
              <div
                className={`group relative h-full overflow-hidden rounded-[32px] border border-border bg-card transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  index === 1
                    ? "lg:mt-10"
                    : index === 2
                    ? "lg:mt-20"
                    : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-slate-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-110">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="mt-10 text-3xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-10 flex-1 rounded-3xl border border-border bg-gradient-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-900 dark:to-slate-950">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                        <div className="h-3 flex-1 rounded-full bg-border" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-blue-400" />
                        <div className="h-3 w-4/5 rounded-full bg-border" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-slate-500" />
                        <div className="h-3 w-3/5 rounded-full bg-border" />
                      </div>
                      <div className="mt-8 rounded-2xl border border-border bg-background p-5">
                        <div className="text-sm font-semibold text-foreground">
                          {step.title}
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-blue-500" />
                        <div className="mt-4 space-y-2">
                          <div className="h-2 rounded-full bg-border" />
                          <div className="h-2 w-5/6 rounded-full bg-border" />
                          <div className="h-2 w-2/3 rounded-full bg-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}