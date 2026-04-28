import { Link } from "react-router"
import { ArrowRightIcon, PlusIcon } from "lucide-react"

import { bgArt, bgHero, bookCover } from "@/shared/assets"

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

const SESSION_VISIBILITY_CLASS_BY_INDEX = [
  "block",
  "block",
  "block sm:hidden lg:block",
  "hidden lg:block",
] as const

const landingSessions = [
  {
    title: "Sessão 1",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
    system_icon:
      "https://static.wikia.nocookie.net/a46d648c-95a7-47d8-bbd4-9b06ef3c8c9a",
    system: "Ordem Paranormal",
    status: "Disponível",
    date: "2021-01-01",
    hours: "10:00",
    age_rating: "18" as const,
  },
  {
    title: "Sessão 1",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
    system_icon:
      "https://static.wikia.nocookie.net/a46d648c-95a7-47d8-bbd4-9b06ef3c8c9a",
    system: "Ordem Paranormal",
    status: "Disponível",
    date: "2021-01-01",
    hours: "10:00",
    age_rating: "18" as const,
  },
  {
    title: "Sessão 1",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
    system_icon:
      "https://static.wikia.nocookie.net/a46d648c-95a7-47d8-bbd4-9b06ef3c8c9a",
    system: "Ordem Paranormal",
    status: "Disponível",
    date: "2021-01-01",
    hours: "10:00",
    age_rating: "18" as const,
  },
  {
    title: "Sessão 1",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
    system_icon:
      "https://static.wikia.nocookie.net/a46d648c-95a7-47d8-bbd4-9b06ef3c8c9a",
    system: "Ordem Paranormal",
    status: "Disponível",
    date: "2021-01-01",
    hours: "10:00",
    age_rating: "18" as const,
  },
] as const

type LandingNewsItem = {
  title: string
  image: string
  description?: string
  date?: string
}

// Uma lista única; depois você separa por slice quando vier do backend.
const landingNews: readonly LandingNewsItem[] = [
  {
    title: "XI Congresso Nacional de Educação",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
    description:
      "O Interfaces Narrativas participou do XI Congresso Nacional de Educação, em João Pessoa, PB, no dia 10 de abril de 2026.",
  },
  {
    title: "Mestres convocados para grande encontro de heróis",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
    description:
      "Um encontro reúne mestres e jogadores para trocar experiências, compartilhar ideias e fortalecer a comunidade.",
  },
  {
    title: "Novas mesas, novos destinos: a guilda cresce",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
    description:
      "Chegaram novas aventuras e novas vagas. Descubra como participar e acompanhar os próximos anúncios.",
  },
  {
    date: "6 de Novembro, 2026",
    title: "Nova expansão revoluciona mundo de RPG e atrai milhões de jogadores",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
  },
  {
    date: "14 de Fevereiro, 2026",
    title: "Comunidade de RPG cria campanha épica que dura mais de 5 anos",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
  },
  {
    date: "6 de Abril, 2026",
    title:
      "Estúdio anuncia RPG inovador com escolhas que mudam completamente a história",
    image:
      "https://i0.wp.com/jogaod20.com/wp-content/uploads/2025/09/Novos-suplementos-de-Ordem-Paranormal-RPG.webp?fit=810%2C456&ssl=1",
  },
] as const

const landingMainNews = landingNews.slice(0, 3)
const landingSideNews = landingNews.slice(3, 6)

const LANDING_CONTAINER_CLASS = "mx-auto w-full max-w-6xl px-4 sm:px-6"
const LANDING_SECTION_CLASS = "w-full py-12 md:py-14"

