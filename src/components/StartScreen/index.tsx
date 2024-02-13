import Button from "../Button";
interface StartScreenProps {
  startGame: () => void;
}

export default function StartScreen({ startGame }: StartScreenProps) {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="">Clique no botão abaixo para começar a jogar</h2>
      <Button buttonType="primary" onClick={startGame}>
        Iniciar o jogo
      </Button>
    </div>
  );
}
