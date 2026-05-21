import type { CSSProperties } from "react"

import { cn } from "@/shared/utils/cn"

export interface LogoItem {
  id: string
  component: React.ReactNode
}

export interface MarqueeRowProps {
  logos: LogoItem[]
  direction?: "normal" | "reverse"
  speed?: string
}

function buildSequence(logos: LogoItem[], minItems = 12): LogoItem[] {
  const sequence: LogoItem[] = []

  while (sequence.length < minItems) {
    sequence.push(...logos)
  }

  return sequence
}

function MarqueeGroup({
  logos,
  groupId,
  ariaHidden = false,
}: {
  logos: LogoItem[]
  groupId: string
  ariaHidden?: boolean
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((logo, index) => (
        <div
          key={`${groupId}-${logo.id}-${index}`}
          className="flex shrink-0 items-center justify-center text-foreground [&_img]:max-h-none [&_img]:h-auto [&_img]:w-auto [&_img]:max-w-[min(40vw,12rem)] [&_img]:object-contain [&_svg]:h-auto [&_svg]:max-h-24 [&_svg]:w-auto [&_svg]:max-w-[min(40vw,12rem)]"
        >
          {logo.component}
        </div>
      ))}
    </div>
  )
}

export const MarqueeRow = ({
  logos,
  direction = "normal",
  speed = "28s",
}: MarqueeRowProps) => {
  if (!logos.length) {
    return null
  }

  const sequence = buildSequence(logos)

  const outerStyle = {
    maskImage:
      "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
  } as CSSProperties

  const trackStyle = {
    animation: `logo-marquee-move ${speed} linear infinite`,
    animationDirection: direction,
  } as CSSProperties

  return (
    <div className="max-w-full overflow-hidden" style={outerStyle}>
      <div
        className="flex w-max items-center will-change-transform motion-reduce:transform-none"
        style={trackStyle}
      >
        <MarqueeGroup logos={sequence} groupId="a" />
        <MarqueeGroup logos={sequence} groupId="b" ariaHidden />
      </div>
    </div>
  )
}

export interface LogoMarqueeProps {
  logos: LogoItem[]
  direction?: "normal" | "reverse"
  className?: string
  trackClassName?: string
  speed?: string
}

export const LogoMarquee = ({
  logos,
  direction = "normal",
  className,
  trackClassName,
  speed,
}: LogoMarqueeProps) => {
  return (
    <div className={cn("flex w-full flex-col items-center overflow-hidden", className)}>
      <div className={cn("flex w-full flex-col", trackClassName)}>
        <MarqueeRow logos={logos} direction={direction} speed={speed} />
      </div>
    </div>
  )
}
