import './globals.css'

export const metadata = {
  title: 'Vendor Portal - Webfudge Platform',
  description: 'Vendor Management Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
