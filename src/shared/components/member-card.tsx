interface MemberCardProps {
  image: string
  name: string
  role: string
}

export const MemberCard = ({ image, name, role }: MemberCardProps) => {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <img
        src={image}
        alt={name}
        className="h-38 w-32 rounded-2xl object-cover"
      />
      <span className="text-sm font-medium text-primary">
        <h1 className="text-lg font-medium text-body text-foreground">{name}</h1>
        <p className="text-sm text-muted-primary">{role}</p>
      </span>
    </div>
  )
}
