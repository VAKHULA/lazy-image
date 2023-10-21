
import sharp from "sharp";

import styles from '../page.module.css'
import { LazyImageWrapper } from '../LazyImageWrapper'

export default async function Home() {
  return (
    <main className={styles.main}>
      <picture>
        <source srcSet="https://lazy-image.vakhula.dev/picture-sharp/api?src=https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg&w=1400" media="(min-width: 1000px)" />
        <source srcSet="https://lazy-image.vakhula.dev/picture-sharp/api?src=https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg&w=1000" media="(min-width: 600px)" />
        <source srcSet="https://lazy-image.vakhula.dev/picture-sharp/api?src=https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg&w=600" media="(min-width: 300px)" />
        <img src="https://lazy-image.vakhula.dev/picture-sharp/api?src=https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg&w=300" alt="MDN" />
      </picture>
    </main>
  )
}
