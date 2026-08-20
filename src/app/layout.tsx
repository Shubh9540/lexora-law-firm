import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lexora Law Firm",
  description: "Defending Rights. Delivering Justice. Achieving Results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
