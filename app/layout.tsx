import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "GokuCat | Meme Token Landing",
  description: "GokuCat is a community-driven meme token floating above market noise."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${spaceGrotesk.variable} font-[var(--font-sora)]`}>
        {children}
      </body>
    </html>
  );
}
