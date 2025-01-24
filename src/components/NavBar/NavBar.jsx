import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import AddImg from "../../assets/add-img.svg?react";
import HomeImg from "../../assets/home-img.svg?react";

function NavBar({ activeItemMenu, onClickItemMenu }) {
  return (
    <nav className={styles["menu-bar"]}>
      <ul>
        <li
          className={activeItemMenu === "home" ? styles.active : ""}
          onClick={() => onClickItemMenu("home", "/")}
        >
          <Link to="/" className={styles["link-img"]}>
            <span>
              <HomeImg
                alt="Return to Homepage Icon"
                height="30px"
                width="30px"
              />
            </span>
            <span>Go Home</span>
          </Link>
        </li>
        <li
          className={activeItemMenu === "add" ? styles.active : ""}
          onClick={() => onClickItemMenu("add", "/new")}
        >
          <Link to="/new" className={styles["link-img"]}>
            <span>
              <AddImg alt="Add New Todo Icon" height="30px" width="30px" />
            </span>
            <span>Create ToDo</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
