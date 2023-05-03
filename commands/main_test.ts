import { assertEquals } from "../dev_deps.ts";
import { MainCommand } from "./main.ts";

const command = new MainCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: cg

  Options:

    -m, --model  <model>  - Model Type  (Default: "gpt-3.5-turbo", Values: "gpt-3.5-turbo", "gpt-4")

  Environment variables:

    OPENAI_ACCESS_TOKEN  <value>  - OPENAI ACCESS TOKEN  
    OPENAI_API_KEY       <value>  - OPENAI API KEY       
`,
  );
});
