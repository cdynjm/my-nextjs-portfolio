// app/api/ai/route.ts

import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "@/lib/prompt";
import { NextRequest } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const PRIMARY_MODEL = "gemini-3.5-flash-lite";
const FALLBACK_MODEL = "gemini-3.1-flash-lite";

const generateWithModel = async (
  model: string,
  text: string,
) => {
  return await ai.models.generateContent({
    model,
    contents: text,
    config: {
      systemInstruction: systemPrompt,
      temperature: 0.2,
      maxOutputTokens: 500,
    },
  });
};

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (typeof text !== "string" || !text.trim()) {
      return Response.json(
        { error: "Missing text." },
        { status: 400 },
      );
    }

    const userText = text.trim();

    /*
     * ============================================================
     * PRIMARY MODEL
     * Gemini 3.5 Flash-Lite
     * ============================================================
     */
    try {
      console.log(`Trying primary model: ${PRIMARY_MODEL}`);

      const primaryResponse = await generateWithModel(
        PRIMARY_MODEL,
        userText,
      );

      const responseText = primaryResponse.text?.trim() ?? "";

      /*
       * Treat an empty response as a failure so the fallback
       * model gets a chance to respond.
       */
      if (!responseText) {
        throw new Error(
          `${PRIMARY_MODEL} returned an empty response.`,
        );
      }

      console.log(
        `Primary model succeeded: ${PRIMARY_MODEL}`,
      );

      return Response.json({
        response: responseText,
        model: PRIMARY_MODEL,
      });
    } catch (primaryError) {
      console.error(
        `Primary Gemini model failed (${PRIMARY_MODEL}):`,
        primaryError,
      );
    }

    /*
     * ============================================================
     * FALLBACK MODEL
     * Gemini 3.1 Flash-Lite
     * ============================================================
     */
    try {
      console.log(`Trying fallback model: ${FALLBACK_MODEL}`);

      const fallbackResponse = await generateWithModel(
        FALLBACK_MODEL,
        userText,
      );

      const responseText =
        fallbackResponse.text?.trim() ?? "";

      if (!responseText) {
        throw new Error(
          `${FALLBACK_MODEL} returned an empty response.`,
        );
      }

      console.log(
        `Fallback model succeeded: ${FALLBACK_MODEL}`,
      );

      return Response.json({
        response: responseText,
        model: FALLBACK_MODEL,
      });
    } catch (fallbackError) {
      console.error(
        `Fallback Gemini model failed (${FALLBACK_MODEL}):`,
        fallbackError,
      );

      return Response.json(
        {
          error: "Failed to generate a response from the AI.",
        },
        { status: 500 },
      );
    }
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch AI response.";

    return Response.json(
      { error: message },
      { status: 500 },
    );
  }
}