import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Noobthey</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href="/">Home</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.tsx</code>
        </p>
      </main>
    </div>
  )
}