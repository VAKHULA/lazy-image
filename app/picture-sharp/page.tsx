import styles from '../page.module.css'

export default async function Home() {
  const src = 'https://lazy-image.vakhula.dev/pexels-ioana-motoc-4376217.jpg'
  const proxy = 'https://lazy-image.vakhula.dev/picture-sharp/api'

  return (
    <main className={styles.main}>
      <picture>
        <source
          srcSet={`${proxy}?src=${src}&w=1400`}
          media="(min-width: 1000px)"
        />
         <source
          srcSet={`${proxy}?src=${src}&w=1000`}
          media="(min-width: 600px)"
        />
         <source
          srcSet={`${proxy}?src=${src}&w=600`}
          media="(min-width: 300px)"
        />
        <img src={`${proxy}?src=${src}&w=300`} alt="MDN" />
      </picture>
    </main>
  )
}
