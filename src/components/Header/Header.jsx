import styles from "./Header.module.css";
import HeaderImg from "../../assets/header-img.svg?react";

function Header() {
  return (
    <div className={styles["header-container"]}>
    <ul >
      <li>
        <HeaderImg alt="Logo ToDo List" height="80px" width="80px" />
      </li>
      <li>
        <h1 className={styles["permanent-marker-regular"]}>Ibis Todo List</h1>
      </li>
    </ul>
    </div>
  );
}

export default Header;
