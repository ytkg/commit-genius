import { exists, parse } from "../deps.ts";

type Config = {
  api_key?: string;
  [key: string]: string | undefined;
};

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
