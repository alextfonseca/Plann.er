import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "./Button";

interface IDestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  setIsGuestsInputOpen: (value: boolean) => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  setIsGuestsInputOpen,
}: IDestinationAndDateStepProps) {
  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="h-5 w-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="h-5 w-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button
          variant={"secondary"}
          onClick={() => setIsGuestsInputOpen(false)}
        >
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={() => setIsGuestsInputOpen(true)}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
