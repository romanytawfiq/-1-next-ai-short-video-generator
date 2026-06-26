import { gemini, geminiGenerationConfig, geminiTools } from "@/configs/AiModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    // const result = await gemini.interactions.create({
    //   tools: geminiTools,
    //   generation_config: geminiGenerationConfig,
    //   model: "gemini-2.5-pro",
    //   input: prompt,
    // });
    // console.log("##", result);

    // delay simulation
    await new Promise((resolve) => setTimeout(resolve, 4000));

    return NextResponse.json({
      result: [
        {
          imagePrompt:
            "Comic book panel, pop art style, Ben-Day dots. A confused 1930s Australian soldier with a vintage machine gun looking at a giant, defiant Emu bird. Dramatic action lines, 'THE GREAT EMU WAR' in bold yellow typography at the top.",
          contentText:
            "Did you know that in 1932, the Australian military actually declared war on Emus? Spoilers: The birds won.",
        },
        {
          imagePrompt:
            "Comic book illustration, vibrant colors. An ancient Roman man in a white toga, looking into a bronze mirror and flashing a blindingly white smile. Small bubbles around a jar labeled 'URINE'. Speech bubble says 'FRESH!' with comic sparkles.",
          contentText:
            "Ancient Romans used human urine as mouthwash. The ammonia in the pee actually helped whiten their teeth!",
        },
        {
          imagePrompt:
            "Comic book split-screen layout. Left side: Cleopatra holding a modern smartphone. Right side: The Great Pyramid of Giza being built. Retro halftone pattern, bright neon outlines, dramatic 'TIME WARP' text in the center.",
          contentText:
            "Cleopatra lived closer to the invention of the iPhone and the moon landing than she did to the building of the Great Pyramids.",
        },
        {
          imagePrompt:
            "Comic book action scene, panoramic view. A massive British battleship firing a single cannonball toward a small Zanzibar palace. A giant stopwatch in the sky showing '38 MINUTES'. Sound effect text 'BOOM!' in red.",
          contentText:
            "The shortest war in history lasted only 38 minutes. It was the Anglo-Zanzibar War of 1896. Zanzibar surrendered before lunch.",
        },
        {
          imagePrompt:
            "Funny comic style. Napoleon Bonaparte in his iconic hat running away in terror from a swarm of thousands of fluffy white bunnies. Action lines, speed trails, 'THUMP THUMP' sound effects in the background.",
          contentText:
            "The great conqueror Napoleon was once attacked... by rabbits. Thousands of them swarmed him during a hunting trip, forcing him to flee in his carriage.",
        },
        {
          imagePrompt:
            "Comic book cover style. A superhero historian holding a glowing book of secrets. Vibrant colors, dramatic lighting, 'STAY CURIOUS' in 3D metallic font. Background filled with historical silhouettes.",
          contentText:
            "History is weirder than fiction. Follow for more mind-blowing facts that prove the past was absolutely wild!",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
