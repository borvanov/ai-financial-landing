import { Poppins } from "@next/font/google";
import styles from "@/styles/header.module.css";

const poppinsBold = Poppins({ weight: "900", subsets: ["latin"] });

export const Header: React.FC = () => (
  <header className={styles.container}>
    <h1 className={poppinsBold.className}>
      F<span className={styles.logoSelection}>AI</span>NANCIAL
    </h1>
  </header>
);
