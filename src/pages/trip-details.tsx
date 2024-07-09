import { Plus } from "lucide-react";
import { useState } from "react";

//components
import { Activities } from "../components/Activities";
import { Button } from "../components/Button";
import { CreateActivityModal } from "../components/Create-activity-modal";
import { DestinationAndDateHeader } from "../components/Destination-and-date-header";
import { Guests } from "../components/Guests";
import { ImportantLinks } from "../components/Important-links";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  return (
    <div className="max-w-[1100px] px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={() => setIsCreateActivityModalOpen(true)}>
              <Plus className="size-5" />
              Cadastrar atividades
            </Button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-400" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          setIsCreateActivityModalOpen={setIsCreateActivityModalOpen}
        />
      )}
    </div>
  );
}
