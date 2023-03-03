import Head from "next/head";

import styles from "@/styles/faq.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";

export default function Subscribe() {
  return (
    <>
      <Head>
        <title>AI Financial — Join waiting list</title>
        <meta name="description" content="Join waiting list for AI Financial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}></main>

      <Footer />
    </>
  );
}
