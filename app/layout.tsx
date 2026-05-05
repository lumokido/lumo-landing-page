import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingBottom from "./components/FloatingBottom";
import Header from "./components/Header";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumo App",
  description: "School Management System",
  icons: {
    icon: "/bottom.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumo App",
    description: "School Management System",
    images: ["/og-image.png"],
  },
  openGraph: {
    title: "Lumo App",
    description: "School Management System",
    images: ["/og-image.png"],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <FloatingBottom />
      </body>
    </html>
  );
}
