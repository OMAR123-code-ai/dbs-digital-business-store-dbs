import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FAQS } from "@/data/catalog";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

function FaqPage() {
  const extra = [
    ...FAQS,
    {
      q: "Livrez-vous hors du Burkina Faso ?",
      a: "Oui. Nous livrons dans toute l'Afrique de l'Ouest (Côte d'Ivoire, Mali, Niger, Togo, Bénin, Sénégal, Ghana, etc.). Les délais varient de 3 à 7 jours ouvrés.",
    },
    {
      q: "Les produits sont-ils garantis ?",
      a: "Les produits électroniques bénéficient d'une garantie constructeur ou DBS de 3 à 12 mois selon l'article. Les détails figurent sur la fiche produit.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold">Questions fréquentes</h1>
      <div className="mt-6 rounded-xl border border-line bg-surface">
        {extra.map((f, idx) => (
          <div key={f.q} className="border-b border-line px-5 last:border-0">
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left text-sm font-medium"
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              {f.q}
              <ChevronDown size={16} className={open === idx ? "rotate-180" : ""} />
            </button>
            {open === idx ? <p className="pb-4 text-sm leading-relaxed text-muted">{f.a}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
