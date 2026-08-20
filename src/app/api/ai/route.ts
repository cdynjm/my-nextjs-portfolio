// app/api/ai/route.ts
import Groq from "groq-sdk";
import { systemPrompt } from "@/lib/prompt";
import { NextRequest } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return Response.json({ error: "Missing text." }, { status: 400 });
    }

    const createCompletion = async (
      messages: Groq.Chat.ChatCompletionMessageParam[],
    ) => {
      try {
        return await groq.chat.completions.create({
          model: "groq/compound",
          messages,
          temperature: 0.5,
          max_tokens: 50,
        });
      } catch {
        return await groq.chat.completions.create({
          model: "groq/compound-mini",
          messages,
          temperature: 0.5,
          max_tokens: 50,
        });
      }
    };

    const messages: Groq.Chat.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: text,
      },
    ];

    const completion = await createCompletion(messages);

    return Response.json({
      response:
        completion.choices[0]?.message?.content ?? "⚠️ No response from AI.",
    });
  } catch (error: unknown) {
    console.error("Groq Error:", error);
    const message = error instanceof Error ? error.message : "Failed to fetch AI response.";
    return Response.json({ error: message }, { status: 500 });
  }
}