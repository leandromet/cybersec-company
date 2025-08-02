import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
//import { QueryProvider } from '@/components/providers/query-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
         
        </ThemeProvider>
      </body>
    </html>
  )
}
