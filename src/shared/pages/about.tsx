import { Link } from "react-router"

import { Button } from "@/shared/components/ui/button"
import { MemberCard } from "@/shared/components/cards/member-card"
import RootLayout from "@/shared/components/layout/root-layout"

import LogoInterfacesNarrativas from "@/shared/assets/images/interfaces-narrativas-art.png"
import logoCallOfCthulhu from "@/shared/assets/systems/call-of-cthulhu.png"
import logoDnD from "@/shared/assets/systems/dnd.png"
import logoKaos from "@/shared/assets/systems/kaos.png"
import logoKaosDark from "@/shared/assets/systems/kaos-dark.png"
import logoOrdemParanormal from "@/shared/assets/systems/ordem-paranormal.png"
import logoOrdemParanormalDark from "@/shared/assets/systems/ordem-paranormal-dark.png"
import logoTormenta20 from "@/shared/assets/systems/tormenta-20.png"

import { landingMenu } from "@/shared/routes/menus/landing-menu"
import { teamMembers } from "@/shared/mocks/team-members"

import { ArrowRightIcon } from "lucide-react"

export const About = () => {
  return (
    <RootLayout menuItems={landingMenu} showFooter>
      <div className="w-full max-w-full min-w-0 overflow-x-clip">
        <section
          className="flex w-full min-w-0 flex-col items-center justify-center py-4 md:py-6"
        >
          <div
            className="mx-auto flex w-full min-w-0 max-w-xl flex-col items-center gap-4 px-4 text-center sm:px-6"
          >
            <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
              Interfaces Narrativas
            </span>
            <h1 className="text-3xl font-semibold md:text-4xl">
              SOBRE O PROJETO
            </h1>
          </div>
        </section>

        <section
          className="flex w-full flex-col items-center justify-center py-4 md:py-6"
        >
          <div
            className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6"
          >
            <h2 className="mb-3 text-xl font-medium text-primary">Quem somos?</h2>
            <img
              src={LogoInterfacesNarrativas}
              alt="Logo Interfaces Narrativas"
              className="mb-6 max-h-64 w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
            />
            <p className="w-full text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              Interfaces Narrativas é um projeto de extensão que visa estudar e
              difundir o RPG de mesa como uma boa ferramenta pedagógica para
              diversas áreas. Além de desenvolver habilidades comunicativas
              importantes para o desenvolvimento social de seus jogadores.
              Atuamos com atividades multidisciplinares organizadas em nove
              núcleos que podem ser visualizados{" "}
              <Link to="/members" className="text-primary underline">
                aqui
              </Link>
              , assim, unimos o conhecimento de diversas áreas para alcançar
              nossos objetivos educacionais, didáticos e culturais. Prontos para
              embarcar em uma nova aventura?
            </p>
          </div>
        </section>

        <section
          className="flex w-full flex-col items-center justify-center py-4 md:py-6"
        >
          <div
            className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6"
          >
            <h2 className="mb-3 text-xl font-medium text-primary">Onde Atuamos?</h2>
            <p className="w-full text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              Atuamos na Universidade Estadual da Paraíba, em Patos, PB.
            </p>
          </div>
        </section>

        <section
          className="flex w-full flex-col items-center justify-center py-4 md:py-6"
        >
          <div
            className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6"
          >
            <h2 className="mb-3 text-xl font-medium text-primary">Primeiros Passos</h2>
            <p className="w-full text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              Inserir História do Projeto de Extensão
            </p>
          </div>
        </section>

        <section
          className="flex w-full flex-col items-center justify-center py-4 md:py-6"
        >
          <div
            className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center justify-center px-4 sm:px-6"
          >
            <h2 className="mb-3 text-xl font-medium text-primary">Nossa Equipe</h2>

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

        <section
          className="flex w-full flex-col items-center justify-center py-4 md:py-6"
        >
          <div
            className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6"
          >
            <h2 className="mb-3 text-xl font-medium text-primary">Sistemas Mestrados</h2>
            <p className="mb-8 w-full text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              Conheça os sistemas de RPG de mesa com os quais nossos mestres já
              conduziram sessões e campanhas no projeto.
            </p>
            <div className="flex w-full max-w-4xl flex-col items-center gap-10">
              <div className="grid w-full grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-3 sm:gap-8">
                <div className="flex h-20 w-44 items-center justify-center sm:h-24 sm:w-52 md:h-28 md:w-60">
                  <img
                    src={logoDnD}
                    alt="Dungeons & Dragons"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex h-20 w-44 items-center justify-center sm:h-24 sm:w-52 md:h-28 md:w-60">
                  <img
                    src={logoCallOfCthulhu}
                    alt="Call of Cthulhu"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex h-20 w-44 items-center justify-center sm:h-24 sm:w-52 md:h-28 md:w-60">
                  <img
                    src={logoTormenta20}
                    alt="Tormenta 20"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="grid w-full max-w-md grid-cols-1 items-center justify-items-center gap-6 sm:max-w-xl sm:grid-cols-2 sm:gap-8">
                <div className="flex h-20 w-44 items-center justify-center sm:h-24 sm:w-52 md:h-28 md:w-60">
                  <img
                    src={logoOrdemParanormal}
                    alt="Ordem Paranormal"
                    className="max-h-full max-w-full object-contain dark:hidden"
                  />
                  <img
                    src={logoOrdemParanormalDark}
                    alt="Ordem Paranormal"
                    className="hidden max-h-full max-w-full object-contain dark:block"
                  />
                </div>
                <div className="flex h-20 w-44 items-center justify-center sm:h-24 sm:w-52 md:h-28 md:w-60">
                  <img
                    src={logoKaos}
                    alt="Kaos em Nova Patos"
                    className="max-h-full max-w-full object-contain dark:hidden"
                  />
                  <img
                    src={logoKaosDark}
                    alt="Kaos em Nova Patos"
                    className="hidden max-h-full max-w-full object-contain dark:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  )
}
