import Head from "next/head";
import Form from "react-bootstrap/Form";

import styles from "@/styles/faq.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";

export default function Support() {
  const supportOptions = [
    "Technical support",
    "Advertisement",
    "Functional support",
    "Other",
  ];

  return (
    <>
      <Head>
        <title>AI Financial — Write to support</title>
        <meta name="description" content="Support service for AI Financial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>
        <section className="content">
          <span className="block-subheader">Chat with us</span>
          <h2 className="block-header">Support</h2>

          <Form>
            <Form.Group className="mb-3" controlId="topic">
              <Form.Label>Topic</Form.Label>
              <Form.Select defaultValue={supportOptions[0]}>
                {supportOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                aria-multiline
                placeholder="Enter your message"
              />
            </Form.Group>

            <button className="primary" type="submit">
              Send
            </button>
          </Form>
        </section>
      </main>
      <Footer />
    </>
  );
}
