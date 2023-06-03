export type Model = "gpt-3.5-turbo" | "gpt-4";

export type Config = {
  api_key?: string;
  model?: Model;
  [key: string]: string | undefined;
};
