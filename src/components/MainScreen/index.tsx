"use client";
import StartScreen from "../StartScreen";
import { useCallback, useEffect, useState } from "react";
import GameScreen from "../GameScreen";
import FinishScreen from "../FinishScreen";
import GameoverScreen from "../GameoverScreen";
import { WordsListProps, wordsList } from "@/data/words";
import GameContinue from "../GameModal";

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
  const [showDialog, setShowDialog] = useState<boolean>(false);

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
    setGameStage("game");
    const { category, word } = pickWordAndCategory();

    console.log(category, word);

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l: string) => l.toLowerCase());
    console.log("wordLetters", wordLetters);

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
    console.log("letter", letter);
    console.log("wrongLetters", wrongLetters);
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

  const finishGame = () => {
    setGameStage(stages[0].name);
  };

  useEffect(() => {
    if (guesses === 0) {
      clearLettersStates();

      setGameStage(stages[3].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
    console.log(guessedLetters);
    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === "game"
    ) {
      setScore((actualScore) => (actualScore += 100));
      clearLettersStates();
      setShowDialog(true);
      setGameStage(stages[2].name);
    }
  }, [guessedLetters, letters, gameStage]);

  return (
    <>
      <main className="gap-4 p-6 flex flex-col items-center justify-center text-center">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && (
          <GameScreen
            verifyLetter={verifyLetter}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "finish" && (
          <>
            <GameContinue
              onContinue={() => startGame()}
              onFinish={() => setShowDialog(false)}
              title="Parabéns, você acertou!"
              showDialog={showDialog}
            >
              <span>A palavra sorteada era: {pickedWord}</span>
              <p>Sua pontuação atual é: {score}</p>
              <p>Agora diga, deseja continuar e pretende finalizar?</p>
            </GameContinue>
            <FinishScreen finishGame={finishGame} score={score} />
          </>
        )}
        {gameStage === "gameover" && (
          <GameoverScreen retry={retry} score={score} />
        )}
      </main>
    </>
  );
}
