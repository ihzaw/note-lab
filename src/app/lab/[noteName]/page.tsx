"use client";
import { useState } from "react";

export default function Page({ params }: { params: { noteName: string } }) {
  const [item, setItem] = useState("");
  const doClick = (newItem: string) => {
    console.log("new item :", newItem);
    setItem(newItem);
  };

  const generateRandomString = (length: number) =>
    [...Array(length)]
      .map(() =>
        String.fromCharCode(
          Math.random() < 0.5
            ? 65 + Math.random() * 26
            : 97 + Math.random() * 26
        )
      )
      .join("");

  return (
    <div className="">
      <div>we've arrived at the {params.noteName}</div>
      <button onClick={() => doClick(generateRandomString(4))}>click</button>
      <div className="text-white text-2xl">{item}</div>
    </div>
  );
}
