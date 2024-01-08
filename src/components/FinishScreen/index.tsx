import Button from "../Button";
import Subtitle from "../Subtitle";

interface FinishScreenProps {
  finishGame: () => void;
}

export default function FinishScreen({ finishGame }: FinishScreenProps) {
  return (
    <div>
      <Subtitle text="Parabéns, você acertou a palavra!" />
      <Button buttonType="primary" onClick={finishGame}>Ir para gameover</Button>
    </div>
  );
}
