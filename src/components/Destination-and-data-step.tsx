import "react-day-picker/dist/style.css";

import { format } from "date-fns";
import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { Button } from "./Button";

interface IDestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  setIsGuestsInputOpen: (value: boolean) => void;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  setEventStartAndEndDate: React.Dispatch<
    React.SetStateAction<DateRange | undefined>
  >;

  eventStartAndEndDate: DateRange | undefined;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  setIsGuestsInputOpen,
  setDestination,
  setEventStartAndEndDate,
  eventStartAndEndDate,
}: IDestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const displayedDate =
    eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to
      ? format(eventStartAndEndDate.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDate.to, "d' de 'LLL"))
      : "Quando?";

  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="h-5 w-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestsInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        className="flex items-center gap-2 text-left w-[250px]"
        disabled={isGuestsInputOpen}
        onClick={() => setIsDatePickerOpen(true)}
      >
        <Calendar className="h-5 w-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow bg-zinc-900 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecione a data</h2>

              <button type="button" onClick={() => setIsDatePickerOpen(false)}>
                <X className="size-5 text-zinc-400 hover:text-zinc-300 transition-all" />
              </button>
            </div>

            <DayPicker
              mode={"range"}
              selected={eventStartAndEndDate}
              onSelect={setEventStartAndEndDate}
            />
          </div>
        </div>
      )}

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
