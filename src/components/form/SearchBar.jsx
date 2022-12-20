import { useEffect, useState } from "react";

import DataResult from "./DataResult";
import SearchInput from "./SearchInput";
import "./SearchBar.css";

function SearchBar({ placeholder, data, handleFetchPokemon }) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function handleFilter(event) {
    const searchWord = event.target.value;
    setQuery(searchWord);
    const newFilter = data.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  }

  function clearInput() {
    setQuery("");
  }

  useEffect(() => {
    if (query === "") {
      setFilteredData([]);
    }
  }, [query]);

  return (
    <div className="SearchBar">
      <SearchInput
        placeholder={placeholder}
        handleFilter={handleFilter}
        data={data}
        query={query}
        clearInput={clearInput}
      />
      <DataResult
        filteredData={filteredData}
        setQuery={setQuery}
        setFilteredData={setFilteredData}
        handleFetchPokemon={handleFetchPokemon}
      />
    </div>
  );
}

export default SearchBar;
