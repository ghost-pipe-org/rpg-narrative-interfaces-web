import { useTheme } from "./theme-provider"

import { Button } from "../ui/button"
import { cn } from "@/shared/utils/cn"

import { MoonIcon, SunIcon } from "lucide-react"

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      <span data-allow-transition className="relative size-4">
        <SunIcon
          data-allow-transition
          className={cn(
            "absolute inset-0 size-4 transition-all duration-300 ease-out",
            "motion-reduce:transition-none",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-50 opacity-0"
          )}
        />
        <MoonIcon
          data-allow-transition
          className={cn(
            "absolute inset-0 size-4 transition-all duration-300 ease-out",
            "motion-reduce:transition-none",
            isDark
              ? "-rotate-90 scale-50 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
      </span>
    </Button>
  )
}
