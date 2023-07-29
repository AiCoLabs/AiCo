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

import { toast } from "@/components/ui/use-toast";
import Upload from "@/components/Upload";
import { cn } from "@/lib/utils";

const OwnImageToNFTSchema = z.object({
  image: z.instanceof(File),
});

type OwnImageToNFTValues = z.infer<typeof OwnImageToNFTSchema>;

// This can come from your database or API.
const defaultValues: Partial<OwnImageToNFTValues> = {
  // name: "",
  // endTime: new Date("2023-01-23"),
};

interface ForkFormProps {
  className?: string;
}

export default function OwnImageToNFT(props: ForkFormProps) {
  const form = useForm<OwnImageToNFTValues>({
    resolver: zodResolver(OwnImageToNFTSchema),
    defaultValues,
  });

  function onSubmit(data: OwnImageToNFTValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "space-y-8 bg-indigo-500 p-3 rounded-2xl",
            props.className
          )}
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Upload {...field} />
                </FormControl>
                <FormDescription>Upload Image</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create Collection</Button>
        </form>
      </Form>
    </>
  );
}
