import './globals.css'

export const metadata = {
  title: 'Framer Motions in Nextjs13.2',
  description: 'animated text',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
