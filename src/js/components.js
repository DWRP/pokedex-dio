import { getMorePokemons } from "./main.js";
import { createDetailComponent } from "./detail.js";

const pokemonBgColorByTypeEnum = {
  normal: "bg-neutral-500",
  fire: "bg-rose-500",
  water: "bg-sky-500",
  electric: "bg-yellow-500",
  grass: "bg-lime-700",
  ice: "bg-sky-500",
  fighting: "bg-red-500",
  poison: "bg-fuchsia-500",
  ground: "bg-stone-700",
  flying: "bg-sky-500",
  psychic: "bg-fuchsia-500",
  bug: "bg-lime-500",
  rock: "bg-stone-500",
  ghost: "bg-gray-500",
  dark: "bg-gray-800",
  steel: "bg-zinc-500",
  fairy: "bg-rose-300",
};

export const setAttributeClasses = (element, classes) => {
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
};

export const carregarMaisButton = (url) => {
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
    "cursor-pointer",
  ]);
  button.textContent = "Carregar Mais";
  button.addEventListener("click", () => getMorePokemons(url));

  div.appendChild(button);
  return div;
};

export const cardBase = (id, children) => {
  const div = document.createElement("div");
  div.id = `card-pokemon-${id}`;
  setAttributeClasses(div, [
    "w-[100%]",
    "h-44",
    "rounded-2xl",
    "bg-slate-50",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-2",
    "cursor-pointer",
    "hover:bg-slate-200",
    "md:w-72",
    "lg:w-62",
    "xl:w-52",
  ]);

  div.addEventListener("click", () => createDetailComponent(id));
  children.forEach((child) => div.appendChild(child));
  return div;
};

export const pokemonBody = (name, number) => {
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
    "capitalize",
  ]);
  nameParagraph.textContent = name;

  div.appendChild(numberParagraph);
  div.appendChild(nameParagraph);
  return div;
};

export const pokemonPhoto = (id, image, propWidth, propHeight) => {
  const [width, height] = [propWidth || "w-16", propHeight || "h-16"];
  const div = document.createElement("div");
  div.id = `image-pokemon-${id}`;
  setAttributeClasses(div, [width, height]);

  const img = document.createElement("img");
  setAttributeClasses(img, ["object-fit", width, height]);
  img.src = image;
  img.alt = "pokemon-photo";

  div.appendChild(img);
  return div;
};

export const pokemonTypes = (id, types) => {
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

export const buttonDefault = (text, isHidden) => {
  const button = document.createElement("button");
  setAttributeClasses(button, [
    "flex",
    "flex-row",
    "justify-center",
    "items-center",
    "rounded-3xl",
    "bg-gray-200",
    "py-1",
    "px-1",
    "m-2",
    "capitalize",
    "cursor-default",
    "w-28",
    "h-8",
    "text-sm",
  ]);

  const buttonText = document.createElement("span");
  buttonText.innerText = text;
  setAttributeClasses(buttonText, ["mr-4"]);

  const buttonIcon = document.createElement("img");
  buttonIcon.setAttribute("src", "src/assets/olho-vermelho.png");

  setAttributeClasses(buttonIcon, ["object-fit"]);

  button.appendChild(buttonText);

  isHidden && button.appendChild(buttonIcon);

  return button;
};

export const abilitiesCard = (abilities, hasBorder = false) => {
  const div = document.createElement("div");
  div.innerText = "Abilities";
  setAttributeClasses(div, [
    "flex",
    "flex-col",
    "justity-center",
    "items-center",
    "mt-8",
    "font-bold",
    "uppercase",
  ]);

  const divAbilities = document.createElement("div");
  setAttributeClasses(divAbilities, ["flex", "flex-wrap", 'justify-center']);

  abilities.forEach((ability) => {
    const button = buttonDefault(ability.name, ability.isHidden);
    const borderStyle = ability.isHidden ? "border-blue-500" : "border-red-500";
    setAttributeClasses(button, [
      hasBorder && borderStyle,
      hasBorder && "border-[1px]",
    ]);
    divAbilities.appendChild(button);
  });

  div.appendChild(divAbilities);

  return div;
};

export const infosCard = (infos) => {
  const div = document.createElement("div");
  setAttributeClasses(div, [
    "flex",
    "flex-col",
    "justity-center",
    "items-center",
    "mt-8",
    "font-bold",
    "uppercase",
  ]);

  const divAbilities = document.createElement("div");
  setAttributeClasses(divAbilities, ["flex", "flex-wrap", 'justify-center']);

  infos.forEach((info) => {
    const titleInfo = document.createElement("div");
    setAttributeClasses(titleInfo, ["flex", "flex-col", "items-center"]);

    const button = buttonDefault(info.value);
    titleInfo.innerText = info.title;
    titleInfo.appendChild(button);
    divAbilities.appendChild(titleInfo);
  });

  div.appendChild(divAbilities);

  return div;
};
