const pokemonBgColorByTypeEnum = {
  normal: "bg-Neutral-500",
  fire: "bg-Rose-500",
  water: "bg-Sky-500",
  electric: "bg-Yellow-500",
  grass: "bg-Lime-700",
  ice: "bg-Sky-500",
  fighting: "bg-Red-500",
  poison: "bg-Fuchsia-500",
  ground: "bg-Stone-700",
  flying: "bg-Sky-500",
  psychic: "bg-Fuchsia-500",
  bug: "bg-Lime-500",
  rock: "bg-Stone-500",
  ghost: "bg-Gray-500",
  dark: "bg-Gray-800",
  steel: "bg-Zinc-500",
  fairy: "bg-Rose-300",
};

const setAttributeClasses = (element, classes) => {
  if (classes && classes.length > 0) {
    classes.forEach((className) => element.classList.add(className));
  }
};

const carregarMaisButton = (url) => {
  const div = document.createElement("div");
  div.id = "loadMore";
  setAttributeClasses(div, [
    "w-full",
    "flex",
    "items-center",
    "justify-center",
  ]);

  const button = document.createElement("button");
  setAttributeClasses(button, [
    "text-black",
    "bg-slate-100",
    "hover:bg-slate-200",
    "focus:ring-4",
    "focus:ring-blue-300",
    "font-medium",
    "rounded-lg",
    "text-sm",
    "px-5",
    "py-2.5",
    "me-2",
    "mb-2",
    "focus:outline-none",
  ]);
  button.textContent = "Carregar Mais";
  button.addEventListener("click", () => getMorePokemons(url));

  div.appendChild(button);
  return div;
};

const cardBase = (id, children) => {
  const div = document.createElement("div");
  div.id = `card-pokemon-${id}`;
  setAttributeClasses(div, [
    "w-52",
    "h-44",
    "rounded-2xl",
    "bg-slate-50",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-2",
  ]);

  children.forEach((child) => div.appendChild(child));
  return div;
};

const pokemonBody = (name, number) => {
  const div = document.createElement("div");
  div.id = `body-pokemon-${number}`;
  setAttributeClasses(div, ["gap-2"]);

  const numberParagraph = document.createElement("p");
  setAttributeClasses(numberParagraph, [
    "text-center",
    "text-gray-500",
    "font-bold",
    "text-xs",
  ]);
  numberParagraph.textContent = `Nº${number}`;

  const nameParagraph = document.createElement("p");
  setAttributeClasses(nameParagraph, [
    "text-center",
    "text-blue-950",
    "font-bold",
    "text-2xl",
  ]);
  nameParagraph.textContent = name;

  div.appendChild(numberParagraph);
  div.appendChild(nameParagraph);
  return div;
};

const pokemonPhoto = (id, image) => {
  const div = document.createElement("div");
  div.id = `image-pokemon-${id}`;
  setAttributeClasses(div, ["w-16", "h-16"]);

  const img = document.createElement("img");
  setAttributeClasses(img, ["object-fit", "h-16", "w-16"]);
  img.src = image;
  img.alt = "pokemon-photo";

  div.appendChild(img);
  return div;
};

const pokemonTypes = (id, types) => {
  const div = document.createElement("div");
  div.id = `types-pokemon-${id}`;
  setAttributeClasses(div, ["flex", "flex-wrap", "justify-center", "gap-1"]);

  types.forEach((type) => {
    const p = document.createElement("p");
    setAttributeClasses(p, [
      `rounded-md`,
      `text-center`,
      `font-bold`,
      `uppercase`,
      `text-xs`,
      "text-white",
      pokemonBgColorByTypeEnum[type].toLowerCase(),
      `p-2`,
    ]);
    p.textContent = type;
    div.appendChild(p);
  });

  return div;
};
