import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Porjet Porfolio</title>
        <meta name="description" content="Création d'un portfolio pour un dévelloppeur WEB et WEB Mobil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
         <section className={styles.hero}>
          <h1> Bonjour je suis John Doe</h1>
          <h2>Développeur Web full stack</h2>
        </section>
      </header>
       
      <main>

      </main>

      <footer>
        <section>

        </section>
      </footer>
    </>
  )
}
