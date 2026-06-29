export interface ArchitectureOption {
  name: "Budget" | "Balanced" | "Enterprise"

  summary: {
    architectureScore: number
    estimatedMonthlyCost: string
    securityScore: number
    scalabilityScore: number
  }

  architecture: {
    frontend: string
    backend: string
    database: string
    storage: string
    authentication: string
    networking: string
  }

  services: {
    name: string
    purpose: string
    monthlyCost: string
    reason: string
  }[]

  diagram: {
    nodes: {
      id: string
      label: string
      type: string
    }[]

    edges: {
      source: string
      target: string
    }[]
  }

  recommendations: string[]

  reasoning: string

  deploymentSteps: string[]
}

export interface ArchitectureResult {
  options: ArchitectureOption[]
}