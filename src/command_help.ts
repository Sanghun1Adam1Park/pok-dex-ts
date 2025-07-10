import { State } from "./state";

export async function commandHelp(state: State) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");

  const commands = state.commands;
  for (const commandName in commands) {
    const command = commands[commandName];
    console.log(`${command.name}: ${command.description}`);
  }
}