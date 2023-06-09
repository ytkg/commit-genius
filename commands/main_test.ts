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

    -m, --model  <model>  - Model name       (Values: "gpt-3.5-turbo", "gpt-4")
    -d, --debug           - Print debug log                                    

  Commands:

    config   - Display or change configuration settings for cg. 
    upgrade  - Upgrade cg executable to latest or given version.

  Environment variables:

    OPENAI_ACCESS_TOKEN  <value>  - OPENAI ACCESS TOKEN  
    OPENAI_API_KEY       <value>  - OPENAI API KEY       
`,
  );
});
