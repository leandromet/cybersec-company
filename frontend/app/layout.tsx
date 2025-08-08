import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Okanagan GeoTechSolutions - Protecting BC Businesses',
  description: 'Professional cybersecurity, AI and Maps services for small and medium businesses in Vernon, BC. Expert security assessments, compliance consulting, and incident response.',
  keywords: 'cybersecurity, GIS, Maps, GPT, Claude, AI integration, Vernon BC, small business security, compliance, cyber safety, data protection',
  authors: [{ name: 'Okanagan GeoTechSolutions' }],
  openGraph: {
    title: 'Okanagan GeoTechSolutions',
    description: 'Protecting and empowering small and medium businesses in Vernon, BC with expert cybersecurity services.',
    url: 'https://okanagantechgeo.ca',
    siteName: 'Okanagan GeoTechSolutions',
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
    <html lang="en" suppressHydrationWarning style={{ colorScheme: 'light' }}>
      <body className={`${inter.className}`} style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      {/* <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
          Okanagan GeoTechSolutions
        </h1>
        <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '3rem' }}>
          Complete technology solutions for home offices to medium businesses. Security, AI APIs, Interactive Maps, and custom development tailored to your needs.
        </p>
        </div>
      </div> */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
  
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          {children}
        </ThemeProvider>
        </div>
        <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Okanagan GeoTechSolutions. All rights reserved.
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
