import type { CLICommand } from "./state.js";

import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commmandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedax.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the names of 20 new location areas in the Pokemon world",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the names of 20 previous location areas in the Pokemon world",
      callback: commandMapB, 
    },
    explore: {
      name: "explore <loaction_name>",
      description: "Displays the name of pokemons that can be found in given location area.",
      callback: commandExplore, 
    },
    catch: {
      name: "catch <pokemon_name>",
      description: "Attempt to catch a pokemon and add it to your pokedex",
      callback: commandCatch, 
    },
    inspect: {
      name: "inspect <pokemon_name>",
      description: "View information about a caught pokemon",
      callback: commmandInspect, 
    },
    pokedax: {
      name: "pokedax <pokemon_name>",
      description: "View a list of all caught pokemons",
      callback: commmandInspect, 
    }
  };
}



