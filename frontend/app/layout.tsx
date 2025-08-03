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
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Vernon Cyber Security Solutions
            </h1>
            <p className="text-lg text-center mb-12">
              Professional cybersecurity services for small and medium businesses in Vernon, BC. Expert security assessments, compliance consulting, and incident response.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4">
  
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          {children}
        </ThemeProvider>
        </div>
        <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Vernon Cyber Security Solutions. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </footer>
       
         
  
      </body>
    </html>
  )
}
