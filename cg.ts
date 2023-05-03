import { MainCommand } from "./commands/main.ts";
import { VERSION } from "./version.ts";

new MainCommand()
  .version(`v${VERSION}`)
  .parse(Deno.args);
