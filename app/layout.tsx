import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liberdade Sem Estoque - Fature 5 mil reais em 30 dias com Dropshipping",
  description: "Aprenda a criar seu negócio online no modelo dropshipping sem estoque. Método comprovado para faturar seus primeiros 5 mil reais em 30 dias vendendo na Amazon, Mercado Livre e Shopee.",
  keywords: "dropshipping, negócio online, e-commerce, amazon, mercado livre, shopee, renda extra, trabalhar de casa",
  icons: {
    icon: [
      { url: "/faviconliberdade.png" },
      { url: "/faviconliberdade.png", sizes: "32x32", type: "image/png" },
      { url: "/faviconliberdade.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/faviconliberdade.png",
    apple: "/faviconliberdade.png",
  },
  openGraph: {
    title: "Liberdade Sem Estoque",
    description: "Fature 5 mil reais em 30 dias com dropshipping",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/faviconliberdade.png" type="image/png" />
        <link rel="shortcut icon" href="/faviconliberdade.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function importHotmart(){ 
                var imported = document.createElement('script'); 
                imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
                document.head.appendChild(imported);
              } 
              importHotmart();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
