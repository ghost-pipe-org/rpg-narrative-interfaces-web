import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router"
import { Controller, useForm, useWatch } from "react-hook-form"
import { toast } from "sonner"

import { useAuth } from "@/shared/contexts/auth-context"
import { postUsers } from "@/shared/services/user/user.service"

import { Input } from "@/shared/components/ui/input"
import { Button } from "@/shared/components/ui/button"
import { Checkbox } from "@/shared/components/ui/checkbox"
import RootLayout from "@/shared/components/layout/root-layout"

import { emailPattern, enrollmentPattern, phonePattern } from "@/shared/utils/patterns"
import { formatPhoneNumber } from "@/shared/utils/format-phone-number"
import { getApiErrorMessage } from "@/shared/utils/get-api-error-message"
import {
  clearGoogleRegisterSession,
  readGoogleRegisterSession,
} from "@/shared/utils/google-register-session"

import { ArrowRightIcon } from "lucide-react"

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
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { isAuthenticated, applyAuthSession } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [googleIdToken, setGoogleIdToken] = useState<string | null>(null)
  const isGoogleRegister = Boolean(googleIdToken)

  const { control, handleSubmit, setValue, clearErrors } =
    useForm<RegisterFormData>({
      mode: "onBlur",
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
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    if (searchParams.get("from") !== "google") return
    const session = readGoogleRegisterSession()
    if (!session?.googleIdToken) return
    setGoogleIdToken(session.googleIdToken)
    if (session.name) setValue("name", session.name)
    if (session.email) setValue("email", session.email)
  }, [searchParams, setValue])

  useEffect(() => {
    if (!isMaster) {
      setValue("enrollment", "")
      clearErrors("enrollment")
    }
  }, [isMaster, setValue, clearErrors])

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)

    try {
      if (googleIdToken) {
        const response = await postUsers({
          name: data.name.trim(),
          googleIdToken,
          enrollment: data.isMaster ? data.enrollment.trim() : undefined,
          phoneNumber: data.phone.replace(phonePattern, "") || undefined,
          masterConfirm: data.isMaster,
        })
        clearGoogleRegisterSession()
        if (response.token && response.user) {
          applyAuthSession(response.token, response.user)
          toast.success("Conta criada com sucesso")
          navigate("/")
          return
        }
      }

      const response = await postUsers({
        name: data.name.trim(),
        email: data.email.trim(),
        password: data.password,
        enrollment: data.isMaster ? data.enrollment.trim() : undefined,
        phoneNumber: data.phone.replace(phonePattern, "") || undefined,
        masterConfirm: data.isMaster,
      })

      toast.success("Conta criada! Verifique seu e-mail para ativar o login.")

      if (typeof response?.devLink === "string") {
        toast.message("Link de verificação", {
          description: response.devLink,
          duration: 30000,
          action: {
            label: "Abrir",
            onClick: () => window.open(response.devLink, "_self"),
          },
        })
      }

      navigate("/login")
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Erro ao criar conta"))
    } finally {
      setIsLoading(false)
    }
  }

  if (isAuthenticated) {
    return (
      <RootLayout>
        <div className="flex flex-1 w-full items-center justify-center px-[5vw] py-8">
          <section className="mx-auto flex w-full max-w-[min(36rem,90vw)] flex-col items-center gap-4 text-center">
            <h1 className="text-2xl font-semibold">Redirecionando...</h1>
            <p className="text-sm text-muted-foreground">
              Você já está logado. Redirecionando para a página inicial.
            </p>
          </section>
        </div>
      </RootLayout>
    )
  }

  return (
    <RootLayout>
      <div className="flex flex-1 w-full items-center justify-center px-[5vw] py-8">
        <section className="mx-auto flex w-full max-w-[min(36rem,90vw)] flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            INTERFACES NARRATIVAS
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">Criar Conta</h1>
          <p className="text-sm text-muted-foreground md:text-base">
            {isGoogleRegister
              ? "Finalize seu cadastro com Google."
              : "Crie uma conta e tenha acesso aos recursos da plataforma."}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <Controller
              control={control}
              name="name"
              rules={{
                required: "Informe o nome",
                minLength: { value: 2, message: "Nome muito curto" },
              }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  placeholder="Nome completo"
                  autoComplete="name"
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{
                required: !isGoogleRegister ? "Informe o e-mail" : false,
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
                  disabled={isGoogleRegister}
                  errorMessage={fieldState.error?.message}
                />
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
                      Ao selecionar esta opção, você confirma que{" "}
                      <span className="text-primary">deseja emitir mesas de RPG.</span>
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
                  validate: (value) => {
                    const enrollment = String(value ?? "").trim()
                    if (!enrollment) {
                      return "Matrícula obrigatória para mestres"
                    }
                    if (!enrollmentPattern.test(enrollment)) {
                      return "Matrícula deve ter exatamente 9 dígitos"
                    }
                    return true
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    placeholder="Número de matrícula"
                    type="text"
                    autoComplete="off"
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
            ) : null}
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="(00) 99999-9999"
                  type="tel"
                  autoComplete="tel"
                  onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                />
              )}
            />
            {!isGoogleRegister ? (
              <>
                <Controller
                  control={control}
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
                      placeholder="Senha"
                      type="password"
                      autoComplete="new-password"
                      errorMessage={fieldState.error?.message}
                    />
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
                    <Input
                      {...field}
                      placeholder="Confirmar senha"
                      type="password"
                      autoComplete="new-password"
                      errorMessage={fieldState.error?.message}
                    />
                  )}
                />
              </>
            ) : null}
            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading ? "Criando conta..." : "Criar conta"}
              {!isLoading ? <ArrowRightIcon /> : null}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground md:text-base">
            Já tem uma conta?{" "}
            <Button asChild variant="link" className="text-primary pl-0">
              <Link to="/login">Faça login</Link>
            </Button>
          </p>
        </section>
      </div>
    </RootLayout>
  )
}
