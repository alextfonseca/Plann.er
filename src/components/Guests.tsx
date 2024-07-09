import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "./Button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Jessica White</span>
            <span className="truncate block text-zinc-400 text-sm">
              jessica.white@gmail.com
            </span>
          </div>

          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <Button variant={"secondary"}>
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
