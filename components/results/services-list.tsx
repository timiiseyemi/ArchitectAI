"use client"

import AwsIcon from "./aws-icon"

type Props = {
  services: string[]
}

export default function ServicesList({
  services,
}: Props) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">
        AWS Services
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-slate-100">
                <AwsIcon service={service} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {service}
                </h3>

                <span className="mt-1 inline-flex rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  AWS Service
                </span>
              </div>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              Recommended by ArchitectAI for this workload
              based on scalability, security, reliability,
              and AWS Well-Architected best practices.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}