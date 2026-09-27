import { Button } from "@/shared/components/ui/button"
import RootLayout from "@/shared/components/layout/root-layout"

import bgCela from "@/shared/assets/backgrounds/cela.png"
import logoKaos from "@/shared/assets/systems/kaos.png"
import logoKaosDark from "@/shared/assets/systems/kaos-dark.png"

import { landingMenu } from "@/shared/routes/menus/landing-menu"

import { DownloadIcon } from "lucide-react"

const kaosManualUrl =
  "https://drive.google.com/file/d/1_lOr2OR_4kIyQtRjp1hQzgZyKSXfwKOi/view"

const universeParagraphs = [
  "Em Nova Patos, onde a alta tecnologia se entrelaça de forma caótica com a desolação, a vida é uma batalha contínua entre a tirania implacável da Valianty e a esperança feroz dos resistentes. Nova Patos, situada no coração da Paraíba, é um cenário vibrante e fragmentado, dividido em 5 setores, cada um com sua própria atmosfera única e desafios intensos, tudo isso no ano de 2224.",
  "A chegada da Valianty trouxe tanto avanços tecnológicos quanto uma presença opressiva. A descoberta do Patônio, um recurso raro e extremamente valioso, desencadeou uma corrida frenética por sua extração, trazendo prosperidade para alguns e desespero para outros. Sob o controle da Valianty, a cidade viu o crescimento de setores industriais poderosos e avanços científicos impressionantes. No entanto, este progresso veio a um custo alto, com muitos moradores sendo transformados em aberrações monstruosas ou se tornando vítimas de experimentos cruéis.",
  "Os que apoiam a Valianty veem a corporação como um farol de progresso e estabilidade em meio ao caos. Para eles, a Valianty é a força que pode levar Nova Patos a um futuro brilhante, utilizando o Patônio para desenvolver tecnologias revolucionárias que podem beneficiar toda a humanidade. Eles acreditam que a ordem imposta é necessária para evitar o colapso completo da sociedade e para manter a paz e a segurança.",
  "Por outro lado, a opressão crescente deu origem ao movimento do Neo Cangaço, liderado por um visionário ardente que desafia o domínio da Valianty e luta para restaurar a dignidade e a liberdade dos habitantes de Nova Patos. Para os resistentes, a Valianty representa um regime tirânico que sacrifica vidas humanas em nome do progresso. Eles veem sua luta como uma batalha épica por justiça e autonomia, uma chance de devolver o poder ao povo e acabar com as injustiças perpetuadas pela corporação.",
  "Neste cenário sombrio e distópico, a luta pelo poder, liberdade e sobrevivência molda o destino dos habitantes de Nova Patos. De um lado, a Valianty luta para manter seu controle, determinada a explorar o potencial do Patônio a qualquer custo. Do outro, os resistentes do Neo Cangaço lutam com paixão e coragem, buscando derrubar a opressão e devolver a esperança à cidade.",
  "A chama da resistência arde intensamente, mas o coração de Nova Patos também bate com a promessa de um futuro tecnológico avançado.",
  "Em cada setor da cidade, a luta é visceral e carregada de emoções intensas. Nesta terra de contrastes, onde a adrenalina corre solta e cada momento é vital, os jogadores devem decidir seu caminho, balanceando entre a ordem da Valianty e a liberdade dos resistentes. A batalha por Nova Patos é uma dança selvagem de poder, coragem e sacrifício, onde a esperança e a ambição se chocam em um turbilhão de tensão e fervor.",
]

export const Kaos = () => {
  return (
    <RootLayout menuItems={landingMenu} showFooter>
      <div className="relative w-full max-w-full min-w-0 overflow-x-clip">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[78vh] min-h-[32rem] bg-cover bg-[center_8%] bg-no-repeat"
          style={{
            backgroundImage: `url(${bgCela})`,
            WebkitMaskImage:
              "linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(0 0 0) 58%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(0 0 0) 58%, transparent 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[78vh] min-h-[32rem] bg-linear-to-b from-black/20 via-black/45 to-background"
          aria-hidden
        />

        <section className="relative z-10 flex w-full flex-col items-center py-16 md:py-24">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 text-center text-white sm:px-6">
            <div className="flex max-w-xl flex-col items-center gap-4">
              <img
                src={logoKaos}
                alt="Kaos em Nova Patos"
                className="h-14 w-auto object-contain dark:hidden"
              />
              <img
                src={logoKaosDark}
                alt="Kaos em Nova Patos"
                className="hidden h-14 w-auto object-contain dark:block"
              />
              <p className="text-xs tracking-[0.2em] text-white/80 uppercase">
                Manual · Nova Patos · 2224
              </p>
              <h1 className="text-3xl font-semibold md:text-4xl">
                Kaos em Nova Patos
              </h1>
              <p className="text-sm leading-relaxed text-white/85 md:text-base">
                Um RPG de mesa no coração da Paraíba, onde a Valianty e o Neo
                Cangaço disputam o Patônio e o destino da cidade.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a
                  href={kaosManualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Baixar manual
                  <DownloadIcon className="size-4" data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative z-10 flex w-full flex-col items-center justify-center py-12 md:py-16">
          <div className="mx-auto flex w-full min-w-0 max-w-3xl flex-col gap-6 px-4 sm:px-6">
            <h2 className="text-center text-xl font-medium text-primary">
              O universo de Nova Patos
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {universeParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  )
}
