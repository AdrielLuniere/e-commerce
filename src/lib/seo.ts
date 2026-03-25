import { Metadata } from "next";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export function constructMetadata({
  title,
  description = "E-commerce premium desenvolvido por Antigravity. Encontre os melhores eletrônicos e acessórios.",
  image = "https://antigravity.shop/og-image.jpg",
  url = "https://antigravity.shop",
}: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Antigravity Shop",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
