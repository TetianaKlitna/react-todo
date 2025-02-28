import styles from "./NavMenu.module.css";

import clsx from "clsx";

import NavItem from "../NavItem/NavItem";

import { icons } from "../../../utils/icons";

function NavMenu() {
  const { home, add } = icons;
  return (
    <nav>
      <input type="checkbox" id={styles["hamburger"]} />
      <ul className={clsx(styles["nav-menu-items"], "no-style-list")}>
        <li>
          <NavItem
            path="."
            text="Go Home"
            imgIcon={home}
            altText="Return to Homepage Icon"
            isActive
          />
        </li>
        <li>
          <NavItem
            path="new"
            text="Create ToDo"
            imgIcon={add}
            altText="Add New Todo Icon"
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
