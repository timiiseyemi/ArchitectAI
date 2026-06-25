import { Logo } from "@/components/logo"

const columns = [
  {
    title: "Product",
    links: ["Features", "Templates", "Pricing", "Changelog", "Integrations"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Guides", "API Reference", "Blog", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Customers", "Contact", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
  },
]

export function SiteFooter() {
  return (
    <footer id="resources" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Production-ready AWS architectures, generated from your ideas.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ArchitectAI, Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for developers, startups, and cloud engineers.
          </p>
        </div>
      </div>
    </footer>
  )
}
