import styles from "./NavBar.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

import HeaderImg from "../../assets/header-img.svg?react";
import AddImg from "../../assets/add-img.svg?react";
import HomeImg from "../../assets/home-img.svg?react";

function Header({activeItemMenu, onClickItemMenu}) {

  return (
    <ul className={styles["nav-menu"]}>
      <li
        onClick={() => onClickItemMenu("home", "/")}
      >
        <Link to="/" 
        className={activeItemMenu === "home" ? clsx(styles.active, styles["link-img"]) : styles["link-img"]}
        >
          <span>
            <HomeImg alt="Return to Homepage Icon" height="30px" width="30px" />
          </span>
          <span>Go Home</span>
        </Link>
      </li>

      <li
        onClick={() => onClickItemMenu("add", "/new")}
      >
        <Link to="/new" 
         className={activeItemMenu === "add" ? clsx(styles.active, styles["link-img"]) : styles["link-img"]}
        >
          <span>
            <AddImg alt="Add New Todo Icon" height="30px" width="30px" />
          </span>
          <span>Create ToDo</span>
        </Link>
      </li>
      <li>
        <HeaderImg alt="Logo ToDo List" height="80px" width="80px" />
      </li>

      <li>
        <h1 className={styles["permanent-marker-regular"]}>Todo List</h1>
      </li>
    </ul>
  );
}

export default Header;
