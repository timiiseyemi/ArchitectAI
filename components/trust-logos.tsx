import type { ReactNode, SVGProps } from "react"

const logoClass =
  "flex h-20 min-w-[190px] shrink-0 items-center justify-center text-[#2f2f33]"

function LogoSlot({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`${logoClass} ${className ?? ""}`}>{children}</div>
}

function AWSLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 170 72" fill="currentColor" aria-label="AWS" {...props}>
      <text x="10" y="43" fontSize="42" fontWeight="800" letterSpacing="-1.5">
        aws
      </text>
      <path
        d="M36 55c28 14 67 11 95-8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path d="M126 43 143 40 135 55Z" />
    </svg>
  )
}

function GoDaddyLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 250 64" fill="none" aria-label="GoDaddy" {...props}>
      <path
        d="M34 47c-13-11-22-20-22-31 0-8 6-13 14-13 5 0 9 2 12 6 3-4 7-6 12-6 8 0 14 5 14 13 0 11-9 20-22 31l-4 3-4-3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <circle cx="38" cy="25" r="7" fill="currentColor" />
      <text
        x="80"
        y="43"
        fill="currentColor"
        fontSize="36"
        fontWeight="800"
        letterSpacing="-1.2"
      >
        GoDaddy
      </text>
    </svg>
  )
}

function HostingerLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 265 56" fill="currentColor" aria-label="Hostinger" {...props}>
      <path d="M11 8h15v14h24V8h15v40H50V34H26v14H11V8Z" />
      <text x="82" y="39" fontSize="36" fontWeight="800" letterSpacing="-1.5">
        Hostinger
      </text>
    </svg>
  )
}



function CloudflareLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 270 58" fill="currentColor" aria-label="Cloudflare" {...props}>
      <path d="M34 44H16c-8 0-14-6-14-13s6-13 14-13c2 0 5 .5 7 1.5C27 10 36 4 47 4c15 0 27 11 29 25h3c8 0 14 6 14 14v1H34Z" />
      <path d="M58 26h42c8 0 14 6 14 14v4H53c1-8 1-13 5-18Z" opacity=".55" />
      <text x="124" y="40" fontSize="35" fontWeight="800" letterSpacing="-1.2">
        Cloudflare
      </text>
    </svg>
  )
}

function DigitalOceanLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 290 58" fill="currentColor" aria-label="DigitalOcean" {...props}>
      <path d="M31 6a25 25 0 0 1 25 25c0 13-10 24-23 25v-15a10 10 0 1 0-12-10H6A25 25 0 0 1 31 6Z" />
      <path d="M18 41h15v15H18V41ZM6 41h9v9H6v-9ZM18 30h10v9H18v-9Z" />
      <text x="78" y="40" fontSize="35" fontWeight="800" letterSpacing="-1.4">
        DigitalOcean
      </text>
    </svg>
  )
}

function VercelLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 185 48" fill="currentColor" aria-label="Vercel" {...props}>
      <path d="M24 5 48 45H0L24 5Z" />
      <text x="62" y="36" fontSize="34" fontWeight="750" letterSpacing="-1.2">
        Vercel
      </text>
    </svg>
  )
}

function GitHubLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 235 64" fill="currentColor" aria-label="GitHub" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 2C15.4 2 2 15.7 2 32.6c0 13.5 8.6 24.9 20.5 29 1.5.3 2.1-.7 2.1-1.5v-6c-8.4 1.9-10.1-3.7-10.1-3.7-1.4-3.5-3.3-4.5-3.3-4.5-2.7-1.9.2-1.8.2-1.8 3 .2 4.6 3.1 4.6 3.1 2.7 4.6 7 3.3 8.7 2.5.3-2 1.1-3.3 1.9-4-6.7-.8-13.7-3.4-13.7-15.1 0-3.3 1.2-6.1 3.1-8.2-.3-.8-1.4-3.9.3-8.1 0 0 2.5-.8 8.2 3.1 2.4-.7 5-1 7.6-1s5.2.3 7.6 1c5.7-3.9 8.2-3.1 8.2-3.1 1.7 4.2.6 7.3.3 8.1 1.9 2.1 3.1 4.9 3.1 8.2 0 11.7-7.1 14.2-13.8 15.1 1.1 1 2.1 2.9 2.1 5.8v8.6c0 .8.5 1.8 2.1 1.5C55.4 57.5 64 46.1 64 32.6 64 15.7 50.6 2 32 2Z"
      />
      <text x="86" y="43" fontSize="36" fontWeight="800" letterSpacing="-1.2">
        GitHub
      </text>
    </svg>
  )
}

function DockerLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 230 58" fill="currentColor" aria-label="Docker" {...props}>
      <path d="M10 30h12V19H10v11Zm15 0h12V19H25v11Zm15 0h12V19H40v11Zm15 0h12V19H55v11ZM25 16h12V5H25v11Zm15 0h12V5H40v11Zm15 0h12V5H55v11Zm32 15c-4 0-7 2-10 5H5c1 12 10 19 25 19 23 0 39-10 47-18 4 0 9-2 12-6Z" />
      <text x="104" y="40" fontSize="36" fontWeight="800" letterSpacing="-1.1">
        Docker
      </text>
    </svg>
  )
}

function KubernetesLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 64" fill="currentColor" aria-label="Kubernetes" {...props}>
      <path d="M32 3 57 18v29L32 61 7 47V18L32 3Zm0 12-14 8v17l14 8 14-8V23l-14-8Z" />
      <path
        d="M32 18v30M17 25l30 16M47 25 17 41"
        stroke="#f6eef8"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <text x="82" y="43" fontSize="36" fontWeight="800" letterSpacing="-1.4">
        Kubernetes
      </text>
    </svg>
  )
}

const logos = [
  <LogoSlot key="aws" className="min-w-[170px]">
    <AWSLogo className="h-[72px] w-[170px]" />
  </LogoSlot>,

  <LogoSlot key="godaddy" className="min-w-[250px]">
    <GoDaddyLogo className="h-16 w-[250px]" />
  </LogoSlot>,

  <LogoSlot key="hostinger" className="min-w-[265px]">
    <HostingerLogo className="h-14 w-[265px]" />
  </LogoSlot>,

  <LogoSlot key="cloudflare" className="min-w-[270px]">
    <CloudflareLogo className="h-[58px] w-[270px]" />
  </LogoSlot>,

  <LogoSlot key="digitalocean" className="min-w-[290px]">
    <DigitalOceanLogo className="h-[58px] w-[290px]" />
  </LogoSlot>,

  <LogoSlot key="vercel">
    <VercelLogo className="h-12 w-[185px]" />
  </LogoSlot>,

  <LogoSlot key="github" className="min-w-[235px]">
    <GitHubLogo className="h-16 w-[235px]" />
  </LogoSlot>,

  <LogoSlot key="docker" className="min-w-[230px]">
    <DockerLogo className="h-[58px] w-[230px]" />
  </LogoSlot>,

  <LogoSlot key="kubernetes" className="min-w-[280px]">
    <KubernetesLogo className="h-16 w-[280px]" />
  </LogoSlot>,
]

export function TrustLogos() {
  return (
    <section className="overflow-hidden bg-transparent">
      <div className="relative flex h-72 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-logo-marquee flex w-max items-center gap-20 pr-20 will-change-transform">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="shrink-0">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
