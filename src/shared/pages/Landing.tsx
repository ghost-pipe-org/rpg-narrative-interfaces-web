import { Link } from "react-router"
import { ArrowRightIcon, PlusIcon } from "lucide-react"

import {
  bgArt,
  bgHero,
  bookCover,
} from "@/shared/assets"

import {
  Button,
  FaqCard,
  NewsCard,
  RootLayout,
  MemberCard,
  LogoMarquee,
  RpgSessionCard,
} from "@/shared/components"
import { BookCover } from "book-cover-3d"

import { menuLanding } from "@/shared/routes/menus"
import { teamMembers, linkedEvents } from "@/shared/utils"

export const Landing = () => {
  return (
    <RootLayout menuItems={menuLanding}>
      <div className="flex w-full flex-col items-center gap-0 text-sm">
        <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-between pt-24">
          <div
            className="pointer-events-none absolute inset-0 bg-background bg-cover bg-center opacity-20 bg-blend-exclusion dark:bg-blend-color-dodge"
            style={{
              backgroundImage: `url(${bgArt})`,
              WebkitMaskImage:
                "linear-gradient(to bottom, rgb(0 0 0), rgb(0 0 0 / 0.05))",
              maskImage:
                "linear-gradient(to bottom, rgb(0 0 0), rgb(0 0 0 / 0.05))",
            }}
            aria-hidden
          />
          <p className="relative z-10 mt-16 text-center text-xs tracking-widest text-muted-foreground">
            <span className="text-secondary">UEPB - PATOS</span>
          </p>
          <span className="relative z-10 flex flex-col gap-2 px-8">
            <h1 className="text-center text-4xl font-medium">
              Interfaces Narrativas
            </h1>
            <p className="text-center">
              Um projeto de extensão da Universidade Estadual da Paraíba
            </p>
          </span>
          <div className="relative z-10 w-full">
            <LogoMarquee logos={linkedEvents} direction="normal" />
          </div>
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
        <section className="text-reverted-foreground relative my-12 flex w-full flex-col items-center gap-6 overflow-hidden bg-gray-400 px-6 py-24 sm:px-8 lg:px-12">
          <div
            className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgHero})`,
              mixBlendMode: "multiply",
            }}
            aria-hidden
          />
          <div
            className="bg-reverted-background/80 absolute inset-0 backdrop-blur-[1px]"
            aria-hidden
          />

          <div className="relative z-10 flex w-full flex-col items-center gap-3 text-white">
            <p className="mb-3 text-center text-xs tracking-widest text-white">
              <span className="text-white">KAOS</span> EM NOVA PATOS · 2224
            </p>

            <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-6">
              <div className="max-w-xs space-y-3 px-6 text-justify">
                <p className="text-sm leading-relaxed text-white">
                  A Valianty explora o{" "}
                  <span className="text-primary">Patônio</span> e controla a
                  cidade. Surge o Neo Cangaço — a resistência.
                </p>
                <p>
                  Será que{" "}
                  <span className="font-semibold text-destructive">
                    Luiza Martina
                  </span>{" "}
                  é a última esperança, ou será que ela é a causa do caos?
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
              <p className="mt-3 text-center text-xs font-light text-gray-200 uppercase">
                Quer mergulhar nesse cenário de RPG?
              </p>
            </div>

            <Button asChild variant="secondary">
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

          <div className="flex w-full flex-wrap gap-4 flex-col items-center justify-center">
            {teamMembers.map((member) => (
              <MemberCard
                key={member.id}
                image={member.image}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
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

          <div className="flex w-full max-w-xl flex-wrap justify-center gap-3">
            <Button
              asChild
              size="icon"
              className="size-12 bg-muted text-foreground"
            >
              <a href="https://www.instagram.com/rpg.uepbpatos/">
                <span className="sr-only">Instagram</span>
                <svg
                  aria-hidden
                  viewBox="0 0 448 512"
                  className="size-8 shrink-0 fill-current"
                >
                  <path d="M224.3 141a115 115 0 1 0-.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1-.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1-53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </Button>
            <Button
              asChild
              size="icon"
              className="size-12 bg-muted text-foreground"
            >
              <a href="mailto:rpg.uepbpatos@gmail.com">
                <span className="sr-only">Gmail</span>
                <svg
                  aria-hidden
                  viewBox="0 0 512 512"
                  className="size-8 shrink-0 fill-current"
                >
                  <path d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" />
                </svg>
              </a>
            </Button>
          </div>
        </section>
      </div>
    </RootLayout>
  )
}
