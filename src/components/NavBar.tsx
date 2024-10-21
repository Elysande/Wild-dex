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
  return (
    <div>
      <button
        type="button"
        onClick={() => setPokemonIndex(pokemonIndex - 1)}
        style={{ visibility: pokemonIndex === 0 ? "hidden" : "visible" }}
      >
        Précédent
      </button>
      <button
        type="button"
        onClick={() => setPokemonIndex(pokemonIndex + 1)}
        style={{
          visibility:
            pokemonIndex === pokemonList.length - 1 ? "hidden" : "visible",
        }}
      >
        Suivant
      </button>
    </div>
  );
}

export default NavBar;
