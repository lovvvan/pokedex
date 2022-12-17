import PokemonPage from "./pages/Home/PokemonPage"
import useSWR from 'swr'
import SearchBar from './components/form/SearchBar'
import './assets/globals.css'

function App() {
  const pokemonIDtoFetch = "1"
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: pokemon, error: pokemonError, isLoading: pokemonisLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonIDtoFetch}/`, fetcher)

  if (pokemonError ) return <div>failed to load</div>
  if (pokemonisLoading ) return <div>loading...</div>

  return (
    <div className="App">
      <SearchBar />
      <PokemonPage pokemon={pokemon} />
    </div>
  );
}

export default App;
