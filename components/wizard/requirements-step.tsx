"use client"

import { ArchitectureWizardData } from "@/types/architecture"

interface RequirementsStepProps {
  formData: ArchitectureWizardData
  setFormData: React.Dispatch<
    React.SetStateAction<ArchitectureWizardData>
  >
}

const features = [
  {
    key: "authentication",
    title: "Authentication",
    description: "Users can sign up and log in.",
  },
  {
    key: "fileUploads",
    title: "File Uploads",
    description: "Upload images, videos or documents.",
  },
  {
    key: "payments",
    title: "Payments",
    description: "Accept online payments.",
  },
  {
    key: "notifications",
    title: "Notifications",
    description: "Email, SMS or push notifications.",
  },
  {
    key: "aiFeatures",
    title: "AI Features",
    description: "LLMs, chatbots or AI-powered features.",
  },
  {
    key: "realtime",
    title: "Real-time Updates",
    description: "Live chat, dashboards or streaming.",
  },
  {
    key: "analytics",
    title: "Analytics",
    description: "Track user activity and reports.",
  },
]

export function RequirementsStep({
  formData,
  setFormData,
}: RequirementsStepProps) {
  const toggleFeature = (key: keyof ArchitectureWizardData) => {
    setFormData((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="space-y-10">

      <div>
        <p className="text-sm font-medium text-primary">
          Step 3 of 4
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          What features does your application need?
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Select all the capabilities your application requires.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {features.map((feature) => (
          <button
            key={feature.key}
            type="button"
            onClick={() =>
              toggleFeature(feature.key as keyof ArchitectureWizardData)
            }
            className={`rounded-2xl border p-6 text-left transition-all ${
              formData[feature.key as keyof ArchitectureWizardData]
                ? "border-violet-500 bg-violet-50"
                : "hover:border-violet-300"
            }`}
          >
            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              <div className="text-2xl">
                {formData[
                  feature.key as keyof ArchitectureWizardData
                ]
                  ? "✓"
                  : "+"}
              </div>

            </div>
          </button>
        ))}

      </div>

    </div>
  )
}