import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  rl_interface: Interface;
  commands: Record<string, CLICommand>;
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const commands = getCommands();
  return {
    rl_interface: rl,
    commands: commands,
  };
}