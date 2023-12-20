const service = new PokedexService();
const pokemonList = document.getElementById("list");

const cardComponent = (pokemon) => {
  const photo = pokemonPhoto(pokemon.number, pokemon.photo);
  const body = pokemonBody(pokemon.name, pokemon.number);
  const types = pokemonTypes(pokemon.number, pokemon.types);
  const card = cardBase(pokemon.number, [photo, body, types]);
  return card;
};

const getMorePokemons = async (url) => {
  const pokemons = await service.getAllPokemons(url.replace(service.API, "/"));

  const newHtmlBody = pokemons.pokemons.map(cardComponent);
  const carregarMais = carregarMaisButton(pokemons.next);

  pokemonList.removeChild(document.getElementById("loadMore"));

  newHtmlBody.forEach((child) => pokemonList.appendChild(child));
  pokemonList.appendChild(pokemons.next ? carregarMais : "");
};

async function renderPokemons() {
  const pokemons = await service.getAllPokemons("pokemon?limit=20");

  const newHtmlBody = pokemons.pokemons.map(cardComponent);
  const carregarMais = carregarMaisButton(pokemons.next);

  newHtmlBody.forEach((child) => pokemonList.appendChild(child));
  pokemonList.appendChild(pokemons.next ? carregarMais : "");
}

const main = async () => {
  try {
    await renderPokemons();
  } catch (error) {
    console.error(error);
  }
};

main();
