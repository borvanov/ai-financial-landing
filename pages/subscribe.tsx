import Head from "next/head";
import Form from "react-bootstrap/Form";

import styles from "@/styles/subscribe.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";
import Image from "next/image";

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
      <main className={`${styles.container} content`}>
        <div className={styles.part}>
          <h2 className="block-header">Join our waiting list</h2>
          <p className={styles.subheader}>
            We are going to notify you via email once we setup everything for
            the application. You will be in the list of those who receive the
            first access to the app.
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Let us know who you are</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Type your email" />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <button className="primary" type="submit">
              Add me to the waiting list
            </button>
          </Form>
        </div>

        <div className={`${styles.part} ${styles.imageContainer}`}>
          <Image
            className={styles.image}
            fill
            alt="Templates image"
            src="/assets/images/screen-6.png"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
