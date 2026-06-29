"use client"

import AwsIcon from "./aws-icon"
import { awsServiceData } from "@/lib/aws/service-data"

type Props = {
  service: string | null
  onClose: () => void
}

export default function ServiceDetails({
  service,
  onClose,
}: Props) {
  if (!service) return null

const data = awsServiceData[service]
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">

      <div className="h-full w-[430px] overflow-y-auto bg-white p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="mb-8 rounded-lg border px-4 py-2"
        >
          Close
        </button>

        <div className="mb-8 flex items-center gap-4">

          <AwsIcon service={service} />

          <div>

            <h2 className="text-3xl font-bold">
              {service}
            </h2>

            <p className="text-sm text-muted-foreground">
              AWS Service
            </p>

          </div>

        </div>

        <div className="space-y-8">

          <section>

            <h3 className="mb-2 font-semibold">
              Why ArchitectAI selected it
            </h3>

            <p className="text-muted-foreground leading-7">
  {data?.description}
</p>

          </section>

          <section>

            <h3 className="mb-2 font-semibold">
              Common Use Cases
            </h3>

           <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
  {data?.bestFor.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>

          </section>
          <section>
  <h3 className="mb-2 font-semibold">
    Pricing Model
  </h3>

  <p className="text-muted-foreground">
    {data?.pricing}
  </p>
</section>

<section>
  <h3 className="mb-2 font-semibold">
    AWS Well-Architected Benefits
  </h3>

  <div className="flex flex-wrap gap-2">
    {data?.benefits.map((benefit) => (
      <span
        key={benefit}
        className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
      >
        {benefit}
      </span>
    ))}
  </div>
</section>

        </div>

      </div>

    </div>
  )
}