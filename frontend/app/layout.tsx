// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EatByZewo",
  description: "Restaurant ordering app built with Next.js and Flask.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
