"use client";

import React, { FormEvent, useRef, useState } from "react";
import Button from "../Button";

interface GameScreenProps {
  verifyLetter: (e: string) => void;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
}

export default function GameScreen({
  verifyLetter,
  guessedLetters,
  guesses,
  letters,
  pickedCategory,
  wrongLetters,
  score,
}: GameScreenProps) {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
  };

  const renderLetter = (letter: string, index: number) => {
    const isGuessed = guessedLetters.includes(letter);
    const isSpaceOrHyphen = letter === " " || letter === "-";

    return (
      <span
        key={index}
        className={`h-[60px] w-[60px] text-5xl border solid border-1 border-gray-900 uppercase ${
          isGuessed
            ? "bg-white text-black"
            : isSpaceOrHyphen
            ? "text-transparent flex-wrap"
            : "bg-white text-black"
        } font-bold`}
      >
        {isGuessed ? letter : ""}
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <p>
        <span className="font-semibold">Pontuação:</span> {score}
      </p>
      <h1 className="text-[32px]">Advinhe a palavra:</h1>
      <h3 className="">
        Dica sobre a palavra:
        <span className="text-yellow-500 font-semibold">{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="m-8 p-8 border-solid border-[12px] items-center justify-center border-yellow-500 flex max-md:flex-wrap">
        {letters.map(renderLetter)}
      </div>
      <div>
        <p></p>
        <form
          className="flex items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="text-black uppercase h-[50px] w-[50px] text-[20px] text-center mr-2"
            maxLength={1}
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <Button buttonType="secondary">Jogar!</Button>
        </form>
      </div>
      <div>
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
}
