import { Link } from "react-router"

import RootLayout from "@/shared/components/layout/root-layout"

import { landingMenu } from "@/shared/routes/menus/landing-menu"

export const InDevelopment = () => {
  return (
    <RootLayout menuItems={landingMenu}>
      <div className="flex w-full min-w-0 flex-1 items-center justify-center px-4 py-8 sm:px-[5vw]">
        <section className="mx-auto flex w-full min-w-0 max-w-xl flex-col items-center gap-4 text-center">
          <span className="text-xs tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.2em]">
            EM BREVE
          </span>
          <h1 className="w-full max-w-full text-balance text-[clamp(1.15rem,5.2vw,1.875rem)] leading-tight sm:text-3xl md:text-4xl">
            Página em <span className="text-primary">desenvolvimento</span>
          </h1>
          <p className="max-w-full text-sm text-balance text-muted-foreground md:text-base">
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
