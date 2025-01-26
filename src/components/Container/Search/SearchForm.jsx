import styles from "./SearchForm.module.css";
import InputWithLabel from "../Input/InputWithLabel";
import SearchImg from "../../../assets/search-btn.svg?react";
import ShowAllImg from "../../../assets/remove-filter-btn.svg?react";
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
        onInputChange={(e) => setSearchTerm(e.target.value)}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button className={styles.btn} type="submit" disabled={!searchTerm}>
        <SearchImg alt="Search Item Icon" width="20px" height="20px" />
        <span>Search</span>
      </button>
      <button className={styles.btn} type="button" onClick={handleShowAll}>
        <ShowAllImg alt="Show All Item Icon" width="20px" height="20px" />
        <span>Show All</span>
      </button>
    </form>
  );
}

export default SearchForm;
