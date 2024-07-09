import { Link2, Plus } from "lucide-react";
import { Button } from "./Button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Reserva do AirBnb</span>
            <a
              href="/"
              target="_blank"
              className="truncate block hover:underline text-zinc-400"
            >
              https://airbnb.com.br/rooms/123456765656
            </a>
          </div>

          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Reserva do AirBnb</span>
            <a
              href="/"
              target="_blank"
              className="truncate block hover:underline text-zinc-400"
            >
              https://airbnb.com.br/rooms/123456765656
            </a>
          </div>

          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <Button variant={"secondary"}>
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
