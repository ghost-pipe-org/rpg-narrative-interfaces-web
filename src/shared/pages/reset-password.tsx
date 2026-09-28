import { useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import RootLayout from "@/shared/components/layout/root-layout"

import {
  postUsersForgotPassword,
  postUsersResetPassword,
} from "@/shared/services/user/user.service"

import { emailPattern } from "@/shared/utils/patterns"
import { getApiErrorMessage } from "@/shared/utils/get-api-error-message"

import { ArrowRightIcon } from "lucide-react"

interface ForgotPasswordFormData {
  email: string
}

interface ResetPasswordFormData {
  password: string
  confirmPassword: string
}

export const ResetPassword = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")?.trim() ?? ""
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [devLink, setDevLink] = useState<string | null>(null)

  const forgotForm = useForm<ForgotPasswordFormData>({
    mode: "onBlur",
    defaultValues: { email: "" },
  })

  const resetForm = useForm<ResetPasswordFormData>({
    mode: "onBlur",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const onRequestReset = async (data: ForgotPasswordFormData) => {
    setIsLoading(true)

    try {
      const response = await postUsersForgotPassword({ email: data.email.trim() })
      setEmailSent(true)
      if (typeof response?.devLink === "string") {
        setDevLink(response.devLink)
        toast.message("Modo dev: use o link abaixo (SMTP não configurado)")
      } else {
        toast.success(
          "Se existir uma conta com esse e-mail, enviaremos as instruções para redefinir a senha."
        )
      }
    } catch (error) {
      toast.error(
        getApiErrorMessage(error, "Não foi possível solicitar a recuperação")
      )
    } finally {
      setIsLoading(false)
    }
  }

  const onResetPassword = async (data: ResetPasswordFormData) => {
    setIsLoading(true)

    try {
      await postUsersResetPassword({
        token,
        password: data.password,
      })
      toast.success("Senha redefinida. Faça login com a nova senha.")
      navigate("/login")
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Não foi possível redefinir a senha"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <RootLayout>
      <div className="flex flex-1 w-full items-center justify-center px-[5vw] py-8">
        <section className="mx-auto flex w-full max-w-[min(36rem,90vw)] flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            INTERFACES NARRATIVAS
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">Recuperar senha</h1>

          {token ? (
            <>
              <p className="text-sm text-muted-foreground md:text-base">
                Defina uma nova senha para a sua conta.
              </p>
              <form
                onSubmit={resetForm.handleSubmit(onResetPassword)}
                className="w-full space-y-4"
              >
                <Controller
                  control={resetForm.control}
                  name="password"
                  rules={{
                    required: "Informe a senha",
                    minLength: {
                      value: 6,
                      message: "Senha deve ter pelo menos 6 caracteres",
                    },
                    validate: (value) =>
                      /[A-Z]/.test(value) ||
                      "A senha deve conter pelo menos uma letra maiúscula",
                  }}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      placeholder="Nova senha"
                      type="password"
                      autoComplete="new-password"
                      errorMessage={fieldState.error?.message}
                    />
                  )}
                />
                <Controller
                  control={resetForm.control}
                  name="confirmPassword"
                  rules={{
                    required: "Confirme a senha",
                    validate: (value, values) =>
                      value === values.password || "As senhas não coincidem",
                  }}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      placeholder="Confirmar senha"
                      type="password"
                      autoComplete="new-password"
                      errorMessage={fieldState.error?.message}
                    />
                  )}
                />
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Redefinir senha"}
                  {!isLoading ? <ArrowRightIcon /> : null}
                </Button>
              </form>
            </>
          ) : emailSent ? (
            <div className="w-full space-y-3 text-sm text-muted-foreground md:text-base">
              <p>
                Se existir uma conta com esse e-mail, enviaremos as instruções
                para redefinir a senha.
              </p>
              {devLink ? (
                <p className="break-all text-left">
                  Link de desenvolvimento:{" "}
                  <a className="text-primary underline" href={devLink}>
                    {devLink}
                  </a>
                </p>
              ) : null}
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground md:text-base">
                Informe o e-mail da sua conta para receber o link de
                redefinição.
              </p>
              <form
                onSubmit={forgotForm.handleSubmit(onRequestReset)}
                className="w-full space-y-4"
              >
                <Controller
                  control={forgotForm.control}
                  name="email"
                  rules={{
                    required: "Informe o e-mail",
                    pattern: {
                      value: emailPattern,
                      message: "E-mail inválido",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      errorMessage={fieldState.error?.message}
                    />
                  )}
                />
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar link"}
                  {!isLoading ? <ArrowRightIcon /> : null}
                </Button>
              </form>
            </>
          )}

          <p className="text-sm text-muted-foreground md:text-base">
            Lembrou a senha?{" "}
            <Button asChild variant="link" className="text-primary pl-0">
              <Link to="/login">Voltar ao login</Link>
            </Button>
          </p>
        </section>
      </div>
    </RootLayout>
  )
}
