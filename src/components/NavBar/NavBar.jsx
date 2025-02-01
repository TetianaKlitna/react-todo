import styles from "./NavBar.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

function Header({ activeItemMenu, onClickItemMenu }) {
  return (
    <ul className={styles["nav-menu"]}>
      <li>
        <input type="checkbox" id={styles["humburger"]}/>
        <ul className={styles["nav-menu-items"]}>
          <li onClick={() => onClickItemMenu("home", "/")}>
            <Link
              to="/"
              className={
                activeItemMenu === "home"
                  ? clsx(styles.active, styles["link-img"])
                  : styles["link-img"]
              }
            >
              < img
                className = {styles["nav-img"]}
                src="src/assets/home-img.svg"
                alt="Return to Homepage Icon"
              />
              <span>Go Home</span>
            </Link>
          </li>

          <li
            onClick={() => onClickItemMenu("add", "/new")}
          >
            <Link
              to="/new"
              className={
                activeItemMenu === "add"
                  ? clsx(styles.active, styles["link-img"])
                  : styles["link-img"]
              }
            >
              <img
                className = {styles["nav-img"]}
                src="src/assets/add-img.svg"
                alt="Add New Todo Icon"
              />
              <span>Create ToDo</span>
            </Link>
          </li>
        </ul>
      </li>

      <li id={styles["logo-img"]}>
        <img
          src="src/assets/header-img.svg"
          height="80px"
          width="80px"
          alt="Logo ToDo List"
        />
      </li>

      <li id={styles["logo-txt"]}>
        <h1 className={styles["permanent-marker-regular"]}>Todo List</h1>
      </li>
    </ul>
  );
}

export default Header;
