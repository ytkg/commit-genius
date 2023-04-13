import { Command } from "./deps.ts"
import { getDiffText } from "./lib/get_diff_text.ts";
import { getCommitMessageSuggestion } from "./lib/get_commit_message_suggestion.ts";
import { VERSION } from "./version.ts"

new Command()
  .name("cg")
  .version(`v${VERSION}`)
  .env("OPENAI_ACCESS_TOKEN=<value:string>", "OPENAI ACCESS TOKEN", {
    required: true,
  })
  .action(async (options) => {
    const diffText = await getDiffText();
    const commitMessageSuggestion = await getCommitMessageSuggestion(
      options.openaiAccessToken,
      diffText,
    );

    console.log(commitMessageSuggestion);
  })
  .parse(Deno.args);
