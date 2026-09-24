import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_NUMBER, WHATSAPP_TEXT } from "@/data/catalog";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-1 text-sm text-muted">Service client disponible 7j/7 — 24h/24.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Info icon={Phone} title="Téléphone / WhatsApp" text="+226 70 00 00 00" />
          <Info icon={Mail} title="E-mail" text="contact@digitalbusinessstore.africa" />
          <Info icon={MapPin} title="Siège" text="Ouagadougou, Burkina Faso — Afrique de l'Ouest" />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
            className="inline-flex rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white no-underline"
          >
            Écrire sur WhatsApp
          </a>
        </div>
        {sent ? (
          <p className="rounded-xl border border-line bg-surface p-6 text-sm">
            Merci, votre message a bien été transmis. Notre équipe vous répondra dans les plus brefs délais.
          </p>
        ) : (
          <form
            className="space-y-3 rounded-xl border border-line bg-surface p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required placeholder="Nom" className="h-10 w-full rounded-md border border-line px-3 text-sm" />
            <input required type="email" placeholder="E-mail" className="h-10 w-full rounded-md border border-line px-3 text-sm" />
            <input placeholder="Téléphone" className="h-10 w-full rounded-md border border-line px-3 text-sm" />
            <textarea required rows={5} placeholder="Votre message" className="w-full rounded-md border border-line px-3 py-2 text-sm" />
            <button type="submit" className="w-full rounded-full bg-gold py-2.5 text-sm font-semibold text-gold-fg">
              Envoyer
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Info({ icon: Icon, title, text }: { icon: typeof Phone; title: string; text: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-line bg-surface p-4">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-soft text-gold-deep">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-muted">{text}</p>
      </div>
    </div>
  );
}
