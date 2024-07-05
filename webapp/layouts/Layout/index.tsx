'use client'
import { useLaunchStore } from '@/stores'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import { NextFont } from 'next/dist/compiled/@next/font'
import { Footer, Header } from '../index'

const theme = createTheme({
  /** Put your mantine theme override here */
})

type LayoutProps = {
  inter: NextFont
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { inter, children } = props
  const { mode, lang } = useLaunchStore()

  return (
    <html lang={lang} suppressHydrationWarning={true}>
      <body className={inter.className}>
        <MantineProvider
          theme={theme}
          forceColorScheme={mode == 'dark' ? 'dark' : 'light'}
          defaultColorScheme={mode}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
export default Layout
