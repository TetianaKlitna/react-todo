import styles from "./ToogleTheme.module.css";

import useStorageState from "../../../hooks/useStorageState";
import { useEffect } from "react";

const key = "isLightTheme";

function ToogleTheme() {

  const [theme, setTheme] = useStorageState("isLightTheme", true);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    }
  }, [theme]);

  return (
    <div className={styles["toogle-position"]}>
      <input
        value={theme}
        type="checkbox"
        id={styles["toogle-theme"]}
        onInput={() => setTheme(!theme)}
      />
      <label className={styles["lbl"]} htmlFor={styles["toogle-theme"]}>
        {theme? "Dark Mode": "Light Mode"}
      </label>
    </div>
  );
}

export default ToogleTheme;
