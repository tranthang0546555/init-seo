'use client'
import { useLaunchStore } from '@/stores'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import { NextFont } from 'next/dist/compiled/@next/font'
import { Footer, Header } from '../index'
import styles from './index.module.css'

const theme = createTheme({
  /** Put your mantine theme override here */
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
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
          <div className={styles.root}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  )
}
export default Layout
