import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Weather from './api/weather'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Weather App!
        </h1>
        <Weather />
        </main>
    </div>
  )
}
