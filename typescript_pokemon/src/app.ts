// getElementById 정의로 가보면 HTMLElement, null을 리턴 받는걸 확인
const container: HTMLElement | null = document.getElementById("app");
const pokemons: number = 100;

interface Ipokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

const fetchData = async (): Promise<void> => {
    for (let i = 1; i <= pokemons; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id: number): Promise<void> => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon: any = await data.json();
    const pokemonType: string = pokemon.types
      .map((poke: any) => poke.type.name)
      .join(", ");
  
    const transformedPokemon: Ipokemon = {
      id: pokemon.id,
      name: pokemon.name,
      image: `${pokemon.sprites.front_default}`,
      type: pokemonType,
    };
  
    showPokemon(transformedPokemon);
  };
  
const showPokemon = (pokemon: Ipokemon): void => {
    let output: string = `
        <div class="card">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
            <h1 class="card--name">${pokemon.name}</h1>
            <span class="card--details">${pokemon.type}</span>
        </div>
        `;

    if (container) {
    container.innerHTML += output;
    }
};

fetchData();