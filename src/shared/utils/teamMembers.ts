export interface TeamMember {
  name: string
  role: string
  image?: string
}

export const orientationMembers: TeamMember[] = [
  {
    name: "Vinícius Augustos",
    role: "Orientador",
    image: "https://avatars.githubusercontent.com/u/130420155?v=4",
  },
  {
    name: "Suéllen Rodrigues",
    role: "Orientadora",
  },
  {
    name: "Maria Regina",
    role: "Orientadora",
  },
]

export const developersMembers: TeamMember[] = [
  {
    name: "Anniely Mariah",
    role: "Desenvolvedora frontend",
    image: "https://avatars.githubusercontent.com/u/95944772?v=4",
  },
  {
    name: "Gabriel Menezes",
    role: "Desenvolvedor backend",
    image: "https://avatars.githubusercontent.com/u/130420155?v=4",
  },
  {
    name: "João Pedro",
    role: "Desenvolvedor backend",
    image: "https://avatars.githubusercontent.com/u/65502666?v=4",
  },
  {
    name: "Nilton Pereira",
    role: "Desenvolvedor frontend",
  },
  {
    name: "Pedro Irineu",
    role: "Desenvolvedor backend",
    image: "https://avatars.githubusercontent.com/u/100308114?v=4",
  },
  {
    name: "Vinícius França",
    role: "Desenvolvedor frontend",
    image: "https://avatars.githubusercontent.com/u/130421705?v=4",
  },
]

export const designersMembers: TeamMember[] = [
  {
    name: "Uemerson Lustosa",
    role: "Product Designer",
    image: "https://avatars.githubusercontent.com/u/173008440?v=4",
  },
  {
    name: "Victor Xavier",
    role: "Product Designer",
    image: "https://avatars.githubusercontent.com/u/104697605?v=4",
  },
]

export const rpgMembers: TeamMember[] = [
  {
    name: "Gabriel Menezes",
    role: "Mestre de Jogo",
    image: "https://avatars.githubusercontent.com/u/130420155?v=4",
  },
  {
    name: "João Pedro",
    role: "Mestre de Jogo",
    image: "https://avatars.githubusercontent.com/u/65502666?v=4",
  },
  {
    name: "Vinícius França",
    role: "Mestre de Jogo",
    image: "https://avatars.githubusercontent.com/u/130421705?v=4",
  },
  {
    name: "José Matheus",
    role: "Mestre de Jogo",
    image: "https://avatars.githubusercontent.com/u/140752882?v=4",
  },
  {
    name: "Pedro Sutra",
    role: "Mestre de Jogo",
  },
  { 
    name: "Giovanni Miguel",
    role: "Mestre de Jogo",
  },
  {	
    name: "Galvão Neto",
    role: "Mestre de Jogo",
    image: "https://avatars.githubusercontent.com/u/119622866?v=4",
  }
]

export const comunicationMembers: TeamMember[] = [
  {
    name: "Adriano",
    role: "X",
  },
  {
    name: "Kayke",
    role: "X",
  },
  {
    name: "Rafael",
    role: "X",
  },
  {
    name: "Yuri",
    role: "X",
  },
  {
    name: "Isaac  ",
    role: "X",
  },
]

export const teamMembers: TeamMember[] = [...orientationMembers, ...developersMembers, ...designersMembers, ...rpgMembers, ...comunicationMembers]