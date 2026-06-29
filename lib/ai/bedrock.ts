import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime"

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function generateArchitecture(prompt: string) {
  const command = new ConverseCommand({
    modelId: process.env.BEDROCK_MODEL_ID!,
    messages: [
      {
        role: "user",
        content: [
          {
            text: prompt,
          },
        ],
      },
    ],
    inferenceConfig: {
      maxTokens: 4096,
      temperature: 0.3,
      topP: 0.9,
    },
  })

  const response = await client.send(command)

  const text =
    response.output?.message?.content?.find(
      (item) => "text" in item
    )?.text ?? ""

  return text
}