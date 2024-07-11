import { User, X } from "lucide-react";
import { Button } from "./Button";

interface IConfirmTripModalProps {
  setIsConfirmTripModalOpen: (value: boolean) => void;
  setOwnerName: React.Dispatch<React.SetStateAction<string>>;
  setOwnerEmail: React.Dispatch<React.SetStateAction<string>>;
  handleCreateTrip: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  setIsConfirmTripModalOpen,
  setOwnerName,
  setOwnerEmail,
  handleCreateTrip,
}: IConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>

          <button
            type="button"
            onClick={() => setIsConfirmTripModalOpen(false)}
          >
            <X className="size-5 text-zinc-400 hover:text-zinc-300 transition-all" />
          </button>
        </div>

        <p className="text-sm text-zinc-400 mt-2">
          Para concluir a criação da viagem para{" "}
          <span className="text-zinc-100 font-semibold">
            Florianópolis, Brasil{" "}
          </span>{" "}
          nas datas de{" "}
          <span className="text-zinc-100 font-semibold">
            {" "}
            16 a 27 de Agosto de 2024
          </span>{" "}
          preencha seus dados abaixo:
        </p>

        <form onSubmit={handleCreateTrip} className="space-y-3">
          <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => setOwnerName(event.target.value)}
            />
          </div>

          <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              name="userEmail"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => setOwnerEmail(event.target.value)}
            />
          </div>

          <Button type="submit" size={"full"}>
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
