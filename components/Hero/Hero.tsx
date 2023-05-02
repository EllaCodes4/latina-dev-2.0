import styles from "./Hero.module.css";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Hero() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <h1>Latina Dev</h1>
      <div className={styles.description}>
        <p>Latina Dev is an open-source directory of Latina software engineers at the student, IC, and leadership levels. Our goal is to increase visibility and access to valuable opportunities.</p>
      </div>
      <Link
        href="https://github.com/FrancesCoronel/latina-dev"
        aria-label="Latina Dev"
        target={"_blank"}
        className={styles.contributeLink}
      >
        Contribute on GitHub <FontAwesomeIcon icon={faGithub} />
      </Link>
    </section>
  );
}