import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import type { CredentialResponse } from "@react-oauth/google"

import { useAuth } from "@/shared/contexts/auth-context"
import { GoogleLoginButton } from "@/shared/components/auth/google-login-button"
import { postUsersResendVerification } from "@/shared/services/user/user.service"

import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import RootLayout from "@/shared/components/layout/root-layout"

import { emailPattern } from "@/shared/utils/patterns"
import { getApiErrorMessage } from "@/shared/utils/get-api-error-message"
import { getApiErrorCode } from "@/shared/utils/get-api-error-code"
import { parseJwtPayload } from "@/shared/utils/parse-jwt"
import { saveGoogleRegisterSession } from "@/shared/utils/google-register-session"

import { ArrowRightIcon } from "lucide-react"

interface LoginFormData {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const { login, loginWithGoogle, isLoading } = useAuth()
  const [unverifiedEmail, setUnverifiedEmail] = useState<string | null>(null)
  const [isResending, setIsResending] = useState(false)

  const { control, handleSubmit, getValues } = useForm<LoginFormData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      setUnverifiedEmail(null)
      await login({ email: data.email, password: data.password })
      toast.success("Login realizado com sucesso")
      navigate("/")
    } catch (error) {
      if (getApiErrorCode(error) === "EMAIL_NOT_VERIFIED") {
        setUnverifiedEmail(data.email)
        toast.error("Confirme seu e-mail antes de entrar")
        return
      }
      toast.error(getApiErrorMessage(error, "Erro ao fazer login"))
    }
  }

  const handleResendVerification = async () => {
    const email = unverifiedEmail || getValues("email")
    if (!email) return
    setIsResending(true)
    try {
      const response = await postUsersResendVerification({ email })
      if (typeof response?.devLink === "string") {
        toast.message("Modo dev: abra o link de verificação", {
          description: response.devLink,
          duration: 15000,
          action: {
            label: "Abrir",
            onClick: () => window.open(response.devLink, "_blank"),
          },
        })
      } else {
        toast.success(
          "Se a conta existir e estiver pendente, enviamos um novo e-mail",
        )
      }
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Erro ao reenviar verificação"))
    } finally {
      setIsResending(false)
    }
  }

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    const googleIdToken = credentialResponse.credential
    if (!googleIdToken) {
      toast.error("Não foi possível obter o token do Google")
      return
    }

    try {
      await loginWithGoogle(googleIdToken)
      toast.success("Login com Google realizado com sucesso")
      navigate("/")
    } catch (error) {
      if (getApiErrorCode(error) === "REGISTRATION_REQUIRED") {
        const payload = parseJwtPayload<{ email?: string; name?: string }>(googleIdToken)
        saveGoogleRegisterSession({
          googleIdToken,
          email: payload?.email || "",
          name: payload?.name,
        })
        toast.message("Complete seu cadastro para continuar")
        navigate("/register?from=google")
        return
      }
      toast.error(getApiErrorMessage(error, "Erro ao fazer login com Google"))
    }
  }

  return (
    <RootLayout>
      <div className="flex w-full flex-1 items-center justify-center px-[5vw] py-8">
        <section className="mx-auto flex w-full max-w-[min(36rem,90vw)] flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            INTERFACES NARRATIVAS
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">Login</h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Faça login e tenha acesso aos recursos da plataforma.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <Controller
              control={control}
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
            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  placeholder="Senha"
                  type="password"
                  autoComplete="current-password"
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Button type="submit" size="lg" disabled={isLoading}>
              Entrar <ArrowRightIcon />
            </Button>

            {unverifiedEmail ? (
              <div className="rounded-md border border-border p-3 text-left text-sm">
                <p className="text-muted-foreground">
                  Seu e-mail ainda não foi confirmado. Verifique sua caixa de entrada
                  ou reenvie o link.
                </p>
                <Button
                  type="button"
                  variant="link"
                  className="h-auto px-0"
                  disabled={isResending}
                  onClick={handleResendVerification}
                >
                  {isResending ? "Reenviando..." : "Reenviar e-mail de verificação"}
                </Button>
              </div>
            ) : null}

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs tracking-wide text-muted-foreground uppercase">
                ou
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <GoogleLoginButton
              onSuccess={handleGoogleSuccess}
              onError={() => toast.error("Erro ao fazer login com Google")}
            />
          </form>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground md:text-base">
              Não tem uma conta?{" "}
              <Button asChild variant="link" className="pl-0 text-primary">
                <Link to="/register">Crie uma conta</Link>
              </Button>
            </p>
            <p className="text-sm text-muted-foreground md:text-base">
              Esqueceu sua senha?{" "}
              <Button asChild variant="link" className="pl-0 text-primary">
                <Link to="/reset-password">Recuperar senha</Link>
              </Button>
            </p>
          </div>
        </section>
      </div>
    </RootLayout>
  )
}
