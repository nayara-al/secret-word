import Button from "../Button";
import Subtitle from "../Subtitle";

interface StartScreenProps {
  startGame: () => void;
}

export default function StartScreen({ startGame }: StartScreenProps) {
  return (
    <div className="flex flex-col gap-10">
      <Subtitle text="Clique no botão abaixo para começar a jogar" />
      <Button buttonType="primary" onClick={startGame}>Iniciar o jogo</Button>
    </div>
  );
}
