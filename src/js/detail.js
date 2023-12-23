import {
  pokemonPhoto,
  pokemonBody,
  pokemonTypes,
  abilitiesCard,
  infosCard,
} from "./components.js";
import {
  pokemonsFetched,
  currentPokemon,
  pokemonList,
  pokemonDetail,
} from "./main.js";

export const closeDetail = () => {
  pokemonDetail.classList.add("hidden");
  pokemonList.classList.remove("w-[70%]");
  pokemonList.classList.add("w-auto");
  pokemonList.classList.remove("hidden");
  currentPokemon.pop();
};

export function createDetailComponent(id) {
  if (window.innerWidth < 600) {
    pokemonList.classList.add("hidden");
    pokemonDetail.classList.remove("w-[30%]");
    pokemonDetail.classList.add("w-[100%]");
  } else {
    pokemonList.classList.remove("hidden");
    pokemonDetail.classList.add("w-[30%]");
    pokemonDetail.classList.remove("w-[100%]");
  }

  if (currentPokemon.length === 0) {
    pokemonDetail.classList.remove("hidden");
    pokemonList.classList.add("w-[70%]");
    pokemonList.classList.remove("w-auto");
  }

  currentPokemon.pop();
  const detailContainer = document.getElementById("detail");
  detailContainer.innerHTML = "";

  const closeContainer = document.createElement("div");
  closeContainer.classList.add(
    "w-full",
    "h-8",
    "flex",
    "justify-end",
    "px-4",
    "py-2"
  );

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "X";
  closeButton.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "w-6",
    "h-6",
    "text-sm",
    "rounded-3xl",
    "bg-gray-200",
    "hover:bg-gray-400",
    "cursor-pointer"
  );
  closeButton.addEventListener("click", closeDetail);

  closeContainer.appendChild(closeButton);

  const pokemon = pokemonsFetched.find((pokemon) => pokemon.number === id);

  currentPokemon.push(pokemon);

  const photo = pokemonPhoto(pokemon.number, pokemon.photo, "w-52", "h-72");
  const body = pokemonBody(pokemon.name, pokemon.number);
  const types = pokemonTypes(pokemon.number, pokemon.types);
  const abilities = abilitiesCard(pokemon.abilities, true);
  const infos = infosCard([
    {
      title: "Height",
      value: pokemon.height,
    },
    {
      title: "Weight",
      value: pokemon.weight,
    },
  ]);

  [closeContainer, photo, body, types, abilities, infos].forEach((item) =>
    detailContainer.appendChild(item)
  );
}
