import {
  Button,
  FaqCard,
  LogoMarquee,
  NewsCard,
  RootLayout,
  MemberCard,
  RpgSessionCard,
} from "@/shared/components"
import type { LogoItem } from "@/shared/components/logo-marquee"
import { Link } from "react-router"
import { BookCover } from "book-cover-3d"
import bgArt from "@/shared/assets/bg_art.png"
import bookCover from "@/shared/assets/book.jpg"
import { menuLanding } from "@/shared/routes/menus"
import { ArrowRightIcon, PlusIcon } from "lucide-react"

const ReactLogo = () => (
  <svg viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
      <circle cx="420.9" cy="296.5" r="45.7" />
    </g>
  </svg>
)

const logos: LogoItem[] = [
  { id: "1", component: <ReactLogo /> },
  { id: "2", component: <ReactLogo /> },
  { id: "3", component: <ReactLogo /> },
  { id: "4", component: <ReactLogo /> },
  { id: "5", component: <ReactLogo /> },
  { id: "6", component: <ReactLogo /> },
  { id: "7", component: <ReactLogo /> },
  { id: "8", component: <ReactLogo /> },
  { id: "9", component: <ReactLogo /> },
]

export const Landing = () => {
  return (
    <RootLayout menuItems={menuLanding}>
      <div className="flex w-full flex-col items-center gap-6 text-sm">
        {/* HERO */}
        <section className="relative mt-8 flex min-h-[70vh] w-full flex-col items-center justify-between bg-cover bg-fixed bg-center p-6">
          <p className="text-center text-xs tracking-widest text-muted-foreground">
            <span className="text-secondary">UEPB - PATOS</span>
          </p>
          <span className="flex flex-col gap-2">
            <h1 className="relative z-10 text-center text-4xl font-bold">
              Interfaces Narrativas
            </h1>
            <p className="text-center">Um projeto ...</p>
          </span>
          <LogoMarquee logos={logos} direction="normal" />
        </section>

        {/* SESSÕES */}
        <section className="bg-reverted-background text-reverted-foreground flex w-full flex-col items-center justify-center gap-6 px-6 py-8 pt-0 sm:px-8 lg:px-12">
          <h2 className="text-xl font-medium text-primary">Sessões</h2>

          <RpgSessionCard
            title="Sessão 1"
            image="https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1"
            system_icon="https://static.wikia.nocookie.net/a46d648c-95a7-47d8-bbd4-9b06ef3c8c9a"
            system="Ordem Paranormal"
            status="Disponível"
            date="2021-01-01"
            hours="10:00"
            age_rating="18"
          />
        </section>

        {/* PROJETO */}
        <section className="text-reverted-foreground relative flex w-full flex-col items-center gap-6 overflow-hidden px-6 py-8 sm:px-8 lg:px-12">
          <div
            className="absolute inset-0 bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url(${bgArt})` }}
            aria-hidden
          />
          <div
            className="bg-reverted-background/82 absolute inset-0 backdrop-blur-[1px]"
            aria-hidden
          />

          <div className="relative z-10 flex w-full flex-col items-center gap-6">
            <p className="text-center text-xs tracking-widest text-muted-foreground">
              <span className="text-secondary">KAOS</span> EM NOVA PATOS
            </p>

            <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-6">
              <div className="max-w-xs space-y-3">
                <p className="text-xs font-semibold tracking-wider text-secondary uppercase">
                  Nova Patos · 2224
                </p>
                <p className="text-sm leading-relaxed">
                  A <span className="font-semibold">Valianty</span> explora o{" "}
                  <span className="text-primary">Patônio</span> e controla a
                  cidade. Surge o{" "}
                  <span className="text-destructive">Neo Cangaço</span> — a
                  resistência.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Quer mergulhar nesse cenário?
                </p>
              </div>
              <BookCover
                rotate={25}
                radius={7}
                width={165}
                height={215}
                thickness={50}
                pagesOffset={5}
                rotateHover={10}
                bgColor="#c2c2c2"
                perspective={800}
                transitionDuration={1}
                shadowColor="rgba(0, 0, 0, 0.0)"
              >
                <img src={bookCover} alt="Book Cover" />
              </BookCover>
            </div>

            <Button className="mt-3" asChild variant="secondary">
              <Link to="/kaos-em-nova-patos">
                VEJA NOSSO PROJETO
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        {/* NOTÍCIAS */}
        <section className="flex w-full flex-col items-center justify-center gap-6 px-6 py-8 sm:px-8 lg:px-12">
          <h2 className="text-center text-xl font-medium text-primary">
            Principais Notícias
          </h2>

          <NewsCard
            title="Notícia 1"
            image="https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          />

          <Button asChild>
            <Link to="/noticias">
              <PlusIcon className="size-4" data-icon="inline-end" />
              Notícias
            </Link>
          </Button>
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-4 px-6 py-8 sm:px-6 lg:px-12">
          <h2 className="text-xl font-medium text-primary">Integrantes</h2>

          <MemberCard
            image="https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1"
            name="Usuário Teste"
            role="Developer"
          />
          <MemberCard
            image="https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1"
            name="Usuário Teste"
            role="Designer"
          />
        </section>

        {/* FAQ */}
        <section className="flex w-full flex-col items-center justify-center gap-4 px-6 py-8 sm:px-8 lg:px-12">
          <h2 className="text-xl font-bold text-primary">FAQs</h2>

          <div className="flex w-full max-w-xl flex-col gap-3">
            <FaqCard
              question="O que é esta plataforma?"
              answer="Esta plataforma é um site de jogos de mesa online."
            />
            <FaqCard
              question="Como posso participar de uma mesa?"
              answer="Você pode participar de uma mesa através do site."
            />
            <FaqCard
              question="Posso criar minha própria mesa?"
              answer="Sim, você pode criar sua própria mesa através do site."
            />
            <FaqCard
              question="Como funcionam os agendamentos das mesas?"
              answer="Os agendamentos das mesas são feitos através do site."
            />
            <FaqCard
              question="Posso participar de mais de uma mesa ao mesmo tempo?"
              answer="Sim, você pode participar de mais de uma mesa ao mesmo tempo."
            />
          </div>
        </section>

        {/* SOCIAL */}
        <section className="flex w-full flex-col items-center justify-center gap-6 px-6 py-8 sm:px-8 lg:px-12">
          <h2 className="text-xl font-bold text-primary">Siga-nos</h2>
        </section>
      </div>
    </RootLayout>
  )
}
