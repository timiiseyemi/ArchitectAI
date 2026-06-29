import { NextRequest, NextResponse } from "next/server"

import { buildArchitecturePrompt } from "@/lib/ai/prompt"
import { generateArchitecture } from "@/lib/ai/provider"
import { saveBlueprint } from "@/lib/aws/dynamodb"


export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const prompt = buildArchitecturePrompt(formData)

    console.log("Prompt built successfully")

    const response = await generateArchitecture(prompt)

    await saveBlueprint(
  formData,
  response
)

    

    console.log("Nova Response:")
    console.log(response)

    return NextResponse.json({
      success: true,
      response,
    })
  } catch (error) {
    console.error("Bedrock Error:", error)

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    )
  }
}