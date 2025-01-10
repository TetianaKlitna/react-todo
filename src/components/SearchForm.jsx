import InputWithLabel from "./InputWithLabel";
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
    <form onSubmit={handleSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={(e) => setSearchTerm(e.target.value)}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button type="submit" disabled={!searchTerm}>
        Search
      </button>
      <button type="button" onClick={handleShowAll}>
        Show All
      </button>
    </form>
  );
}

export default SearchForm;
