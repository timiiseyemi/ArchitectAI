import { ArrowRight, Play, Sparkles, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/dashboard-mockup"

const avatars = [
  { alt: "Engineer avatar", x: "0", y: "0" },
  { alt: "Product architect avatar", x: "-50%", y: "0" },
  { alt: "Cloud lead avatar", x: "0", y: "-50%" },
  { alt: "DevOps engineer avatar", x: "-50%", y: "-50%" },
]

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      {/* layered background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(60%_100%_at_50%_0%,oklch(0.965_0.018_292)_0%,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-grid" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-svh max-w-[1440px] items-center gap-10 px-6 pb-12 pt-32 sm:pb-14 sm:pt-[8.5rem] lg:grid-cols-[0.95fr_1.15fr] lg:gap-8 lg:pb-10 lg:pt-28">
        <div className="text-center lg:text-left">
          <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            AI-Powered AWS Architecture Design
          </span>

          <h1 className="mt-6 max-w-[680px] text-balance text-5xl font-normal leading-[0.9] tracking-normal text-foreground sm:text-6xl lg:text-[76px] xl:text-[84px]">
            Design{" "}
            <span className="animate-[text-shimmer_5s_linear_infinite] bg-gradient-to-r from-primary via-[oklch(0.64_0.2_320)] to-primary bg-clip-text text-transparent [background-size:200%_auto]">
              AWS architectures
            </span>{" "}
             before writing code.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Turn application ideas into scalable AWS architectures with
            intelligent recommendations, cost forecasting, security best
            practices, and deployment guidance.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button
              size="lg"
              className="h-11 px-5 text-sm shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              render={<a href="#" />}
            >
              Generate Architecture
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm transition-colors hover:bg-accent"
              render={<a href="#" />}
            >
              <Play className="size-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <span
                  key={avatar.alt}
                  className="relative size-7 overflow-hidden rounded-full border-2 border-background bg-muted"
                >
                  <Image
                    src="/hero-avatars.png"
                    alt={avatar.alt}
                    width={56}
                    height={56}
                    className="absolute left-0 top-0 h-14 w-14 max-w-none object-cover"
                    style={{
                      transform: `translate(${avatar.x}, ${avatar.y})`,
                    }}
                  />
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex text-primary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </span>
              <span className="text-xs text-muted-foreground">
                Trusted by 5,000+ engineers
              </span>
            </div>
          </div>
        </div>

        <div className="relative lg:translate-x-20">
          <div className="animate-float">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
