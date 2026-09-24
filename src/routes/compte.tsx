import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useShop } from "@/store/shop";

export const Route = createFileRoute("/compte")({
  component: ComptePage,
});

function ComptePage() {
  const setOpen = useShop((s) => s.setAccountOpen);
  useEffect(() => {
    setOpen(true);
  }, [setOpen]);
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Votre compte</h1>
      <p className="mt-2 text-sm text-muted">
        Le panneau compte s'ouvre à droite. Renseignez vos informations pour accélérer le paiement et consulter vos
        commandes.
      </p>
    </div>
  );
}
