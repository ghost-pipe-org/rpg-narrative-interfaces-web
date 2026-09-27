import { Badge } from "@/shared/components/ui/badge"
import { CardTitle } from "@/shared/components/ui/card"
import ThreeDCard from "@/shared/components/ui/three-d-card"

import { cn } from "@/shared/utils/cn"

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
  image?: string | null
  system?: string | null
  system_icon?: string | null
  status: string
  date: string
  period?: string | null
  age_rating?: AgeRating | null
  variant?: "card" | "poster"
}

export const RpgSessionCard = ({
  title,
  date,
  image,
  system,
  status,
  period,
  age_rating,
  system_icon,
  variant = "card",
}: RpgSessionCardProps) => {
  const isOpen = /dispon/i.test(status) || status.toLowerCase() === "available"
  const isPoster = variant === "poster"

  const rating = age_rating ? ageRatingStyles[age_rating] : undefined

  return (
    <div className="w-full max-w-none">
      <ThreeDCard
        className={cn(
          "w-full ring-1 ring-white/15",
          isPoster ? "aspect-[9/16]" : "aspect-video lg:aspect-square"
        )}
        maxRotation={10}
        parallaxOffset={28}
        enableGlow
        enableParallax
      >
        <div className="relative flex h-full min-h-0 min-w-0 flex-col justify-end overflow-hidden rounded-2xl pb-0">
          {image ? (
            <div  
              className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
              aria-hidden
            />
          ) : null}
          {isPoster ? null : (
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-black/25"
              aria-hidden
            />
          )}
          {image && !isPoster ? (
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/55 to-transparent"
              aria-hidden
            />
          ) : null}

          {isPoster ? null : system_icon ? (
            <img
              src={system_icon}
              alt={system ?? ""}
              className="absolute top-3 right-3 z-10 h-8 max-w-[46%] object-contain object-right mix-blend-lighten sm:top-4 sm:right-4 sm:h-9"
            />
          ) : system ? (
            <span className="absolute top-3 right-3 z-10 max-w-[45%] truncate text-right text-[10px] leading-tight text-white/80 sm:top-4 sm:right-4">
              {system}
            </span>
          ) : null}

          {isPoster ? (
            <div className="relative z-10 mt-auto flex w-full flex-col gap-0.5 bg-linear-to-t from-black via-black/80 to-transparent px-3 pt-16 pb-3">
              <CardTitle className="font-body text-base leading-snug text-white">
                {title}
              </CardTitle>
              <p className="text-xs leading-snug text-white/80">
                {period ? `${date} · ${period}` : date}
              </p>
            </div>
          ) : (
          <div className="relative z-10 flex h-full w-full flex-col items-end justify-end gap-1 px-4 pb-1 sm:gap-2 sm:px-3 sm:pb-3">
            <Badge
              className="w-fit self-start rounded-sm text-[10px] leading-tight"
              variant={isOpen ? "success" : "destructive"}
            >
              {status}
            </Badge>

            <div className="flex w-full shrink-0 flex-row items-center justify-between gap-1">
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <CardTitle className="font-body text-base leading-snug text-white sm:text-lg">
                  {title}
                </CardTitle>
                <p className="text-xs leading-snug text-white/80">
                  {period ? `${date} · ${period}` : date}
                </p>
              </div>
              {rating ? (
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
              ) : null}
            </div>
          </div>
          )}
        </div>
      </ThreeDCard>
    </div>
  )
}
