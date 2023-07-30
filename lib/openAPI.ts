import { getBlob } from "@/lib/utils";
import { ImageToImageRequestBody, ImageToImageRequestPath, TextToImageRequestBody, TextToImageRequestPath } from "./DiffusionOpenAPI";

const apiKey = process.env.NEXT_PUBLIC_DIFFUSION_API_KEY
const apiUrl = 'https://api.stability.ai'

interface GenerationResponse {
  artifacts: Array<{
    base64: string
    seed: number
    finishReason: string
  }>
}

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
): Promise<[string[] | undefined, Error | undefined]> {
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
      `${apiUrl}/v1/generation/${engineID}/text-to-image` satisfies TextToImageRequestPath,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body,
      }
    );
  } catch (error: unknown) {
    return [undefined, error instanceof Error ? error : Error(`${error}`)];
  }
  console.log('response',response)
  if (!response.ok) {
    return [undefined, Error(await response.text())];
  }
  const responseJSON = (await response.json()) as GenerationResponse
  console.log('responseJSON', responseJSON)
  const images = responseJSON.artifacts.map((image, index) => {
      return 'data:image/png;base64,'+ image.base64
  })
  // const image = await response.blob();
  // const url = URL.createObjectURL(image);
  return [images, undefined];
}


export async function requestImageToImage(
  engineID: string,
  positivePrompt: string,
  initImage: File,
  samples: number,
  negativePrompt?: string,
  //style?: ImageToImageRequestBody["style_preset"],
  //cfgScale?: ImageToImageRequestBody["cfg_scale"],
  //seed?: ImageToImageRequestBody["seed"],
  steps?: ImageToImageRequestBody["steps"],
  //initStrength?: ImageToImageRequestBody["image_strength"]
): Promise<[string[] | undefined, Error | undefined]> {
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

  const body = {
    init_image_mode: "IMAGE_STRENGTH",
    "text_prompts[0][text]": prompts[0]?.text,
    "text_prompts[0][weight]": prompts[0]?.weight,
    "text_prompts[1][text]": prompts[1]?.text,
    "text_prompts[1][weight]": prompts[1]?.weight,
    //image_strength: initStrength,
    //style_preset: style,
    samples,
    //cfg_scale: cfgScale,
    //seed,
    steps,
  };

  const formData = new FormData();
  for (const [key, value] of Object.entries(body)) {
    if (!value) continue;
    formData.append(key, value?.toString() ?? "");
  }
  let image = await getBlob(initImage)
  console.log('image', image)
  formData.append("init_image", image);

  let response: Response;
  try {
    response = await fetch(
      `${
        apiUrl
      }/v1/generation/${engineID}/image-to-image` satisfies ImageToImageRequestPath,
      {
        method: "POST",
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: formData,
      }
    );
  } catch (error: unknown) {
    return [undefined, error instanceof Error ? error : Error(`${error}`)];
  }
  if (!response.ok) {
    return [undefined, Error(await response.text())];
  }
  const responseJSON = (await response.json()) as GenerationResponse
  console.log('responseJSON', responseJSON)
  const images = responseJSON.artifacts.map((image, index) => {
      return 'data:image/png;base64,'+ image.base64
  })

  return [images, undefined];
}
