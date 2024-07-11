import { Calendar, MapPin, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/axios";
import { Button } from "./Button";

interface ITripDetails {
  destination: string;
  ends_at: string;
  id: string;
  is_confirmed: boolean;
  starts_at: string;
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams();

  const [tripDetails, setTripDetails] = useState<ITripDetails | undefined>(
    {} as ITripDetails,
  );

  async function getTripDetailsById() {
    try {
      const { data } = await api.get(`/trips/${tripId}`);
      setTripDetails(data.trip);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTripDetailsById();
  }, [tripId]);

  // const displayedDate = tripDetails
  //   ? format(tripDetails.starts_at, "d' de 'LLL")
  //       .concat(" até ")
  //       .concat(format(tripDetails.ends_at, "d' de 'LLL"))
  //   : null;

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{tripDetails?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{""}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant={"secondary"}>
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
