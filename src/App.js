import useSWR from 'swr'
import { useContext } from 'react'

import { PokemonContext } from './contexts/pokemonContext'
import Home from './pages/Home/Home'
import './assets/globals.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const { bgColor } = useContext(PokemonContext);

  const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=1154"
  const { data: allPokemons, error: pokemonError, isLoading: pokemonisLoading } = useSWR(API_URL, fetcher)
 
  if (pokemonError ) return <div>failed to load</div>
  if (pokemonisLoading ) return <div>loading...</div>

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <Home allPokemons={allPokemons.results} />
    </div>
  );
}

export default App;
