import { MemberCard } from "../components/cards/member-card"
import RootLayout from "../components/layout/root-layout"
import { menuLanding } from "../routes/menus/menuLanding"
import {
  orientationMembers,
  developersMembers,
  rpgMembers,
} from "../utils/teamMembers"

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
        className="flex w-full min-w-0 flex-col items-center justify-center py-4 md:py-6"
      >
        <div
          className="mx-auto flex w-full min-w-0 max-w-xl flex-col items-center gap-4 px-4 text-center sm:px-6"
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
          className="flex w-full min-w-0 flex-col items-center justify-center py-4 md:py-6"
        >
          <div
            className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6"
          >
            <h2 className="mb-3 text-xl font-medium text-primary">{section.title}</h2>
            <p className="mb-8 w-full text-center text-sm leading-relaxed text-muted-foreground md:text-base">
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
