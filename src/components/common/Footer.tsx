import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Logo />
            <p className="max-w-[280px] text-sm leading-relaxed text-muted-foreground">
              Sua loja premium de tecnologia e estilo de vida. Oferecendo os
              melhores produtos com entrega rápida e segura.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              Categorias
            </h3>
            <ul className="space-y-4">
              {["Eletrônicos", "Moda", "Casa & Decoração", "Eletrodomésticos", "Beleza"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              Institucional
            </h3>
            <ul className="space-y-4">
              {["Sobre Nós", "Política de Privacidade", "Termos de Uso", "Trabalhe Conosco"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              Atendimento
            </h3>
            <ul className="space-y-4">
              {["Trocas e Devoluções", "Central de Ajuda", "Rastrear Pedido", "Contato"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-center text-xs text-muted-foreground md:text-left">
            © {currentYear} LUNIERE Shop. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/e/e1/Visa_Logo_2021.svg" alt="Visa" className="h-4 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/e/e2/Mastercard_Logo_2019.svg" alt="Mastercard" className="h-6 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/e/e6/Pix_Logo.svg" alt="Pix" className="h-5 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
          </div>
        </div>
      </div>
    </footer>
  );
}
