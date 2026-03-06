import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chime - Call Log Monitor",
  description: "Monitor, record, and manage call activity remotely. Secure cloud storage and real-time access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased selection:bg-electric-blue selection:text-navy`}
      >
        {children}
      </body>
    </html>
  );
}
