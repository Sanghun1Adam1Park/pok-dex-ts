import { State } from "./state";

export function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.rl_interface.close();
  process.exit(0); 
}