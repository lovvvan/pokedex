function DataResult({
  filteredData,
  setQuery,
  setFilteredData,
  handleFetchPokemon,
}) {
  return (
    <div>
      {filteredData?.map((pokemon) => {
        return (
          <div
            key={pokemon.name}
            onClick={(e) => {
              setQuery("");
              setFilteredData([]);
              handleFetchPokemon(e, pokemon.url);
            }}
          >
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DataResult;
