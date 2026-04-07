import { ToggleTheme } from "../toggle-theme"
import { ProfileButton } from "../profile-button"
import { Menu, type MenuItemProps } from "./menu"
import { Dice1Icon } from "lucide-react"

interface RootLayoutProps {
  children?: React.ReactNode
  menuItems?: MenuItemProps[]
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  menuItems = [],
}) => {
  const menuDivider =
    "bg-[linear-gradient(185deg,#7a6cff,#6f75f5,#647eeb,#5987e0,#4e90d6,#4398cc,#38a1c2,#2daab7,#22b3ad)]"

  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-30 flex flex-col bg-linear-to-b from-background/90 via-background/55 to-background/30 backdrop-blur-lg supports-backdrop-filter:to-background/25">
        <div className="flex flex-row items-center justify-between gap-1 px-2 py-1">
          <Dice1Icon className="size-4" />

          <span className="flex flex-row items-center justify-end">
            <ToggleTheme />
            <ProfileButton />
          </span>
        </div>
        {menuItems.length > 0 && (
          <>
            <div className="flex justify-center px-2 pb-2 pt-1">
              <Menu menuItems={menuItems} />
            </div>
            <div
              className={`h-px w-full shrink-0 opacity-45 ${menuDivider}`}
              aria-hidden
            />
          </>
        )}
      </header>
      <main className="flex flex-col">
        <div className="relative z-10">{children}</div>
      </main>
    </div>
  )
}

export default RootLayout
