import { OpenAI } from "../deps.ts";
import { ChatCompletion } from "https://deno.land/x/openai@1.3.0/mod.ts";
import { Model } from "../types.d.ts";

interface CustomChatCompletion extends ChatCompletion {
  error: {
    message: string;
  };
}

export const getCommitMessageSuggestion = async (
  openaiAccessToken: string,
  diffText: string,
  model: Model,
): Promise<string> => {
  const openAI = new OpenAI(openaiAccessToken);

  const systemContent = `
    あなたは与えられた git diff の結果からコミットメッセージを考えるアシスタントです。
    英語でのコミットメッセージの候補を出力してください。
    それぞれの日本語訳も欲しいです。

    出力例:
    Possible commit message suggestions:
    - commit messages 1 (日本語訳1)
    - commit messages 2 (日本語訳2)
    - commit messages 3 (日本語訳3)
  `;

  const options = {
    model: model,
    messages: [
      { "role": "system", "content": systemContent },
      { "role": "user", "content": `${diffText}` },
    ],
  };

  const chatCompletion = await openAI.createChatCompletion(
    options,
  ) as CustomChatCompletion;

  if (chatCompletion.error) {
    console.log(chatCompletion.error.message);
    Deno.exit(1);
  }

  return chatCompletion.choices[0].message.content;
};
