import styles from "./NavMenu.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Fragment } from "react";

import NavItem from "../NavItem/NavItem";

import { getHomeIcon, getAddIcon } from "../../../utils/assetPaths";

function NavMenu({ activeItemMenu }) {
  return (
    <Fragment>
      <input type="checkbox" id={styles["hamburger"]} />
      <ul className={clsx(styles["nav-menu-items"], "no-style-list")}>
        <li>
          <NavItem
            path="/"
            isActive={activeItemMenu === "home"}
            text="Go Home"
            imgIcon={getHomeIcon()}
            altText="Return to Homepage Icon"
            width="30px"
            height="30px"
          />
        </li>
        <li>
          <NavItem
            path="/new"
            isActive={activeItemMenu === "add"}
            text="Create ToDo"
            imgIcon={getAddIcon()}
            altText="Add New Todo Icon"
            width="30px"
            height="30px"
          />
        </li>
      </ul>
    </Fragment>
  );
}

NavMenu.propTypes = {
  activeItemMenu: PropTypes.string,
};

export default NavMenu;
