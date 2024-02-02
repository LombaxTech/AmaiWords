import React, { useState } from "react";

export default function App() {
  const [words, setWords] = useState<any>("");
  const [imageUrl, setImageUrl] = useState("");

  const generateRandomImage = () => {
    let image;

    return image;
  };

  const generateWords = () => {
    console.log("...");
  };

  // const generateWords = async () => {
  //   console.log("generating...");

  //   // todo: get image
  //   const imageUrl = generateRandomImage();

  //   // todo: get words

  //   let localstorage = {
  //     attempts: {
  //       ["02-02-24"]: 0,
  //     },
  //     wordsShown: {
  //       ["feb-24"]: ["huhu", "ftftftft", "sesese", "...."],
  //     },
  //   };

  //   let today;
  //   let monthYear;

  //   // check if X attemps for the day have been done, if so, give a warning
  //   if (localstorage.attempts[today] === 3) {
  //     // Return error you have run out
  //   }

  //   // get the random word and verify it is unique
  //   let genWord = "";
  //   let wordIsUnique = false;

  //   while (!wordIsUnique) {
  //     let wordsAlreadyShownThisMonth = localstorage.wordsShown[monthYear];

  //     genWord = "..."; // generate a word;

  //     // once found word, set word

  //     // if genword is not in wordsalreadyshowin then set wordisunique to true
  //     localstorage.wordsShown = [...localstorage.wordsShown, genWord];
  //     attempsThis++;

  //     setWords;
  //   }
  // };

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
      {/* Image */}
    </div>
  );
}

const WarningMessage = () => {
  return (
    <div className="">
      <h1>Hey, you've used up all of your attempts today</h1>
    </div>
  );
};
