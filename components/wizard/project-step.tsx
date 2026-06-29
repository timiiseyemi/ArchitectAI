"use client"

import { ArchitectureWizardData } from "@/types/architecture"

interface ProjectStepProps {
  formData: ArchitectureWizardData
  setFormData: React.Dispatch<
    React.SetStateAction<ArchitectureWizardData>
  >
}

export function ProjectStep({
  formData,
  setFormData,
}: ProjectStepProps) {
  return (
    <div className="space-y-10">

      {/* Heading */}

      <div>
        <p className="text-sm font-medium text-primary">
          Step 1 of 4
        </p>

        <h2 className="mt-2 text-4xl font-bold tracking-tight">
          Tell us about your application
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We'll use this information to design the best AWS architecture
          for your application.
        </p>
      </div>

      {/* Project Name */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Project Name
        </label>

        <input
          type="text"
          value={formData.projectName}
          placeholder="Foodie"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              projectName: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Describe your application
        </label>

        <textarea
          rows={6}
          value={formData.description}
          placeholder="Example: An AI-powered food delivery platform that connects restaurants with customers across Lagos..."
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />
      </div>

      {/* Application Type */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Application Type
        </label>

        <select
          value={formData.applicationType}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              applicationType: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="">Select application type</option>
          <option value="saas">SaaS</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="fintech">FinTech</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="marketplace">Marketplace</option>
          <option value="social">Social</option>
          <option value="ai">AI Platform</option>
          <option value="other">Other</option>
        </select>
      </div>

    </div>
  )
}