import { TextToImageRequestBody, TextToImageRequestPath } from "./DiffusionOpenAPI";

const apiKey = process.env.NEXT_PUBLIC_DIFFUSION_API_KEY

export async function requestTextToImage(
  engineID: string,
  positivePrompt: string,
  samples: number,
  negativePrompt?: string,
  //style?: TextToImageRequestBody["style_preset"],
  height?: TextToImageRequestBody["height"],
  width?: TextToImageRequestBody["width"],
  //cfgScale?: TextToImageRequestBody["cfg_scale"],
  //seed?: TextToImageRequestBody["seed"],
  steps?: TextToImageRequestBody["steps"]
): Promise<[string | undefined, Error | undefined]> {
  const prompts = [
    {
      text: positivePrompt,
      weight: 1,
    },
  ];

  if (negativePrompt) {
    prompts.push({
      text: negativePrompt,
      weight: -1,
    });
  }

  const body = JSON.stringify({
    text_prompts: prompts,
    // style_preset: style,
    samples,
    height,
    width,
    // cfg_scale: cfgScale,
    // seed,
    steps,
  } satisfies TextToImageRequestBody);

  let response: Response;
  try {
    response = await fetch(
      `https://api.stability.ai/v1/generation/${engineID}/text-to-image` satisfies TextToImageRequestPath,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "image/png",
          Authorization: `Bearer ${apiKey}`,
        },
        body,
      }
    );
  } catch (error: unknown) {
    return [undefined, error instanceof Error ? error : Error(`${error}`)];
  }

  if (!response.ok) {
    if (response.headers.get("Content-Type")?.includes("application/json")) {
      const json = await response.json();
      return [undefined, Error(JSON.stringify(json, null, 2))];
    } else {
      return [undefined, Error(await response.text())];
    }
  }

  const image = await response.blob();
  const url = URL.createObjectURL(image);

  return [url, undefined];
}

