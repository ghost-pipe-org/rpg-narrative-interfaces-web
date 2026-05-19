import type { ReactNode } from "react"
import { Link } from "react-router"
import { Mail } from "lucide-react"
import { Button } from "../ui/button"
import { logoDark, logoInstagram, logoLight } from "@/shared/assets"
import { menuLanding } from "@/shared/routes/menus/menuLanding"

const EMAIL = "rpg.uepbpatos@gmail.com"
const INSTAGRAM = "https://www.instagram.com/rpg.uepbpatos/"

const COL = "flex flex-col gap-3"
const MUTED = "text-sm font-light text-reverted-foreground/75"
const NAV_LINK =
  "w-fit text-sm text-reverted-foreground/80 transition-colors hover:text-primary"
const SOCIAL_BTN =
  "size-9 rounded-sm bg-reverted-foreground text-reverted-background shadow-none hover:bg-primary hover:text-primary-foreground"

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
  <footer className="mt-auto w-full shrink-0 rounded-tl-[2.5rem] bg-linear-to-r from-secondary/10 to-background/30 backdrop-blur-lg supports-backdrop-filter:to-background/25 text-reverted-foreground sm:rounded-tl-[3rem]">
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
              <img src={logoInstagram} alt="" className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild size="icon" className={SOCIAL_BTN}>
            <a href={`mailto:${EMAIL}`}>
              <span className="sr-only">E-mail</span>
              <Mail className="size-4" aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </div>

    <div className="border-t border-reverted-foreground/15">
      <p className="py-3 text-center text-xs text-reverted-foreground/70 font-extralight">
        © {new Date().getFullYear()} Interfaces Narrativas · Universidade Estadual
        da Paraíba — Patos, PB
      </p>
    </div>
  </footer>
)
