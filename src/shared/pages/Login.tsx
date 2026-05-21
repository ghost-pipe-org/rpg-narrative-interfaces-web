import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Controller, useForm } from "react-hook-form"

import { ArrowRightIcon } from "lucide-react"

import { Button } from "../components/ui/button"
import { Input } from "@/shared/components/ui/input"
import RootLayout from "../components/layout/root-layout"


import { emailPattern } from "../utils/patterns"

import { useAuth } from "../contexts/AuthContext"

interface LoginFormData {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const { login, isLoading } = useAuth()
  const [loginError, setLoginError] = useState<string | null>(null)
  const { control, handleSubmit } = useForm<LoginFormData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    setLoginError(null)

    try {
      await login(data)
      navigate("/")
    } catch (error) {
      setLoginError(
        error instanceof Error ? error.message : "Erro ao fazer login"
      )
    }
  }

  return (
    <RootLayout>
      <div className="flex flex-1 w-full items-center justify-center px-[5vw] py-8">
        <section className="mx-auto flex w-full max-w-[min(36rem,90vw)] flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            INTERFACES NARRATIVAS
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">Login</h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Faça login e tenha acesso aos recursos da plataforma.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
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
            {loginError ? (
              <p className="text-sm text-destructive">{loginError}</p>
            ) : null}
            <Button type="submit" size="lg" disabled={isLoading}>
              Entrar <ArrowRightIcon />
            </Button>
          </form>
          <div className="flex flex-col gap-1">

          <p className="text-sm text-muted-foreground md:text-base">
            Não tem uma conta?{" "}
            <Button asChild variant="link" className="text-primary pl-0">
              <Link to="/register">Crie uma conta</Link>
            </Button>
          </p>
          <p className="text-sm text-muted-foreground md:text-base ">
            Esqueceu sua senha?{" "}
            <Button asChild variant="link" className="text-primary pl-0">
              <Link to="/reset-password">Recuperar senha</Link>
            </Button>
          </p>
          </div>
        </section>
      </div>
    </RootLayout>
  )
}
