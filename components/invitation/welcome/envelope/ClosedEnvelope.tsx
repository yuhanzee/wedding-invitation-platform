import EnvelopeBody from "./EnvelopeBody";
import TopFlap from "./TopFlap";
import Flowers from "./Flowers";
import WaxSeal from "./WaxSeal";

type ClosedEnvelopeProps = {
  onOpen: () => void;
};

export default function ClosedEnvelope({
  onOpen,
}: ClosedEnvelopeProps) {
  return (
    <div
      onClick={onOpen}
      className="
        relative
        w-[280px]
        h-[180px]
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-[1.015]
        active:scale-[0.99]
      "
    >
      <EnvelopeBody />

      <TopFlap isOpen={false} />

      <Flowers />

      <WaxSeal isOpen={false} />
    </div>
  );
}