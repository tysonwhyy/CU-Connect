import styles from "./home.module.css";
import Nav from "../components/Nav.tsx";

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Nav />
        <div className={styles.row}>
          <div className={`${styles.box} ${styles.white}`}>
            <div className={styles.boxText}>
              <p>Find a group of friends</p>
              <p>for your hobbies</p>
            </div>
          </div>
          <div className={`${styles.box} ${styles.gray}`}></div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.box} ${styles.gray}`}></div>
          <div className={`${styles.box} ${styles.white}`}>
            <div className={styles.boxText}>
              <p>Share information</p>
              <p>about your hobbies</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.box} ${styles.white}`}>
            <div className={styles.boxText}>
              <p>Meet up & hang out</p>
              <p>with other students</p>
            </div>
          </div>
          <div className={`${styles.box} ${styles.gray}`}></div>
        </div>
      </div>
    </>
  );
}
