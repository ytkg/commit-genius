import { OpenAI } from "../deps.ts";

export const getCommitMessageSuggestion = async (
  openaiAccessToken: string,
  diffText: string,
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
  `

  const chatCompletion = await openAI.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": systemContent,
      },
      { "role": "user", "content": `${diffText}` },
    ],
  });

  return chatCompletion.choices[0].message.content;
};
