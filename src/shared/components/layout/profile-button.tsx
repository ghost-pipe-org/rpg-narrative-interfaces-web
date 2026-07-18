import { useState } from "react"
import { useNavigate } from "react-router"
import { DropdownMenu } from "radix-ui"
import { toast } from "sonner"

import { Button } from "../ui/button"
import { useAuth } from "@/shared/contexts/auth-context"
import { cn } from "@/shared/utils/cn"

import { ChevronDownIcon, LogOutIcon, UserIcon } from "lucide-react"

export const ProfileButton = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  if (!isAuthenticated) {
    return null
  }

  const handleLogout = () => {
    logout()
    toast.success("Você saiu da conta")
    navigate("/login")
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="max-w-36 min-w-0 shrink sm:max-w-44"
        >
          <UserIcon className="size-4 shrink-0" />
          <span className="min-w-0 truncate">{user?.name ?? "Usuário"}</span>
          <ChevronDownIcon
            className={cn(
              "size-4 shrink-0 transition-transform duration-200",
              "motion-reduce:transition-none",
              open && "rotate-180"
            )}
          />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={4}
          className="z-50 min-w-40 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        >
          <DropdownMenu.Item
            className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onSelect={handleLogout}
          >
            <LogOutIcon className="size-4" />
            Sair
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
