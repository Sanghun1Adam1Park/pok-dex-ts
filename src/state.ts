import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...arg: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextlocations: string;
  prevlocations: string;
  user: {
    pokedex: Record<string, Pokemon>; 
  }
};

export function initState(interval: number = 1000 * 10) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const commands = getCommands();

  return {
    readline: rl,
    commands: commands,
    pokeapi: new PokeAPI(interval),
    nextlocations: "",
    prevlocations: "",
    user: { pokedex: {} },
  } satisfies State;
}