import { PokedexService } from "./service.js";
import {
  pokemonPhoto,
  pokemonBody,
  pokemonTypes,
  cardBase,
  carregarMaisButton,
} from "./components.js";

export const pokemonsFetched = [];
export const currentPokemon = [];

const service = new PokedexService();
export const pokemonList = document.getElementById("list");
export const pokemonDetail = document.getElementById("detail");

const cardComponent = (pokemon) => {
  const photo = pokemonPhoto(pokemon.number, pokemon.photo);
  const body = pokemonBody(pokemon.name, pokemon.number);
  const types = pokemonTypes(pokemon.number, pokemon.types);
  const card = cardBase(pokemon.number, [photo, body, types]);
  return card;
};

export const getMorePokemons = async (url) => {
  const pokemons = await service.getAllPokemons(url.replace(service.API, "/"));
  pokemonsFetched.push(...pokemons.pokemons);

  const newHtmlBody = pokemons.pokemons.map(cardComponent);
  const carregarMais = carregarMaisButton(pokemons.next);

  pokemonList.removeChild(document.getElementById("loadMore"));

  newHtmlBody.forEach((child) => pokemonList.appendChild(child));
  pokemonList.appendChild(pokemons.next ? carregarMais : "");
};

async function renderPokemons() {
  pokemonDetail.classList.add("hidden");
  pokemonList.classList.remove("w-[70%]");
  pokemonList.classList.add("w-auto");

  const pokemons = await service.getAllPokemons("pokemon?limit=20");
  pokemonsFetched.push(...pokemons.pokemons);
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
