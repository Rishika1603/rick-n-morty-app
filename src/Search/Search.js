import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e) => {
    e.preventDefault();
    updatePageNumber(1); // Reset page number on search
  };

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
      onSubmit={searchBtn} // Handle form submission
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
