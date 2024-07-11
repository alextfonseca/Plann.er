import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/axios";
import { Button } from "./Button";

interface IGuestsProps {
  id: string;
  name: string | null;
  email: string;
  isConfirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();

  const [participants, setParticipants] = useState<IGuestsProps[]>([]);

  async function getGuestsById() {
    try {
      const { data } = await api.get(`/trips/${tripId}/participants`);
      setParticipants(data.participants);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getGuestsById();
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      {participants.map((participants, index) => (
        <div className="space-y-5" key={participants.id}>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium">
                {participants.name ?? `Convidado ${index}`}
              </span>
              <span className="truncate block text-zinc-400 text-sm">
                {participants.email}
              </span>
            </div>

            {participants.isConfirmed ? (
              <CheckCircle2 className="size-5 text-zinc-400 shrink-0" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400 shrink-0" />
            )}
          </div>
        </div>
      ))}

      <Button variant={"secondary"}>
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
