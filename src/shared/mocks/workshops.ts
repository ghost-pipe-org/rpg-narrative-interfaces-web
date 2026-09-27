import type { Session } from "@/shared/services/session/session.types"

function workshop(data: {
  id: string
  title: string
  system: string
  date: string
  period: string
  ageRating: string
  location: string
}): Session {
  return {
    id: data.id,
    type: "OFICINA",
    title: data.title,
    description: "",
    requirements: "",
    system: data.system,
    location: data.location,
    possibleDates: [{ date: data.date }],
    approvedDate: data.date,
    period: data.period,
    minPlayers: 4,
    maxPlayers: 16,
    status: "APROVADA",
    ageRating: data.ageRating,
  }
}

export const workshopMocks: Session[] = [
  workshop({
    id: "workshop-criacao-de-personagem",
    title: "Criação de personagem",
    system: "Dungeons & Dragons",
    date: "2026-10-18T14:00:00.000Z",
    period: "TARDE",
    ageRating: "12",
    location: "UEPB Patos",
  }),
  workshop({
    id: "workshop-narrativa-de-horror",
    title: "Narrativa de horror",
    system: "Call of Cthulhu",
    date: "2026-10-25T19:00:00.000Z",
    period: "NOITE",
    ageRating: "16",
    location: "UEPB Patos",
  }),
  workshop({
    id: "workshop-mesa-iniciante",
    title: "Primeira mesa",
    system: "Tormenta 20",
    date: "2026-11-08T09:00:00.000Z",
    period: "MANHA",
    ageRating: "L",
    location: "UEPB Patos",
  }),
  workshop({
    id: "workshop-ordem-paranormal",
    title: "Investigação paranormal",
    system: "Ordem Paranormal",
    date: "2026-11-14T19:00:00.000Z",
    period: "NOITE",
    ageRating: "14",
    location: "UEPB Patos",
  }),
  workshop({
    id: "workshop-kaos",
    title: "Nova Patos 2224",
    system: "Kaos em Nova Patos",
    date: "2026-11-21T14:00:00.000Z",
    period: "TARDE",
    ageRating: "16",
    location: "UEPB Patos",
  }),
  workshop({
    id: "workshop-vampiro",
    title: "Crônicas da máscara",
    system: "Vampiro: A Máscara",
    date: "2026-11-28T19:00:00.000Z",
    period: "NOITE",
    ageRating: "18",
    location: "UEPB Patos",
  }),
  workshop({
    id: "workshop-mojuba",
    title: "Oficina de Mojubá",
    system: "Mojubá",
    date: "2026-12-05T09:00:00.000Z",
    period: "MANHA",
    ageRating: "12",
    location: "UEPB Patos",
  }),
]
