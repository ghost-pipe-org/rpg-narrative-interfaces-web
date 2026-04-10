import { useEffect } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { Input } from "@/shared/components/ui/input"
import RootLayout from "../components/layout/root-layout"
import { Button } from "../components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router"
import { emailPattern } from "../utils"

interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  isMaster: boolean
  enrollment: string
  phone: string
}

export const Register = () => {
  const { control, handleSubmit, setValue, clearErrors, } =
    useForm<RegisterFormData>({
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isMaster: false,
        enrollment: "",
        phone: "",
      },
    })

  const isMaster = useWatch({ control, name: "isMaster" })

  useEffect(() => {
    if (!isMaster) {
      setValue("enrollment", "")
      clearErrors("enrollment")
    }
  }, [isMaster, setValue, clearErrors])

  const onSubmit = (data: RegisterFormData) => {
    console.log(data)
  }

  return (
    <RootLayout>
      <div className="flex min-h-[90vh] w-full items-center justify-center p-6">
        <section className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            INTERFACES NARRATIVAS
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">Criar Conta</h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Crie uma conta e tenha acesso aos recursos da plataforma.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-4"
          >
            <Controller
              control={control}
              name="name"
              rules={{
                required: "Informe o nome",
                minLength: { value: 2, message: "Nome muito curto" },
              }}
              render={({ field, fieldState }) => (
                <div className="text-left">
                  <Input
                    {...field}
                    placeholder="Nome"
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
              name="isMaster"
              render={({ field }) => (
                <div className="flex items-start gap-3 text-left">
                  <Checkbox
                    id="register-is-master"
                    checked={field.value}
                    onCheckedChange={(v) => field.onChange(v === true)}
                    className="mt-0.5"
                  />
                  <div className="grid min-w-0 gap-1">
                    <label
                      htmlFor="register-is-master"
                      className="cursor-pointer text-sm font-semibold leading-snug"
                    >
                      Desejo mestrar
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Ao selecionar esta opção, você confirma que deseja emitir
                      mesas de RPG.
                    </p>
                  </div>
                </div>
              )}
            />
            {isMaster ? (
              <Controller
                control={control}
                name="enrollment"
                rules={{
                  validate: (value) =>
                    String(value ?? "").trim() !== "" ||
                    "Matrícula obrigatória para mestres",
                }}
                render={({ field, fieldState }) => (
                  <div className="text-left">
                    <Input
                      {...field}
                      placeholder="Matrícula"
                      type="text"
                      autoComplete="off"
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
            ) : null}
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Telefone"
                  type="tel"
                  autoComplete="tel"
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Informe a senha",
                minLength: {
                  value: 6,
                  message: "Senha deve ter pelo menos 6 caracteres",
                },
              }}
              render={({ field, fieldState }) => (
                <div className="text-left">
                  <Input
                    {...field}
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
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
              name="confirmPassword"
              rules={{
                required: "Confirme a senha",
                validate: (value, values) =>
                  value === values.password || "As senhas não coincidem",
              }}
              render={({ field, fieldState }) => (
                <div className="text-left">
                  <Input
                    {...field}
                    placeholder="Confirmar Senha"
                    type="password"
                    autoComplete="new-password"
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
              Criar Conta <ArrowRightIcon />
            </Button>
          </form>
          <p className="text-sm text-muted-foreground md:text-base ">
            Já tem uma conta?{" "}
            <Button asChild variant="link" className="text-primary pl-0">
              <Link to="/login">Entrar</Link>
            </Button>
          </p>
        </section>
      </div>
    </RootLayout>
  )
}
