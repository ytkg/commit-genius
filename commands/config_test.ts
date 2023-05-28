import { assertEquals } from "../dev_deps.ts";
import { ConfigCommand } from "./config.ts";

const command = new ConfigCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Display or change configuration settings for cg.

  Commands:

    set   <key> <value>  - Update configuration with a value for the given key
    get   <key>          - Print the value of a given configuration key       
    list                 - Print a list of configuration keys and values      
`,
  );
});
