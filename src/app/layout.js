import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Shared/Navbar/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import Toaster from '@/components/Shared/Toaster'
// import Footer from '@/components/Shared/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer></Footer>
        <Toaster></Toaster>
      </body>
    </html>
  )
}
