import styles from "./Loader.module.css";

import clsx from "clsx";

function Loader() {
  return (
    <div className={clsx(styles["container-loader"], "center-flex")}>
      <div className={styles["loader"]}></div>
    </div>
  );
}
export default Loader;
