export function SectionHeading({
  id,
  index,
  title,
  description,
}: {
  id: string
  index: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-sm text-primary">
        {index} <span className="text-muted-foreground">{'//'}</span>
      </p>
      <h2
        id={id}
        className="text-balance text-3xl font-bold tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
