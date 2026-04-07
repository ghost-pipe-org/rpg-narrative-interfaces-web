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
  const numItems = logos.length
  const speed = "12s"
  const itemWidth = "160px"
  const itemGap = "0px"

  const outerStyle = {
    containerType: "inline-size",
    "--item-gap": itemGap,
    maskImage:
      "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
  } as CSSProperties

  const trackStyle = {
    "--track-width": `calc(${itemWidth} * ${numItems})`,
    "--track-gap": `calc(${itemGap} * ${numItems})`,
  } as CSSProperties

  const doubled = [...logos, ...logos]

  return (
    <div className="max-w-full overflow-hidden" style={outerStyle}>
      <div className="flex w-max" style={trackStyle}>
        {doubled.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex shrink-0 items-center justify-center rounded-2xl text-foreground"
            style={
              {
                width: itemWidth,
                aspectRatio: "1",
                marginRight: itemGap,
                animation: `logo-marquee-move ${speed} linear infinite`,
                animationDirection: direction,
              } as CSSProperties
            }
          >
            <div className="h-auto w-3/5 [&_svg]:h-auto [&_svg]:w-full">
              {logo.component}
            </div>
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
      <div className="flex w-full max-w-2xl flex-col">
        <MarqueeRow logos={logos} direction={direction} />
      </div>
    </div>
  )
}
