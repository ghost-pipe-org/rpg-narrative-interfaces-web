import { CardTitle } from "./ui/card"
import { cn } from "@/shared/lib/utils"
import { Badge } from "./ui/badge"
import ThreeDCard from "./ui/threed-card"

export type AgeRating = "L" | "10" | "12" | "14" | "16" | "18"

const ageRatingStyles: Record<
  AgeRating,
  { ring: string; bg: string; textShadow?: boolean }
> = {
  L: {
    ring: "ring-emerald-400/50",
    bg: "bg-emerald-600/50",
  },
  "10": {
    ring: "ring-sky-400/50",
    bg: "bg-blue-600/50",
  },
  "12": {
    ring: "ring-amber-300/50",
    bg: "bg-amber-400/50",
    textShadow: true,
  },
  "14": {
    ring: "ring-orange-400/50",
    bg: "bg-orange-600/50",
  },
  "16": {
    ring: "ring-red-400/50",
    bg: "bg-red-600/50",
  },
  "18": {
    ring: "ring-neutral-400/40",
    bg: "bg-neutral-950/65",
  },
}

interface RpgSessionCardProps {
  title: string
  image: string
  system: string
  system_icon: string
  status: string
  date: string
  hours: string
  age_rating: AgeRating
}

export const RpgSessionCard = ({
  title,
  date,
  image,
  hours,
  system,
  status,
  age_rating,
  system_icon,
}: RpgSessionCardProps) => {
  const isOpen = /dispon/i.test(status) || status.toLowerCase() === "available"

  const rating = ageRatingStyles[age_rating]

  return (
    <div className="mx-auto w-full max-w-lg">
      <ThreeDCard
        className={cn("aspect-video w-full ring-1 ring-white/15")}
        maxRotation={10}
        parallaxOffset={28}
        enableGlow
        enableParallax
      >
        <div className="relative flex h-full min-h-0 min-w-0 flex-col justify-end overflow-hidden rounded-2xl">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 flex w-full items-end justify-between gap-3 px-4 pb-4 sm:gap-4 sm:px-3 sm:pb-3">
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <Badge
                className="w-fit rounded-sm text-[10px] leading-tight"
                variant={isOpen ? "success" : "destructive"}
              >
                {status}
              </Badge>
              <CardTitle className="font-body text-base leading-snug text-white sm:text-lg">
                {title}
              </CardTitle>
              <p className="text-xs leading-snug text-white/80">
                {date}, às {hours}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-end justify-end gap-1">
              <img
                src={system_icon}
                alt={system}
                className="h-6 object-contain object-right sm:h-7"
              />
              <span
                className={cn(
                  "flex min-h-7 min-w-7 translate-z-0 items-center justify-center rounded-md border border-white/70 px-1 text-[10px] leading-none font-bold text-white tabular-nums ring-1 ring-inset",
                  rating.bg,
                  rating.ring,
                  rating.textShadow && "shadow-[0_1px_2px_rgb(0_0_0/0.85)]"
                )}
                title={`Classificação indicativa: ${age_rating === "L" ? "Livre" : age_rating + " anos"}`}
              >
                {age_rating}
              </span>
            </div>
          </div>
        </div>
      </ThreeDCard>
    </div>
  )
}
