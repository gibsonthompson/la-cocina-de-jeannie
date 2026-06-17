import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
});

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "La Cocina de Jeannie | North Georgia Catering",
  description:
    "Latin & American catering for weddings, showers, and celebrations across North Georgia. Homemade flavors, con sabor & love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}
