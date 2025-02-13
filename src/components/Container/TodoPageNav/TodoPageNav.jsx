import styles from "./TodoPageNav.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

import { icons } from "../../../utils/icons";

function TodoPageNav({ currentPage, totalPages, setCurrentPage }) {
  const { previous, next } = icons;
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
          "plain-border",
          (currentPage === 1) && "standard-button-disabled"
        )}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img
          src={previous}
          height="25px"
          width="25px"
          alt="Previous Icon"
        />
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={clsx(
          styles["page-btn"],
          "center-flex",
          "standard-button",
          "plain-border",
          (currentPage === totalPages) && "standard-button-disabled"
        )}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={next} height="25px" width="25px" alt="Next Icon" />
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
