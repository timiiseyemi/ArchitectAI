"use client"

import { useState } from "react"

export default function ExportButton() {
  const [isExporting, setIsExporting] = useState(false)

  async function exportPDF() {
    if (typeof window === "undefined" || typeof window.print !== "function") {
      alert("Printing is not available in this browser.")
      return
    }

    try {
      setIsExporting(true)
      window.scrollTo({ top: 0, behavior: "auto" })

      await new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
      )

      window.print()
    } catch (error) {
      console.error("Failed to export PDF", error)
      alert("The PDF export failed. Please try again.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <button
      type="button"
      onClick={() => void exportPDF()}
      disabled={isExporting}
      className="rounded-xl bg-primary px-5 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 print:hidden"
    >
      {isExporting ? "Preparing PDF..." : "Export PDF"}
    </button>
  )
}