import "./Pokemon.css";

function Pokemon({ pokemon }) {
  return (
    <div className="Pokemon">
      <h1>{pokemon?.name.toUpperCase()}</h1>
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
    </div>
  );
}

export default Pokemon;
