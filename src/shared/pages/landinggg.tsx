import { Link } from "react-router"

import { BookCover } from "book-cover-3d"
import { Button } from "@/shared/components/ui/button"
import { FaqCard } from "@/shared/components/cards/faq-card"
import { NewsCard } from "@/shared/components/cards/news-card"
import RootLayout from "@/shared/components/layout/root-layout"
import { MemberCard } from "@/shared/components/cards/member-card"
import { LogoMarquee } from "@/shared/components/marquee/logo-marquee"
import { RpgSessionCard } from "@/shared/components/cards/rpg-session-card"

import bookCover from "@/shared/assets/books/cover.jpg"
import bgArt from "@/shared/assets/backgrounds/art.png"
import bgHero from "@/shared/assets/backgrounds/street.png"

import { teamMembers } from "@/shared/mocks/team-members"
import { landingMenu } from "@/shared/routes/menus/landing-menu"

import linkedEvents from "@/shared/mocks/linked-events"

import { ArrowRightIcon } from "lucide-react"

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
    title:
      "Nova expansão revoluciona mundo de RPG e atrai milhões de jogadores",
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

export const Landing = () => {
  return (
    <RootLayout menuItems={landingMenu} showFooter>
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
          <div className="relative z-10 mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col items-center justify-between px-4 pt-16 pb-10 sm:px-6">
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
        <section className="bg-reverted-background text-reverted-foreground w-full py-12 md:py-14">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6">
            <h2 className="mb-8 text-xl font-medium text-primary">Sessões</h2>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {landingSessions.map((session, idx) => (
                <div
                  key={`${session.title}-${idx}`}
                  className={
                    [
                      "block",
                      "block",
                      "block sm:hidden lg:block",
                      "hidden lg:block",
                    ][idx] ?? "hidden"
                  }
                >
                  <RpgSessionCard {...session} />
                </div>
              ))}
            </div>
            <Button asChild className="mt-6" variant="outline">
              <Link to="/sessions" className="inline-flex items-center gap-2">
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

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 text-white sm:px-6">
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
              <Link to="/kaos" className="inline-flex items-center gap-2">
                SAIBA MAIS
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        {/* NOTÍCIAS */}
        <section className="flex w-full flex-col items-center justify-center py-12 md:py-14">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6">
            <h2 className="mb-8 text-center text-xl font-medium text-primary">
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

            <Button asChild className="mt-6" variant="outline">
              <Link to="/blog" className="inline-flex items-center gap-2">
                Ver notícias
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="flex w-full flex-col items-center justify-center py-12 md:py-14">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6">
            <h2 className="mb-8 text-xl font-medium text-primary">
              Integrantes
            </h2>

            <div className="hidden h-full w-full flex-row flex-wrap items-center justify-center gap-4 lg:flex">
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

            <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-4 lg:hidden">
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

            <Button asChild className="mt-6" variant="outline">
              <Link to="/members" className="inline-flex items-center gap-2">
                Ver todos os membros
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="flex w-full flex-col items-center justify-center py-12 md:py-14">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6">
            <h2 className="mb-8 text-xl font-bold text-primary">FAQs</h2>

            <div className="flex w-full flex-col gap-3">
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
      </div>
    </RootLayout>
  )
}
