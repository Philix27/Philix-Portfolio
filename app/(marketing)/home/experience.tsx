import { TextH, TextP } from "@/comps";
import React from "react";

export function ExperienceSection() {
  return (
    <div className="w-full flex items-center justify-center my-4">
      <div className="w-[80%] flex flex-col md:flex-row md:gap-x-5">
        <div className="md:w-[50%] ">
          {experienceData.map((val, i) => (
            <div
              key={i}
              className="bg-card p-2 mb-2 rounded-md hover:bg-primary"
            >
              <TextH>{val.title}</TextH>
            </div>
          ))}
        </div>
        <div className="md:w-[50%] border p-3 rounded-md">
          {/* <TextH>Headers</TextH> */}
          {/* <TextP>Description</TextP> */}
        </div>
      </div>
    </div>
  );
}

const experienceData: {
  title: string;
  subtitle: string;
  duration: string;
  subtitle2?: string;
  subtitle3?: string;
}[] = [
  {
    title: "Paymais Finance",
    subtitle: "",
    duration: "",
  },
  {
    title: "Doow Finance",
    subtitle: "",
    duration: "",
  },
  {
    title: "Centurion Property Listings",
    subtitle: "",
    duration: "",
  },
  {
    title: "Hexelan",
    subtitle: "",
    duration: "",
  },
];
