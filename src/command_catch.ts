import { State } from "./state";

const CATCH_CHANCE_MODIFIER = 500;

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];
  console.log(`Throwing a Pokeball at ${name}...`);
  const pokemon = await state.pokeapi.fetchPokemon(name);

  const catchRoll = Math.random() * CATCH_CHANCE_MODIFIER;
  if (catchRoll > pokemon.base_experience) {
    console.log(`${name} was caught!`);
    state.user.pokedex[name] = pokemon; 
  } else {
    console.log(`${name} escaped!`);
  }
}