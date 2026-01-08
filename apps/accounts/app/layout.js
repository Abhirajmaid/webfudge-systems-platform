import './globals.css'

export const metadata = {
  title: 'Accounts - Webfudge Platform',
  description: 'Account Management & Billing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
