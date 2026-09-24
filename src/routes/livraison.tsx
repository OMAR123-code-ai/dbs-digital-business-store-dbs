import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/article";

export const Route = createFileRoute("/livraison")({
  component: Page,
});

function Page() {
  return (
    <Article
      title="Livraison"
      body={[
        "Nous livrons partout au Burkina Faso et dans toute l'Afrique de l'Ouest.",
        "Les frais de livraison s'élèvent à 5 000 FCFA. Ils sont offerts dès 400 000 FCFA d'achat.",
        "Délais indicatifs : 24–72 h à Ouagadougou et Bobo-Dioulasso, 3–7 jours pour les autres destinations.",
        "Vous recevez un numéro de suivi par SMS et WhatsApp dès l'expédition.",
      ]}
    />
  );
}
