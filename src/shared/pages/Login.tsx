import { Controller, useForm } from "react-hook-form"
import { Input } from "@/shared/components/ui/input"
import RootLayout from "../components/layout/root-layout"
import { Button } from "../components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router"
import { emailPattern } from "../utils"
interface LoginFormData {
  email: string
  password: string
}

export const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
  }

  return (
    <RootLayout>
      <div className="flex min-h-[90vh] w-full items-center justify-center p-6">
        <section className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            INTERFACES NARRATIVAS
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">Login</h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Faça login e tenha acesso aos recursos da plataforma.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-4"
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
                <div className="text-left">
                  <Input
                    {...field}
                    placeholder="Email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!fieldState.error}
                  />
                  {fieldState.error?.message ? (
                    <p className="mt-1 text-xs text-destructive">
                      {fieldState.error.message}
                    </p>
                  ) : null}
                </div>
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field, fieldState }) => (
                <div className="text-left">
                  <Input
                    {...field}
                    placeholder="Senha"
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={!!fieldState.error}
                  />
                  {fieldState.error?.message ? (
                    <p className="mt-1 text-xs text-destructive">
                      {fieldState.error.message}
                    </p>
                  ) : null}
                </div>
              )}
            />
            <Button type="submit" size="lg">
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
