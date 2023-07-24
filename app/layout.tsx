import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Notes",
  description: "Notes!",
  applicationName: "Rodney Nuñez"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/notes'>Notes</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
