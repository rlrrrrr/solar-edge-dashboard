import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {ManifestLink, useSWEffect} from "@remix-pwa/sw";
import Navbar from "components/ui/navbar"
import Footer from "components/ui/footer";

import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  useSWEffect()
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <ManifestLink manifestUrl="/manifest.webmanifest" />
        <Links />
        <title>Magasin Connecté 4.0</title>
      </head>
      <body>
        <Navbar/>
        <div className="px-5 sm:px-10">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
        <Footer/>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}