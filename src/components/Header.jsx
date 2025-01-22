import styles from "./css/Header.module.css";
import HeaderImg from "../assets/header-img.svg?react";
import clsx from "clsx";

function Header() {
  return (
    <ul className="horizontal-list">
      <li className="left-align">
        <HeaderImg height="100px" width="130px" />
      </li>
      <li className="right-align">
        <h1
          className={clsx(styles["permanent-marker-regular"], styles["header"])}
        >
          Todo List
        </h1>
      </li>
    </ul>
  );
}

export default Header;
