import { Metadata } from 'next'
import styles from './index.module.css'

export const metadata: Metadata = {
  title: 'Authentication page',
  description: 'Login',
}

type Props = {
  children: React.ReactNode
}

const AuthLayout = (props: Props) => {
  const { children } = props

  return <div className={styles.root}>{children}</div>
}
export default AuthLayout
