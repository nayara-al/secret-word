import MainScreen from "@/components/MainScreen";

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'finish' },
  { id: 4, name: 'gameover' },
]

export default function Home() {
  return (
    <main className="gap-4 p-12 max-md:px-4 flex flex-col items-center justify-center text-center">
      <MainScreen />      
    </main>
  );
}
