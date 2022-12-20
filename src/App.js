import useSWR from 'swr'
import { useContext, useState } from 'react'

import { PokemonContext } from './contexts/pokemonContext'
import Home from './pages/Home/Home'
import './assets/globals.css'
import Navbar from './components/Navigation/Navbar'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const { bgColor } = useContext(PokemonContext);
  const [apiUrlPokemon, setApiUrlPokemon] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const apiUrlAllPokemons = "https://pokeapi.co/api/v2/pokemon/?limit=1154"
  const { data: allPokemons, error: pokemonError, isLoading: pokemonisLoading } = useSWR(apiUrlAllPokemons, fetcher)
 
  const {
    data: pokemon,
    error,
    isLoading,
  } = useSWR(shouldFetch ? apiUrlPokemon : null, fetcher);


  if (pokemonError ) return <div>failed to load</div>
  if (pokemonisLoading ) return <div>loading...</div>

 
  function handleFetchPokemon(e, API_URL) {
    setApiUrlPokemon(API_URL);
    setShouldFetch(true);
  }

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <Navbar allPokemons={allPokemons.results} handleFetchPokemon={handleFetchPokemon}/>
      <Home pokemon={pokemon} isLoading={isLoading} shouldFetch={shouldFetch} error={error}/>
    </div>
  );
}

export default App;
