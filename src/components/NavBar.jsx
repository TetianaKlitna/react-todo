import { Link } from "react-router-dom";
import styles from "./css/NavBar.module.css";
import AddImg from "../assets/add-img.svg?react";
import HomeImg from "../assets/home-img.svg?react";
import clsx from "clsx";

function NavBar({ activeItemMenu, onClickItemMenu }) {
  return (
    <nav>
      <ul className={clsx("horizontal-list", styles["menu-bar"])}>
        <li
          className="right-align"
          style={{ display: activeItemMenu === "home" ? "none" : "block" }}
          onClick={() => onClickItemMenu("home", "/")}
        >
          <Link to="/">
            <HomeImg height="30px" width="30px" />
            Go Home
          </Link>
        </li>
        <li
          className="right-align"
          style={{ display: activeItemMenu === "add" ? "none" : "block" }}
          onClick={() => onClickItemMenu("add", "/new")}
        >
          <Link to="/new">
            <AddImg height="30px" width="30px" />
            Create ToDo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
