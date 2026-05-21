import type { ReactNode } from "react"
import { Link } from "react-router"

import { Button } from "../ui/button"

import logoGmail from "@/shared/assets/icons/envelope.svg"
import logoInstagram from "@/shared/assets/icons/instagram.svg"
import logoDark from "@/shared/assets/logos/brand-dark.svg"
import logoLight from "@/shared/assets/logos/brand-light.svg"

import { menuLanding } from "@/shared/routes/menus/menuLanding"

const EMAIL = "rpg.uepbpatos@gmail.com"
const INSTAGRAM = "https://www.instagram.com/rpg.uepbpatos/"

const COL = "flex flex-col gap-3"
const MUTED = "text-sm font-light text-reverted-foreground/75"
const NAV_LINK =
  "w-fit text-sm text-reverted-foreground/80 transition-colors hover:text-primary"
const SOCIAL_BTN =
  "size-9 rounded-sm border border-reverted-foreground/25 bg-reverted-foreground/10 shadow-none hover:border-primary hover:bg-primary"
const SOCIAL_ICON = "size-4 shrink-0 dark:brightness-0 dark:invert"
const GRADIENT_BORDER =
  "bg-[linear-gradient(185deg,#7a6cff,#6f75f5,#647eeb,#5987e0,#4e90d6,#4398cc,#38a1c2,#2daab7,#22b3ad)]"

function FooterHeading({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <h3 className="font-body text-sm font-semibold tracking-wide text-reverted-foreground">
        {children}
      </h3>
      <span className="flex h-0.5 w-10" aria-hidden>
        <span className="h-full w-1/2 bg-primary" />
        <span className="h-full w-1/2 bg-reverted-foreground/35" />
      </span>
    </div>
  )
}

export const Footer = () => (
  <footer className="mt-4 w-full shrink-0 rounded-tl-[2.5rem] bg-transparent border-t border-muted/80 text-reverted-foreground">
    <div
      className={`h-px w-full shrink-0 opacity-45 ${GRADIENT_BORDER}`}
      aria-hidden
    />
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 sm:px-8 sm:py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
      <div className={COL}>
        <Link to="/" className="inline-flex w-fit">
          <img src={logoLight} alt="Interfaces Narrativas" className="h-8 w-auto hidden dark:block" />
          <img src={logoDark} alt="Interfaces Narrativas" className="h-8 w-auto dark:hidden" />
        </Link>
        <p className={`max-w-xs leading-relaxed ${MUTED}`}>
          Projeto de extensão da UEPB que estuda e difunde o RPG de mesa como
          ferramenta pedagógica e cultural.
        </p>
      </div>

      <div className={COL}>
        <FooterHeading>Contato</FooterHeading>
        <address className={`space-y-2 not-italic leading-relaxed ${MUTED}`}>
          <p>Universidade Estadual da Paraíba</p>
          <p>Campus Patos, PB</p>
          <a
            href={`mailto:${EMAIL}`}
            className="block underline decoration-primary/60 underline-offset-2 transition-colors hover:text-primary"
          >
            {EMAIL}
          </a>
        </address>
      </div>

      <div className={COL}>
        <FooterHeading>Links</FooterHeading>
        <nav className="flex flex-col gap-2">
          {menuLanding.map((item) => (
            <Link key={item.to} to={item.to} className={NAV_LINK}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={COL}>
        <FooterHeading>Siga-nos</FooterHeading>
        <p className={MUTED}>Acompanhe o projeto nas redes oficiais.</p>
        <div className="flex gap-2">
          <Button asChild size="icon" className={SOCIAL_BTN}>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Instagram</span>
              <img src={logoInstagram} alt="" className={SOCIAL_ICON} aria-hidden />
            </a>
          </Button>
          <Button asChild size="icon" className={SOCIAL_BTN}>
            <a href={`mailto:${EMAIL}`}>
              <span className="sr-only">E-mail</span>
              <img src={logoGmail} alt="" className={SOCIAL_ICON} aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </div>

    <div className="border-t border-muted/80">
      <p className="py-3 text-center text-xs text-reverted-foreground/70 font-light">
        © {new Date().getFullYear()} Interfaces Narrativas · Universidade Estadual
        da Paraíba — Patos, PB
      </p>
    </div>
  </footer>
)
