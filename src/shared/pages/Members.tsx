import { MemberCard, RootLayout } from "../components"
import { menuLanding } from "../routes/menus"
import { orientationMembers, developersMembers, designersMembers, rpgMembers } from "../utils"

export const Members = () => {
  return (
    <RootLayout menuItems={menuLanding}>
      <main className="flex min-h-[70vh] w-full items-center justify-center px-6 py-10 flex-col gap-y-20">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
          <h1 className="text-2xl font-bold md:text-3xl">Membros</h1>
          <p className="text-sm text-muted-foreground">
            Nossa organização de equipes é baseada nos <span className="text-accent">módulos de atuação dos integrantes</span>, de forma a garantir a qualidade e a eficiência do projeto.
          </p>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-xl font-medium text-primary">Orientadores</h2>
          <div className="flex w-full flex-wrap justify-center gap-8 md:gap-12">
            {orientationMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-xl font-medium text-primary">Desenvolvedores</h2>
          <div className="flex w-full flex-wrap justify-center gap-8 md:gap-12">
            {developersMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-xl font-medium text-primary">Designers</h2>
          <div className="flex w-full flex-wrap justify-center gap-8 md:gap-12">
            {designersMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-xl font-medium text-primary">Mestragens</h2>
          <div className="flex w-full flex-wrap justify-center gap-8 md:gap-12">
            {rpgMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>
      </main>
    </RootLayout>
  )
}
