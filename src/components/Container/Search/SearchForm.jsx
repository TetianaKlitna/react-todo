import styles from "./SearchForm.module.css";
import PropTypes from "prop-types";
import InputWithLabel from "../Input/InputWithLabel";
import { useState } from "react";

import clsx from "clsx";

import { icons } from "../../../utils/icons";

function SearchForm({ setSearchTerm }) {
  const {search, showAll} = icons;
  const [currentInput, setCurrentInput] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(currentInput);
  };

  const handleShowAll = () => {
    setSearchTerm("");
    setCurrentInput("");
  };

  return (
    <form autoComplete="off"
      className={clsx(styles["search-form"], "plain-border")}
      onSubmit={handleSearchSubmit}
    >
      <InputWithLabel
        id={styles["search"]}
        value={currentInput}
        placeholder="Enter your search term"
        onChange={(e) => setCurrentInput(e.target.value)}
      ></InputWithLabel>
      <button
        className={clsx(
          styles["btn"],
          "center-flex",
          "standard-button",
          !currentInput && "standard-button-disabled"
        )}
        type="submit"
        disabled={!currentInput}
      >
        <img
          src={search}
          height="25px"
          width="25px"
          alt="Search Item Icon"
        />
        <span>Search</span>
      </button>
      <button
        className={clsx(styles["btn"], "center-flex", "standard-button")}
        type="button"
        onClick={handleShowAll}
      >
        <img
          src={showAll}
          height="25px"
          width="25px"
          alt="Show All Icon"
        />
        <span>All</span>
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default SearchForm;
