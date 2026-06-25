"use client";

import { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";

function CreateNewPage() {
  const [formData, setFormData] = useState<[]>([]);

  function onHandleInputChange(fieldName: string, fieldValue: string) {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  }
  console.log(formData);

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create New
      </h2>

      <div className="mt-10 shadow-md p-10 space-y-6">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className="mt-10 w-full">Create Short Video</Button>
      </div>
    </div>
  );
}

export default CreateNewPage;