export const Landing = () => {
  return (
    <RootLayout menuItems={menuLanding}>
      <div className="w-full max-w-full min-w-0 overflow-x-clip">
        <section className="relative flex min-h-[80vh] w-full min-w-0 flex-col">
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
          <div className={`relative z-10 ${LANDING_CONTAINER_CLASS} flex min-h-[80vh] flex-col items-center justify-between pt-16 pb-10`}>
            <p className="text-center text-xs tracking-widest text-muted-foreground">
              <span className="text-secondary">UEPB - PATOS</span>
            </p>
            <span className="flex flex-col gap-2">
              <h1 className="text-center text-4xl font-medium">
                Interfaces Narrativas
              </h1>
              <p className="text-center">
                Um projeto de extensão da Universidade Estadual da Paraíba
              </p>
            </span>
            <div className="w-full min-w-0">
              <LogoMarquee
                logos={linkedEvents}
                direction="normal"
                trackClassName="max-w-6xl"
              />
            </div>
          </div>
        </section>

        {/* SESSÕES */}
        <section className={`bg-reverted-background text-reverted-foreground ${LANDING_SECTION_CLASS}`}>
          <div className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center gap-6`}>
            <h2 className="text-xl font-medium text-primary">Sessões</h2>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {landingSessions.map((session, idx) => {
                const visibilityClass =
                  SESSION_VISIBILITY_CLASS_BY_INDEX[idx] ?? "hidden"

                return (
                  <div
                    key={`${session.title}-${idx}`}
                    className={visibilityClass}
                  >
                    <RpgSessionCard {...session} />
                  </div>
                )
              })}
            </div>
            <Button asChild>
              <Link to="/sessions">
                Ver todas as sessões{" "}
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        {/* PROJETO */}
        <section className="text-reverted-foreground relative my-12 flex w-full flex-col items-center gap-6 overflow-x-clip bg-gray-400 py-24">
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

          <div className={`relative z-10 ${LANDING_CONTAINER_CLASS} flex flex-col items-center gap-3 text-white`}>
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
              <Link to="/kaos">
                VEJA NOSSO PROJETO
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        {/* NOTÍCIAS */}
        <section className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}>
          <div className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center gap-6`}>
            <h2 className="text-center text-xl font-medium text-primary">
              Principais Notícias
            </h2>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
              {landingMainNews.map((news, idx) => (
                <NewsCard
                  key={`${news.title}-${idx}`}
                  title={news.title}
                  image={news.image}
                  description={news.description ?? ""}
                  className="min-h-[220px]"
                />
              ))}
            </div>

            <div className="hidden w-full grid-cols-1 gap-4 lg:grid lg:grid-cols-4">
              <div className="grid grid-cols-1 gap-4 lg:col-span-3 lg:grid-cols-3">
                {landingMainNews.map((news, idx) => (
                  <NewsCard
                    key={`${news.title}-${idx}`}
                    title={news.title}
                    image={news.image}
                    description={news.description ?? ""}
                    className="min-h-[260px] lg:min-h-[340px]"
                  />
                ))}
              </div>

              <aside className="flex h-full flex-col gap-3">
                {landingSideNews.map((item, idx) => (
                  <div
                    key={`${item.title}-${idx}`}
                    className="group flex w-full items-center gap-3 rounded-2xl bg-card/0 p-2"
                  >
                    <div className="relative size-24 shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt=""
                        className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-black/15"
                        aria-hidden
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] leading-tight text-muted-foreground">
                        {item.date}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </aside>
            </div>

            <Button asChild>
              <Link to="/blog">
                <PlusIcon className="size-4" data-icon="inline-end" />
                Notícias
              </Link>
            </Button>
          </div>
        </section>

        <section className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}>
          <div className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center gap-4`}>
            <h2 className="text-xl font-medium text-primary">Integrantes</h2>

            <div className="h-full w-full flex-wrap items-center justify-center gap-4 flex-row hidden lg:flex">
              {teamMembers.slice(0, 4).map((member) => (
                <MemberCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  orientation="column"
                />
              ))}
            </div>

            <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-4 lg:hidden ">
              {teamMembers.slice(0, 4).map((member) => (
                <MemberCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  orientation="row"
                />
              ))}
            </div>

            <Button asChild className="mt-2">
              <Link to="/members">
                VER TODOS OS MEMBROS
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}>
          <div className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center gap-4`}>
            <h2 className="text-xl font-bold text-primary">FAQs</h2>

            <div className="flex w-full max-w-3xl flex-col gap-3">
              <FaqCard
                question="O que é esta plataforma?"
                answer="Esta plataforma é um sistema unificador do projeto de extensão Interfaces Narrativas da Universidade Estadual da Paraíba, campus Patos. Tendo como objetivo centralizar e organizar e registrar as atividades do projeto de extensão."
              />
              <FaqCard
                question="O que é o Kaos em Nova Patos?"
                answer="O Kaos em Nova Patos é um sistema de RPG de mesa desenvolvido pelo nosso projeto de extensão e disponibilizado gratuitamente."
              />
              <FaqCard
                question="O que é uma sessão?"
                answer="Uma sessão é uma sessão de RPG de mesa, onde os jogadores se reúnem para jogar um jogo de RPG de mesa."
              />
              <FaqCard
                question="Como posso participar de uma sessão?"
                answer="Você pode participar de uma sessão através da plataforma de agendamentos disponibilizada pelo projeto de extensão por meio do nosso sistema de inscrições."
              />
              <FaqCard
                question="Posso criar minha própria mesa?"
                answer="Sim, você pode criar sua própria mesa através da plataforma de agendamentos disponibilizada pelo projeto de extensão por meio do nosso sistema de inscrições."
              />
              <FaqCard
                question="Como funcionam os agendamentos das mesas?"
                answer="Os agendamentos das mesas são feitos através da plataforma de agendamentos disponibilizada pelo projeto de extensão por meio do nosso sistema de inscrições."
              />
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}>
          <div className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center gap-6`}>
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
          </div>
        </section>
      </div>
    </RootLayout>
  )
}
