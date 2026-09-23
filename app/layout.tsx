import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontline AI, AI Receptionist for Home Service Businesses",
  description:
    "An AI receptionist that answers your business calls 24/7, handles common customer questions, qualifies service requests, and books appointments directly into your calendar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
