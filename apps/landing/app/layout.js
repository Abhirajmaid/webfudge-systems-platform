import './globals.css'

export const metadata = {
  title: 'Webfudge Platform',
  description: 'Welcome to Webfudge Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
