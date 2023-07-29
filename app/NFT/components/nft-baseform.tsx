"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import Upload from "@/components/Upload";
import Image from "next/image";
import { collectionItem } from "@/components/CollectionCards";

import { cn } from "@/lib/utils";
import NFTCollections from "./nft-cards";
import { DiffusionModel } from "@/lib/constants";
import { requestTextToImage } from "@/lib/openAPI";


const NFTbaseFormSchema = z.object({
  prompt: z.string(),
  nPrompt: z.string().optional(),
  image: z.instanceof(File),
  count: z.array(z.number().min(1).max(4)).optional(),
  advanced: z.boolean().optional(),
  width: z.number().min(200).max(1000).optional(),
  height: z.number().min(200).max(1000).optional(),
  steps: z.number().min(1).max(10).optional(),
  model: z.string().min(20).max(100, {
    message: "Name must be at least 2 characters.",
  }),
});

type NFTbaseFormValues = z.infer<typeof NFTbaseFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<NFTbaseFormValues> = {
  // name: "",
  // endTime: new Date("2023-01-23"),
};

interface BaseFormProps {
  // this form component is used by below 3 pages
  type: "TextToImage" | "ImageToImage" | "ForkImage";
  className?: string;
}

export default function NFTbaseForm(props: BaseFormProps) {
  const { type, className } = props;

  const form = useForm<NFTbaseFormValues>({
    resolver: zodResolver(NFTbaseFormSchema),
    defaultValues,
  });

  const [advanced, count] = form.watch(["advanced", "count"]);

  function onSubmit(data: NFTbaseFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log('onSubmit', data)
    requestTextToImage(data.model, data.prompt, count? count[0] : 1, data.nPrompt, data.width, data.height, data.steps)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-8 bg-indigo-500 p-3 rounded-2xl", className)}
        >
          {type === "ForkImage" && (
            <div>
              <FormLabel>Fork From( #NFT Name)</FormLabel>
              <Image
                src={collectionItem.logo}
                alt="nft"
                className="w-40 h-40 mx-auto mt-2"
              />
            </div>
          )}
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nPrompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Negative prompt</FormLabel>
                <FormControl>
                  <Textarea {...field} required={false}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {type === "ImageToImage" && (
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    <Upload {...field} />
                  </FormControl>
                  <FormDescription>Upload Image</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="count"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Count</FormLabel>
                <FormControl>
                  <Slider defaultValue={[1]} max={4} step={1} min={1} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a model to generate" />
                      </SelectTrigger>
                    </FormControl>
                  <SelectContent>
                    {DiffusionModel.map((item, index)=>{
                        return <SelectItem value={item.value} key={index}>
                        {item.label}
                      </SelectItem>
                      })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="advanced"
            render={({ field }) => (
              <FormItem className="flex gap-4 items-center space-y-0">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Advanced</FormLabel>
              </FormItem>
            )}
          />
          {advanced && (
            <>
              <div className="flex gap-8">
                <FormField
                  control={form.control}
                  name="width"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Width</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-8">
                <FormField
                  control={form.control}
                  name="steps"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Generation steps</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}
          <Button type="submit">Generate</Button>
        </form>
      </Form>
      <NFTCollections dataSource={new Array(4).fill(collectionItem)} />
    </>
  );
}
