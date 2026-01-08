import './globals.css'

export const metadata = {
  title: 'CRM - Webfudge Platform',
  description: 'Customer Relationship Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
