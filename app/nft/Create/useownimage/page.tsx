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

const accountFormSchema = z.object({
  image: z.any(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "",
  // endTime: new Date("2023-01-23"),
};

interface BaseFormProps {
    // this form component is used by below 3 pages
  type: "TextToImage" | "ImageToImage" | "ForkImage";
}

export default function AccountForm(props: BaseFormProps) {
  const { type } = props;

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Upload {...field} />
                </FormControl>
                <FormDescription>
                  Upload Image
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        <Button type="submit">Create Collection</Button>
      </form>
    </Form>
  );
}
