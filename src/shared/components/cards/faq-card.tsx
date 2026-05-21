import { useId, useState } from "react"
import { cn } from "@/shared/lib/utils"

export interface FaqCardProps {
  question: string
  answer: string
  className?: string
  defaultOpen?: boolean
}

export const FaqCard = ({
  answer,
  question,
  className,
  defaultOpen = false,
}: FaqCardProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div
      className={cn(
        "w-full rounded-xl bg-muted px-4 py-3 text-foreground ring-1 ring-foreground/5",
        className
      )}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm leading-snug sm:text-base">{question}</span>
        <span
          aria-hidden
          className={cn(
            "mt-0.5 inline-block h-0 w-0 shrink-0 border-x-[6px] border-t-8 border-x-transparent border-t-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={panelId}
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed font-normal text-foreground/90">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
