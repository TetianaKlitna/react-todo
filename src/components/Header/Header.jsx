import styles from "./Header.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import NavMenu from "./NavMenu/NavMenu";
import ToogleTheme from "./ToogleTheme/ToogleTheme";

import { icons } from "../../utils/icons";

function Header({ activeItemMenu }) {
  return (
    <header>
      <ul className={clsx(styles["nav-menu"], "no-style-list")}>
        <li>
          <HeaderLogo
            imgIcon={icons.header}
            height="80px"
            width="80px"
            altText="Logo ToDo List"
            text="Ibis Todo List"
          />
        </li>
        <li>
          <NavMenu activeItemMenu={activeItemMenu} />
        </li>
        <li>
          <ToogleTheme />
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  activeItemMenu: PropTypes.string,
};

export default Header;
