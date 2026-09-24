import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/article";

export const Route = createFileRoute("/retours")({
  component: Page,
});

function Page() {
  return (
    <Article
      title="Retours & échanges"
      body={[
        "Vous disposez de 7 jours après réception pour demander un retour.",
        "L'article doit être non utilisé, avec ses accessoires et son emballage d'origine.",
        "Les produits défectueux sont échangés ou remboursés intégralement via Orange Money, Moov Money ou Wave.",
        "Contactez le service client WhatsApp pour ouvrir un dossier de retour.",
      ]}
    />
  );
}
