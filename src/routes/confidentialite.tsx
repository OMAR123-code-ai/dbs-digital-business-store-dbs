import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/article";

export const Route = createFileRoute("/confidentialite")({
  component: Page,
});

function Page() {
  return (
    <Article
      title="Politique de confidentialité"
      body={[
        "Nous collectons uniquement les informations nécessaires au traitement de votre commande : nom, téléphone, adresse et e-mail.",
        "Ces données restent sur votre appareil pour le compte local, et ne sont pas revendues à des tiers.",
        "Le paiement est traité par DBS Payment (Orange Money, Moov Money, Wave). Nous ne stockons pas de codes secrets ni de PIN.",
        "Vous pouvez demander la suppression de vos informations enregistrées en vidant les données du navigateur ou en nous contactant.",
      ]}
    />
  );
}
