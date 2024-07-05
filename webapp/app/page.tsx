import { Hero } from '@/components'
import styles from './page.module.css'

export default async function Home() {
  return (
    <div className={styles.main}>
      <Hero />
    </div>
  )
}
