import { ChevronDownIcon, UserIcon } from "lucide-react"
import { Button } from "./ui"

export const ProfileButton = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        <UserIcon className="size-4" />
        <span>Usuário</span>
        <ChevronDownIcon className="size-4" />
      </Button>
    </div>
  )
}
