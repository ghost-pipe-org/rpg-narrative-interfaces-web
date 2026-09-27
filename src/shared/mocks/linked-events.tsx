import type { LogoItem } from "@/shared/components/marquee/logo-marquee"

import logoComputacao from "@/shared/assets/logos/ciencia-da-computacao.png"
import logoComputacaoDark from "@/shared/assets/logos/ciencia-da-computacao-dark.png"
import logoGhostPipe from "@/shared/assets/logos/ghostpipe.png"
import logoGhostPipeDark from "@/shared/assets/logos/ghostpipe-dark.png"
import logoUepb from "@/shared/assets/logos/uepb.png"
import logoUepbDark from "@/shared/assets/logos/uepb-dark.png"
import logoUepbCcea from "@/shared/assets/logos/uepb-ccea.png"

const linkedEvents: LogoItem[] = [
  {
    id: "1",
    component: (
      <>
        <img
          src={logoComputacao}
          alt="Logo Ciência da Computação"
          className="object-contain dark:hidden"
        />
        <img
          src={logoComputacaoDark}
          alt="Logo Ciência da Computação"
          className="hidden object-contain dark:block"
        />
      </>
    ),
  },
  {
    id: "2",
    component: (
      <>
        <img
          src={logoGhostPipe}
          alt="Logo GhostPipe"
          className="object-contain dark:hidden"
        />
        <img
          src={logoGhostPipeDark}
          alt="Logo GhostPipe"
          className="hidden object-contain dark:block"
        />
      </>
    ),
  },
  {
    id: "3",
    component: (
      <>
        <img
          src={logoUepb}
          alt="Logo UEPB"
          className="object-contain dark:hidden"
        />
        <img
          src={logoUepbDark}
          alt="Logo UEPB"
          className="hidden object-contain dark:block"
        />
      </>
    ),
  },
  {
    id: "4",
    component: (
      <img
        src={logoUepbCcea}
        alt="Logo UEPB CCEA Campus VII"
        className="!h-24 !w-24 object-contain"
      />
    ),
  },
]

export default linkedEvents
