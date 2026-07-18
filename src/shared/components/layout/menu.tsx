import { useLayoutEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router"

import { cn } from "@/shared/utils/cn"

interface MenuItemProps {
  label: string
  to: string
}

interface MenuProps {
  menuItems: MenuItemProps[]
}

let lastIndicator = { x: 0, width: 0, ready: false }

export const Menu = ({ menuItems }: MenuProps) => {
  const location = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const slideFromPrevious = useRef(lastIndicator.ready)

  const [indicator, setIndicator] = useState(lastIndicator)
  const [transitionsOn, setTransitionsOn] = useState(lastIndicator.ready)

  const activeIndex = menuItems.findIndex((item) => item.to === location.pathname)

  useLayoutEffect(() => {
    const measure = () => {
      const nav = navRef.current
      const el = itemRefs.current[activeIndex]
      if (!nav || !el || activeIndex < 0) return null

      const navRect = nav.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      return {
        x: elRect.left - navRect.left,
        width: elRect.width,
        ready: true,
      }
    }

    const apply = () => {
      const next = measure()
      if (!next) {
        lastIndicator = { ...lastIndicator, ready: false }
        setIndicator(lastIndicator)
        return
      }
      lastIndicator = next
      setIndicator(next)
    }

    let raf1 = 0
    let raf2 = 0

    if (!slideFromPrevious.current) {
      apply()
      slideFromPrevious.current = true
      raf1 = requestAnimationFrame(() => setTransitionsOn(true))
    } else {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(apply)
      })
    }

    const nav = navRef.current
    if (!nav) {
      return () => {
        cancelAnimationFrame(raf1)
        cancelAnimationFrame(raf2)
      }
    }

    const resizeObserver = new ResizeObserver(apply)
    resizeObserver.observe(nav)
    window.addEventListener("resize", apply)

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      resizeObserver.disconnect()
      window.removeEventListener("resize", apply)
    }
  }, [activeIndex, location.pathname])

  return (
    <nav ref={navRef} className="relative flex items-center gap-1">
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-0 rounded-lg bg-primary",
          "motion-reduce:transition-none",
          transitionsOn &&
            "transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          indicator.ready ? "opacity-100" : "opacity-0"
        )}
        style={{
          width: indicator.width,
          transform: `translateX(${indicator.x}px)`,
        }}
      />

      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.to

        return (
          <Link
            key={item.label}
            to={item.to}
            ref={(node) => {
              itemRefs.current[index] = node
            }}
            className={cn(
              "relative z-10 inline-flex h-9 items-center justify-center rounded-lg px-2.5 text-sm uppercase outline-none select-none",
              "transition-colors duration-200",
              "focus-visible:ring-3 focus-visible:ring-ring/50",
              isActive
                ? "text-primary-foreground"
                : "text-foreground hover:bg-muted/70 hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Menu
export { type MenuProps, type MenuItemProps }
