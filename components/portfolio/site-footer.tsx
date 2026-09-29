export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>{`© ${new Date().getFullYear()} Joy Paul Arko`}</p>
        <p className="font-mono text-xs">{'H₀: this site was built with care. Fail to reject.'}</p>
      </div>
    </footer>
  )
}
