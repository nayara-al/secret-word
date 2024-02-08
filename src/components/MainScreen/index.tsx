"use client";
import StartScreen from "../StartScreen";
import { useCallback, useEffect, useState } from "react";
import GameScreen from "../GameScreen";
import FinishScreen from "../FinishScreen";
import GameoverScreen from "../GameoverScreen";
import { WordsListProps, wordsList } from "@/data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "finish" },
  { id: 4, name: "gameover" },
];

export default function MainScreen() {
  const [gameStage, setGameStage] = useState<string>(stages[0].name);
  const [pickedWord, setPickedWord] = useState<string>("");
  const [pickedCategory, setPickedCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<number>(5);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories: (keyof WordsListProps)[] = Object.keys(
      wordsList
    ) as (keyof WordsListProps)[];
    const category = categories[Math.floor(Math.random() * categories.length)];

    const wordCategory = wordsList[category];
    const word = wordCategory[Math.floor(Math.random() * wordCategory.length)];

    return { category, word };
  }, []);

  const startGame = useCallback(() => {
    const { category, word } = pickWordAndCategory();

    console.log(category, word);

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l: string) => l.toLowerCase());
    console.log(wordLetters);

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);
  const verifyLetter = (letter: string) => {
    const normalizedLetter = letter.toLowerCase();
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
    console.log(letter);
    console.log(wrongLetters);
  };
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };
  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses === 0) {
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);
  const finishGame = () => {
    setGameStage(stages[3].name);
  };

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
    console.log(guessedLetters);

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <main className="gap-4 p-6 flex flex-col items-center justify-center text-center">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
        />
      )}
      {gameStage === "finish" && <FinishScreen finishGame={finishGame} />}
      {gameStage === "gameover" && <GameoverScreen retry={retry} />}
    </main>
  );
}
