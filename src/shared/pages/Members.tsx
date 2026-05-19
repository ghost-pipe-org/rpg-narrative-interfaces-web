import { MemberCard, RootLayout } from "../components"
import { menuLanding } from "../routes/menus"
import { orientationMembers, developersMembers, rpgMembers } from "../utils"

const LANDING_CONTAINER_CLASS =
  "mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6"
const LANDING_SECTION_CLASS = "w-full py-4 md:py-6"
const SECTION_HEADING_CLASS = "mb-3 text-xl font-medium text-primary"
const PAGE_CONTENT_CLASS =
  "w-full text-center text-sm leading-relaxed text-muted-foreground md:text-base"

const memberSections = [
  {
    title: "Artes",
    description:
      "Núcleo responsável pela criação visual do projeto, desenvolvendo ilustrações, identidade estética e elementos gráficos que dão vida ao universo narrativo.",
    members: [],
  },
  {
    title: "Comunicação",
    description:
      "Cuida da divulgação e da presença do projeto, conectando o público às iniciativas por meio de estratégias, redes sociais e produção de conteúdo.",
    members: [],
  },
  {
    title: "Criação de Desafios Lógicos",
    description:
      "Desenvolve puzzles, mecânicas e desafios que estimulam o raciocínio lógico e enriquecem a experiência interativa do RPG.",
    members: [],
  },
  {
    title: "Desenvolvimento de Sistemas",
    description:
      "Responsável pela construção e manutenção das plataformas digitais, transformando ideias em sistemas funcionais e acessíveis.",
    members: developersMembers,
  },
  {
    title: "Escrita e Pesquisa",
    description:
      "Produz conteúdos, narrativas e fundamentação teórica, garantindo consistência, profundidade e qualidade informacional ao projeto.",
    members: [],
  },
  {
    title: "Mestragens",
    description:
      "Conduz sessões de RPG, criando experiências imersivas por meio da narrativa, interpretação e mediação das regras do jogo.",
    members: rpgMembers,
  },
  {
    title: "Mobilização e Infraestrutura",
    description:
      "Organiza recursos, eventos e suporte logístico, garantindo que as atividades do projeto aconteçam de forma estruturada.",
    members: [],
  },
  {
    title: "Produção Gráfica",
    description:
      "Transforma conceitos em materiais visuais aplicados, como peças digitais, layouts e conteúdos gráficos para divulgação e uso interno.",
    members: [],
  },
  {
    title: "Orientadores",
    description:
      "Acompanham e orientam os núcleos, oferecendo suporte estratégico, acadêmico e técnico no desenvolvimento das atividades.",
    members: orientationMembers,
  },
]

export const Members = () => {
  return (
    <RootLayout menuItems={menuLanding} showFooter>
      <div className="w-full min-w-0 max-w-full overflow-x-clip">
      <section
        className={`${LANDING_SECTION_CLASS} flex w-full min-w-0 flex-col items-center justify-center`}
      >
        <div
          className={`${LANDING_CONTAINER_CLASS} flex max-w-xl flex-col items-center gap-4 text-center`}
        >
          <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Interfaces Narrativas
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">NOSSOS MEMBROS</h1>
        </div>
      </section>

      {memberSections.map((section) => (
        <section
          key={section.title}
          className={`${LANDING_SECTION_CLASS} flex w-full min-w-0 flex-col items-center justify-center`}
        >
          <div
            className={`${LANDING_CONTAINER_CLASS} flex flex-col items-center justify-center text-center`}
          >
            <h2 className={SECTION_HEADING_CLASS}>{section.title}</h2>
            <p className={`mb-8 ${PAGE_CONTENT_CLASS}`}>
              {section.description}
            </p>

            {section.members.length > 0 && (
              <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-12">
                {section.members.map((member) => (
                  <MemberCard
                    key={member.name}
                    {...member}
                    orientation="column"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
      </div>
    </RootLayout>
  )
}
