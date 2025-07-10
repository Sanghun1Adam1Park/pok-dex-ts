import { ShallowLocations } from "./pokeapi";
import { State } from "./state";

export async function commandMap(state: State) {
  let locations: ShallowLocations;  

  if (state.nextlocations === "") {
    if (state.prevlocations === "") {
      locations = await state.pokeapi.fetchLocations()
    } else {
      throw new  Error("No more next locations");
    }
  } else {
    locations = await state.pokeapi.fetchLocations(state.nextlocations);
  }

  for (const location of locations.results) {
    console.log(location.name);
  }

  state.nextlocations = locations.next;
  state.prevlocations = locations.previous;
}

export async function commandMapB(state: State) {
  let locations: ShallowLocations;  

  if (state.prevlocations === "") {
    if (state.nextlocations === "") {
      locations = await state.pokeapi.fetchLocations()
    } else {
      throw new  Error("No more previous locations");
    }
  } else {
    locations = await state.pokeapi.fetchLocations(state.prevlocations);
  }

  for (const location of locations.results) {
    console.log(location.name);
  }

  state.nextlocations = locations.next;
  state.prevlocations = locations.previous;
}