import { Link } from "react-router"
import { RootLayout } from "../components"
import { menuLanding } from "../routes/menus/menuLanding"

export const About = () => {
  return (
    <RootLayout menuItems={menuLanding}>
      <div className="space-y-12 pt-12">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Interfaces Narrativas
          </span>
          <h1 className="text-3xl font-semibold md:text-4xl">
            SOBRE O PROJETO
          </h1>
        </div>
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-center">
          <h2 className="text-xl font-medium text-primary">Quem somos?</h2>
          <p className="text-justify text-sm text-muted-foreground">
            Interfaces Narrativas é um projeto de extensão que visa estudar e
            difundir o RPG de mesa como uma boa ferramenta pedagógica para
            diversas áreas. Além de desenvolver habilidades comunicativas
            importantes para o desenvolvimento social de seus jogadores. Atuamos
            com atividades multidisciplinares organizadas em nove núcleos que
            podem ser visualizados{" "}
            <Link to="/members" className="text-primary underline">
              aqui
            </Link>
            , assim, unimos o conhecimento de diversas áreas para alcançar
            nossos objetivos educacionais, didáticos e culturais. Prontos para
            embarcar em uma nova aventura?
          </p>
        </section>
      </div>
    </RootLayout>
  )
}
