import { assertEquals } from "../../dev_deps.ts";
import { ListCommand } from "./list.ts";

const command = new ListCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Print a list of configuration keys and values
`,
  );
});
