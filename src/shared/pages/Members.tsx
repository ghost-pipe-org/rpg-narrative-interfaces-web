import { MemberCard, RootLayout } from "../components"
import { menuLanding } from "../routes/menus"
import { orientationMembers, developersMembers, rpgMembers } from "../utils"

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
    <RootLayout menuItems={menuLanding}>
      <div className="space-y-12 pt-12">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Interfaces Narrativas
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">
            NOSSOS MEMBROS
          </h1>
        </div>

        {memberSections.map((section) => (
          <section
            key={section.title}
            className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center px-6"
          >
            <div className="space-y-1 max-w-xl">
              <h2 className="text-xl font-semibold text-primary">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-justify text-muted-foreground">
                {section.description}
              </p>
            </div>

            <div className="flex w-full flex-wrap justify-center gap-8 md:gap-12">
              {section.members.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </RootLayout>
  )
}