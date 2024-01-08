import Button from "@/components/Button";
import Subtitle from "@/components/Subtitle";

export default function Home() {
  return (
    <main className="gap-4 h-full p-12 bg-blue-300 flex flex-col items-center justify-center">
      <Subtitle />
      <Button>Iniciar o jogo</Button>
    </main>
  );
}
