export interface postSessionData {
    title: string;
    description: string;
    requirements: string;
    system: string;
    possibleDates: Date[];
    period: string;
    minPlayers: number;
    maxPlayers: number;
}

export interface SessionPossibleDate {
    id?: string;
    sessionId?: string;
    date: string;
}

export interface Session {
    id: string;
    type?: string;
    title: string;
    description: string;
    requirements: string;
    system: string | null;
    location?: string | null;
    possibleDates: Array<string | SessionPossibleDate>;
    period: string;
    minPlayers: number;
    maxPlayers: number;
    status?: string;
    image?: string | null;
    systemIcon?: string | null;
    ageRating?: string | null;
    approvedDate?: string | null;
}

export interface SessionsResponse {
    data: Session[];
}