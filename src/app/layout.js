import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Framer Motions in Nextjs13.2',
  description: 'animated text',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      
      </body>
    </html>
  )
}
