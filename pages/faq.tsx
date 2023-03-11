import Head from "next/head";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/faq.module.css";

import { Header } from "@/src/shared/components/header/header.component";
import { Footer } from "@/src/shared/components/footer/footer.component";

const QUESTIONS = [
  {
    question: "Is there a free",
    answer: "Yes",
  },
  {
    question: "Is there a free 2",
    answer: "Yes",
  },
];

export default function FAQ() {
  const [openedQuestion, setOpenedQuestion] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>AI Financial — FAQ</title>
        <meta
          name="description"
          content="Frequently asked question related to AI Financial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.container} content`}>
        <span className="block-subheader">FAQs</span>
        <h2 className="block-header">Frequently Asked Questions</h2>
        <p className={styles.description}>
          Have questions? We are here to help.
        </p>

        <div className={styles.questionsContainer}>
          {QUESTIONS.map(({ question, answer }, index, array) => (
            <>
              <div
                className={styles.questionContainer}
                onClick={() => {
                  if (question === openedQuestion) {
                    setOpenedQuestion(null);
                  } else {
                    setOpenedQuestion(question);
                  }
                }}
                key={question}
              >
                <span className={styles.questionText}>{question}</span>
                <FontAwesomeIcon
                  className={styles.plusIcon}
                  icon={
                    question === openedQuestion ? faMinusCircle : faPlusCircle
                  }
                />
              </div>

              {question === openedQuestion ? <p>{answer}</p> : null}

              {index !== array.length - 1 ? (
                <div className={styles.divider} />
              ) : null}
            </>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
