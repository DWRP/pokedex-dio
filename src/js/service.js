class PokedexService {
  API = "https://pokeapi.co/api/v2/";

  pokemonDetailsToPokemon(pokeDetail) {
    const number = pokeDetail.id;
    const name = pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    const photo = pokeDetail.sprites.other.dream_world.front_default;

    return new Pokemon(number, name, type, types, photo);
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
