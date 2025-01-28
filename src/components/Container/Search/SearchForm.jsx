import styles from "./SearchForm.module.css";
import InputWithLabel from "../Input/InputWithLabel";
import { useState } from "react";

function SearchForm({ setNewFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setNewFilter(searchTerm);
  };

  const handleShowAll = () => {
    setNewFilter("");
    setSearchTerm("");
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        placeholder="Enter your search term"
        onInputChange={(e) => setSearchTerm(e.target.value)}
      ></InputWithLabel>
      <button className={styles["btn"]} type="submit" disabled={!searchTerm}>
        <img
          src="src/assets/search-btn.svg"
          height="25px"
          width="25px"
          alt="Search Item Icon"
        />
        <span>Search</span>
      </button>
      <button className={styles["btn"]} type="button" onClick={handleShowAll}>
        <img
          src="src/assets/remove-filter-btn.svg"
          height="25px"
          width="25px"
          alt="Show All Icon"
        />
        <span>Show All</span>
      </button>
    </form>
  );
}

export default SearchForm;
