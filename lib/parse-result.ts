export function parseResult(result: any) {
  if (!result) return null

  try {
    const data = result.response ?? result

    if (typeof data === "string") {
      return JSON.parse(data)
    }

    return data
  } catch (error) {
    console.error("Failed to parse result:", error)
    return null
  }
}