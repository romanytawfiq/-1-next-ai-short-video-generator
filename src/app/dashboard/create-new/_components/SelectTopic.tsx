"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";

const SELECT_OPTIONS = [
  "Custom Prompt",
  "Random AI Story",
  "Scary Stoy",
  "Historical Facts",
  "Bed Time Story",
  "Motivational",
  "Fun Facts",
];

function SelectTopic({
  onUserSelect,
}: {
  onUserSelect: (topic: string, val: string) => void;
}) {
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();
  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Content</h2>
      <p className="text-gray-500"> What is the topic of your video?</p>

      <Select
        onValueChange={(value) => {
          setSelectedTopic(value);
          value !== "Custom Prompt" && onUserSelect("topic", value);
        }}
        value={selectedTopic}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select A Topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Topic</SelectLabel>
            {SELECT_OPTIONS.map((topic, topicIndex) => (
              <SelectItem value={topic} key={`${topic}_${topicIndex}`}>
                {topic}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {selectedTopic == "Custom Prompt" && (
        <Textarea
          className="mt-3"
          placeholder="Write prompt on wich you want to generate video."
          onChange={(e) => onUserSelect(selectedTopic, e.target.value)}
        />
      )}
    </div>
  );
}

export default SelectTopic;
