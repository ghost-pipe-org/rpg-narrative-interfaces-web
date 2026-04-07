import { Link } from "react-router"
import { RootLayout } from "@/shared/components"
import { menuLanding } from "@/shared/routes/menus"

export const NotFound = () => {
  return (
    <RootLayout menuItems={menuLanding}>
      <main className="flex min-h-[70vh] w-full items-center justify-center p-6">
        <section className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            ERRO 404
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Página <span className="text-destructive">não</span> Encontrada
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            O endereço acessado não existe ou foi movido. Volte para a tela
            inicial.
          </p>
          <Link
            to="/"
            className="mt-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ir para inicio
          </Link>
        </section>
      </main>
    </RootLayout>
  )
}
