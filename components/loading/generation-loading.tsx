"use client"

import {
  Brain,
  CheckCircle2,
  Loader2,
  Database,
  ShieldCheck,
  DollarSign,
  Workflow,
  Cloud,
  Sparkles,
} from "lucide-react"

const steps = [
  {
    title: "Understanding your project",
    icon: Brain,
  },
  {
    title: "Selecting AWS services",
    icon: Cloud,
  },
  {
    title: "Designing cloud architecture",
    icon: Workflow,
  },
  {
    title: "Optimizing monthly costs",
    icon: DollarSign,
  },
  {
    title: "Applying security best practices",
    icon: ShieldCheck,
  },
  {
    title: "Saving blueprint to DynamoDB",
    icon: Database,
  },
]

type Props = {
  visible: boolean
  completed: boolean
  progress:number
}

export default function GenerationLoading({
  visible,
  completed,
  progress,
}: Props) {
  const activeStep = Math.min(
  Math.floor((progress / 100) * steps.length),
  steps.length - 1
)

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 backdrop-blur-xl">

      <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

        <div className="mb-10 flex items-center gap-4">

          <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg">

            <Sparkles className="h-8 w-8" />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              ArchitectAI
            </h2>

            <p className="mt-1 text-slate-400">
              Designing your AWS cloud architecture...
            </p>

          </div>

        </div>

        <div className="mb-10 h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="space-y-5">

          {steps.map((step, index) => {
            const Icon = step.icon

            const done = index < activeStep
            const current = index === activeStep

            return (
              <div
                key={step.title}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >

                {done ? (
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                ) : current ? (
                  <Loader2 className="h-6 w-6 animate-spin text-indigo-400" />
                ) : (
                  <Icon className="h-6 w-6 text-slate-500" />
                )}

                <span
                  className={
                    done || current
                      ? "font-medium text-white"
                      : "text-slate-500"
                  }
                >
                  {step.title}
                </span>

              </div>
            )
          })}

        </div>

        <div className="mt-8 flex items-center justify-between text-sm">

          <span className="text-slate-400">
            AI is analysing your requirements...
          </span>

          <span className="font-semibold text-indigo-400">
            {Math.round(progress)}%
          </span>

        </div>

        {completed && (
          <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-5 text-center">

            <h3 className="text-xl font-bold text-green-400">
              🎉 Blueprint Generated Successfully
            </h3>

            <p className="mt-2 text-sm text-slate-300">
              Redirecting to your cloud blueprint...
            </p>

          </div>
        )}

      </div>

    </div>
  )
}