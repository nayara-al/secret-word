import Button from "../Button";
interface StartScreenProps {
  startGame: () => void;
}

export default function StartScreen({ startGame }: StartScreenProps) {
  return (
    <div className="h-full flex flex-col gap-20">
      <h2 className="text-2xl">Clique no botão abaixo para começar a jogar</h2>
      <Button buttonType="primary" onClick={startGame}>
        Iniciar o jogo
      </Button>
    </div>
  );
}
