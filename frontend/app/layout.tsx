import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vernon Cyber Security Solutions - Protecting BC Businesses',
  description: 'Professional cybersecurity services for small and medium businesses in Vernon, BC. Expert security assessments, compliance consulting, and incident response.',
  keywords: 'cybersecurity, Vernon BC, small business security, compliance, cyber safety, data protection',
  authors: [{ name: 'Vernon Cyber Security Solutions' }],
  openGraph: {
    title: 'Vernon Cyber Security Solutions',
    description: 'Protecting small and medium businesses in Vernon, BC with expert cybersecurity services.',
    url: 'https://vernoncybersec.ca',
    siteName: 'Vernon Cyber Security Solutions',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
