import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/header.module.css";
import { Header } from "@/src/shared/components/header/header.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Financial — your financial manager</title>
        <meta
          name="description"
          content="Your personal financial manager based on AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}></main>
    </>
  );
}
