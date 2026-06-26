"use client";

import { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";

function CreateNewPage() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [videoScript, setVideoScript] = useState([]);

  function onHandleInputChange(fieldName: string, fieldValue: string) {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  }

  // Get video script
  async function getVideoScript() {
    setLoading(true);
    const prompt = `Write a script to generate ${formData.duration} video on topic : ${formData.topic} along with AI image prompt in ${formData.imageStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, no Plain text`;

    const result = await axios.post("/api/get-video-script", {
      prompt,
    });
    setVideoScript(result.data.result);
    setLoading(false);
    return result.data.result;
  }

  function onCreateHandler() {
    getVideoScript();
  }

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create New
      </h2>

      <div className="mt-10 shadow-md p-10 space-y-6">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className="mt-10 w-full" onClick={onCreateHandler}>
          Create Short Video
        </Button>
      </div>
      <CustomLoading loading={loading} />
    </div>
  );
}

export default CreateNewPage;
