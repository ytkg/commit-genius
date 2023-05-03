export const getDiffText = async (): Promise<string> => {
  const command = new Deno.Command("git", {
    args: ["diff", "--cached"],
    stdout: "piped",
    stderr: "piped",
  });

  const { stdout } = await command.output();
  const diffText = new TextDecoder().decode(stdout);

  if (diffText === "") {
    console.log("Please add the file(s) to the staging area.");
    Deno.exit(1);
  }

  return diffText;
};
