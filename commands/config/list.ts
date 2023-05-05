import { Command } from "../../deps.ts";
import { loadConfig } from "../../lib/load_config.ts";

export class ListCommand extends Command {
  constructor() {
    super();
    this.description("Print a list of configuration keys and values")
      .action(async () => {
        const config = await loadConfig();

        for (const key in config) {
          console.log(`${key} = ${config[key]}`);
        }
      })
      .reset();
  }
}
