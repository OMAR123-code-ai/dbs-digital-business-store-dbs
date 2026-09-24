import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "Digital Business Store";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Digital Business Store — l'innovation au service de votre quotidien. Livraison rapide dans toute l'Afrique, paiement Orange Money, Moov Money et Wave.",
      },
      { name: "theme-color", content: "#0B0C10" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Page introuvable</h1>
      <p className="mt-2 text-sm text-muted">Ce lien n'existe pas ou a été déplacé.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-fg no-underline">
        Retour à l'accueil
      </Link>
    </div>
  );
}

function Root() {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#0b0c10",
                color: "#fff",
                border: "1px solid #c9a227",
              },
            }}
          />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
