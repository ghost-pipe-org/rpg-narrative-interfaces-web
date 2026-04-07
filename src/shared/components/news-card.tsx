import * as React from "react"

import { cn } from "@/shared/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/shared/components/ui/card"

export interface NewsCardProps
  extends Omit<React.ComponentProps<typeof Card>, "children"> {
  image: string
  title: string
  description: string
}

export function NewsCard({
  image,
  title,
  description,
  className,
  ...props
}: Readonly<NewsCardProps>) {
  return (
    <Card
      className={cn(
        "relative isolate min-h-[220px] gap-0 rounded-2xl p-0 py-0 shadow-none ring-1 ring-foreground/10",
        className
      )}
      {...props}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent"
        aria-hidden
      />
      <CardContent className="relative z-10 mt-auto flex flex-col gap-1.5 border-0 bg-transparent px-5 py-5 shadow-none md:px-6 md:py-6">
        <CardTitle className="text-lg font-bold text-white md:text-xl">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-sm leading-relaxed text-white/90">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
