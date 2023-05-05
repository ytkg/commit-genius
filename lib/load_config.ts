import { exists, parse } from "../deps.ts";

export const loadConfig = async (): Promise<Record<string, unknown>> => {
  const filePath = `${Deno.env.get("HOME")}/.config/commit_genius/config.toml`;
  const fileExists = await exists(filePath);

  if (!fileExists) {
    return {};
  }

  const file = await Deno.readTextFile(filePath);

  return parse(file);
};
