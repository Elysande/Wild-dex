interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const pokemon = pokemonList[pokemonIndex];
  if (!pokemon) return null;
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => {
            setPokemonIndex(index);
            if (pokemon.name.toLocaleLowerCase() === "pikachu") {
              alert("pika pikachu !!!");
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
