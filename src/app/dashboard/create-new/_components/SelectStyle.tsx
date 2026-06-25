import Image from "next/image";
import React, { useState } from "react";

function SelectStyle({
  onUserSelect,
}: {
  onUserSelect: (topic: string, val: string) => void;
}) {
  const styleOptions = [
    {
      name: "Realstic",
      image: "/realstic.jpg",
    },
    {
      name: "Cartoon",
      image: "/cartoon.jpg",
    },
    {
      name: "Comic",
      image: "/comic.jpg",
    },
    {
      name: "WaterColor",
      image: "/water_color.jpg",
    },
    {
      name: "GTA",
      image: "/cartoon.jpg",
    },
  ];
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-2xl text-primary">Style</h2>
      <p className="text-gray-500">Select your video style</p>
      <div className="flex gap-4 flex-wrap ">
        {styleOptions.map((item, index) => (
          <div
            key={index}
            className={`relative group rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition border-4 border-dotted ${selectedOption === item.name ? "border-primary" : "border-transparent"}`}
            onClick={() => {
              setSelectedOption(item.name);
              onUserSelect("imageStyle", item.name);
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="h-40 object-cover rounded-lg w-full group-hover:scale-120 group-hover:-rotate-6 duration-300"
            />
            <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyle;
