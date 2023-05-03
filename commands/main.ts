import { Command, ValidationError } from "../deps.ts";
import { getDiffText } from "../lib/get_diff_text.ts";
import { getCommitMessageSuggestion } from "../lib/get_commit_message_suggestion.ts";

export class MainCommand extends Command {
  constructor() {
    super();
    this.name("cg")
      .env("OPENAI_ACCESS_TOKEN=<value:string>", "OPENAI ACCESS TOKEN")
      .env("OPENAI_API_KEY=<value:string>", "OPENAI API KEY")
      .action(async (options) => {
        const apiKey = options.openaiAccessToken || options.openaiApiKey;

        if (apiKey === undefined) {
          throw new ValidationError(
            "Any of the environment variables are required",
          );
        }

        const diffText = await getDiffText();
        const commitMessageSuggestion = await getCommitMessageSuggestion(
          apiKey,
          diffText,
        );

        console.log(commitMessageSuggestion);
      });
  }
}
