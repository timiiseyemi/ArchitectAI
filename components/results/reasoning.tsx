"use client"

type Props = {
  reasoning: string[]
}

export default function Reasoning({
  reasoning,
}: Props) {
  return (
    <section>

      <h2 className="mb-6 text-2xl font-semibold">
        Architect's Notes
      </h2>

      <div className="space-y-4">

        {reasoning.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border p-5"
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  )
}