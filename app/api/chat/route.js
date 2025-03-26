// /app/api/chat/route.js (for App Router)
// or /pages/api/chat.js (for Pages Router)
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { message } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || "Sorry, something went wrong.";

  return NextResponse.json({ reply });
}
