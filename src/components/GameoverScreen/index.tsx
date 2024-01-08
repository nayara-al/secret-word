import Button from "../Button";
import Subtitle from "../Subtitle";

interface GameoverScreenProps {
    retry: () => void
}

export default function GameoverScreen({retry}: GameoverScreenProps) {
  return (
    <div>
        <Subtitle text="Infelizmente você perdeu :(" />
        <Button buttonType="primary" onClick={retry}>Tentar novamente</Button>
    </div>
  )
}
