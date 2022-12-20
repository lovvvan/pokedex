import SearchBar from "../form/SearchBar";
import "./Navbar.css";

function Navbar({ allPokemons, handleFetchPokemon }) {
  return (
    <nav className="nav">
      <a href="/">Pokédex</a>
      <SearchBar
        placeholder="Search Pokémon"
        data={allPokemons}
        handleFetchPokemon={handleFetchPokemon}
      />
    </nav>
  );
}

export default Navbar;
