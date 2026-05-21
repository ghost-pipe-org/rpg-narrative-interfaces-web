import type { LogoItem } from "@/shared/components/custom/marquee/logo-marquee"

import logoConedu from "@/shared/assets/logos/conedu_logo.webp"
import logoConeduDark from "@/shared/assets/logos/conedu_dark_logo.webp"
import logoGhostPipe from "@/shared/assets/logos/ghostpipe_completed_logo.png"
import logoGhostPipeDark from "@/shared/assets/logos/ghostpipe_dark_completed_logo.png"
import logoUepb from "@/shared/assets/logos/uepb_logo.png"
import logoUepbDark from "@/shared/assets/logos/uepb_dark_logo.png"

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
