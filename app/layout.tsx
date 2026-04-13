import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Angela Lin · Product Designer",
  description:
    "Angela Lin is a Product Designer based in Boston, MA — bridging business, design, and research to craft human-centered products.",
  openGraph: {
    title: "Angela Lin · Product Designer",
    description:
      "Designing experiences that matter. AI platforms, design systems, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
