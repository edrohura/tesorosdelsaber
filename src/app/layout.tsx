import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

// Carga las fuentes como variables CSS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const caveatFont = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat', // Asegúrate de que este nombre coincida con el que usas en el body
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveatFont.variable} antialiased`} // Aplica la clase de la variable de fuente
      >
        {children}
      </body>
    </html>
  );
}
