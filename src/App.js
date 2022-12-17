import PokemonPage from "./pages/Home/PokemonPage"
import useData from './hooks/useData'

function App() {

  const pokemon = useData('https://pokeapi.co/api/v2/pokemon/35/');
  console.log(pokemon)

  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
