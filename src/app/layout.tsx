import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Uday Tamma | Software Engineer & Technical Program Manager",
    template: "%s | zeroleaf",
  },
  description:
    "Portfolio of Uday Tamma - Building AI-powered applications with expertise in technical program management, system design, and full-stack development.",
  keywords: [
    "Software Engineer",
    "Technical Program Manager",
    "TPM",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
    "React",
    "Next.js",
    "Python",
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
    title: "Uday Tamma | Software Engineer & Technical Program Manager",
    description:
      "Portfolio of Uday Tamma - Building AI-powered applications with expertise in technical program management, system design, and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Tamma | Software Engineer & Technical Program Manager",
    description:
      "Portfolio of Uday Tamma - Building AI-powered applications with expertise in technical program management, system design, and full-stack development.",
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
