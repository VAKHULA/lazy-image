import styles from '../page.module.css'

export default async function Home() {
  const src = 'https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg'
  const proxy = 'https://lazy-image.vakhula.dev/picture-sharp-format/api'

  return (
    <main className={styles.main}>
      <picture>
        <source
          srcSet={`${proxy}?src=${src}&format=avif`}
          type="image/avif"
        />
         <source
          srcSet={`${proxy}?src=${src}&format=webp`}
          type="image/webp"
        />
        <img src={`${proxy}?src=${src}&format=jpg`} alt="MDN" />
      </picture>
    </main>
  )
}
