"use client"

import { Wallet } from "lucide-react"

type Props = {
  cost: string
}

export default function CostCard({ cost }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">
          <Wallet className="h-6 w-6 text-primary" />
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Estimated Monthly Cost
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            {cost}
          </h2>
        </div>

      </div>

      <div className="mt-6 h-2 rounded-full bg-muted">
        <div className="h-full w-3/5 rounded-full bg-primary transition-all duration-700" />
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Estimated cost based on the generated AWS architecture.
      </p>

    </div>
  )
}