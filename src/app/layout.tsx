import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spesial Mobil Bekas",
  description: "Anugerah Utama Motor, Kami Menyediakan Mobil Bekas Terbaik",
  openGraph: {
    title: "Showroom Car",
    description:
      "Platform beli mobil bekas terbaik dengan fitur showroom online.",
    url: "https://showroomcar-aum.vercel.app",
    siteName: "Showroom Car",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="7ni_efTx6IWhf99eA1oH3rxH8-LWlNhebP7dNzZyOEk"
        />
      </head>
      <body
        className={`${geistSans.variable} scroll-smooth ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
