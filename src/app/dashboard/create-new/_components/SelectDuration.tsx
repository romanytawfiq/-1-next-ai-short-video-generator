import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectDuration({
  onUserSelect,
}: {
  onUserSelect: (topic: string, val: string) => void;
}) {
  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Duration</h2>
      <p className="text-gray-500">Select the duration of the video</p>

      <Select
        onValueChange={(value) => {
          // setSelectedTopic(value);
          value !== "Custom Prompt" && onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Choose a Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Topic</SelectLabel>
            {Array.from({ length: 10 }, (_, dIndex) => {
              const seconds = Math.ceil((dIndex + 1) * ((dIndex + 5) * 2));
              return (
                <SelectItem value={`${seconds} Seconds`} key={seconds}>
                  {seconds} Seconds
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDuration;
