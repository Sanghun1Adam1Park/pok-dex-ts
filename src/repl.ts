import { initState } from './state.js';

const state = initState()

export function startREPL() {
  state.rl_interface.setPrompt("Pokedex > ");
  state.rl_interface.prompt();
  const commands = state.commands;
  state.rl_interface.on("line", (input) => {
    if (input !== '') {
      const inputs: string[] = cleanInput(input);
      commands[inputs[0]]?.callback(state);
      state.rl_interface.prompt();
    } else {
      state.rl_interface.prompt();
    }
  })
}

/**
 * Split the user's input into lowercased "words" based on whitespace.
 * 
 * @param input user's input. 
 */
export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}