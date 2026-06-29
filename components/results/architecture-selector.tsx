"use client"

import { ArchitectureOption } from "@/types/blueprint"

type Props = {
  architectures: ArchitectureOption[]
  selected: number
  onSelect: (index: number) => void
}

export default function ArchitectureSelector({
  architectures,
  selected,
  onSelect,
}: Props) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">
        Choose Your Blueprint
      </h2>

      <div className="grid gap-5 lg:grid-cols-3">
        {architectures.map((architecture, index) => {
          const active = index === selected

          return (
            <button
              key={architecture.name}
              onClick={() => onSelect(index)}
              className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
                active
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "hover:-translate-y-1 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {architecture.name}
                </h3>

                {architecture.name === "Balanced" && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Recommended
                  </span>
                )}
              </div>

              <p className="mt-6 text-4xl font-bold">
                {architecture.score}
              </p>

              <p className="text-sm text-muted-foreground">
                Architecture Score
              </p>

              <div className="mt-6">
                <p className="text-lg font-semibold">
                  {architecture.monthlyCost}
                </p>

                <p className="text-sm text-muted-foreground">
                  Estimated Monthly Cost
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}