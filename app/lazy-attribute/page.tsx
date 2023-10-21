import styles from './page.module.css'

const images = [
  'pexels-amina-filkins-5414038.jpg',
  'pexels-disha-sheta-4604768.jpg',
  'pexels-elina-sazonova-4555279.jpg',
  'pexels-ioana-motoc-4376217.jpg',
  'pexels-larissa-farber-7891908.jpg',
  'pexels-larissa-farber-8680928.jpg',
  'pexels-marta-dzedyshko-6341413.jpg',
  'pexels-marta-dzedyshko-7421244.jpg',
  'pexels-marta-dzedyshko-7441874.jpg',
  'pexels-secret-garden-2879815.jpg',
  'pexels-secret-garden-2879820.jpg',
  'pexels-skyler-ewing-5743922.jpg',
  'pexels-teona-swift-6913746.jpg',
]
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.masonry_grid}>
        {images.map((image, idx)=>(
          <div key={idx} className={styles.masonry_grid__item}>
            <img src={`https://lazy-image.vakhula.dev/${image}`} alt={image} loading='lazy' />
          </div>
        ))}
      </div>
    </main>
  )
}
