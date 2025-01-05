import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'harshvardhan',
  description: 'Personal website of harshvardhan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="w-full max-w-2xl mx-auto px-4 py-8 font-mono">
            {children}
          </main>
          <footer className="w-full max-w-2xl mx-auto px-4 py-8 font-mono text-center">
            <div className="space-x-4">
              <a href="https://github.com/mus49" className="hover:underline">github</a>
              <span>|</span>
              <a href="https://twitter.com/vrdhhn" className="hover:underline">twitter</a>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  )
}

