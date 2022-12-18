import { useState } from "react";
import DataResult from "./DataResult";

import SearchInput from "./SearchInput";

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

  return (
    <>
      <SearchInput
        placeholder={placeholder}
        handleFilter={handleFilter}
        data={data}
        query={query}
      />
      <DataResult
        filteredData={filteredData}
        setQuery={setQuery}
        setFilteredData={setFilteredData}
        handleFetchPokemon={handleFetchPokemon}
      />
    </>
  );
}

export default SearchBar;
