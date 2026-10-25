import { ThemeToggle } from "./theme-toggle"

const Footer = () => {
  return (
      <footer className="sticky bottom-0 z-40 flex w-full justify-between border-t bg-background px-4 py-3 text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Hiteco.</span>
        <span>BE0892536392</span>
        <span><ThemeToggle /></span>
      </footer>
  )
}

export default Footer