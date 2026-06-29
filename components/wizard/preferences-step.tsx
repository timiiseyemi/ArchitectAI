"use client"

import { ArchitectureWizardData } from "@/types/architecture"

interface PreferencesStepProps {
  formData: ArchitectureWizardData
  setFormData: React.Dispatch<
    React.SetStateAction<ArchitectureWizardData>
  >
}

export function PreferencesStep({
  formData,
  setFormData,
}: PreferencesStepProps) {
  return (
    <div className="space-y-10">

      <div>
        <p className="text-sm font-medium text-primary">
          Step 4 of 4
        </p>

        <h2 className="mt-2 text-4xl font-bold tracking-tight">
          How should we optimize your architecture?
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Tell ArchitectAI what matters most so it can make the best AWS recommendations.
        </p>
      </div>

      {/* Database */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Preferred Database
        </label>

        <select
          value={formData.database}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              database: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="ai">Let AI Decide</option>
          <option value="dynamodb">DynamoDB</option>
          <option value="aurora">Aurora PostgreSQL</option>
          <option value="aurora-dsql">Aurora DSQL</option>
        </select>
      </div>

      {/* Deployment */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Deployment Style
        </label>

        <select
          value={formData.deployment}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              deployment: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="serverless">Serverless</option>
          <option value="containers">Containers (ECS/Fargate)</option>
          <option value="ec2">EC2 Instances</option>
          <option value="ai">Let AI Decide</option>
        </select>
      </div>

      {/* Optimization */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Optimization Goal
        </label>

        <select
          value={formData.architectureMode}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              architectureMode: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="balanced">Balanced</option>
          <option value="cost">Lowest Cost</option>
          <option value="performance">Highest Performance</option>
          <option value="security">Maximum Security</option>
        </select>
      </div>

      {/* Notes */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Additional Notes (Optional)
        </label>

        <textarea
          rows={5}
          value={formData.additionalNotes}
          placeholder="Anything else you'd like ArchitectAI to know?"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              additionalNotes: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />
      </div>

    </div>
  )
}