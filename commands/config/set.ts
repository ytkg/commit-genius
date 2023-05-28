import { Command, EnumType } from "../../deps.ts";
import { loadConfig } from "../../lib/load_config.ts";
import { saveConfig } from "../../lib/save_config.ts";

export class SetCommand extends Command {
  constructor() {
    super();
    this.description("Update configuration with a value for the given key")
      .type("config", new EnumType(["api_key"]))
      .arguments("<key:config> <value:string>")
      .action(async (_, key, value) => {
        const config = await loadConfig();

        config[key] = value;

        await saveConfig(config);
      })
      .reset();
  }
}
