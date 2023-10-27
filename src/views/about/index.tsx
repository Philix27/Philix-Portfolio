import React from "react";
import TechSection from "./tech.view";
import Image from "next/image";

export default function AboutsView(props: { content: string }) {
  return (
    <div className="section">
      <Image
        height={300}
        width={300}
        src="/pp.jpg"
        alt="Eligbue Felix"
        style={{ borderRadius: "10px" }}
      />
      <TechSection content={props.content} />
    </div>
  );
}
