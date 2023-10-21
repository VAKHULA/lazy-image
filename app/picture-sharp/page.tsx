
import sharp from "sharp";

import styles from '../page.module.css'
import { LazyImageWrapper } from '../LazyImageWrapper'

export default async function Home() {
  const response = await fetch('https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg')
  const buffer = await response.arrayBuffer()
  const  { format, width = 0, height = 0 } = await sharp(buffer).metadata();

  const resizedImageBuf = await sharp(buffer)
    .resize(Math.round(width * compression), Math.round(height * compression))
    .toBuffer();
    
  return (
    <main className={styles.main}>
      <picture>
        <source srcSet="https://lazy-image.vakhula.dev/picture-sharp/api?src=https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg&w=600" media="(min-width: 600px)" />
        {/* <source srcSet="logo-768.png, logo-768-1.5x.png 1.5x" /> */}
        {/* <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" /> */}
        <img src="https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg" alt="MDN" />
      </picture>
    </main>
  )
}
