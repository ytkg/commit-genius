import { OpenAI } from "../deps.ts";

export const getCommitMessageSuggestion = async (
  openaiAccessToken: string,
  diffText: string,
): Promise<string> => {
  const openAI = new OpenAI(openaiAccessToken);

  const chatCompletion = await openAI.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content":
          "あなたは与えられた git diff の結果からコミットメッセージを考えるアシスタントです。英語でのコミットメッセージの候補を出力してください。",
      },
      { "role": "user", "content": `${diffText}` },
    ],
  });

  return chatCompletion.choices[0].message.content;
};
