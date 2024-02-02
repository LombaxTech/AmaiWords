import React, { useState } from "react";

export default function App() {
  const [words, setWords] = useState("");

  const generateWords = async () => {
    console.log("generating...");
  };

  return (
    <div className="flex-1 flex flex-col gap-4 items-center pt-20 px-8 bg-background-main text-text-highlight">
      <h1 className="font-bold text-2xl">甘い言葉が足りない君へ</h1>
      <button
        className="btn bg-button-primary hover:bg-button-hover"
        onClick={generateWords}
      >
        甘い言葉！
      </button>

      <p className="text-center">{words}</p>
    </div>
  );
}
