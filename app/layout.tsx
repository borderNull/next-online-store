import "./globals.css";
import "toaster-js/default.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.metadata.main.name,
  description: siteConfig.metadata.main.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col items-center px-4 py-2">{children}</div>
      </body>
    </html>
  );
}
