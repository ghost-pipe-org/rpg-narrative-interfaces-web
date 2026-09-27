import type { Session } from "@/shared/services/session/session.types"

function session(data: {
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
    type: "MESA",
    title: data.title,
    description: "",
    requirements: "",
    system: data.system,
    location: data.location,
    possibleDates: [{ date: data.date }],
    approvedDate: data.date,
    period: data.period,
    minPlayers: 3,
    maxPlayers: 6,
    status: "APROVADA",
    ageRating: data.ageRating,
  }
}

export const sessionMocks: Session[] = [
  session({
    id: "session-mina-perdida",
    title: "A mina perdida",
    system: "Dungeons & Dragons",
    date: "2026-10-17T19:00:00.000Z",
    period: "NOITE",
    ageRating: "12",
    location: "UEPB Patos",
  }),
  session({
    id: "session-innsmouth",
    title: "Sombras em Innsmouth",
    system: "Call of Cthulhu",
    date: "2026-10-24T19:00:00.000Z",
    period: "NOITE",
    ageRating: "16",
    location: "UEPB Patos",
  }),
  session({
    id: "session-reinado",
    title: "Crônicas do Reinado",
    system: "Tormenta 20",
    date: "2026-11-07T14:00:00.000Z",
    period: "TARDE",
    ageRating: "L",
    location: "UEPB Patos",
  }),
  session({
    id: "session-ordem",
    title: "A porta do outro lado",
    system: "Ordem Paranormal",
    date: "2026-11-13T19:00:00.000Z",
    period: "NOITE",
    ageRating: "14",
    location: "UEPB Patos",
  }),
  session({
    id: "session-nova-patos",
    title: "Setor 3",
    system: "Kaos em Nova Patos",
    date: "2026-11-20T19:00:00.000Z",
    period: "NOITE",
    ageRating: "16",
    location: "UEPB Patos",
  }),
  session({
    id: "session-vtm",
    title: "Noite em Patos",
    system: "Vampiro: A Máscara",
    date: "2026-11-27T21:00:00.000Z",
    period: "NOITE",
    ageRating: "18",
    location: "UEPB Patos",
  }),
  session({
    id: "session-mojuba",
    title: "Encruzilhada",
    system: "Mojubá",
    date: "2026-12-04T09:00:00.000Z",
    period: "MANHA",
    ageRating: "12",
    location: "UEPB Patos",
  }),
]
