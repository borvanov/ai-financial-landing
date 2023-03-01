import Head from "next/head";

import styles from "@/styles/home.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";
import { Advantages } from "@/src/components/home/advantages/advantages.component";
import { Features } from "@/src/components/home/features/features.component";
import { WelcomeBlock } from "@/src/components/home/welcome-block/welcome-block.component";

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
      <main className={styles.container}>
        <WelcomeBlock />
        <Advantages />
        <Features />
      </main>

      <Footer />
    </>
  );
}
