"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (letterInputRef.current) {
      letterInputRef.current.focus();
    }
  }, [letter]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
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
      <p>Você ainda tem {guesses} tentativas(s).</p>
      <div className="m-8 p-8 border-solid border-[12px] items-center justify-center border-yellow-500 flex flex-wrap text-black">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ||
          letter === " " ||
          letter === "-" ? (
            <span
              key={i}
              className="flex items-center justify-center h-[60px] w-[60px] text-5xl border solid border-1 border-gray-900 uppercase bg-green-200 text-black font-bold z-10"
            >
              {letter}
            </span>
          ) : (
            <span
              key={i}
              className="h-[60px] w-[60px] text-5xl border solid border-1 border-gray-900 uppercase bg-white text-black font-bold"
            ></span>
          )
        )}
      </div>
      <div>
        <p></p>
        <form
          className="flex items-center justify-center gap-4 max-sm:flex-wrap max-sm:w-full"
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
            id="letterInput"
            name="letterInput"
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
