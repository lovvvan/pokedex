import { useState } from "react";
import About from "./About";
import Attacks from "./Attacks";
import Evolutions from "./Evolutions";
import "./PokemonInfo.css";
import SubMenuItem from "./SubMenuItem";

function PokemonInfo({ pokemonSpecies }) {
  const [activePage, setActivePage] = useState("About");

  function handleClick(pageName) {
    setActivePage(pageName);
  }

  return (
    <div className="PokemonInfo">
      <div className="PokemonInfo__inner">
        <div className="PokemonInfo__subMenu">
          <SubMenuItem
            title="About"
            handleClick={handleClick}
            activePage={activePage}
          />
          <SubMenuItem
            title="Attacks"
            handleClick={handleClick}
            activePage={activePage}
          />
          <SubMenuItem
            title="Evolutions"
            handleClick={handleClick}
            activePage={activePage}
          />
        </div>
        {activePage === "About" && <About />}
        {activePage === "Attacks" && <Attacks />}
        {activePage === "Evolutions" && (
          <Evolutions pokemonSpecies={pokemonSpecies} />
        )}
      </div>
    </div>
  );
}

export default PokemonInfo;
