import { assertEquals } from "../../dev_deps.ts";
import { SetCommand } from "./set.ts";

const command = new SetCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND <key> <value>

  Description:

    Update configuration with a value for the given key
`,
  );
});
