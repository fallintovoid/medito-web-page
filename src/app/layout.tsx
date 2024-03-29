import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/modules/Layout";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medito Fundrising",
  description: "Find where you can help",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
