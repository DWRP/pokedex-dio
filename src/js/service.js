import { Pokemon } from "./model.js";
export class PokedexService {
  API = "https://pokeapi.co/api/v2/";

  pokemonDetailsToPokemon(pokeDetail) {
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const pokemonDetails = {
      number: pokeDetail.id,
      name: pokeDetail.name,
      types,
      type: types[0],
      photo: pokeDetail.sprites.other.dream_world.front_default,
      abilities: pokeDetail.abilities.map(ability => ({
        name: ability.ability.name,
        isHidden: ability.is_hidden,
      })),
      height: `${pokeDetail.height * 10}m`,
      weight: `${pokeDetail.weight}Kg`
    };

    return new Pokemon(pokemonDetails);
  }

  async fetchApi(endpoint) {
    const fetched = await fetch(this.API + endpoint.replace("/", ""));
    return await fetched.json();
  }

  async getPokemonDetail(endpoint) {
    const pokemon = await this.fetchApi(endpoint);

    return this.pokemonDetailsToPokemon(pokemon);
  }

  async getAllPokemons(url) {
    const pokemons = await this.fetchApi(url);
    const allPokemonPromises = await pokemons.results.map(
      async (pokemon) =>
        await this.getPokemonDetail(pokemon.url.replace(this.API, "/"))
    );
    const pokemonsWithDetails = await Promise.all(allPokemonPromises);

    return {
      previous: pokemons.previous ? String(pokemons.previous) : null,
      next: pokemons.next ? String(pokemons.next) : null,
      pokemons: pokemonsWithDetails,
    };
  }
}
