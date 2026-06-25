import { Shield, DollarSign, Boxes, Activity, Check } from "lucide-react"

function Node({
  label,
  sub,
  className = "",
}: {
  label: string
  sub: string
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-background px-3 py-2 text-center shadow-sm ${className}`}
    >
      <p className="text-[11px] font-semibold text-foreground">{label}</p>
      <p className="text-[10px] text-muted-foreground">{sub}</p>
    </div>
  )
}

export function DashboardMockup() {
  return (
    <div className="w-full rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10 ring-1 ring-black/5">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-muted px-3 text-[11px] text-muted-foreground">
          architectai.app / projects / realtime-saas
        </div>
      </div>

      <div className="rounded-xl bg-muted/50 p-3 sm:p-4">
        {/* top stat row */}
        <div className="mb-3 grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl border border-border bg-background p-3">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Shield className="size-3.5 text-primary" />
              <span className="text-[10px] font-medium">Security</span>
            </div>
            <p className="mt-1 text-lg font-semibold text-foreground">A+</p>
            <p className="text-[10px] text-muted-foreground">94 / 100</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-3">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <DollarSign className="size-3.5 text-primary" />
              <span className="text-[10px] font-medium">Est. cost</span>
            </div>
            <p className="mt-1 text-lg font-semibold text-foreground">$412</p>
            <p className="text-[10px] text-muted-foreground">/ month</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-3">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Activity className="size-3.5 text-primary" />
              <span className="text-[10px] font-medium">Scale</span>
            </div>
            <p className="mt-1 text-lg font-semibold text-foreground">1.2M</p>
            <p className="text-[10px] text-muted-foreground">req / min</p>
          </div>
        </div>

        {/* architecture diagram */}
        <div className="rounded-xl border border-border bg-background p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Boxes className="size-3.5 text-primary" />
              <span className="text-[11px] font-semibold text-foreground">
                Architecture diagram
              </span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[9px] font-medium text-accent-foreground">
              <span className="size-1.5 animate-pulse-soft rounded-full bg-primary" />
              Live
            </span>
          </div>

          <div className="relative flex flex-col items-center gap-2.5">
            <Node label="Users" sub="Global" className="w-28" />
            <span className="h-3 w-px animate-pulse-soft bg-gradient-to-b from-primary/60 to-border" />
            <Node label="CloudFront" sub="CDN + WAF" className="w-32" />
            <span className="h-3 w-px animate-pulse-soft bg-gradient-to-b from-primary/60 to-border [animation-delay:0.4s]" />
            <Node label="API Gateway" sub="REST + WS" className="w-32" />
            <span className="h-3 w-px animate-pulse-soft bg-gradient-to-b from-primary/60 to-border [animation-delay:0.8s]" />
            <div className="flex w-full items-stretch justify-center gap-2.5">
              <Node label="Lambda" sub="Compute" className="flex-1" />
              <Node label="ECS Fargate" sub="Workers" className="flex-1" />
            </div>
            <span className="h-3 w-px bg-border" />
            <div className="flex w-full items-stretch justify-center gap-2.5">
              <Node label="DynamoDB" sub="State" className="flex-1" />
              <Node label="S3" sub="Storage" className="flex-1" />
              <Node label="ElastiCache" sub="Redis" className="flex-1" />
            </div>
          </div>
        </div>

        {/* recommendations */}
        <div className="mt-3 rounded-xl border border-border bg-background p-3">
          <p className="mb-2 text-[11px] font-semibold text-foreground">
            Recommendations
          </p>
          <ul className="space-y-1.5">
            {[
              "Enable point-in-time recovery on DynamoDB",
              "Add WAF rate limiting at CloudFront edge",
              "Use S3 lifecycle rules to cut storage 28%",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="size-2.5 text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
