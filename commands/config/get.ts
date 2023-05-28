import { Command } from "../../deps.ts";
import { loadConfig } from "../../lib/load_config.ts";

export class GetCommand extends Command {
  constructor() {
    super();

    this.description("Print the value of a given configuration key")
      .arguments("<key:string>")
      .action(async (_, key) => {
        const config = await loadConfig();

        console.log(config[key]);
      })
      .reset();
  }
}
