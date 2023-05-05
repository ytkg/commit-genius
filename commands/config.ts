import { Command, HelpCommand } from "../deps.ts";
import { SetCommand } from "./config/set.ts";
import { GetCommand } from "./config/get.ts";
import { ListCommand } from "./config/list.ts";

export class ConfigCommand extends Command {
  constructor() {
    super();
    this.description("Display or change configuration settings for cg.")
      .default("help")
      .command("help", new HelpCommand().hidden())
      .command("set", new SetCommand())
      .command("get", new GetCommand())
      .command("list", new ListCommand())
      .reset();
  }
}
