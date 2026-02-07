import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Uday Tamma | Principal TPM | AI & Enterprise Systems",
    template: "%s | zeroleaf",
  },
  description:
    "Uday Tamma - Principal TPM driving AI adoption, platform reliability, and enterprise transformation across 5M+ subscriber environments.",
  keywords: [
    "Technical Program Manager",
    "Principal TPM",
    "TPM",
    "AI",
    "Platform Reliability",
    "Enterprise Transformation",
    "System Design",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Uday Tamma" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeroleaf.dev",
    siteName: "zeroleaf",
    title: "Uday Tamma | Principal TPM | AI & Enterprise Systems",
    description:
      "Uday Tamma - Principal TPM driving AI adoption, platform reliability, and enterprise transformation across 5M+ subscriber environments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Tamma | Principal TPM | AI & Enterprise Systems",
    description:
      "Uday Tamma - Principal TPM driving AI adoption, platform reliability, and enterprise transformation across 5M+ subscriber environments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
