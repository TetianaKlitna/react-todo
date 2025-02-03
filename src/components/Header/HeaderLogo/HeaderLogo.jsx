import styles from "./HeaderLogo.module.css";
import PropTypes from "prop-types";
import { Fragment } from "react";

function HeaderLogo({imgIcon, height, width, altText, text}) {
  return (
    <Fragment>
      <div id={styles["logo-img"]}>
        <img
          src={imgIcon}
          height={height}
          width={width}
          alt={altText}
        />
      </div>

      <div id={styles["logo-txt"]}>
        <h1 className={styles["permanent-marker-regular"]}>{text}</h1>
      </div>
    </Fragment>
  );
}

HeaderLogo.propTypes = {
  imgIcon: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  altText: PropTypes.string,
  text: PropTypes.string,
};

export default HeaderLogo;
