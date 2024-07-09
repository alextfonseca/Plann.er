import { useState } from "react";

// components
import { ConfirmTripModal } from "../components/Confirm-trip-modal";
import { DestinationAndDateStep } from "../components/Destination-and-data-step";
import { InviteGuestsModal } from "../components/Invite-guests-modal";
import { InviteGuestsStep } from "../components/Invite-guests-step";

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] =
    useState<boolean>(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function handleAddEmailToInvite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = event.currentTarget.email.value;

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite((prev) => [...prev, email]);

    event.currentTarget.reset();
  }

  function handleRemoveEmailToInvite(email: string) {
    setEmailsToInvite((prev) => prev.filter((item) => item !== email));
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-[720px] w-full  text-center space-y-10">
        <div className="flex items-center flex-col gap-3">
          <img src={"/logo.svg"} alt={""} />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            setIsGuestsInputOpen={setIsGuestsInputOpen}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              isGuestsModalOpen={isGuestsModalOpen}
              setIsConfirmTripModalOpen={setIsConfirmTripModalOpen}
              setIsGuestsModalOpen={setIsGuestsModalOpen}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem plea plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="/" className="text-zinc-300 underline">
            {" "}
            termos de uso
          </a>{" "}
          e{" "}
          <a href="/" className="text-zinc-300 underline">
            política de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          handleAddEmailToInvite={handleAddEmailToInvite}
          handleRemoveEmailToInvite={handleRemoveEmailToInvite}
          setIsGuestsModalOpen={setIsGuestsModalOpen}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          setIsConfirmTripModalOpen={setIsConfirmTripModalOpen}
        />
      )}
    </div>
  );
}
