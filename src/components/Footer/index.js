import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 Educational Network Platform. All rights reserved.</p>
        <div className={styles.links}>
          <a href="/terms" className={styles.link}>
            Terms of Use
          </a>
          <a href="/privacy" className={styles.link}>
            Privacy Policy
          </a>
        </div>
        <p className={styles.author}>Made with love</p>
      </div>
    </footer>
  );
};
