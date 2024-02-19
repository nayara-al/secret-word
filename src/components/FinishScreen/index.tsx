import Button from "../Button";

interface FinishScreenProps {
  finishGame: () => void;
  score: number;
}

export default function FinishScreen({ finishGame, score }: FinishScreenProps) {
  return (
    <div className="h-full flex flex-col py-8 gap-20 text-white">
      <h2 className="text-4xl">Parabéns, você fez ao total<br/> {score} pontos! </h2>
      <p className="w-full px-4 text-xl text-center">Esperamos que tenha se divertido,<br/> volte novamente outras vezes!</p>
      <Button buttonType="primary" onClick={finishGame}>
        Ir para tela inicial
      </Button>
    </div>
  );
}
