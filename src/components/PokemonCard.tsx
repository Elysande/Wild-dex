const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = {
    image: pokemonList[1].imgSrc,
    name: pokemonList[1].name,
  };
  return (
    <figure>
      {pokemon.image != null ? (
        <img src={pokemon.image} alt="Bulbasaur" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;

/*function WeatherIcon() {
  const weather = "sunny";

  return <p>{weather === "sunny" ? "☀️" : "☁️"}</p>
}

export default WeatherIcon;*/
