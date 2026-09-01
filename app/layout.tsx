import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desert Store",
  description: "Catalog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
