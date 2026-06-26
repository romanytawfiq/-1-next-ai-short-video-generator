import { GoogleGenAI } from "@google/genai";
import type { Interactions } from "@google/genai";

export const gemini = new GoogleGenAI({
  apiKey: process.env["NEXT_PUBLIC_GEMINI_API_KEY"],
});

export const geminiTools: Interactions.Tool[] = [
  {
    type: "google_search",
  },
];
export const geminiGenerationConfig = {
  temperature: 1,
  //   max_output_tokens: 65536,
  top_p: 0.95,
  thinking_level: "high",
};

// async function aiGemini({input}: {input:[Interactions.UserInputStep]}) {
//     const interaction = await ai.interactions.create({
//         model: 'models/gemini-3-flash-preview',
//         input: '',
//         tools: geminiTools,
//         generation_config: geminiGenerationConfig,

//     });

//     console.log(interaction.response_format);
// }

// aiGemini({input: [
//     {type: 'user_input'}
// ]});
