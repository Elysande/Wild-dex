/*interface PokemonCard {
  imgSrc: string;
  name: string;
}*/
/*const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];*/
interface Pokemon {
  pokemon: {
    imgSrc?: string;
    name: string;
  };
}

function PokemonCard({ pokemon }: Pokemon) {
  return (
    <figure>
      {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt="Bulbasaur" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
