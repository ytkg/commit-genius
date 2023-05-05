import { assertEquals } from "../../dev_deps.ts";
import { GetCommand } from "./get.ts";

const command = new GetCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND <key>

  Description:

    Print the value of a given configuration key
`,
  );
});
