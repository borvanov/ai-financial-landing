import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        button {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
