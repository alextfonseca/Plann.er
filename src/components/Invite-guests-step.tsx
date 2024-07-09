import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "./Button";

interface IInviteGuestsStepProps {
  setIsGuestsModalOpen: (value: boolean) => void;
  setIsConfirmTripModalOpen: (value: boolean) => void;
  isGuestsModalOpen: boolean;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  emailsToInvite,
  isGuestsModalOpen,
  setIsConfirmTripModalOpen,
  setIsGuestsModalOpen,
}: IInviteGuestsStepProps) {
  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow gap-3">
      <button
        type="button"
        className="flex items-center gap-2 flex-1 text-left hover:text-zinc-300 transition-all"
        onClick={() => setIsGuestsModalOpen(!isGuestsModalOpen)}
      >
        <UserRoundPlus className="h-5 w-5 text-zinc-400" />

        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1">
            Quem estará na viagem
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button onClick={() => setIsConfirmTripModalOpen(true)}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
