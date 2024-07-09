import { Calendar, Tag, X } from "lucide-react";
import { Button } from "./Button";

interface ICreateActivityModalProps {
  setIsCreateActivityModalOpen: (value: boolean) => void;
}

export function CreateActivityModal({
  setIsCreateActivityModalOpen,
}: ICreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cadastrar atividade</h2>

          <button
            type="button"
            onClick={() => setIsCreateActivityModalOpen(false)}
          >
            <X className="size-5 text-zinc-400 hover:text-zinc-300 transition-all" />
          </button>
        </div>

        <p className="text-sm text-zinc-400 mt-2">
          Todos os convidados podem visualizar as atividades.
        </p>

        <form className="space-y-3">
          <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-14 flex-1 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
            />
          </div>

          <Button type="submit" size={"full"}>
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
