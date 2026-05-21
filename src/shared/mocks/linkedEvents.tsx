import type { LogoItem } from "@/shared/components/custom/marquee/logo-marquee"

import logoConedu from "@/shared/assets/logos/conedu.webp"
import logoConeduDark from "@/shared/assets/logos/conedu-dark.webp"
import logoGhostPipe from "@/shared/assets/logos/ghostpipe.png"
import logoGhostPipeDark from "@/shared/assets/logos/ghostpipe-dark.png"
import logoUepb from "@/shared/assets/logos/uepb.png"
import logoUepbDark from "@/shared/assets/logos/uepb-dark.png"

const linkedEvents: LogoItem[] = [
  {
    id: "1",
    component: (
      <>
        <img
          src={logoConedu}
          alt="Logo Conedu"
          className="object-contain dark:hidden"
        />
        <img
          src={logoConeduDark}
          alt="Logo Conedu"
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
]

export default linkedEvents
