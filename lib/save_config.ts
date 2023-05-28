import { stringify } from "../deps.ts";

export const saveConfig = async (
  config: Record<string, unknown>,
): Promise<void> => {
  const dirPath = `${Deno.env.get("HOME")}/.config/commit_genius`;
  const filePath = `${dirPath}/config.toml`;

  await Deno.mkdir(dirPath, { recursive: true });
  await Deno.writeTextFile(filePath, stringify(config));
};
