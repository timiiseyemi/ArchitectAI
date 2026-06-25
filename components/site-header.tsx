"use client"

import { useState } from "react"
import { useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#templates" },
  { label: "FAQs", href: "#resources" },
  { label: "Contact", href: "#resources" },
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
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
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
    window.addEventListener("scroll", updateScrolled, { passive: true })

    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-hidden transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out ${
        scrolled || open
          ? "border-b border-white/40 bg-white/70 shadow-sm shadow-black/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,oklch(0.985_0.015_305/0.92)_0%,oklch(0.97_0.06_118/0.82)_22%,oklch(0.995_0.005_110/0.86)_39%,oklch(0.99_0.012_300/0.84)_73%,oklch(0.9_0.06_20/0.76)_100%)] transition-opacity duration-500 ease-out ${
          scrolled || open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative mx-auto grid h-[104px] max-w-[1800px] grid-cols-[1fr_auto] items-center gap-4 px-6 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-16">
        <a href="#" aria-label="ArchitectAI home">
          <Logo className="[&_span:first-child]:size-8 [&_span:last-child]:text-[28px] [&_span:last-child]:font-bold" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-[#09051f] transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a
            href="#"
            aria-label="Follow ArchitectAI on X"
            className="flex size-8 items-center justify-center rounded-full text-[#09051f] transition-colors hover:text-primary"
          >
            <X className="size-5 stroke-[1.8]" />
          </a>
          <a
            href="#"
            aria-label="Follow ArchitectAI on Instagram"
            className="flex size-8 items-center justify-center rounded-full text-[#09051f] transition-colors hover:text-primary"
          >
            <InstagramIcon className="size-5" />
          </a>
          <Button
            size="lg"
            className="h-12 rounded-full bg-[#05001f] px-6 text-sm font-semibold text-white shadow-none hover:bg-[#171033]"
            render={<a href="#resources" />}
          >
            Get in Touch
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="justify-self-end text-[#09051f] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-white/40 bg-white/45 backdrop-blur-lg lg:hidden">
          <nav className="mx-auto flex max-w-[1800px] flex-col gap-1 px-6 py-5" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-[#09051f] transition-colors hover:bg-white/60 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Follow ArchitectAI on X"
                  className="flex size-9 items-center justify-center rounded-full bg-white/60 text-[#09051f]"
                >
                  <X className="size-5 stroke-[1.8]" />
                </a>
                <a
                  href="#"
                  aria-label="Follow ArchitectAI on Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-white/60 text-[#09051f]"
                >
                  <InstagramIcon className="size-5" />
                </a>
              </div>
              <Button
                size="lg"
                className="h-11 rounded-full bg-[#05001f] px-5 text-sm font-semibold text-white"
                render={<a href="#resources" />}
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
