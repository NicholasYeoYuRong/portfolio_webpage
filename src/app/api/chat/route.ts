import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function partsToText(msg: any) {
  if (!Array.isArray(msg.parts)) return "";
  return msg.parts
    .filter((p: any) => p?.type === "text")
    .map((p: any) => p.text ?? "")
    .join("");
}


export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function GET() {
  return Response.json({ 
    ok: true, 
    route: "/api/chat",
    envConfigured: !!process.env.DO_AGENT_ENDPOINT && !!process.env.DO_API_KEY,
    doEndpoint: process.env.DO_AGENT_ENDPOINT || "Not set",
    hasApiKey: !!process.env.DO_API_KEY
  });
}

export async function POST(req: NextRequest) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  try {
    // Parse request body
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check environment variables
    if (!process.env.DO_AGENT_ENDPOINT || !process.env.DO_API_KEY) {
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userMessages = (body.messages ?? []).map((msg: any) => ({
      role: msg.role,                     // "user" | "assistant" | "system"
      content: partsToText(msg),          // join all text parts
    }))
    .filter((msg: any) =>
      (msg.role === "user" || msg.role === "asssitant") && msg.content.trim().length > 0
    );


    // Transform the request format to match DigitalOcean's expected format
    const doRequestBody = {
      messages: userMessages,
      stream: body.stream || false,
      include_functions_info: body.include_functions_info || false,
      include_retrieval_info: body.include_retrieval_info || false,
      include_guardrails_info: body.include_guardrails_info || false,
      // Include other optional parameters that might be in the original request
      ...(body.model && { model: body.model }),
      ...(body.max_tokens && { max_tokens: body.max_tokens }),
      ...(body.temperature && { temperature: body.temperature }),
      ...(body.top_p && { top_p: body.top_p }),
    };

    // Clean up undefined fields
    Object.keys(doRequestBody).forEach(key => {
      if (doRequestBody[key] === undefined) {
        delete doRequestBody[key];
      }
    });

    // Construct the full endpoint URL - the environment variable should be the base URL
    const doUrl = `${process.env.DO_AGENT_ENDPOINT}/api/v1/chat/completions`;

    const upstream = await fetch(doUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doRequestBody),
    });

    const responseText = await upstream.text();

    if (!upstream.ok) {
      return new Response(responseText || "DigitalOcean API error", { 
        status: upstream.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const contentType = upstream.headers.get("content-type") ?? "application/json";
    return new Response(responseText, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": contentType
      }
    });

  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}