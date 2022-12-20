
# Pokédex

This is a web app where you can search for Pokémons that you want to see their evolutions of.

You can find the deployed site here:

### [https://lovisaspokedex.netlify.app/](https://lovisaspokedex.netlify.app/)

## Functionalities

Search Pokémon: You can see results while typing. However, you have to click on one one of the pokemons to pick it.


## How to run the app

To run development mode, navigate to the project directory and run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To build the app for production, run the following 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Future Plan

- Move all fetched Pokemons into the Pokemon context to reduce prop drilling, or create a new context for it.
- Add React Dynamic Routing. When searching a Pokémon it should appear in a new url created dynamically. This to be able to bookmark certain Pokemons in your browser and also use the back button in the browser to go back to the latest pokemon.
- Randomize pokemons: When entering the home page, fetch one random pokemon to show before fetching all pokemons that are searchable.
- Add the requirements for evolutions. Need to fetch the correct information about each evolutions requirements and display inbetween the evolution images in the PokemonPage. Redo the structure of how the evolutions are stored; perhaps store it inside an object instead of array so that the requirements data can be stored nicely together with the evolution.
- Fix bug where the evolutions of Pokémons that has alternative evolutions does not show. E.g. for the pokemon Evee.
- Uninstall MUI if nothing else is imported from there. Right now there is only one search icon imported which makes it unneccessary to include excess data. Perhaps use a separate SVG icon and store it in assets/icons.
- Styling :) 
