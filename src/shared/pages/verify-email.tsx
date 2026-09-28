import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router"
import { toast } from "sonner"

import RootLayout from "@/shared/components/layout/root-layout"
import { Button } from "@/shared/components/ui/button"
import { postUsersVerifyEmail } from "@/shared/services/user/user.service"
import { getApiErrorMessage } from "@/shared/utils/get-api-error-message"

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("Confirmando seu e-mail...")

  useEffect(() => {
    const token = searchParams.get("token")
    if (!token) {
      setStatus("error")
      setMessage("Token de verificação inválido.")
      return
    }

    let cancelled = false

    ;(async () => {
      try {
        await postUsersVerifyEmail({ token })
        if (cancelled) return
        setStatus("success")
        setMessage("E-mail confirmado com sucesso. Você já pode fazer login.")
        toast.success("E-mail confirmado")
        setTimeout(() => navigate("/login"), 1500)
      } catch (error) {
        if (cancelled) return
        setStatus("error")
        setMessage(getApiErrorMessage(error, "Não foi possível confirmar o e-mail"))
      }
    })()

    return () => {
      cancelled = true
    }
  }, [navigate, searchParams])

  return (
    <RootLayout>
      <div className="flex w-full flex-1 items-center justify-center px-[5vw] py-8">
        <section className="mx-auto flex w-full max-w-[min(36rem,90vw)] flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            INTERFACES NARRATIVAS
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">Verificação de e-mail</h1>
          <p className="text-sm text-muted-foreground md:text-base">{message}</p>
          {status !== "loading" ? (
            <Button asChild variant="link">
              <Link to="/login">Ir para o login</Link>
            </Button>
          ) : null}
        </section>
      </div>
    </RootLayout>
  )
}
