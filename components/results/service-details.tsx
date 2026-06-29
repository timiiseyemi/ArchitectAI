"use client"

import AwsIcon from "./aws-icon"

type Props = {
  service: string | null
  onClose: () => void
}

export default function ServiceDetails({
  service,
  onClose,
}: Props) {
  if (!service) return null

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

            <p className="text-muted-foreground">
              This service is recommended because it best
              fits the architecture requirements generated
              for your application.
            </p>

          </section>

          <section>

            <h3 className="mb-2 font-semibold">
              Common Use Cases
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Scalable cloud applications</li>
              <li>Production workloads</li>
              <li>AWS best practices</li>
            </ul>

          </section>

        </div>

      </div>

    </div>
  )
}