import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eazy Coffee — Coffee Shop Jombang | Est. 2011",
  description:
    "Eazy Coffee adalah coffee shop terbaik di Jombang. Nikmati kopi berkualitas, quesadilla, loaded fries, dan suasana cozy. Buka setiap hari 11.00–21.00. Layanan Delivery & Coffee Catering tersedia.",
  keywords: [
    "Coffee shop Jombang",
    "Tempat nongkrong di Jombang",
    "Eazy Coffee",
    "Cafe Jombang",
    "Kopi Jombang",
    "Coffee Catering Jombang",
    "tempat meeting Jombang",
  ],
  openGraph: {
    title: "Eazy Coffee — Ngopi di Jombang? #eazycoffee Saja.",
    description:
      "Coffee shop cozy di Jombang buka 11.00–21.00. Menu andalan: Es Kopi Susu, Lychee Tea, Quesadilla, Loaded Fries. Order via GoFood/GrabFood!",
    url: "https://eazycoffee.vercel.app",
    siteName: "Eazy Coffee",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Eazy Coffee — Coffee Shop Jombang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eazy Coffee — Coffee Shop Jombang",
    description: "Ngopi di Jombang? #eazycoffee Saja. Est. 2011.",
    images: ["/hero-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
