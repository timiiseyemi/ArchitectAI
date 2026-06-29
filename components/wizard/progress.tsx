interface ProgressProps {
  currentStep: number
}

const steps = [
  "Project",
  "Scale",
  "Requirements",
  "Preferences",
]

export function Progress({ currentStep }: ProgressProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const completed = stepNumber <= currentStep

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all ${
                    completed
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  {stepNumber}
                </div>

                <span className="mt-3 text-sm font-medium">
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`mx-3 h-0.5 flex-1 ${
                    completed
                      ? "bg-primary"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}