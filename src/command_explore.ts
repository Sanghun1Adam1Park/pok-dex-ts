import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  const name = args[0];
  const location = await state.pokeapi.fetchLocation(name);

  console.log(location.location.name);
  console.log("Found Pokemon:");
  for (const pokemon of location.pokemon_encounters) {
    console.log(` - ${pokemon.pokemon.name}`);
  }
}