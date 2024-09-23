import { NextResponse } from "next/server";
declare module "node-fetch";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "happiness";

  const apiKey = process.env.QUOTE_API_KEY;
  if (!apiKey) {
    console.error("API key not configured");
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching quote:", error);
    return NextResponse.json({ error: "Failed to fetch quote" }, { status: 500 });
  }
}
