import type { CSSProperties } from "react"

export interface LogoItem {
  id: string
  component: React.ReactNode
}

export interface MarqueeRowProps {
  logos: LogoItem[]
  direction?: "normal" | "reverse"
}

export const MarqueeRow = ({
  logos,
  direction = "normal",
}: MarqueeRowProps) => {
  const speed = "12s"

  const outerStyle = {
    maskImage:
      "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
  } as CSSProperties

  const trackStyle = {
    animation: `logo-marquee-move ${speed} linear infinite`,
    animationDirection: direction,
  } as CSSProperties

  const doubled = [...logos, ...logos]

  return (
    <div className="max-w-full overflow-hidden" style={outerStyle}>
      <div className="flex w-max items-center gap-8" style={trackStyle}>
        {doubled.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex shrink-0 items-center justify-center text-foreground [&_img]:max-h-none [&_img]:h-auto [&_img]:w-auto [&_img]:max-w-[min(40vw,12rem)] [&_img]:object-contain [&_svg]:h-auto [&_svg]:max-h-24 [&_svg]:w-auto [&_svg]:max-w-[min(40vw,12rem)]"
          >
            {logo.component}
          </div>
        ))}
      </div>
    </div>
  )
}

export interface LogoMarqueeProps {
  logos: LogoItem[]
  direction?: "normal" | "reverse"
}

export const LogoMarquee = ({
  logos,
  direction = "normal",
}: LogoMarqueeProps) => {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden">
      <div className="flex w-full max-w-xl flex-col">
        <MarqueeRow logos={logos} direction={direction} />
      </div>
    </div>
  )
}
