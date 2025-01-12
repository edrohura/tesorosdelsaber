import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

// Cargar fuentes como variables CSS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased`} // Aplica las variables como clases
      >
        {children}
      </body>
    </html>
  );
}
