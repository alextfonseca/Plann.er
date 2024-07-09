import { AtSign, Plus, X } from "lucide-react";
import { Button } from "./Button";

interface IInviteGuestsModalProps {
  setIsGuestsModalOpen: (value: boolean) => void;
  emailsToInvite: string[];
  handleAddEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void;
  handleRemoveEmailToInvite: (email: string) => void;
}

export function InviteGuestsModal({
  setIsGuestsModalOpen,
  emailsToInvite,
  handleAddEmailToInvite,
  handleRemoveEmailToInvite,
}: IInviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Selecionar convidados</h2>

          <button type="button" onClick={() => setIsGuestsModalOpen(false)}>
            <X className="size-5 text-zinc-400 hover:text-zinc-300 transition-all" />
          </button>
        </div>

        <p className="text-sm text-zinc-400 mt-2">
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </p>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email, index) => (
            <div
              key={index}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                className="text-zinc-400 hover:text-zinc-300 transition-all"
                onClick={() => handleRemoveEmailToInvite(email)}
              >
                <X className="size-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={handleAddEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <AtSign className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />

          <Button type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
