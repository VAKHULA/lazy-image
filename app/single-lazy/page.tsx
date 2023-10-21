import styles from '../page.module.css'
import { LazyImageWrapper } from '../LazyImageWrapper'

export default function Home() {
  return (
    <main className={styles.main}>
      <LazyImageWrapper
        src={`https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg`}
        alt='pexels-ioana-motoc-4376217.jpg'
        compression={0.01}
      />
    </main>
  )
}
