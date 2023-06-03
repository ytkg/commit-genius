import { exists, parse } from "../deps.ts";
import { Config } from "../types.d.ts";

export const loadConfig = async (): Promise<Config> => {
  const filePath = `${Deno.env.get("HOME")}/.config/commit_genius/config.toml`;
  const fileExists = await exists(filePath);

  if (!fileExists) {
    return {};
  }

  const file = await Deno.readTextFile(filePath);
  const config = parse(file) as Config;

  return config;
};
