import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faComments } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/home.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";
import { ContentBlock } from "@/src/shared/components/content-block/content-block.component";

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
        <div className={styles.welcomeBlock}>
          <div className={styles.descriptionBlock}>
            <h1 className={styles.header}>
              <b>AI Financial</b>
              <br />
              takes your finances
              <br />
              <span>
                from
                <FontAwesomeIcon
                  className={styles.headerIcon}
                  icon={faMicrophone}
                />
                and
                <FontAwesomeIcon
                  className={styles.headerIcon}
                  icon={faComments}
                />
              </span>
              to organized structure.
            </h1>

            <div className={styles.descriptionContent}>
              <p className={styles.description}>
                We bring all the best from AI world to help you track your
                finances in a brand new way.
                <br />
                Chat via messages or voice with your online financial manager
                and it will keep all your spends organized.
              </p>

              <button className="primary">Try online right now</button>
            </div>
          </div>

          <div className={styles.imagesPreviewContent}>
            <div className={styles.imagesOverlay}>
              <Image
                src="/assets/images/screen-1.png"
                alt="Main screen"
                style={{
                  objectFit: "contain",
                }}
                width={400}
                height={940}
              />
              <Image
                src="/assets/images/screen-2.png"
                alt="Main screen"
                style={{
                  objectFit: "contain",
                  marginBottom: 200,
                }}
                width={400}
                height={940}
              />
            </div>
          </div>
        </div>
        <section className={styles.advantages}>
          <h2>
            5 simple reasons to start tracking your expenses
            <br />
            with <span>AI Financial</span>
          </h2>

          <div className={styles.dividerLine} />

          <div className={styles.advantagesBlock}>
            <span>
              100% data security.
              <br />
              Nothing could be steeled
            </span>
            <span>
              Native communication
              <br />
              with a chat-bot
            </span>
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
            <span>
              Quick and effective support.
              <br />
              We are online 24/7
            </span>
          </div>
        </section>

        <ContentBlock
          header="It is easy. Too easy."
          description="The app is build in respect of your time. Everything you are
          pointed to is to input the financial information in any of your
          preferred ways. It's like sending a message to your friend."
          image={{ src: "/assets/images/screen-3.jpg", alt: "Mockup" }}
        />

        <ContentBlock
          header={"Let the AI summarize all your expenses."}
          description="You don't have to care about filling lots of parameters, choosing
          categories etc. Just say everything you want to record to the
          application. The AI will take care of the rest."
          image={{ src: "/assets/images/screen-3.jpg", alt: "Mockup" }}
        />
      </main>

      <Footer />
    </>
  );
}
