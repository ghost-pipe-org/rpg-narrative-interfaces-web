import logoCallOfCthulhu from "@/shared/assets/systems/call-of-cthulhu.png"
import coverCthulhu from "@/shared/assets/systems/cthulhu-cover.png"
import coverDnD from "@/shared/assets/systems/dnd-cover.png"
import logoDnD from "@/shared/assets/systems/dnd.png"
import logoGuaxinins from "@/shared/assets/systems/guaxinins.png"
import logoGuaxininsDark from "@/shared/assets/systems/guaxinins-dark.png"
import coverGuaxinins from "@/shared/assets/systems/guaxinins-cover.png"
import logoKaos from "@/shared/assets/systems/kaos.png"
import logoKaosDark from "@/shared/assets/systems/kaos-dark.png"
import coverKaos from "@/shared/assets/systems/kaos-cover.jpg"
import logoMojuba from "@/shared/assets/systems/mojuba.png"
import logoMojubaDark from "@/shared/assets/systems/mojuba-dark.png"
import coverMojuba from "@/shared/assets/systems/mojuba-cover.png"
import coverOrdem from "@/shared/assets/systems/ordem-cover.png"
import logoOrdemParanormal from "@/shared/assets/systems/ordem-paranormal.png"
import logoOrdemParanormalDark from "@/shared/assets/systems/ordem-paranormal-dark.png"
import coverTormenta from "@/shared/assets/systems/tormenta-cover.png"
import logoTormenta20 from "@/shared/assets/systems/tormenta-20.png"
import coverVampiro from "@/shared/assets/systems/vampiro-cover.png"
import logoVampiro from "@/shared/assets/systems/vampiro.png"
import logoVampiroDark from "@/shared/assets/systems/vampiro-dark.png"
import workshopPoster from "@/shared/assets/systems/workshop-poster.png"

export interface RpgSystem {
  id: string
  name: string
  aliases: readonly string[]
  logo?: string
  logoDark?: string
  icon?: string
  cover?: string
}

export const rpgSystems = [
  {
    id: "dnd",
    name: "Dungeons & Dragons",
    aliases: ["d&d", "dnd", "dungeons"],
    logo: logoDnD,
    cover: coverDnD,
  },
  {
    id: "call-of-cthulhu",
    name: "Call of Cthulhu",
    aliases: ["cthulhu", "call of cthulhu"],
    logo: logoCallOfCthulhu,
    cover: coverCthulhu,
  },
  {
    id: "tormenta20",
    name: "Tormenta 20",
    aliases: ["tormenta", "t20"],
    logo: logoTormenta20,
    cover: coverTormenta,
  },
  {
    id: "ordem-paranormal",
    name: "Ordem Paranormal",
    aliases: ["ordem", "ordem paranormal"],
    logo: logoOrdemParanormal,
    logoDark: logoOrdemParanormalDark,
    icon: logoOrdemParanormalDark,
    cover: coverOrdem,
  },
  {
    id: "kaos",
    name: "Kaos em Nova Patos",
    aliases: ["kaos"],
    logo: logoKaos,
    logoDark: logoKaosDark,
    cover: coverKaos,
  },
  {
    id: "mojuba",
    name: "Mojubá",
    aliases: ["mojuba"],
    logo: logoMojuba,
    logoDark: logoMojubaDark,
    icon: logoMojubaDark,
    cover: coverMojuba,
  },
  {
    id: "vampiro",
    name: "Vampiro: A Máscara",
    aliases: ["vampiro", "vampire", "vtm", "mascara", "masquerade"],
    logo: logoVampiro,
    logoDark: logoVampiroDark,
    icon: logoVampiroDark,
    cover: coverVampiro,
  },
  {
    id: "guaxinins-e-gambiarras",
    name: "Guaxinins e Gambiarras",
    aliases: ["guaxinim", "gambiarra"],
    logo: logoGuaxinins,
    logoDark: logoGuaxininsDark,
    icon: logoGuaxininsDark,
    cover: coverGuaxinins,
  },
  {
    id: "outro",
    name: "Outro",
    aliases: ["outro", "outros", "other"],
    cover: workshopPoster,
  },
] as const satisfies readonly RpgSystem[]

export type RpgSystemId = (typeof rpgSystems)[number]["id"]

const systemsById = Object.fromEntries(
  rpgSystems.map((system) => [system.id, system])
) as Record<RpgSystemId, RpgSystem>

export function getRpgSystemById(id: RpgSystemId) {
  return systemsById[id]
}

export function normalizeSystemName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function aliasMatches(name: string, alias: string) {
  const token = normalizeSystemName(alias)

  if (token.length <= 3 && /^[a-z0-9]+$/.test(token)) {
    return new RegExp(`\\b${token}\\b`).test(name)
  }

  return name.includes(token)
}

export function findRpgSystem(system?: string | null) {
  if (!system) return null

  const name = normalizeSystemName(system)

  return (
    rpgSystems.find((item) =>
      item.aliases.some((alias) => aliasMatches(name, alias))
    ) ?? null
  )
}

export function systemCoverFor(system?: string | null) {
  return findRpgSystem(system)?.cover ?? null
}

export function systemIconFor(system?: string | null) {
  const match = findRpgSystem(system)
  if (!match) return null

  const icon = "icon" in match ? match.icon : undefined
  const logo = "logo" in match ? match.logo : undefined
  return icon || logo || null
}
