"use client"

type Props = {
  health: number
  security: number
  scalability: number
}

function ScoreCard({
  title,
  score,
}: {
  title: string
  score: number
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {score}
      </h2>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-700"
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  )
}

export default function ArchitectureScore({
  health,
  security,
  scalability,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <ScoreCard
        title="Architecture Health"
        score={health}
      />

      <ScoreCard
        title="Security"
        score={security}
      />

      <ScoreCard
        title="Scalability"
        score={scalability}
      />
    </div>
  )
}