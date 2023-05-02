import React from "react";

interface Props {
  title: string;
}

export default function TechList(props: Props) {
  return <li className="techList"> {props.title} </li>;
}
