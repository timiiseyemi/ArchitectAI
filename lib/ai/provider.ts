import { generateWithGemini } from "./gemini"

export async function generateArchitecture(prompt: string) {
  return generateWithGemini(prompt)
}