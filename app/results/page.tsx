"use client"

import { useGenerationStore } from "@/store/generation-store"
import { parseResult } from "@/lib/parse-result"

import ArchitectureSelector from "@/components/results/architecture-selector"
import ArchitectureScore from "@/components/results/architecture-score"
import CostCard from "@/components/results/cost-card"
import ServicesList from "@/components/results/services-list"
import ArchitectureDiagram from "@/components/results/architecture-diagram"
import Reasoning from "@/components/results/reasoning"
import Deployment from "@/components/results/deployment"
import ExportButton from "@/components/results/export-button"

export default function ResultsPage() {
  const result = useGenerationStore((state) => state.result)

  const selectedArchitecture = useGenerationStore(
    (state) => state.selectedArchitecture
  )

  const setSelectedArchitecture = useGenerationStore(
    (state) => state.setSelectedArchitecture
  )

  const data = parseResult(result)

  if (!data) {
    return (
      <main className="mx-auto max-w-6xl p-10">
        <h1 className="text-3xl font-bold">
          No Architecture Found
        </h1>
      </main>
    )
  }

  const architectures =
    data.architectures ??
    data.options ??
    []

  if (!architectures.length) {
    return (
      <main className="mx-auto max-w-6xl p-10">
        <h1 className="text-3xl font-bold">
          No Architecture Found
        </h1>

        <pre className="mt-8 overflow-auto rounded-xl border bg-muted p-6 text-xs">
          {JSON.stringify(data, null, 2)}
        </pre>
      </main>
    )
  }

  const architecture =
    architectures[
      Math.min(
        selectedArchitecture,
        architectures.length - 1
      )
    ]

  return (
    <main
  id="blueprint"
  className="mx-auto max-w-7xl space-y-10 p-10"
>
      <div className="flex items-center justify-between">

  <div>

    <h1 className="text-5xl font-semibold">
      Cloud Blueprint
    </h1>

    <p className="mt-3 text-muted-foreground">
      AI Generated AWS Architecture
    </p>

  </div>

  <ExportButton />

</div>

      <ArchitectureSelector
        architectures={architectures}
        selected={selectedArchitecture}
        onSelect={setSelectedArchitecture}
      />

      <div className="grid gap-6 lg:grid-cols-4">

        <div className="lg:col-span-3">

          <ArchitectureScore
            health={
              data.summary?.health ??
              data.health ??
              architecture.health ??
              architecture["Architecture Health Score"] ??
              70
            }
            security={
              data.summary?.security ??
              data.security ??
              architecture.security ??
              architecture["Security Score"] ??
              70
            }
            scalability={
              data.summary?.scalability ??
              data.scalability ??
              architecture.scalability ??
              architecture["Scalability Score"] ??
              70
            }
          />

        </div>

        <CostCard
          cost={
            architecture.monthlyCost ??
            architecture.cost ??
            architecture["Estimated Monthly Cost"] ??
            "N/A"
          }
        />

      </div>

      <ServicesList
        services={
          architecture.services ??
          architecture["AWS Services"] ??
          []
        }
      />

      <ArchitectureDiagram
        services={
          architecture.services ??
          architecture["AWS Services"] ??
          []
        }
      />

      <Reasoning
        reasoning={
          architecture.reasoning ??
          architecture["AI Reasoning"] ??
          ""
        }
      />

      <Deployment
        steps={
          architecture.deployment ??
          architecture["Deployment Steps"] ??
          []
        }
      />

    </main>
  )
}