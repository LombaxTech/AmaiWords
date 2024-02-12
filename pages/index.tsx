import { encouragingPhrases } from "@/data";
import {
  getKeyForDayMonthYear,
  getKeyForMonthYear,
  removeDuplicates,
} from "@/helperFunctions";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const dailyLimit = 3;

export default function App() {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          // minHeight: 200.0,
          // minWidth: 200.0,'
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: "#FFC0CB",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // End of vanta stuff

  const [words, setWords] = useState<any>("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedWordIndex, setSelectedWordIndex] = useState<any>("");

  const [attemptsLeftForToday, setAttemptsLeftForToday] =
    useState<any>(dailyLimit);

  const [todaysWords, setTodaysWords] = useState<any>([]);

  useEffect(() => {
    const dayMonthYear = getKeyForDayMonthYear();
    let todaysAttempts: any = localStorage.getItem(`attempts-${dayMonthYear}`);
    todaysAttempts = JSON.parse(todaysAttempts);
    todaysAttempts = todaysAttempts || 0;
    setAttemptsLeftForToday(dailyLimit - todaysAttempts);

    let todaysWords: any = localStorage.getItem(`words-${dayMonthYear}`);
    todaysWords = JSON.parse(todaysWords);
    todaysWords = todaysWords || [];
    setTodaysWords(todaysWords);
  }, []);

  useEffect(() => {
    if (todaysWords.length > 0) {
      setSelectedWordIndex(todaysWords.length - 1);
    }
  }, [todaysWords]);

  const generateRandomImage = () => {
    let image;

    return image;
  };

  const generateWords = async () => {
    const dayMonthYear = getKeyForDayMonthYear();
    const monthYear = getKeyForMonthYear();

    let todaysAttempts: any = localStorage.getItem(`attempts-${dayMonthYear}`);
    todaysAttempts = JSON.parse(todaysAttempts);

    todaysAttempts = todaysAttempts || 0;

    // if (todaysAttempts >= 3) {
    //   return console.log("you have reached too much!");
    // }

    let wordsThisMonth: any = localStorage.getItem(`words-${monthYear}`);
    wordsThisMonth = JSON.parse(wordsThisMonth);
    wordsThisMonth = wordsThisMonth || [];

    let uniquePhraseFound = false;
    let retrycount = 0;

    while (!uniquePhraseFound) {
      let randomIndex = Math.floor(Math.random() * encouragingPhrases.length);
      let randomWord = encouragingPhrases[randomIndex];

      if (!wordsThisMonth.includes(randomWord)) {
        const updatedWordsThisMonth = [...wordsThisMonth, randomWord];
        let updatedTodaysWords = [...todaysWords, randomWord];
        setTodaysWords(updatedTodaysWords);

        localStorage.setItem(
          `words-${monthYear}`,
          JSON.stringify(updatedWordsThisMonth)
        );

        localStorage.setItem(
          `attempts-${dayMonthYear}`,
          JSON.stringify(todaysAttempts + 1)
        );

        localStorage.setItem(
          `words-${dayMonthYear}`,
          JSON.stringify(updatedTodaysWords)
        );

        setAttemptsLeftForToday(attemptsLeftForToday - 1);
        setWords(randomWord);

        uniquePhraseFound = true;
      }

      retrycount++;
      if (retrycount > 100) {
        uniquePhraseFound = true;
      }
    }

    return;

    // setImageUrl("");
    // setImageUrl("https://cataas.com/cat");
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-background-secondary text-pink-800 relative min-h-screen">
      <div
        className="absolute top-0 left-0 h-full w-full z-0"
        ref={vantaRef}
      ></div>
      <div className="flex flex-col gap-4 items-center px-14 z-10">
        {/* <h1 className="font-bold text-2xl">甘い言葉が足りない君へ</h1> */}
        {todaysWords &&
          todaysWords.map((word: any, i: any) => {
            return (
              <blockquote
                key={word}
                className={`text-pink-600 text-center text-3xl font-bold italic pl-4 relative ${
                  selectedWordIndex !== i ? "hidden" : "block"
                }`}
              >
                {word}
              </blockquote>
            );
          })}

        <div className="flex items-center gap-4">
          {todaysWords &&
            todaysWords.map((word: any, i: any) => {
              return (
                <div
                  onClick={() => setSelectedWordIndex(i)}
                  key={word}
                  className={` p-1 px-2 border-2 text-2xl font-bold border-pink-500 cursor-pointer hover:bg-pink-500 hover:text-white 
                  
                  ${
                    selectedWordIndex === i
                      ? "bg-pink-500 text-white"
                      : "text-pink-700"
                  }
                  
                  `}
                >
                  {i + 1}
                </div>
              );
            })}
        </div>

        {/* <blockquote className="text-center text-2xl font-medium italic border-l-4 border-gray-500 pl-4 relative">
          {words}
        </blockquote> */}

        {attemptsLeftForToday <= 0 ? (
          <div className="mt-10">
            <WarningMessage />
          </div>
        ) : (
          <>
            <button
              className="btn bg-button-primary hover:bg-button-hover text-2xl px-8 text-gray-500"
              onClick={generateWords}
            >
              甘い言葉を出すボタン
            </button>

            <h1 className="font-bold text-xl">
              今日はあと{attemptsLeftForToday}回しか残ってねーぞ！
            </h1>
          </>
        )}

        {/* Image */}
        {imageUrl && <img src={imageUrl} />}
      </div>
    </div>
  );
}

const WarningMessage = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-pink-800 text-center">
        はいはいもう終わりだ今日は。また明日来るがいい！
      </h1>
    </div>
  );
};
