import { NextResponse } from "next/server";
import { servicesData } from "../../data";


export async function POST(req) {
  try {
    const { message } = await req.json();

    const myservicesContext = servicesData
      .map((s) => `${s.name}: ${s.description}`)
      .join("\n");

    const prompt = `
      You are a helpful assistant. The following are services the company offers:

      ${myservicesContext}

      Answer the user's question using the context above when possible.

      User: ${message}
      `;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("OpenAI Error:", errText);
      return NextResponse.json({ reply: "OpenAI error" }, { status: 500 });
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "No response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ reply: "Oops! Something went wrong." }, { status: 500 });
  }
}
