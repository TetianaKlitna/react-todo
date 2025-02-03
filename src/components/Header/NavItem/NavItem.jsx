import styles from "./NavItem.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

function NavItem({ path, isActive, text, imgIcon, altText, width, height }) {
  return (
    <Link
      to={path}
      className={
        clsx( styles["link-img"], "center-flex", isActive && "smooth-border")
      }
    >
      <img className={styles["nav-img"]} src={imgIcon} alt={altText} width={width} height={height}/>
      <span>{text}</span>
    </Link>
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
