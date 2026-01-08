import './globals.css'

export const metadata = {
  title: 'Project Management - Webfudge Platform',
  description: 'Project Management Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
