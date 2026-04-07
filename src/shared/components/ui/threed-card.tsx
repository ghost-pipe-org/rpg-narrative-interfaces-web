"use client"

import {
  memo,
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react"

import { cn } from "@/shared/lib/utils"

const SHADOW_Y_BASE = 10
const SHADOW_ALPHA = 0.22

export interface ThreeDCardProps {
  children: ReactNode
  className?: string
  maxRotation?: number
  glowOpacity?: number
  shadowBlur?: number
  parallaxOffset?: number
  transitionDuration?: string
  backgroundImage?: string | null
  enableGlow?: boolean
  enableShadow?: boolean
  enableParallax?: boolean
}

function ThreeDCardInner({
  children,
  className = "",
  maxRotation = 10,
  glowOpacity = 0.1,
  shadowBlur = 14,
  parallaxOffset = 40,
  transitionDuration = "0.6s",
  backgroundImage = null,
  enableGlow = true,
  enableShadow = false,
  enableParallax = true,
}: Readonly<ThreeDCardProps>) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  const smoothTransition = `transform ${transitionDuration} cubic-bezier(0.23, 1, 0.32, 1), box-shadow ${transitionDuration} cubic-bezier(0.23, 1, 0.32, 1)`

  const applyIdleCard = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    if (enableShadow) {
      el.style.boxShadow = `0 ${SHADOW_Y_BASE}px ${shadowBlur}px rgba(0, 0, 0, ${SHADOW_ALPHA})`
    } else {
      el.style.boxShadow = "none"
    }
  }, [enableShadow, shadowBlur])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transformStyle = "preserve-3d"
    applyIdleCard()
    el.style.transition = smoothTransition
  }, [applyIdleCard, smoothTransition])

  const paintFrame = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current
      const glow = glowRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const { width, height, left, top } = rect
      const mouseX = e.clientX - left
      const mouseY = e.clientY - top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      const rotateX = yPct * -1 * maxRotation
      const rotateY = xPct * maxRotation
      const shadowX = enableShadow ? rotateY * 0.45 : 0
      const shadowY = enableShadow
        ? SHADOW_Y_BASE - rotateX * 0.35
        : SHADOW_Y_BASE

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`
      if (enableShadow) {
        el.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${SHADOW_ALPHA})`
      }

      if (enableGlow && glow) {
        const gx = (mouseX / width) * 100
        const gy = (mouseY / height) * 100
        glow.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, ${glowOpacity}), transparent 55%)`
      }
    },
    [enableGlow, enableShadow, glowOpacity, maxRotation, shadowBlur]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0
        paintFrame(e)
      })
    },
    [paintFrame]
  )

  const handleMouseEnter = useCallback(() => {
    const el = cardRef.current
    const glow = glowRef.current
    if (el) el.style.transition = "none"
    if (enableGlow && glow) {
      glow.style.transition = "opacity 0.35s ease-out"
      glow.style.opacity = "1"
    }
    if (backgroundImage && bgRef.current) {
      bgRef.current.style.opacity = "1"
    }
  }, [backgroundImage, enableGlow])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    const glow = glowRef.current
    if (el) {
      el.style.transition = smoothTransition
      applyIdleCard()
    }
    if (enableGlow && glow) {
      glow.style.transition = "opacity 0.35s ease-out"
      glow.style.opacity = "0"
      glow.style.background = `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, ${glowOpacity}), transparent 55%)`
    }
    if (backgroundImage && bgRef.current) {
      bgRef.current.style.opacity = "0"
    }
  }, [applyIdleCard, backgroundImage, enableGlow, glowOpacity, smoothTransition])

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    },
    []
  )

  const contentStyle: CSSProperties = enableParallax
    ? {
        transform: `translateZ(${parallaxOffset}px)`,
        transformStyle: "preserve-3d",
      }
    : {}

  return (
    <div className="w-full" style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative isolate transform-3d overflow-hidden rounded-2xl bg-black",
          className
        )}
      >
        {backgroundImage ? (
          <div
            ref={bgRef}
            className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            aria-hidden
          />
        ) : null}

        <div
          className="absolute inset-0 z-1 min-h-0 overflow-hidden rounded-[inherit]"
          style={contentStyle}
        >
          {children}
        </div>

        {enableGlow ? (
          <div
            ref={glowRef}
            className="pointer-events-none absolute inset-0 z-2 rounded-[inherit] opacity-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, ${glowOpacity}), transparent 30%)`,
              backgroundBlendMode: "overlay",
            }}
            aria-hidden
          />
        ) : null}
      </div>
    </div>
  )
}

export const ThreeDCard = memo(ThreeDCardInner)
export default ThreeDCard
