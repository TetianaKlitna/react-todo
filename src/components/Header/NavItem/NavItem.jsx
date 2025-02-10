import styles from "./NavItem.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function NavItem({ path, isActive, text, imgIcon, altText}) {
  return (
    <NavLink to={path} className={
      clsx( styles["link-img"], "center-flex", isActive ? "smooth-border": "plain-border")
    }>
      <img className={styles["nav-img"]} src={imgIcon} alt={altText} />
      <span>{text}</span>
    </NavLink>
  );
}

NavItem.propTypes = {
  path: PropTypes.string,
  isActive: PropTypes.bool,
  text: PropTypes.string,
  imgIcon: PropTypes.string,
  altText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default NavItem;
