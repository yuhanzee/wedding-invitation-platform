import Envelope from "./envelope/Envelope";

type EnvelopeSectionProps = {
  isOpen: boolean;
  onOpen: () => void;
  weddingDate?: string;
};

export default function EnvelopeSection({
  isOpen,
  onOpen,
  weddingDate,
}: EnvelopeSectionProps) {
  return (
    <Envelope
      isOpen={isOpen}
      onOpen={onOpen}
      weddingDate={weddingDate}
    />
  );
}