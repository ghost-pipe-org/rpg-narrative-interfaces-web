import { useTheme } from "./theme-provider"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "./ui"

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </Button>
  )
}