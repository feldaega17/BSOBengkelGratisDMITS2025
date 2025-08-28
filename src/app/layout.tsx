import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Bengkel Demits",
    template: "%s | Bengkel Demits",
  },
  icons: {
    icon: "/favicon.ico", // Path in the public folder
  },
  description: "Bengkel Demits - Layanan Perbaikan Kendaraan Gratis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
