export const getDiffText = async (): Promise<string> => {
  const process = Deno.run({
    cmd: ["git", "diff", "--cached"],
    stdout: "piped",
  });

  const output = await process.output();
  const diffText = new TextDecoder().decode(output);

  return diffText;
};
