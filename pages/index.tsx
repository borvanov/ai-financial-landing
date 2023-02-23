import Head from "next/head";
import styles from "@/styles/home.module.css";
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
      <main className={styles.container}>
        <h1 className={styles.header}>
          Track finances effectively
          <br />
          using the AI power<span>.</span>
        </h1>

        <p className={styles.description}>
          We bring all the best from AI world to help you track your finances{" "}
          <br />
          in a brand new way. Chat via messages or voice with your online
          financial manager
          <br />
          and it will keep all your spends organized.
        </p>

        <button className="primary">Try online right now</button>

        <section className={styles.advantages}>
          <h2>
            5 simple reasons to start tracking your expenses
            <br />
            with <span>AI Financial</span>
          </h2>

          <div className={styles.dividerLine} />

          <div className={styles.advantagesBlock}>
            <span>100% data security</span>
            <span>Native communication with a chat-bot</span>
            <span>
              The most relevant
              <br />
              spends suggestions
            </span>
            <span>
              Time-saving interface
              <br />
              and utilities
            </span>
            <span>We care about your time</span>
          </div>
        </section>
      </main>
    </>
  );
}
