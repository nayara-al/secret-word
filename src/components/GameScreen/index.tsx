import Button from "../Button";

interface GameScreenProps {
  verifyLetter: () => void;
}

export default function GameScreen({ verifyLetter }: GameScreenProps) {
  return (
    <div className="flex flex-col gap-10">
      <p>
        <span className="font-semibold">Pontuação:</span> score
      </p>
      <h1 className="text-[32px]">Advinhe a palavra:</h1>
      <h3 className="">
        Dica sobre a palavra: <span className="text-yellow-500 font-semibold">Dica...</span>
      </h3>
      <p>Você ainda tem X tentativas(s).</p>
      <div className="m-8 p-8 border-solid border-[12px] border-yellow-500 flex">
        <div className="h-[100px] w-[100px] text-[64px] border solid border-1 border-gray-900 uppercase bg-white text-black font-bold">A</div>
        <div className="h-[100px] w-[100px] text-[64px] border solid border-1 border-gray-900 uppercase bg-white text-black font-bold"></div>
      </div>
      <div>
        <p></p>
        <form className="flex items-center justify-center gap-4">
            <input type="text" className="text-black uppercase h-[50px] w-[50px] text-[20px] text-center mr-2" />
            <Button buttonType="secondary">Jogar!</Button>
        </form>
      </div>
      <div>
        <p>Letras já utilizadas: </p>
        <span></span>
      </div>
    </div>
  );
}
