// src/app/api/ai/route.ts
import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "@/lib/prompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "Missing 'text' in request body." }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "user", parts: [{ text }] },
      ],
    });

    const aiResponse =
      response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ No response from AI.";

    return NextResponse.json({ response: aiResponse });
  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch AI response." },
      { status: 500 }
    );
  }
}
