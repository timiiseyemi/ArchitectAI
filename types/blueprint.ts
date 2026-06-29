export interface BlueprintSummary {
  health: number
  security: number
  scalability: number
  cost: string
  recommendedOption: string
  executiveSummary: string
}

export interface ArchitectureOption {
  name: string
  monthlyCost: string
  score: number
  description: string

  services: string[]

  connections: [string, string][]

  pros: string[]

  cons: string[]

  reasoning: string[]

  deployment: string[]

  wellArchitected: {
    operationalExcellence: number
    security: number
    reliability: number
    performance: number
    costOptimization: number
    sustainability: number
  }
}

export interface BlueprintResult {
  summary: BlueprintSummary

  architectures: ArchitectureOption[]
}