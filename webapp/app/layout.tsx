import '@mantine/core/styles.css'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const Layout = dynamic(() => import('@/layouts/Layout'), { ssr: false })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Layout children={children} inter={inter} />
      </body>
    </html>
  )
}
