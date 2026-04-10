import { ToggleTheme } from "../toggle-theme"
import { Button } from "../ui/button"
//import { ProfileButton } from "../profile-button"
import { Menu, type MenuItemProps } from "./menu"
import { logoDark, logoLight } from "@/shared/assets"
import { useNavigate } from "react-router"

interface RootLayoutProps {
  children?: React.ReactNode
  menuItems?: MenuItemProps[]
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  menuItems = [],
}) => {
  const navigate = useNavigate()

  const menuDivider =
    "bg-[linear-gradient(185deg,#7a6cff,#6f75f5,#647eeb,#5987e0,#4e90d6,#4398cc,#38a1c2,#2daab7,#22b3ad)]"

  return (
    <div className="flex min-h-svh w-full min-w-0 flex-col">
      <header className="sticky top-0 z-30 flex w-full flex-col bg-linear-to-b from-background/90 via-background/55 to-background/30 backdrop-blur-lg supports-backdrop-filter:to-background/25">
        <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between gap-1 px-3 py-2">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <img
              src={logoLight}
              alt="Logo"
              className="hidden size-7 dark:block"
            />
            <img src={logoDark} alt="Logo" className="size-7 dark:hidden" />
          </Button>

          <span className="flex flex-row items-center justify-end gap-x-1">
            <ToggleTheme />
            {/* <ProfileButton /> */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/login")}
            >
              entrar
            </Button>
            <Button size="sm" onClick={() => navigate("/register")}>
              criar conta
            </Button>
          </span>
        </div>
        {menuItems.length > 0 && (
          <div className="mx-auto flex w-full max-w-6xl justify-center px-3 pt-1 pb-2">
            <Menu menuItems={menuItems} />
          </div>
        )}
        <div
          className={`h-px w-full shrink-0 opacity-45 ${menuDivider}`}
          aria-hidden
        />
      </header>
      <main className="relative z-10 flex min-h-screen min-w-full flex-1 flex-col overflow-x-hidden">
        {children}
      </main>
    </div>
  )
}

export default RootLayout
