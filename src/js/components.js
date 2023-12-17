const pokemonTypesEnum = {
  normal: "bg-amber-500",
  fighting: "bg-slate-300",
  flying: "bg-rose-500",
  poison: "bg-purple-700",
  ground: "bg-teal-300",
  rock: "bg-stone-600",
  bug: "bg-lime-200",
  ghost: "bg-gray-400",
  steel: "bg-stone-800",
  fire: "bg-orange-600",
  grass: "bg-green-400",
  electric: "bg-yellow-200",
  psychic: "bg-fuchsia-400",
  water: "bg-sky-400",
  ice: "bg-sky-200",
  dragon: "bg-red-600",
  dark: "bg-slate-900",
  fairy: "bg-lime-400",
  unknown: "bg-gray-100",
  shadow: "bg-zinc-400",
};

const carregarMaisButton = (url) => `
    <div id="loadMore" class="w-full flex items-center justify-center">
        <button
            class="text-black bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick="getMorePokemons('${url}')"
        >
            Carregar Mais
        </button>
    </div>
`;

const cardBase = (id, children) => `
    <div
        id="card-pokemon-${id}"
        class="w-52 h-44 rounded-2xl bg-slate-50 flex flex-col items-center justify-center gap-2"
    >
        ${children}
    </div>
`;

const pokemonBody = (name, number) => `
    <div id="body-pokemon-${number}" class="gap-2">
        <p class="text-center text-gray-500 font-bold text-xs">Nº${number}</p>
        <p class="text-center text-blue-950 font-bold text-2xl">${name}</p>
    </div>
`;

const pokemonPhoto = (id, image) => `
    <div
        id="image-pokemon-${id}"
        class="w-16 h-16"
    >
        <img class="object-fit h-16 w-16" src="${image}" alt="pokemon-photo" />
    </div>
`;

const pokemonTypes = (id, types) => `
    <div id="types-pokemon-${id}" class="flex flex-wrap justify-center gap-1">
        ${types
          .map(
            (type) => `
            <p
                class="rounded-md text-center font-bold uppercase text-xs ${pokemonTypesEnum[type]} p-2"
            >
                ${type}
            </p>`
          )
          .join("")}  
    </div>
`;
