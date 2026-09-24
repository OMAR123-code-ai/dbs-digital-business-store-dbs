import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useShop } from "@/store/shop";

export const Route = createFileRoute("/panier")({
  component: PanierPage,
});

function PanierPage() {
  const open = useShop((s) => s.openCart);
  useEffect(() => {
    open();
  }, [open]);
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Panier</h1>
      <p className="mt-2 text-sm text-muted">Votre panier s'ouvre sur la droite. Ajoutez des articles depuis la boutique.</p>
    </div>
  );
}
