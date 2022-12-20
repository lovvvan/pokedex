import "./DataResult.css";

function DataResult({
  filteredData,
  setQuery,
  setFilteredData,
  handleFetchPokemon,
}) {
  return (
    <div className="dataResult">
      {filteredData?.map((pokemon) => {
        return (
          <div
            className="dataResult__item"
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
