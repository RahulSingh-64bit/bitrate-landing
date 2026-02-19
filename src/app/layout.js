import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import './globals.css'

export const metadata = {
  title: 'bitrade - Build better workflows without the code',
  description: 'No-code AI automation platform for modern teams.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}