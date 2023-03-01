import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faComments } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/home.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";
import { Advantages } from "@/src/components/home/advantages/advantages.component";
// import { ContentBlock } from "@/src/shared/components/content-block/content-block.component";

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
        <div className={`${styles.welcomeBlock} content`}>
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

        <Advantages />
      </main>

      <Footer />
    </>
  );
}
