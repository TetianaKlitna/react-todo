import styles from "./TodoPageNav.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

import { getPreviousIcon, getNextIcon } from "../../../utils/assetPaths";

function TodoPageNav({ currentPage, totalPages, setCurrentPage }) {
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={clsx(styles["page-nav"], "center-flex")}>
      <button
        className={clsx(
          styles["page-btn"],
          "center-flex",
          "standard-button",
          (currentPage === 1) && "standard-button-disabled"
        )}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img
          src={getPreviousIcon()}
          height="25px"
          width="25px"
          alt="Previous Icon"
        />
      </button>
      <span className={styles["page-info"]}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={clsx(
          styles["page-btn"],
          "center-flex",
          "standard-button",
          (currentPage === totalPages) && "standard-button-disabled"
        )}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={getNextIcon()} height="25px" width="25px" alt="Next Icon" />
      </button>
    </div>
  );
}

TodoPageNav.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  setCurrentPage: PropTypes.func,

};

export default TodoPageNav;
