import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Antigravity Shop",
    default: "Antigravity Shop | E-commerce Premium",
  },
  description: "E-commerce premium desenvolvido por Antigravity. Desktops, notebooks, celulares e acessórios com a melhor tecnologia.",
  keywords: ["e-commerce", "tecnologia", "antigravity", "loja", "compras", "eletrônicos"],
  authors: [{ name: "Antigravity Team" }],
  creator: "Antigravity",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://antigravity.shop",
    title: "Antigravity Shop | E-commerce Premium",
    description: "E-commerce premium focado na melhor experiência de usuário.",
    siteName: "Antigravity Shop",
    images: [
      {
        url: "https://antigravity.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antigravity Shop Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antigravity Shop | E-commerce Premium",
    description: "E-commerce premium focado na melhor experiência de usuário.",
    images: ["https://antigravity.shop/twitter-image.jpg"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/30">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
