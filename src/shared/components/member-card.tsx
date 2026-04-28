import { defaultUser } from "@/shared/assets"
import { cn } from "@/shared/lib/utils"
interface MemberCardProps {
  image?: string
  name: string
  role: string
  orientation?: "row" | "column"
}

export const MemberCard = ({
  image,
  name,
  role,
  orientation = "row",
}: MemberCardProps) => {
  return (
    <div
      className={cn(
        "flex max-w-56",
        orientation === "row"
          ? "flex-row items-center justify-start gap-3 text-left"
          : "flex-col items-center justify-start gap-3 text-center"
      )}
    >
      <img
        src={image || defaultUser}
        alt={name}
        className={cn(
          "rounded-2xl object-cover",
          orientation === "row"
            ? "h-28 w-24 shrink-0"
            : "h-40 w-40 max-w-full"
        )}
      />
      <span className="text-sm font-medium text-primary">
        <h1 className="text-body text-base font-medium leading-snug text-foreground">
          {name}
        </h1>
        <p className="text-muted-primary text-xs leading-snug">{role}</p>
      </span>
    </div>
  )
}
