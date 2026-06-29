import { create } from "zustand"

import { BlueprintResult } from "@/types/blueprint"

interface GenerationStore {
  result: BlueprintResult | null

  selectedArchitecture: number

  setSelectedArchitecture: (
    index: number
  ) => void

  setResult: (
    result: BlueprintResult
  ) => void

  clear: () => void
}

export const useGenerationStore =
  create<GenerationStore>((set) => ({
    result: null,

    selectedArchitecture: 0,

    setSelectedArchitecture: (
      index
    ) =>
      set({
        selectedArchitecture: index,
      }),

    setResult: (result) =>
      set({
        result,
      }),

    clear: () =>
      set({
        result: null,
        selectedArchitecture: 0,
      }),
  }))