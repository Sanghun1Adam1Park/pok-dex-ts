import { State } from "./state.js";

export async function commmandInspect(state: State, ...args: string[]) {
  let name = args[0];
  const pokemon = state.user.pokedex[name];
  console.log(`Name: ${pokemon.name}`); 
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const typeInfo of pokemon.types) {
    console.log("  -", typeInfo.type.name);
  } 
}