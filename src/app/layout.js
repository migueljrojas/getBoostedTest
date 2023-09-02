import './globals.scss'
import { Inter } from 'next/font/google'
import { Header, Footer } from "@/components"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linear | Issue Tracking Tool',
  description: 'The issue tracking tool you\'ll enjoy using',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
