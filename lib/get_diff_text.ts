export const getDiffText = async (): Promise<string> => {
  const command = new Deno.Command("git", {
    args: ["diff", "--cached"],
    stdout: "piped",
    stderr: "piped",
  });

  const { stdout } = await command.output();
  const diffText = new TextDecoder().decode(stdout);

  return diffText;
};
