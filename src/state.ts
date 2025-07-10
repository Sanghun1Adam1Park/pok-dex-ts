import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextlocations: string;
  prevlocations: string;
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const commands = getCommands();

  return {
    readline: rl,
    commands: commands,
    pokeapi: new PokeAPI(),
    nextlocations: "",
    prevlocations: "",
  };
}