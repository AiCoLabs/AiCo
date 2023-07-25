"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormInfo from "./components/FormInfo";
import FormSocial from "./components/FormSocial";
import FormSetting from "./components/FormSetting";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const CreateCollection = () => {
  const [tabValye, setTabValue] = useState("Collections");
  return (
    <div className="container mx-auto var-dark">
      <Separator className="my-6" />
      <Tabs
        className="flex gap-4 mt-32"
        value={tabValye}
        onValueChange={setTabValue}
      >
        <TabsList
          className="flex-col justify-start bg-transparent text-xl text-white"
        >
          <TabsTrigger value="Collections">Collection Info</TabsTrigger>
          <TabsTrigger value="Social">Social Link</TabsTrigger>
          <TabsTrigger value="Setting">Config Setting</TabsTrigger>
        </TabsList>
        <div
          className="flex-1 text-white text-2xl bg-indigo-500 p-3 rounded-2xl "
        >
          <TabsContent value="Collections">
            <FormInfo />
          </TabsContent>
          <TabsContent value="Social">
            <FormSocial />
          </TabsContent>
          <TabsContent value="Setting">
            <FormSetting />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CreateCollection;
