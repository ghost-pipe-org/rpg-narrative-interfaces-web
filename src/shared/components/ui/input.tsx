import * as React from "react"

import { cn } from "@/shared/lib/utils"

const inputClassName =
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"

export type InputProps = React.ComponentProps<"input"> & {
  errorMessage?: string
  containerClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    type,
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
  const inputId = id ?? uid
  const errorId = `${inputId}-err`
  const showError = Boolean(errorMessage)
  const invalid = showError || ariaInvalid === true

  const describedBy =
    [ariaDescribedBy, showError ? errorId : undefined].filter(Boolean).join(" ") ||
    undefined

  return (
    <div className={cn("w-full min-w-0 text-start", containerClassName)}>
      <input
        ref={ref}
        type={type}
        data-slot="input"
        id={inputId}
        className={cn(inputClassName, className)}
        {...props}
        aria-invalid={invalid}
        aria-describedby={describedBy}
      />
      {showError ? (
        <p id={errorId} className="mt-1 text-xs text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
})

Input.displayName = "Input"

export { Input }
