import { Reveal } from "@/components/reveal"

const stats = [
  {
    value: "12+",
    label: "Expertise building AI architecture plans from concept to solution",
  },
  {
    value: "250+",
    label: "Cloud architecture solutions generated since launch",
  },
  {
    value: "40+",
    label: "AWS services mapped with security and cost guidance",
  },
  {
    value: "15+",
    label: "Deployment patterns for production-ready applications",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="bg-[linear-gradient(90deg,oklch(0.985_0.022_110/0.82),oklch(0.982_0.025_210/0.72),oklch(0.985_0.025_330/0.78))] px-6 pb-28 pt-8"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.value}
              delay={index * 80}
              className="flex min-h-[310px] flex-col justify-between rounded-[30px] bg-white px-8 py-10 shadow-[0_18px_60px_oklch(0.18_0.01_280/0.04)] sm:px-10 sm:py-12"
            >
              <p className="font-sans text-[clamp(4.75rem,8vw,6.25rem)] font-normal leading-none tracking-normal text-[#2d2d30]">
                {stat.value}
              </p>
              <p className="max-w-[21rem] text-lg font-semibold leading-snug text-[#09051f]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
