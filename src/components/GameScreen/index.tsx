"use client";
import { useRef, useState } from "react";
import Button from "../Button";

interface GameScreenProps {
  verifyLetter: () => void;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
}

export default function GameScreen({
  verifyLetter,
  guessedLetters,
  guesses,
  letters,
  pickedCategory,
  pickedWord,
  wrongLetters,
}: GameScreenProps) {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div className="flex flex-col gap-10">
      <p>
        <span className="font-semibold">Pontuação:</span> score
      </p>
      <h1 className="text-[32px]">Advinhe a palavra:</h1>
      <h3 className="">
        Dica sobre a palavra:
        <span className="text-yellow-500 font-semibold">{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s).</p>
      <div className="m-8 p-8 border-solid border-[12px] border-yellow-500 flex">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span
              key={i}
              className="h-[60px] w-[60px] text-[64px] border solid border-1 border-gray-900 uppercase bg-white text-black font-bold"
            >
              {letter}
            </span>
          ) : (
            <span
              key={i}
              className="h-[60px] w-[60px] text-[64px] border solid border-1 border-gray-900 uppercase bg-white text-black font-bold"
            ></span>
          )
        )}
      </div>
      <div>
        <p></p>
        <form className="flex items-center justify-center gap-4">
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
