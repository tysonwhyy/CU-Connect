import styles from "./nav2.module.css";
import notificationIcon from "../assets/notification.png";
import messageTextIcon from "../assets/message-text.png";
import userIcon from "../assets/user.png";

export default function Nav() {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.leftContainer}>
          <span className={styles.hyperlink}>Upcoming</span>
          <span className={styles.hyperlink}>My Groups</span>
        </div>
        <div className={styles.middleContainer}>CU Connect</div>
        <div className={styles.rightContainer}>
          <img src={notificationIcon} alt="notification" />
          <img src={messageTextIcon} alt="message" />
          <img src={userIcon} alt="user" />
        </div>
      </div>
    </>
  );
}
