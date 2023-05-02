import { Command, ValidationError } from "./deps.ts";
import { getDiffText } from "./lib/get_diff_text.ts";
import { getCommitMessageSuggestion } from "./lib/get_commit_message_suggestion.ts";
import { VERSION } from "./version.ts";

new Command()
  .name("cg")
  .version(`v${VERSION}`)
  .env("OPENAI_ACCESS_TOKEN=<value:string>", "OPENAI ACCESS TOKEN")
  .env("OPENAI_API_KEY=<value:string>", "OPENAI API KEY")
  .action(async (options) => {
    if (
      options.openaiAccessToken === undefined &&
      options.openaiApiKey === undefined
    ) {
      throw new ValidationError(
        "Any of the environment variables are required",
      );
    }

    const apiKey = options.openaiAccessToken || options.openaiApiKey;

    const diffText = await getDiffText();
    const commitMessageSuggestion = await getCommitMessageSuggestion(
      apiKey,
      diffText,
    );

    console.log(commitMessageSuggestion);
  })
  .parse(Deno.args);
