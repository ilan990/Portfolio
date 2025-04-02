import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Telugu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilan Assouline • Architecte Web & Développeur Full Stack",
  description: "Architecte web passionné qui construit des ponts entre votre vision et le monde digital — spécialiste Symfony, PHP, React et Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anekTelugu.variable} font-sans h-full bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
