import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/shared/lib/utils"
import { CheckIcon } from "lucide-react"

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  errorMessage?: string
  containerClassName?: string
}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(function Checkbox(
  {
    className,
    id,
    errorMessage,
    containerClassName,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    ...props
  },
  ref
) {
  const uid = React.useId()
  const boxId = id ?? uid
  const errorId = `${boxId}-err`
  const showError = Boolean(errorMessage)
  const invalid = showError || ariaInvalid === true

  const describedBy =
    [ariaDescribedBy, showError ? errorId : undefined].filter(Boolean).join(" ") ||
    undefined

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col items-start text-start",
        containerClassName
      )}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        id={boxId}
        data-slot="checkbox"
        className={cn(
          "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
          className
        )}
        {...props}
        aria-invalid={invalid}
        aria-describedby={describedBy}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {showError ? (
        <p id={errorId} className="mt-1 max-w-[min(100%,18rem)] text-xs text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
})

Checkbox.displayName = "Checkbox"

export { Checkbox }
