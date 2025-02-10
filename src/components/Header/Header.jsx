import styles from "./Header.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import NavMenu from "./NavMenu/NavMenu";

import {getHeaderIcon } from "../../utils/assetPaths";

function Header({ activeItemMenu }) {
  return (
    <ul className={clsx(styles["nav-menu"], "no-style-list")}>
      <li>
        <NavMenu activeItemMenu={activeItemMenu} />
      </li>
      <li>
        <HeaderLogo
          imgIcon={getHeaderIcon()}
          height="80px"
          width="80px"
          altText="Logo ToDo List"
          text="Ibis Todo List"
        />
      </li>
    </ul>
  );
}

Header.propTypes = {
  activeItemMenu: PropTypes.string,
};

export default Header;
