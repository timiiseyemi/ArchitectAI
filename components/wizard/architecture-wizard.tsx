"use client"

import { useState } from "react"

import {
  ArchitectureWizardData,
  defaultArchitectureWizardData,
} from "@/types/architecture"

import { Progress } from "./progress"
import { ProjectStep } from "./project-step"
import { ScaleStep } from "./scale-step"
import { RequirementsStep } from "./requirements-step"
import { PreferencesStep } from "./preferences-step"
import { useRouter } from "next/navigation"
import { useGenerationStore } from "@/store/generation-store"

import GenerationLoading from "@/components/loading/generation-loading"

export function ArchitectureWizard() {
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] =
    useState<ArchitectureWizardData>(defaultArchitectureWizardData)

    const router = useRouter()

const setResult = useGenerationStore(
  (state) => state.setResult
)

  const [isGenerating, setIsGenerating] = useState(false)
  const [generationCompleted, setGenerationCompleted] = useState(false)

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateArchitecture = async () => {
    try {
        setGenerationCompleted(false)   
      setIsGenerating(true)

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

console.log(result)

setResult(result.response)

setGenerationCompleted(true)

await new Promise((resolve) =>
  setTimeout(resolve, 1200)
)

router.push("/results")

      // We'll replace this with routing to /results
      // in the next step.
    } catch (error) {
      console.error(error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <GenerationLoading visible={isGenerating} completed={generationCompleted} />

      <div className="mx-auto max-w-5xl p-10">
        <h1 className="text-4xl font-semibold">
          Create Cloud Blueprint
        </h1>

        <p className="mt-3 text-muted-foreground">
          Create your AWS cloud blueprint in four simple steps.
        </p>

        <div className="mt-12">
          <Progress currentStep={currentStep} />
        </div>

        <div className="mt-12 rounded-xl border p-8">
          {currentStep === 1 && (
            <ProjectStep
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentStep === 2 && (
            <ScaleStep
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentStep === 3 && (
            <RequirementsStep
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {currentStep === 4 && (
            <PreferencesStep
              formData={formData}
              setFormData={setFormData}
            />
          )}

          <div className="mt-8 flex justify-between">
            <button
              onClick={previousStep}
              disabled={currentStep === 1 || isGenerating}
              className="rounded-lg border px-6 py-2 disabled:opacity-40"
            >
              Previous
            </button>

            {currentStep === 4 ? (
              <button
                onClick={generateArchitecture}
                disabled={isGenerating}
                className="rounded-lg bg-primary px-6 py-2 text-white disabled:opacity-40"
              >
                {isGenerating
                  ? "Generating..."
                  : "Generate Architecture"}
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={isGenerating}
                className="rounded-lg bg-primary px-6 py-2 text-white disabled:opacity-40"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}