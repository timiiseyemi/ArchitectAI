"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Generate", href: "/generate" },
]
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 12)
    }
    updateScrolled()
    window.addEventListener("scroll", updateScrolled, {
      passive: true,
    })
    return () =>
      window.removeEventListener(
        "scroll",
        updateScrolled
      )
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-[104px] max-w-[1800px] grid-cols-[1fr_auto] items-center gap-4 px-6 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-16">
        <a
          href="/"
          aria-label="ArchitectAI home"
        >
          <Logo className="[&_span:first-child]:size-8 [&_span:last-child]:text-[28px] [&_span:last-child]:font-bold" />
        </a>
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center justify-end gap-5 lg:flex">
          <Button
            size="lg"
            className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-none hover:bg-primary/90"
            render={<a href="/generate" />}
          >
            Generate
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="justify-self-end text-foreground lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-[1800px] flex-col gap-1 px-6 py-5"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between gap-4">
              <Button
                size="lg"
                className="h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                render={<a href="/generate" />}
              >
                Generate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}