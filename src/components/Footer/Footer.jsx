import styles from "./Footer.module.css";

function Footer() {
  return (
    <p className={styles["centered"]}>
    {`Built with React, Vite, and fueled by Coffee! \u00A9 Tetiana Klitna ${new Date().getFullYear()}`}
    </p>
  );
}

export default Footer;
