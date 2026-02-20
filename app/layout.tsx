import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "CloudCat | Web3 Landing",
  description: "CloudCat is a community-driven meme token floating above market noise."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${barlowCondensed.variable} font-[var(--font-barlow-condensed)]`}>{children}</body>
    </html>
  );
}
