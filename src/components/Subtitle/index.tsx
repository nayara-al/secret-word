interface SubtitleProps {
  text: string;
}
export default function Subtitle({ text }: SubtitleProps) {
  return <h2>{text}</h2>;
}
