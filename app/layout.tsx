// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@/components/providers/Providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Perkumpulan Bekam Indonesia - Standar Profesional Praktik Bekam',
    template: '%s | Persatuan Bekam Indonesia'
  },
  description: 'Bergabung dengan ribuan praktisi bekam tersertifikasi yang berkomitmen memberikan layanan terbaik dan terpercaya di Indonesia.',
  keywords: ['bekam', 'sertifikasi bekam', 'praktisi bekam', 'hijamah', 'pengobatan islami'],
  authors: [{ name: 'Perkumpulan Bekam Indonesia' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Perkumpulan Bekam Indonesia'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}