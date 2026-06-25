import { Users, Triangle, Network, Zap, Database, HardDrive, ChevronDown, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

function FlowNode({
  icon: Icon,
  label,
  sub,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  sub: string
  delay?: number
}) {
  return (
    <Reveal
      delay={delay}
      className="group flex w-56 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-4.5" />
      </span>
      <div className="text-left">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </Reveal>
  )
}

function Connector() {
  return (
    <div className="flex flex-col items-center text-primary/50" aria-hidden="true">
      <span className="h-5 w-px animate-pulse-soft bg-gradient-to-b from-primary/60 to-border" />
      <ChevronDown className="-mt-1.5 size-4 animate-pulse-soft" />
    </div>
  )
}

export function ArchitectureShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold text-primary">
            Architecture showcase
          </span>
          <h2 className="mt-3 text-balance text-3xl font-normal tracking-normal text-foreground sm:text-4xl">
            Clean, readable diagrams your whole team understands
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every architecture is rendered as an interactive, node-based flow —
            from the edge all the way down to storage. Export to PNG, Terraform,
            or a deployment blueprint in one click.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Node-based diagrams with live connections",
              "Mapped to AWS Well-Architected pillars",
              "Export to Terraform & CDK",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-col items-center">
          <FlowNode icon={Users} label="Users" sub="Web & mobile clients" />
          <Connector />
          <FlowNode icon={Triangle} label="Vercel" sub="Frontend & edge" delay={60} />
          <Connector />
          <FlowNode icon={Network} label="API Gateway" sub="Routing & throttling" delay={120} />
          <Connector />
          <FlowNode icon={Zap} label="Lambda" sub="Serverless compute" delay={180} />
          <Connector />
          <div className="flex gap-4">
            <Reveal
              delay={240}
              className="group flex w-40 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                <Database className="size-4.5" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">DynamoDB</p>
                <p className="text-xs text-muted-foreground">State</p>
              </div>
            </Reveal>
            <Reveal
              delay={300}
              className="group flex w-40 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                <HardDrive className="size-4.5" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">S3</p>
                <p className="text-xs text-muted-foreground">Object storage</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
