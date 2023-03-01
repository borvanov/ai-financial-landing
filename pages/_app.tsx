import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// const bowblyOne = Bowlby_One({
//   weight: ["400"],
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        button {
          font-family: ${poppins.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4 {
        }
      `}</style>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
