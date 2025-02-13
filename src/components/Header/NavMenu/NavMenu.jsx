import styles from "./NavMenu.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

import NavItem from "../NavItem/NavItem";

import { icons } from "../../../utils/icons";

function NavMenu({ activeItemMenu }) {
  const { home, add } = icons;
  return (
    <nav>
      <input type="checkbox" id={styles["hamburger"]} />
      <ul className={clsx(styles["nav-menu-items"], "no-style-list")}>
        <li>
          <NavItem
            path="/"
            isActive={activeItemMenu === "home"}
            text="Go Home"
            imgIcon={home}
            altText="Return to Homepage Icon"
          />
        </li>
        <li>
          <NavItem
            path="/new"
            isActive={activeItemMenu === "add"}
            text="Create ToDo"
            imgIcon={add}
            altText="Add New Todo Icon"
            width="30px"
            height="30px"
          />
        </li>
      </ul>
    </nav>
  );
}

NavMenu.propTypes = {
  activeItemMenu: PropTypes.string,
};

export default NavMenu;
