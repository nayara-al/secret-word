import Button from "../Button";

interface GameoverScreenProps {
  retry: () => void;
  score: number;
}

export default function GameoverScreen({ retry, score }: GameoverScreenProps) {
  return (
    <div className="h-full flex flex-col py-4 gap-20">
      <h2 className="text-4xl">Infelizmente você perdeu.</h2>
      <div className="bg-white text-gray-900 p-4 rounded-lg">
        Ao total você conseguiu:
        <div className="font-semibold">{score} pontos</div>
      </div>
      <Button buttonType="primary" onClick={retry}>
        Tentar novamente
      </Button>
    </div>
  );
}
