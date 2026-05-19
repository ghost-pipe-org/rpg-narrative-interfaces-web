import { Link } from "react-router"
import { ArrowRightIcon } from "lucide-react"
import { teamMembers } from "../utils/teamMembers"
import { menuLanding } from "../routes/menus/menuLanding"
import { Button, MemberCard, RootLayout } from "../components"
import LogoInterfacesNarrativas from "../assets/interfaces_narrativas_art.png"
import {
  logoDnD,
  logoKaos,
  logoTormenta20,
  logoCallOfCthulhu,
  logoOrdemParanormal,
  logoOrdemParanormalDark,
  logoKaosDark,
} from "../assets"

const LANDING_CONTAINER_CLASS = "mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6"
const PAGE_CONTENT_CLASS =
  "w-full text-center text-sm leading-relaxed text-muted-foreground md:text-base"
const LANDING_SECTION_CLASS = "w-full py-4 md:py-6"
const SECTION_HEADING_CLASS = "mb-3 text-xl font-medium text-primary"
const LANDING_CTA_LINK_CLASS = "inline-flex items-center gap-2"
const SYSTEM_LOGO_IMG_CLASS = "max-h-full max-w-full object-contain"
const SYSTEM_LOGO_SLOT_CLASS =
  "flex h-20 w-44 items-center justify-center sm:h-24 sm:w-52 md:h-28 md:w-60"

export const About = () => {
  return (
    <RootLayout menuItems={menuLanding} showFooter>
      <div className="w-full max-w-full min-w-0 overflow-x-clip">
        <section
          className={`${LANDING_SECTION_CLASS} flex w-full min-w-0 flex-col items-center justify-center`}
        >
          <div
            className={`${LANDING_CONTAINER_CLASS} flex max-w-xl flex-col items-center gap-4 text-center`}
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
          className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}
        >
          <div
            className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center text-center`}
          >
            <h2 className={SECTION_HEADING_CLASS}>Quem somos?</h2>
            <img
              src={LogoInterfacesNarrativas}
              alt="Logo Interfaces Narrativas"
              className="mb-6 max-h-64 w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
            />
            <p className={PAGE_CONTENT_CLASS}>
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
          className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}
        >
          <div
            className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center text-center`}
          >
            <h2 className={SECTION_HEADING_CLASS}>Onde Atuamos?</h2>
            <p className={PAGE_CONTENT_CLASS}>
              Atuamos na Universidade Estadual da Paraíba, em Patos, PB.
            </p>
          </div>
        </section>

        <section
          className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}
        >
          <div
            className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center text-center`}
          >
            <h2 className={SECTION_HEADING_CLASS}>Primeiros Passos</h2>
            <p className={PAGE_CONTENT_CLASS}>
              Inserir História do Projeto de Extensão
            </p>
          </div>
        </section>

        <section
          className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}
        >
          <div
            className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center`}
          >
            <h2 className={SECTION_HEADING_CLASS}>Nossa Equipe</h2>

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
              <Link to="/members" className={LANDING_CTA_LINK_CLASS}>
                Ver todos os membros
                <ArrowRightIcon className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </section>

        <section
          className={`${LANDING_SECTION_CLASS} flex w-full flex-col items-center justify-center`}
        >
          <div
            className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center text-center`}
          >
            <h2 className={SECTION_HEADING_CLASS}>Sistemas Mestrados</h2>
            <p className={`mb-8 ${PAGE_CONTENT_CLASS}`}>
              Conheça os sistemas de RPG de mesa com os quais nossos mestres já
              conduziram sessões e campanhas no projeto.
            </p>
            <div className="flex w-full max-w-4xl flex-col items-center gap-10">
              <div className="grid w-full grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-3 sm:gap-8">
                <div className={SYSTEM_LOGO_SLOT_CLASS}>
                  <img
                    src={logoDnD}
                    alt="Dungeons & Dragons"
                    className={SYSTEM_LOGO_IMG_CLASS}
                  />
                </div>
                <div className={SYSTEM_LOGO_SLOT_CLASS}>
                  <img
                    src={logoCallOfCthulhu}
                    alt="Call of Cthulhu"
                    className={SYSTEM_LOGO_IMG_CLASS}
                  />
                </div>
                <div className={SYSTEM_LOGO_SLOT_CLASS}>
                  <img
                    src={logoTormenta20}
                    alt="Tormenta 20"
                    className={SYSTEM_LOGO_IMG_CLASS}
                  />
                </div>
              </div>
              <div className="grid w-full max-w-md grid-cols-1 items-center justify-items-center gap-6 sm:max-w-xl sm:grid-cols-2 sm:gap-8">
                <div className={SYSTEM_LOGO_SLOT_CLASS}>
                  <img
                    src={logoOrdemParanormal}
                    alt="Ordem Paranormal"
                    className={`${SYSTEM_LOGO_IMG_CLASS} dark:hidden`}
                  />
                  <img
                    src={logoOrdemParanormalDark}
                    alt="Ordem Paranormal"
                    className={`${SYSTEM_LOGO_IMG_CLASS} hidden dark:block`}
                  />
                </div>
                <div className={SYSTEM_LOGO_SLOT_CLASS}>
                  <img
                    src={logoKaos}
                    alt="Kaos em Nova Patos"
                    className={`${SYSTEM_LOGO_IMG_CLASS} dark:hidden`}
                  />
                  <img
                    src={logoKaosDark}
                    alt="Kaos em Nova Patos"
                    className={`${SYSTEM_LOGO_IMG_CLASS} hidden dark:block`}
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
