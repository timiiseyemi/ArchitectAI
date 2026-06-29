export interface ArchitectureWizardData {
  // Step 1
  projectName: string
  description: string
  applicationType: string

  // Step 2
  expectedUsers: string
  expectedGrowth: string
  budget: string
  region: string

  // Step 3
  authentication: boolean
  fileUploads: boolean
  payments: boolean
  notifications: boolean
  aiFeatures: boolean
  realtime: boolean
  analytics: boolean

  // Step 4
  database: string
  deployment: string
  architectureMode: string
  additionalNotes: string
}

export const defaultArchitectureWizardData: ArchitectureWizardData = {
  projectName: "",
  description: "",
  applicationType: "",

  expectedUsers: "",
  expectedGrowth: "",
  budget: "",
  region: "",

  authentication: false,
  fileUploads: false,
  payments: false,
  notifications: false,
  aiFeatures: false,
  realtime: false,
  analytics: false,

  database: "Let AI Decide",
  deployment: "Serverless",
  architectureMode: "Balanced",
  additionalNotes: "",
}