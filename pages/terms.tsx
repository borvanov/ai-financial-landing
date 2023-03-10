import Head from "next/head";

import styles from "@/styles/faq.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";

export default function Terms() {
  return (
    <>
      <Head>
        <title>AI Financial — Terms & Conditions</title>
        <meta
          name="description"
          content="Terms & Conditions for AI Financial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}></main>

      <Footer />
    </>
  );
}
