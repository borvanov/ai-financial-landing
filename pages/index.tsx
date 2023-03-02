import Head from "next/head";

import styles from "@/styles/home.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";
import { Advantages } from "@/src/components/home/advantages/advantages.component";
import { Features } from "@/src/components/home/features/features.component";
import { WelcomeBlock } from "@/src/components/home/welcome-block/welcome-block.component";
import { DataCollection } from "@/src/components/home/data-collection/data-collection.component";
import { CallToAction } from "@/src/components/home/call-to-action/call-to-action.component";
import { Templates } from "@/src/components/home/templates/templates.component";

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
        <div className={styles.blockSpacesWrapper}>
          <WelcomeBlock />
          <Advantages />
          <Features />
          <DataCollection />
          <Templates />
          <CallToAction />
        </div>
      </main>

      <Footer />
    </>
  );
}
