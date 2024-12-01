import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

export async function GET(request: Request) {
  await anthropic.messages
    .stream({
      messages: [
        { role: "user", content: "give me the basic todo app in react" },
      ],
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
    })
    .on("text", (text) => {
      console.log(text);
    });
    
}
