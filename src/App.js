import useSWR from 'swr'
import { useContext, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'

import { PokemonContext } from './contexts/pokemonContext'
import Home from './pages/Home/Home'
import './assets/globals.css'
import './App.css'
import Navbar from './components/Navigation/Navbar'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const { state } = useContext(PokemonContext);
  const [apiUrlPokemon, setApiUrlPokemon] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const bgColor = state?.species ? {backgroundColor: state?.species?.color?.name} : {backgroundColor: 'white'}

  const apiUrlAllPokemons = "https://pokeapi.co/api/v2/pokemon/?limit=1154"
  const { data: allPokemons, error: pokemonError, isLoading: pokemonisLoading } = useSWR(apiUrlAllPokemons, fetcher)
 
  if (pokemonError ) return <div>failed to load</div>
  if (pokemonisLoading ) return <div>loading...</div>

  function handleFetchPokemon(e, API_URL) {
    setApiUrlPokemon(API_URL);
    setShouldFetch(true);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root allPokemons={allPokemons.results} handleFetchPokemon={handleFetchPokemon} />} >
        <Route index element={<Home shouldFetch={shouldFetch} apiUrlPokemon={apiUrlPokemon} />} />
      </Route>
    )
  )

  return (
    <div className="App" style={bgColor}>
      <div className="bgFilter">
        {/* <Home shouldFetch={shouldFetch} apiUrlPokemon={apiUrlPokemon} /> */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

const Root = ( { allPokemons, handleFetchPokemon }) => {

  return (
    <>
      <Navbar allPokemons={allPokemons} handleFetchPokemon={handleFetchPokemon}/>
      <Outlet />
    </>
  )
}

export default App;
