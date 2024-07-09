import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  UserRoundPlus,
  X,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false);
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
          <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 transition-all "
                onClick={() => setIsGuestsInputOpen(false)}
              >
                Alterar local e data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-all "
                onClick={() => setIsGuestsInputOpen(true)}
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow gap-3">
              <button
                type="button"
                className="flex items-center gap-2 flex-1 text-left hover:text-zinc-300 transition-all"
                onClick={() => setIsGuestsModalOpen(!isGuestsModalOpen)}
              >
                <UserRoundPlus className="h-5 w-5 text-zinc-400" />
                <span className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1">
                  Quem estará na viagem
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-all">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow bg-zinc-900 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecionar convidados</h2>

              <button type="button" onClick={() => setIsGuestsModalOpen(false)}>
                <X className="size-5 text-zinc-400 hover:text-zinc-300 transition-all" />
              </button>
            </div>

            <p className="text-sm text-zinc-400 mt-2">
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
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

              <button
                type="submit"
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-all"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
