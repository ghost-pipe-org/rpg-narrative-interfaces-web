import logoCallOfCthulhu from "@/shared/assets/systems/call-of-cthulhu.png"
import coverDnD from "@/shared/assets/systems/dnd-cover.png"
import logoDnD from "@/shared/assets/systems/dnd.png"
import logoKaos from "@/shared/assets/systems/kaos.png"
import coverOrdem from "@/shared/assets/systems/ordem-cover.png"
import logoOrdemParanormal from "@/shared/assets/systems/ordem-paranormal-dark.png"
import coverTormenta from "@/shared/assets/systems/tormenta-cover.png"
import logoTormenta20 from "@/shared/assets/systems/tormenta-20.png"

function normalizeSystemName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function isDungeonsAndDragons(system?: string | null) {
  if (!system) return false

  const name = normalizeSystemName(system)
  return (
    name.includes("d&d") ||
    name.includes("dnd") ||
    name.includes("dungeons")
  )
}

function isTormenta(system?: string | null) {
  if (!system) return false

  const name = normalizeSystemName(system)
  return name.includes("tormenta") || /\bt20\b/.test(name)
}

function isOrdemParanormal(system?: string | null) {
  if (!system) return false
  return normalizeSystemName(system).includes("ordem")
}

export function systemCoverFor(system?: string | null) {
  if (isDungeonsAndDragons(system)) return coverDnD
  if (isTormenta(system)) return coverTormenta
  if (isOrdemParanormal(system)) return coverOrdem
  return null
}

export function systemIconFor(system?: string | null) {
  if (!system) return null

  const name = normalizeSystemName(system)

  if (isDungeonsAndDragons(system)) {
    return logoDnD
  }

  if (name.includes("cthulhu")) return logoCallOfCthulhu
  if (name.includes("tormenta")) return logoTormenta20
  if (name.includes("ordem")) return logoOrdemParanormal
  if (name.includes("kaos")) return logoKaos

  return null
}
