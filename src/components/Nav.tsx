import styles from "./nav.module.css";

export default function Nav() {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.active}>Home</div>
          <div>Activities</div>
        </div>
        <div className={styles.rightContainer}>
          <div>Log in</div>
          <div>Sign up</div>
        </div>
      </div>
    </>
  );
}
