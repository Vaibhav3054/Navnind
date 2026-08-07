import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navnind.com"),
  title: {
    default: "NAVNIND | Premium Stationery",
    template: "%s | NAVNIND"
  },
  description: "Premium editorial quality stationery crafted for the minimal aesthetic. Manufactured by Uttam Industries.",
  openGraph: {
    title: "NAVNIND | Premium Stationery",
    description: "Premium editorial quality stationery crafted for the minimal aesthetic. Manufactured by Uttam Industries.",
    url: "https://navnind.com",
    siteName: "NAVNIND",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVNIND | Premium Stationery",
    description: "Premium editorial quality stationery crafted for the minimal aesthetic.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden min-h-full flex flex-col">
        <CustomCursor />
        <LenisProvider>
          <Header />
          <main className="flex-1 mt-[100px]">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
