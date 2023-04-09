import { Command } from "./deps.ts"
import { VERSION } from "./version.ts"

new Command()
  .name("cg")
  .version(`v${VERSION}`)
  .action(() => {
    console.log("Hello, Commit Genius!")
  })
  .parse(Deno.args);
