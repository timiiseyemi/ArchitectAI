import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_120%_at_50%_0%,rgba(255,255,255,0.18)_0%,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -left-10 -top-10 size-60 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -bottom-16 right-0 size-60 rounded-full bg-white/10 blur-3xl [animation-delay:4s]"
        />
        <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-normal tracking-normal text-primary-foreground sm:text-4xl">
          Design your first architecture today.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Go from idea to a production-ready AWS blueprint in minutes. Free for
          your first three projects.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button
            size="lg"
            className="h-11 bg-background px-6 text-sm text-foreground shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-background/90"
            render={<a href="#" />}
          >
            Get Started Free
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
