import { Link } from "react-router-dom";

import SearchBar from "../form/SearchBar";
import "./Navbar.css";

function Navbar({ allPokemons, handleFetchPokemon }) {
  return (
    <nav className="nav">
      <Link to="/">Pokédex</Link>
      <SearchBar
        placeholder="Search Pokémon"
        data={allPokemons}
        handleFetchPokemon={handleFetchPokemon}
      />
    </nav>
  );
}

export default Navbar;
