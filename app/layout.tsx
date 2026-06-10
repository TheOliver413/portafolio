import type { Metadata, Viewport } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oliver Borda | Full Stack Developer",
  description:
    "Portafolio profesional de Oliver Borda, Full Stack Developer especializado en React, Node.js y tecnologias modernas de desarrollo web.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "JavaScript",
    "Oliver Borda",
    "Portafolio",
  ],
  authors: [{ name: "Oliver Borda" }],
  creator: "Oliver Borda",
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Oliver Borda | Full Stack Developer",
    description:
      "Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.",
    siteName: "Oliver Borda Portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: "#00d4e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${spaceMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
