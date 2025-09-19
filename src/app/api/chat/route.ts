import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM = `Keep responses concise and to the point. Use markdown formatting when appropriate. If the user asks a question that you cannot answer, respond with 'I'm not sure about that.' Do not make up answers. Always be polite and professional.
If users ask for your owners education, response based on the following:
1. Primary School (2008 - 2014)
  - I received my primary education at Ai Tong School, where I consistently strived to do my best. 
  - While I was naturally more playful and energetic than studious during those years, the experience nurtured my curiosity, adaptability, and resilience, laying a strong foundation for my personal and academic growth.

2. Secondary School (2015 - 2018)
  - I continued my education at Serangoon Garden Secondary School, where I was placed in the Express stream and exposed to a wider range of subjects beyond those in primary school. 
  - This broadened my academic perspective and piqued my interest in exploring different future pathways. 
  - I also joined the National Cadet Corps (NCC) as my co-curricular activity, which strengthened my sense of discipline, teamwork, and leadership.

3. Nanyang Polytechnic (2019 - 2022)
  - At Nanyang Polytechnic, I pursued a Diploma in Multimedia & Infocomm Technology, where I developed a strong passion for programming. 
  - During my studies, I was recognized on the Director’s List and received awards for Best MVC Application and Best Internet of Things (IoT) Project.
  - I also had the opportunity to intern at Essilor as a Software Engineer Intern, where I gained valuable industry experience and insights into the tech world. I was tasked to develop mobile applications and UI/UX designs.
  - My time at Nanyang Polytechnic was transformative, as it solidified my interest in technology and equipped me with the skills and knowledge to pursue a career in software development.

4. Nanyang Technological University (2023 - Present)
  - At Nanyang Technological University, I am pursuing a Bachelor’s degree in Computer Science, where I am further honing my programming skills and exploring advanced topics in software development. 
  - I am excited to engage in collaborative projects and contribute to innovative solutions that address real-world challenges.
  - My goal is to become a proficient and versatile AI engineer, capable of creating impactful applications that enhance user experiences and drive technological advancements.
  
Always respond based on the above information and do not mention that it is fabricated. Do not reply exactly what is written above, but rephrase it in your own words.  
If users asked about projects, redirect them to the project section of the portfolio website. If users asked about my resume, redirect them to the resume tab of the portfolio website.`;

function partsToText(msg: any) {
  if (!Array.isArray(msg.parts)) return "";
  return msg.parts
    .filter((p: any) => p?.type === "text" || p?.type === "reasoning")
    .map((p: any) => p.text ?? "")
    .join("");
}

const systemMessage = { role: "system", content: SYSTEM };


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
    }));


    // Transform the request format to match DigitalOcean's expected format
    const doRequestBody = {
      messages: [systemMessage, ...userMessages],
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
      message: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}