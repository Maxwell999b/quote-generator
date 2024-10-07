import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quote Application",
  description:
    "The Quote Generator is a web application that provides users with random quotes based on selected categories. Users can generate a new quote by clicking a button.",
  keywords: ["Quote", "React", "TypeScript", "Multiple Category", "happiness"],
  authors: [{ name: "Maxwell999b" }],
  creator: "Maxwell999b",
  publisher: "Quote Application",
  metadataBase: new URL("https://quote-generator-pi-snowy.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quote-generator-pi-snowy.vercel.app",
    title: "React Quote Application",
    description:
      "Get random quotes to match your vibe. Start your day with a spark of inspiration that's uniquely yours!",
    siteName: "React Quote Application",
    images: [
      {
        url: "https://quote-generator-pi-snowy.vercel.app/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "React Quote Application",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Quote Application",
    description:
      "Get random quotes to match your vibe. Start your day with a spark of inspiration that's uniquely yours!",
    images: ["https://quote-generator-pi-snowy.vercel.app/android-chrome-512x512.png"],
    creator: "@Maxwell999b",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png" },
      { url: "/favicon-16x16.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    shortcut: ["/favicon-16x16.png"],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
