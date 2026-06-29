"use client"

import { ArchitectureWizardData } from "@/types/architecture"

interface ScaleStepProps {
  formData: ArchitectureWizardData
  setFormData: React.Dispatch<
    React.SetStateAction<ArchitectureWizardData>
  >
}

export function ScaleStep({
  formData,
  setFormData,
}: ScaleStepProps) {
  return (
    <div className="space-y-10">

      <div>
        <p className="text-sm font-medium text-primary">
          Step 2 of 4
        </p>

        <h2 className="mt-2 text-4xl font-bold tracking-tight">
          How much traffic do you expect?
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          This helps ArchitectAI determine the best AWS services,
          scaling strategy and estimated monthly cost.
        </p>
      </div>

      {/* Expected Users */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Expected Users
        </label>

        <select
          value={formData.expectedUsers}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              expectedUsers: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="">Select</option>
          <option value="<100">Less than 100</option>
          <option value="100-1000">100 - 1,000</option>
          <option value="1000-10000">1,000 - 10,000</option>
          <option value="10000-100000">10,000 - 100,000</option>
          <option value="100000+">100,000+</option>
        </select>
      </div>

      {/* Growth */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Expected Growth
        </label>

        <select
          value={formData.expectedGrowth}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              expectedGrowth: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="">Select</option>
          <option value="slow">Slow</option>
          <option value="moderate">Moderate</option>
          <option value="fast">Fast</option>
        </select>
      </div>

      {/* Budget */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Monthly Budget
        </label>

        <select
          value={formData.budget}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              budget: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="">Select</option>
          <option value="low">Under $50</option>
          <option value="medium">$50 - $500</option>
          <option value="high">$500+</option>
        </select>
      </div>

      {/* Region */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Deployment Region
        </label>

        <select
          value={formData.region}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              region: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="">Select Region</option>
          <option value="af-south-1">Africa (Cape Town)</option>
          <option value="us-east-1">US East (N. Virginia)</option>
          <option value="us-west-2">US West (Oregon)</option>
          <option value="eu-west-1">Europe (Ireland)</option>
          <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
        </select>
      </div>

    </div>
  )
}