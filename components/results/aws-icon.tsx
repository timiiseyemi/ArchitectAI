import Image from "next/image"

import { awsIconMap } from "@/lib/aws/icon-map"

type Props = {
  service: string
}

export default function AwsIcon({
  service,
}: Props) {
  const icon =
    awsIconMap[service]

  if (!icon) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-lg">
        ☁️
      </div>
    )
  }

  return (
    <Image
      src={`/aws-icons/${icon}`}
      alt={service}
      width={48}
      height={48}
      className="object-contain"
    />
  )
}