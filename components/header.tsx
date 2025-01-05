import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className="w-full max-w-2xl mx-auto px-4 py-8">
      <nav className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between font-mono">
        <Link href="/" className="text-xl hover:underline">
          hi, i am harshvardhan!
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="hover:underline">
            about
          </Link>
          <Link href="/projects" className="hover:underline">
            projects
          </Link>
          <Link href="/blogs" className="hover:underline">
            blogs
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

