"use client"

import { CheckCircle2 } from "lucide-react"

type Props = {
  steps: string[]
}

export default function Deployment({
  steps,
}: Props) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">
        Deployment Checklist
      </h2>

      <div className="rounded-2xl border">

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b p-5 last:border-b-0"
          >
            <CheckCircle2 className="h-5 w-5 text-green-600" />

            <div>

              <p className="font-medium">
                Step {index + 1}
              </p>

              <p className="text-sm text-muted-foreground">
                {step}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}