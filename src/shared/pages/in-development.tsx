import { Link } from "react-router"

import RootLayout from "@/shared/components/layout/root-layout"

import { landingMenu } from "@/shared/routes/menus/landing-menu"

export const InDevelopment = () => {
  return (
    <RootLayout menuItems={landingMenu}>
      <div className="flex w-full flex-1 items-center justify-center px-[5vw] py-8">
        <section className="mx-auto flex w-full max-w-[min(36rem,90vw)] flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground">
            EM BREVE
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Página em <span className="text-primary">desenvolvimento</span>
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Esta página ainda está em desenvolvimento. Volte para a tela
            inicial.
          </p>
          <Link
            to="/"
            className="mt-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ir para inicio
          </Link>
        </section>
      </div>
    </RootLayout>
  )
}
