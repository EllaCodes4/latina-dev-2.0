import GitHubCorner from "@/components/GitHubCorner/GitHubCorner";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Maintainers from "@/components/Maintainers/Maintainers";
import Footer from "@/components/Footer/Footer";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <GitHubCorner />
      <div className={styles.container}>
        <div className={styles.center}>
          <Hero />
          <hr className={styles.heroborder} />
          <About />
          <Maintainers />
          <Footer />
        </div>
      </div>
    </main>
  );
}