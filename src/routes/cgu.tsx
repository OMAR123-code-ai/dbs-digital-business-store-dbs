import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/article";

export const Route = createFileRoute("/cgu")({
  component: Page,
});

function Page() {
  return (
    <Article
      title="Conditions générales"
      body={[
        "Les présentes conditions régissent les ventes conclues sur Digital Business Store.",
        "Les prix sont indiqués en Francs CFA (XOF), frais de livraison précisés au panier.",
        "La commande est confirmée après validation du paiement mobile via DBS Payment.",
        "DBS se réserve le droit de refuser une commande en cas de rupture, d'erreur manifeste de prix ou de suspicion de fraude.",
        "Le droit applicable est celui du Burkina Faso. En cas de litige, une solution amiable est recherchée en priorité.",
      ]}
    />
  );
}
